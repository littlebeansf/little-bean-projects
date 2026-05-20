/* ============================================================
   LB.PROJECTS — App Logic v3
   ============================================================ */

/* ═══════════════════════════════════════════════════════
   INTERNATIONALISATION
   Keys match data-i18n attributes in index.html.
   Project descriptions/highlights are translated inline
   via PROJECTS array entries keyed by language.
═══════════════════════════════════════════════════════ */
const TRANSLATIONS = {
  en: {
    nav_dashboard:    'Dashboard',
    nav_projects:     'Projects',
    nav_music:        'Music',
    nav_me:           'Me',
    bmc:              'Buy me a coffee',
    spend:            'Spend',
    hero_tagline:     'Thanks AI for creating literally everything you see here with me. I strongly believe a world where humans and AI collaborate might be the only way forward. Put love in the things you do.',
    quick_access:     '// Quick Access',
    cat_apps:         'Apps',
    cat_games:        'Games',
    cat_trackers:     'Trackers',
    cat_tools:        'Tools',
    cat_study:        'Study',
    cat_music:        'Music',
    all_projects:     'All_Projects',
    view_profile:     'View Profile ↗',
    albums_label:     '// ALBUMS',
    tracklist_label:  '// MADNESS.ZIP',
    about_label:      '// ABOUT',
    me_bio:           'Hi, I\'m Sebastian — born in Italy, half German, half Austrian, living in Switzerland. I create things: music, software, art. By day I work as an IT Workplace Engineer. By night I\'m building games, trackers, tools, and beats that nobody asked for but everybody secretly needs.',
    what_i_do_label:  '// WHAT I DO',
    pillar_it_name:   'IT Workplace Engineer',
    pillar_it_desc:   'Enterprise IT, Switzerland',
    pillar_dev_name:  'Developer',
    pillar_dev_desc:  'Games, apps, creative tools',
    pillar_music_name:'Music Producer',
    pillar_music_desc:'Hard techno & electronic',
    pillar_art_name:  'Artist',
    pillar_art_desc:  'Drawing & digital art',
    hobbies_label:    '// HOBBIES',
    find_me_label:    '// FIND ME',
    contact_business: 'Business Inquiries',
    // Modal tabs
    modal_tab_about:       'About',
    modal_tab_tech:        'Tech',
    modal_tab_highlights:  'Highlights',
    modal_open_site:       'Open Live Site',
    modal_view_github:     'View on GitHub',
    meta_language:         'Language',
    meta_visibility:       'Visibility',
    meta_updated:          'Last Updated',
    meta_category:         'Category',
    highlights_label:      '// Highlights',
    // Accordion labels
    acc_study:    'Study',
    acc_games:    'Games',
    acc_apps:     'Apps',
    acc_trackers: 'Trackers',
    acc_tools:    'Tools',
    acc_music:    'Music',
  },
  de: {
    nav_dashboard:    'Dashboard',
    nav_projects:     'Projekte',
    nav_music:        'Musik',
    nav_me:           'Ich',
    bmc:              'Kauf mir einen Kaffee',
    spend:            'Spenden',
    hero_tagline:     'Danke KI, dass du buchstäblich alles, was du hier siehst, mit mir erschaffen hast. Ich glaube fest daran, dass eine Welt, in der Menschen und KI zusammenarbeiten, vielleicht der einzige Weg nach vorne ist. Steck Liebe in das, was du tust.',
    quick_access:     '// Schnellzugriff',
    cat_apps:         'Apps',
    cat_games:        'Spiele',
    cat_trackers:     'Tracker',
    cat_tools:        'Werkzeuge',
    cat_study:        'Lernen',
    cat_music:        'Musik',
    all_projects:     'Alle_Projekte',
    view_profile:     'Profil ansehen ↗',
    albums_label:     '// ALBEN',
    tracklist_label:  '// MADNESS.ZIP',
    about_label:      '// ÜBER MICH',
    me_bio:           'Hi, ich bin Sebastian — geboren in Italien, halb Deutsch, halb Österreichisch, wohnhaft in der Schweiz. Ich erschaffe Dinge: Musik, Software, Kunst. Tagsüber arbeite ich als IT Workplace Engineer. Nachts baue ich Spiele, Tracker, Tools und Beats, die niemand bestellt hat, aber alle heimlich brauchen.',
    what_i_do_label:  '// WAS ICH MACHE',
    pillar_it_name:   'IT Workplace Engineer',
    pillar_it_desc:   'Enterprise IT, Schweiz',
    pillar_dev_name:  'Entwickler',
    pillar_dev_desc:  'Spiele, Apps, kreative Tools',
    pillar_music_name:'Musikproduzent',
    pillar_music_desc:'Hard Techno & Elektronik',
    pillar_art_name:  'Künstler',
    pillar_art_desc:  'Zeichnen & digitale Kunst',
    hobbies_label:    '// HOBBYS',
    find_me_label:    '// FINDE MICH',
    contact_business: 'Geschäftsanfragen',
    modal_tab_about:       'Info',
    modal_tab_tech:        'Technik',
    modal_tab_highlights:  'Highlights',
    modal_open_site:       'Live-Seite öffnen',
    modal_view_github:     'Auf GitHub ansehen',
    meta_language:         'Sprache',
    meta_visibility:       'Sichtbarkeit',
    meta_updated:          'Zuletzt aktualisiert',
    meta_category:         'Kategorie',
    highlights_label:      '// Highlights',
    acc_study:    'Lernen',
    acc_games:    'Spiele',
    acc_apps:     'Apps',
    acc_trackers: 'Tracker',
    acc_tools:    'Werkzeuge',
    acc_music:    'Musik',
  },
  it: {
    nav_dashboard:    'Dashboard',
    nav_projects:     'Progetti',
    nav_music:        'Musica',
    nav_me:           'Chi sono',
    bmc:              'Offrimi un caffè',
    spend:            'Donazione',
    hero_tagline:     'Grazie AI per aver creato con me letteralmente tutto quello che vedi qui. Credo fermamente che un mondo in cui esseri umani e AI collaborano potrebbe essere l\'unica via avanti. Metti amore in quello che fai.',
    quick_access:     '// Accesso Rapido',
    cat_apps:         'App',
    cat_games:        'Giochi',
    cat_trackers:     'Tracker',
    cat_tools:        'Strumenti',
    cat_study:        'Studio',
    cat_music:        'Musica',
    all_projects:     'Tutti_i_Progetti',
    view_profile:     'Vedi Profilo ↗',
    albums_label:     '// ALBUM',
    tracklist_label:  '// MADNESS.ZIP',
    about_label:      '// CHI SONO',
    me_bio:           'Ciao, sono Sebastian — nato in Italia, metà tedesco, metà austriaco, vivo in Svizzera. Creo cose: musica, software, arte. Di giorno lavoro come IT Workplace Engineer. Di notte costruisco giochi, tracker, strumenti e beat che nessuno ha chiesto ma di cui tutti hanno segretamente bisogno.',
    what_i_do_label:  '// COSA FACCIO',
    pillar_it_name:   'IT Workplace Engineer',
    pillar_it_desc:   'IT aziendale, Svizzera',
    pillar_dev_name:  'Sviluppatore',
    pillar_dev_desc:  'Giochi, app, strumenti creativi',
    pillar_music_name:'Produttore Musicale',
    pillar_music_desc:'Hard techno & elettronica',
    pillar_art_name:  'Artista',
    pillar_art_desc:  'Disegno & arte digitale',
    hobbies_label:    '// HOBBY',
    find_me_label:    '// TROVAMI',
    contact_business: 'Richieste commerciali',
    modal_tab_about:       'Info',
    modal_tab_tech:        'Tecnica',
    modal_tab_highlights:  'Highlights',
    modal_open_site:       'Apri il sito',
    modal_view_github:     'Vedi su GitHub',
    meta_language:         'Linguaggio',
    meta_visibility:       'Visibilità',
    meta_updated:          'Ultimo aggiornamento',
    meta_category:         'Categoria',
    highlights_label:      '// Highlights',
    acc_study:    'Studio',
    acc_games:    'Giochi',
    acc_apps:     'App',
    acc_trackers: 'Tracker',
    acc_tools:    'Strumenti',
    acc_music:    'Musica',
  }
};

let CURRENT_LANG = 'en';

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  CURRENT_LANG = lang;
  const t = TRANSLATIONS[lang];

  // Swap all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update lang switcher active state
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Set html lang attribute
  document.documentElement.lang = lang;

  // Re-render JS-generated content that has translatable strings
  // (accordions use category labels; re-render if projects view visible)
  var accEl = document.getElementById('accordions');
  if (accEl && accEl.innerHTML !== '') renderAccordions();

  // Re-render tile desc labels (cat tabs)
  var tilesEl = document.getElementById('cat-tiles');
  if (tilesEl && tilesEl.innerHTML !== '') {
    var activeCat = (document.querySelector('.cat-tab.active') || {}).dataset && document.querySelector('.cat-tab.active').dataset.cat;
    if (activeCat) renderTiles(activeCat);
  }
}

// Wire lang switcher on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() { setLang(btn.dataset.lang); });
  });
});

const PROJECTS = [
  {
    id: 'gwunt',
    name: 'gwunt',
    category: 'games',
    categoryLabel: 'Game',
    description: 'A card battle game inspired by Gwent. Pick a faction, build your hand, and outsmart an AI opponent across mythology-themed duels.',
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
    description: 'A couch party card game built for lazy nights. Draw a card, complete the challenge, and survive your friends.',
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
    description: 'A fantasy life sim where a goblin deals your fate. Every choice leads somewhere different — not always good.',
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
    description: 'An idle clicker about the joy of IT support. Close tickets, upgrade your desk, and try not to lose your mind.',
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
    id: 'sip-and-spill',
    name: 'sip-and-spill',
    category: 'games',
    categoryLabel: 'Game',
    description: 'A two-player drinking game with escalating rounds. Starts friendly, gets spicy fast.',
    github: 'https://github.com/littlebeansf/sip-and-spill',
    pages: 'https://littlebeansf.github.io/sip-and-spill/',
    image: 'img/sip-and-spill.png',
    language: 'JavaScript',
    isPrivate: false,
    updated: '2026-05-18',
    highlights: [
      'Round-based drinking game',
      'Warm-up, spicy & extreme zones',
      'Mini-games built in',
      'Two-player party fun'
    ]
  },
  {
    id: 'framestack',
    name: 'framestack',
    category: 'trackers',
    categoryLabel: 'Tracker',
    description: 'One place to track everything you watch, read, and binge. Anime, manga, movies, series, books — all logged.',
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
    description: 'A personal vault for your physical card collection. Catalog, search, and keep track of every card you own.',
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
    description: 'Turn your daily habits into a progression system. Log your wins, gain XP, rank up, and level your real life.',
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
    id: 'sunfinder',
    name: 'sunfinder',
    category: 'apps',
    categoryLabel: 'App',
    description: 'Shows you where the sun actually is right now. Useful when you live somewhere clouds call home.',
    github: 'https://github.com/littlebeansf/sunfinder',
    pages: 'https://littlebeansf.github.io/sunfinder/',
    image: 'img/sunfinder.png',
    language: 'TypeScript',
    isPrivate: false,
    updated: '2026-05-19',
    highlights: [
      'Location-based sun finder',
      'Built for Lake Constance area',
      'Real-time weather data',
      'Nearest sunny spot navigation'
    ]
  },
  {
    id: 'currency-chaos',
    name: 'currency-chaos',
    category: 'apps',
    categoryLabel: 'App',
    description: 'A currency converter that takes nothing seriously. Converts between real currencies, fictional ones, and whatever else fits.',
    github: 'https://github.com/littlebeansf/currency-chaos',
    pages: 'https://littlebeansf.github.io/currency-chaos/',
    image: 'img/currency-chaos.png',
    language: 'CSS',
    isPrivate: false,
    updated: '2026-05-19',
    highlights: [
      'Real + fake + space currencies',
      'Irresponsible exchange rates',
      'Convert anything to anything',
      'Financial chaos guaranteed'
    ]
  },
  {
    id: 'rhe-3d',
    name: 'rhe-3d',
    category: 'tools',
    categoryLabel: 'Tool',
    description: 'Drop in an image and get a 3D-printable file back. Good for turning flat art into something you can actually hold.',
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
    category: 'music',
    categoryLabel: 'Music',
    description: 'An interactive crash course in hard techno. Learn the genres, feel the BPM, and practice putting a set together.',
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
    description: 'A tool for planning string art before you pick up a single nail. Draw, preview in 3D, layer colors, and export when ready.',
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
  },
  {
    id: 'wisdom-pack',
    name: 'wisdom-pack',
    category: 'study',
    categoryLabel: 'Study',
    description: 'TCG-style daily quote app. Open 10 packs a day and collect wisdom from philosophers, thinkers, and history.',
    github: 'https://github.com/littlebeansf/wisdom-pack',
    pages: 'https://littlebeansf.github.io/wisdom-pack/',
    image: 'img/wisdom-pack.png',
    language: 'TypeScript',
    isPrivate: false,
    updated: '2026-05-20',
    highlights: [
      'Daily 10-pack limit for mindful collecting',
      'Quotes from philosophers & thinkers',
      'TCG card opening mechanic',
      'Collection tracker',
      'Rarity system'
    ]
  },
  {
    id: 'you-dont-have-to-use-your-brain',
    name: 'you-dont-have-to-use-your-brain',
    category: 'study',
    categoryLabel: 'Study',
    description: 'A pocket reference for UX design principles. The kind of things that make an interface feel obvious — explained simply.',
    github: 'https://github.com/littlebeansf/you-dont-have-to-use-your-brain',
    pages: 'https://littlebeansf.github.io/you-dont-have-to-use-your-brain/',
    image: 'img/you-dont-have-to-use-your-brain.png',
    language: 'TypeScript',
    isPrivate: false,
    updated: '2026-05-18',
    highlights: [
      'Curated UX laws & principles',
      'Fitts\' Law, Hick\'s Law, Gestalt',
      'Interactive examples',
      'Design decision cheat-sheets',
      'Don\'t make me think'
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

/* ===== MODAL ===== */
function openProject(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  const t = TRANSLATIONS[CURRENT_LANG] || TRANSLATIONS.en;

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-hero" style="background-image:url('${p.image}')">
      <div class="modal-hero-overlay"></div>
      <div class="modal-hero-text">
        <div class="modal-cat">// ${p.categoryLabel.toUpperCase()}</div>
        <div class="modal-name">${p.name}</div>
      </div>
    </div>
    <div class="modal-body">
      <div class="modal-tabs">
        <button class="modal-tab active" data-tab="about">${t.modal_tab_about}</button>
        <button class="modal-tab" data-tab="tech">${t.modal_tab_tech}</button>
        <button class="modal-tab" data-tab="highlights">${t.modal_tab_highlights}</button>
      </div>

      <div class="modal-tab-panel active" data-panel="about">
        <p class="modal-desc">${p.description}</p>
        <div class="modal-actions">
          ${p.pages ? `<a href="${p.pages}" target="_blank" rel="noopener" class="btn-primary">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            ${t.modal_open_site}
          </a>` : ''}
          <a href="${p.github}" target="_blank" rel="noopener" class="btn-secondary">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            ${t.modal_view_github}
          </a>
        </div>
      </div>

      <div class="modal-tab-panel" data-panel="tech">
        <div class="modal-grid">
          <div class="modal-meta-cell">
            <div class="meta-key">${t.meta_language}</div>
            <div class="meta-val">${p.language}</div>
          </div>
          <div class="modal-meta-cell">
            <div class="meta-key">${t.meta_visibility}</div>
            <div class="meta-val">${p.isPrivate ? 'PRIVATE' : 'PUBLIC'}</div>
          </div>
          <div class="modal-meta-cell">
            <div class="meta-key">${t.meta_updated}</div>
            <div class="meta-val">${p.updated}</div>
          </div>
          <div class="modal-meta-cell">
            <div class="meta-key">${t.meta_category}</div>
            <div class="meta-val">${p.categoryLabel.toUpperCase()}</div>
          </div>
        </div>
      </div>

      <div class="modal-tab-panel" data-panel="highlights">
        <ul class="highlights-list">
          ${p.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  // Tab switching inside modal
  document.querySelectorAll('.modal-tab').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.modal-tab').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.modal-tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.querySelector('.modal-tab-panel[data-panel="' + btn.dataset.tab + '"]').classList.add('active');
    });
  });

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

/* ═══════════════════════════════════════════════════════
   CATEGORY DEFINITIONS
═══════════════════════════════════════════════════════ */
const CATEGORIES = [
  { id: 'apps',     label: 'Apps' },
  { id: 'games',    label: 'Games' },
  { id: 'trackers', label: 'Trackers' },
  { id: 'tools',    label: 'Tools' },
  { id: 'study',    label: 'Study' },
  { id: 'music',    label: 'Music' },
];

/* ═══════════════════════════════════════════════════════
   CATEGORY TILE DATA (for Quick Access)
═══════════════════════════════════════════════════════ */
const TILE_DATA = {
  'gwunt':                       { pages: 'https://littlebeansf.github.io/gwunt/',                        desc: 'Card battle with mythology factions' },
  'couch-quest':                 { pages: 'https://littlebeansf.github.io/couch-quest/',                  desc: 'Party card game for lazy nights' },
  'dealer-life-simulator':       { pages: 'https://littlebeansf.github.io/dealer-life-simulator/',        desc: 'A goblin deals your fate' },
  'it-clicker':                  { pages: 'https://littlebeansf.github.io/it-clicker/',                   desc: 'Survive the IT help desk' },
  'sip-and-spill':               { pages: 'https://littlebeansf.github.io/sip-and-spill/',                desc: 'Drinking game, escalating rounds' },
  'sunfinder':                   { pages: 'https://littlebeansf.github.io/sunfinder/',                    desc: 'Find the sun from where you are' },
  'currency-chaos':              { pages: 'https://littlebeansf.github.io/currency-chaos/',               desc: 'Convert anything into anything' },
  'framestack':                  { pages: 'https://littlebeansf.github.io/framestack/',                   desc: 'Track what you watch and read' },
  'cardvault':                   { pages: 'https://littlebeansf.github.io/cardvault/',                    desc: 'Log your physical card collection' },
  'hunter-system':               { pages: 'https://littlebeansf.github.io/hunter-system/',                desc: 'Gamify your daily habits' },
  'rhe-3d':                      { pages: 'https://littlebeansf.github.io/rhe-3d/',                       desc: 'Turn images into 3D prints' },
  'stringcraft':                 { pages: 'https://littlebeansf.github.io/stringcraft/',                  desc: 'Plan string art before the nails' },
  'wisdom-pack':                     { pages: 'https://littlebeansf.github.io/wisdom-pack/', desc: 'Collect wisdom like trading cards' },
  'you-dont-have-to-use-your-brain': { pages: 'https://littlebeansf.github.io/you-dont-have-to-use-your-brain/', desc: 'UX principles, explained simply' },
  'hard-techno-dj-academy':      { pages: 'https://littlebeansf.github.io/hard-techno-dj-academy/',      desc: 'Learn hard techno, feel the BPM' },
};

/* ═══════════════════════════════════════════════════════
   SVG LOADER ANIMATIONS
   Each returns a function(svgEl, done) that animates the
   SVG element and calls done() when finished.
═══════════════════════════════════════════════════════ */
const LOADERS = {

  games: function(svg, done) {
    // Controller body + d-pad + buttons draw stroke by stroke
    svg.innerHTML = `
      <rect id="ll-body" x="8" y="22" width="64" height="36" rx="10"
        stroke-width="2.8" stroke-dasharray="200" stroke-dashoffset="200"/>
      <line id="ll-dp1" x1="22" y1="32" x2="22" y2="48"
        stroke-width="2.8" stroke-dasharray="20" stroke-dashoffset="20"/>
      <line id="ll-dp2" x1="14" y1="40" x2="30" y2="40"
        stroke-width="2.8" stroke-dasharray="20" stroke-dashoffset="20"/>
      <circle id="ll-b1" cx="54" cy="33" r="4"
        stroke-width="2.8" stroke-dasharray="30" stroke-dashoffset="30"/>
      <circle id="ll-b2" cx="64" cy="40" r="4"
        stroke-width="2.8" stroke-dasharray="30" stroke-dashoffset="30"/>
    `;
    const els = ['ll-body','ll-dp1','ll-dp2','ll-b1','ll-b2'];
    const delays = [0, 280, 340, 380, 430];
    let finished = 0;
    els.forEach(function(id, i) {
      var el = svg.getElementById(id);
      var da = parseFloat(el.getAttribute('stroke-dasharray'));
      setTimeout(function() {
        animateDash(el, da, 0, 320, function() {
          finished++;
          if (finished === els.length) done();
        });
      }, delays[i]);
    });
  },

  apps: function(svg, done) {
    // Terminal window draws, then cursor blinks inside
    svg.innerHTML = `
      <rect id="ll-win" x="8" y="10" width="64" height="52" rx="2"
        stroke-width="2.8" stroke-dasharray="250" stroke-dashoffset="250"/>
      <line id="ll-bar" x1="8" y1="22" x2="72" y2="22"
        stroke-width="2.8" stroke-dasharray="70" stroke-dashoffset="70"/>
      <polyline id="ll-arr" points="16,33 24,40 16,47"
        stroke-width="2.8" stroke-dasharray="30" stroke-dashoffset="30"/>
      <rect id="ll-cur" x="28" y="46" width="8" height="2" rx="1"
        stroke-width="0" fill="currentColor" opacity="0"/>
    `;
    animateDash(svg.getElementById('ll-win'), 250, 0, 350, function() {
      animateDash(svg.getElementById('ll-bar'), 70, 0, 120, function() {
        animateDash(svg.getElementById('ll-arr'), 30, 0, 200, function() {
          // blink cursor 3 times
          var cur = svg.getElementById('ll-cur');
          var blinks = 0;
          function blink() {
            cur.setAttribute('opacity', blinks % 2 === 0 ? '1' : '0');
            blinks++;
            if (blinks < 6) setTimeout(blink, 120);
            else done();
          }
          blink();
        });
      });
    });
  },

  trackers: function(svg, done) {
    // Heartbeat flatline → spike → flatline
    svg.innerHTML = `
      <polyline id="ll-pulse" points="4,40 18,40 18,40 18,40 36,40 36,40 36,40 54,40 54,40 54,40 76,40"
        stroke-width="2.8" stroke-dasharray="500" stroke-dashoffset="500"/>
    `;
    var el = svg.getElementById('ll-pulse');
    // Phase 1: draw flat line to midpoint
    animateDash(el, 500, 0, 180, function() {
      // Morph to spike
      morphPoints(el,
        '4,40 18,40 22,40 26,40 28,40 30,40 32,40 36,40 40,40 44,40 54,40 76,40',
        '4,40 18,40 22,40 26,20 28,10 30,60 32,68 36,40 40,30 44,40 54,40 76,40',
        260, function() {
          // Fade back to flat
          setTimeout(function() {
            morphPoints(el,
              '4,40 18,40 22,40 26,20 28,10 30,60 32,68 36,40 40,30 44,40 54,40 76,40',
              '4,40 18,40 22,40 26,40 28,40 30,40 32,40 36,40 40,40 44,40 54,40 76,40',
              220, done);
          }, 80);
        });
    });
  },

  tools: function(svg, done) {
    // Gear draws tooth-by-tooth, then rotates
    svg.innerHTML = `
      <g id="ll-gear" transform="translate(40,40)">
        <circle cx="0" cy="0" r="10"
          stroke-width="2.8" stroke-dasharray="70" stroke-dashoffset="70"/>
        <circle cx="0" cy="0" r="3"
          stroke-width="2.8" fill="none"/>
        <line x1="0" y1="-16" x2="0" y2="-24" stroke-width="4" stroke-linecap="square"
          stroke-dasharray="10" stroke-dashoffset="10"/>
        <line x1="0" y1="16" x2="0" y2="24" stroke-width="4" stroke-linecap="square"
          stroke-dasharray="10" stroke-dashoffset="10"/>
        <line x1="-16" y1="0" x2="-24" y2="0" stroke-width="4" stroke-linecap="square"
          stroke-dasharray="10" stroke-dashoffset="10"/>
        <line x1="16" y1="0" x2="24" y2="0" stroke-width="4" stroke-linecap="square"
          stroke-dasharray="10" stroke-dashoffset="10"/>
        <line x1="-11" y1="-11" x2="-17" y2="-17" stroke-width="4" stroke-linecap="square"
          stroke-dasharray="10" stroke-dashoffset="10"/>
        <line x1="11" y1="-11" x2="17" y2="-17" stroke-width="4" stroke-linecap="square"
          stroke-dasharray="10" stroke-dashoffset="10"/>
        <line x1="-11" y1="11" x2="-17" y2="17" stroke-width="4" stroke-linecap="square"
          stroke-dasharray="10" stroke-dashoffset="10"/>
        <line x1="11" y1="11" x2="17" y2="17" stroke-width="4" stroke-linecap="square"
          stroke-dasharray="10" stroke-dashoffset="10"/>
      </g>
    `;
    var gear = svg.getElementById('ll-gear');
    var circle = gear.querySelector('circle');
    var teeth = gear.querySelectorAll('line');
    animateDash(circle, 70, 0, 280, function() {
      var done2 = 0;
      teeth.forEach(function(t, i) {
        setTimeout(function() {
          animateDash(t, 10, 0, 100, function() {
            done2++;
            if (done2 === teeth.length) {
              // spin 180deg
              animateRotate(gear, 0, 180, 400, done);
            }
          });
        }, i * 30);
      });
    });
  },

  study: function(svg, done) {
    // Open book — spine appears, then pages fan out left and right
    svg.innerHTML = `
      <line id="ll-spine" x1="40" y1="15" x2="40" y2="65"
        stroke-width="2.8" stroke-dasharray="55" stroke-dashoffset="55"/>
      <path id="ll-left" d="M40,15 Q20,18 12,25 L12,62 Q22,56 40,58"
        stroke-width="2.8" stroke-dasharray="200" stroke-dashoffset="200" fill="none"/>
      <path id="ll-right" d="M40,15 Q60,18 68,25 L68,62 Q58,56 40,58"
        stroke-width="2.8" stroke-dasharray="200" stroke-dashoffset="200" fill="none"/>
      <line id="ll-line1" x1="17" y1="32" x2="36" y2="31"
        stroke-width="1.6" stroke-dasharray="22" stroke-dashoffset="22" opacity="0.6"/>
      <line id="ll-line2" x1="17" y1="38" x2="36" y2="37"
        stroke-width="1.6" stroke-dasharray="22" stroke-dashoffset="22" opacity="0.6"/>
      <line id="ll-line3" x1="44" y1="32" x2="63" y2="31"
        stroke-width="1.6" stroke-dasharray="22" stroke-dashoffset="22" opacity="0.6"/>
      <line id="ll-line4" x1="44" y1="38" x2="63" y2="37"
        stroke-width="1.6" stroke-dasharray="22" stroke-dashoffset="22" opacity="0.6"/>
    `;
    animateDash(svg.getElementById('ll-spine'), 55, 0, 160, function() {
      var left = svg.getElementById('ll-left'), right = svg.getElementById('ll-right');
      var donePages = 0;
      function onPage() { donePages++; if (donePages === 2) {
        var lines = [svg.getElementById('ll-line1'), svg.getElementById('ll-line2'),
                     svg.getElementById('ll-line3'), svg.getElementById('ll-line4')];
        var dl = 0;
        lines.forEach(function(l, i) {
          setTimeout(function() {
            animateDash(l, 22, 0, 120, function() { dl++; if (dl === lines.length) done(); });
          }, i * 50);
        });
      }}
      animateDash(left,  200, 0, 260, onPage);
      animateDash(right, 200, 0, 260, onPage);
    });
  },

  music: function(svg, done) {
    // Three notes draw their stems, then float upward
    svg.innerHTML = `
      <g id="ll-note1" transform="translate(0,0)">
        <line x1="18" y1="55" x2="18" y2="30" stroke-width="2.8"
          stroke-dasharray="28" stroke-dashoffset="28"/>
        <ellipse cx="15" cy="56" rx="6" ry="4" transform="rotate(-15,15,56)"
          stroke-width="2.8" stroke-dasharray="40" stroke-dashoffset="40"/>
        <line x1="18" y1="30" x2="32" y2="27" stroke-width="2.8"
          stroke-dasharray="16" stroke-dashoffset="16"/>
      </g>
      <g id="ll-note2" transform="translate(14,5)">
        <line x1="18" y1="55" x2="18" y2="30" stroke-width="2.8"
          stroke-dasharray="28" stroke-dashoffset="28"/>
        <ellipse cx="15" cy="56" rx="6" ry="4" transform="rotate(-15,15,56)"
          stroke-width="2.8" stroke-dasharray="40" stroke-dashoffset="40"/>
        <line x1="18" y1="30" x2="32" y2="27" stroke-width="2.8"
          stroke-dasharray="16" stroke-dashoffset="16"/>
      </g>
      <g id="ll-note3" transform="translate(28,0)">
        <line x1="18" y1="55" x2="18" y2="30" stroke-width="2.8"
          stroke-dasharray="28" stroke-dashoffset="28"/>
        <ellipse cx="15" cy="56" rx="6" ry="4" transform="rotate(-15,15,56)"
          stroke-width="2.8" stroke-dasharray="40" stroke-dashoffset="40"/>
        <line x1="18" y1="30" x2="32" y2="27" stroke-width="2.8"
          stroke-dasharray="16" stroke-dashoffset="16"/>
      </g>
    `;
    [1,2,3].forEach(function(n, i) {
      var noteEl = svg.getElementById('ll-note' + n);
      var parts = noteEl.querySelectorAll('line, ellipse');
      setTimeout(function() {
        var dp = 0;
        parts.forEach(function(p, j) {
          setTimeout(function() {
            var da = parseFloat(p.getAttribute('stroke-dasharray'));
            animateDash(p, da, 0, 180, function() {
              dp++;
              if (dp === parts.length && n === 3) {
                // float all notes up
                floatUp(svg.getElementById('ll-note1'), 0,   12, 500);
                floatUp(svg.getElementById('ll-note2'), 80,  10, 500);
                floatUp(svg.getElementById('ll-note3'), 160, 14, 500, done);
              }
            });
          }, j * 60);
        });
      }, i * 130);
    });
  },
};

/* ═══════════════════════════════════════════════════════
   ANIMATION HELPERS
═══════════════════════════════════════════════════════ */
function animateDash(el, from, to, dur, done) {
  var start = null;
  function step(ts) {
    if (!start) start = ts;
    var p = Math.min((ts - start) / dur, 1);
    var e = p < 0.5 ? 2*p*p : -1+(4-2*p)*p; // ease in-out
    el.setAttribute('stroke-dashoffset', (from + (to - from) * e).toFixed(2));
    if (p < 1) requestAnimationFrame(step);
    else if (done) done();
  }
  requestAnimationFrame(step);
}

function morphPoints(el, fromPts, toPts, dur, done) {
  var from = fromPts.split(' ').map(function(p) { return p.split(',').map(Number); });
  var to   = toPts.split(' ').map(function(p)   { return p.split(',').map(Number); });
  var start = null;
  function step(ts) {
    if (!start) start = ts;
    var p = Math.min((ts - start) / dur, 1);
    var e = p < 0.5 ? 2*p*p : -1+(4-2*p)*p;
    var pts = from.map(function(f, i) {
      return (f[0] + (to[i][0] - f[0]) * e).toFixed(1) + ',' + (f[1] + (to[i][1] - f[1]) * e).toFixed(1);
    });
    el.setAttribute('points', pts.join(' '));
    if (p < 1) requestAnimationFrame(step);
    else if (done) done();
  }
  requestAnimationFrame(step);
}

function animateRotate(el, fromDeg, toDeg, dur, done) {
  var bbox = { x: 0, y: 0 }; // gear is centred at 0,0 via translate
  var start = null;
  function step(ts) {
    if (!start) start = ts;
    var p = Math.min((ts - start) / dur, 1);
    var e = p < 0.5 ? 2*p*p : -1+(4-2*p)*p;
    var deg = fromDeg + (toDeg - fromDeg) * e;
    var existing = el.getAttribute('transform') || '';
    var base = existing.replace(/\s*rotate\([^)]*\)/, '');
    el.setAttribute('transform', base + ' rotate(' + deg.toFixed(1) + ')');
    if (p < 1) requestAnimationFrame(step);
    else if (done) done();
  }
  requestAnimationFrame(step);
}

function floatUp(el, delay, dist, dur, done) {
  setTimeout(function() {
    var start = null;
    var existing = el.getAttribute('transform') || '';
    var match = existing.match(/translate\(([^,]+),([^)]+)\)/);
    var ox = match ? parseFloat(match[1]) : 0;
    var oy = match ? parseFloat(match[2]) : 0;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var e = 1 - Math.pow(1 - p, 3); // ease out
      var ny = oy - dist * e;
      var op = 1 - p;
      el.setAttribute('transform', 'translate(' + ox + ',' + ny.toFixed(2) + ')');
      el.style.opacity = op.toFixed(2);
      if (p < 1) requestAnimationFrame(step);
      else { el.style.opacity = '0'; if (done) done(); }
    }
    requestAnimationFrame(step);
  }, delay);
}

/* ═══════════════════════════════════════════════════════
   CATEGORY TABS — Quick Access
═══════════════════════════════════════════════════════ */
(function() {
  var tilesEl  = document.getElementById('cat-tiles');
  var loaderEl = document.getElementById('cat-loader');
  var loaderSvg= document.getElementById('cat-loader-svg');
  if (!tilesEl) return;

  var currentCat = 'apps';
  var animating   = false;

  function renderTiles(cat) {
    var projs = PROJECTS.filter(function(p) { return p.category === cat; });
    tilesEl.innerHTML = projs.map(function(p) {
      var td = TILE_DATA[p.id] || {};
      var url = td.pages || p.pages || p.github;
      var desc = td.desc || p.description.slice(0, 50);
      return '<a href="' + url + '" target="_blank" rel="noopener" class="tile-card" style="--tile-img:url(\''+p.image+'\')">' +
        '<div class="tile-overlay"></div>' +
        '<div class="tile-body">' +
          '<span class="tile-name">' + p.name + '</span>' +
          '<span class="tile-desc">' + desc + '</span>' +
        '</div>' +
        '<span class="tile-arrow">\u2197</span>' +
        '</a>';
    }).join('');
  }

  function switchCat(cat) {
    if (cat === currentCat || animating) return;
    animating = true;
    currentCat = cat;

    // update tab active state
    document.querySelectorAll('.cat-tab').forEach(function(t) {
      t.classList.toggle('active', t.dataset.cat === cat);
    });

    // fade out tiles
    tilesEl.style.opacity = '0';
    tilesEl.style.transform = 'translateY(6px)';

    // show loader after short delay
    setTimeout(function() {
      loaderEl.classList.add('visible');
      loaderSvg.innerHTML = '';
      loaderSvg.style.opacity = '1';

      var loader = LOADERS[cat];
      if (loader) {
        loader(loaderSvg, function() {
          // small pause after animation
          setTimeout(function() {
            loaderEl.classList.remove('visible');
            renderTiles(cat);
            // fade tiles in
            requestAnimationFrame(function() {
              requestAnimationFrame(function() {
                tilesEl.style.transition = 'opacity 220ms ease, transform 220ms ease';
                tilesEl.style.opacity = '1';
                tilesEl.style.transform = 'translateY(0)';
                setTimeout(function() {
                  tilesEl.style.transition = '';
                  animating = false;
                }, 230);
              });
            });
          }, 120);
        });
      } else {
        loaderEl.classList.remove('visible');
        renderTiles(cat);
        tilesEl.style.opacity = '1';
        tilesEl.style.transform = 'translateY(0)';
        animating = false;
      }
    }, 100);
  }

  document.querySelectorAll('.cat-tab').forEach(function(btn) {
    btn.addEventListener('click', function() { switchCat(btn.dataset.cat); });
  });

  // Initial render
  renderTiles('apps');
  tilesEl.style.opacity = '1';
})();

/* ═══════════════════════════════════════════════════════
   ACCORDIONS — Projects View (global so setLang can re-render)
═══════════════════════════════════════════════════════ */
function renderAccordions() {
  var container = document.getElementById('accordions');
  if (!container) return;
  container.innerHTML = '';
  var t = TRANSLATIONS[CURRENT_LANG] || TRANSLATIONS.en;

  CATEGORIES.forEach(function(cat, ci) {
    var projs = PROJECTS.filter(function(p) { return p.category === cat.id; });
    if (!projs.length) return;

    // Get translated category label
    var catLabel = (t['acc_' + cat.id] || cat.label).toUpperCase();

    var acc = document.createElement('div');
    acc.className = 'accordion' + (ci === 0 ? ' open' : '');

    var header = document.createElement('button');
    header.className = 'acc-header';
    header.setAttribute('aria-expanded', ci === 0 ? 'true' : 'false');
    header.innerHTML =
      '<span class="acc-label">' + catLabel + '</span>' +
      '<span class="acc-count">' + projs.length + '</span>' +
      '<svg class="acc-arrow" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4,6 8,10 12,6"/></svg>';

    var body = document.createElement('div');
    body.className = 'acc-body';
    if (ci !== 0) body.style.height = '0';

    body.innerHTML = projs.map(function(p, i) {
      return '<button class="project-banner" onclick="openProject(\'' + p.id + '\')">' +
        '<div class="pb-thumb" style="background-image:url(\'' + p.image + '\')"></div>' +
        '<span class="pb-num">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<div class="pb-body">' +
          '<div class="pb-top">' +
            '<span class="pb-name">' + p.name + '</span>' +
            '<span class="pb-cat">' + p.categoryLabel.toUpperCase() + '</span>' +
          '</div>' +
          '<p class="pb-desc">' + p.description + '</p>' +
          '<div class="pb-footer">' +
            '<span class="pb-lang">' + p.language + '</span>' +
            '<span class="pb-lang">' + p.updated + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="pb-action"><span class="pb-arrow">→</span></div>' +
        '</button>';
    }).join('');

    header.addEventListener('click', function() {
      var isOpen = acc.classList.contains('open');
      container.querySelectorAll('.accordion').forEach(function(a) {
        a.classList.remove('open');
        a.querySelector('.acc-header').setAttribute('aria-expanded', 'false');
        var b = a.querySelector('.acc-body');
        b.style.height = b.scrollHeight + 'px';
        requestAnimationFrame(function() { b.style.height = '0'; });
      });
      if (!isOpen) {
        acc.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
        body.style.height = '0';
        requestAnimationFrame(function() {
          body.style.height = body.scrollHeight + 'px';
          setTimeout(function() { body.style.height = 'auto'; }, 320);
        });
      }
    });

    acc.appendChild(header);
    acc.appendChild(body);
    container.appendChild(acc);
    if (ci === 0) body.style.height = 'auto';
  });
}
renderAccordions();

/* ===== INIT ===== */

/* ===== MUSIC PLAYER — Madness.zip (static, no fetch) ===== */
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

/* Madness.zip is the one and only static playlist — no fetch needed */

/* ===== SPEND BUTTON — toggle popover ===== */
document.addEventListener('DOMContentLoaded', function() {
(function() {
  var btn = document.getElementById('spend-btn');
  var pop = document.getElementById('spend-popover');
  if (!btn || !pop) return;

  function openPop() {
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    pop.classList.add('open');
    pop.removeAttribute('aria-hidden');
  }

  function closePop() {
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    pop.classList.remove('open');
    pop.setAttribute('aria-hidden', 'true');
  }

  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    pop.classList.contains('open') ? closePop() : openPop();
  });

  // Close on outside click
  document.addEventListener('click', function(e) {
    if (!pop.contains(e.target) && e.target !== btn) {
      closePop();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closePop();
  });
})();
});
