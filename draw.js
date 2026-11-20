/* Parametric watch drawings. All geometry is in millimetres (1 SVG unit = 1 mm),
   so every watch is true to scale against the wrist band it sits on. */
(function () {
  var uid = 0;
  var WRIST_MM = 56; // approx. width across the top of a 6¼″ (159 mm) wrist

  var METAL = {
    gold:  { hi: '#F6E7BE', mid: '#CFAA61', lo: '#8A692E', line: '#5E4619' },
    steel: { hi: '#F5F6F8', mid: '#BDC2CA', lo: '#7A808A', line: '#4C5159' }
  };
  var LEATHER = { black: ['#2B2B2E', '#151517'], brown: ['#6B4226', '#40260F'], burgundy: ['#6A2230', '#3D0F18'], navy: ['#27324F', '#141B2E'] };

  METAL.black = { hi: '#5A5C63', mid: '#2B2C31', lo: '#121316', line: '#000000' };
  METAL.rose = { hi: '#F7DCCF', mid: '#DBA58F', lo: '#9C6A56', line: '#6B4334' };
  function shade(hex, amt) {
    var n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    function f(c) { return Math.max(0, Math.min(255, Math.round(amt < 0 ? c * (1 + amt / 100) : c + (255 - c) * amt / 100))); }
    return '#' + ((1 << 24) + (f(r) << 16) + (f(g) << 8) + f(b)).toString(16).slice(1);
  }
  function tint(hex) { return { hi: shade(hex, 45), mid: hex, lo: shade(hex, -35), line: shade(hex, -60) }; }
  function M(m) { return METAL[m] || tint(m); } // a named finish, or any hex colour

  function r2(n) { return Math.round(n * 100) / 100; }
  function el(tag, a, inner) {
    var s = '<' + tag;
    for (var k in a) if (a[k] !== undefined && a[k] !== null) s += ' ' + k + '="' + (typeof a[k] === 'number' ? r2(a[k]) : a[k]) + '"';
    return s + (inner === undefined ? '/>' : '>' + inner + '</' + tag + '>');
  }

  function parts(metal) {
    // which metal each component is made of
    if (metal === 'steel' || metal === 'titanium' || metal === 'chrome') return { c: 'steel', b: 'steel', s: 'steel', a: 'steel' };
    if (metal === 'resin') return { c: 'black', b: 'black', s: 'black', a: 'black' };
    if (metal === 'rose') return { c: 'rose', b: 'rose', s: 'rose', a: 'rose' };
    if (metal === 'two-tone') return { c: 'steel', b: 'gold', s: 'steel', a: 'gold' };
    return { c: 'gold', b: 'gold', s: 'gold', a: 'gold' }; // gold, vermeil, gold-plated
  }

  function draw(w, o) {
    o = o || {};
    var d = w.draw || {}, s = w.size, id = 'w' + (++uid);
    var wrist = o.wrist !== false;
    var l2l = s.l2l || s.h || s.w;
    var W = wrist ? 84 : Math.max(s.w + 12, 30), H = wrist ? 68 : l2l + 14;
    var cx = W / 2, cy = H / 2;
    var BAND = w.finger ? 17 : WRIST_MM;
    var armTop = cy - BAND / 2, armBot = cy + BAND / 2;
    var P = parts(w.metal);
    if (d.parts) for (var k in d.parts) P[k] = d.parts[k];
    var out = [], defs = [];

    function lin(name, m, x1, y1, x2, y2) {
      defs.push('<linearGradient id="' + id + name + '" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '">' +
        '<stop offset="0" stop-color="' + m.hi + '"/><stop offset=".5" stop-color="' + m.mid + '"/><stop offset="1" stop-color="' + m.lo + '"/></linearGradient>');
    }
    function band(name, m) {
      defs.push('<linearGradient id="' + id + name + '" x1="0" y1="0" x2="1" y2="0">' +
        '<stop offset="0" stop-color="' + m.lo + '"/><stop offset=".45" stop-color="' + m.hi + '"/><stop offset="1" stop-color="' + m.lo + '"/></linearGradient>');
    }
    var made = {};
    function key(m) { // build the three gradients for a finish the first time it is used
      if (!made[m]) {
        var k = 'm' + Object.keys(made).length; made[m] = k;
        lin('c' + k, M(m), 0, 0, 1, 1);      // case (diagonal)
        lin('r' + k, M(m), 1, 1, 0, 0);      // bezel (reverse diagonal)
        band('b' + k, M(m));                 // bracelet link (rounded look)
      }
      return made[m];
    }
    defs.push('<linearGradient id="' + id + 'arm" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6F1E7" stop-opacity=".03"/><stop offset=".5" stop-color="#F6F1E7" stop-opacity=".13"/><stop offset="1" stop-color="#F6F1E7" stop-opacity=".03"/></linearGradient>');
    defs.push('<radialGradient id="' + id + 'sh" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#fff" stop-opacity=".45"/><stop offset=".7" stop-color="#fff" stop-opacity="0"/></radialGradient>');
    defs.push('<clipPath id="' + id + 'clip"><rect x="-10" y="' + r2(wrist ? armTop : 0) + '" width="' + (W + 20) + '" height="' + r2(wrist ? BAND : H) + '"/></clipPath>');
    function C(m) { return 'url(#' + id + 'c' + key(m) + ')'; }
    function R(m) { return 'url(#' + id + 'r' + key(m) + ')'; }
    function B(m) { return 'url(#' + id + 'b' + key(m) + ')'; }
    function L(m) { return M(m).line; }

    // ---- wrist ----
    if (wrist) {
      out.push(el('rect', { x: -10, y: armTop, width: W + 20, height: BAND, fill: 'url(#' + id + 'arm)' }));
      out.push(el('line', { x1: -10, y1: armTop, x2: W + 10, y2: armTop, stroke: '#F6F1E7', 'stroke-opacity': .28, 'stroke-width': .25 }));
      out.push(el('line', { x1: -10, y1: armBot, x2: W + 10, y2: armBot, stroke: '#F6F1E7', 'stroke-opacity': .28, 'stroke-width': .25 }));
    }

    // ---- bracelet / strap ----
    var bw = (d.bw || 0.6) * s.w;
    var x0 = cx - bw / 2;
    var segTop = wrist ? armTop - 1 : 0, segBot = wrist ? armBot + 1 : H;
    var br = [];
    function cols(list, pitch, extra, sw) {
      // list: [[fraction, 's'|'a'], ...]
      var x = x0;
      list.forEach(function (c, i) {
        var cw = c[0] * bw, m = P[c[1]];
        br.push(el('rect', { x: x, y: segTop, width: cw, height: segBot - segTop, fill: B(m) }));
        var off = (i % 2) * pitch / 2;
        for (var y = cy - l2l / 2 - off; y > segTop; y -= pitch) br.push(el('line', { x1: x, y1: y, x2: x + cw, y2: y, stroke: L(m), 'stroke-width': sw || .22, 'stroke-opacity': .7 }));
        for (var y2 = cy + l2l / 2 + off; y2 < segBot; y2 += pitch) br.push(el('line', { x1: x, y1: y2, x2: x + cw, y2: y2, stroke: L(m), 'stroke-width': sw || .22, 'stroke-opacity': .7 }));
        if (i) br.push(el('line', { x1: x, y1: segTop, x2: x, y2: segBot, stroke: '#000', 'stroke-opacity': .28, 'stroke-width': .16 }));
        x += cw;
      });
      if (extra) {
        for (var ya = cy - l2l / 2 - pitch / 2; ya > segTop; ya -= pitch) extra(ya);
        for (var yb = cy + l2l / 2 + pitch / 2; yb < segBot; yb += pitch) extra(yb);
      }
    }
    var bt = d.bracelet || 'oyster';
    if (bt === 'jubilee') cols([[.26, 's'], [.16, 'a'], [.16, 'a'], [.16, 'a'], [.26, 's']], 2.3);
    else if (bt === 'oyster') cols([[.27, 's'], [.46, 'a'], [.27, 's']], 3.6);
    else if (bt === 'brick') cols([[.2, 's'], [.2, 'a'], [.2, 's'], [.2, 'a'], [.2, 's']], 2.1);
    else if (bt === 'francaise') cols([[.3, 's'], [.4, 'a'], [.3, 's']], 3.1);
    else if (bt === 'santos') cols([[1, 's']], 3.4, function (y) {
      br.push(el('circle', { cx: x0 + bw * .2, cy: y, r: .42, fill: C(P.a), stroke: L(P.a), 'stroke-width': .1 }));
      br.push(el('circle', { cx: x0 + bw * .8, cy: y, r: .42, fill: C(P.a), stroke: L(P.a), 'stroke-width': .1 }));
    });
    else if (bt === 'bars') cols([[1, 's']], 2.9, function (y) {
      br.push(el('rect', { x: x0 + bw * .04, y: y - .45, width: bw * .92, height: .9, rx: .4, fill: B(P.a), stroke: L(P.a), 'stroke-width': .08 }));
    });
    else if (bt === 'mesh') cols([[1, 's']], .7, null, .1);
    else if (bt === 'expansion') cols([[.18, 's'], [.64, 'a'], [.18, 's']], 1.5, null, .16);
    else if (bt === 'bangle') br.push(el('rect', { x: x0, y: segTop, width: bw, height: segBot - segTop, fill: B(P.s) }));
    else if (bt === 'leather' || bt === 'resin') {
      var sc = d.strap || 'black', lc = LEATHER[sc] || [sc, shade(sc, -40)];
      defs.push('<linearGradient id="' + id + 'lth" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="' + lc[1] + '"/><stop offset=".5" stop-color="' + lc[0] + '"/><stop offset="1" stop-color="' + lc[1] + '"/></linearGradient>');
      var tp = bw * .06;
      br.push(el('path', { d: 'M' + r2(x0) + ' ' + r2(cy) + 'L' + r2(x0 + tp) + ' ' + r2(segTop) + 'H' + r2(x0 + bw - tp) + 'L' + r2(x0 + bw) + ' ' + r2(cy) + 'L' + r2(x0 + bw - tp) + ' ' + r2(segBot) + 'H' + r2(x0 + tp) + 'Z', fill: 'url(#' + id + 'lth)' }));
      if (bt === 'leather') [x0 + bw * .12, x0 + bw * .88].forEach(function (sx) {
        br.push(el('line', { x1: sx, y1: segTop, x2: sx, y2: segBot, stroke: '#D9C9A6', 'stroke-opacity': .5, 'stroke-width': .14, 'stroke-dasharray': '.7 .6' }));
      });
    }
    out.push('<g clip-path="url(#' + id + 'clip)">' + br.join('') + '</g>');

    // ---- case ----
    var dialColor = d.dial || '#F6F1E7';
    var hw, hh, dialShape; // dial half-extents + shape for markers
    var st = d.style || (s.shape === 'round' ? 'round' : 'tank');
    var crownX;

    if (st === 'round') {
      var r = s.w / 2, bz = s.w * (d.bezelW || .085);
      // lugs
      [x0 - 1.5, x0 + bw - .3].forEach(function (lx) {
        out.push(el('rect', { x: lx, y: cy - l2l / 2, width: 1.8, height: l2l, rx: .8, fill: C(P.c), stroke: L(P.c), 'stroke-width': .12 }));
      });
      if (d.bezel === 'claws') {
        [-1, 1].forEach(function (sd) {
          out.push(el('rect', { x: cx + sd * (r + .2) - 1.3, y: cy - s.w * .1, width: 2.6, height: s.w * .2, rx: .6, fill: C(P.a), stroke: L(P.a), 'stroke-width': .12 }));
        });
      }
      out.push(el('circle', { cx: cx, cy: cy, r: r, fill: C(P.c), stroke: L(P.c), 'stroke-width': .15 }));
      out.push(el('circle', { cx: cx, cy: cy, r: r - .35, fill: R(P.b), stroke: L(P.b), 'stroke-width': .1 }));
      if (d.bezel === 'fluted') {
        var fl = [];
        for (var i = 0; i < 72; i++) {
          var a = i * 5 * Math.PI / 180;
          fl.push(el('line', { x1: cx + (r - .5) * Math.sin(a), y1: cy - (r - .5) * Math.cos(a), x2: cx + (r - bz) * Math.sin(a), y2: cy - (r - bz) * Math.cos(a), stroke: i % 2 ? M(P.b).hi : M(P.b).lo, 'stroke-width': .35, 'stroke-opacity': .85 }));
        }
        out.push(fl.join(''));
      } else if (d.bezel === 'claws') {
        var rm = [];
        for (var j = 0; j < 12; j++) {
          var a2 = j * 30 * Math.PI / 180;
          rm.push(el('line', { x1: cx + (r - .8) * Math.sin(a2), y1: cy - (r - .8) * Math.cos(a2), x2: cx + (r - bz + .3) * Math.sin(a2), y2: cy - (r - bz + .3) * Math.cos(a2), stroke: L(P.b), 'stroke-width': .3, 'stroke-opacity': .8 }));
        }
        out.push(rm.join(''));
      }
      hw = hh = r - bz; dialShape = 'round';
      out.push(el('circle', { cx: cx, cy: cy, r: hw, fill: dialColor, stroke: L(P.b), 'stroke-width': .12 }));
      crownX = cx + r - .2;
    } else if (st === 'panthere' || st === 'santos') {
      var side = s.w, rx = side * (st === 'santos' ? .2 : .16), fr = side * .12;
      // shoulders flowing into the bracelet
      [-1, 1].forEach(function (sd) {
        var yb = cy + sd * (side / 2 - 2), ye = cy + sd * l2l / 2;
        out.push(el('path', { d: 'M' + r2(cx - side / 2 + 1.4) + ' ' + r2(yb) + 'L' + r2(x0 - .4) + ' ' + r2(ye) + 'H' + r2(x0 + bw + .4) + 'L' + r2(cx + side / 2 - 1.4) + ' ' + r2(yb) + 'Z', fill: C(P.c), stroke: L(P.c), 'stroke-width': .12 }));
      });
      out.push(el('rect', { x: cx - side / 2, y: cy - side / 2, width: side, height: side, rx: rx, fill: C(P.c), stroke: L(P.c), 'stroke-width': .15 }));
      out.push(el('rect', { x: cx - side / 2 + .5, y: cy - side / 2 + .5, width: side - 1, height: side - 1, rx: rx * .9, fill: R(P.b), stroke: L(P.b), 'stroke-width': .1 }));
      var q = side / 2 - fr / 2 - .2, t = side * .22;
      [[-t, -q], [t, -q], [-t, q], [t, q], [-q, -t], [-q, t], [q, -t], [q, t]].forEach(function (p) {
        out.push(el('circle', { cx: cx + p[0], cy: cy + p[1], r: side * .022 + .12, fill: M(P.b).lo, stroke: L(P.b), 'stroke-width': .08 }));
      });
      hw = hh = side / 2 - fr; dialShape = 'rect';
      out.push(el('rect', { x: cx - hw, y: cy - hh, width: hw * 2, height: hh * 2, rx: rx * .45, fill: dialColor, stroke: L(P.b), 'stroke-width': .12 }));
      crownX = cx + side / 2 - .1;
    } else if (st === 'tank' || st === 'francaise') {
      var tb = s.w * .15, bodyH = (s.h && s.h < l2l ? s.h : l2l * .76);
      out.push(el('rect', { x: cx - s.w / 2 + tb * .5, y: cy - bodyH / 2, width: s.w - tb, height: bodyH, rx: .5, fill: C(P.c), stroke: L(P.c), 'stroke-width': .12 }));
      [cx - s.w / 2, cx + s.w / 2 - tb].forEach(function (bx) {
        out.push(el('rect', { x: bx, y: cy - l2l / 2, width: tb, height: l2l, rx: st === 'francaise' ? tb * .2 : tb * .48, fill: B(P.b), stroke: L(P.b), 'stroke-width': .12 }));
      });
      hw = s.w / 2 - tb - .15; hh = bodyH / 2 - .8; dialShape = 'rect';
      out.push(el('rect', { x: cx - hw, y: cy - hh, width: hw * 2, height: hh * 2, rx: .5, fill: dialColor, stroke: L(P.c), 'stroke-width': .12 }));
      crownX = cx + s.w / 2 - .1;
    } else if (st === 'digital') {
      var dgh = s.h || l2l, cf = s.w * .16;
      var dx1 = cx - s.w / 2, dx2 = cx + s.w / 2, dyT = cy - dgh / 2, dyB = cy + dgh / 2;
      [[-1, -.18], [-1, .18], [1, -.18], [1, .18]].forEach(function (b) {
        out.push(el('rect', { x: cx + b[0] * (s.w / 2 + .1) - .6, y: cy + b[1] * dgh - 1, width: 1.2, height: 2, rx: .4, fill: C(P.a), stroke: L(P.a), 'stroke-width': .1 }));
      });
      out.push(el('path', { d: 'M' + r2(dx1 + cf) + ' ' + r2(dyT) + 'H' + r2(dx2 - cf) + 'L' + r2(dx2) + ' ' + r2(dyT + cf) + 'V' + r2(dyB - cf) + 'L' + r2(dx2 - cf) + ' ' + r2(dyB) + 'H' + r2(dx1 + cf) + 'L' + r2(dx1) + ' ' + r2(dyB - cf) + 'V' + r2(dyT + cf) + 'Z', fill: C(P.c), stroke: L(P.c), 'stroke-width': .15 }));
      var fx = s.w * .1;
      out.push(el('rect', { x: dx1 + fx, y: dyT + fx, width: s.w - 2 * fx, height: dgh - 2 * fx, rx: 1, fill: d.face || '#1B1D22', stroke: L(P.c), 'stroke-width': .1 }));
      hw = s.w * .31; hh = dgh * .15; dialShape = 'rect';
      out.push(el('rect', { x: cx - hw, y: cy - hh, width: hw * 2, height: hh * 2, rx: .5, fill: d.lcd || '#B9C4AE', stroke: '#000', 'stroke-opacity': .5, 'stroke-width': .1 }));
      out.push(el('text', { x: cx, y: cy + hh * .5, 'text-anchor': 'middle', 'font-size': hh * 1.35, 'font-weight': 700, textLength: hw * 1.6, lengthAdjust: 'spacingAndGlyphs', fill: '#1D241B', 'font-family': 'ui-monospace,Menlo,Consolas,monospace' }, '10:08'));
      out.push(el('rect', { x: cx - hw, y: cy - hh - dgh * .09, width: hw * .9, height: .5, fill: d.accent || C(P.a) }));
      out.push(el('rect', { x: cx - hw, y: cy + hh + dgh * .07, width: hw * 2, height: .3, fill: '#F6F1E7', 'fill-opacity': .45 }));
    } else { // reverso, dolcevita: plain rectangle
      var ch = s.h || l2l * .8, crx = st === 'dolcevita' ? 1.8 : .7;
      [x0 - 1.1, x0 + bw - .5].forEach(function (lx) {
        out.push(el('rect', { x: lx, y: cy - l2l / 2, width: 1.6, height: l2l, rx: .6, fill: C(P.c), stroke: L(P.c), 'stroke-width': .12 }));
      });
      out.push(el('rect', { x: cx - s.w / 2, y: cy - ch / 2, width: s.w, height: ch, rx: crx, fill: C(P.c), stroke: L(P.c), 'stroke-width': .15 }));
      var gb = st === 'reverso' ? ch * .11 : s.w * .1;
      if (st === 'reverso') {
        [-1, 1].forEach(function (sd) {
          for (var g = 0; g < 3; g++) {
            var gy = cy + sd * (ch / 2 - .5 - g * (gb / 3));
            out.push(el('line', { x1: cx - s.w / 2 + .5, y1: gy, x2: cx + s.w / 2 - .5, y2: gy, stroke: P.a !== P.c ? M(P.a).mid : L(P.c), 'stroke-width': P.a !== P.c ? .34 : .2, 'stroke-opacity': P.a !== P.c ? 1 : .75 }));
          }
        });
        hw = s.w / 2 - s.w * .09; hh = ch / 2 - gb - .6;
      } else {
        out.push(el('rect', { x: cx - s.w / 2 + .6, y: cy - ch / 2 + .6, width: s.w - 1.2, height: ch - 1.2, rx: crx * .8, fill: R(P.b), stroke: L(P.b), 'stroke-width': .1 }));
        hw = s.w / 2 - gb; hh = ch / 2 - gb;
      }
      dialShape = 'rect';
      out.push(el('rect', { x: cx - hw, y: cy - hh, width: hw * 2, height: hh * 2, rx: crx * .5, fill: dialColor, stroke: L(P.c), 'stroke-width': .12 }));
      crownX = cx + s.w / 2 - .1;
    }

    // ---- dial texture / sheen ----
    var dialEl = dialShape === 'round'
      ? { tag: 'circle', a: { cx: cx, cy: cy, r: hw } }
      : { tag: 'rect', a: { x: cx - hw, y: cy - hh, width: hw * 2, height: hh * 2, rx: .5 } };
    if (d.texture === 'snow') {
      defs.push('<filter id="' + id + 'snow" x="0" y="0" width="1" height="1"><feTurbulence type="fractalNoise" baseFrequency=".9 .35" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 .62  0 0 0 0 .66  0 0 0 0 .72  0 0 0 1.4 -.45"/><feComposite in2="SourceGraphic" operator="in"/></filter>');
      var ta = {}; for (var kk in dialEl.a) ta[kk] = dialEl.a[kk];
      ta.fill = '#fff'; ta.filter = 'url(#' + id + 'snow)'; ta.opacity = .55;
      out.push(el(dialEl.tag, ta));
    }
    var sa = {}; for (var k2 in dialEl.a) sa[k2] = dialEl.a[k2];
    sa.fill = 'url(#' + id + 'sh)';
    out.push(el(dialEl.tag, sa));

    // ---- markers ----
    var ink = d.ink || '#1B1D22', mk = st === 'digital' ? 'none' : (d.markers || 'stick'), m = [];
    function edge(a) { // distance from centre to dial edge along angle a
      if (dialShape === 'round') return hw;
      var dx = Math.abs(Math.sin(a)), dy = Math.abs(Math.cos(a));
      return Math.min(dx ? hw / dx : 1e9, dy ? hh / dy : 1e9);
    }
    for (var n = 0; n < 12; n++) {
      if (mk === 'none') break;
      if (d.date && n === 3) continue;
      if (d.subseconds && n === 6) continue;
      var an = n * 30 * Math.PI / 180, e = edge(an);
      var i0 = mk === 'roman' ? .58 : .76, i1 = .9;
      if (mk === 'dot') { m.push(el('circle', { cx: cx + e * .82 * Math.sin(an), cy: cy - e * .82 * Math.cos(an), r: Math.max(.35, hw * .05), fill: ink })); continue; }
      m.push(el('line', { x1: cx + e * i0 * Math.sin(an), y1: cy - e * i0 * Math.cos(an), x2: cx + e * i1 * Math.sin(an), y2: cy - e * i1 * Math.cos(an), stroke: ink, 'stroke-width': mk === 'roman' ? Math.max(.34, hw * .055) : Math.max(.4, hw * .07), 'stroke-linecap': mk === 'roman' ? 'butt' : 'round' }));
    }
    if (mk === 'roman') {
      if (dialShape === 'round') m.push(el('circle', { cx: cx, cy: cy, r: hw * .5, fill: 'none', stroke: ink, 'stroke-width': .12, 'stroke-opacity': .7 }));
      else m.push(el('rect', { x: cx - hw * .5, y: cy - hh * .5, width: hw, height: hh, fill: 'none', stroke: ink, 'stroke-width': .12, 'stroke-opacity': .7 }));
    }
    if (d.date) {
      var dwid = hw * .3, dh = hw * .24;
      m.push(el('rect', { x: cx + hw * .56, y: cy - dh / 2, width: dwid, height: dh, rx: .2, fill: '#fff', stroke: ink, 'stroke-width': .1 }));
      if (d.cyclops) m.push(el('rect', { x: cx + hw * .5, y: cy - dh * .8, width: dwid * 1.4, height: dh * 1.6, rx: .6, fill: '#fff', 'fill-opacity': .28, stroke: '#fff', 'stroke-opacity': .5, 'stroke-width': .1 }));
    }
    if (d.subseconds) {
      m.push(el('circle', { cx: cx, cy: cy + hh * .55, r: Math.min(hw, hh) * .24, fill: 'none', stroke: ink, 'stroke-width': .12, 'stroke-opacity': .7 }));
      m.push(el('line', { x1: cx, y1: cy + hh * .55, x2: cx + Math.min(hw, hh) * .14, y2: cy + hh * .55 - Math.min(hw, hh) * .14, stroke: ink, 'stroke-width': .14 }));
    }
    out.push(m.join(''));

    // ---- hands (10:08) ----
    var hc = d.hands || ink, len = Math.min(hw, hh);
    function hand(deg, l, wd, col) {
      var a = deg * Math.PI / 180;
      return el('line', { x1: cx - len * .08 * Math.sin(a), y1: cy + len * .08 * Math.cos(a), x2: cx + l * Math.sin(a), y2: cy - l * Math.cos(a), stroke: col, 'stroke-width': wd, 'stroke-linecap': 'round' });
    }
    if (st !== 'digital') {
    out.push(hand(304, len * .5, Math.max(.5, len * .09), hc));
    out.push(hand(48, len * .78, Math.max(.36, len * .06), hc));
    if (d.seconds) out.push(hand(180 + 25, len * .82, .16, d.seconds));
    out.push(el('circle', { cx: cx, cy: cy, r: Math.max(.4, len * .06), fill: hc }));
    }

    // ---- crown ----
    if (crownX !== undefined) out.push(el('rect', { x: crownX, y: cy - 1.3, width: 1.6, height: 2.6, rx: .5, fill: C(P.a), stroke: L(P.a), 'stroke-width': .12 }));
    if (d.cabochon) out.push(el('circle', { cx: crownX + 1.5, cy: cy, r: .75, fill: '#2C4A9A', stroke: '#16285C', 'stroke-width': .1 }));

    // ---- dimension line ----
    if (wrist && o.dims !== false) {
      var dxl = cx + s.w / 2 + 6.5, y1 = cy - l2l / 2, y2 = cy + l2l / 2, gold = '#C6A15B';
      out.push(el('path', { d: 'M' + r2(dxl - 1) + ' ' + r2(y1) + 'h2M' + r2(dxl) + ' ' + r2(y1) + 'V' + r2(y2) + 'M' + r2(dxl - 1) + ' ' + r2(y2) + 'h2', stroke: gold, 'stroke-width': .2, fill: 'none' }));
      out.push(el('text', { x: dxl + 1.6, y: cy + .9, 'font-size': 2.7, fill: gold, 'font-family': 'ui-monospace,Menlo,monospace' }, (s.approx ? '≈' : '') + r2(l2l) + ' mm'));
      var wx = 6;
      out.push(el('path', { d: 'M' + (wx - 1) + ' ' + r2(armTop) + 'h2M' + wx + ' ' + r2(armTop) + 'V' + r2(armBot) + 'M' + (wx - 1) + ' ' + r2(armBot) + 'h2', stroke: '#A7A49C', 'stroke-width': .15, fill: 'none', 'stroke-opacity': .7 }));
      out.push(el('text', { x: wx + 1.4, y: armBot - 1.6, 'font-size': 2.3, fill: '#A7A49C', 'font-family': 'ui-monospace,Menlo,monospace' }, (w.finger ? 'a finger ≈' : 'your wrist ≈') + BAND + ' mm'));
    }

    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + r2(W) + ' ' + r2(H) + '" class="' + (o.cls || 'wsvg') + '" role="img" aria-label="' +
      (w.brand + ' ' + w.name + (wrist ? ', drawn to scale on a 6¼ inch wrist' : '')).replace(/"/g, '') + '"><defs>' + defs.join('') + '</defs>' + out.join('') + '</svg>';
  }

  window.drawWatch = draw;
  window.WRIST_MM = WRIST_MM;
})();
