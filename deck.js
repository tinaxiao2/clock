/* Swipe decks: scroll for more, swipe right to keep, left to pass.
   Two decks share this code: the Main Watch shortlist and the Fun Rotation.
   Picks are saved in this browser only (localStorage). */
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var byId = {};

  var DECKS = {
    main: {
      list: window.WATCHES || [], meta: window.WATCH_META || {}, key: 'clock.shortlist.v1',
      deckHash: 'deck', listHash: 'picks', pill: 'Shortlist', keep: 'Keep', kept: 'Kept', more: 'Details &amp; styling',
      eyebrow: 'The main watch', title: 'My shortlist', ranked: true,
      budgetLabel: 'Your budget', budget: '$2,000–5,000', honestTitle: 'The honest part'
    },
    fun: {
      list: window.FUN || [], meta: window.FUN_META || {}, key: 'clock.fun.v1',
      deckHash: 'fun', listHash: 'rotation', pill: 'My rotation', keep: 'Want', kept: 'Want', more: 'Details &amp; styling',
      eyebrow: 'Small, playful, under $500', title: 'The fun rotation', own: true,
      budgetLabel: 'Fun-watch ceiling', budget: '$500', honestTitle: 'Will it last?',
      moods: [['all', 'All'], ['digital', 'Tiny digital'], ['gold', 'Dainty gold'], ['play', 'Colour & play'], ['vintage', 'Vintage']], mood: 'all'
    }
  };
  var cur = DECKS.main; // the deck on screen

  // ---------- state ----------
  Object.keys(DECKS).forEach(function (n) {
    var D = DECKS[n]; D.name = n;
    D.list.forEach(function (w) { byId[w.id] = w; w._deck = D; });
    D.state = { s: {}, order: [], seenHint: false };
    try {
      var raw = JSON.parse(localStorage.getItem(D.key) || 'null');
      if (raw && raw.s) D.state = raw;
    } catch (e) {}
    // drop anything that no longer exists in the list
    Object.keys(D.state.s).forEach(function (id) { if (!byId[id] || byId[id]._deck !== D) delete D.state.s[id]; });
    D.state.order = (D.state.order || []).filter(function (id) { return D.state.s[id] === 'k'; });
  });
  function save(D) { try { localStorage.setItem(D.key, JSON.stringify(D.state)); } catch (e) {} }
  function kept(D) { return D.state.order.map(function (id) { return byId[id]; }); }
  function withStatus(D, v) { return D.list.filter(function (w) { return D.state.s[w.id] === v; }); }
  function undecided(D) { return D.list.filter(function (w) { return !D.state.s[w.id]; }); }
  function inMood(D, w) { return !D.moods || D.mood === 'all' || w.mood === D.mood; }
  function showing(D) { return undecided(D).filter(function (w) { return inMood(D, w); }); }
  function setStatus(D, id, v) {
    D.state.order = D.state.order.filter(function (x) { return x !== id; });
    if (v) D.state.s[id] = v; else delete D.state.s[id];
    if (v === 'k') D.state.order.push(id);
    save(D);
  }
  var WORD = { k: function (D) { return D.kept; }, p: function () { return 'Passed'; }, o: function () { return 'Own'; } };

  // ---------- formatting ----------
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function usd(n) { return '$' + Number(n).toLocaleString('en-US'); }
  function priceLine(w) {
    var p = w.price || {};
    if (p.text) return { main: p.text, sub: p.sub || '' };
    if (p.lead === 'new' && p.newUsd) return { main: usd(p.newUsd), sub: 'new' };
    if (p.preLow) return { main: usd(p.preLow) + '–' + usd(p.preHigh).slice(1), sub: p.sub || 'pre-owned' };
    if (p.newUsd) return { main: usd(p.newUsd), sub: 'new' };
    return { main: '—', sub: '' };
  }
  function sizeLine(w) {
    var s = w.size;
    return s.shape === 'round' ? s.w + ' mm' : s.w + ' × ' + (s.l2l || s.h) + ' mm';
  }
  var FIT = { yes: ['ok', 'Fit ✓'], edge: ['mid', 'Fit ~'], no: ['warn', 'Fit ✕'] };
  var BUD = { yes: ['ok', 'Budget ✓'], stretch: ['mid', 'Budget ~'], no: ['warn', 'Budget ✕'] };
  var LASTS = { sturdy: ['ok', 'Sturdy'], fair: ['mid', 'Fair wear'], delicate: ['warn', 'Delicate'] };
  var METALS = { gold: 'Solid gold', 'two-tone': 'Two-tone', steel: 'Steel', titanium: 'Titanium', vermeil: 'Gold vermeil', plated: 'Gold-tone', resin: 'Resin', chrome: 'Silver-tone', rose: 'Rose-tone' };
  function tag(pair) { return '<span class="tag ' + pair[0] + '">' + pair[1] + '</span>'; }
  function tags(w) {
    var v = w.verdict || {}, h = tag(FIT[v.fit] || FIT.yes);
    if (w._deck.own) h += tag(LASTS[w.lasts] || LASTS.fair); else h += tag(BUD[v.budget] || BUD.yes);
    h += '<span class="tag plain">' + esc(w.movementShort || w.movement) + '</span><span class="tag plain">' + esc(w.metalLabel || METALS[w.metal] || w.metal) + '</span>';
    if (w.flag) h += '<span class="tag warn">' + esc(w.flag) + '</span>';
    return '<div class="tags">' + h + '</div>';
  }

  // ---------- routing ----------
  var views = { deck: $('view-deck'), picks: $('view-picks') }, shown = 'home';
  function route() {
    var h = (location.hash || '').replace('#', ''), v = 'home';
    Object.keys(DECKS).forEach(function (n) {
      if (h === DECKS[n].deckHash) { cur = DECKS[n]; v = 'deck'; }
      if (h === DECKS[n].listHash) { cur = DECKS[n]; v = 'picks'; }
    });
    shown = v;
    views.deck.hidden = v !== 'deck'; views.picks.hidden = v !== 'picks';
    document.body.classList.toggle('app-open', v !== 'home');
    $('toast').hidden = true;
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
    var p = priceLine(w), D = w._deck;
    return '<div class="card" data-id="' + w.id + '">' +
      '<span class="stamp k">' + D.keep + '</span><span class="stamp p">Pass</span>' +
      '<div class="art">' + window.drawWatch(w) + '</div>' +
      '<div class="meta"><div class="brand">' + esc(w.brand) + '</div><h3>' + esc(w.name) + '</h3>' +
      '<div class="variant">' + esc(w.variant) + ' · ' + sizeLine(w) + '</div>' +
      '<p class="pitch">' + esc(w.pitch) + '</p>' + (w.wear ? '<p class="wearline">' + esc(w.wear) + '</p>' : '') + tags(w) +
      '<div class="price">' + p.main + '<small>' + p.sub + '</small></div></div>' +
      '<div class="acts"><button class="act round pass" data-act="p" aria-label="Pass">✕</button>' +
      '<button class="act more" data-act="more">' + D.more + '</button>' +
      '<button class="act round keep" data-act="k" aria-label="' + D.keep + '">♥</button></div></div>';
  }
  function endHTML() {
    var D = cur, left = showing(D).length, all = undecided(D).length, k = kept(D).length + withStatus(D, 'o').length, np = withStatus(D, 'p').length;
    var filtered = D.moods && D.mood !== 'all';
    var head, body;
    if (!D.list.length) { head = 'Coming soon'; body = 'This list is being researched.'; }
    else if (left) { head = left + ' still undecided'; body = 'Scroll back up to decide on the rest, or see what you’ve kept so far.'; }
    else if (filtered && all) { head = 'That’s this mood'; body = all + ' more in the other moods. Tap “All” above to see them.'; }
    else { head = k ? k + (D.own ? ' in your rotation' : ' on your shortlist') : 'Nothing kept yet'; body = 'Every watch has a verdict. ' + (D.ranked ? 'Rank your keeps, or bring back a pass.' : 'See your list, or bring back a pass.'); }
    return '<div class="card endcard"><span class="eyebrow">' + (left ? 'End of the list' : 'All decided') + '</span><h3>' + head + '</h3><p>' + body + '</p>' +
      '<button class="cta" data-go="' + D.listHash + '">Open ' + (D.own ? 'my rotation' : 'my shortlist') + '</button>' +
      (np ? '<button class="linkbtn" id="reviewPassed">Bring back the ' + np + ' I passed</button>' : '') + '</div>';
  }
  function updateBar() {
    var D = cur, left = showing(D).length;
    $('dkCount').textContent = left ? left + ' to go' : 'All decided';
    $('dkPillLabel').textContent = D.pill;
    $('dkKept').textContent = kept(D).length + withStatus(D, 'o').length;
    $('dkPill').setAttribute('data-go', D.listHash); $('dkPill').setAttribute('href', '#' + D.listHash);
  }
  function renderChips() {
    var D = cur, c = $('chips');
    c.hidden = !D.moods;
    if (!D.moods) return;
    c.innerHTML = D.moods.map(function (m) {
      var n = undecided(D).filter(function (w) { return m[0] === 'all' || w.mood === m[0]; }).length;
      return '<button class="chip' + (D.mood === m[0] ? ' on' : '') + '" data-mood="' + m[0] + '">' + esc(m[1]) + '<i>' + n + '</i></button>';
    }).join('');
  }
  function renderDeck(focusId) {
    var D = cur, list = showing(D);
    feed.innerHTML = list.map(function (w) { return '<section class="slot">' + cardHTML(w) + '</section>'; }).join('') +
      '<section class="slot" id="endSlot">' + endHTML() + '</section>';
    feed.scrollTop = 0;
    if (!D.state.seenHint && list.length) {
      feed.querySelector('.card').insertAdjacentHTML('afterbegin', '<span class="hint"><b>Swipe → ' + D.keep.toLowerCase() + ' · ← pass · scroll ↓ for more</b></span>');
    }
    renderChips(); updateBar();
    if (focusId) {
      var c = feed.querySelector('.card[data-id="' + focusId + '"]');
      if (c) { feed.scrollTop = c.parentNode.offsetTop; c.classList.add('enter'); }
    }
  }
  function refreshEnd() { var e = $('endSlot'); if (e) e.innerHTML = endHTML(); renderChips(); updateBar(); }
  $('chips').addEventListener('click', function (e) {
    var b = e.target.closest('[data-mood]');
    if (b) { cur.mood = b.getAttribute('data-mood'); renderDeck(); }
  });

  function rerender(id) {
    if (shown === 'deck') renderDeck(id); else if (shown === 'picks') renderPicks();
  }
  function decide(card, v) {
    var id = card.getAttribute('data-id'), w = byId[id];
    if (!w || card.dataset.gone) return;
    var D = w._deck;
    card.dataset.gone = '1';
    D.state.seenHint = true;
    setStatus(D, id, v);
    var right = v !== 'p';
    card.classList.add('snap');
    card.style.transform = 'translateX(' + (right ? 130 : -130) + '%) rotate(' + (right ? 14 : -14) + 'deg)';
    card.style.opacity = '0';
    card.querySelector('.stamp.' + (right ? 'k' : 'p')).style.opacity = 1;
    setTimeout(function () {
      var slot = card.parentNode, next = slot.nextElementSibling;
      if (slot.parentNode) slot.parentNode.removeChild(slot);
      if (next) { var nc = next.querySelector('.card'); if (nc) { nc.classList.remove('enter'); void nc.offsetWidth; nc.classList.add('enter'); } }
      refreshEnd();
    }, 260);
    toast(WORD[v](D) + ' · ' + w.name, function () { setStatus(D, id, null); rerender(id); });
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
      withStatus(cur, 'p').forEach(function (w) { setStatus(cur, w.id, null); });
      if (cur.moods) cur.mood = 'all';
      renderDeck();
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
    if (shown !== 'deck' || !$('detail').hidden) return;
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

  // ---------- picks / rotation list ----------
  function thumb(w) { return '<div class="thumb">' + window.drawWatch(w, { wrist: false }) + '</div>'; }
  function rowText(w, extra) {
    var pr = priceLine(w);
    return '<div><div class="brand">' + esc(w.brand) + '</div><h3>' + esc(w.name) + '</h3><div class="sub">' + esc(w.variant) + '<br>' + pr.main + ' ' + pr.sub + '</div>' + (extra || '') + '</div>';
  }
  function renderPicks() {
    var D = cur, k = kept(D), o = withStatus(D, 'o'), p = withStatus(D, 'p'), left = undecided(D).length, h = '';
    $('pkBack').setAttribute('data-go', D.deckHash); $('pkBack').setAttribute('href', '#' + D.deckHash);
    h += '<span class="eyebrow">' + D.eyebrow + '</span><h2>' + D.title + '</h2>';
    if (D.ranked) h += '<p>' + (k.length ? 'Ranked by you. Tap a watch for the full detail; use the arrows to reorder.' : 'Nothing here yet.') + '</p>';
    else h += '<p>' + (k.length || o.length ? 'The ones you own and the ones you want. Tap a watch for the detail.' : 'Nothing here yet.') + '</p>';
    if (!k.length && !o.length) h += '<div class="empty">Swipe right on a watch to ' + (D.own ? 'add it to your wants' : 'keep it') + '.<br><button class="cta" data-go="' + D.deckHash + '" style="margin-top:18px">' + (left ? 'Back to the watches' : 'Review the list') + '</button></div>';
    if (D.own && o.length) {
      h += '<div class="sechead"><span class="eyebrow">Own · ' + o.length + '</span></div><div class="rows">' + o.map(function (w) {
        return '<div class="row plainrow" data-id="' + w.id + '">' + thumb(w) + rowText(w, '<button class="rm" data-set="k">Move to wants</button> · <button class="rm" data-rm="1">Remove</button>') + '</div>';
      }).join('') + '</div>';
    }
    if (D.own && k.length) h += '<div class="sechead"><span class="eyebrow">Want · ' + k.length + '</span></div>';
    h += '<div class="rows">' + k.map(function (w, i) {
      if (D.ranked) return '<div class="row" data-id="' + w.id + '"><span class="rank">' + (i + 1) + '</span>' + thumb(w) + rowText(w, '<button class="rm" data-rm="1">Remove</button>') +
        '<div class="ctl"><button data-mv="-1" aria-label="Move up"' + (i === 0 ? ' disabled' : '') + '>↑</button><button data-mv="1" aria-label="Move down"' + (i === k.length - 1 ? ' disabled' : '') + '>↓</button></div></div>';
      return '<div class="row plainrow" data-id="' + w.id + '">' + thumb(w) + rowText(w, '<button class="rm" data-rm="1">Remove</button>') + '<button class="ghost small" data-set="o">I own it</button></div>';
    }).join('') + '</div>';
    if (k.length || o.length) {
      h += '<div style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap"><button class="ghost" id="copyBtn">Copy as text</button>' +
        (left ? '<button class="ghost" data-go="' + D.deckHash + '">' + left + ' more to see</button>' : '') + '</div><div id="copyOut"></div>';
    }
    if (p.length) {
      h += '<div class="sechead"><span class="eyebrow">Passed · ' + p.length + '</span></div><div class="rows">' + p.map(function (w) {
        return '<div class="row passed" data-id="' + w.id + '">' + thumb(w) +
          '<div><div class="brand">' + esc(w.brand) + '</div><h3>' + esc(w.name) + '</h3><div class="sub">' + esc(w.variant) + '</div></div>' +
          '<button class="ghost small" data-restore="1">Restore</button></div>';
      }).join('') + '</div>';
    }
    h += '<p class="fine">Your picks are saved in this browser on this device. Use “Copy as text” to keep a backup.' +
      (D.meta.asOf ? ' Prices checked ' + esc(D.meta.asOf) + '; ' + (D.own ? 'they move, so treat them as a guide.' : 'pre-owned prices move, so treat them as a guide.') : '') + '</p>' +
      (D.meta.note ? '<p class="fine">' + esc(D.meta.note) + '</p>' : '');
    $('picksBody').innerHTML = h;
    $('pkCount').textContent = D.own ? (o.length + ' own · ' + k.length + ' want') : (k.length ? k.length + ' kept' : '');
  }
  function listText(D) {
    function line(w, i) {
      var pr = priceLine(w);
      return (i + 1) + '. ' + w.brand + ' ' + w.name + ' (' + w.variant + ', ' + sizeLine(w) + ') · ' + pr.main + ' ' + pr.sub + (w.refs && w.refs.length ? ' · refs: ' + w.refs.join(', ') : '');
    }
    if (!D.own) return 'My watch shortlist\n' + kept(D).map(line).join('\n');
    var o = withStatus(D, 'o'), k = kept(D);
    return 'My fun rotation\n' + (o.length ? 'Own:\n' + o.map(line).join('\n') + '\n' : '') + (k.length ? 'Want:\n' + k.map(line).join('\n') : '');
  }
  $('picksBody').addEventListener('click', function (e) {
    var D = cur, row = e.target.closest('.row'), id = row && row.getAttribute('data-id'), t;
    if ((t = e.target.closest('[data-mv]'))) {
      var dir = +t.getAttribute('data-mv'), i = D.state.order.indexOf(id), j = i + dir;
      if (j >= 0 && j < D.state.order.length) { D.state.order.splice(i, 1); D.state.order.splice(j, 0, id); save(D); renderPicks(); }
      return;
    }
    if ((t = e.target.closest('[data-set]'))) {
      var was = D.state.s[id], v = t.getAttribute('data-set');
      setStatus(D, id, v); renderPicks();
      return toast(WORD[v](D) + ' · ' + byId[id].name, function () { setStatus(D, id, was); renderPicks(); });
    }
    if (e.target.closest('[data-rm]')) {
      var prev = D.state.s[id];
      setStatus(D, id, null); renderPicks();
      return toast('Back in the deck · ' + byId[id].name, function () { setStatus(D, id, prev); renderPicks(); });
    }
    if (e.target.closest('[data-restore]')) { setStatus(D, id, null); renderPicks(); return toast('Restored · ' + byId[id].name); }
    if (e.target.id === 'copyBtn') {
      var txt = listText(D), btn = e.target;
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
    var D = w._deck, s = w.size, l2l = s.l2l || s.h || s.w, p = w.price || {}, v = w.verdict || {}, st = w.style || {};
    var h = '<div class="art">' + window.drawWatch(w) + '</div>';
    h += '<div class="head"><div class="brand">' + esc(w.brand) + '</div><h2>' + esc(w.name) + '</h2><div class="variant">' + esc(w.variant) + '</div>' + tags(w) + '</div>';
    h += '<div class="block"><h4>Why it’s here</h4>' + (w.why || []).map(function (x) { return '<p>' + esc(x) + '</p>'; }).join('') + '</div>';
    if (w.finger) h += '<div class="block"><h4>On your hand</h4><p>' + esc(v.fitNote || '') + '</p></div>';
    else h += '<div class="block"><h4>On your wrist</h4><p>' + esc(v.fitNote || '') + '</p><p>Top to bottom it spans ' + (s.approx ? 'about ' : '') + l2l + ' mm, roughly ' + Math.round(l2l / window.WRIST_MM * 100) + '% of the way across your wrist. ' +
      'Your Timex was about 20 mm wide; this is ' + s.w + ' mm.</p></div>';
    var spec = [['Case', sizeLine(w) + (s.thick ? ' · ' + s.thick + ' mm thick' : '')], ['Movement', w.movement], ['Finish', w.finish], ['Crystal', w.crystal], ['Water resistance', w.wr], ['Bracelet', w.bracelet], ['Made', w.era], ['Search for', (w.refs || []).join(', ')]];
    h += '<div class="block"><h4>The numbers</h4><dl class="spec">' + spec.filter(function (r) { return r[1]; }).map(function (r) { return '<dt>' + r[0] + '</dt><dd>' + esc(r[1]) + '</dd>'; }).join('') + '</dl></div>';
    var pl = priceLine(w);
    h += '<div class="block"><h4>What it costs</h4><div class="money"><div class="lbl">' + (pl.sub === 'new' ? 'New' : (pl.sub === 'vintage' ? 'Typical vintage price' : 'Typical pre-owned')) + '</div><div class="big">' + pl.main + '</div>' +
      (p.newUsd && p.preLow && pl.sub !== 'new' ? '<div class="rowm"><span>New at retail</span><b>' + usd(p.newUsd) + '</b></div>' : '') +
      (p.preLow && pl.sub === 'new' ? '<div class="rowm"><span>Pre-owned</span><b>' + usd(p.preLow) + '–' + usd(p.preHigh).slice(1) + '</b></div>' : '') +
      (p.where ? '<div class="rowm"><span>Where</span><b>' + esc(p.where) + '</b></div>' : '') +
      '<div class="rowm"><span>' + D.budgetLabel + '</span><b>' + D.budget + '</b></div></div>' +
      (v.budgetNote ? '<p style="margin-top:12px">' + esc(v.budgetNote) + '</p>' : '') +
      '<p class="fine">' + (p.sources ? 'Drawn from ' + esc(p.sources) + '. ' : '') + 'Checked ' + esc(p.asOf || D.meta.asOf || '') + '. ' + (D.own ? 'Prices and stock change.' : 'Asking prices vary with condition, box and papers.') + '</p></div>';
    if (w.honest && w.honest.length) h += '<div class="block"><h4>' + D.honestTitle + '</h4>' + list(w.honest) + '</div>';
    if (st.cuff || st.stack || st.read || (st.looks && st.looks.length)) h += '<div class="block wear"><h4>How to wear it</h4><dl>' +
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
    var w = byId[detailId], D = w._deck, c = D.state.s[detailId];
    $('dPass').classList.toggle('on', c === 'p'); $('dKeep').classList.toggle('on', c === 'k'); $('dOwn').classList.toggle('on', c === 'o');
    $('dPass').textContent = c === 'p' ? 'Passed ✕' : 'Pass';
    $('dKeep').textContent = c === 'k' ? D.kept + ' ♥' : D.keep;
    $('dOwn').textContent = c === 'o' ? 'Own ✓' : 'Own it';
    $('dOwn').hidden = !D.own;
  }
  function closeDetail() { $('detail').hidden = true; detailId = null; }
  function detailDecide(v) {
    var id = detailId, w = byId[id], D = w._deck, was = D.state.s[id];
    closeDetail();
    if (was === v) return;
    var card = shown === 'deck' && feed.querySelector('.card[data-id="' + id + '"]');
    if (card) return decide(card, v);
    setStatus(D, id, v);
    rerender();
    toast(WORD[v](D) + ' · ' + w.name, function () { setStatus(D, id, was); rerender(); });
  }
  $('dClose').addEventListener('click', closeDetail);
  $('dPass').addEventListener('click', function () { detailDecide('p'); });
  $('dKeep').addEventListener('click', function () { detailDecide('k'); });
  $('dOwn').addEventListener('click', function () { detailDecide('o'); });

  route();
})();
