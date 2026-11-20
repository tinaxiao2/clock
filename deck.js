/* Shortlist deck: scroll for more, swipe right to keep, left to pass.
   Picks are saved in this browser only (localStorage). */
(function () {
  var WATCHES = window.WATCHES || [], META = window.WATCH_META || {};
  var byId = {}; WATCHES.forEach(function (w) { byId[w.id] = w; });
  var KEY = 'clock.shortlist.v1';
  var $ = function (id) { return document.getElementById(id); };

  // ---------- state ----------
  var state = { s: {}, order: [], seenHint: false };
  try {
    var raw = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (raw && raw.s) state = raw;
  } catch (e) {}
  // drop anything that no longer exists in the list
  Object.keys(state.s).forEach(function (id) { if (!byId[id]) delete state.s[id]; });
  state.order = (state.order || []).filter(function (id) { return state.s[id] === 'k'; });
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
  function kept() { return state.order.map(function (id) { return byId[id]; }); }
  function passed() { return WATCHES.filter(function (w) { return state.s[w.id] === 'p'; }); }
  function open_() { return WATCHES.filter(function (w) { return !state.s[w.id]; }); }
  function setStatus(id, v) {
    state.order = state.order.filter(function (x) { return x !== id; });
    if (v) state.s[id] = v; else delete state.s[id];
    if (v === 'k') state.order.push(id);
    save();
  }

  // ---------- formatting ----------
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function usd(n) { return '$' + Number(n).toLocaleString('en-US'); }
  function priceLine(w) {
    var p = w.price || {};
    if (p.text) return { main: p.text, sub: p.sub || '' };
    if (p.lead === 'new' && p.newUsd) return { main: usd(p.newUsd), sub: 'new' };
    if (p.preLow) return { main: usd(p.preLow) + '–' + usd(p.preHigh).slice(1), sub: 'pre-owned' };
    if (p.newUsd) return { main: usd(p.newUsd), sub: 'new' };
    return { main: '—', sub: '' };
  }
  function sizeLine(w) {
    var s = w.size;
    return s.shape === 'round' ? s.w + ' mm' : s.w + ' × ' + (s.l2l || s.h) + ' mm';
  }
  var FIT = { yes: ['ok', 'Fit ✓'], edge: ['mid', 'Fit ~'], no: ['warn', 'Fit ✕'] };
  var BUD = { yes: ['ok', 'Budget ✓'], stretch: ['mid', 'Budget ~'], no: ['warn', 'Budget ✕'] };
  var METALS = { gold: 'Solid gold', 'two-tone': 'Two-tone', steel: 'Steel', titanium: 'Titanium', vermeil: 'Gold vermeil', plated: 'Gold-plated' };
  function tags(w) {
    var v = w.verdict || {}, f = FIT[v.fit] || FIT.yes, b = BUD[v.budget] || BUD.yes;
    return '<div class="tags"><span class="tag ' + f[0] + '">' + f[1] + '</span><span class="tag ' + b[0] + '">' + b[1] + '</span>' +
      '<span class="tag plain">' + esc(w.movementShort || w.movement) + '</span><span class="tag plain">' + esc(METALS[w.metal] || w.metal) + '</span>' + (w.flag ? '<span class="tag warn">' + esc(w.flag) + '</span>' : '') + '</div>';
  }

  // ---------- routing ----------
  var views = { deck: $('view-deck'), picks: $('view-picks') };
  function route() {
    var h = (location.hash || '').replace('#', '');
    var v = views[h] ? h : 'home';
    Object.keys(views).forEach(function (k) { views[k].hidden = k !== v; });
    document.body.classList.toggle('app-open', v !== 'home');
    if (v === 'deck') renderDeck();
    if (v === 'picks') renderPicks();
    if (v === 'home') closeDetail();
  }
  function go(name) {
    if (('#' + name) === location.hash) return route();
    try { location.hash = name; } catch (e) {}
    route();
  }
  window.addEventListener('hashchange', route);
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-go]');
    if (t) { e.preventDefault(); go(t.getAttribute('data-go')); }
  });

  // ---------- deck ----------
  var feed = $('feed');
  function cardHTML(w) {
    var p = priceLine(w);
    return '<div class="card" data-id="' + w.id + '">' +
      '<span class="stamp k">Keep</span><span class="stamp p">Pass</span>' +
      '<div class="art">' + window.drawWatch(w) + '</div>' +
      '<div class="meta"><div class="brand">' + esc(w.brand) + '</div><h3>' + esc(w.name) + '</h3>' +
      '<div class="variant">' + esc(w.variant) + ' · ' + sizeLine(w) + '</div>' +
      '<p class="pitch">' + esc(w.pitch) + '</p>' + tags(w) +
      '<div class="price">' + p.main + '<small>' + p.sub + '</small></div></div>' +
      '<div class="acts"><button class="act round pass" data-act="p" aria-label="Pass">✕</button>' +
      '<button class="act more" data-act="more">Details &amp; styling</button>' +
      '<button class="act round keep" data-act="k" aria-label="Keep">♥</button></div></div>';
  }
  function endHTML() {
    var left = open_().length, k = kept().length;
    return '<div class="card endcard"><span class="eyebrow">' + (left ? 'End of the list' : 'All decided') + '</span>' +
      '<h3>' + (left ? left + ' still undecided' : (k ? k + ' on your shortlist' : 'Nothing kept yet')) + '</h3>' +
      '<p>' + (left ? 'Scroll back up to decide on the rest, or see what you’ve kept so far.' : 'Every watch has a verdict. Rank your keeps, or bring back a pass.') + '</p>' +
      '<button class="cta" data-go="picks">Open my shortlist</button>' +
      (passed().length ? '<button class="linkbtn" id="reviewPassed">Bring back the ' + passed().length + ' I passed</button>' : '') + '</div>';
  }
  function updateBar() {
    var left = open_().length;
    $('dkCount').textContent = left ? left + ' to go' : 'All decided';
    $('dkKept').textContent = kept().length;
  }
  function renderDeck(focusId) {
    var html = open_().map(function (w, i) {
      return '<section class="slot">' + cardHTML(w) + '</section>';
    }).join('') + '<section class="slot" id="endSlot">' + endHTML() + '</section>';
    feed.innerHTML = html;
    if (!state.seenHint && open_().length) {
      var first = feed.querySelector('.card');
      first.insertAdjacentHTML('afterbegin', '<span class="hint"><b>Swipe → keep · ← pass · scroll ↓ for more</b></span>');
    }
    updateBar();
    if (focusId) {
      var c = feed.querySelector('.card[data-id="' + focusId + '"]');
      if (c) { feed.scrollTop = c.parentNode.offsetTop; c.classList.add('enter'); }
    }
  }
  function refreshEnd() { var e = $('endSlot'); if (e) e.innerHTML = endHTML(); updateBar(); }

  function decide(card, v) {
    var id = card.getAttribute('data-id'), w = byId[id];
    if (!w || card.dataset.gone) return;
    card.dataset.gone = '1';
    state.seenHint = true;
    setStatus(id, v);
    card.classList.add('snap');
    card.style.transform = 'translateX(' + (v === 'k' ? 130 : -130) + '%) rotate(' + (v === 'k' ? 14 : -14) + 'deg)';
    card.style.opacity = '0';
    card.querySelector('.stamp.' + v).style.opacity = 1;
    setTimeout(function () {
      var slot = card.parentNode, next = slot.nextElementSibling;
      if (slot.parentNode) slot.parentNode.removeChild(slot);
      if (next) { var nc = next.querySelector('.card'); if (nc) { nc.classList.remove('enter'); void nc.offsetWidth; nc.classList.add('enter'); } }
      refreshEnd();
    }, 260);
    toast((v === 'k' ? 'Kept' : 'Passed') + ' · ' + w.name, function () {
      setStatus(id, null);
      if (!views.deck.hidden) renderDeck(id); else if (!views.picks.hidden) renderPicks();
    });
  }

  // swipe handling: vertical scroll stays native (touch-action: pan-y)
  var drag = null;
  feed.addEventListener('pointerdown', function (e) {
    var card = e.target.closest('.card');
    if (!card || card.classList.contains('endcard') || e.target.closest('button,a') || (e.pointerType === 'mouse' && e.button !== 0)) return;
    drag = { card: card, x: e.clientX, y: e.clientY, t: Date.now(), id: e.pointerId, on: false, dx: 0 };
    card.classList.remove('snap', 'enter');
  });
  feed.addEventListener('pointermove', function (e) {
    if (!drag || e.pointerId !== drag.id) return;
    var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (!drag.on) {
      if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy) * 1.3) {
        drag.on = true;
        try { drag.card.setPointerCapture(e.pointerId); } catch (err) {}
      } else return;
    }
    drag.dx = dx;
    drag.card.style.transform = 'translateX(' + dx + 'px) rotate(' + (dx / 22) + 'deg)';
    var a = Math.min(1, Math.abs(dx) / 90);
    drag.card.querySelector('.stamp.k').style.opacity = dx > 0 ? a : 0;
    drag.card.querySelector('.stamp.p').style.opacity = dx < 0 ? a : 0;
  });
  function endDrag(e, cancelled) {
    if (!drag || (e && e.pointerId !== drag.id)) return;
    var d = drag; drag = null;
    if (!d.on) {
      // a clean tap opens the detail sheet
      if (!cancelled && e && Math.abs(e.clientX - d.x) < 8 && Math.abs(e.clientY - d.y) < 8 && Date.now() - d.t < 450) openDetail(d.card.getAttribute('data-id'));
      return;
    }
    var fast = Math.abs(d.dx) / Math.max(1, Date.now() - d.t) > 0.55;
    if (!cancelled && (Math.abs(d.dx) > 95 || (fast && Math.abs(d.dx) > 40))) return decide(d.card, d.dx > 0 ? 'k' : 'p');
    d.card.classList.add('snap');
    d.card.style.transform = '';
    d.card.querySelector('.stamp.k').style.opacity = 0;
    d.card.querySelector('.stamp.p').style.opacity = 0;
  }
  feed.addEventListener('pointerup', function (e) { endDrag(e, false); });
  feed.addEventListener('pointercancel', function (e) { endDrag(e, true); });

  feed.addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]');
    if (b) {
      var card = b.closest('.card'), act = b.getAttribute('data-act');
      if (act === 'more') openDetail(card.getAttribute('data-id')); else decide(card, act);
      return;
    }
    if (e.target.id === 'reviewPassed') {
      passed().forEach(function (w) { setStatus(w.id, null); });
      renderDeck(); feed.scrollTop = 0;
    }
  });

  function currentCard() {
    var i = Math.round(feed.scrollTop / Math.max(1, feed.clientHeight));
    var slot = feed.children[i];
    var c = slot && slot.querySelector('.card');
    return c && !c.classList.contains('endcard') ? c : null;
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') return closeDetail();
    if (views.deck.hidden || !$('detail').hidden) return;
    var c = currentCard();
    if (e.key === 'ArrowRight' && c) decide(c, 'k');
    else if (e.key === 'ArrowLeft' && c) decide(c, 'p');
    else if (e.key === 'Enter' && c && document.activeElement === document.body) openDetail(c.getAttribute('data-id'));
  });

  // ---------- toast ----------
  var toastTimer, toastUndo;
  function toast(msg, undo) {
    var t = $('toast');
    t.querySelector('span').textContent = msg;
    t.querySelector('button').hidden = !undo;
    toastUndo = undo; t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.hidden = true; }, 5000);
  }
  $('toast').querySelector('button').addEventListener('click', function () {
    $('toast').hidden = true;
    if (toastUndo) toastUndo();
  });

  // ---------- picks ----------
  function renderPicks() {
    var k = kept(), p = passed(), left = open_().length, h = '';
    h += '<span class="eyebrow">The main watch</span><h2>My shortlist</h2>';
    h += '<p>' + (k.length ? 'Ranked by you. Tap a watch for the full detail; use the arrows to reorder.' : 'Nothing here yet.') + '</p>';
    if (!k.length) h += '<div class="empty">Swipe right on a watch to keep it.<br><button class="cta" data-go="deck" style="margin-top:18px">' + (left ? 'Back to the watches' : 'Review the list') + '</button></div>';
    h += '<div class="rows">' + k.map(function (w, i) {
      var pr = priceLine(w);
      return '<div class="row" data-id="' + w.id + '"><span class="rank">' + (i + 1) + '</span><div class="thumb">' + window.drawWatch(w, { wrist: false }) + '</div>' +
        '<div><div class="brand">' + esc(w.brand) + '</div><h3>' + esc(w.name) + '</h3><div class="sub">' + esc(w.variant) + '<br>' + pr.main + ' ' + pr.sub + '</div><button class="rm" data-rm="1">Remove</button></div>' +
        '<div class="ctl"><button data-mv="-1" aria-label="Move up"' + (i === 0 ? ' disabled' : '') + '>↑</button><button data-mv="1" aria-label="Move down"' + (i === k.length - 1 ? ' disabled' : '') + '>↓</button></div></div>';
    }).join('') + '</div>';
    if (k.length) {
      h += '<div style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap"><button class="ghost" id="copyBtn">Copy as text</button>' +
        (left ? '<button class="ghost" data-go="deck">' + left + ' more to see</button>' : '') + '</div><div id="copyOut"></div>';
    }
    if (p.length) {
      h += '<div class="sechead"><span class="eyebrow">Passed · ' + p.length + '</span></div><div class="rows">' + p.map(function (w) {
        return '<div class="row passed" data-id="' + w.id + '"><div class="thumb">' + window.drawWatch(w, { wrist: false }) + '</div>' +
          '<div><div class="brand">' + esc(w.brand) + '</div><h3>' + esc(w.name) + '</h3><div class="sub">' + esc(w.variant) + '</div></div>' +
          '<button class="ghost" data-restore="1">Restore</button></div>';
      }).join('') + '</div>';
    }
    h += '<p class="fine">Your picks are saved in this browser on this device. Use “Copy as text” to keep a backup.' +
      (META.asOf ? ' Prices checked ' + esc(META.asOf) + '; pre-owned prices move, so treat them as a guide.' : '') + '</p>' + (META.note ? '<p class="fine">' + esc(META.note) + '</p>' : '');
    $('picksBody').innerHTML = h;
    $('pkCount').textContent = k.length ? k.length + ' kept' : '';
  }
  function shortlistText() {
    return 'My watch shortlist\n' + kept().map(function (w, i) {
      var pr = priceLine(w);
      return (i + 1) + '. ' + w.brand + ' ' + w.name + ' (' + w.variant + ', ' + sizeLine(w) + ') · ' + pr.main + ' ' + pr.sub + (w.refs && w.refs.length ? ' · refs: ' + w.refs.join(', ') : '');
    }).join('\n');
  }
  $('picksBody').addEventListener('click', function (e) {
    var row = e.target.closest('.row'), id = row && row.getAttribute('data-id');
    if (e.target.closest('[data-mv]')) {
      var dir = +e.target.closest('[data-mv]').getAttribute('data-mv'), i = state.order.indexOf(id), j = i + dir;
      if (j >= 0 && j < state.order.length) { state.order.splice(i, 1); state.order.splice(j, 0, id); save(); renderPicks(); }
      return;
    }
    if (e.target.closest('[data-rm]')) {
      setStatus(id, null); renderPicks();
      return toast('Back in the deck · ' + byId[id].name, function () { setStatus(id, 'k'); renderPicks(); });
    }
    if (e.target.closest('[data-restore]')) { setStatus(id, null); renderPicks(); return toast('Restored · ' + byId[id].name); }
    if (e.target.id === 'copyBtn') {
      var txt = shortlistText(), btn = e.target;
      var fallback = function () {
        $('copyOut').innerHTML = '<textarea class="copyout" readonly></textarea>';
        var ta = $('copyOut').firstChild; ta.value = txt; ta.focus(); ta.select();
      };
      try { navigator.clipboard.writeText(txt).then(function () { btn.textContent = 'Copied ✓'; }, fallback); } catch (err) { fallback(); }
      return;
    }
    if (e.target.closest('[data-go]')) return;
    if (id) openDetail(id);
  });

  // ---------- detail ----------
  var detailId = null;
  function list(items) { return '<ul>' + items.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>'; }
  function openDetail(id) {
    var w = byId[id]; if (!w) return;
    detailId = id;
    var s = w.size, l2l = s.l2l || s.h || s.w, p = w.price || {}, v = w.verdict || {}, st = w.style || {};
    var cover = Math.round(l2l / window.WRIST_MM * 100);
    var h = '<div class="art">' + window.drawWatch(w) + '</div>';
    h += '<div class="head"><div class="brand">' + esc(w.brand) + '</div><h2>' + esc(w.name) + '</h2><div class="variant">' + esc(w.variant) + '</div>' + tags(w) + '</div>';
    h += '<div class="block"><h4>Why it’s here</h4>' + (w.why || []).map(function (x) { return '<p>' + esc(x) + '</p>'; }).join('') + '</div>';
    h += '<div class="block"><h4>On your wrist</h4><p>' + esc(v.fitNote || '') + '</p><p>Top to bottom it spans ' + (s.approx ? 'about ' : '') + l2l + ' mm, roughly ' + cover + '% of the way across your wrist. ' +
      'Your Timex was about 20 mm wide; this is ' + s.w + ' mm.</p></div>';
    var spec = [['Case', sizeLine(w) + (s.thick ? ' · ' + s.thick + ' mm thick' : '')], ['Movement', w.movement], ['Crystal', w.crystal], ['Water resistance', w.wr], ['Bracelet', w.bracelet], ['Made', w.era], ['Search for', (w.refs || []).join(', ')]];
    h += '<div class="block"><h4>The numbers</h4><dl class="spec">' + spec.filter(function (r) { return r[1]; }).map(function (r) { return '<dt>' + r[0] + '</dt><dd>' + esc(r[1]) + '</dd>'; }).join('') + '</dl></div>';
    var pl = priceLine(w);
    h += '<div class="block"><h4>What it costs</h4><div class="money"><div class="lbl">' + (pl.sub === 'new' ? 'New' : 'Typical pre-owned') + '</div><div class="big">' + pl.main + '</div>' +
      (p.newUsd && p.preLow && pl.sub !== 'new' ? '<div class="rowm"><span>New at retail</span><b>' + usd(p.newUsd) + '</b></div>' : '') +
      (p.preLow && pl.sub === 'new' ? '<div class="rowm"><span>Pre-owned</span><b>' + usd(p.preLow) + '–' + usd(p.preHigh).slice(1) + '</b></div>' : '') +
      (p.newNote ? '<div class="rowm"><span>New</span><b>' + esc(p.newNote) + '</b></div>' : '') +
      '<div class="rowm"><span>Your budget</span><b>$2,000–5,000</b></div></div>' +
      '<p style="margin-top:12px">' + esc(v.budgetNote || '') + '</p>' +
      '<p class="fine">' + (p.sources ? 'Drawn from ' + esc(p.sources) + '. ' : '') + 'Checked ' + esc(p.asOf || META.asOf || '') + '. Asking prices vary with condition, box and papers.</p></div>';
    if (w.honest && w.honest.length) h += '<div class="block"><h4>The honest part</h4>' + list(w.honest) + '</div>';
    h += '<div class="block wear"><h4>How to wear it</h4><dl>' +
      (st.cuff ? '<div><dt>At the cuff</dt><dd>' + esc(st.cuff) + '</dd></div>' : '') +
      (st.stack ? '<div><dt>With your gold</dt><dd>' + esc(st.stack) + '</dd></div>' : '') +
      (st.looks || []).map(function (l) { return '<div><dt>' + esc(l[0]) + '</dt><dd>' + esc(l[1]) + '</dd></div>'; }).join('') +
      '</dl>' + (st.read ? '<div class="read">' + esc(st.read) + '</div>' : '') + '</div>';
    if (w.links && w.links.length) h += '<div class="block"><h4>See the real thing</h4><div class="links">' + w.links.map(function (l) {
      return '<a href="' + esc(l[1]) + '" target="_blank" rel="noopener">' + esc(l[0]) + ' ↗</a>';
    }).join('') + '</div><p class="fine">The drawing above is a scale sketch, not a photo. These open real photos and listings.</p></div>';
    $('detailBody').innerHTML = h;
    $('detailBody').parentNode.scrollTop = 0;
    paintFoot();
    $('detail').hidden = false;
  }
  function paintFoot() {
    var cur = state.s[detailId];
    $('dPass').classList.toggle('on', cur === 'p'); $('dKeep').classList.toggle('on', cur === 'k');
    $('dPass').textContent = cur === 'p' ? 'Passed ✕' : 'Pass';
    $('dKeep').textContent = cur === 'k' ? 'Kept ♥' : 'Keep';
  }
  function closeDetail() { $('detail').hidden = true; detailId = null; }
  function detailDecide(v) {
    var id = detailId, cur = state.s[id];
    closeDetail();
    if (cur === v) return;
    var card = !views.deck.hidden && feed.querySelector('.card[data-id="' + id + '"]');
    if (card) return decide(card, v);
    setStatus(id, v);
    if (!views.picks.hidden) renderPicks();
    if (!views.deck.hidden) renderDeck();
  }
  $('dClose').addEventListener('click', closeDetail);
  $('dPass').addEventListener('click', function () { detailDecide('p'); });
  $('dKeep').addEventListener('click', function () { detailDecide('k'); });

  route();
})();
