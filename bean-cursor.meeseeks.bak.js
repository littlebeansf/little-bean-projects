/**
 * LB MEESEEKS CURSOR v4
 * Big round Meeseeks-style head. Outline only, no fill.
 * White in dark mode, near-black in light mode.
 *
 * Behaviour:
 *  - Always happy / slight smile at rest
 *  - Big grin when hands touch an interactable
 *  - Gets ANGRY (red tint, V-brows, grimace) when shaken very fast
 *  - 3 tiny hair strands on top
 *  - Eyes are small relative to the big head
 *  - Long bendy arms, spring toward interactables
 *  - Very smooth, slow, floaty movement
 *  - Pupils track mouse
 *  - Random blink
 *  - Theme-aware stroke colour
 */
(function () {
  'use strict';
  if (window.matchMedia('(hover: none)').matches) return;

  /* ══════════════════════════════════════════════════
     THEME
  ══════════════════════════════════════════════════ */
  function strokeColor() {
    return document.documentElement.getAttribute('data-theme') === 'light'
      ? '#0f0e0c' : '#ffffff';
  }

  /* ══════════════════════════════════════════════════
     SIZES  (viewBox 0 0 160 160)
     Head centre: 80, 72   r = 46
     Eyes (small): L(64,64)  R(96,64)
  ══════════════════════════════════════════════════ */
  const VB   = 160;
  const SIZE = 110;   // rendered px — big!

  const HC = { x: 80, y: 72 };
  const HR = 46;

  // Eye centres — small eyes, set slightly higher
  const EL = { cx: 64, cy: 62, rx: 4, ry: 5, maxR: 2.6 };
  const ER = { cx: 96, cy: 62, rx: 4, ry: 5, maxR: 2.6 };

  // Shoulder anchors (where arms emerge from head bottom-sides)
  const SHL = { x: HC.x - HR + 8,  y: HC.y + HR - 8  };  // left shoulder
  const SHR = { x: HC.x + HR - 8,  y: HC.y + HR - 8  };  // right shoulder

  // Arm rest positions (long — fists dangle way below)
  const REST_L = { x: HC.x - 68, y: HC.y + 90 };
  const REST_R = { x: HC.x + 68, y: HC.y + 90 };

  /* ══════════════════════════════════════════════════
     MOOD DEFINITIONS
  ══════════════════════════════════════════════════ */
  const M = {
    happy: {
      mouth:  `M 54 86 Q 80 102 106 86`,
      browL:  `M 50 50 Q 64 44 78 50`,
      browR:  `M 82 50 Q 96 44 110 50`,
    },
    grin: {
      // big grin when touching something
      mouth:  `M 50 84 Q 80 108 110 84`,
      browL:  `M 50 47 Q 64 40 78 47`,
      browR:  `M 82 47 Q 96 40 110 47`,
    },
    angry: {
      mouth:  `M 56 92 Q 80 84 104 92`,
      browL:  `M 50 52 Q 64 60 78 52`,   // V-shape inner corners down
      browR:  `M 82 52 Q 96 60 110 52`,
    }
  };

  /* ══════════════════════════════════════════════════
     STATE
  ══════════════════════════════════════════════════ */
  let currentMood  = 'happy';
  let targetMood   = 'happy';
  let moodT        = 1;          // 0→1 blend progress
  const MOOD_SPEED = 0.04;       // lerp speed for mood transitions

  let shakeBuffer  = 0;          // accumulated recent speed
  let isAngry      = false;
  let isTouching   = false;      // hovering interactable

  /* ══════════════════════════════════════════════════
     BUILD SVG
  ══════════════════════════════════════════════════ */
  const c = strokeColor();
  const SW  = 3.8;   // main stroke
  const SWb = 2.8;   // brows / hair

  const wrap = document.createElement('div');
  wrap.id = 'bc-wrap';
  wrap.style.cssText = `
    position:fixed; top:0; left:0;
    width:${SIZE}px; height:${SIZE}px;
    pointer-events:none; z-index:99999;
    transform:translate(-50%,-50%);
    will-change:transform; opacity:0; transition:opacity .25s;
    overflow:visible;
  `;

  wrap.innerHTML = `
  <svg id="bc-svg"
       viewBox="0 0 ${VB} ${VB}"
       width="${SIZE}" height="${SIZE}"
       xmlns="http://www.w3.org/2000/svg"
       style="overflow:visible">

    <!-- LONG ARMS — drawn first so head is on top -->
    <!-- Left arm: shoulder → elbow → fist (two-segment for bendiness) -->
    <polyline id="bc-arm-l" points="${SHL.x},${SHL.y} ${REST_L.x+10},${REST_L.y-30} ${REST_L.x},${REST_L.y}"
      fill="none" stroke="${c}" stroke-width="${SW}" stroke-linecap="round" stroke-linejoin="round" data-rc/>
    <circle id="bc-fist-l" cx="${REST_L.x}" cy="${REST_L.y}" r="7"
      fill="none" stroke="${c}" stroke-width="${SW}" data-rc/>

    <!-- Right arm -->
    <polyline id="bc-arm-r" points="${SHR.x},${SHR.y} ${REST_R.x-10},${REST_R.y-30} ${REST_R.x},${REST_R.y}"
      fill="none" stroke="${c}" stroke-width="${SW}" stroke-linecap="round" stroke-linejoin="round" data-rc/>
    <circle id="bc-fist-r" cx="${REST_R.x}" cy="${REST_R.y}" r="7"
      fill="none" stroke="${c}" stroke-width="${SW}" data-rc/>

    <!-- HEAD -->
    <circle id="bc-head" cx="${HC.x}" cy="${HC.y}" r="${HR}"
      fill="none" stroke="${c}" stroke-width="${SW}" data-rc/>

    <!-- 3 TINY HAIR STRANDS -->
    <line id="bc-h1" x1="72" y1="26" x2="70" y2="16"
      stroke="${c}" stroke-width="2.4" stroke-linecap="round" data-rc/>
    <line id="bc-h2" x1="80" y1="25" x2="80" y2="14"
      stroke="${c}" stroke-width="2.4" stroke-linecap="round" data-rc/>
    <line id="bc-h3" x1="88" y1="26" x2="90" y2="16"
      stroke="${c}" stroke-width="2.4" stroke-linecap="round" data-rc/>

    <!-- LEFT EYE (small oval) -->
    <ellipse id="bc-el-w" cx="${EL.cx}" cy="${EL.cy}" rx="${EL.rx}" ry="${EL.ry}"
      fill="none" stroke="${c}" stroke-width="${SW * 0.8}" data-rc/>
    <circle id="bc-el-p" cx="${EL.cx}" cy="${EL.cy}" r="2"
      fill="${c}" stroke="none" data-rcf/>

    <!-- RIGHT EYE -->
    <ellipse id="bc-er-w" cx="${ER.cx}" cy="${ER.cy}" rx="${ER.rx}" ry="${ER.ry}"
      fill="none" stroke="${c}" stroke-width="${SW * 0.8}" data-rc/>
    <circle id="bc-er-p" cx="${ER.cx}" cy="${ER.cy}" r="2"
      fill="${c}" stroke="none" data-rcf/>

    <!-- BROWS (happy default) -->
    <path id="bc-brow-l" d="${M.happy.browL}"
      fill="none" stroke="${c}" stroke-width="${SWb}" stroke-linecap="round" data-rc/>
    <path id="bc-brow-r" d="${M.happy.browR}"
      fill="none" stroke="${c}" stroke-width="${SWb}" stroke-linecap="round" data-rc/>

    <!-- MOUTH (happy default) -->
    <path id="bc-mouth" d="${M.happy.mouth}"
      fill="none" stroke="${c}" stroke-width="${SW}" stroke-linecap="round" data-rc/>

  </svg>`;

  document.body.appendChild(wrap);

  /* ══════════════════════════════════════════════════
     ELEMENT CACHE
  ══════════════════════════════════════════════════ */
  let svgEl, headEl,
      h1, h2, h3,
      elW, elP, erW, erP,
      browL, browR, mouthEl,
      armL, fistL, armR, fistR;

  function cache() {
    svgEl  = document.getElementById('bc-svg');
    headEl = document.getElementById('bc-head');
    h1     = document.getElementById('bc-h1');
    h2     = document.getElementById('bc-h2');
    h3     = document.getElementById('bc-h3');
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

  /* ══════════════════════════════════════════════════
     THEME RECOLOUR
  ══════════════════════════════════════════════════ */
  function recolor() {
    if (!svgEl) return;
    const col = strokeColor();
    svgEl.querySelectorAll('[data-rc]').forEach(el  => el.setAttribute('stroke', col));
    svgEl.querySelectorAll('[data-rcf]').forEach(el => el.setAttribute('fill',   col));
  }
  new MutationObserver(recolor)
    .observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  /* ══════════════════════════════════════════════════
     CURSOR POSITION STATE
  ══════════════════════════════════════════════════ */
  let cx = -500, cy = -500;   // raw mouse
  let px = -500, py = -500;   // display (lerped) — very slow lerp for floatiness
  let vx = 0,    vy = 0;
  let pmx = -500, pmy = -500;
  let alive = false;

  /* ══════════════════════════════════════════════════
     SPRING PHYSICS — face wobble
  ══════════════════════════════════════════════════ */
  function mkP(k, d) { return { ox:0, oy:0, vx:0, vy:0, k, d }; }
  const P = {
    head:  mkP(0.10, 0.72),
    brows: mkP(0.14, 0.65),
    mouth: mkP(0.08, 0.70),
    hair:  mkP(0.12, 0.60),
  };
  const MAX_OFF = 6;
  const DRAG    = 0.16;

  function spring(p, ax, ay) {
    p.vx = (p.vx - p.ox * p.k + ax) * p.d;
    p.vy = (p.vy - p.oy * p.k + ay) * p.d;
    p.ox = Math.max(-MAX_OFF, Math.min(MAX_OFF, p.ox + p.vx));
    p.oy = Math.max(-MAX_OFF, Math.min(MAX_OFF, p.oy + p.vy));
  }

  function tf(ox, oy) {
    return `translate(${ox.toFixed(2)},${oy.toFixed(2)})`;
  }

  /* ══════════════════════════════════════════════════
     HAND PHYSICS — very smooth, slow spring
  ══════════════════════════════════════════════════ */
  const hand = {
    L: { x: REST_L.x, y: REST_L.y, vx: 0, vy: 0 },
    R: { x: REST_R.x, y: REST_R.y, vx: 0, vy: 0 }
  };

  function springHand(h, tx, ty) {
    // extra-slow spring for floaty feel
    const k = 0.06, d = 0.78;
    h.vx = (h.vx - (h.x - tx) * k) * d;
    h.vy = (h.vy - (h.y - ty) * k) * d;
    h.x += h.vx;
    h.y += h.vy;
  }

  // Convert screen px → viewBox coords relative to face
  function screenToVB(sx, sy) {
    const scale = VB / SIZE;
    return {
      x: (sx - px + SIZE / 2) * scale,
      y: (sy - py + SIZE / 2) * scale
    };
  }

  // Update polyline arm points: shoulder → elbow (midpoint with perpendicular bend) → fist
  function setArm(polyEl, fistEl, sx, sy, fx, fy, isLeft) {
    if (!polyEl || !fistEl) return;
    // elbow = midpoint, pushed outward perpendicular to the arm direction
    const mx = (sx + fx) / 2;
    const my = (sy + fy) / 2;
    // perpendicular offset — push elbow outward from body centre
    const sign = isLeft ? -1 : 1;
    const ex = mx + sign * 18;
    const ey = my + 10;
    polyEl.setAttribute('points', `${sx.toFixed(1)},${sy.toFixed(1)} ${ex.toFixed(1)},${ey.toFixed(1)} ${fx.toFixed(1)},${fy.toFixed(1)}`);
    fistEl.setAttribute('cx', fx.toFixed(2));
    fistEl.setAttribute('cy', fy.toFixed(2));
  }

  /* ══════════════════════════════════════════════════
     HOVER DETECTION
  ══════════════════════════════════════════════════ */
  const SEL = 'a, button, [role="button"], input, select, textarea, label, [tabindex]';
  let hoveredEl = null;

  document.addEventListener('mouseover', e => {
    hoveredEl = e.target.closest(SEL) || null;
    isTouching = !!hoveredEl;
  });
  document.addEventListener('mouseout', e => {
    if (hoveredEl && !hoveredEl.contains(e.relatedTarget)) {
      hoveredEl = null;
      isTouching = false;
    }
  });

  function getHandTarget() {
    if (!hoveredEl) return null;
    const r = hoveredEl.getBoundingClientRect();
    if (!r || r.width === 0) return null;
    return screenToVB(r.left + r.width / 2, r.top + r.height / 2);
  }

  /* ══════════════════════════════════════════════════
     MOOD SYSTEM
  ══════════════════════════════════════════════════ */
  // Simple path morph: parse M/Q/L numbers and lerp them
  function parsePath(d) {
    return d.match(/-?[\d.]+/g).map(Number);
  }
  function lerpPath(a, b, t) {
    return a.map((v, i) => v + (b[i] - v) * t);
  }
  function buildPath(template, nums) {
    let i = 0;
    return template.replace(/-?[\d.]+/g, () => nums[i++].toFixed(2));
  }

  const parsedMoods = {};
  ['happy','grin','angry'].forEach(k => {
    parsedMoods[k] = {
      mouth: parsePath(M[k].mouth),
      browL: parsePath(M[k].browL),
      browR: parsePath(M[k].browR),
    };
  });

  // Current interpolated values
  let curMouth = [...parsedMoods.happy.mouth];
  let curBrowL = [...parsedMoods.happy.browL];
  let curBrowR = [...parsedMoods.happy.browR];

  function updateMoodMorph() {
    // decide target
    if (isAngry) {
      targetMood = 'angry';
    } else if (isTouching) {
      targetMood = 'grin';
    } else {
      targetMood = 'happy';
    }

    const tm = parsedMoods[targetMood];
    const spd = isAngry ? MOOD_SPEED * 2.5 : MOOD_SPEED;

    curMouth = lerpPath(curMouth, tm.mouth, spd);
    curBrowL = lerpPath(curBrowL, tm.browL, spd);
    curBrowR = lerpPath(curBrowR, tm.browR, spd);

    if (mouthEl) mouthEl.setAttribute('d', buildPath(M.happy.mouth, curMouth));
    if (browL)   browL.setAttribute('d',   buildPath(M.happy.browL, curBrowL));
    if (browR)   browR.setAttribute('d',   buildPath(M.happy.browR, curBrowR));

    // angry: tint stroke reddish by switching colour
    if (svgEl) {
      const col = isAngry ? '#ff6b6b' : strokeColor();
      svgEl.querySelectorAll('[data-rc]').forEach(el  => el.setAttribute('stroke', col));
      svgEl.querySelectorAll('[data-rcf]').forEach(el => el.setAttribute('fill',   col));
    }
  }

  /* ══════════════════════════════════════════════════
     SHAKE DETECTION
  ══════════════════════════════════════════════════ */
  const SHAKE_THRESHOLD = 28;   // px/frame to trigger anger
  const SHAKE_DECAY     = 0.88;
  const CALM_THRESHOLD  = 3;

  function updateShake(speed) {
    shakeBuffer = shakeBuffer * SHAKE_DECAY + speed * 0.12;
    if (shakeBuffer > SHAKE_THRESHOLD) {
      isAngry = true;
    } else if (shakeBuffer < CALM_THRESHOLD) {
      isAngry = false;
    }
  }

  /* ══════════════════════════════════════════════════
     PUPIL TRACKING
  ══════════════════════════════════════════════════ */
  function pupilOff(eye, mousePx, mousePy, facePx, facePy) {
    const scale = VB / SIZE;
    const mx = (mousePx - facePx + SIZE / 2) * scale;
    const my = (mousePy - facePy + SIZE / 2) * scale;
    const dx = mx - eye.cx, dy = my - eye.cy;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const r = Math.min(dist * 0.18, eye.maxR);
    return { x: dx / dist * r, y: dy / dist * r };
  }

  /* ══════════════════════════════════════════════════
     SQUASH & STRETCH
  ══════════════════════════════════════════════════ */
  function squash(speed) {
    if (!svgEl) return;
    const t  = Math.min(speed / 60, 1);
    const sx = 1 + t * 0.09;
    const sy = 1 - t * 0.06;
    svgEl.setAttribute('transform',
      `translate(${(VB/2*(1-sx)).toFixed(2)},${(VB/2*(1-sy)).toFixed(2)}) ` +
      `scale(${sx.toFixed(3)},${sy.toFixed(3)})`);
  }

  /* ══════════════════════════════════════════════════
     MOUSE EVENTS
  ══════════════════════════════════════════════════ */
  document.addEventListener('mousemove', e => {
    cx = e.clientX; cy = e.clientY;
    vx = cx - pmx;  vy = cy - pmy;
    pmx = cx; pmy = cy;
    if (!alive) { px = cx; py = cy; alive = true; wrap.style.opacity = '1'; }
  });
  document.addEventListener('mouseleave', () => wrap.style.opacity = '0');
  document.addEventListener('mouseenter', () => { if (alive) wrap.style.opacity = '1'; });

  /* ══════════════════════════════════════════════════
     SYSTEM CURSOR
  ══════════════════════════════════════════════════ */
  const st = document.createElement('style');
  st.textContent = '* { cursor: none !important; }';
  document.head.appendChild(st);

  /* ══════════════════════════════════════════════════
     BLINK
  ══════════════════════════════════════════════════ */
  function blink() {
    if (!elW || !erW) { setTimeout(blink, 3000); return; }
    const lry = elW.getAttribute('ry'), rry = erW.getAttribute('ry');
    elW.setAttribute('ry', '0.4'); erW.setAttribute('ry', '0.4');
    setTimeout(() => {
      if (elW) elW.setAttribute('ry', lry);
      if (erW) erW.setAttribute('ry', rry);
    }, 100);
    setTimeout(blink, 2000 + Math.random() * 4000);
  }
  setTimeout(blink, 1500 + Math.random() * 2000);

  /* ══════════════════════════════════════════════════
     ANIMATION LOOP
  ══════════════════════════════════════════════════ */
  function tick() {
    requestAnimationFrame(tick);
    if (!alive) return;
    if (!svgEl) cache();

    // very slow, smooth position lerp
    px += (cx - px) * 0.10;
    py += (cy - py) * 0.10;
    wrap.style.transform = `translate(${px.toFixed(2)}px,${py.toFixed(2)}px) translate(-50%,-50%)`;

    const speed = Math.sqrt(vx * vx + vy * vy);
    const ax = -vx * DRAG, ay = -vy * DRAG;

    updateShake(speed);

    // face springs
    spring(P.head,  ax * 0.7,  ay * 0.7);
    spring(P.brows, ax * 1.2,  ay * 1.3);
    spring(P.mouth, ax * 0.5,  ay * 0.55);
    spring(P.hair,  ax * 1.5,  ay * 1.7);

    // apply face transforms
    const headParts = [headEl, elW, erW];
    headParts.forEach(el => el && el.setAttribute('transform', tf(P.head.ox, P.head.oy)));
    [h1, h2, h3].forEach(el => el && el.setAttribute('transform', tf(P.hair.ox, P.hair.oy)));

    // mood morph (applies brow / mouth paths)
    updateMoodMorph();

    // brows + mouth get extra wobble on top of mood morph's setAttribute
    // (we re-apply transform, path is set by morph)
    if (browL) browL.setAttribute('transform', tf(P.brows.ox, P.brows.oy));
    if (browR) browR.setAttribute('transform', tf(P.brows.ox, P.brows.oy));
    if (mouthEl) mouthEl.setAttribute('transform', tf(P.mouth.ox, P.mouth.oy));

    // pupils
    const lo = pupilOff(EL, cx, cy, px, py);
    const ro = pupilOff(ER, cx, cy, px, py);
    if (elP) {
      elP.setAttribute('cx', (EL.cx + P.head.ox + lo.x).toFixed(2));
      elP.setAttribute('cy', (EL.cy + P.head.oy + lo.y).toFixed(2));
    }
    if (erP) {
      erP.setAttribute('cx', (ER.cx + P.head.ox + ro.x).toFixed(2));
      erP.setAttribute('cy', (ER.cy + P.head.oy + ro.y).toFixed(2));
    }

    // hand targets
    const ht = getHandTarget();
    const MAXREACH = 80;

    function clamp(rest, t) {
      if (!t) return rest;
      const dx = t.x - rest.x, dy = t.y - rest.y;
      const d  = Math.sqrt(dx*dx + dy*dy);
      if (d > MAXREACH) return { x: rest.x + dx/d*MAXREACH, y: rest.y + dy/d*MAXREACH };
      return t;
    }

    const tL = clamp(REST_L, ht);
    const tR = clamp(REST_R, ht);

    springHand(hand.L, tL.x, tL.y);
    springHand(hand.R, tR.x, tR.y);

    setArm(armL, fistL, SHL.x, SHL.y, hand.L.x, hand.L.y, true);
    setArm(armR, fistR, SHR.x, SHR.y, hand.R.x, hand.R.y, false);

    squash(speed);
    vx *= 0.80; vy *= 0.80;
  }

  tick();

})();
