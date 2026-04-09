import { titleCase } from './utils.mjs';

function uniq(items) {
  return [...new Set(items.filter(Boolean))];
}

function parsePx(value) {
  if (typeof value === 'number') return value;
  if (typeof value !== 'string') return null;
  const match = value.match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : null;
}

function lower(value) {
  return String(value || '').toLowerCase();
}

function hasText(text, keyword) {
  return lower(text).includes(lower(keyword));
}

function matchWeight(text, weights = {}, matches, label) {
  let score = 0;
  for (const [key, value] of Object.entries(weights)) {
    if (!hasText(text, key)) continue;
    score += value;
    matches.push(`${label}:${key}`);
  }
  return score;
}

function tagWeight(tags, weights = {}, matches) {
  let score = 0;
  for (const [tag, value] of Object.entries(weights)) {
    if (!tags.has(tag)) continue;
    score += value;
    matches.push(`tag:${tag}`);
  }
  return score;
}

function fontWeight(fontText, weights = {}, matches) {
  let score = 0;
  for (const [key, value] of Object.entries(weights)) {
    if (!hasText(fontText, key)) continue;
    score += value;
    matches.push(`font:${key}`);
  }
  return score;
}

function stableJsonClone(value) {
  return JSON.parse(JSON.stringify(value));
}

export function primaryFonts(meta) {
  const fonts = [
    ...(meta.capture?.desktop?.analysis?.fonts || []),
    ...(meta.capture?.mobile?.analysis?.fonts || [])
  ]
    .map((font) => font.family?.replace(/^"|"$/g, ''))
    .filter(Boolean);
  return uniq(fonts).slice(0, 8);
}

export function palette(meta) {
  const colors = [
    ...(meta.capture?.desktop?.analysis?.colors || []),
    ...(meta.capture?.mobile?.analysis?.colors || [])
  ];
  const seen = new Set();
  const out = [];
  for (const color of colors) {
    if (!color?.hex || seen.has(color.hex)) continue;
    seen.add(color.hex);
    out.push(color);
  }
  return out.slice(0, 8);
}

export function classifyCaptureMode(meta) {
  if (meta.designGuidance?.captureMode) return meta.designGuidance.captureMode;
  if (meta.capture?.mode) return meta.capture.mode;
  const hasDesktop = Boolean(meta.capture?.desktop?.screenshot);
  const hasMobile = Boolean(meta.capture?.mobile?.screenshot);
  if (meta.capture?.fallbackUsed && hasDesktop && hasMobile) return 'archival-fallback';
  if (meta.capture?.status === 'ok' && hasDesktop && hasMobile) return 'live';
  if ((meta.capture?.status === 'ok' || meta.capture?.fallbackUsed) && (hasDesktop || hasMobile)) return 'mixed';
  return 'incomplete';
}

export const WORLD_SYSTEMS = [
  {
    slug: 'club-instrument',
    name: 'Club Instrument',
    bestFor: ['music-tech', 'artist-tools', 'reactive launch pages'],
    metaphors: ['sequencer', 'control surface', 'instrument panel'],
    refs: ['jazz-keys', 'blob-opera', 'holodec-world', 'intimacy-machine', 'desktop-fm', 'yaeji'],
    motion: ['pulse', 'meter fill', 'tempo-linked reveal'],
    materials: ['dark chrome', 'signal glow', 'wave lines', 'display numerals'],
    scenePrimitives: ['HeroStage', 'LiveMeter', 'DropClock', 'ArtifactRail'],
    promptSeed: 'Build this like a release instrument, not a dashboard.',
    infer: {
      tags: { music: 5, 'sound-design': 5, playful: 1, '3d-space': 1 },
      text: { music: 3, sound: 3, audio: 3, radio: 2, piano: 3, opera: 3, instrument: 4, reactive: 2 },
      archetypes: { club_instrument: 6, scroll_scrub_instrument: 5 }
    }
  },
  {
    slug: 'luxury-archive',
    name: 'Luxury Archive',
    bestFor: ['culture-tech', 'fashion', 'editorial products'],
    metaphors: ['reading room', 'accession index', 'catalog object'],
    refs: ['harley-weir', 'developments', 'animals-as-objects', 'infringe', 'publication-studio', 'williams-college-museum-of-art'],
    motion: ['restrained fade', 'crop shift', 'image breathing'],
    materials: ['warm paper', 'labels', 'rules', 'caption systems'],
    scenePrimitives: ['ArchiveIndex', 'StoryFrame', 'RoomNav', 'ScrapNote'],
    promptSeed: 'Make it feel curated and expensive, but still digitally alive.',
    infer: {
      tags: { 'arts&culture': 5, 'digital-exhibition': 4, photography: 3, fashion: 3, minimal: 1, typography: 1, 'online-magazine': 2, 'e-commerce': 1 },
      text: { archive: 4, exhibition: 3, collection: 3, catalog: 4, publication: 3, editorial: 3, objects: 2, museum: 3, curatorial: 2, ceramics: 2 },
      archetypes: { editorial_archive_index: 5, spatial_exhibition_world: 4, portfolio_artifact: 2, commerce_shrine_stage: 1 }
    }
  },
  {
    slug: 'collage-core',
    name: 'Collage Core',
    bestFor: ['campaign pages', 'youth culture launches', 'anti-template surfaces'],
    metaphors: ['poster wall', 'xerox stack', 'mixed media board'],
    refs: ['camerons-world', 'hybrid-vigor', 'finger-walking', 'glossary-of-undisciplined-design', 'hallo-internet', 'make-word-art'],
    motion: ['layered reveal', 'jitter', 'scrap drag'],
    materials: ['torn masks', 'scans', 'tape', 'stickers', 'halftones'],
    scenePrimitives: ['ScrapNote', 'TickerBand', 'ArtifactRail', 'CapsuleTile'],
    promptSeed: 'Build like a collage editor with hierarchy, not a random sticker explosion.',
    infer: {
      tags: { 'net.art': 5, glitches: 4, colorful: 2, playful: 2, 'graphic-design': 2, retro: 1, tactile: 1 },
      text: { collage: 6, gif: 5, hyperlink: 5, nostalgia: 3, internet: 2, maximal: 4, xerox: 3, mixed: 2, media: 2, flyer: 2, poster: 2 },
      archetypes: { collage_field: 6, playable_poster: 2, toy_loop_microgame: 1 }
    }
  },
  {
    slug: 'cozy-desktop',
    name: 'Cozy Desktop',
    bestFor: ['community tools', 'soft productivity', 'playful archives'],
    metaphors: ['bedroom desktop', 'notes board', 'draggable windows'],
    refs: ['simone-s-computer', 'hallo-internet', 'communal-radio-club', 'glossary-of-undisciplined-design', 'orb-farm'],
    motion: ['drag', 'snap-back', 'window shuffle'],
    materials: ['notes', 'desktop chrome', 'folder labels', 'lo-fi icons'],
    scenePrimitives: ['RoomNav', 'ArchiveIndex', 'ScrapNote', 'ArtifactRail'],
    promptSeed: 'Make it feel lived in, navigable, and collectible.',
    infer: {
      tags: { retro: 4, 'default-aesthetics': 4, participative: 1, portfolio: 1, playful: 1 },
      text: { desktop: 5, windows: 5, folders: 4, folder: 4, computer: 5, notes: 2, browser: 2, portal: 2, community: 2 },
      archetypes: { desktop_shell_world: 6, retro_tool_emulator: 4 }
    }
  },
  {
    slug: 'playable-poster',
    name: 'Playable Poster',
    bestFor: ['launches', 'drops', 'events', 'single-purpose campaign pages'],
    metaphors: ['interactive poster', 'moving flyer', 'campaign object'],
    refs: ['design-your-own-hole', 'gt-flexa', 'gt-maru-typeface', 'colour-mapper', 'circuits-of-truth', 'smc-real-time'],
    motion: ['big reveal', 'draw-on svg', 'poster-scale transitions'],
    materials: ['huge type', 'graphic marks', 'badges', 'field colors'],
    scenePrimitives: ['HeroStage', 'TickerBand', 'DropClock', 'StoryFrame'],
    promptSeed: 'Treat the page itself as the campaign artifact.',
    infer: {
      tags: { typography: 3, colorful: 2, playful: 2, tactile: 2, 'graphic-design': 2, animation: 1, event: 1 },
      text: { poster: 5, flyer: 4, campaign: 4, launch: 3, event: 3, typeface: 4, typography: 3, drag: 2, reveal: 2, touchable: 3 },
      archetypes: { playable_poster: 6, toy_loop_microgame: 2, collage_field: 1 }
    }
  },
  {
    slug: 'fan-shrine',
    name: 'Fan Shrine',
    bestFor: ['artist pages', 'edition drops', 'merch worlds', 'fandom-led commerce'],
    metaphors: ['shrine', 'merch table', 'collectible shelf'],
    refs: ['online-ceramics', 'communal-radio-club', 'country-music', 'the-wisdom-of-the-third-wave', 'issued-by-bottega', 'martine-rose'],
    motion: ['collectible flip', 'hover enlarge', 'ambient drift'],
    materials: ['tags', 'edition labels', 'stamps', 'product cards'],
    scenePrimitives: ['CapsuleTile', 'ArtifactRail', 'StoryFrame', 'DropClock'],
    promptSeed: 'Make buying feel like collecting a relic from a scene.',
    infer: {
      tags: { fashion: 4, 'e-commerce': 4, music: 2, photography: 1, portfolio: 1 },
      text: { merch: 5, edition: 4, collectible: 4, product: 3, drop: 3, store: 4, shop: 4, buy: 3, collection: 2, fashion: 3 },
      archetypes: { commerce_shrine_stage: 6, spatial_exhibition_world: 1, portfolio_artifact: 1 }
    }
  }
];

const ARCHETYPE_PROFILES = [
  {
    id: 'club_instrument',
    name: 'Club Instrument',
    useWhen: 'music-tech, artist tools, audio-led launches',
    interactionModel: 'Single hero stage plus reactive controls; user input changes sound or system state immediately; the interface should feel like an instrument, not a dashboard.',
    engineHints: [
      'Use React or plain DOM for interface chrome, then add motion/react for low-latency control feedback.',
      'Use Tone.js or Web Audio only after explicit user intent; mirror every sonic event with a visual state change.',
      'Use Canvas or lightweight WebGL only for meters, glow, or waveform layers, not for the whole UI.'
    ],
    motionRecipe: [
      'Keep one ambient pulse running behind the page.',
      'Tie meter fills, glows, or counters to direct user input.',
      'Use press feedback that resolves in under 180ms.'
    ],
    mobileFallback: 'Collapse to one active control strip, one focal stage, and tap-to-trigger presets instead of a dense multi-panel control surface.',
    navigationModel: 'The hero stage is primary; secondary controls tune the same live system instead of opening unrelated sections.',
    stateModel: 'Idle pulse -> active press/gesture -> audible or visual response -> decay/settle.',
    defaultInputs: ['tap', 'drag', 'press'],
    implementationNotes: [
      'Keep latency visibly and audibly tight; delayed response kills the instrument illusion.',
      'Treat meters, counters, or glows as live telemetry, not decoration.',
      'Gate autoplay and heavy audio initialization until the first explicit gesture.'
    ],
    antiPatterns: [
      'Do not turn the page into a fake DAW with tiny unreadable knobs.',
      'Do not separate the sound event from the visual event.',
      'Do not hide the primary interaction below the fold.'
    ],
    validationChecklist: [
      'Gesture-to-sound response feels immediate after user intent.',
      'The main control loop is readable in one glance.',
      'Mobile keeps one clear control path rather than shrinking every panel.'
    ],
    validationPriority: 'high',
    refs: ['jazz-keys', 'blob-opera', 'holodec-world', 'desktop-fm'],
    infer: {
      tags: { music: 5, 'sound-design': 5, playful: 1, '3d-space': 1 },
      text: { music: 4, sound: 4, audio: 4, opera: 4, sing: 4, piano: 4, jazz: 3, synth: 3, instrument: 4, radio: 2, keys: 3 },
      title: { piano: 4, jazz: 4, opera: 4, fm: 2, radio: 2 }
    }
  },
  {
    id: 'scroll_scrub_instrument',
    name: 'Scroll Scrub Instrument',
    useWhen: 'editorial demos where scrolling itself should produce media interaction',
    interactionModel: 'Map scroll position to notes, frames, or parameter changes so the page behaves like a score or sequencer.',
    engineHints: [
      'Use GSAP ScrollTrigger or motion/react scroll values to map scroll position to discrete states.',
      'Keep the media side effect opt-in and lightweight on mobile.',
      'Use SVG or DOM overlays to show the scrub position clearly.'
    ],
    motionRecipe: [
      'Tie transforms directly to scrub progress instead of free-running timelines.',
      'Use section snap or chapter markers to help users re-find the melody or state.',
      'Keep auxiliary motion secondary to the scrub itself.'
    ],
    mobileFallback: 'Replace long scrub zones with a horizontal slider or stepped scenes while keeping audio opt-in.',
    navigationModel: 'Scroll is the transport; sections behave like tracks or cues.',
    stateModel: 'Scroll offset -> note or frame change -> visible indicator -> optional audio decay.',
    defaultInputs: ['scroll', 'tap'],
    implementationNotes: [
      'Keep the mapping between scroll distance and output legible; hidden ratios feel broken.',
      'Provide re-entry points so users can replay the interaction without hunting.',
      'On mobile, reduce precision requirements and preserve the idea rather than the literal desktop mechanic.'
    ],
    antiPatterns: [
      'Do not bury the scrub mechanism inside a normal content page.',
      'Do not use heavy inertia that makes the scroll-to-state mapping feel mushy.',
      'Do not enable surprise audio before user intent.'
    ],
    validationChecklist: [
      'Scroll position clearly maps to a note, frame, or state change.',
      'Replay and return paths are obvious.',
      'Mobile keeps the same concept without precision overload.'
    ],
    validationPriority: 'high',
    refs: ['amanda-yeah-piano-scrollbar-piano', 'jazz-keys', 'the-road'],
    infer: {
      tags: { music: 3, 'sound-design': 3, playful: 1 },
      text: { scroll: 5, scrollbar: 6, scrub: 6, score: 3, sequence: 2, notes: 3, piano: 3 },
      title: { scroll: 5, scrollbar: 6, piano: 2 }
    }
  },
  {
    id: 'spatial_exhibition_world',
    name: 'Spatial Exhibition World',
    useWhen: '3D archives, digital exhibitions, worldbuilding, product storytelling with spatial stakes',
    interactionModel: 'Camera-led exploration through a scene; hotspots reveal detail panes, routes, or chapters.',
    engineHints: [
      'Start with CSS 3D transforms for shallow shelf or stage depth; move to React Three Fiber only when objects need free rotation, lighting, or true spatial navigation.',
      'Keep labels, captions, and calls to action in HTML overlays so they stay readable and indexable.',
      'Use post-processing and parallax sparingly; the scene should clarify hierarchy, not become a demo reel.'
    ],
    motionRecipe: [
      'Use slow camera drift or object breathing at rest.',
      'Use hover parallax or focus lift to signal selectable objects.',
      'Use fly-to or snap-to transitions between chapters instead of free-floating chaos.'
    ],
    mobileFallback: 'Switch to a guided tour with swipeable viewpoints and one-tap hotspot cycling instead of free camera control.',
    navigationModel: 'Users move through viewpoints or object clusters; each hotspot opens structured detail instead of a modal pileup.',
    stateModel: 'Idle scene -> hover/focus target -> selected object or viewpoint -> detail overlay -> return to scene.',
    defaultInputs: ['scroll', 'drag', 'tap', 'hover'],
    implementationNotes: [
      'Keep the camera shallow and legible; users should understand where they are after every move.',
      'Use one authoritative detail layer so the 3D scene does not also carry dense copy.',
      'Treat loading, texture size, and mobile fallback as product features, not cleanup.'
    ],
    antiPatterns: [
      'Do not hide critical navigation inside the 3D scene only.',
      'Do not force full free-camera navigation on mobile.',
      'Do not add dramatic lighting if the content wants editorial restraint.'
    ],
    validationChecklist: [
      'Camera or viewpoint changes preserve orientation.',
      'Hotspots open clear detail states instead of ambiguous overlays.',
      'Mobile uses guided viewpoints rather than broken free-camera controls.'
    ],
    validationPriority: 'high',
    refs: ['art-code8', 'bids-for-survival', 'holodec-world', 'sacred-display'],
    infer: {
      tags: { '3d-space': 6, 'digital-exhibition': 4, 'arts&culture': 2, fashion: 1, 'e-commerce': 1 },
      text: { '3d': 5, virtual: 4, bookshelf: 6, shelf: 4, room: 3, rooms: 3, world: 2, scan: 4, scans: 4, exhibition: 3, gallery: 3, ceramics: 2 },
      title: { '3d': 4 },
      flags: [
        { when: (signals) => signals.sticky, score: 1, evidence: 'signal:sticky-stage' }
      ]
    }
  },
  {
    id: 'playable_poster',
    name: 'Playable Poster',
    useWhen: 'campaigns, drops, type-led launches, event pages',
    interactionModel: 'One-screen poster composition with one or two high-conviction interactions such as drag, reveal, type morph, or hover distort.',
    engineHints: [
      'Use motion/react or GSAP for bold but finite timelines.',
      'Use SVG path animation and variable font APIs for draw-on or type-shift moments.',
      'Keep the DOM shallow; the composition should feel authored, not modular.'
    ],
    motionRecipe: [
      'Lead with one ceremonial entrance.',
      'Use oversized type or graphic elements as moving actors, not background garnish.',
      'Keep only one hero gesture alive on mobile.'
    ],
    mobileFallback: 'Split the poster into two to four scenes, preserve one hero interaction, and drop hover-only secondary behavior.',
    navigationModel: 'The page behaves like one campaign object or a short sequence of staged frames.',
    stateModel: 'Poster at rest -> big reveal -> one interactive transformation -> rest or reset.',
    defaultInputs: ['scroll', 'tap', 'hover'],
    implementationNotes: [
      'Use scale, typography, and dead space aggressively; do not fill every region with content.',
      'Keep the interaction count low and the conviction high.',
      'If a visual move is the identity, it should land before the user sees the CTA.'
    ],
    antiPatterns: [
      'Do not let the page collapse into a static poster with a button pasted on it.',
      'Do not attach random microinteractions to every element.',
      'Do not keep a desktop-only hover trick as the main story.'
    ],
    validationChecklist: [
      'The hero gesture is obvious in under three seconds.',
      'Desktop and mobile preserve the same campaign idea with different staging.',
      'Typography remains part of the interaction system.'
    ],
    validationPriority: 'medium',
    refs: ['design-your-own-hole', 'gt-flexa', 'smc-real-time', 'dinamo-typefaces'],
    infer: {
      tags: { playful: 2, colorful: 2, tactile: 2, typography: 3, 'graphic-design': 2, animation: 2 },
      text: { poster: 5, flyer: 4, touchable: 4, interactive: 2, campaign: 4, typeface: 4, drag: 2, reveal: 2, launch: 2 },
      title: { typeface: 4 }
    }
  },
  {
    id: 'editorial_archive_index',
    name: 'Editorial Archive Index',
    useWhen: 'publishing, curatorial tools, searchable collections, index-first sites',
    interactionModel: 'The index is the primary surface; filters, tags, and anchors drive navigation; detail emerges inline or in a sidecar.',
    engineHints: [
      'Use server-rendered HTML or React with fast client-side filtering.',
      'Use sticky rails, filter chips, and FLIP-style list-to-detail transitions.',
      'Treat metadata hierarchy as part of the interface, not supporting text.'
    ],
    motionRecipe: [
      'Use restrained fades and crop shifts rather than theatrical transitions.',
      'Preserve list context when opening detail views.',
      'Let sticky headers and current-section markers do most of the orientation work.'
    ],
    mobileFallback: 'Keep a single-column feed, bottom-sheet filters, a persistent current-section pill, and inline detail expansion.',
    navigationModel: 'Index first, then detail; users should always know how to get back to the collection view.',
    stateModel: 'Browse/filter -> hover or focus item -> inline or sidecar detail -> return to index context.',
    defaultInputs: ['scroll', 'tap', 'filter'],
    implementationNotes: [
      'Treat filters and tags as navigation, not as a cosmetic afterthought.',
      'Preserve provenance, numbering, captions, and object metadata.',
      'Density is acceptable if the hierarchy stays calm.'
    ],
    antiPatterns: [
      'Do not hide the index under a cinematic hero.',
      'Do not break back navigation when opening detail states.',
      'Do not turn archive metadata into tiny unreadable footnotes.'
    ],
    validationChecklist: [
      'Users can recover their place in the index after opening detail.',
      'Filter state is legible and persistent.',
      'Mobile keeps archive logic without collapsing into generic cards.'
    ],
    validationPriority: 'medium',
    refs: ['developments', 'and-shy-magazine', 'swiss-design-awards-2020', 'public-image'],
    infer: {
      tags: { 'arts&culture': 4, 'digital-exhibition': 3, 'online-magazine': 4, educational: 2, typography: 2, photography: 2, minimal: 1 },
      text: { archive: 5, index: 5, collection: 4, catalog: 4, exhibition: 3, publication: 4, magazine: 4, editorial: 4, browse: 3, discover: 3, filter: 4, search: 4 },
      title: { archive: 5, magazine: 4, index: 5 }
    }
  },
  {
    id: 'toy_loop_microgame',
    name: 'Toy Loop Microgame',
    useWhen: 'playful discovery, onboarding, campaign hooks, interaction-first art pieces',
    interactionModel: 'One simple rule, immediate feedback, short mastery loop, replayable in under a minute.',
    engineHints: [
      'Use Canvas or DOM plus Matter.js only when physics is the core joke or toy mechanic.',
      'Use a tight game loop and extremely obvious hit areas.',
      'Use light audio cues or haptics after intent to reinforce the loop.'
    ],
    motionRecipe: [
      'Prefer instant response plus elastic decay.',
      'Show state pops or score pops clearly.',
      'Make reset or replay feel ceremonial enough that users want another round.'
    ],
    mobileFallback: 'Keep only tap and drag; remove precision mechanics, shorten the loop, and enlarge hit targets.',
    navigationModel: 'The loop is the page; everything else supports replay or escalation.',
    stateModel: 'Instruction or teaser -> play loop -> reward or reveal -> reset.',
    defaultInputs: ['tap', 'drag'],
    implementationNotes: [
      'Explain the rule through interaction, not a paragraph.',
      'Keep the mastery loop short and replayable.',
      'If the toy is the hook, let it start above the fold.'
    ],
    antiPatterns: [
      'Do not add unrelated content sections that dilute the loop.',
      'Do not make users precision-drag tiny targets on mobile.',
      'Do not hide the reset or replay mechanic.'
    ],
    validationChecklist: [
      'The rule is clear after one attempt.',
      'The loop completes quickly and invites replay.',
      'Mobile keeps the same toy, not a broken imitation of desktop controls.'
    ],
    validationPriority: 'high',
    refs: ['labyrinth', 'smack-dat-ass', 'world-two', 'cloudwatching'],
    infer: {
      tags: { game: 5, playful: 3, participative: 2, colorful: 1, 'net.art': 1 },
      text: { game: 5, play: 3, toy: 4, nurture: 4, sculpt: 4, observe: 2, loop: 4, challenge: 3, score: 3, click: 2, interact: 2 },
      title: { game: 5, world: 1 }
    }
  },
  {
    id: 'desktop_shell_world',
    name: 'Desktop Shell World',
    useWhen: 'weird default interfaces, retro portals, collectible navigation, community worlds',
    interactionModel: 'Navigation happens through windows, icons, folders, panels, or desktop objects; the chrome is part of the fiction.',
    engineHints: [
      'Use DOM windows with a z-index manager instead of drawing the entire system into canvas.',
      'Constrain drag, persist window state locally when useful, and keep focus handling accessible.',
      'Use sprite, bitmap, or icon assets to carry the fiction without sacrificing text clarity.'
    ],
    motionRecipe: [
      'Use window open and close snaps.',
      'Use drag inertia sparingly and focus elevation clearly.',
      'Use subtle CRT or idle ambient loops only as background texture.'
    ],
    mobileFallback: 'Translate the window system into a card stack, bottom drawer, or tabbed shell while preserving the desktop fiction in the chrome.',
    navigationModel: 'Users move between windows or objects instead of scrolling through one flat document.',
    stateModel: 'Shell at rest -> open or focus window -> inspect content -> shuffle or close.',
    defaultInputs: ['drag', 'tap', 'click'],
    implementationNotes: [
      'Make z-order, focus, and close states unambiguous.',
      'Keep the fiction warm and usable, not ironic.',
      'Use persistence selectively so revisits feel lived-in.'
    ],
    antiPatterns: [
      'Do not make every window draggable on mobile.',
      'Do not bury the content under chrome for the sake of the joke.',
      'Do not simulate an entire OS when only a window metaphor is needed.'
    ],
    validationChecklist: [
      'Opening and focusing windows is intuitive.',
      'Desktop chrome supports the content instead of obscuring it.',
      'Mobile keeps the fiction without impossible drag behavior.'
    ],
    validationPriority: 'high',
    refs: ['orb-farm', 'simone-s-computer', 'poolside-fm', 'communal-radio-club'],
    infer: {
      tags: { retro: 5, 'default-aesthetics': 4, participative: 1, portfolio: 1 },
      text: { desktop: 6, windows: 6, window: 5, icons: 4, folders: 5, folder: 5, computer: 6, portal: 2, browser: 2, community: 2 },
      title: { computer: 6, desktop: 6 },
      fonts: { chicago: 4, 'ms sans': 4, pixel: 3, bitmap: 3 }
    }
  },
  {
    id: 'retro_tool_emulator',
    name: 'Retro Tool Emulator',
    useWhen: 'fake utilities, generative toys, nostalgia-as-product, creator tools with strong personality',
    interactionModel: 'The interface behaves like a remembered app: menus, presets, panels, export, and toy controls are the product.',
    engineHints: [
      'Use plain DOM and CSS for chrome, Canvas or SVG for outputs, and a client-side export pipeline if the tool creates artifacts.',
      'Use bitmap or low-fi fonts only where they support the illusion.',
      'Make panel swapping and render feedback clearer than the ornament.'
    ],
    motionRecipe: [
      'Keep animation minimal and rely on press states, panel swaps, menu drops, and render feedback.',
      'Use progress or export states to sell the utility fiction.',
      'Avoid floaty transitions; remembered apps feel decisive.'
    ],
    mobileFallback: 'Turn dense panels into a one-tool-at-a-time inspector or wizard while preserving the visual chrome.',
    navigationModel: 'The utility surface is primary; menus, presets, and output views are the main navigation.',
    stateModel: 'Pick tool or preset -> adjust parameters -> render or export -> reset or save.',
    defaultInputs: ['tap', 'drag', 'type'],
    implementationNotes: [
      'Keep the tool affordances obvious enough that users can generate output immediately.',
      'Export or save flow should feel like part of the charm, not plumbing.',
      'Use nostalgia as structure, not as a skin pasted over generic controls.'
    ],
    antiPatterns: [
      'Do not mimic a tool so literally that it becomes unusable.',
      'Do not cram the desktop layout unchanged onto mobile.',
      'Do not spend all the effort on chrome while the output feels generic.'
    ],
    validationChecklist: [
      'The core generate or edit loop is obvious.',
      'Preset, render, or export states read clearly.',
      'Mobile isolates one tool region at a time.'
    ],
    validationPriority: 'medium',
    refs: ['make-word-art', 'orb-farm', 'paint-stx', 'mousing-around'],
    infer: {
      tags: { retro: 4, 'default-aesthetics': 3, typography: 1, playful: 1 },
      text: { tool: 5, generator: 5, utility: 4, make: 3, editor: 4, export: 4, presets: 4, render: 4, app: 3, fake: 2, word: 2 },
      title: { make: 2, word: 2, paint: 4 },
      fonts: { chicago: 2, 'ms sans': 2, pixel: 2, bitmap: 2 }
    }
  },
  {
    id: 'collage_field',
    name: 'Collage Field',
    useWhen: 'net art, maximal hyperlink environments, nostalgia collages, layered campaign pages',
    interactionModel: 'The page behaves like a field of scraps, hyperlinks, stickers, and media fragments; discovery comes from scanning and touching layers.',
    engineHints: [
      'Use ordinary DOM layering first; only add Canvas or WebGL for background texture, not for the whole experience.',
      'Use sprite or GIF assets as materials inside a disciplined z-order system.',
      'Use hover swaps, link states, and offset scroll rather than overbuilt component abstractions.'
    ],
    motionRecipe: [
      'Use layered reveals, jitter, and hover swaps selectively.',
      'Let movement imply depth between scraps rather than simulating real 3D.',
      'Keep one stable composition anchor so the field does not turn into noise.'
    ],
    mobileFallback: 'Flatten the field into a guided scavenger feed or chapter stack while preserving overlap, stickers, and hyperlink energy.',
    navigationModel: 'Users browse clusters or islands of content rather than a clean linear document.',
    stateModel: 'Field at rest -> hover or focus cluster -> reveal linked artifact -> continue browsing.',
    defaultInputs: ['scroll', 'hover', 'tap'],
    implementationNotes: [
      'Keep one hierarchy anchor such as a headline, map, or rail so the collage stays legible.',
      'Treat every scrap as part of one composition, not a random sticker dump.',
      'Use link states and media swaps as the interaction language.'
    ],
    antiPatterns: [
      'Do not let the collage become unreadable on small screens.',
      'Do not animate every layer continuously.',
      'Do not remove the hyperlink density that gives the field its energy.'
    ],
    validationChecklist: [
      'One anchor element keeps the field navigable.',
      'Linked scraps clearly advertise interaction.',
      'Mobile preserves density through chapters instead of raw chaos.'
    ],
    validationPriority: 'medium',
    refs: ['camerons-world', 'hybrid-vigor', 'finger-walking', 'hallo-internet'],
    infer: {
      tags: { 'net.art': 5, glitches: 4, colorful: 2, playful: 2, retro: 1, 'graphic-design': 2 },
      text: { collage: 6, gif: 5, hyperlink: 5, nostalgia: 3, internet: 3, maximal: 4, overload: 4, mixed: 2, artifacts: 2, sticker: 2 },
      title: { world: 1 }
    }
  },
  {
    id: 'portfolio_artifact',
    name: 'Portfolio Artifact',
    useWhen: 'personal sites, studios, artists, and authored portfolios that should feel like artifacts instead of templates',
    interactionModel: 'Asymmetrical document flow, authored modules, and selective reveals make the portfolio itself feel like a designed object.',
    engineHints: [
      'Use semantic HTML or React with strong layout composition; reach for motion only where it changes pacing.',
      'Use sticky framing or asymmetric grids when they reinforce the author voice.',
      'Keep navigation spare and let the work or writing lead.'
    ],
    motionRecipe: [
      'Use restrained reveals and occasional viewpoint shifts.',
      'Let typography and image sequencing do more work than animation.',
      'Use one irrational but coherent move to keep the page from feeling templated.'
    ],
    mobileFallback: 'Keep the asymmetry in rhythm and type, but simplify the layout into a single authored column with strong anchors.',
    navigationModel: 'The author voice or project sequence leads; navigation stays secondary and quiet.',
    stateModel: 'Arrival -> authored sequence of text, image, or projects -> contact or archive state.',
    defaultInputs: ['scroll', 'tap'],
    implementationNotes: [
      'Keep one strong authorial decision intact across breakpoints.',
      'Use type, pacing, and framing as the identity before relying on motion.',
      'If the site feels like a normal portfolio shell, push one layer further.'
    ],
    antiPatterns: [
      'Do not genericize the layout into a startup case-study template.',
      'Do not overbuild components where one-off composition is the point.',
      'Do not erase eccentricity in the mobile layout.'
    ],
    validationChecklist: [
      'The author voice is visible within three seconds.',
      'Projects or writing feel sequenced, not dumped into a grid.',
      'Mobile preserves the same voice without literal layout copying.'
    ],
    validationPriority: 'low',
    refs: ['cyanbanister', 'harley-weir', 'developments', 'infringe'],
    infer: {
      tags: { portfolio: 5, fashion: 2, photography: 2, typography: 1, minimal: 1, playful: 1 },
      text: { portfolio: 5, personal: 3, studio: 3, artist: 2, attitude: 2, asymmetrical: 3, artifact: 3, shell: 1, projects: 2 },
      title: { portfolio: 5 }
    }
  },
  {
    id: 'commerce_shrine_stage',
    name: 'Commerce Shrine Stage',
    useWhen: 'drops, fashion commerce, merch worlds, edition-led product storytelling',
    interactionModel: 'Objects are treated like collectibles or relics; product rails, badges, and states carry as much narrative weight as the checkout.',
    engineHints: [
      'Use server-rendered product data or commerce primitives under heavily authored cards and rails.',
      'Keep product metadata, release status, and edition cues visible in the browsing view.',
      'Use hover or selection states to deepen object presence before checkout.'
    ],
    motionRecipe: [
      'Use hover lift, collectible flips, and ambient drift around featured objects.',
      'Keep cart or checkout transitions legible and calm.',
      'Treat release counters and stock states like part of the scene.'
    ],
    mobileFallback: 'Use a single-column collectible feed with sticky purchase rails and clear release-state chips instead of shrinking desktop grids.',
    navigationModel: 'Browse objects first, then enter detail or purchase state without losing the collection context.',
    stateModel: 'Collection browse -> featured object focus -> detail/purchase -> return to collection.',
    defaultInputs: ['scroll', 'tap', 'hover'],
    implementationNotes: [
      'Preserve collection logic in the browse state so the page feels like a shrine, not a commodity grid.',
      'Use release, edition, or provenance metadata as part of the emotional pitch.',
      'Make cart and checkout states calmer than the browsing world.'
    ],
    antiPatterns: [
      'Do not flatten the page into a normal storefront once products appear.',
      'Do not hide pricing or size details until too late.',
      'Do not let the shrine fiction block purchase clarity.'
    ],
    validationChecklist: [
      'Product browse feels collectible before it feels transactional.',
      'Release or edition state is visible in the browse view.',
      'Mobile keeps the collection context while making checkout simpler.'
    ],
    validationPriority: 'medium',
    refs: ['online-ceramics', 'issued-by-bottega', 'martine-rose', 'country-music'],
    infer: {
      tags: { 'e-commerce': 5, fashion: 3, music: 1, photography: 1 },
      text: { merch: 5, edition: 4, collectible: 4, product: 3, drop: 4, store: 4, shop: 4, buy: 3, collection: 2, fashion: 3 },
      title: { merch: 4, shop: 4, store: 4 }
    }
  }
];

export const MOTION_ROLES = [
  { name: 'ambient', duration: '8s-20s', purpose: 'keep the page alive at rest' },
  { name: 'intent', duration: '120ms-280ms', purpose: 'confirm hover, tap, drag, scrub' },
  { name: 'ceremonial', duration: '400ms-1200ms', purpose: 'hero, section, or mode entry' },
  { name: 'navigational', duration: '220ms-520ms', purpose: 'preserve spatial understanding' },
  { name: 'decay', duration: '180ms-600ms', purpose: 'settle, dismiss, or release state' }
];

export const LIBRARIES = {
  behaviorPrimitives: ['Radix Primitives', 'Base UI', 'Ariakit'],
  motion: ['motion/react', 'GSAP', 'Lenis'],
  interactiveGraphics: ['Rive', 'Rough.js', 'p5.js'],
  physicsAndSound: ['Matter.js', 'Tone.js']
};

export const TYPE_ROLES = ['authority', 'workhorse', 'freak', 'utility'];

export const ASSET_FORGE = {
  generate: ['paper textures', 'scribble sets', 'stickers', 'scan noise', 'halftones', 'warped stills', 'metallic gradients'],
  avoid: ['full page layouts', 'final ui screens', 'complete icon systems'],
  workflow: ['generate many', 'curate hard', 'crop/mask/redraw', 'combine with authored svg', 'animate selectively']
};

export const VALIDATION_RUBRIC = [
  'Classify whether the entry is live, mixed, or archival before trusting interaction details.',
  'Pick one dominant world system and one dominant interaction archetype before composing.',
  'Write down the primary inputs, state changes, and mobile fallback before building.',
  'Verify that motion explains orientation or input, not just atmosphere.',
  'If the source is archival or visually sparse, rebuild mechanics from description plus archetype instead of copying blindly.'
];

export function buildDesignOsData() {
  return {
    version: 2,
    coreRule: 'Standardize behavior, vary worlds aggressively.',
    startHere: [
      'playbooks/scene-kit.md',
      'playbooks/interaction-archetypes.md',
      'playbooks/validation-rubric.md',
      'playbooks/world-systems.md',
      'playbooks/motion-grammar.md',
      'playbooks/type-systems.md',
      'playbooks/asset-forge.md',
      'playbooks/component-philosophy.md'
    ],
    worldSystems: WORLD_SYSTEMS.map(({ infer, ...rest }) => rest),
    archetypes: ARCHETYPE_PROFILES.map(({ infer, ...rest }) => rest),
    motionRoles: MOTION_ROLES,
    libraries: LIBRARIES,
    typeRoles: TYPE_ROLES,
    assetForge: ASSET_FORGE,
    validationRubric: VALIDATION_RUBRIC,
    shippingTest: [
      'The page reads as a specific world in three seconds.',
      'Motion feels structural, not attached at the end.',
      'The design would not be mistaken for default B2B SaaS.',
      'The interaction model is obvious enough that another agent can implement it without guessing.'
    ]
  };
}

function gatherSignals(meta) {
  const title = lower(meta.title || meta.slug);
  const description = lower(meta.description || '');
  const combined = `${title} ${description}`;
  const tags = new Set((meta.tags || []).map((tag) => lower(tag)));
  const fonts = primaryFonts(meta);
  const fontText = fonts.map(lower).join(' ');
  const desktop = meta.capture?.desktop?.analysis || {};
  const mobile = meta.capture?.mobile?.analysis || {};
  const sampleCount = (desktop.sample || []).length + (mobile.sample || []).length;
  const sticky = Boolean(desktop.sticky || mobile.sticky);
  const headingPx = Math.max(parsePx(desktop.heading?.fontSize) || 0, parsePx(mobile.heading?.fontSize) || 0);
  const captureMode = classifyCaptureMode(meta);
  const noLiveUiSignals = sampleCount === 0;
  return {
    title,
    description,
    combined,
    tags,
    fonts,
    fontText,
    sampleCount,
    sticky,
    headingPx,
    captureMode,
    noLiveUiSignals,
    hasDarkCanvas: hasText(desktop.body?.backgroundColor || mobile.body?.backgroundColor || '', 'rgb(0') || hasText(desktop.body?.backgroundColor || mobile.body?.backgroundColor || '', 'rgb(1') || hasText(desktop.body?.backgroundColor || mobile.body?.backgroundColor || '', 'rgb(2')
  };
}

function scoreArchetype(signals, profile) {
  const matches = [];
  let score = 0;
  score += tagWeight(signals.tags, profile.infer?.tags, matches);
  score += matchWeight(signals.combined, profile.infer?.text, matches, 'text');
  score += matchWeight(signals.title, profile.infer?.title, matches, 'title');
  score += fontWeight(signals.fontText, profile.infer?.fonts, matches);
  for (const flag of profile.infer?.flags || []) {
    if (!flag.when(signals)) continue;
    score += flag.score;
    matches.push(flag.evidence);
  }
  if (signals.captureMode === 'archival-fallback' && profile.id === 'portfolio_artifact') score += 1;
  if (signals.noLiveUiSignals && ['spatial_exhibition_world', 'playable_poster', 'editorial_archive_index'].includes(profile.id)) score += 1;
  if (signals.headingPx >= 72 && ['playable_poster', 'collage_field'].includes(profile.id)) {
    score += 2;
    matches.push('signal:large-display-type');
  }
  if (signals.sticky && ['editorial_archive_index', 'playable_poster', 'spatial_exhibition_world'].includes(profile.id)) {
    score += 1;
    matches.push('signal:sticky-layout');
  }
  return { score, matches };
}

function scoreWorld(signals, world, archetypeId) {
  const matches = [];
  let score = 0;
  score += tagWeight(signals.tags, world.infer?.tags, matches);
  score += matchWeight(signals.combined, world.infer?.text, matches, 'text');
  score += (world.infer?.archetypes?.[archetypeId] || 0);
  if (world.infer?.archetypes?.[archetypeId]) matches.push(`archetype:${archetypeId}`);
  if (signals.headingPx >= 72 && world.slug === 'playable-poster') {
    score += 1;
    matches.push('signal:large-display-type');
  }
  if (signals.captureMode === 'archival-fallback' && world.slug === 'collage-core') {
    score += 1;
    matches.push('signal:archival-visual-bias');
  }
  return { score, matches };
}

function orderByScore(items) {
  return [...items].sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
}

function confidenceFromScores(topScore, secondScore) {
  const delta = topScore - secondScore;
  const raw = 0.48 + Math.min(topScore, 18) / 40 + Math.min(Math.max(delta, 0), 8) / 20;
  return Math.max(0.55, Math.min(0.96, raw));
}

function topEvidence(matches, limit = 5) {
  return uniq(matches).slice(0, limit);
}

function humanizeEvidence(token) {
  if (token.startsWith('tag:')) return `tags include ${token.slice(4)}`;
  if (token.startsWith('title:')) return `title mentions ${token.slice(6)}`;
  if (token.startsWith('text:')) return `description mentions ${token.slice(5)}`;
  if (token.startsWith('font:')) return `fonts suggest ${token.slice(5)}`;
  if (token.startsWith('signal:')) return token.slice(7).replace(/-/g, ' ');
  if (token.startsWith('archetype:')) return `archetype affinity: ${token.slice(10).replace(/_/g, ' ')}`;
  return token.replace(/-/g, ' ');
}

function inferInputModes(signals, archetype) {
  const found = [];
  const text = signals.combined;
  if (hasText(text, 'scroll') || hasText(text, 'scrollbar') || archetype.id === 'scroll_scrub_instrument') found.push('scroll');
  if (hasText(text, 'drag') || hasText(text, 'touch') || hasText(text, 'sculpt') || ['desktop_shell_world', 'toy_loop_microgame', 'spatial_exhibition_world'].includes(archetype.id)) found.push('drag');
  if (hasText(text, 'hover') || hasText(text, 'browse') || archetype.id === 'collage_field') found.push('hover');
  if (hasText(text, 'click') || hasText(text, 'tap') || hasText(text, 'play') || hasText(text, 'navigate')) found.push('tap');
  if (hasText(text, 'filter') || hasText(text, 'search') || archetype.id === 'editorial_archive_index') found.push('filter');
  if (hasText(text, 'keyboard') || hasText(text, 'type')) found.push('type');
  return uniq([...archetype.defaultInputs, ...found]);
}

function dynamicEngineHints(archetype, signals) {
  const hints = [...archetype.engineHints];
  if (archetype.id === 'spatial_exhibition_world' && hasText(signals.combined, 'bookshelf')) {
    hints.unshift('Bias toward CSS 3D transforms and perspective for shelf-like depth before reaching for full WebGL.');
  }
  if (archetype.id === 'spatial_exhibition_world' && (hasText(signals.combined, 'scan') || hasText(signals.combined, 'ceramics'))) {
    hints.unshift('If object inspection is core, React Three Fiber is justified for orbit, lighting, and material control.');
  }
  if (archetype.id === 'commerce_shrine_stage' && signals.tags.has('e-commerce')) {
    hints.unshift('Keep commerce primitives underneath and author the browse layer separately from cart and checkout.');
  }
  if (signals.captureMode !== 'live') {
    hints.push('Treat the screenshots as composition evidence and the archetype as the implementation bias; do not overfit absent live behavior.');
  }
  return uniq(hints);
}

function dynamicImplementationNotes(archetype, signals) {
  const notes = [...archetype.implementationNotes];
  if (signals.captureMode === 'archival-fallback') {
    notes.unshift('This entry relies on archival fallback captures, so use the visual direction literally and the interaction model heuristically.');
  } else if (signals.captureMode === 'mixed') {
    notes.unshift('This entry has partial live capture coverage; trust the available screenshots, then fill gaps using the archetype rather than guesswork.');
  }
  if (signals.noLiveUiSignals) {
    notes.push('Live DOM analysis was sparse, so the description and tags carry more weight than sampled interface tokens.');
  }
  if (signals.sticky) {
    notes.push('The capture suggests anchored framing or sticky context; preserve that orientation device in the rebuild.');
  }
  return uniq(notes);
}

function dynamicValidationChecklist(archetype, signals) {
  const checks = [...archetype.validationChecklist];
  if (signals.captureMode !== 'live') checks.push('Before shipping, manually verify any interaction that the capture could not prove live.');
  if (signals.noLiveUiSignals) checks.push('Cross-check screenshots against the description so the interaction model does not drift away from the source premise.');
  return uniq(checks);
}

function defaultRetroEffects(signals) {
  const effects = [];
  if (signals.tags.has('retro')) effects.push('flash-era');
  if (signals.tags.has('default-aesthetics')) effects.push('default-html', 'desktop-ui');
  if (signals.fontText.includes('chicago') || signals.fontText.includes('ms sans') || signals.fontText.includes('pixel')) effects.push('pixel');
  return uniq(effects);
}

function defaultGlitchEffects(signals) {
  const effects = [];
  if (signals.tags.has('glitches')) effects.push('jitter', 'channel-split');
  if (signals.tags.has('net.art')) effects.push('distortion');
  return uniq(effects);
}

function defaultTactileEffects(signals) {
  const effects = [];
  if (signals.tags.has('tactile') || hasText(signals.combined, 'drag') || hasText(signals.combined, 'touch')) effects.push('elastic');
  if (signals.tags.has('playful')) effects.push('inertial');
  return uniq(effects);
}

function coreVerbsFor(archetypeId, signals) {
  const map = {
    club_instrument: ['trigger', 'press', 'mix'],
    scroll_scrub_instrument: ['scroll', 'scrub', 'sequence'],
    spatial_exhibition_world: ['explore', 'focus', 'open'],
    playable_poster: ['reveal', 'distort', 'stage'],
    editorial_archive_index: ['browse', 'filter', 'open'],
    toy_loop_microgame: ['play', 'drag', 'reset'],
    desktop_shell_world: ['open', 'drag', 'shuffle'],
    retro_tool_emulator: ['edit', 'preset', 'export'],
    collage_field: ['scan', 'hover', 'collect'],
    portfolio_artifact: ['read', 'browse', 'contact'],
    commerce_shrine_stage: ['browse', 'collect', 'buy']
  };
  const dynamic = [];
  if (hasText(signals.combined, 'scroll')) dynamic.push('scroll');
  if (hasText(signals.combined, 'drag')) dynamic.push('drag');
  if (hasText(signals.combined, 'draw')) dynamic.push('draw');
  if (hasText(signals.combined, 'orbit')) dynamic.push('orbit');
  return uniq([...(map[archetypeId] || []), ...dynamic]).slice(0, 5);
}

function mechanicsSchemaFor(archetype, signals, inputModes) {
  const tactile = defaultTactileEffects(signals);
  const retro = defaultRetroEffects(signals);
  const glitch = defaultGlitchEffects(signals);
  const hasSound = signals.tags.has('sound-design') || signals.tags.has('music') || hasText(signals.combined, 'sound') || hasText(signals.combined, 'audio');
  const base = {
    interactionModelId: archetype.id,
    coreVerbs: coreVerbsFor(archetype.id, signals),
    inputs: inputModes,
    navigation: { structure: 'linear', wayfinding: 'explicit', friction: 'low' },
    motion: { density: 'medium', cadence: 'event-driven', triggers: ['pointer'], transitions: ['fade'], physics: 'none' },
    spatial: { mode: 'flat', camera: 'fixed', depthCues: ['scale'], hud: 'overlay' },
    participation: { mode: 'none', persistence: 'none' },
    sound: { mode: 'none', triggers: [], controls: [], sync: 'none' },
    effects: { tactile, retro, glitch },
    implementation: { renderTier: 'dom', complexity: 'medium', requiredApis: [], fallbacks: ['reduced-motion'] }
  };

  switch (archetype.id) {
    case 'club_instrument':
      return {
        ...base,
        navigation: { structure: 'single-scene', wayfinding: 'explicit', friction: 'low' },
        motion: { density: 'medium', cadence: 'tempo-linked', triggers: ['pointer', 'time'], transitions: ['pulse', 'meter-fill', 'glow'], physics: 'light' },
        spatial: { mode: 'layered-2d', camera: 'fixed', depthCues: ['scale', 'lighting'], hud: 'overlay' },
        participation: { mode: 'compose', persistence: 'ephemeral' },
        sound: { mode: 'instrument', triggers: ['press', 'drag'], controls: ['mute', 'play-pause'], sync: 'tight' },
        effects: { tactile: uniq(['elastic', ...tactile]), retro, glitch },
        implementation: { renderTier: 'mixed', complexity: 'high', requiredApis: ['webaudio'], fallbacks: ['mute-first', 'reduced-motion'] }
      };
    case 'scroll_scrub_instrument':
      return {
        ...base,
        navigation: { structure: 'linear', wayfinding: 'explicit', friction: 'medium' },
        motion: { density: 'medium', cadence: 'tempo-linked', triggers: ['scroll'], transitions: ['scrub', 'snap', 'fade'], physics: 'light' },
        spatial: { mode: 'layered-2d', camera: 'rail', depthCues: ['scale', 'perspective'], hud: 'overlay' },
        participation: { mode: 'compose', persistence: 'ephemeral' },
        sound: { mode: 'reactive', triggers: ['scroll'], controls: ['mute', 'play-pause'], sync: 'tight' },
        effects: { tactile, retro, glitch },
        implementation: { renderTier: 'mixed', complexity: 'high', requiredApis: ['webaudio'], fallbacks: ['mute-first', 'reduced-motion'] }
      };
    case 'spatial_exhibition_world':
      return {
        ...base,
        navigation: { structure: hasText(signals.combined, 'room') || hasText(signals.combined, 'world') ? 'world' : 'single-scene', wayfinding: 'ambient', friction: 'medium' },
        motion: { density: 'medium', cadence: 'ambient', triggers: ['pointer', 'time'], transitions: ['camera-travel', 'fade', 'focus-lift'], physics: 'light' },
        spatial: { mode: hasText(signals.combined, 'bookshelf') ? '2.5d' : (hasText(signals.combined, 'scan') ? '3d-object' : '3d-world'), camera: hasText(signals.combined, 'scan') ? 'orbit' : 'rail', depthCues: ['perspective', 'occlusion', 'lighting'], hud: 'overlay' },
        participation: { mode: 'explore', persistence: 'ephemeral' },
        sound: { mode: signals.tags.has('sound-design') ? 'ambient' : 'none', triggers: signals.tags.has('sound-design') ? ['entry', 'focus'] : [], controls: signals.tags.has('sound-design') ? ['mute'] : [], sync: signals.tags.has('sound-design') ? 'loose' : 'none' },
        effects: { tactile, retro, glitch },
        implementation: { renderTier: hasText(signals.combined, 'bookshelf') ? 'mixed' : 'webgl', complexity: 'high', requiredApis: hasText(signals.combined, 'bookshelf') ? ['css-3d'] : ['webgl'], fallbacks: ['guided-tour', 'reduced-motion'] }
      };
    case 'playable_poster':
      return {
        ...base,
        navigation: { structure: 'single-scene', wayfinding: 'explicit', friction: 'low' },
        motion: { density: 'high', cadence: 'event-driven', triggers: ['pointer', 'time', 'scroll'], transitions: ['morph', 'draw-on', 'shuffle'], physics: 'light' },
        spatial: { mode: 'layered-2d', camera: 'fixed', depthCues: ['scale', 'occlusion'], hud: 'overlay' },
        participation: { mode: signals.tags.has('participative') ? 'play' : 'none', persistence: 'ephemeral' },
        sound: { mode: 'none', triggers: [], controls: [], sync: 'none' },
        effects: { tactile: uniq(['magnetic', ...tactile]), retro, glitch },
        implementation: { renderTier: 'dom', complexity: 'medium', requiredApis: [], fallbacks: ['reduced-motion', 'static-poster'] }
      };
    case 'editorial_archive_index':
      return {
        ...base,
        navigation: { structure: 'hub', wayfinding: 'explicit', friction: 'low' },
        motion: { density: 'low', cadence: 'event-driven', triggers: ['pointer', 'scroll'], transitions: ['fade', 'morph', 'crop-shift'], physics: 'none' },
        spatial: { mode: 'flat', camera: 'fixed', depthCues: ['scale'], hud: 'overlay' },
        participation: { mode: 'browse', persistence: 'session' },
        sound: { mode: 'none', triggers: [], controls: [], sync: 'none' },
        effects: { tactile, retro, glitch },
        implementation: { renderTier: 'dom', complexity: 'medium', requiredApis: [], fallbacks: ['reduced-motion'] }
      };
    case 'toy_loop_microgame':
      return {
        ...base,
        navigation: { structure: 'single-scene', wayfinding: 'explicit', friction: 'medium' },
        motion: { density: 'high', cadence: 'continuous', triggers: ['pointer', 'physics'], transitions: ['shuffle', 'pop', 'reset'], physics: 'heavy' },
        spatial: { mode: 'layered-2d', camera: 'fixed', depthCues: ['scale', 'occlusion'], hud: 'overlay' },
        participation: { mode: 'play', persistence: 'ephemeral' },
        sound: hasSound ? { mode: 'reactive', triggers: ['gameplay'], controls: ['mute'], sync: signals.tags.has('sound-design') ? 'tight' : 'loose' } : { mode: 'none', triggers: [], controls: [], sync: 'none' },
        effects: { tactile: uniq(['elastic', 'inertial', ...tactile]), retro, glitch },
        implementation: { renderTier: 'canvas2d', complexity: 'high', requiredApis: ['canvas'], fallbacks: ['reduced-motion'] }
      };
    case 'desktop_shell_world':
      return {
        ...base,
        navigation: { structure: 'hub', wayfinding: 'ambient', friction: 'medium' },
        motion: { density: 'medium', cadence: 'event-driven', triggers: ['pointer'], transitions: ['shuffle', 'snap', 'focus-lift'], physics: 'light' },
        spatial: { mode: 'layered-2d', camera: 'fixed', depthCues: ['occlusion', 'scale'], hud: 'overlay' },
        participation: { mode: 'customize', persistence: 'session' },
        sound: hasSound ? { mode: 'ambient', triggers: ['entry'], controls: ['mute'], sync: 'loose' } : { mode: 'none', triggers: [], controls: [], sync: 'none' },
        effects: { tactile: uniq(['inertial', ...tactile]), retro: uniq(['desktop-ui', ...retro]), glitch },
        implementation: { renderTier: 'dom', complexity: 'high', requiredApis: [], fallbacks: ['stacked-shell', 'reduced-motion'] }
      };
    case 'retro_tool_emulator':
      return {
        ...base,
        navigation: { structure: 'hub', wayfinding: 'explicit', friction: 'medium' },
        motion: { density: 'low', cadence: 'event-driven', triggers: ['pointer', 'keyboard'], transitions: ['cut', 'menu-drop', 'panel-swap'], physics: 'none' },
        spatial: { mode: 'flat', camera: 'fixed', depthCues: ['scale'], hud: 'overlay' },
        participation: { mode: 'customize', persistence: 'saved' },
        sound: { mode: 'none', triggers: [], controls: [], sync: 'none' },
        effects: { tactile, retro: uniq(['pixel', 'desktop-ui', ...retro]), glitch },
        implementation: { renderTier: 'mixed', complexity: 'medium', requiredApis: ['canvas'], fallbacks: ['wizard-flow', 'reduced-motion'] }
      };
    case 'collage_field':
      return {
        ...base,
        navigation: { structure: 'map', wayfinding: 'ambient', friction: 'high' },
        motion: { density: 'medium', cadence: 'continuous', triggers: ['pointer', 'scroll', 'time'], transitions: ['shuffle', 'jitter', 'fade'], physics: 'light' },
        spatial: { mode: 'layered-2d', camera: 'parallax', depthCues: ['scale', 'occlusion', 'blur'], hud: 'overlay' },
        participation: { mode: 'browse', persistence: 'ephemeral' },
        sound: { mode: 'none', triggers: [], controls: [], sync: 'none' },
        effects: { tactile, retro, glitch: uniq(['jitter', ...glitch]) },
        implementation: { renderTier: 'dom', complexity: 'medium', requiredApis: [], fallbacks: ['guided-feed', 'reduced-motion'] }
      };
    case 'portfolio_artifact':
      return {
        ...base,
        navigation: { structure: 'linear', wayfinding: 'ambient', friction: 'low' },
        motion: { density: 'low', cadence: 'event-driven', triggers: ['scroll', 'pointer'], transitions: ['fade', 'crop-shift'], physics: 'none' },
        spatial: { mode: signals.sticky ? 'layered-2d' : 'flat', camera: 'fixed', depthCues: signals.sticky ? ['scale', 'occlusion'] : ['scale'], hud: 'none' },
        participation: { mode: 'browse', persistence: 'none' },
        sound: { mode: 'none', triggers: [], controls: [], sync: 'none' },
        effects: { tactile, retro, glitch },
        implementation: { renderTier: 'dom', complexity: 'low', requiredApis: [], fallbacks: ['single-column', 'reduced-motion'] }
      };
    case 'commerce_shrine_stage':
      return {
        ...base,
        navigation: { structure: 'hub', wayfinding: 'explicit', friction: 'low' },
        motion: { density: 'medium', cadence: 'event-driven', triggers: ['pointer', 'scroll'], transitions: ['hover-lift', 'fade', 'flip'], physics: 'light' },
        spatial: { mode: 'layered-2d', camera: 'fixed', depthCues: ['scale', 'lighting'], hud: 'overlay' },
        participation: { mode: 'customize', persistence: 'saved' },
        sound: { mode: 'none', triggers: [], controls: [], sync: 'none' },
        effects: { tactile, retro, glitch },
        implementation: { renderTier: 'dom', complexity: 'medium', requiredApis: [], fallbacks: ['single-column-collection', 'reduced-motion'] }
      };
    default:
      return base;
  }
}

function buildImplementationPrompt(meta, worldSystems, archetype, mechanics) {
  const primaryWorld = worldSystems[0]?.name || 'Playable Poster';
  const secondaryWorld = worldSystems[1]?.name;
  const font = primaryFonts(meta)[0] || 'the extracted primary font';
  const paletteHint = palette(meta).slice(0, 3).map((item) => item.hex).join(', ') || 'the extracted palette';
  const secondaryPhrase = secondaryWorld ? ` with a secondary cue from ${secondaryWorld}` : '';
  return `Build this as a ${primaryWorld} page${secondaryPhrase} using the ${archetype.name} interaction model. Keep ${font} as the voice anchor, preserve the palette around ${paletteHint}, drive the page through ${mechanics.inputModes.join(', ') || 'the inferred primary inputs'}, and implement the mobile fallback as: ${mechanics.mobileFallback}`;
}

export function enrichMeta(meta) {
  const enriched = stableJsonClone(meta);
  const signals = gatherSignals(enriched);
  const scoredArchetypes = orderByScore(ARCHETYPE_PROFILES.map((profile) => ({
    ...profile,
    ...scoreArchetype(signals, profile)
  })));
  let archetype = scoredArchetypes[0];
  if (!archetype || archetype.score <= 0) {
    archetype = { ...ARCHETYPE_PROFILES.find((item) => item.id === 'portfolio_artifact'), score: 1, matches: ['fallback:portfolio_artifact'] };
  }
  const secondArchetype = scoredArchetypes[1] || { score: 0 };
  const confidence = confidenceFromScores(archetype.score, secondArchetype.score || 0);
  const scoredWorlds = orderByScore(WORLD_SYSTEMS.map((world) => ({
    ...world,
    ...scoreWorld(signals, world, archetype.id)
  })));
  const worldSystems = scoredWorlds.filter((world) => world.score > 0).slice(0, 2).map((world) => ({
    slug: world.slug,
    name: world.name,
    score: world.score,
    reason: topEvidence(world.matches, 3).map(humanizeEvidence).join('; ')
  }));
  if (!worldSystems.length) {
    const fallbackWorld = WORLD_SYSTEMS.find((item) => item.slug === 'playable-poster');
    worldSystems.push({ slug: fallbackWorld.slug, name: fallbackWorld.name, score: 1, reason: 'fallback world for experimental internet-native staging' });
  }
  const mechanics = {
    archetype: {
      id: archetype.id,
      name: archetype.name,
      confidence: Number(confidence.toFixed(2)),
      reason: topEvidence(archetype.matches, 4).map(humanizeEvidence).join('; ') || 'fallback classification',
      refs: archetype.refs
    },
    interactionModel: archetype.interactionModel,
    navigationModel: archetype.navigationModel,
    stateModel: archetype.stateModel,
    inputModes: inferInputModes(signals, archetype),
    engineHints: dynamicEngineHints(archetype, signals),
    motionRecipe: archetype.motionRecipe,
    mobileFallback: archetype.mobileFallback,
    implementationNotes: dynamicImplementationNotes(archetype, signals),
    antiPatterns: archetype.antiPatterns,
    validationChecklist: dynamicValidationChecklist(archetype, signals),
    validationPriority: archetype.validationPriority,
    evidence: topEvidence(archetype.matches, 6).map(humanizeEvidence)
  };
  mechanics.schema = mechanicsSchemaFor(archetype, signals, mechanics.inputModes);
  enriched.designGuidance = {
    captureMode: signals.captureMode,
    worldSystems,
    mechanics,
    implementationPrompt: buildImplementationPrompt(enriched, worldSystems, archetype, mechanics),
    summary: `${worldSystems[0]?.name || 'Playable Poster'} + ${archetype.name}. ${archetype.interactionModel}`
  };
  return enriched;
}

export function publicArchetypes() {
  return ARCHETYPE_PROFILES.map(({ infer, ...rest }) => rest);
}

export function publicWorldSystems() {
  return WORLD_SYSTEMS.map(({ infer, ...rest }) => rest);
}

export function worldSystemNamesForMeta(meta) {
  const enriched = enrichMeta(meta);
  return (enriched.designGuidance?.worldSystems || []).map((item) => item.name);
}

export function archetypeNameForMeta(meta) {
  return enrichMeta(meta).designGuidance?.mechanics?.archetype?.name || titleCase(meta.slug);
}
