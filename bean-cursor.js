/**
 * LB STICKMAN CURSOR
 * Outline-only stickman face. No fill. Stroke colour adapts to theme.
 * White in dark mode, near-black in light mode.
 * Large (64px), expressive moods, physics-lagged face parts, pupil tracking.
 * Desktop / hover-capable devices only.
 */
(function () {
  'use strict';

  if (window.matchMedia('(hover: none)').matches) return;

  /* ─── THEME COLOUR ───────────────────────────────────────────────────── */
  // The site stores theme in a JS variable (localStorage forbidden in iframe).
  // We read the <html> data-theme attribute, which the site sets on toggle.
  function getStrokeColor() {
    const theme = document.documentElement.getAttribute('data-theme');
    // dark mode → white stroke, light mode → near-black stroke
    return (theme === 'light') ? '#0f0e0c' : '#ffffff';
  }

  // Watch for theme changes and recolour
  const themeObserver = new MutationObserver(updateColor);
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  function updateColor() {
    const c = getStrokeColor();
    if (!svgEl) return;
    svgEl.querySelectorAll('[data-recolor]').forEach(el => {
      el.setAttribute('stroke', c);
    });
    // pupils are filled dots, not strokes
    svgEl.querySelectorAll('[data-recolor-fill]').forEach(el => {
      el.setAttribute('fill', c);
    });
  }

  /* ─── MOODS ──────────────────────────────────────────────────────────── */
  // All paths live inside a 100×100 viewBox for easy big expressive drawing.
  // Head centre: cx=50, cy=38, r=26
  // Eye centres: left (38,34)  right (62,34)
  const MOODS = {
    happy: {
      // big grin — wide arc upward
      mouth: 'M 32 48 Q 50 62 68 48',
      // brows relaxed, slightly raised
      leftBrow:  'M 30 26 Q 38 22 46 26',
      rightBrow: 'M 54 26 Q 62 22 70 26',
      // open round eyes (drawn as circles via path)
      leftEyeRx: 5, leftEyeRy: 6,
      rightEyeRx: 5, rightEyeRy: 6,
      // hair: a little tuft on top
      hair: 'M 44 12 Q 50 6 56 12',
      // optional extra: rosy cheek circles (stroke only)
      cheek: true
    },
    sad: {
      mouth: 'M 32 56 Q 50 44 68 56',
      leftBrow:  'M 30 28 Q 38 32 46 28',
      rightBrow: 'M 54 28 Q 62 32 70 28',
      leftEyeRx: 4.5, leftEyeRy: 5,
      rightEyeRx: 4.5, rightEyeRy: 5,
      hair: 'M 46 12 Q 50 8 54 12',
      cheek: false
    },
    angry: {
      mouth: 'M 34 55 Q 50 50 66 55',
      // inner brow corners pulled sharply down
      leftBrow:  'M 30 24 Q 38 30 46 24',
      rightBrow: 'M 54 24 Q 62 30 70 24',
      leftEyeRx: 5, leftEyeRy: 4,
      rightEyeRx: 5, rightEyeRy: 4,
      // spiky angry hair
      hair: 'M 36 14 L 42 8 L 46 14 L 50 6 L 54 14 L 58 8 L 64 14',
      cheek: false
    },
    disappointed: {
      mouth: 'M 36 54 Q 50 50 64 54',
      leftBrow:  'M 30 27 Q 38 27 46 29',
      rightBrow: 'M 54 29 Q 62 27 70 27',
      leftEyeRx: 4, leftEyeRy: 3,
      rightEyeRx: 4, rightEyeRy: 3,
      // flat limp hair
      hair: 'M 40 13 Q 50 10 60 14',
      cheek: false
    }
  };

  const moodKeys = Object.keys(MOODS);
  const mood = MOODS[moodKeys[Math.floor(Math.random() * moodKeys.length)]];

  /* ─── BUILD SVG ──────────────────────────────────────────────────────── */
  const SIZE = 72; // px rendered size
  const c = getStrokeColor();
  const SW = 3;   // stroke-width for face lines
  const SWthin = 2.2; // brows / hair

  const wrapper = document.createElement('div');
  wrapper.id = 'bean-cursor';
  wrapper.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: ${SIZE}px; height: ${SIZE}px;
    pointer-events: none;
    z-index: 99999;
    transform: translate(-50%, -50%);
    will-change: transform;
    opacity: 0;
    transition: opacity .2s;
  `;

  wrapper.innerHTML = `
  <svg id="bc-svg" viewBox="0 0 100 100" width="${SIZE}" height="${SIZE}"
       xmlns="http://www.w3.org/2000/svg" overflow="visible">

    <!-- HEAD — outline circle, no fill -->
    <circle id="bc-head" cx="50" cy="38" r="26"
      fill="none" stroke="${c}" stroke-width="${SW}"
      stroke-linecap="round" data-recolor/>

    <!-- HAIR -->
    <path id="bc-hair" d="${mood.hair}"
      fill="none" stroke="${c}" stroke-width="${SWthin}"
      stroke-linecap="round" stroke-linejoin="round" data-recolor/>

    <!-- CHEEKS — stroke circles, hidden unless happy -->
    <circle id="bc-ck-l" cx="30" cy="46" r="5"
      fill="none" stroke="${c}" stroke-width="1.4" opacity="${mood.cheek ? 0.45 : 0}"
      data-recolor/>
    <circle id="bc-ck-r" cx="70" cy="46" r="5"
      fill="none" stroke="${c}" stroke-width="1.4" opacity="${mood.cheek ? 0.45 : 0}"
      data-recolor/>

    <!-- LEFT EYE — ellipse outline + filled pupil dot -->
    <ellipse id="bc-el-white" cx="38" cy="34"
      rx="${mood.leftEyeRx}" ry="${mood.leftEyeRy}"
      fill="none" stroke="${c}" stroke-width="${SW * 0.8}" data-recolor/>
    <circle id="bc-el-pupil" cx="38" cy="34" r="2"
      fill="${c}" stroke="none" data-recolor-fill/>

    <!-- RIGHT EYE -->
    <ellipse id="bc-er-white" cx="62" cy="34"
      rx="${mood.rightEyeRx}" ry="${mood.rightEyeRy}"
      fill="none" stroke="${c}" stroke-width="${SW * 0.8}" data-recolor/>
    <circle id="bc-er-pupil" cx="62" cy="34" r="2"
      fill="${c}" stroke="none" data-recolor-fill/>

    <!-- BROWS -->
    <path id="bc-brow-l" d="${mood.leftBrow}"
      fill="none" stroke="${c}" stroke-width="${SWthin}"
      stroke-linecap="round" data-recolor/>
    <path id="bc-brow-r" d="${mood.rightBrow}"
      fill="none" stroke="${c}" stroke-width="${SWthin}"
      stroke-linecap="round" data-recolor/>

    <!-- MOUTH -->
    <path id="bc-mouth" d="${mood.mouth}"
      fill="none" stroke="${c}" stroke-width="${SW}"
      stroke-linecap="round" data-recolor/>

    <!-- NECK -->
    <line id="bc-neck" x1="50" y1="64" x2="50" y2="78"
      stroke="${c}" stroke-width="${SW}" stroke-linecap="round" data-recolor/>

    <!-- BODY — two arms as triangle sides, spine down -->
    <line id="bc-arm-l" x1="50" y1="74" x2="24" y2="96"
      stroke="${c}" stroke-width="${SW}" stroke-linecap="round" data-recolor/>
    <line id="bc-arm-r" x1="50" y1="74" x2="76" y2="96"
      stroke="${c}" stroke-width="${SW}" stroke-linecap="round" data-recolor/>

  </svg>`;

  document.body.appendChild(wrapper);

  /* ─── ELEMENT CACHE ──────────────────────────────────────────────────── */
  let svgEl, head, hair, ckL, ckR, elW, elP, erW, erP, browL, browR, mouthEl, neck, armL, armR;

  function cacheEls() {
    svgEl  = document.getElementById('bc-svg');
    head   = document.getElementById('bc-head');
    hair   = document.getElementById('bc-hair');
    ckL    = document.getElementById('bc-ck-l');
    ckR    = document.getElementById('bc-ck-r');
    elW    = document.getElementById('bc-el-white');
    elP    = document.getElementById('bc-el-pupil');
    erW    = document.getElementById('bc-er-white');
    erP    = document.getElementById('bc-er-pupil');
    browL  = document.getElementById('bc-brow-l');
    browR  = document.getElementById('bc-brow-r');
    mouthEl= document.getElementById('bc-mouth');
    neck   = document.getElementById('bc-neck');
    armL   = document.getElementById('bc-arm-l');
    armR   = document.getElementById('bc-arm-r');
  }

  /* ─── CURSOR POSITION STATE ──────────────────────────────────────────── */
  let cx = -300, cy = -300;   // target (raw mouse)
  let px = -300, py = -300;   // current display position (lerped)
  let vx = 0,    vy = 0;      // cursor velocity
  let prevMx = -300, prevMy = -300;
  let hasMoved = false;

  /* ─── PHYSICS PARTS ──────────────────────────────────────────────────── */
  // Each group of face elements can have an independent spring offset
  const P = {
    face:  { ox: 0, oy: 0, vx: 0, vy: 0, k: 0.14, d: 0.70 }, // whole face wobble
    brows: { ox: 0, oy: 0, vx: 0, vy: 0, k: 0.20, d: 0.65 }, // brows most reactive
    mouth: { ox: 0, oy: 0, vx: 0, vy: 0, k: 0.10, d: 0.68 }, // mouth lags most
    hair:  { ox: 0, oy: 0, vx: 0, vy: 0, k: 0.16, d: 0.62 }, // hair flops
    body:  { ox: 0, oy: 0, vx: 0, vy: 0, k: 0.09, d: 0.72 }, // body drags
  };

  const DRAG = 0.18;      // how much velocity injects into physics
  const MAX_OFF = 5;      // max px offset per part

  function springStep(p, ax, ay) {
    p.vx = (p.vx - p.ox * p.k + ax) * p.d;
    p.vy = (p.vy - p.oy * p.k + ay) * p.d;
    p.ox = Math.max(-MAX_OFF, Math.min(MAX_OFF, p.ox + p.vx));
    p.oy = Math.max(-MAX_OFF, Math.min(MAX_OFF, p.oy + p.vy));
  }

  function tf(ox, oy) {
    return `translate(${ox.toFixed(2)},${oy.toFixed(2)})`;
  }

  /* ─── PUPIL TRACKING ─────────────────────────────────────────────────── */
  // Eye centres in SVG viewBox space (0–100)
  const EL = { cx: 38, cy: 34, maxR: 2.2 };
  const ER = { cx: 62, cy: 34, maxR: 2.2 };

  function pupilOffset(eye, mousePx, mousePy, facePx, facePy) {
    // map mouse to viewBox coords
    const scale = 100 / SIZE;
    const mx = (mousePx - facePx + SIZE / 2) * scale;
    const my = (mousePy - facePy + SIZE / 2) * scale;
    const dx = mx - eye.cx;
    const dy = my - eye.cy;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const r = Math.min(dist * 0.25, eye.maxR);
    return { x: dx / dist * r, y: dy / dist * r };
  }

  /* ─── SQUASH & STRETCH ───────────────────────────────────────────────── */
  function squash(speed) {
    if (!svgEl) return;
    const t = Math.min(speed / 55, 1);
    // stretch along movement direction, squash perp
    const angle = Math.atan2(vy, vx);
    const sx = 1 + t * 0.12 * Math.abs(Math.cos(angle));
    const sy = 1 + t * 0.12 * Math.abs(Math.sin(angle));
    // pivot around viewBox centre (50,50)
    svgEl.setAttribute('transform',
      `translate(${(50*(1-sx)).toFixed(2)},${(50*(1-sy)).toFixed(2)}) scale(${sx.toFixed(3)},${sy.toFixed(3)})`);
  }

  /* ─── MOUSE EVENTS ───────────────────────────────────────────────────── */
  document.addEventListener('mousemove', function (e) {
    cx = e.clientX;
    cy = e.clientY;
    vx = cx - prevMx;
    vy = cy - prevMy;
    prevMx = cx; prevMy = cy;
    if (!hasMoved) {
      px = cx; py = cy;
      hasMoved = true;
      wrapper.style.opacity = '1';
    }
  });
  document.addEventListener('mouseleave', () => { wrapper.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { if (hasMoved) wrapper.style.opacity = '1'; });

  /* ─── HIDE SYSTEM CURSOR ─────────────────────────────────────────────── */
  const style = document.createElement('style');
  style.id = 'bc-hide-cursor';
  style.textContent = '* { cursor: none !important; }';
  document.head.appendChild(style);

  /* ─── BLINK ──────────────────────────────────────────────────────────── */
  function blink() {
    if (!elW || !erW) { setTimeout(blink, 3000); return; }
    const lry = elW.getAttribute('ry');
    const rry = erW.getAttribute('ry');
    elW.setAttribute('ry', '0.5');
    erW.setAttribute('ry', '0.5');
    setTimeout(() => {
      if (elW) elW.setAttribute('ry', lry);
      if (erW) erW.setAttribute('ry', rry);
    }, 110);
    setTimeout(blink, 2200 + Math.random() * 3800);
  }
  setTimeout(blink, 1500 + Math.random() * 2000);

  /* ─── ANIMATION LOOP ─────────────────────────────────────────────────── */
  function tick() {
    requestAnimationFrame(tick);
    if (!hasMoved) return;
    if (!svgEl) cacheEls();

    // lerp position
    px += (cx - px) * 0.25;
    py += (cy - py) * 0.25;
    wrapper.style.transform = `translate(${px.toFixed(1)}px,${py.toFixed(1)}px) translate(-50%,-50%)`;

    const speed = Math.sqrt(vx * vx + vy * vy);
    // inertia: push opposite to movement direction
    const ax = -vx * DRAG;
    const ay = -vy * DRAG;

    springStep(P.face,  ax * 0.8, ay * 0.8);
    springStep(P.brows, ax * 1.4, ay * 1.5);
    springStep(P.mouth, ax * 0.6, ay * 0.7);
    springStep(P.hair,  ax * 1.6, ay * 1.8);
    springStep(P.body,  ax * 0.4, ay * 0.5);

    // apply transforms to SVG elements
    if (head)   head.setAttribute('transform',   tf(P.face.ox,  P.face.oy));
    if (ckL)    ckL.setAttribute('transform',    tf(P.face.ox,  P.face.oy));
    if (ckR)    ckR.setAttribute('transform',    tf(P.face.ox,  P.face.oy));
    if (elW)    elW.setAttribute('transform',    tf(P.face.ox,  P.face.oy));
    if (erW)    erW.setAttribute('transform',    tf(P.face.ox,  P.face.oy));
    if (browL)  browL.setAttribute('transform',  tf(P.brows.ox, P.brows.oy));
    if (browR)  browR.setAttribute('transform',  tf(P.brows.ox, P.brows.oy));
    if (mouthEl)mouthEl.setAttribute('transform',tf(P.mouth.ox, P.mouth.oy));
    if (hair)   hair.setAttribute('transform',   tf(P.hair.ox,  P.hair.oy));
    if (neck)   neck.setAttribute('transform',   tf(P.body.ox,  P.body.oy));
    if (armL)   armL.setAttribute('transform',   tf(P.body.ox,  P.body.oy));
    if (armR)   armR.setAttribute('transform',   tf(P.body.ox,  P.body.oy));

    // pupils: eye offset + look toward mouse
    const lOff = pupilOffset(EL, cx, cy, px, py);
    const rOff = pupilOffset(ER, cx, cy, px, py);
    if (elP) {
      elP.setAttribute('cx', (EL.cx + P.face.ox + lOff.x).toFixed(2));
      elP.setAttribute('cy', (EL.cy + P.face.oy + lOff.y).toFixed(2));
    }
    if (erP) {
      erP.setAttribute('cx', (ER.cx + P.face.ox + rOff.x).toFixed(2));
      erP.setAttribute('cy', (ER.cy + P.face.oy + rOff.y).toFixed(2));
    }

    squash(speed);
    vx *= 0.75;
    vy *= 0.75;
  }

  tick();

})();
