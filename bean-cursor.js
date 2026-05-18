/**
 * LB BEAN CURSOR
 * A tiny animated bean face that follows the cursor.
 * - Random mood on load (happy / sad / angry / disappointed)
 * - Eyes track the mouse
 * - Face elements have spring/lag physics on fast movement
 * - Desktop only (hidden on touch devices)
 */
(function () {
  'use strict';

  // Skip on touch-primary devices
  if (window.matchMedia('(hover: none)').matches) return;

  /* ─── MOODS ─────────────────────────────────────────────────────────── */
  const MOODS = {
    happy: {
      // wide smile
      mouth: 'M 10 22 Q 20 30 30 22',
      // normal round eyes
      leftEye:  { rx: 3.5, ry: 4 },
      rightEye: { rx: 3.5, ry: 4 },
      // straight brows
      leftBrow:  'M 8 13 Q 12 11 16 13',
      rightBrow: 'M 24 13 Q 28 11 32 13',
      // rosy cheeks
      cheeks: true,
      color: '#f5c842'
    },
    sad: {
      mouth: 'M 10 27 Q 20 20 30 27',
      leftEye:  { rx: 3, ry: 3.5 },
      rightEye: { rx: 3, ry: 3.5 },
      // drooping brows (inner corners up = sad)
      leftBrow:  'M 8 14 Q 12 16 16 14',
      rightBrow: 'M 24 14 Q 28 16 32 14',
      cheeks: false,
      color: '#7eb8d4'
    },
    angry: {
      mouth: 'M 10 26 Q 20 22 30 26',
      leftEye:  { rx: 3.5, ry: 3 },
      rightEye: { rx: 3.5, ry: 3 },
      // angled brows (inner down = angry)
      leftBrow:  'M 8 12 Q 12 15 16 12',
      rightBrow: 'M 24 12 Q 28 15 32 12',
      cheeks: false,
      color: '#e8735a'
    },
    disappointed: {
      mouth: 'M 12 26 Q 20 22 28 26',
      leftEye:  { rx: 3, ry: 2.5 },
      rightEye: { rx: 3, ry: 2.5 },
      // flat tired brows
      leftBrow:  'M 8 13 Q 12 13 16 14',
      rightBrow: 'M 24 14 Q 28 13 32 13',
      cheeks: false,
      color: '#a89fc4'
    }
  };

  const moodKeys = Object.keys(MOODS);
  const startMood = MOODS[moodKeys[Math.floor(Math.random() * moodKeys.length)]];

  /* ─── BUILD SVG ─────────────────────────────────────────────────────── */
  const SIZE = 44; // px, the face container

  const el = document.createElement('div');
  el.id = 'bean-cursor';
  el.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: ${SIZE}px; height: ${SIZE}px;
    pointer-events: none;
    z-index: 99999;
    transform: translate(-50%, -50%);
    will-change: transform;
    transition: opacity .25s;
    opacity: 0;
  `;

  // SVG face — all parts addressed by id for animation
  el.innerHTML = `
  <svg id="bean-face-svg" viewBox="0 0 40 40" width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
    <!-- drop shadow -->
    <defs>
      <filter id="bshadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-color="#0003"/>
      </filter>
    </defs>

    <!-- body blob — slightly squashed circle -->
    <ellipse id="bface" cx="20" cy="21" rx="16" ry="15"
      fill="${startMood.color}" stroke="#0f0e0c" stroke-width="1.5"
      filter="url(#bshadow)"/>

    <!-- cheeks (only shown for happy) -->
    <ellipse id="bck-l" cx="10" cy="24" rx="4" ry="2.5"
      fill="#ff9eb0" opacity="${startMood.cheeks ? 0.45 : 0}"/>
    <ellipse id="bck-r" cx="30" cy="24" rx="4" ry="2.5"
      fill="#ff9eb0" opacity="${startMood.cheeks ? 0.45 : 0}"/>

    <!-- left eye white + pupil -->
    <ellipse id="beye-l-white" cx="13.5" cy="19" rx="${startMood.leftEye.rx}" ry="${startMood.leftEye.ry}"
      fill="white" stroke="#0f0e0c" stroke-width="1"/>
    <circle id="beye-l-pupil" cx="13.5" cy="19.5" r="1.6" fill="#0f0e0c"/>

    <!-- right eye white + pupil -->
    <ellipse id="beye-r-white" cx="26.5" cy="19" rx="${startMood.rightEye.rx}" ry="${startMood.rightEye.ry}"
      fill="white" stroke="#0f0e0c" stroke-width="1"/>
    <circle id="beye-r-pupil" cx="26.5" cy="19.5" r="1.6" fill="#0f0e0c"/>

    <!-- eyebrows -->
    <path id="bbrow-l" d="${startMood.leftBrow}"
      fill="none" stroke="#0f0e0c" stroke-width="1.8" stroke-linecap="round"/>
    <path id="bbrow-r" d="${startMood.rightBrow}"
      fill="none" stroke="#0f0e0c" stroke-width="1.8" stroke-linecap="round"/>

    <!-- mouth -->
    <path id="bmouth" d="${startMood.mouth}"
      fill="none" stroke="#0f0e0c" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`;

  document.body.appendChild(el);

  /* ─── STATE ─────────────────────────────────────────────────────────── */
  // Cursor physical position
  let cx = -200, cy = -200;
  // Display position (spring-follows cursor)
  let px = -200, py = -200;
  // Velocity of cursor
  let vx = 0, vy = 0;
  // Previous raw mouse pos for velocity
  let prevMx = -200, prevMy = -200;

  // Physics offsets for face parts (spring relative to face center)
  // Each part lags behind fast movement in the opposite direction
  const parts = {
    eyes:   { ox: 0, oy: 0, vx: 0, vy: 0 },
    brows:  { ox: 0, oy: 0, vx: 0, vy: 0 },
    mouth:  { ox: 0, oy: 0, vx: 0, vy: 0 },
    cheeks: { ox: 0, oy: 0, vx: 0, vy: 0 }
  };

  // Spring constants — brows are stiffest, mouth is loosest
  const SPRING = { eyes: 0.18, brows: 0.22, mouth: 0.12, cheeks: 0.14 };
  const DAMP   = { eyes: 0.72, brows: 0.68, mouth: 0.65, cheeks: 0.70 };
  const DRAG   = 0.15; // how much velocity moves parts (inverse: pushes opposite)
  const MAX_OFFSET = 3.5; // px max part displacement

  // Eye tracking — pupils look toward the mouse within eyeball bounds
  const EYE_L = { cx: 13.5, cy: 19, maxR: 1.5 };
  const EYE_R = { cx: 26.5, cy: 19, maxR: 1.5 };

  // SVG elements cache
  let faceEl, eyeLW, eyeLPupil, eyeRW, eyeRPupil, browL, browR, mouth, ckL, ckR;

  function cacheSVGEls() {
    faceEl   = document.getElementById('bface');
    eyeLW    = document.getElementById('beye-l-white');
    eyeLPupil= document.getElementById('beye-l-pupil');
    eyeRW    = document.getElementById('beye-r-white');
    eyeRPupil= document.getElementById('beye-r-pupil');
    browL    = document.getElementById('bbrow-l');
    browR    = document.getElementById('bbrow-r');
    mouth    = document.getElementById('bmouth');
    ckL      = document.getElementById('bck-l');
    ckR      = document.getElementById('bck-r');
  }

  /* ─── MOUSE ─────────────────────────────────────────────────────────── */
  let hasMoved = false;

  document.addEventListener('mousemove', function (e) {
    cx = e.clientX;
    cy = e.clientY;

    // velocity from raw movement
    vx = cx - prevMx;
    vy = cy - prevMy;
    prevMx = cx;
    prevMy = cy;

    if (!hasMoved) {
      px = cx; py = cy;
      hasMoved = true;
      el.style.opacity = '1';
    }
  });

  document.addEventListener('mouseleave', function () {
    el.style.opacity = '0';
  });
  document.addEventListener('mouseenter', function () {
    if (hasMoved) el.style.opacity = '1';
  });

  /* ─── HIDE SYSTEM CURSOR ─────────────────────────────────────────────── */
  const cursorStyle = document.createElement('style');
  cursorStyle.id = 'bean-cursor-style';
  cursorStyle.textContent = `
    * { cursor: none !important; }
    a, button, [role="button"], label, select, input, textarea {
      cursor: none !important;
    }
  `;
  document.head.appendChild(cursorStyle);

  /* ─── SPRING PHYSICS HELPERS ─────────────────────────────────────────── */
  function springStep(part, key, accelX, accelY) {
    const k = SPRING[key];
    const d = DAMP[key];
    // spring pulls toward 0 (resting center)
    part.vx = (part.vx - part.ox * k + accelX) * d;
    part.vy = (part.vy - part.oy * k + accelY) * d;
    part.ox += part.vx;
    part.oy += part.vy;
    // clamp
    part.ox = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, part.ox));
    part.oy = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, part.oy));
  }

  /* ─── EYE PUPIL TRACKING ─────────────────────────────────────────────── */
  function getPupilOffset(eyeSVGCenter, mousePx, mousePy, facePx, facePy, svgSize) {
    // convert mouse pos to SVG coordinate space
    const scale = 40 / svgSize; // SVG viewBox is 40x40, element is SIZE px
    const mx = (mousePx - facePx + svgSize / 2) * scale;
    const my = (mousePy - facePy + svgSize / 2) * scale;

    const dx = mx - eyeSVGCenter.cx;
    const dy = my - eyeSVGCenter.cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxR = eyeSVGCenter.maxR;

    if (dist === 0) return { x: 0, y: 0 };
    const r = Math.min(dist, maxR * 8) / (maxR * 8) * maxR; // smooth approach
    return {
      x: (dx / dist) * r,
      y: (dy / dist) * r
    };
  }

  /* ─── APPLY PART TRANSFORMS ─────────────────────────────────────────── */
  function applyTransform(svgEl, ox, oy) {
    if (!svgEl) return;
    svgEl.setAttribute('transform', `translate(${ox.toFixed(2)},${oy.toFixed(2)})`);
  }

  /* ─── SQUASH & STRETCH on speed ─────────────────────────────────────── */
  function applySquash(speed) {
    if (!faceEl) return;
    // at rest: rx=16 ry=15, at speed: squash perpendicular to motion
    const squeeze = Math.min(speed / 60, 1);
    // direction of motion
    const angle = Math.atan2(vy, vx);
    // squash rx/ry based on angle — simplified: just squash face slightly
    const scaleX = 1 + squeeze * 0.08;
    const scaleY = 1 - squeeze * 0.06;
    faceEl.setAttribute('transform', `scale(${scaleX.toFixed(3)},${scaleY.toFixed(3)})`);
    // transform-origin workaround for SVG: use translate to center
    faceEl.setAttribute('transform',
      `translate(${(20*(1-scaleX)).toFixed(2)},${(21*(1-scaleY)).toFixed(2)}) scale(${scaleX.toFixed(3)},${scaleY.toFixed(3)})`);
  }

  /* ─── ANIMATION LOOP ─────────────────────────────────────────────────── */
  function tick() {
    requestAnimationFrame(tick);
    if (!hasMoved) return;
    if (!faceEl) cacheSVGEls();

    // smooth face position toward cursor (simple lerp)
    px += (cx - px) * 0.28;
    py += (cy - py) * 0.28;

    // move the DOM element
    el.style.transform = `translate(${px.toFixed(1)}px, ${py.toFixed(1)}px) translate(-50%,-50%)`;

    const speed = Math.sqrt(vx * vx + vy * vy);

    // physics acceleration = opposite to velocity (inertia lag)
    const ax = -vx * DRAG;
    const ay = -vy * DRAG;

    springStep(parts.eyes,   'eyes',   ax * 0.9,  ay * 0.9);
    springStep(parts.brows,  'brows',  ax * 1.1,  ay * 1.3);
    springStep(parts.mouth,  'mouth',  ax * 0.7,  ay * 0.8);
    springStep(parts.cheeks, 'cheeks', ax * 0.5,  ay * 0.5);

    // pupil tracking
    const lpOff = getPupilOffset(EYE_L, cx, cy, px, py, SIZE);
    const rpOff = getPupilOffset(EYE_R, cx, cy, px, py, SIZE);

    // apply transforms — parts shift by their physics offset
    applyTransform(eyeLW,     parts.eyes.ox, parts.eyes.oy);
    applyTransform(eyeRW,     parts.eyes.ox, parts.eyes.oy);
    applyTransform(browL,     parts.brows.ox, parts.brows.oy);
    applyTransform(browR,     parts.brows.ox, parts.brows.oy);
    applyTransform(mouth,     parts.mouth.ox, parts.mouth.oy);
    applyTransform(ckL,       parts.cheeks.ox, parts.cheeks.oy);
    applyTransform(ckR,       parts.cheeks.ox, parts.cheeks.oy);

    // pupils = eye offset + look direction
    if (eyeLPupil) {
      eyeLPupil.setAttribute('cx', (EYE_L.cx + parts.eyes.ox + lpOff.x).toFixed(2));
      eyeLPupil.setAttribute('cy', (EYE_L.cy + parts.eyes.oy + lpOff.y).toFixed(2));
    }
    if (eyeRPupil) {
      eyeRPupil.setAttribute('cx', (EYE_R.cx + parts.eyes.ox + rpOff.x).toFixed(2));
      eyeRPupil.setAttribute('cy', (EYE_R.cy + parts.eyes.oy + rpOff.y).toFixed(2));
    }

    applySquash(speed);

    // dampen velocity each frame so it decays
    vx *= 0.78;
    vy *= 0.78;
  }

  tick();

  /* ─── BLINK ─────────────────────────────────────────────────────────── */
  function blink() {
    if (!eyeLW || !eyeRW) return;
    const origLry = eyeLW.getAttribute('ry');
    const origRry = eyeRW.getAttribute('ry');
    [eyeLW, eyeRW].forEach(e => e.setAttribute('ry', '0.4'));
    setTimeout(function () {
      if (eyeLW) eyeLW.setAttribute('ry', origLry);
      if (eyeRW) eyeRW.setAttribute('ry', origRry);
    }, 120);
    // schedule next blink
    setTimeout(blink, 2500 + Math.random() * 4000);
  }
  setTimeout(blink, 1800 + Math.random() * 2000);

})();
