/* Send a watch: links saved to this artifact's db under `inbox/` (owner-only by rule),
   where Claude reads them and replies by setting `status` and `reply`. */
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var db = null, items = [], ready = false, unsub = null;
  var LABEL = { main: 'Main watch', fun: 'Fun rotation', either: 'Either list' };
  var STATUS = { new: ['mid', 'Waiting for Claude'], added: ['ok', 'Added'], skipped: ['plain', 'Not added'] };
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function host(u) { try { return new URL(u).hostname.replace(/^www\./, ''); } catch (e) { return u; } }
  function clean(u) { // drop ad-tracking parameters
    try { var x = new URL(u.trim()); ['gclid', 'gclsrc', 'gad_source', 'gad_campaignid', 'fbclid', 'srsltid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(function (k) { x.searchParams.delete(k); }); return x.toString(); } catch (e) { return u.trim(); }
  }
  function render() {
    var box = $('inList2'); if (!box) return;
    if (!db) { $('inCount').textContent = 'Sent'; box.innerHTML = '<div class="empty">' + (ready ? 'Sending needs you signed in to Claude. You can also paste the link to me in chat.' : 'Connecting…') + '</div>'; return; }
    $('inCount').textContent = 'Sent · ' + items.length;
    box.innerHTML = items.length ? items.map(function (d) {
      var v = d.data(), st = STATUS[v.status] || STATUS.new;
      return '<div class="inrow"><a href="' + esc(v.url) + '" target="_blank" rel="noopener">' + esc(v.title || host(v.url)) + ' ↗</a>' +
        (v.note ? '<div class="reply">“' + esc(v.note) + '”</div>' : '') +
        (v.reply ? '<div class="reply">' + esc(v.reply) + '</div>' : '') +
        '<div class="meta2"><span><span class="tag ' + st[0] + '">' + st[1] + '</span> ' + esc(LABEL[v.list] || '') + '</span>' +
        (v.watchId ? '<button data-open="' + esc(v.watchId) + '">Open card</button>' : '<button data-del="' + d.id + '">Remove</button>') + '</div></div>';
    }).join('') : '<div class="empty">Nothing sent yet.</div>';
  }
  window.renderInbox = render;

  $('inForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var url = clean($('inUrl').value), msg = $('inMsg');
    if (!/^https?:\/\//.test(url)) { msg.textContent = 'That doesn’t look like a link.'; return; }
    if (!db) { msg.textContent = 'Can’t save right now. Paste the link to me in chat instead.'; return; }
    var btn = e.target.querySelector('button'); btn.disabled = true; msg.textContent = 'Sending…';
    db.collection('inbox').add({ url: url, list: $('inList').value, note: $('inNote').value.trim().slice(0, 500), status: 'new', at: Date.now() })
      .then(function () { $('inUrl').value = ''; $('inNote').value = ''; msg.textContent = 'Sent. Ask me to “check the inbox” next time we talk.'; })
      .catch(function () { msg.textContent = 'Couldn’t save it. Paste the link to me in chat instead.'; })
      .then(function () { btn.disabled = false; });
  });
  $('inList2').addEventListener('click', function (e) {
    var d = e.target.closest('[data-del]'), o = e.target.closest('[data-open]');
    if (d && db) db.collection('inbox').doc(d.getAttribute('data-del')).delete().catch(function () {});
    if (o) { var id = o.getAttribute('data-open'), fun = /^f-/.test(id); location.hash = fun ? 'fun' : 'deck'; setTimeout(function () { var b = document.querySelector('.card[data-id="' + id + '"] [data-act="more"]') || null; if (b) b.click(); else location.hash = fun ? 'rotation' : 'picks'; }, 150); }
  });

  if (window.claude && typeof window.claude.use === 'function') {
    window.claude.use('db').then(function (d) {
      ready = true; db = d || null;
      if (db && !unsub) unsub = db.collection('inbox').orderBy('at', 'desc').limit(100).onSnapshot(function (snap) { items = snap.docs; render(); }, function () { render(); });
      render();
    }).catch(function () { ready = true; render(); });
  } else { ready = true; }
})();
