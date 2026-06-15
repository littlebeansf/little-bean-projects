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
    cat_lab:          'Lab',
    cat_study:        'Study',
    cat_music:        'Music',
    all_projects:     'All_Projects',
    view_profile:     'View Profile ↗',
    albums_label:     '// ALBUMS',
    tracklist_label:  '// MADNESS.ZIP',
    music_pick_track: 'Pick a track to play',
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
    acc_lab:      'Lab',
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
    cat_lab:          'Lab',
    cat_study:        'Lernen',
    cat_music:        'Musik',
    all_projects:     'Alle_Projekte',
    view_profile:     'Profil ansehen ↗',
    albums_label:     '// ALBEN',
    tracklist_label:  '// MADNESS.ZIP',
    music_pick_track: 'Track auswählen',
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
    acc_lab:      'Lab',
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
    cat_lab:          'Lab',
    cat_study:        'Studio',
    cat_music:        'Musica',
    all_projects:     'Tutti_i_Progetti',
    view_profile:     'Vedi Profilo ↗',
    albums_label:     '// ALBUM',
    tracklist_label:  '// MADNESS.ZIP',
    music_pick_track: 'Scegli un brano',
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
    acc_lab:      'Lab',
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
    id: 'whoosit',
    name: 'whoosit',
    category: 'games',
    categoryLabel: 'Game',
    description: 'Weird multiplayer Guess Who? for 2–4 players. Flip monster tiles, ask twisted questions, unmask the creature — over WebRTC P2P, no install needed.',
    github: 'https://github.com/littlebeansf/whoosit',
    pages: 'https://littlebeansf.github.io/whoosit/',
    image: 'img/whoosit.png',
    language: 'JavaScript',
    isPrivate: false,
    updated: '2026-06-12',
    highlights: [
      '2–4 player WebRTC P2P multiplayer',
      'Monster character board with flip animations',
      'Play vs AI mode',
      'Host & join with a code',
      'No install, no account'
    ]
  },
  {
    id: 'crucible-game',
    name: 'crucible-game',
    category: 'games',
    categoryLabel: 'Game',
    description: 'Little Alchemy meets physics sandbox. Discover ~6,000 elements by combining them, then drop anything you\'ve found into a live SVG physics world — watch it fall, flow, burn, and freeze.',
    github: 'https://github.com/littlebeansf/crucible-game',
    pages: 'https://littlebeansf.github.io/crucible-game/',
    image: 'img/crucible-game.png',
    language: 'JavaScript',
    isPrivate: false,
    updated: '2026-06-11',
    highlights: [
      '~6,000 discoverable elements',
      'Drag-to-combine Forge mode',
      'Live SVG physics Sandbox',
      'Fire, water, ice, lava physics',
      'Pure vanilla JS + SVG'
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
    category: 'apps',
    categoryLabel: 'Apps',
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
    id: 'paint-mixer',
    name: 'paint-mixer',
    category: 'tools',
    categoryLabel: 'Tool',
    description: 'Professional colour mixing studio. Blend up to 8 pigments, apply 16 special effects — metallic, marble, glitter, crystal — and preview live.',
    github: 'https://github.com/littlebeansf/paint-mixer',
    pages: 'https://littlebeansf.github.io/paint-mixer/',
    image: 'img/paint-mixer.png',
    language: 'JavaScript',
    isPrivate: false,
    updated: '2026-05-27',
    highlights: [
      '8-pigment live blend preview',
      '16 special effects: metallic, marble, glitter, crystal',
      '3D preview mode',
      'Saved palette library',
      'Canvas API powered'
    ]
  },
  {
    id: 'wtf-css',
    name: 'wtf-css',
    category: 'lab',
    categoryLabel: 'Lab',
    description: 'A living CSS sandbox of insane browser tricks. Eye-awakening scroll effects, liquid text, false 3D, glitch animations — is this even a browser?',
    github: 'https://github.com/littlebeansf/wtf-css',
    pages: 'https://littlebeansf.github.io/wtf-css/',
    image: 'img/wtf-css.png',
    language: 'CSS',
    isPrivate: false,
    updated: '2026-05-27',
    highlights: [
      'Eye Awakening scroll reveal',
      'Liquid text filter effects',
      'False 3D depth with mouse tracking',
      'Signal Decay clip-path glitch',
      'CSS-only experiments'
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
  { id: 'lab',      label: 'Lab' },
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
  'whoosit':                     { pages: 'https://littlebeansf.github.io/whoosit/',                    desc: 'Monster Guess Who?, P2P multiplayer' },
  'crucible-game':               { pages: 'https://littlebeansf.github.io/crucible-game/',               desc: 'Combine elements, unleash physics' },
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

  lab: function(svg, done) {
    // Flask fills with liquid, then bubbles float up
    svg.innerHTML = `
      <path id="ll-flask" d="M30,18 L30,42 L16,62 Q14,68 20,70 L60,70 Q66,68 64,62 L50,42 L50,18 Z"
        stroke-width="2.8" fill="none" stroke-dasharray="200" stroke-dashoffset="200"/>
      <line id="ll-neck" x1="26" y1="18" x2="54" y2="18"
        stroke-width="2.8" stroke-dasharray="30" stroke-dashoffset="30"/>
      <circle id="ll-b1" cx="30" cy="65" r="3"
        stroke-width="2" fill="none" stroke-dasharray="20" stroke-dashoffset="20" opacity="0"/>
      <circle id="ll-b2" cx="40" cy="60" r="4"
        stroke-width="2" fill="none" stroke-dasharray="26" stroke-dashoffset="26" opacity="0"/>
      <circle id="ll-b3" cx="50" cy="64" r="3"
        stroke-width="2" fill="none" stroke-dasharray="20" stroke-dashoffset="20" opacity="0"/>
    `;
    animateDash(svg.getElementById('ll-flask'), 200, 0, 350, function() {
      animateDash(svg.getElementById('ll-neck'), 30, 0, 120, function() {
        [1,2,3].forEach(function(n, i) {
          setTimeout(function() {
            var b = svg.getElementById('ll-b' + n);
            b.setAttribute('opacity', '1');
            animateDash(b, parseFloat(b.getAttribute('stroke-dasharray')), 0, 150, function() {
              floatUp(b, 0, 18, 400, n === 3 ? done : null);
            });
          }, i * 140);
        });
      });
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

/* ===== MUSIC — 3 albums, Suno embed player ===== */
const ALBUMS = {
  madness: {
    title: 'Madness.zip',
    cover: 'https://cdn2.suno.ai/b9e3928d.jpeg',
    playlist: 'https://suno.com/playlist/7e22dab7-8293-47ae-9b5d-37594cd92576',
    tracks: [
      { id: '6e00b6da-b35b-4c25-865a-e2f11a0d61da', title: 'WITCH AT 190bpm' },
      { id: '806b65e1-c3f9-41a9-8b60-ad89e25e9f2b', title: 'INFECTED VIKINGS' },
      { id: '4900c72f-5798-4f0e-bf99-6bca2a533dd6', title: 'RUDRA | रुद्र' },
      { id: '7cd1ce74-598e-473d-a3ac-4c3194fd4b5c', title: 'YOKA-O-NI' },
      { id: 'f841a16b-0595-44c3-81ea-970b78a20e3e', title: 'YODEL MTFUCKER' },
      { id: '3481ad98-3f21-4801-bab9-96b03859a07a', title: 'DRUNK COBOLT' },
      { id: '746ee5e9-1123-40b0-b0e0-f3f920f3f0b1', title: 'LAS PATRZY' },
      { id: '1d0ae377-67da-44b8-b9b9-bfb808af1e16', title: 'LAS PATRZY pt. 2' },
      { id: '26fbe641-327c-4893-ba93-52d9780b4bb3', title: 'ACID' },
      { id: '65f1c753-b5cf-40a6-a9b3-e5d982667546', title: 'WAIFU' },
      { id: 'e80d88a9-d916-408a-82a2-3e5ec67ed5ed', title: 'HORNY WAIFU' }
    ]
  },
  dancing: {
    title: 'DANCING MONSTERS',
    cover: 'https://cdn2.suno.ai/b3674a45.jpeg',
    playlist: 'https://suno.com/playlist/0991758d-a658-47af-afd3-a664259b9ff1',
    tracks: [
      { id: '9f577755-77f4-4580-ae31-42cda132cffb', title: 'DANCING MONSTERS IN HOLLAND',            country: 'Netherlands', capital: 'Amsterdam',   lat: 52.3676, lng:  4.9041 },
      { id: '040b233e-3051-4d51-864c-630fbd20d573', title: 'DANCING MONSTERS IN ARABIC',             country: 'Egypt',       capital: 'Cairo',       lat: 30.0444, lng: 31.2357 },
      { id: '907c25aa-bfb4-423b-809a-25a297bd0837', title: 'DANCING MONSTERS IN ITALY',             country: 'Italy',       capital: 'Rome',        lat: 41.9028, lng: 12.4964 },
      { id: '4d131ddf-ebae-402a-a831-00363f17492c', title: 'DANCING MONSTERS IN GERMANY',           country: 'Germany',     capital: 'Berlin',      lat: 52.5200, lng: 13.4050 },
      { id: '7a887d31-0557-491a-a30a-337432365d59', title: 'DANCING MONSTERS IN JAPAN',             country: 'Japan',       capital: 'Tokyo',       lat: 35.6762, lng: 139.6503 },
      { id: '77bc507c-a6c3-441f-b0bc-e6e1b6e6cf62', title: 'DANCING MONSTERS IN RUSSIA',           country: 'Russia',      capital: 'Moscow',      lat: 55.7558, lng: 37.6173 },
      { id: 'f3a8a51b-79f0-4c37-acb8-7ffc8147af1f', title: 'DANCING MONSTERS IN BRAZIL',           country: 'Brazil',      capital: 'Brasília',    lat: -15.7801, lng: -47.9292 },
      { id: 'd32b3deb-6737-4f17-8c89-d1599caaa06c', title: 'DANCING MONSTERS IN NORWAY',           country: 'Norway',      capital: 'Oslo',        lat: 59.9139, lng: 10.7522 },
      { id: '6b93f0bb-ba77-4557-8786-32e0b0c8f79b', title: 'DANCING MONSTERS IN EGYPT',            country: 'Egypt',       capital: 'Cairo',       lat: 30.0444, lng: 31.2357 },
      { id: 'e6056755-67ec-4f4b-b6d7-385935435fcb', title: 'DANCING MONSTERS IN AMERICA',          country: 'USA',         capital: 'Washington',  lat: 38.9072, lng: -77.0369 },
      { id: 'fc7ccfac-45d5-4d04-b0f2-b546d6118e30', title: 'DANCING MONSTERS IN FRANCE',           country: 'France',      capital: 'Paris',       lat: 48.8566, lng:  2.3522 },
      { id: '4e9fb12f-29c6-44f7-8345-6bbeb600b1f3', title: 'DANCING MONSTERS IN SPAIN',            country: 'Spain',       capital: 'Madrid',      lat: 40.4168, lng: -3.7038 }
    ]
  },
  chaos: {
    title: 'ᚲᚺᚨᛟᛊ',
    cover: 'https://cdn2.suno.ai/bcc3d98c.jpeg',
    playlist: 'https://suno.com/playlist/83ba60ba-2e48-44ec-a57d-6eed30f5ba49',
    tracks: [
      { id: 'ada6333e-6453-4188-a771-4066ff3eb98f', title: '"ᚨᛚᚢ // Ginnungagap' },
      { id: '648329ef-1b03-4fac-82e6-655b01fdb182', title: 'ᚱᚨᚷᚾᚨᚱᛟᚲ' },
      { id: 'c9ec6d08-1ec2-455e-8313-aa1142d52462', title: 'ᛊᚢᚲᚲ ᚦᛖ ᛏᛁᛏᛏᛁᛖᛊ ᛟᚠ ᚦᛖ ᚹᛁᛏᚲᚺ' },
      { id: '2a0e3a40-6795-4331-b4cb-36c28b72afcc', title: 'ᛈᚱᛁᛗᛟᚱᛞᛟᛚ ᛗᛁᛚᚲ' },
      { id: 'a0243cf2-53f7-4b8f-848d-69bfe43d610d', title: 'ᛊᚲᚢᚷᚷᚨᚠᛃᛟᚱ // M0nster' },
      { id: '945cdcfa-12d9-4d62-8d66-6372c2bfea3a', title: 'ᛚᛃᛟᛊ ᚹᛖᚱᚦᚢᚱ ᛊᚲᚢᚷᚷᛁ' },
      { id: '6d50fa47-b29c-4b6c-b7a0-1805cf4c35a5', title: 'ᛟᚱᛖᛁᚦᚨ' },
      { id: 'acfb4731-4204-45c0-b952-16aaf2f0d492', title: 'ᛟᚱᛖᛁᚦᚨ (pr4y3r rmx)' },
      { id: '7edf2270-92d4-4a9c-988b-6ce2c83b7806', title: 'ᚷᛟᚦ ᛞᛖᛃᚨ' }
    ]
  }
};

let currentAlbum = 'madness';
let currentTrackId = null;

function renderMusicTracklist(albumKey) {
  const album = ALBUMS[albumKey];
  if (!album) return;
  const tl = document.getElementById('music-tracklist');
  if (!tl) return;
  tl.innerHTML = album.tracks.map((t, i) => `
    <button class="music-track-btn${currentTrackId === t.id ? ' active' : ''}" data-id="${t.id}" aria-label="Play ${t.title}">
      <span class="music-track-num">${String(i + 1).padStart(2, '0')}</span>
      <span class="music-track-title">${t.title}</span>
      <span class="music-track-play-icon">
        ${currentTrackId === t.id
          ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>'
          : '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>'
        }
      </span>
    </button>
  `).join('');

  // Attach click handlers
  tl.querySelectorAll('.music-track-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = this.dataset.id;
      playMusicTrack(id);
    });
  });
}

function playMusicTrack(songId) {
  currentTrackId = songId;
  const iframe = document.getElementById('music-embed');
  const placeholder = document.getElementById('music-embed-placeholder');
  if (!iframe || !placeholder) return;

  iframe.src = `https://suno.com/embed/${songId}`;
  iframe.style.display = 'block';
  placeholder.style.display = 'none';

  // Re-render tracklist to update active state
  renderMusicTracklist(currentAlbum);
}

function switchAlbum(albumKey) {
  currentAlbum = albumKey;
  currentTrackId = null;

  // Update album button states
  document.querySelectorAll('.music-album-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.album === albumKey);
  });

  // Show globe or tracklist
  const bodyTracklist = document.getElementById('music-body-tracklist');
  const bodyGlobe     = document.getElementById('music-body-globe');

  if (albumKey === 'dancing') {
    if (bodyTracklist) bodyTracklist.style.display = 'none';
    if (bodyGlobe)     bodyGlobe.style.display = 'grid';
    // rAF ensures the grid cell has painted and clientWidth is available
    requestAnimationFrame(() => initDancingGlobe());
  } else {
    if (bodyTracklist) bodyTracklist.style.display = 'grid';
    if (bodyGlobe)     bodyGlobe.style.display = 'none';
    // Reset tracklist embed
    const iframe = document.getElementById('music-embed');
    const placeholder = document.getElementById('music-embed-placeholder');
    if (iframe) { iframe.src = ''; iframe.style.display = 'none'; }
    if (placeholder) placeholder.style.display = 'flex';
    renderMusicTracklist(albumKey);
  }
}

/* ===== DANCING MONSTERS — D3 Globe ===== */
let _globeInitialised = false;

function initDancingGlobe() {
  if (_globeInitialised) return;
  if (typeof d3 === 'undefined' || typeof topojson === 'undefined') {
    setTimeout(initDancingGlobe, 300);
    return;
  }
  _globeInitialised = true;

  // Read CSS vars at runtime → auto light/dark
  const rootStyle = getComputedStyle(document.documentElement);
  const C = {
    bg:      rootStyle.getPropertyValue('--color-bg').trim()      || '#f0ede8',
    text:    rootStyle.getPropertyValue('--color-text').trim()    || '#0f0e0c',
    border:  rootStyle.getPropertyValue('--color-border').trim()  || '#c8c3bb',
    surface: rootStyle.getPropertyValue('--color-surface').trim() || '#e8e4de',
    faint:   rootStyle.getPropertyValue('--color-text-faint').trim() || '#a09a90',
  };

  const tracks = ALBUMS.dancing.tracks;
  const svgEl  = document.getElementById('dancing-globe');
  if (!svgEl) return;

  const W = svgEl.parentElement.clientWidth || 440;
  const SIZE = Math.min(W - 16, 440);
  const R = SIZE / 2 - 2;

  const svg = d3.select('#dancing-globe')
    .attr('width',  SIZE)
    .attr('height', SIZE)
    .style('cursor', 'grab');

  const proj = d3.geoOrthographic()
    .scale(R)
    .translate([SIZE/2, SIZE/2])
    .clipAngle(90)
    .rotate([20, -20]);

  const path = d3.geoPath().projection(proj);
  const globe = svg.append('g');

  // Outer border circle
  globe.append('circle')
    .attr('cx', SIZE/2).attr('cy', SIZE/2).attr('r', R)
    .attr('fill', C.bg)
    .attr('stroke', C.border)
    .attr('stroke-width', 1);

  const landG   = globe.append('g').attr('class', 'globe-land');
  const dotsG   = globe.append('g').attr('class', 'globe-dots');
  const labelsG = globe.append('g').attr('class', 'globe-labels');

  // Hairline graticule
  globe.append('path')
    .datum(d3.geoGraticule()())
    .attr('class', 'globe-graticule')
    .attr('d', path)
    .attr('fill', 'none')
    .attr('stroke', C.border)
    .attr('stroke-width', 0.3)
    .attr('opacity', 0.5);

  d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(world => {
    const countries = topojson.feature(world, world.objects.countries);

    landG.selectAll('path')
      .data(countries.features)
      .join('path')
      .attr('d', path)
      .attr('fill', C.surface)
      .attr('stroke', C.border)
      .attr('stroke-width', 0.6);

    renderDots();
    autoSpin();
  });

  function renderDots() {
    dotsG.selectAll('*').remove();
    labelsG.selectAll('*').remove();

    const points = {};
    tracks.forEach(t => {
      const key = `${t.lat},${t.lng}`;
      if (!points[key]) points[key] = [];
      points[key].push(t);
    });

    Object.entries(points).forEach(([key, pts]) => {
      const { lat, lng } = pts[0];
      const projected = proj([lng, lat]);
      if (!projected) return;

      const visible = d3.geoDistance([lng, lat], [-proj.rotate()[0], -proj.rotate()[1]]) < Math.PI / 2;
      if (!visible) return;

      const [x, y] = projected;

      // Detect touch device — bigger hit area on mobile
      const isMobile = window.matchMedia('(max-width: 860px)').matches;
      const DOT = isMobile ? 8 : 5;   // visual half-size
      const HIT = isMobile ? 22 : 10; // touch/click hit-area half-size

      // Pulse ring
      dotsG.append('circle')
        .attr('class', 'globe-dot-glow')
        .attr('cx', x).attr('cy', y)
        .attr('r', DOT + 6)
        .attr('fill', 'none')
        .attr('stroke', C.text)
        .attr('stroke-width', isMobile ? 1.2 : 0.8);

      // Square dot — visual marker
      dotsG.append('rect')
        .attr('class', 'globe-dot')
        .attr('x', x - DOT).attr('y', y - DOT)
        .attr('width', DOT * 2).attr('height', DOT * 2)
        .attr('fill', C.text)
        .style('pointer-events', 'none'); // hit area handles events

      // Invisible touch/click hit area (44px min on mobile)
      dotsG.append('rect')
        .attr('class', 'globe-dot-hit')
        .attr('x', x - HIT).attr('y', y - HIT)
        .attr('width', HIT * 2).attr('height', HIT * 2)
        .attr('fill', 'transparent')
        .style('cursor', 'pointer')
        .on('click', (event) => {
          event.stopPropagation();
          stopSpin();
          playGlobeTrack(pts[0]);
        })
        .on('mouseover', function() {
          dotsG.selectAll('.globe-dot').filter((d, i, nodes) => {
            const el = nodes[i];
            return +el.getAttribute('x') === x - DOT && +el.getAttribute('y') === y - DOT;
          }).attr('opacity', 0.5);
          showGlobeLabel(x, y, pts.map(p => p.title.replace('DANCING MONSTERS IN ', '')).join(' / '));
        })
        .on('mouseout', function() {
          dotsG.selectAll('.globe-dot').attr('opacity', 1);
          labelsG.selectAll('*').remove();
        });
    });
  }

  function showGlobeLabel(x, y, text) {
    labelsG.selectAll('*').remove();
    const PAD = 5;
    const FONT = 9;
    const w = text.length * (FONT * 0.6) + PAD * 2;
    const lx = (x + 12 + w > SIZE) ? x - w - 4 : x + 12;
    const ly = y - 2;
    labelsG.append('rect')
      .attr('x', lx - PAD).attr('y', ly - FONT - 1)
      .attr('width', w).attr('height', FONT + PAD)
      .attr('fill', C.bg)
      .attr('stroke', C.border)
      .attr('stroke-width', 0.5)
      .attr('rx', 2);
    labelsG.append('text')
      .attr('x', lx).attr('y', ly)
      .attr('fill', C.text)
      .attr('font-size', `${FONT}px`)
      .attr('font-family', 'Space Mono, monospace')
      .attr('letter-spacing', '0.06em')
      .text(text.toUpperCase());
  }

  // Drag to spin
  let isDragging = false;
  let spinTimer = null;
  const sensitivity = 0.3;

  svg.call(d3.drag()
    .on('start', () => { isDragging = true; stopSpin(); svg.style('cursor', 'grabbing'); })
    .on('drag', (event) => {
      const rotate = proj.rotate();
      proj.rotate([rotate[0] + event.dx * sensitivity, rotate[1] - event.dy * sensitivity]);
      landG.selectAll('path').attr('d', path);
      globe.select('.globe-graticule').attr('d', path);
      renderDots();
    })
    .on('end', () => { isDragging = false; svg.style('cursor', 'grab'); autoSpin(); })
  );

  function stopSpin() {
    if (spinTimer) { spinTimer.stop(); spinTimer = null; }
  }

  function autoSpin() {
    stopSpin();
    spinTimer = d3.timer((elapsed) => {
      if (isDragging) return;
      const rotate = proj.rotate();
      proj.rotate([rotate[0] + 0.15, rotate[1]]);
      landG.selectAll('path').attr('d', path);
      globe.select('.globe-graticule').attr('d', path);
      renderDots();
    });
  }
}

function playGlobeTrack(track) {
  const iframe = document.getElementById('music-embed-globe');
  const placeholder = document.getElementById('music-embed-placeholder-globe');
  const nowPlaying = document.getElementById('globe-now-playing');
  const nowTitle   = document.getElementById('globe-now-title');
  if (!iframe) return;

  iframe.src = `https://suno.com/embed/${track.id}`;
  iframe.style.display = 'block';
  if (placeholder) placeholder.style.display = 'none';
  if (nowPlaying) nowPlaying.style.display = 'flex';
  if (nowTitle)   nowTitle.textContent = track.title;

  // Dismiss globe hint
  const hint = document.getElementById('globe-hint');
  if (hint) hint.style.opacity = '0';
}

// Init music view
document.addEventListener('DOMContentLoaded', function() {
  // Album buttons
  document.querySelectorAll('.music-album-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      switchAlbum(this.dataset.album);
    });
  });
  // Render default album
  renderMusicTracklist('madness');
});

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
