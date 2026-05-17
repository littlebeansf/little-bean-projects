/* ============================================================
   LB.PROJECTS — App Logic v2
   ============================================================ */

const PROJECTS = [
  {
    id: 'gwunt',
    name: 'gwunt',
    category: 'games',
    categoryLabel: 'Game',
    description: 'A Gwent-inspired mythology card battler with 6 factions, an AI opponent, 106 AI-generated card art images, and old-school RPG music.',
    github: 'https://github.com/littlebeansf/gwunt',
    language: 'TypeScript + Python',
    isPrivate: false,
    updated: '2026-05-17',
    highlights: [
      '6 unique mythological factions',
      'AI opponent with strategic decision making',
      '106 AI-generated card art images',
      'Old-school RPG soundtrack',
      'Full Gwent-style card battler mechanics'
    ]
  },
  {
    id: 'couch-quest',
    name: 'couch-quest',
    category: 'games',
    categoryLabel: 'Game',
    description: 'The party game for when the couch becomes a quest. A mobile-first stoner-culture sidequest party card game.',
    github: 'https://github.com/littlebeansf/couch-quest',
    language: 'TypeScript',
    isPrivate: false,
    updated: '2026-05-17',
    highlights: [
      'Mobile-first single-device multiplayer',
      'Party card game with sidequest mechanics',
      'Built for casual couch sessions'
    ]
  },
  {
    id: 'dealer-life-simulator',
    name: 'dealer-life-simulator',
    category: 'games',
    categoryLabel: 'Game',
    description: 'A life simulator — navigate choices, build a story, and see where your decisions take you. Full TypeScript simulation loop.',
    github: 'https://github.com/littlebeansf/dealer-life-simulator',
    language: 'TypeScript',
    isPrivate: false,
    updated: '2026-05-17',
    highlights: [
      'Branching decision tree',
      'Full game progression loop',
      'Most recently updated project'
    ]
  },
  {
    id: 'framestack',
    name: 'framestack',
    category: 'trackers',
    categoryLabel: 'Tracker',
    description: 'Your personal media universe. Track anime, manga, movies, series, and books — all in one place.',
    github: 'https://github.com/littlebeansf/framestack',
    language: 'TypeScript',
    isPrivate: false,
    updated: '2026-05-17',
    highlights: [
      'Unified media tracking — anime, manga, film, series, books',
      'Personal library dashboard',
      'TypeScript + HTML/CSS stack'
    ]
  },
  {
    id: 'cardvault',
    name: 'cardvault',
    category: 'trackers',
    categoryLabel: 'Tracker',
    description: 'Premium card collection tracker built with React, Express, and SQLite. Catalog and manage your physical card collection.',
    github: 'https://github.com/littlebeansf/cardvault',
    language: 'TypeScript',
    isPrivate: false,
    updated: '2026-05-17',
    highlights: [
      'React frontend + Express backend',
      'SQLite local database',
      'Full-stack TypeScript architecture'
    ]
  },
  {
    id: 'wishlist-collection',
    name: 'wishlist-collection',
    category: 'trackers',
    categoryLabel: 'Tracker',
    description: 'Private wishlist and collection tracker. Keep tabs on what you want, what you have, and what\'s next.',
    github: 'https://github.com/littlebeansf/wishlist-collection',
    language: 'TypeScript',
    isPrivate: true,
    updated: '2026-05-17',
    highlights: [
      'Private repository',
      'Wishlist + owned collection management',
      'Same stack as CardVault'
    ]
  },
  {
    id: 'stringcraft',
    name: 'stringcraft',
    category: 'tools',
    categoryLabel: 'Tool',
    description: 'Professional string art planner. 2D canvas editor, 3D preview, multi-color layers, image-to-art generation, and full export suite.',
    github: 'https://github.com/littlebeansf/stringcraft',
    language: 'TypeScript',
    isPrivate: false,
    updated: '2026-05-17',
    highlights: [
      '2D canvas editor for nail placement',
      '3D preview rendering',
      'Multi-color layer support',
      'Image-to-string-art algorithm',
      'Export suite: PDF, SVG, print-ready'
    ]
  }
];

/* ===== NAVIGATION ===== */
function showView(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + view).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === view);
  });
  window.scrollTo({ top: 0, behavior: 'instant' });
}
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => showView(btn.dataset.view));
});

/* ===== THEME ===== */
(function () {
  const t = document.querySelector('[data-theme-toggle]');
  const r = document.documentElement;
  let d = r.getAttribute('data-theme') || 'light';

  function updateIcon() {
    if (!t) return;
    t.innerHTML = d === 'dark'
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
  updateIcon();
  t && t.addEventListener('click', () => {
    d = d === 'dark' ? 'light' : 'dark';
    r.setAttribute('data-theme', d);

    updateIcon();
  });
})();

/* ===== RENDER PROJECT LIST ===== */
function renderProjects(filter) {
  const list = document.getElementById('projectsList');
  const filtered = !filter || filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  list.innerHTML = filtered.map((p, i) => `
    <button class="project-banner" onclick="openProject('${p.id}')">
      <span class="pb-num">${String(i + 1).padStart(2, '0')}</span>
      <div class="pb-body">
        <div class="pb-top">
          <span class="pb-name">${p.name}</span>
          <span class="pb-cat">${p.categoryLabel.toUpperCase()}</span>
          ${p.isPrivate ? '<span class="pb-private">PRIVATE</span>' : ''}
        </div>
        <p class="pb-desc">${p.description}</p>
        <div class="pb-footer">
          <span class="pb-lang">${p.language}</span>
          <span class="pb-lang">${p.updated}</span>
        </div>
      </div>
      <div class="pb-action"><span class="pb-arrow">→</span></div>
    </button>
  `).join('');
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

/* ===== MODAL ===== */
function openProject(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-cat">// ${p.categoryLabel.toUpperCase()}</div>
    <div class="modal-name">${p.name}</div>
    <p class="modal-desc">${p.description}</p>
    <div class="modal-grid">
      <div class="modal-meta-cell">
        <div class="meta-key">Language</div>
        <div class="meta-val">${p.language}</div>
      </div>
      <div class="modal-meta-cell">
        <div class="meta-key">Visibility</div>
        <div class="meta-val">${p.isPrivate ? 'PRIVATE' : 'PUBLIC'}</div>
      </div>
      <div class="modal-meta-cell">
        <div class="meta-key">Last Updated</div>
        <div class="meta-val">${p.updated}</div>
      </div>
      <div class="modal-meta-cell">
        <div class="meta-key">Category</div>
        <div class="meta-val">${p.categoryLabel.toUpperCase()}</div>
      </div>
    </div>
    <div class="modal-highlights">
      <div class="highlights-label">// Highlights</div>
      <ul class="highlights-list">
        ${p.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
    </div>
    <div class="modal-actions">
      <a href="${p.github}" target="_blank" rel="noopener" class="btn-primary">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        Open on GitHub
      </a>
    </div>
  `;
  document.getElementById('projectModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', onEsc);
}

function closeModal() {
  document.getElementById('projectModal').classList.remove('open');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', onEsc);
}
function onEsc(e) { if (e.key === 'Escape') closeModal(); }

/* ===== INIT ===== */
renderProjects('all');
