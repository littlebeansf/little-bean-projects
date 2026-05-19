/**
 * LB■PROJECTS — CURSOR
 *
 * A sharp, geometric cursor in the hard-techno minimal style of the site.
 * Composed of two elements that move independently:
 *
 *   DOT   — small filled square (4×4), snaps exactly to pointer
 *   RING  — larger hollow square (22×22), lags behind with spring physics
 *
 * On hover of interactables:
 *   Ring expands to 36×36 and rotates 45° → diamond shape
 *
 * Every ~10 s a random IDLE ANIMATION fires on the ring:
 *   1. GLITCH BURST  — ring fragments into 4 corners that fly out and snap back
 *   2. SCAN LINE     — ring squashes to a horizontal slash then reforms
 *   3. ORBIT SPIN    — ring spins a full 360° with easing
 *   4. ECHO PULSE    — 2 ghost rings expand outward and fade
 *   5. FRACTURE      — ring splits into 4 clones that scatter & reunite
 *
 * Colour: always pure #ffffff with mix-blend-mode:difference → inverts whatever
 *   is underneath, always crisp black-on-light / white-on-dark without any JS.
 * Desktop / hover-capable only. localStorage forbidden → reads data-theme attr.
 */
(function () {
  'use strict';
  if (window.matchMedia('(hover: none)').matches) return;

  /* ─────────────────────────────────────────────
     COLOUR
     Always pure white — mix-blend-mode:difference
     handles light/dark inversion automatically.
  ───────────────────────────────────────────── */
  const CURSOR_COLOR = '#ffffff';
  function col() { return CURSOR_COLOR; }

  /* ─────────────────────────────────────────────
     CONSTANTS
  ───────────────────────────────────────────── */
  const DOT_SIZE    = 5;    // px, filled square
  const RING_REST   = 22;   // px, ring side at rest
  const RING_HOVER  = 38;   // px, ring side on hover
  const RING_WEIGHT = '1.5px';
  const Z           = 999999;

  /* ─────────────────────────────────────────────
     BUILD ELEMENTS
  ───────────────────────────────────────────── */
  function mkDiv(id, extra) {
    const d = document.createElement('div');
    d.id = id;
    Object.assign(d.style, {
      position:       'fixed',
      top:            '0',
      left:           '0',
      pointerEvents:  'none',
      zIndex:         Z,
      willChange:     'transform',
    }, extra || {});
    document.body.appendChild(d);
    return d;
  }

  // DOT — sharp square, exact position
  const dot = mkDiv('lbc-dot', {
    width:           `${DOT_SIZE}px`,
    height:          `${DOT_SIZE}px`,
    background:      col(),
    transform:       `translate(-50%,-50%)`,
    transition:      'background .2s',
    mixBlendMode:    'difference',
  });

  // RING — hollow square outline
  const ring = mkDiv('lbc-ring', {
    width:           `${RING_REST}px`,
    height:          `${RING_REST}px`,
    border:          `${RING_WEIGHT} solid ${col()}`,
    transform:       `translate(-50%,-50%)`,
    transition:      'border-color .2s',
    mixBlendMode:    'difference',
    opacity:         '1',
  });

  // Echo pulse clones (for idle anim #4 and #5)
  function mkGhost(i) {
    return mkDiv(`lbc-ghost-${i}`, {
      width:          `${RING_REST}px`,
      height:         `${RING_REST}px`,
      border:         `${RING_WEIGHT} solid ${col()}`,
      transform:      `translate(-50%,-50%)`,
      opacity:        '0',
      pointerEvents:  'none',
      mixBlendMode:   'difference',
    });
  }
  const g1 = mkGhost(1);
  const g2 = mkGhost(2);

  /* ─────────────────────────────────────────────
     CURSOR STATE
  ───────────────────────────────────────────── */
  let mx = -300, my = -300;     // raw mouse
  let rx = -300, ry = -300;     // ring display pos (spring)
  let rvx = 0,   rvy = 0;       // ring velocity
  let alive   = false;
  let hovering = false;
  let animating = false;        // idle anim playing

  // ring size target (lerped)
  let ringSizeTarget = RING_REST;
  let ringSize       = RING_REST;
  let ringRot        = 0;       // degrees, extra on hover
  let ringRotTarget  = 0;

  /* ─────────────────────────────────────────────
     MOUSE EVENTS
  ───────────────────────────────────────────── */
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    if (!alive) {
      rx = mx; ry = my;
      alive = true;
      dot.style.opacity  = '1';
      ring.style.opacity = '1';
    }
  });
  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    if (alive) { dot.style.opacity = '1'; ring.style.opacity = '1'; }
  });

  // hide initially
  dot.style.opacity  = '0';
  ring.style.opacity = '0';

  /* ─────────────────────────────────────────────
     HOVER DETECTION
  ───────────────────────────────────────────── */
  const SEL = 'a, button, [role="button"], input, select, textarea, label, [tabindex]';
  document.addEventListener('mouseover', e => {
    hovering = !!e.target.closest(SEL);
  });
  document.addEventListener('mouseout', e => {
    if (hovering) {
      const t = e.target.closest(SEL);
      if (t && !t.contains(e.relatedTarget)) hovering = false;
    }
  });

  /* ─────────────────────────────────────────────
     HIDE SYSTEM CURSOR
  ───────────────────────────────────────────── */
  const cs = document.createElement('style');
  cs.id = 'lbc-hide';
  cs.textContent = '* { cursor: none !important; }';
  document.head.appendChild(cs);

  /* No theme recolour needed — cursor is always pure white with
     mix-blend-mode:difference, which auto-inverts on any background. */

  /* ─────────────────────────────────────────────
     HELPERS
  ───────────────────────────────────────────── */
  function setPos(el, x, y, w, h, rot, op) {
    const hw = (w !== undefined ? w : RING_REST) / 2;
    const hh = (h !== undefined ? h : (w !== undefined ? w : RING_REST)) / 2;
    const r  = rot !== undefined ? rot : 0;
    const o  = op  !== undefined ? op  : null;
    el.style.transform = `translate(${(x - hw).toFixed(2)}px,${(y - hh).toFixed(2)}px) rotate(${r}deg)`;
    if (o !== null) el.style.opacity = String(o);
  }

  function lerp(a, b, t) { return a + (b - a) * t; }

  /* ─────────────────────────────────────────────
     IDLE ANIMATIONS
  ───────────────────────────────────────────── */
  const ANIMS = [anim_glitch, anim_scan, anim_orbit, anim_echo, anim_fracture];

  function runIdleAnim() {
    if (animating || !alive) return;
    animating = true;
    const fn = ANIMS[Math.floor(Math.random() * ANIMS.length)];
    fn(() => { animating = false; });
  }

  // easing
  function easeInOut(t) { return t < .5 ? 2*t*t : -1+(4-2*t)*t; }
  function easeOut(t)   { return 1 - Math.pow(1 - t, 3); }

  // Animate a value over duration ms, calling cb(progress 0→1) each frame
  function animateVal(duration, step, done) {
    const start = performance.now();
    function frame(now) {
      const t = Math.min((now - start) / duration, 1);
      step(t, easeInOut(t));
      if (t < 1) requestAnimationFrame(frame);
      else if (done) done();
    }
    requestAnimationFrame(frame);
  }

  /* 1. GLITCH BURST
     Ring expands hard, flickers, snaps back */
  function anim_glitch(done) {
    let phase = 0;
    const frames = [
      // [scale, rot, opacity, duration ms]
      [2.4, 12,  1,   60],
      [0.3, -8,  0.3, 40],
      [2.0, 20,  1,   50],
      [0.5, 5,   0.6, 40],
      [1.8, -15, 1,   60],
      [1.0, 0,   1,   180],
    ];
    function next() {
      if (phase >= frames.length) { done(); return; }
      const [sc, ro, op, dur] = frames[phase++];
      const baseSize = hovering ? RING_HOVER : RING_REST;
      animateVal(dur, (t, e) => {
        const s = lerp(1, sc, easeOut(t)) * baseSize;
        setPos(ring, rx, ry, s, s, ro * t, op);
      }, next);
    }
    next();
  }

  /* 2. SCAN LINE
     Ring squashes to thin horizontal bar, reforms */
  function anim_scan(done) {
    const baseSize = hovering ? RING_HOVER : RING_REST;
    // phase 1: squash to bar
    animateVal(220, (t, e) => {
      const w = lerp(baseSize, baseSize * 2.2, e);
      const h = lerp(baseSize, 2, e);
      ring.style.width  = `${w}px`;
      ring.style.height = `${h}px`;
    }, () => {
      // hold
      setTimeout(() => {
        // phase 2: reform
        animateVal(280, (t, e) => {
          const w = lerp(baseSize * 2.2, baseSize, e);
          const h = lerp(2, baseSize, e);
          ring.style.width  = `${w}px`;
          ring.style.height = `${h}px`;
        }, done);
      }, 80);
    });
  }

  /* 3. ORBIT SPIN
     Smooth 360° rotation */
  function anim_orbit(done) {
    const baseSize = hovering ? RING_HOVER : RING_REST;
    animateVal(700, (t, e) => {
      setPos(ring, rx, ry, baseSize, baseSize, 360 * easeInOut(t));
    }, done);
  }

  /* 4. ECHO PULSE
     Two ghost rings expand and fade outward */
  function anim_echo(done) {
    const baseSize = hovering ? RING_HOVER : RING_REST;
    const c = col();
    g1.style.borderColor = c;
    g2.style.borderColor = c;
    g1.style.width  = g1.style.height = `${baseSize}px`;
    g2.style.width  = g2.style.height = `${baseSize}px`;

    let done1 = false, done2 = false;
    function check() { if (done1 && done2) done(); }

    animateVal(500, (t, e) => {
      const s = lerp(baseSize, baseSize * 3.2, e);
      setPos(g1, rx, ry, s, s, 0, 1 - e);
    }, () => { g1.style.opacity = '0'; done1 = true; check(); });

    setTimeout(() => {
      animateVal(500, (t, e) => {
        const s = lerp(baseSize, baseSize * 2.4, e);
        setPos(g2, rx, ry, s, s, 0, 1 - e);
      }, () => { g2.style.opacity = '0'; done2 = true; check(); });
    }, 120);
  }

  /* 5. FRACTURE
     Ring briefly becomes 4 corner dots that scatter then snap back */
  function anim_fracture(done) {
    const baseSize = hovering ? RING_HOVER : RING_REST;
    // make 4 tiny corner fragments
    const frags = [[-1,-1],[1,-1],[-1,1],[1,1]].map(([sx,sy], i) => {
      const f = document.createElement('div');
      f.style.cssText = `
        position:fixed; top:0; left:0; z-index:${Z};
        width:6px; height:6px;
        background:${col()};
        pointer-events:none;
        mix-blend-mode:difference;
        opacity:0;
      `;
      document.body.appendChild(f);
      return { el: f, sx, sy };
    });

    // hide ring
    ring.style.opacity = '0';

    // scatter out
    animateVal(200, (t, e) => {
      frags.forEach(({ el, sx, sy }) => {
        const ox = sx * lerp(0, 28, e);
        const oy = sy * lerp(0, 28, e);
        el.style.opacity = String(1 - t * 0.1);
        el.style.transform = `translate(${(rx + ox - 3).toFixed(1)}px,${(ry + oy - 3).toFixed(1)}px)`;
      });
    }, () => {
      // snap back
      animateVal(280, (t, e) => {
        frags.forEach(({ el, sx, sy }) => {
          const ox = sx * lerp(28, 0, e);
          const oy = sy * lerp(28, 0, e);
          el.style.opacity = String(1 - e);
          el.style.transform = `translate(${(rx + ox - 3).toFixed(1)}px,${(ry + oy - 3).toFixed(1)}px)`;
        });
      }, () => {
        frags.forEach(f => f.el.remove());
        ring.style.opacity = '1';
        done();
      });
    });
  }

  /* ─────────────────────────────────────────────
     IDLE TIMER
     Fires every 9–12 s (random jitter)
  ───────────────────────────────────────────── */
  function scheduleIdle() {
    setTimeout(() => {
      runIdleAnim();
      scheduleIdle();
    }, 9000 + Math.random() * 3000);
  }
  scheduleIdle();

  /* ─────────────────────────────────────────────
     ANIMATION LOOP
  ───────────────────────────────────────────── */
  function tick() {
    requestAnimationFrame(tick);
    if (!alive) return;

    // DOT — snaps exactly, no lag
    dot.style.transform = `translate(${(mx - DOT_SIZE/2).toFixed(1)}px,${(my - DOT_SIZE/2).toFixed(1)}px)`;

    // RING — spring physics lag
    const k = 0.18, damp = 0.75;
    rvx = (rvx + (mx - rx) * k) * damp;
    rvy = (rvy + (my - ry) * k) * damp;
    rx += rvx;
    ry += rvy;

    // size + rotation lerp
    ringSizeTarget = hovering ? RING_HOVER : RING_REST;
    ringSize       = lerp(ringSize, ringSizeTarget, 0.12);
    ringRotTarget  = hovering ? 45 : 0;
    ringRot        = lerp(ringRot, ringRotTarget, 0.10);

    if (!animating) {
      // reset any anim-modified props
      ring.style.width   = `${ringSize.toFixed(2)}px`;
      ring.style.height  = `${ringSize.toFixed(2)}px`;
      ring.style.opacity = '1';
      setPos(ring, rx, ry, ringSize, ringSize, ringRot);
    }

    // keep ghosts centred in case they're mid-anim
    // (they manage themselves via animateVal)
  }

  tick();

})();
