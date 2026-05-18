/**
 * LB MEESEEKS CURSOR
 * Big round stickman head — outline only, no fill.
 * White in dark mode, near-black (#0f0e0c) in light mode.
 *
 * Features:
 *  - Random starting mood (happy / sad / angry / disappointed)
 *  - Eyes track the actual mouse position
 *  - Spring-physics wobble on all face parts when moving fast
 *  - TWO HANDS that float beside the head
 *    → at rest: dangle loosely below/beside the head
 *    → on hover of any interactable element: both hands reach toward it
 *  - Random blink every 2–5 s
 *  - Squash & stretch at speed
 *  - Desktop / hover-device only
 */
(function () {
  'use strict';
  if (window.matchMedia('(hover: none)').matches) return;

  /* ════════════════════════════════════════════════════════════════
     THEME
  ════════════════════════════════════════════════════════════════ */
  function strokeColor() {
    return document.documentElement.getAttribute('data-theme') === 'light'
      ? '#0f0e0c' : '#ffffff';
  }

  /* ════════════════════════════════════════════════════════════════
     MOODS
     ViewBox: 0 0 120 120   Head centre: 60,52  r=34
     Eyes: L(46,46)  R(74,46)
  ════════════════════════════════════════════════════════════════ */
  const MOODS = {
    happy: {
      mouth:     'M 38 66 Q 60 82 82 66',
      browL:     'M 34 36 Q 46 30 58 36',
      browR:     'M 62 36 Q 74 30 86 36',
      eyeLry: 7, eyeRry: 7,
      hair:      'M 48 18 Q 60 10 72 18',
      cheeks:    true
    },
    sad: {
      mouth:     'M 40 74 Q 60 62 80 74',
      browL:     'M 34 38 Q 46 44 58 38',
      browR:     'M 62 38 Q 74 44 86 38',
      eyeLry: 6, eyeRry: 6,
      hair:      'M 52 18 Q 60 13 68 18',
      cheeks:    false
    },
    angry: {
      mouth:     'M 42 72 Q 60 66 78 72',
      browL:     'M 34 33 Q 46 41 58 33',
      browR:     'M 62 33 Q 74 41 86 33',
      eyeLry: 5, eyeRry: 5,
      hair:      'M 38 20 L 46 11 L 52 20 L 60 9 L 68 20 L 74 11 L 82 20',
      cheeks:    false
    },
    disappointed: {
      mouth:     'M 44 72 Q 60 67 76 72',
      browL:     'M 34 37 Q 46 37 58 40',
      browR:     'M 62 40 Q 74 37 86 37',
      eyeLry: 4, eyeRry: 4,
      hair:      'M 44 18 Q 60 14 76 19',
      cheeks:    false
    }
  };

  const keys  = Object.keys(MOODS);
  const mood  = MOODS[keys[Math.floor(Math.random() * keys.length)]];

  /* ════════════════════════════════════════════════════════════════
     CONSTANTS
  ════════════════════════════════════════════════════════════════ */
  const SIZE  = 96;          // rendered px
  const VB    = 120;         // SVG viewBox side
  const HEAD_CX = 60, HEAD_CY = 52, HEAD_R = 34;
  const SW    = 3.6;         // main stroke width
  const SWb   = 2.6;         // brow / hair stroke width
  const EL    = { cx: 46, cy: 46, maxR: 3 };
  const ER    = { cx: 74, cy: 46, maxR: 3 };

  // Rest positions for hands (in viewBox coords, relative to head centre)
  // L hand: lower-left,  R hand: lower-right
  const HAND_REST_L = { x: 18,  y: 80 };   // abs viewBox
  const HAND_REST_R = { x: 102, y: 80 };

  /* ════════════════════════════════════════════════════════════════
     BUILD SVG
  ════════════════════════════════════════════════════════════════ */
  const c = strokeColor();

  const wrap = document.createElement('div');
  wrap.id = 'bc-wrap';
  wrap.style.cssText = `
    position:fixed; top:0; left:0;
    width:${SIZE}px; height:${SIZE}px;
    pointer-events:none; z-index:99999;
    transform:translate(-50%,-50%);
    will-change:transform; opacity:0; transition:opacity .2s;
    overflow:visible;
  `;

  // overflow:visible on the wrapper div lets hands poke outside the box
  wrap.innerHTML = `
  <svg id="bc-svg"
       viewBox="0 0 ${VB} ${VB}" width="${SIZE}" height="${SIZE}"
       xmlns="http://www.w3.org/2000/svg" overflow="visible"
       style="overflow:visible">

    <!-- ── HANDS (drawn first so head renders on top) ── -->
    <!-- Each hand: arm line from shoulder anchor → wrist, then a circle fist -->
    <!-- Left arm -->
    <line id="bc-arm-l"
      x1="${HAND_REST_L.x + 14}" y1="${HAND_REST_L.y - 18}"
      x2="${HAND_REST_L.x}" y2="${HAND_REST_L.y}"
      stroke="${c}" stroke-width="${SW}" stroke-linecap="round" data-rc/>
    <circle id="bc-fist-l" cx="${HAND_REST_L.x}" cy="${HAND_REST_L.y}" r="6"
      fill="none" stroke="${c}" stroke-width="${SW}" data-rc/>

    <!-- Right arm -->
    <line id="bc-arm-r"
      x1="${HAND_REST_R.x - 14}" y1="${HAND_REST_R.y - 18}"
      x2="${HAND_REST_R.x}" y2="${HAND_REST_R.y}"
      stroke="${c}" stroke-width="${SW}" stroke-linecap="round" data-rc/>
    <circle id="bc-fist-r" cx="${HAND_REST_R.x}" cy="${HAND_REST_R.y}" r="6"
      fill="none" stroke="${c}" stroke-width="${SW}" data-rc/>

    <!-- ── HEAD ── -->
    <circle id="bc-head" cx="${HEAD_CX}" cy="${HEAD_CY}" r="${HEAD_R}"
      fill="none" stroke="${c}" stroke-width="${SW}" data-rc/>

    <!-- HAIR -->
    <path id="bc-hair" d="${mood.hair}"
      fill="none" stroke="${c}" stroke-width="${SWb}" stroke-linecap="round" stroke-linejoin="round" data-rc/>

    <!-- CHEEKS (happy only) -->
    <ellipse id="bc-ck-l" cx="36" cy="58" rx="7" ry="4"
      fill="none" stroke="${c}" stroke-width="1.6" opacity="${mood.cheeks ? 0.4 : 0}" data-rc/>
    <ellipse id="bc-ck-r" cx="84" cy="58" rx="7" ry="4"
      fill="none" stroke="${c}" stroke-width="1.6" opacity="${mood.cheeks ? 0.4 : 0}" data-rc/>

    <!-- LEFT EYE -->
    <ellipse id="bc-el-w" cx="${EL.cx}" cy="${EL.cy}" rx="5" ry="${mood.eyeLry}"
      fill="none" stroke="${c}" stroke-width="${SW * 0.85}" data-rc/>
    <circle  id="bc-el-p" cx="${EL.cx}" cy="${EL.cy}" r="2.4"
      fill="${c}" stroke="none" data-rcf/>

    <!-- RIGHT EYE -->
    <ellipse id="bc-er-w" cx="${ER.cx}" cy="${ER.cy}" rx="5" ry="${mood.eyeRry}"
      fill="none" stroke="${c}" stroke-width="${SW * 0.85}" data-rc/>
    <circle  id="bc-er-p" cx="${ER.cx}" cy="${ER.cy}" r="2.4"
      fill="${c}" stroke="none" data-rcf/>

    <!-- BROWS -->
    <path id="bc-brow-l" d="${mood.browL}"
      fill="none" stroke="${c}" stroke-width="${SWb}" stroke-linecap="round" data-rc/>
    <path id="bc-brow-r" d="${mood.browR}"
      fill="none" stroke="${c}" stroke-width="${SWb}" stroke-linecap="round" data-rc/>

    <!-- MOUTH -->
    <path id="bc-mouth" d="${mood.mouth}"
      fill="none" stroke="${c}" stroke-width="${SW}" stroke-linecap="round" data-rc/>

  </svg>`;

  document.body.appendChild(wrap);

  /* ════════════════════════════════════════════════════════════════
     ELEMENT CACHE
  ════════════════════════════════════════════════════════════════ */
  let svgEl, headEl, hairEl, ckL, ckR,
      elW, elP, erW, erP, browL, browR, mouthEl,
      armL, fistL, armR, fistR;

  function cache() {
    svgEl  = document.getElementById('bc-svg');
    headEl = document.getElementById('bc-head');
    hairEl = document.getElementById('bc-hair');
    ckL    = document.getElementById('bc-ck-l');
    ckR    = document.getElementById('bc-ck-r');
    elW    = document.getElementById('bc-el-w');
    elP    = document.getElementById('bc-el-p');
    erW    = document.getElementById('bc-er-w');
    erP    = document.getElementById('bc-er-p');
    browL  = document.getElementById('bc-brow-l');
    browR  = document.getElementById('bc-brow-r');
    mouthEl= document.getElementById('bc-mouth');
    armL   = document.getElementById('bc-arm-l');
    fistL  = document.getElementById('bc-fist-l');
    armR   = document.getElementById('bc-arm-r');
    fistR  = document.getElementById('bc-fist-r');
  }

  /* ════════════════════════════════════════════════════════════════
     THEME RECOLOUR
  ════════════════════════════════════════════════════════════════ */
  function recolor() {
    const col = strokeColor();
    if (!svgEl) return;
    svgEl.querySelectorAll('[data-rc]').forEach(el => el.setAttribute('stroke', col));
    svgEl.querySelectorAll('[data-rcf]').forEach(el => el.setAttribute('fill', col));
  }
  new MutationObserver(recolor)
    .observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  /* ════════════════════════════════════════════════════════════════
     CURSOR STATE
  ════════════════════════════════════════════════════════════════ */
  let cx = -400, cy = -400;  // raw mouse
  let px = -400, py = -400;  // display (lerped)
  let vx = 0, vy = 0;
  let pmx = -400, pmy = -400;
  let alive = false;

  /* ════════════════════════════════════════════════════════════════
     SPRING PHYSICS
  ════════════════════════════════════════════════════════════════ */
  function makePart(k, d) { return { ox: 0, oy: 0, vx: 0, vy: 0, k, d }; }
  const P = {
    face:  makePart(0.14, 0.70),
    brows: makePart(0.20, 0.63),
    mouth: makePart(0.10, 0.68),
    hair:  makePart(0.16, 0.60),
  };
  const MAX_OFF = 5.5;
  const DRAG    = 0.20;

  function spring(p, ax, ay) {
    p.vx = (p.vx - p.ox * p.k + ax) * p.d;
    p.vy = (p.vy - p.oy * p.k + ay) * p.d;
    p.ox = Math.max(-MAX_OFF, Math.min(MAX_OFF, p.ox + p.vx));
    p.oy = Math.max(-MAX_OFF, Math.min(MAX_OFF, p.oy + p.vy));
  }

  function tf(ox, oy) {
    return `translate(${ox.toFixed(2)},${oy.toFixed(2)})`;
  }

  /* ════════════════════════════════════════════════════════════════
     HAND PHYSICS
     Each hand has a current position in viewBox space and a target.
     They spring toward the target.
  ════════════════════════════════════════════════════════════════ */
  const hand = {
    L: { x: HAND_REST_L.x, y: HAND_REST_L.y, vx: 0, vy: 0 },
    R: { x: HAND_REST_R.x, y: HAND_REST_R.y, vx: 0, vy: 0 }
  };
  // shoulder anchors in viewBox (where arm lines start from)
  const SHOULDER_L = { x: HEAD_CX - HEAD_R + 6,  y: HEAD_CY + HEAD_R - 4 };
  const SHOULDER_R = { x: HEAD_CX + HEAD_R - 6,  y: HEAD_CY + HEAD_R - 4 };

  let handTarget = null; // null = rest, else { x, y } in viewBox coords

  function springHand(h, tx, ty) {
    const k = 0.13, d = 0.65;
    h.vx = (h.vx - (h.x - tx) * k) * d;
    h.vy = (h.vy - (h.y - ty) * k) * d;
    h.x += h.vx;
    h.y += h.vy;
  }

  // Convert a screen pixel position (relative to the face centre) → viewBox coords
  function screenToVB(screenX, screenY) {
    const scale = VB / SIZE;
    const relX = (screenX - px) * scale + VB / 2;
    const relY = (screenY - py) * scale + VB / 2;
    return { x: relX, y: relY };
  }

  function setArmLine(lineEl, sx, sy, hx, hy) {
    if (!lineEl) return;
    lineEl.setAttribute('x1', sx.toFixed(1));
    lineEl.setAttribute('y1', sy.toFixed(1));
    lineEl.setAttribute('x2', hx.toFixed(1));
    lineEl.setAttribute('y2', hy.toFixed(1));
  }

  /* ════════════════════════════════════════════════════════════════
     HOVER DETECTION — interactable elements
  ════════════════════════════════════════════════════════════════ */
  const INTERACT_SEL = 'a, button, [role="button"], input, select, textarea, label, [tabindex]';
  let hoveredEl = null;

  document.addEventListener('mouseover', function (e) {
    const target = e.target.closest(INTERACT_SEL);
    hoveredEl = target || null;
  });
  document.addEventListener('mouseout', function (e) {
    if (hoveredEl && !hoveredEl.contains(e.relatedTarget)) {
      hoveredEl = null;
    }
  });

  function computeHandTarget() {
    if (!hoveredEl) return null;
    const r = hoveredEl.getBoundingClientRect();
    if (!r || r.width === 0) return null;
    // aim at centre of the element
    const scx = r.left + r.width  / 2;
    const scy = r.top  + r.height / 2;
    return screenToVB(scx, scy);
  }

  /* ════════════════════════════════════════════════════════════════
     PUPIL TRACKING
  ════════════════════════════════════════════════════════════════ */
  function pupilOff(eye, mousePx, mousePy, facePx, facePy) {
    const scale = VB / SIZE;
    const mx = (mousePx - facePx + SIZE / 2) * scale;
    const my = (mousePy - facePy + SIZE / 2) * scale;
    const dx = mx - eye.cx, dy = my - eye.cy;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const r = Math.min(dist * 0.22, eye.maxR);
    return { x: dx / dist * r, y: dy / dist * r };
  }

  /* ════════════════════════════════════════════════════════════════
     SQUASH & STRETCH
  ════════════════════════════════════════════════════════════════ */
  function squash(speed) {
    if (!svgEl) return;
    const t  = Math.min(speed / 50, 1);
    const sx = 1 + t * 0.10;
    const sy = 1 - t * 0.07;
    svgEl.setAttribute('transform',
      `translate(${(VB/2*(1-sx)).toFixed(2)},${(VB/2*(1-sy)).toFixed(2)}) scale(${sx.toFixed(3)},${sy.toFixed(3)})`);
  }

  /* ════════════════════════════════════════════════════════════════
     MOUSE EVENTS
  ════════════════════════════════════════════════════════════════ */
  document.addEventListener('mousemove', function (e) {
    cx = e.clientX; cy = e.clientY;
    vx = cx - pmx;  vy = cy - pmy;
    pmx = cx; pmy = cy;
    if (!alive) { px = cx; py = cy; alive = true; wrap.style.opacity = '1'; }
  });
  document.addEventListener('mouseleave', () => wrap.style.opacity = '0');
  document.addEventListener('mouseenter', () => { if (alive) wrap.style.opacity = '1'; });

  /* ════════════════════════════════════════════════════════════════
     HIDE SYSTEM CURSOR
  ════════════════════════════════════════════════════════════════ */
  const s = document.createElement('style');
  s.textContent = '* { cursor: none !important; }';
  document.head.appendChild(s);

  /* ════════════════════════════════════════════════════════════════
     BLINK
  ════════════════════════════════════════════════════════════════ */
  function blink() {
    if (!elW || !erW) { setTimeout(blink, 3000); return; }
    const lry = elW.getAttribute('ry'), rry = erW.getAttribute('ry');
    elW.setAttribute('ry', '0.5'); erW.setAttribute('ry', '0.5');
    setTimeout(() => {
      if (elW) elW.setAttribute('ry', lry);
      if (erW) erW.setAttribute('ry', rry);
    }, 110);
    setTimeout(blink, 2200 + Math.random() * 3500);
  }
  setTimeout(blink, 1500 + Math.random() * 2000);

  /* ════════════════════════════════════════════════════════════════
     ANIMATION LOOP
  ════════════════════════════════════════════════════════════════ */
  function tick() {
    requestAnimationFrame(tick);
    if (!alive) return;
    if (!svgEl) cache();

    // ── position lerp ──────────────────────────────────────────
    px += (cx - px) * 0.25;
    py += (cy - py) * 0.25;
    wrap.style.transform = `translate(${px.toFixed(1)}px,${py.toFixed(1)}px) translate(-50%,-50%)`;

    const speed = Math.sqrt(vx * vx + vy * vy);
    const ax = -vx * DRAG, ay = -vy * DRAG;

    // ── face springs ───────────────────────────────────────────
    spring(P.face,  ax * 0.8,  ay * 0.8);
    spring(P.brows, ax * 1.5,  ay * 1.6);
    spring(P.mouth, ax * 0.55, ay * 0.65);
    spring(P.hair,  ax * 1.7,  ay * 1.9);

    if (headEl)  headEl.setAttribute('transform',  tf(P.face.ox,  P.face.oy));
    if (ckL)     ckL.setAttribute('transform',     tf(P.face.ox,  P.face.oy));
    if (ckR)     ckR.setAttribute('transform',     tf(P.face.ox,  P.face.oy));
    if (elW)     elW.setAttribute('transform',     tf(P.face.ox,  P.face.oy));
    if (erW)     erW.setAttribute('transform',     tf(P.face.ox,  P.face.oy));
    if (browL)   browL.setAttribute('transform',   tf(P.brows.ox, P.brows.oy));
    if (browR)   browR.setAttribute('transform',   tf(P.brows.ox, P.brows.oy));
    if (mouthEl) mouthEl.setAttribute('transform', tf(P.mouth.ox, P.mouth.oy));
    if (hairEl)  hairEl.setAttribute('transform',  tf(P.hair.ox,  P.hair.oy));

    // ── pupils ─────────────────────────────────────────────────
    const lo = pupilOff(EL, cx, cy, px, py);
    const ro = pupilOff(ER, cx, cy, px, py);
    if (elP) {
      elP.setAttribute('cx', (EL.cx + P.face.ox + lo.x).toFixed(2));
      elP.setAttribute('cy', (EL.cy + P.face.oy + lo.y).toFixed(2));
    }
    if (erP) {
      erP.setAttribute('cx', (ER.cx + P.face.ox + ro.x).toFixed(2));
      erP.setAttribute('cy', (ER.cy + P.face.oy + ro.y).toFixed(2));
    }

    // ── hand targets ───────────────────────────────────────────
    const ht = computeHandTarget();

    // clamp target so hands can't teleport too far off-screen
    const MAXREACH = 55; // viewBox units from rest

    function clampTarget(rest, target) {
      if (!target) return rest;
      const dx = target.x - rest.x, dy = target.y - rest.y;
      const d  = Math.sqrt(dx*dx + dy*dy);
      if (d > MAXREACH) {
        return { x: rest.x + dx/d*MAXREACH, y: rest.y + dy/d*MAXREACH };
      }
      return target;
    }

    const tL = ht ? clampTarget(HAND_REST_L, ht) : HAND_REST_L;
    const tR = ht ? clampTarget(HAND_REST_R, ht) : HAND_REST_R;

    springHand(hand.L, tL.x, tL.y);
    springHand(hand.R, tR.x, tR.y);

    // arm lines: shoulder → fist
    if (armL)  setArmLine(armL,  SHOULDER_L.x, SHOULDER_L.y, hand.L.x, hand.L.y);
    if (fistL) { fistL.setAttribute('cx', hand.L.x.toFixed(2)); fistL.setAttribute('cy', hand.L.y.toFixed(2)); }
    if (armR)  setArmLine(armR,  SHOULDER_R.x, SHOULDER_R.y, hand.R.x, hand.R.y);
    if (fistR) { fistR.setAttribute('cx', hand.R.x.toFixed(2)); fistR.setAttribute('cy', hand.R.y.toFixed(2)); }

    squash(speed);
    vx *= 0.76; vy *= 0.76;
  }

  tick();

})();
