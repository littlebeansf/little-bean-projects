/* ============================================================
   LB.PROJECTS — App Logic v3
   ============================================================ */

const PROJECTS = [
  {
    id: 'gwunt',
    name: 'gwunt',
    category: 'games',
    categoryLabel: 'Game',
    description: 'A Gwent-inspired mythology card battler with 6 factions, an AI opponent, 106 AI-generated card art images, and old-school RPG music.',
    github: 'https://github.com/littlebeansf/gwunt',
    pages: 'https://littlebeansf.github.io/gwunt/',
    image: 'img/gwunt.png',
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
    pages: 'https://littlebeansf.github.io/couch-quest/',
    image: 'img/couch-quest.png',
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
    pages: 'https://littlebeansf.github.io/dealer-life-simulator/',
    image: 'img/dealer-life-simulator.png',
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
    id: 'it-clicker',
    name: 'it-clicker',
    category: 'games',
    categoryLabel: 'Game',
    description: 'The hilariously accurate office IT idle clicker game. Resolve tickets, upgrade your setup, and survive the help desk.',
    github: 'https://github.com/littlebeansf/it-clicker',
    pages: 'https://littlebeansf.github.io/it-clicker/',
    image: 'img/it-clicker.png',
    language: 'HTML',
    isPrivate: false,
    updated: '2026-05-18',
    highlights: [
      'Idle clicker mechanics',
      'Office IT theme — tickets, upgrades, stress meter',
      'Browser-native, no dependencies'
    ]
  },
  {
    id: 'framestack',
    name: 'framestack',
    category: 'trackers',
    categoryLabel: 'Tracker',
    description: 'Your personal media universe. Track anime, manga, movies, series, and books — all in one place.',
    github: 'https://github.com/littlebeansf/framestack',
    pages: 'https://littlebeansf.github.io/framestack/',
    image: 'img/framestack.png',
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
    pages: 'https://littlebeansf.github.io/cardvault/',
    image: 'img/cardvault.png',
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
    id: 'hunter-system',
    name: 'hunter-system',
    category: 'trackers',
    categoryLabel: 'Tracker',
    description: 'Solo Leveling-style life gamification dashboard — daily habit tracking with XP, levels, ranks and achievements.',
    github: 'https://github.com/littlebeansf/hunter-system',
    pages: 'https://littlebeansf.github.io/hunter-system/',
    image: 'img/hunter-system.png',
    language: 'TypeScript',
    isPrivate: false,
    updated: '2026-05-17',
    highlights: [
      'Solo Leveling-inspired RPG interface',
      'Daily habit tracking with XP system',
      'Level progression and rank badges',
      'Achievement unlocks'
    ]
  },
  {
    id: 'rhe-3d',
    name: 'rhe-3d',
    category: 'tools',
    categoryLabel: 'Tool',
    description: 'Convert images to 3D-printable objects. Upload PNG/JPG/WebP/SVG, edit, and export to STL, 3MF, OBJ, or GLB.',
    github: 'https://github.com/littlebeansf/rhe-3d',
    pages: 'https://littlebeansf.github.io/rhe-3d/',
    image: 'img/rhe-3d.png',
    language: 'TypeScript',
    isPrivate: false,
    updated: '2026-05-18',
    highlights: [
      'Image to 3D mesh conversion',
      'Export to STL, 3MF, OBJ, GLB',
      'In-browser editor, no install needed'
    ]
  },
  {
    id: 'hard-techno-dj-academy',
    name: 'hard-techno-dj-academy',
    category: 'tools',
    categoryLabel: 'Tool',
    description: 'Interactive Hard Techno DJ Learning App — learn genres, practice mixing, compose beats.',
    github: 'https://github.com/littlebeansf/hard-techno-dj-academy',
    pages: 'https://littlebeansf.github.io/hard-techno-dj-academy/',
    image: 'img/hard-techno-dj-academy.png',
    language: 'TypeScript',
    isPrivate: false,
    updated: '2026-05-18',
    highlights: [
      'Genre map & learning modules',
      'Mixing practice mode',
      'Beat composition tools'
    ]
  },
  {
    id: 'stringcraft',
    name: 'stringcraft',
    category: 'tools',
    categoryLabel: 'Tool',
    description: 'Professional string art planner. 2D canvas editor, 3D preview, multi-color layers, image-to-art generation, and full export suite.',
    github: 'https://github.com/littlebeansf/stringcraft',
    pages: 'https://littlebeansf.github.io/stringcraft/',
    image: 'img/stringcraft.png',
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
      <div class="pb-thumb" style="background-image:url('${p.image}')"></div>
      <span class="pb-num">${String(i + 1).padStart(2, '0')}</span>
      <div class="pb-body">
        <div class="pb-top">
          <span class="pb-name">${p.name}</span>
          <span class="pb-cat">${p.categoryLabel.toUpperCase()}</span>
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
    <div class="modal-hero" style="background-image:url('${p.image}')">
      <div class="modal-hero-overlay"></div>
      <div class="modal-hero-text">
        <div class="modal-cat">// ${p.categoryLabel.toUpperCase()}</div>
        <div class="modal-name">${p.name}</div>
      </div>
    </div>
    <div class="modal-body">
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
        ${p.pages ? `<a href="${p.pages}" target="_blank" rel="noopener" class="btn-primary">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Open Live Site
        </a>` : ''}
        <a href="${p.github}" target="_blank" rel="noopener" class="btn-secondary">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          View on GitHub
        </a>
      </div>
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

/* ===== MUSIC PLAYER ===== */
const PLAYLIST = [
  { id: '6e00b6da-b35b-4c25-865a-e2f11a0d61da', title: 'WITCH AT 190bpm',   audio: 'https://cdn1.suno.ai/6e00b6da-b35b-4c25-865a-e2f11a0d61da.mp3',   image: 'https://cdn2.suno.ai/video_gen_3b16377b-4ed5-410e-b051-5ec544e6a189_video_upload_3b16377b-4ed5-410e-b051-5ec544e6a189_cover_snapshot_0s_1766162536_image.jpeg',  tags: '190 BPM · Hard Techno' },
  { id: '806b65e1-c3f9-41a9-8b60-ad89e25e9f2b', title: 'INFECTED VIKINGS',  audio: 'https://cdn1.suno.ai/806b65e1-c3f9-41a9-8b60-ad89e25e9f2b.mp3',   image: 'https://cdn2.suno.ai/video_gen_dd925aec-22d0-4911-989c-99f8339231e4_video_upload_dd925aec-22d0-4911-989c-99f8339231e4_cover_snapshot_0s_1766164242_image.jpeg',  tags: '185 BPM · Hard Techno' },
  { id: '4900c72f-5798-4f0e-bf99-6bca2a533dd6', title: 'RUDRA | रुद्र',     audio: 'https://cdn1.suno.ai/4900c72f-5798-4f0e-bf99-6bca2a533dd6.mp3',   image: 'https://cdn2.suno.ai/video_gen_0f1cbd29-9f04-49d8-9541-44c78861d0fe_video_upload_0f1cbd29-9f04-49d8-9541-44c78861d0fe_cover_snapshot_0s_1766172908_image.jpeg',  tags: '165 BPM · Techno / Goa' },
  { id: '7cd1ce74-598e-473d-a3ac-4c3194fd4b5c', title: 'YOKA-O-NI',         audio: 'https://cdn1.suno.ai/7cd1ce74-598e-473d-a3ac-4c3194fd4b5c.mp3',   image: 'https://cdn2.suno.ai/video_gen_c2424c8d-d573-4b49-a5bd-ef1391613414_video_upload_c2424c8d-d573-4b49-a5bd-ef1391613414_cover_snapshot_0s_1768292841_image.jpeg',  tags: '190 BPM · Hard Techno' },
  { id: 'f841a16b-0595-44c3-81ea-970b78a20e3e', title: 'YODEL MTFUCKER',    audio: 'https://cdn1.suno.ai/f841a16b-0595-44c3-81ea-970b78a20e3e.mp3',   image: 'https://cdn2.suno.ai/52d0d91f-ff03-4787-b1fa-e0814383ff41.jpeg',                                                                                                       tags: '190 BPM · Swiss Yodel Techno' },
  { id: '3481ad98-3f21-4801-bab9-96b03859a07a', title: 'DRUNK COBOLT',      audio: 'https://cdn1.suno.ai/3481ad98-3f21-4801-bab9-96b03859a07a.mp3',   image: 'https://cdn2.suno.ai/35410c24-546e-49f6-bc82-458c3de9df0d.jpeg',                                                                                                       tags: '190 BPM · Hard Techno' },
  { id: '746ee5e9-1123-40b0-b0e0-f3f920f3f0b1', title: 'LAS PATRZY',        audio: 'https://cdn1.suno.ai/746ee5e9-1123-40b0-b0e0-f3f920f3f0b1.mp3',   image: 'https://cdn2.suno.ai/c135419a-07ad-487d-a68d-5e9730cf7414.jpeg',                                                                                                       tags: '160–190 BPM · Ritual Hard Techno' },
  { id: '1d0ae377-67da-44b8-b9b9-bfb808af1e16', title: 'LAS PATRZY pt. 2',  audio: 'https://cdn1.suno.ai/1d0ae377-67da-44b8-b9b9-bfb808af1e16.mp3',   image: 'https://cdn2.suno.ai/7c5b7585-f6d5-45c6-b178-827bcabeb36d.jpeg',                                                                                                       tags: '160–190 BPM · Ritual Hard Techno' },
  { id: '26fbe641-327c-4893-ba93-52d9780b4bb3', title: 'ACID',              audio: 'https://cdn1.suno.ai/26fbe641-327c-4893-ba93-52d9780b4bb3.mp3',   image: 'https://cdn2.suno.ai/video_gen_63895c7e-a50b-47cd-bd81-532e38ab769d_video_upload_63895c7e-a50b-47cd-bd81-532e38ab769d_cover_snapshot_0s_1767953081_image.jpeg',  tags: '175–185 BPM · Hard Techno' },
  { id: '65f1c753-b5cf-40a6-a9b3-e5d982667546', title: 'WAIFU',             audio: 'https://cdn1.suno.ai/65f1c753-b5cf-40a6-a9b3-e5d982667546.mp3',   image: 'https://cdn2.suno.ai/video_gen_5504624f-09eb-477c-8b24-577960478013_video_upload_5504624f-09eb-477c-8b24-577960478013_cover_snapshot_0s_1767960829_image.jpeg',  tags: '155–165 BPM · Hard Techno' },
  { id: 'e80d88a9-d916-408a-82a2-3e5ec67ed5ed', title: 'HORNY WAIFU',       audio: 'https://cdn1.suno.ai/e80d88a9-d916-408a-82a2-3e5ec67ed5ed.mp3',   image: 'https://cdn2.suno.ai/video_gen_26d1afe4-3f65-44d5-8c42-8b1bef2a2ec8_video_upload_26d1afe4-3f65-44d5-8c42-8b1bef2a2ec8_cover_snapshot_0s_1768247473_image.jpeg',  tags: '155–165 BPM · Hard Techno' },
];

let currentTrack = 0;
let shuffleMode  = false;
let playOrder    = PLAYLIST.map((_, i) => i);

const audio    = document.getElementById('audio-player');
const btnPlay  = document.getElementById('btn-play');
const btnPrev  = document.getElementById('btn-prev');
const btnNext  = document.getElementById('btn-next');
const btnShuffle = document.getElementById('btn-shuffle');
const barFill  = document.getElementById('player-bar-fill');
const barTrack = document.getElementById('player-bar-track');
const elCurrent= document.getElementById('player-current');
const elDur    = document.getElementById('player-duration');
const elTitle  = document.getElementById('player-title');
const elCover  = document.getElementById('player-cover');
const volSlider= document.getElementById('player-vol');
const tracklist= document.getElementById('tracklist');

function fmtTime(s) {
  if (!isFinite(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return m + ':' + String(sec).padStart(2, '0');
}

function buildTracklist() {
  if (!tracklist) return;
  tracklist.innerHTML = PLAYLIST.map((t, i) => `
    <div class="track-row" id="tr-${i}" onclick="loadTrack(${i}, true)">
      <div class="track-num">${String(i + 1).padStart(2, '0')}</div>
      <div class="track-cover" style="background-image:url('${t.image}')"></div>
      <div class="track-info">
        <span class="track-title">${t.title}</span>
        <span class="track-tags">${t.tags}</span>
      </div>
      <div class="track-playing" id="tp-${i}"><span></span><span></span><span></span></div>
    </div>
  `).join('');
}

function loadTrack(idx, autoplay) {
  currentTrack = idx;
  const t = PLAYLIST[idx];
  audio.src = t.audio;
  audio.volume = volSlider ? parseFloat(volSlider.value) : 0.8;
  elTitle.textContent  = t.title;
  elCover.style.backgroundImage = `url('${t.image}')`;
  barFill.style.width  = '0%';
  elCurrent.textContent = '0:00';
  elDur.textContent    = '0:00';
  // update tracklist highlight
  document.querySelectorAll('.track-row').forEach((r, i) => r.classList.toggle('active', i === idx));
  document.querySelectorAll('.track-playing').forEach((el, i) => el.classList.toggle('playing', i === idx));
  if (autoplay) {
    audio.play().then(() => setPlayUI(true)).catch(() => {});
  }
}

function setPlayUI(playing) {
  const iconPlay  = btnPlay.querySelector('.icon-play');
  const iconPause = btnPlay.querySelector('.icon-pause');
  if (playing) {
    iconPlay.style.display  = 'none';
    iconPause.style.display = '';
  } else {
    iconPlay.style.display  = '';
    iconPause.style.display = 'none';
  }
  // sync track row animation
  document.querySelectorAll('.track-playing').forEach((el, i) => el.classList.toggle('playing', i === currentTrack && playing));
}

function nextTrack() {
  if (shuffleMode) {
    currentTrack = Math.floor(Math.random() * PLAYLIST.length);
  } else {
    currentTrack = (currentTrack + 1) % PLAYLIST.length;
  }
  loadTrack(currentTrack, true);
}

function prevTrack() {
  if (audio.currentTime > 3) { audio.currentTime = 0; return; }
  currentTrack = (currentTrack - 1 + PLAYLIST.length) % PLAYLIST.length;
  loadTrack(currentTrack, true);
}

if (btnPlay) {
  btnPlay.addEventListener('click', () => {
    if (!audio.src) { loadTrack(0, true); return; }
    if (audio.paused) {
      audio.play().then(() => setPlayUI(true)).catch(() => {});
    } else {
      audio.pause();
      setPlayUI(false);
    }
  });
}
if (btnPrev)  btnPrev.addEventListener('click', prevTrack);
if (btnNext)  btnNext.addEventListener('click', nextTrack);
if (btnShuffle) {
  btnShuffle.addEventListener('click', () => {
    shuffleMode = !shuffleMode;
    btnShuffle.classList.toggle('active', shuffleMode);
  });
}

audio.addEventListener('timeupdate', () => {
  if (!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  barFill.style.width = pct + '%';
  elCurrent.textContent = fmtTime(audio.currentTime);
});
audio.addEventListener('durationchange', () => { elDur.textContent = fmtTime(audio.duration); });
audio.addEventListener('ended', nextTrack);
audio.addEventListener('play',  () => setPlayUI(true));
audio.addEventListener('pause', () => setPlayUI(false));

if (barTrack) {
  barTrack.addEventListener('click', (e) => {
    if (!audio.duration) return;
    const rect = barTrack.getBoundingClientRect();
    audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
  });
}
if (volSlider) {
  volSlider.addEventListener('input', () => { audio.volume = parseFloat(volSlider.value); });
}

buildTracklist();
loadTrack(0, false);

/* Active album highlight on load */
const defaultAlbum = document.querySelector('.album-card[data-playlist-id="7e22dab7-8293-47ae-9b5d-37594cd92576"]');
if (defaultAlbum) defaultAlbum.classList.add('active');

/* ===== ALBUM SWITCHING ===== */
const ALBUM_TRACKS = {
  '83ba60ba-2e48-44ec-a57d-6eed30f5ba49': [
    { title: 'WITCH AT 190bpm',  audio: 'https://cdn1.suno.ai/6e00b6da-b35b-4c25-865a-e2f11a0d61da.mp3', image: 'https://cdn2.suno.ai/video_gen_3b16377b-4ed5-410e-b051-5ec544e6a189_video_upload_3b16377b-4ed5-410e-b051-5ec544e6a189_cover_snapshot_0s_1766162536_image.jpeg', tags: '190 BPM · Hard Techno' },
    { title: 'INFECTED VIKINGS', audio: 'https://cdn1.suno.ai/806b65e1-c3f9-41a9-8b60-ad89e25e9f2b.mp3', image: 'https://cdn2.suno.ai/video_gen_dd925aec-22d0-4911-989c-99f8339231e4_video_upload_dd925aec-22d0-4911-989c-99f8339231e4_cover_snapshot_0s_1766164242_image.jpeg', tags: '185 BPM · Hard Techno' },
    { title: 'RUDRA | रुद्र',    audio: 'https://cdn1.suno.ai/4900c72f-5798-4f0e-bf99-6bca2a533dd6.mp3', image: 'https://cdn2.suno.ai/video_gen_0f1cbd29-9f04-49d8-9541-44c78861d0fe_video_upload_0f1cbd29-9f04-49d8-9541-44c78861d0fe_cover_snapshot_0s_1766172908_image.jpeg', tags: '165 BPM · Techno / Goa' },
    { title: 'YOKA-O-NI',        audio: 'https://cdn1.suno.ai/7cd1ce74-598e-473d-a3ac-4c3194fd4b5c.mp3', image: 'https://cdn2.suno.ai/video_gen_c2424c8d-d573-4b49-a5bd-ef1391613414_video_upload_c2424c8d-d573-4b49-a5bd-ef1391613414_cover_snapshot_0s_1768292841_image.jpeg', tags: '190 BPM · Hard Techno' },
    { title: 'YODEL MTFUCKER',   audio: 'https://cdn1.suno.ai/f841a16b-0595-44c3-81ea-970b78a20e3e.mp3', image: 'https://cdn2.suno.ai/52d0d91f-ff03-4787-b1fa-e0814383ff41.jpeg', tags: '190 BPM · Swiss Yodel Techno' },
    { title: 'DRUNK COBOLT',     audio: 'https://cdn1.suno.ai/3481ad98-3f21-4801-bab9-96b03859a07a.mp3', image: 'https://cdn2.suno.ai/35410c24-546e-49f6-bc82-458c3de9df0d.jpeg', tags: '190 BPM · Hard Techno' },
    { title: 'LAS PATRZY',       audio: 'https://cdn1.suno.ai/746ee5e9-1123-40b0-b0e0-f3f920f3f0b1.mp3', image: 'https://cdn2.suno.ai/c135419a-07ad-487d-a68d-5e9730cf7414.jpeg', tags: '160–190 BPM · Ritual' },
    { title: 'LAS PATRZY pt. 2', audio: 'https://cdn1.suno.ai/1d0ae377-67da-44b8-b9b9-bfb808af1e16.mp3', image: 'https://cdn2.suno.ai/7c5b7585-f6d5-45c6-b178-827bcabeb36d.jpeg', tags: '160–190 BPM · Ritual' },
    { title: 'ACID',             audio: 'https://cdn1.suno.ai/26fbe641-327c-4893-ba93-52d9780b4bb3.mp3', image: 'https://cdn2.suno.ai/video_gen_63895c7e-a50b-47cd-bd81-532e38ab769d_video_upload_63895c7e-a50b-47cd-bd81-532e38ab769d_cover_snapshot_0s_1767953081_image.jpeg', tags: '175–185 BPM · Hard Techno' },
  ],
  '7e22dab7-8293-47ae-9b5d-37594cd92576': PLAYLIST,
  'fafa162d-8a5c-4e6c-a578-451545e66f03': [
    { title: 'life.zip — Track 1', audio: 'https://cdn1.suno.ai/26fbe641-327c-4893-ba93-52d9780b4bb3.mp3', image: 'https://cdn2.suno.ai/9c70c760.jpeg', tags: 'life.zip' },
  ],
  'ad2550a5-108b-409d-880a-94ceb287c513': [
    { title: 'Ʀ೮೷3ઽ — Track 1', audio: 'https://cdn1.suno.ai/65f1c753-b5cf-40a6-a9b3-e5d982667546.mp3', image: 'https://cdn2.suno.ai/0cfdb893.jpeg', tags: 'Ʀ೮೷3ઽ' },
  ],
};

async function fetchPlaylistTracks(playlistId) {
  try {
    const res = await fetch(`https://studio-api.prod.suno.com/api/playlist/${playlistId}?page=0`, {
      headers: { 'Accept': 'application/json' }
    });
    if (!res.ok) return null;
    const data = await res.json();
    return (data.playlist_clips || []).map(item => ({
      title: item.clip.title || 'Untitled',
      audio: item.clip.audio_url,
      image: item.clip.image_url || '',
      tags: (item.clip.metadata && item.clip.metadata.tags) ? item.clip.metadata.tags.split(',')[0] + ' BPM' : ''
    }));
  } catch(e) { return null; }
}

window.switchPlaylist = async function(playlistId, name, count) {
  // Highlight active album
  document.querySelectorAll('.album-card').forEach(c => c.classList.toggle('active', c.dataset.playlistId === playlistId));
  // Update label
  const label = document.getElementById('tracklist-label');
  if (label) label.textContent = `// ${name.toUpperCase()} — PLAYLIST`;
  // Stop current track
  audio.pause();
  setPlayUI(false);
  // Try live fetch first, fall back to cached
  let tracks = await fetchPlaylistTracks(playlistId);
  if (!tracks || tracks.length === 0) tracks = ALBUM_TRACKS[playlistId] || PLAYLIST;
  // Swap PLAYLIST array contents
  PLAYLIST.length = 0;
  tracks.forEach(t => PLAYLIST.push(t));
  currentTrack = 0;
  buildTracklist();
  loadTrack(0, false);
};
