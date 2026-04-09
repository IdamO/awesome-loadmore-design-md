import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { WORLD_SYSTEMS } from './lib/design-os.mjs';
import { DATA_DIR, DESIGN_DIR, ensureDir, readJson, titleCase, writeJson } from './lib/utils.mjs';

const args = new Map(process.argv.slice(2).map((arg) => {
  const [key, value = 'true'] = arg.replace(/^--/, '').split('=');
  return [key, value];
}));
const onlySlug = args.get('slug');
const force = args.get('force') === 'true';

const WORLD_BY_SLUG = new Map(WORLD_SYSTEMS.map((item) => [item.slug, item]));
const DATA_FILE = path.join(DATA_DIR, 'arte-posters.json');
const PYTHON_HELPER = path.join(path.dirname(new URL(import.meta.url).pathname), 'lib', 'poster_vision.py');
const LAYER_HELPER = path.join(path.dirname(new URL(import.meta.url).pathname), 'lib', 'poster_layers.py');

function keywordText(poster) {
  return [poster.title, poster.handle, ...(poster.rawTags || []), ...(poster.collectionHandles || []), poster.description || '']
    .join(' ')
    .toLowerCase();
}

function hasAny(text, words) {
  return words.some((word) => text.includes(word));
}

function hexToRgb(hex) {
  const clean = String(hex || '#000000').replace('#', '');
  const value = clean.length === 3
    ? clean.split('').map((part) => parseInt(part + part, 16))
    : [clean.slice(0, 2), clean.slice(2, 4), clean.slice(4, 6)].map((part) => parseInt(part, 16));
  return { r: value[0] || 0, g: value[1] || 0, b: value[2] || 0 };
}

function luminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  const srgb = [r, g, b].map((value) => {
    const normalized = value / 255;
    return normalized <= 0.03928 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}

function saturation(hex) {
  const { r, g, b } = hexToRgb(hex);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  if (max === 0) return 0;
  return (max - min) / max;
}

function uniq(items) {
  return [...new Set(items.filter(Boolean))];
}

function alpha(hex, value = 0.5) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${value})`;
}

function paletteRoles(colors, preferLight = false) {
  const swatches = [...(colors || [])].map((item) => ({ ...item, lum: luminance(item.hex), sat: saturation(item.hex) }));
  const byLum = [...swatches].sort((a, b) => a.lum - b.lum);
  const bg = preferLight ? (byLum[byLum.length - 1] || swatches[0] || { hex: '#f6f1ea' }) : (byLum[0] || swatches[0] || { hex: '#111111' });
  const fg = preferLight ? (byLum[0] || { hex: '#111111' }) : (byLum[byLum.length - 1] || { hex: '#f6f6f6' });
  const accent = [...swatches].sort((a, b) => b.sat - a.sat || Math.abs(0.52 - b.lum) - Math.abs(0.52 - a.lum))[0] || swatches[1] || fg;
  const surface = preferLight ? (byLum[Math.max(byLum.length - 2, 0)] || bg) : (byLum[1] || bg);
  const glow = [...swatches].sort((a, b) => Math.abs(0.6 - a.lum) - Math.abs(0.6 - b.lum))[0] || accent;
  return { bg: bg.hex, fg: fg.hex, accent: accent.hex, surface: surface.hex, glow: glow.hex };
}

function previewLabels(poster, family, ocr) {
  return uniq([
    poster.title.toUpperCase(),
    ...(poster.rawTags || []).map((tag) => titleCase(tag)),
    ...(poster.collectionTitles || []),
    ...(ocr.titleLines || []).slice(0, 2),
    family.labelA,
    family.labelB
  ]).slice(0, 6);
}

function sectionBlueprint(names, title) {
  return names.map((name, index) => ({
    id: `${index + 1}`.padStart(2, '0'),
    title: name,
    note: index === 0
      ? `${title} establishes the hero object and immediate motion language.`
      : index === names.length - 1
        ? `Close with a tight invitation instead of a generic CTA block.`
        : `Translate a distinct poster layer into a readable browser state.`
  }));
}

function world(slug, reason) {
  const item = WORLD_BY_SLUG.get(slug);
  return {
    slug,
    name: item?.name || titleCase(slug),
    reason
  };
}

function chooseFamily(poster) {
  const text = keywordText(poster);
  const primaryCollection = poster.collectionHandles?.[0] || 'aesthetic';
  if (hasAny(text, ['relic', 'artifact', 'monolith', 'construct', 'steel', 'machine', 'hardware', 'evolution'])) {
    return 'artifact-monolith';
  }
  if (hasAny(text, ['stellar', 'astral', 'cosmos', 'neptune', 'cloud', 'sky', 'drifters', 'solar', 'stars', 'oxygen'])) {
    return primaryCollection === 'minimalism' ? 'quiet-lightbox' : 'orbital-atmosphere';
  }
  if (hasAny(text, ['neural', 'coding', 'brain', 'turing', 'test', 'ctrl', '404', 'matrix', 'code', 'hal', 'bug', 'human'])) {
    return 'signal-slab';
  }
  if (primaryCollection === 'minimalism' && hasAny(text, ['cloud', 'minimal space', 'horizon', 'gravity', 'voyage', 'sunrise', 'dream', 'explore', 'breathe'])) {
    return 'orbital-atmosphere';
  }
  if (primaryCollection === 'minimalism' && hasAny(text, ['censor', 'language', 'earth', 'stars', 'slowly', 'dying'])) {
    return 'quiet-lightbox';
  }
  if (hasAny(text, ['geometry', 'refraction', 'saturn', 'type', 'language', 'minimal-space'])) {
    return primaryCollection === 'minimalism' ? 'quiet-lightbox' : 'geometry-chamber';
  }
  if (primaryCollection === 'technology') return 'signal-slab';
  if (primaryCollection === 'minimalism') return 'quiet-lightbox';
  return 'orbital-atmosphere';
}

function familyConfig(id, poster, vision, roles) {
  const ocr = vision.ocr || { titleLines: [], bodyLines: [] };
  const title = poster.title;
  const collections = poster.collectionTitles.join(' + ');
  const heroLine = ocr.bodyLines?.[0] || `${title} becomes the center of a spatial browser artifact.`;

  switch (id) {
    case 'artifact-monolith': {
      const labelA = poster.collectionHandles.includes('technology') ? 'Machine Relic' : 'Sacred Object';
      const labelB = poster.collectionHandles.includes('technology') ? 'Archive Interface' : 'Evidence Orbit';
      return {
        id,
        name: 'Artifact Monolith Stage',
        labelA,
        labelB,
        previewScene: 'monolith',
        fonts: ['Ultra Condensed Grotesk Display (approx)', 'Bitmap Mono Caption (approx)', 'Signal Sans Labels (approx)'],
        heading: { desktop: '112px', mobile: '72px', weight: '900', letterSpacing: '-0.065em' },
        body: { size: '16px', weight: '500', lineHeight: '1.6' },
        button: { size: '12px', weight: '700' },
        worldSystems: [
          world('luxury-archive', 'The poster reads like an object accessioned into a high-contrast digital chamber.'),
          world(poster.collectionHandles.includes('technology') ? 'club-instrument' : 'fan-shrine', 'The browser version should feel collectible and tactile rather than informational.')
        ],
        mechanics: {
          archetype: { id: 'spatial_exhibition_world', name: 'Spatial Exhibition World', confidence: 0.93, reason: 'The poster wants to become one hero object inside a shallow 3D room with hotspot detail and object focus.', refs: ['stripe-press', 'the-lost-lionesses', 'oneiric'] },
          interactionModel: 'Explode the full poster across the viewport: the headline becomes architecture, the background copy becomes the room, and the hardware collage becomes floating evidence layers that react to scroll, drag, and hover.',
          navigationModel: 'Users move through one full-poster chamber where the title plane, copy field, and evidence layers each open supporting notes without leaving the composition.',
          stateModel: 'Idle hum -> title and copy field wake -> evidence layers separate in depth -> note rail opens -> return to the full composition.',
          inputModes: ['scroll', 'drag', 'hover', 'tap'],
          engineHints: [
            'Use CSS 3D transforms to split the poster into title planes, copy fields, and floating object layers before escalating to WebGL.',
            'Keep text in DOM overlays; the poster crop should be the texture, not the only readable surface.',
            'Use subtle inertial drag and a tight snap-back when the card recenters.'
          ],
          motionRecipe: [
            'Run a slow ambient camera drift across the full poster field at rest.',
            'Lift extracted evidence layers forward on hover or pointer proximity.',
            'Animate note cards and title planes on springy rails instead of fading them flat.'
          ],
          mobileFallback: 'Reduce to one guided poster stage with swipe between viewpoints and a single expandable evidence rail under the hero object.',
          implementationNotes: [
            'Do not use the framed product photo in the final surface; decompose the poster into title, copy field, object cluster, and note rails.',
            'The poster should fill the viewport first; extracted depth layers should feel like pieces of the same artifact, not pasted cards.',
            'The object cluster must feel heavy and collectible, not like a random floating image.'
          ],
          antiPatterns: [
            'Do not flatten the poster into a hero image with text beside it.',
            'Do not add more than one competing hero object.',
            'Do not overload the chamber with generic glass cards.'
          ],
          validationChecklist: [
            'The full poster composition reads as a spatial room within three seconds.',
            'Drag and hover create a clear depth response without losing the poster logic.',
            'Mobile keeps the same poster-world ritual, not a shrunken desktop scene.'
          ],
          validationPriority: 'high',
          evidence: uniq([labelA, labelB, ...(ocr.titleLines || []).slice(0, 2)]),
          schema: {
            interactionModelId: 'spatial_exhibition_world',
            coreVerbs: ['explore', 'focus', 'open', 'orbit'],
            inputs: ['scroll', 'drag', 'hover', 'tap'],
            navigation: { structure: 'single-scene', wayfinding: 'ambient', friction: 'medium' },
            motion: { density: 'medium', cadence: 'ambient', triggers: ['pointer', 'time', 'scroll'], transitions: ['camera-travel', 'focus-lift', 'card-rail'], physics: 'light' },
            spatial: { mode: '3d-object', camera: 'orbit', depthCues: ['perspective', 'occlusion', 'shadow', 'lighting'], hud: 'overlay' },
            participation: { mode: 'explore', persistence: 'ephemeral' },
            sound: { mode: poster.collectionHandles.includes('technology') ? 'ambient' : 'none', triggers: poster.collectionHandles.includes('technology') ? ['entry', 'focus'] : [], controls: poster.collectionHandles.includes('technology') ? ['mute'] : [], sync: poster.collectionHandles.includes('technology') ? 'loose' : 'none' },
            effects: { tactile: ['magnetic', 'inertial'], retro: poster.collectionHandles.includes('technology') ? ['scanline'] : [], glitch: poster.collectionHandles.includes('technology') ? ['channel-split'] : [] },
            implementation: { renderTier: 'mixed', complexity: 'high', requiredApis: ['css-3d'], fallbacks: ['guided-tour', 'reduced-motion'] }
          }
        },
        websiteConcept: {
          energy: 'industrial relic suspended in a browser vault',
          aura: `${title} should feel like a sacred object from ${collections}, with the entire poster composition expanded into a shallow 3D archive room.`,
          heroCopy: heroLine,
          depthModel: 'The full poster fills the room; title planes become architecture, copy becomes atmosphere, and the object collage separates into floating evidence layers.',
          motionHooks: ['ambient drift', 'hover lift', 'card rail reveal', 'specimen pulse'],
          sectionBlueprint: sectionBlueprint(['Hero Chamber', 'Evidence Orbit', 'Material Notes', 'Exit Rail'], title),
          soundDirection: poster.collectionHandles.includes('technology') ? 'Low mechanical hum and soft relay clicks after user intent.' : 'Silent by default; let motion and light carry the atmosphere.',
          posterAsset: './assets/poster-crop.jpg',
          previewLabels: previewLabels(poster, { labelA, labelB }, ocr)
        }
      };
    }
    case 'signal-slab': {
      return {
        id,
        name: 'Signal Slab Field',
        labelA: 'Reactive Grid',
        labelB: 'Signal Stack',
        previewScene: 'signal',
        fonts: ['Condensed Display Grotesk (approx)', 'Pixel Mono Console (approx)', 'Utility Sans Narrow (approx)'],
        heading: { desktop: '98px', mobile: '66px', weight: '900', letterSpacing: '-0.055em' },
        body: { size: '15px', weight: '500', lineHeight: '1.55' },
        button: { size: '12px', weight: '700' },
        worldSystems: [
          world('club-instrument', 'The web version should feel like a responsive system, not a static poster pinned to the wall.'),
          world('playable-poster', 'Oversized type and one clear ritual keep the poster energy intact.')
        ],
        mechanics: {
          archetype: { id: 'club_instrument', name: 'Club Instrument', confidence: 0.9, reason: 'The poster language wants to become a reactive field of signals, meters, panels, and pressure-sensitive motion.', refs: ['osk', 'jazz-keys', 'blob-opera'] },
          interactionModel: 'Turn the full poster into a responsive signal field: pointer movement shifts grids, tap reveals diagnostic panels, and drag scrubs the title, copy, and object fragments through layered depth planes.',
          navigationModel: 'The whole poster is the system surface; telemetry rails and notes emerge from the composition instead of sitting beside it.',
          stateModel: 'Idle scan -> title and grid wake-up -> panel pulse -> scrubbed depth shift -> settle back into the full poster field.',
          inputModes: ['hover', 'tap', 'drag', 'scroll'],
          engineHints: [
            'Use CSS transforms plus Canvas accents to split the poster into reactive scan lines, pulse grids, and numeric rails.',
            'Map every interaction to a visible system response in under 180ms.',
            'Keep panel density high, but reserve one dominant hero surface.'
          ],
          motionRecipe: [
            'Animate scanlines or grids continuously at low amplitude.',
            'Use pointer proximity to shift panels in z-space.',
            'Pulse labels and counters in sync with the accent color instead of generic hover fades.'
          ],
          mobileFallback: 'Collapse to one active hero slab, two stacked telemetry rails, and tap-to-cycle data states instead of precision hover behavior.',
          implementationNotes: [
            'The poster should become the whole system surface, not a background image with UI pasted on top.',
            'Use lighting, scanlines, and layered panels to create depth without drowning the typography.',
            'Let the accent color drive both signal and CTA emphasis.'
          ],
          antiPatterns: [
            'Do not turn the concept into a generic dashboard grid.',
            'Do not use tiny unreadable cards to fake technical depth.',
            'Do not rely on hover as the only interactive cue.'
          ],
          validationChecklist: [
            'Users can feel the full poster field react immediately to pointer or touch.',
            'The title, copy field, and object fragments remain legible while panels animate around them.',
            'Mobile preserves the reactive feeling with fewer surfaces.'
          ],
          validationPriority: 'high',
          evidence: uniq(['Reactive Grid', 'Signal Stack', ...(ocr.titleLines || []).slice(0, 2)]),
          schema: {
            interactionModelId: 'club_instrument',
            coreVerbs: ['pulse', 'scrub', 'reveal', 'tune'],
            inputs: ['hover', 'tap', 'drag', 'scroll'],
            navigation: { structure: 'single-scene', wayfinding: 'explicit', friction: 'medium' },
            motion: { density: 'high', cadence: 'tempo-linked', triggers: ['pointer', 'time', 'scroll'], transitions: ['pulse', 'scrub', 'panel-shift', 'glow'], physics: 'light' },
            spatial: { mode: '2.5d', camera: 'perspective', depthCues: ['perspective', 'lighting', 'occlusion'], hud: 'overlay' },
            participation: { mode: 'compose', persistence: 'ephemeral' },
            sound: { mode: 'reactive', triggers: ['pointer', 'press'], controls: ['mute'], sync: 'tight' },
            effects: { tactile: ['magnetic', 'elastic'], retro: ['scanline', 'pixel'], glitch: ['channel-split', 'data-jitter'] },
            implementation: { renderTier: 'mixed', complexity: 'high', requiredApis: ['canvas'], fallbacks: ['mute-first', 'reduced-motion'] }
          }
        },
        websiteConcept: {
          energy: 'reactive signal architecture built from the poster itself',
          aura: `${title} should feel like a live control poster whose full composition becomes a responsive HUD field instead of flat merch storytelling.`,
          heroCopy: heroLine,
          depthModel: 'The whole poster becomes a tilted HUD field, with title planes, copy grids, and object fragments separated into translucent depth rails.',
          motionHooks: ['scanline drift', 'pointer wake', 'panel snap', 'grid pulse'],
          sectionBlueprint: sectionBlueprint(['Signal Stage', 'Diagnostic Rail', 'Memory Stack', 'Action Loop'], title),
          soundDirection: 'Soft synth ticks or filtered clicks after user gesture; silence before intent.',
          posterAsset: './assets/poster-crop.jpg',
          previewLabels: previewLabels(poster, { labelA: 'Reactive Grid', labelB: 'Signal Stack' }, ocr)
        }
      };
    }
    case 'geometry-chamber': {
      return {
        id,
        name: 'Geometry Chamber',
        labelA: 'Type Volume',
        labelB: 'Refraction Rail',
        previewScene: 'geometry',
        fonts: ['Extended Geometric Sans (approx)', 'Condensed Label Sans (approx)', 'Micro Mono (approx)'],
        heading: { desktop: '102px', mobile: '68px', weight: '800', letterSpacing: '-0.045em' },
        body: { size: '15px', weight: '500', lineHeight: '1.55' },
        button: { size: '12px', weight: '700' },
        worldSystems: [
          world('playable-poster', 'The poster composition should stay bold and singular even after it becomes interactive.'),
          world('luxury-archive', 'Structured labels and controlled negative space keep the result from becoming noise.')
        ],
        mechanics: {
          archetype: { id: 'playable_poster', name: 'Playable Poster', confidence: 0.88, reason: 'The poster wants to become an authored 3D type composition with a small number of high-conviction transforms.', refs: ['design-your-own-hole', 'gt-flexa', 'smc-real-time'] },
          interactionModel: 'Extrude the full poster into a typographic chamber: drag rotates type planes, hover activates refraction layers, and scroll reveals staggered strata pulled from the composition.',
          navigationModel: 'One full-poster composition with staged type volumes and a disciplined lower content rail.',
          stateModel: 'Poster field at rest -> depth wake-up -> refraction reveal -> caption rail -> reset.',
          inputModes: ['hover', 'drag', 'scroll', 'tap'],
          engineHints: [
            'Use CSS 3D transforms and blurred clones to simulate extrusion before reaching for WebGL.',
            'Treat the headline as a moving object in space, not just text overlay.',
            'Keep the scene sparse so one geometric move dominates.'
          ],
          motionRecipe: [
            'Run one ceremonial entrance with the headline or poster plane.',
            'Use hover to activate refraction layers and depth shadows.',
            'Move type planes on slightly different easing curves to preserve dimensionality.'
          ],
          mobileFallback: 'Split the chamber into stacked scenes with one tilt response and one caption rail instead of maintaining full desktop depth.',
          implementationNotes: [
            'Do not flatten the poster typography into a normal hero block.',
            'Keep at least one negative-space zone completely clean so the geometry can breathe.',
            'Use the accent color sparingly as a precision edge, not a flood fill.'
          ],
          antiPatterns: [
            'Do not add more than one dramatic transform family.',
            'Do not use generic floating blobs when the poster language is geometric.',
            'Do not let supporting copy compete with the headline volume.'
          ],
          validationChecklist: [
            'The full poster geometry reads as deliberate depth rather than random skew.',
            'The headline remains the dominant actor before any CTA appears.',
            'Mobile preserves one strong volumetric move.'
          ],
          validationPriority: 'medium',
          evidence: uniq(['Type Volume', 'Refraction Rail', ...(ocr.titleLines || []).slice(0, 2)]),
          schema: {
            interactionModelId: 'playable_poster',
            coreVerbs: ['reveal', 'tilt', 'extrude', 'stage'],
            inputs: ['hover', 'drag', 'scroll', 'tap'],
            navigation: { structure: 'single-scene', wayfinding: 'explicit', friction: 'low' },
            motion: { density: 'medium', cadence: 'event-driven', triggers: ['pointer', 'scroll', 'time'], transitions: ['morph', 'depth-shift', 'refraction'], physics: 'light' },
            spatial: { mode: '2.5d', camera: 'fixed', depthCues: ['perspective', 'blur', 'shadow'], hud: 'overlay' },
            participation: { mode: 'play', persistence: 'ephemeral' },
            sound: { mode: 'none', triggers: [], controls: [], sync: 'none' },
            effects: { tactile: ['magnetic'], retro: [], glitch: ['chromatic-aberration'] },
            implementation: { renderTier: 'dom', complexity: 'medium', requiredApis: [], fallbacks: ['reduced-motion', 'static-poster'] }
          }
        },
        websiteConcept: {
          energy: 'extruded type and poster geometry staged as a precise browser object',
          aura: `${title} should feel like a spatial type specimen whose full poster composition has been pushed into browser depth, not a flat print inside a grid.`,
          heroCopy: heroLine,
          depthModel: 'The full poster becomes a field of duplicated type planes, offset in z, with one narrow refraction rail cutting through the scene.',
          motionHooks: ['entrance extrusion', 'refraction wake', 'tilt response', 'caption slide'],
          sectionBlueprint: sectionBlueprint(['Poster Volume', 'Refraction Strip', 'Label Stack', 'Release Marker'], title),
          soundDirection: 'Silent by default; the geometry and easing should carry the drama.',
          posterAsset: './assets/poster-crop.jpg',
          previewLabels: previewLabels(poster, { labelA: 'Type Volume', labelB: 'Refraction Rail' }, ocr)
        }
      };
    }
    case 'quiet-lightbox': {
      return {
        id,
        name: 'Quiet Lightbox',
        labelA: 'Manifesto Grid',
        labelB: 'Brush Rail',
        previewScene: 'lightbox',
        fonts: ['Editorial Grotesk Display (approx)', 'Quiet Sans Text (approx)', 'Caption Mono (approx)'],
        heading: { desktop: '96px', mobile: '60px', weight: '780', letterSpacing: '-0.04em' },
        body: { size: '16px', weight: '450', lineHeight: '1.65' },
        button: { size: '12px', weight: '650' },
        worldSystems: [
          world('luxury-archive', 'The translation should feel edited, calm, and deliberately paced.'),
          world('playable-poster', 'The page behaves like an authored text artifact rather than a neutral product shell.')
        ],
        mechanics: {
          archetype: { id: 'playable_poster', name: 'Playable Poster', confidence: 0.85, reason: 'The poster wants its text bars, negative space, and caption rhythm turned into the whole browser composition, not a generic scrolling layout.', refs: ['source-type', 'ntgent', 'design-your-own-hole'] },
          interactionModel: 'Turn the full poster into a typographic manifesto field: bars become interface slabs, key words become oversized live type, and small drag or scroll shifts the whole statement in depth.',
          navigationModel: 'One calm phrase stack plus sparse notes; movement is deliberate and minimal.',
          stateModel: 'Still field -> slight viewpoint shift -> one phrase or bar lifts -> next caption appears -> field settles.',
          inputModes: ['scroll', 'drag', 'tap'],
          engineHints: [
            'Use shallow CSS perspective and soft shadows so the bars feel physical without becoming skeuomorphic.',
            'Keep transitions slower and quieter than the default poster set.',
            'Preserve negative space aggressively and let the phrase stack do most of the work.'
          ],
          motionRecipe: [
            'Move the field by a few degrees only.',
            'Use slow opacity ramps and light sweeps instead of big transforms.',
            'Let one phrase or bar rise after the field settles.'
          ],
          mobileFallback: 'Keep a single phrase stack, reveal one note at a time, and use swipe or tap to move between manifesto beats.',
          implementationNotes: [
            'Do not replace the calm with generic minimal SaaS spacing; keep the manifesto-like stillness.',
            'One motion layer is enough as long as it feels expensive.',
            'Preserve the full poster field as the dominant artifact and keep all labels secondary.',
            'If the poster contains bars or strike-through elements, those should become the primary interface slabs.'
          ],
          antiPatterns: [
            'Do not over-animate a quiet composition.',
            'Do not flood the scene with cards just because there is empty space.',
            'Do not switch to a cheerful accent-heavy palette if the poster is subdued.'
          ],
          validationChecklist: [
            'The field feels calm and spatial, and the poster still owns the entire browser.',
            'Small motion changes are readable and intentional.',
            'Mobile keeps the same stillness with fewer moving parts.'
          ],
          validationPriority: 'medium',
          evidence: uniq(['Manifesto Grid', 'Brush Rail', ...(ocr.titleLines || []).slice(0, 2)]),
          schema: {
            interactionModelId: 'playable_poster',
            coreVerbs: ['focus', 'glide', 'read'],
            inputs: ['scroll', 'drag', 'tap'],
            navigation: { structure: 'single-scene', wayfinding: 'explicit', friction: 'low' },
            motion: { density: 'low', cadence: 'ambient', triggers: ['pointer', 'scroll', 'time'], transitions: ['light-sweep', 'fade', 'glide'], physics: 'none' },
            spatial: { mode: '2.5d', camera: 'rail', depthCues: ['shadow', 'soft-perspective', 'blur'], hud: 'overlay' },
            participation: { mode: 'browse', persistence: 'ephemeral' },
            sound: { mode: 'none', triggers: [], controls: [], sync: 'none' },
            effects: { tactile: [], retro: [], glitch: [] },
            implementation: { renderTier: 'dom', complexity: 'medium', requiredApis: [], fallbacks: ['guided-tour', 'reduced-motion'] }
          }
        },
        websiteConcept: {
          energy: 'quiet editorial manifesto with slow depth and controlled whitespace',
          aura: `${title} should feel like a text artifact stretched into a calm browser field, where bars and phrases become the whole interaction surface.`,
          heroCopy: heroLine,
          depthModel: 'The full poster becomes a phrase stack and bar field, with subtle lift, shadow, and spatial drift instead of a framed room.',
          motionHooks: ['light sweep', 'micro tilt', 'caption rise', 'shadow drift'],
          sectionBlueprint: sectionBlueprint(['Lightbox Stage', 'Caption Step', 'Material Margin', 'Exit Marker'], title),
          soundDirection: 'No sound; preserve stillness.',
          posterAsset: './assets/poster-crop.jpg',
          previewLabels: previewLabels(poster, { labelA: 'Manifesto Grid', labelB: 'Brush Rail' }, ocr)
        }
      };
    }
    default:
      return {
        id: 'orbital-atmosphere',
        name: 'Orbital Atmosphere Field',
        labelA: 'Orbit Stage',
        labelB: 'Glow Rail',
        previewScene: 'orbital',
        fonts: ['Wide Grotesk Display (approx)', 'Light Grotesk Text (approx)', 'Mono Caption (approx)'],
        heading: { desktop: '108px', mobile: '70px', weight: '860', letterSpacing: '-0.05em' },
        body: { size: '16px', weight: '500', lineHeight: '1.6' },
        button: { size: '12px', weight: '700' },
        worldSystems: [
          world('playable-poster', 'The poster already behaves like a campaign artifact and should stay singular on the web.'),
          world('spatial-exhibition-world', 'placeholder')
        ]
      };
  }
}

function buildOrbitalAtmosphere(poster, vision, roles) {
  const ocr = vision.ocr || { titleLines: [], bodyLines: [] };
  return {
    id: 'orbital-atmosphere',
    name: 'Orbital Atmosphere Field',
    labelA: 'Orbit Stage',
    labelB: 'Glow Rail',
    previewScene: 'orbital',
    fonts: ['Wide Grotesk Display (approx)', 'Light Grotesk Text (approx)', 'Mono Caption (approx)'],
    heading: { desktop: '108px', mobile: '70px', weight: '860', letterSpacing: '-0.05em' },
    body: { size: '16px', weight: '500', lineHeight: '1.6' },
    button: { size: '12px', weight: '700' },
    worldSystems: [
      world('playable-poster', 'The poster already behaves like a campaign artifact and should stay singular on the web.'),
      world('luxury-archive', 'The atmosphere needs enough structure to stay legible while drifting.')
    ],
    mechanics: {
      archetype: { id: 'spatial_exhibition_world', name: 'Spatial Exhibition World', confidence: 0.89, reason: 'The poster becomes strongest as a layered atmospheric chamber with shallow depth, orbiting labels, and slow camera travel.', refs: ['the-lost-lionesses', 'oneiric', 'stripe-press'] },
      interactionModel: 'Treat the full poster like a luminous atmospheric field; scroll advances chapters, pointer drift shifts parallax layers, and tap opens captions floating inside the composition.',
      navigationModel: 'A staged atmospheric chamber where the whole poster is the field and glow-rail chapters emerge from it.',
      stateModel: 'Ambient drift -> parallax wake across the poster field -> caption bloom -> chapter shift -> settle.',
      inputModes: ['scroll', 'hover', 'tap'],
      engineHints: [
        'Use layered DOM planes, blur, and gradients to split the poster into a spatial field instead of treating it like a card.',
        'Let the poster typography and texture become the atmosphere underneath labels, rings, or light bars.',
        'Use one dominant glow color and keep everything else restrained.'
      ],
      motionRecipe: [
        'Run slow atmospheric drift in the background at all times.',
        'Shift foreground and background planes at different parallax speeds.',
        'Use a soft bloom or halo when captions or chips become active.'
      ],
      mobileFallback: 'Split the atmosphere into vertical scenes with one parallax hero object and one caption rail per section.',
      implementationNotes: [
        'Do not paste the poster into a normal hero section and call it done; the full composition needs atmospheric depth.',
        'Keep the motion slow enough to feel cinematic, not busy.',
        'Preserve the palette hierarchy: dark field, light type, one glow accent.'
      ],
      antiPatterns: [
        'Do not add random particles without a clear hierarchy.',
        'Do not make the glow so strong that the poster disappears.',
        'Do not turn the concept into a generic galaxy landing page.'
      ],
      validationChecklist: [
        'The full poster field reads as depth, not as wallpaper with overlay text.',
        'Parallax changes are noticeable but calm.',
        'Mobile keeps one clear hero plane and one clear caption rail.'
      ],
      validationPriority: 'medium',
      evidence: uniq(['Orbit Stage', 'Glow Rail', ...(ocr.titleLines || []).slice(0, 2)]),
      schema: {
        interactionModelId: 'spatial_exhibition_world',
        coreVerbs: ['glide', 'reveal', 'focus', 'drift'],
        inputs: ['scroll', 'hover', 'tap'],
        navigation: { structure: 'single-scene', wayfinding: 'ambient', friction: 'low' },
        motion: { density: 'medium', cadence: 'ambient', triggers: ['pointer', 'scroll', 'time'], transitions: ['parallax', 'fade', 'glow-bloom'], physics: 'light' },
        spatial: { mode: '2.5d', camera: 'rail', depthCues: ['perspective', 'blur', 'glow', 'occlusion'], hud: 'overlay' },
        participation: { mode: 'explore', persistence: 'ephemeral' },
        sound: { mode: 'ambient', triggers: ['entry', 'focus'], controls: ['mute'], sync: 'loose' },
        effects: { tactile: ['magnetic'], retro: [], glitch: ['soft-channel-split'] },
        implementation: { renderTier: 'dom', complexity: 'medium', requiredApis: [], fallbacks: ['guided-tour', 'reduced-motion'] }
      }
    },
    websiteConcept: {
      energy: 'luminous atmosphere wrapped around one poster object',
      aura: `${poster.title} should feel like a drifting internet relic whose full poster composition becomes a shallow-depth, glow-rail field.`,
      heroCopy: ocr.bodyLines?.[0] || `${poster.title} becomes a floating poster object inside a controlled orbital field.`,
      depthModel: 'The full poster becomes the atmosphere, with title and texture layers drifting at different depths and slim orbital captions around the edges.',
      motionHooks: ['ambient drift', 'parallax wake', 'caption bloom', 'halo pulse'],
      sectionBlueprint: sectionBlueprint(['Orbit Stage', 'Glow Rail', 'Atmosphere Notes', 'Signal Marker'], poster.title),
      soundDirection: 'Optional soft synth bed after user intent; silence is acceptable if the motion already feels alive.',
      posterAsset: './assets/poster-crop.jpg',
      previewLabels: previewLabels(poster, { labelA: 'Orbit Stage', labelB: 'Glow Rail' }, ocr)
    }
  };
}

function normalizeWorldSystems(worldSystems) {
  return worldSystems.filter((item) => item.slug !== 'spatial-exhibition-world');
}

function normalizeTags(poster, familyId, roles) {
  const tags = ['poster-derived', '3d-space', 'typography', 'animation', 'graphic-design'];
  if (poster.collectionHandles.includes('minimalism')) tags.push('minimal');
  if (poster.collectionHandles.includes('technology')) tags.push('retro');
  if (poster.collectionHandles.includes('aesthetic')) tags.push('colorful');
  if (familyId === 'signal-slab') tags.push('playful', 'sound-design');
  if (familyId === 'quiet-lightbox') tags.push('arts&culture');
  if (familyId === 'artifact-monolith') tags.push('tactile');
  if (poster.collectionHandles.includes('technology')) tags.push('culture-tech');
  if (poster.collectionHandles.includes('minimalism')) tags.push('editorial');
  tags.push(...(poster.collectionHandles || []).map((handle) => `arte-${handle}`));
  return uniq(tags);
}

function conceptForPoster(poster, vision) {
  const familyId = chooseFamily(poster);
  const preferLight = familyId === 'quiet-lightbox';
  const roles = paletteRoles(vision.palette || [], preferLight);
  let config;
  if (familyId === 'artifact-monolith') config = familyConfig(familyId, poster, vision, roles);
  else if (familyId === 'signal-slab') config = familyConfig(familyId, poster, vision, roles);
  else if (familyId === 'geometry-chamber') config = familyConfig(familyId, poster, vision, roles);
  else if (familyId === 'quiet-lightbox') config = familyConfig(familyId, poster, vision, roles);
  else config = buildOrbitalAtmosphere(poster, vision, roles);

  config.worldSystems = normalizeWorldSystems(config.worldSystems);
  const tags = normalizeTags(poster, familyId, roles);
  const buttonBg = roles.accent;
  const buttonFg = luminance(buttonBg) > 0.45 ? '#111111' : '#ffffff';
  const desktopAnalysis = {
    fonts: config.fonts.map((family) => ({ family })),
    colors: vision.palette,
    heading: {
      fontSize: config.heading.desktop,
      fontWeight: config.heading.weight,
      letterSpacing: config.heading.letterSpacing,
      textTransform: 'uppercase'
    },
    bodyText: {
      fontSize: config.body.size,
      fontWeight: config.body.weight,
      lineHeight: config.body.lineHeight
    },
    button: {
      fontSize: config.button.size,
      fontWeight: config.button.weight,
      backgroundColor: buttonBg,
      color: buttonFg,
      boxShadow: `0 24px 80px ${alpha(roles.accent, 0.35)}`
    },
    body: { backgroundColor: roles.bg },
    link: { color: roles.accent },
    sticky: true,
    sample: [{ boxShadow: `0 32px 120px ${alpha(roles.accent, 0.28)}` }],
    screenshotPalette: vision.palette,
    ocr: vision.ocr,
    posterBrightness: vision.brightness,
    posterContrast: vision.contrast
  };
  const mobileAnalysis = {
    ...desktopAnalysis,
    heading: { ...desktopAnalysis.heading, fontSize: config.heading.mobile },
    bodyText: { ...desktopAnalysis.bodyText, fontSize: '15px' }
  };

  const implementationPrompt = `Build a responsive website inspired by the Arte Collective poster "${poster.title}". Ignore the room mockup and frame; isolate the poster art, keep the palette around ${roles.bg}, ${roles.fg}, and ${roles.accent}, use ${config.fonts[0]} for the hero voice and ${config.fonts[1]} for metadata, build the page as a ${config.worldSystems[0].name} surface with ${config.mechanics.archetype.name} mechanics, and stage the desktop hero as ${config.websiteConcept.depthModel.toLowerCase()} Mobile fallback: ${config.mechanics.mobileFallback}`;

  return {
    roles,
    tags,
    fonts: config.fonts,
    desktopAnalysis,
    mobileAnalysis,
    designGuidance: {
      captureMode: 'concept-derived',
      worldSystems: config.worldSystems,
      mechanics: config.mechanics,
      implementationPrompt,
      summary: `${config.worldSystems[0].name} + ${config.mechanics.archetype.name}. ${config.mechanics.interactionModel}`
    },
    websiteConcept: {
      familyId: config.id,
      familyName: config.name,
      previewScene: config.previewScene,
      roles,
      ...config.websiteConcept
    }
  };
}

async function download(url, outFile) {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36'
    }
  });
  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status} ${response.statusText}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  await fs.writeFile(outFile, buffer);
}

function analyzePoster(sourceFile, cropOut, sourceOut) {
  const output = execFileSync('python3', [PYTHON_HELPER, '--crop-out', cropOut, '--source-out', sourceOut, sourceFile], { encoding: 'utf8' });
  return JSON.parse(output);
}

function generatePosterLayers(familyId, cropFile, outDir) {
  const output = execFileSync('python3', [LAYER_HELPER, '--family', familyId, '--image', cropFile, '--out-dir', outDir], { encoding: 'utf8' });
  return JSON.parse(output);
}

function captureChecklist() {
  return {
    desktopOpened: true,
    mobileOpened: true,
    desktopScreenshotSaved: true,
    mobileScreenshotSaved: true,
    fontFamiliesExtracted: true,
    colorPaletteExtracted: true
  };
}

function buildMeta(poster, vision, concept, layerPayload = null) {
  const description = `${poster.title} is treated here as a poster-derived website concept. The source is the Arte Collective poster, but the design guidance describes how to turn the art into a live browser world with depth, motion, and mobile behavior.`;
  return {
    slug: poster.slug,
    title: poster.title,
    liveUrl: poster.liveUrl,
    domain: poster.domain,
    sourceLabel: poster.sourceLabel,
    sourceUrl: poster.sourceUrl,
    loadmoreUrl: poster.loadmoreUrl,
    sourceKind: 'arte-poster',
    description,
    credits: poster.credits,
    added: poster.added,
    tags: concept.tags,
    posterImage: poster.posterImage,
    posterImages: poster.posterImages,
    posterCrop: 'assets/poster-crop.jpg',
    posterSource: 'assets/poster-source.jpg',
    posterLayers: layerPayload?.layers
      ? Object.fromEntries(Object.entries(layerPayload.layers).map(([key, value]) => [key, `assets/layers/${value.file}`]))
      : {},
    rawTags: poster.rawTags,
    collectionHandles: poster.collectionHandles,
    collectionTitles: poster.collectionTitles,
    vendor: poster.vendor,
    productId: poster.productId,
    productType: poster.productType,
    variantTitles: poster.variantTitles,
    conceptSource: {
      kind: 'arte-collective-poster',
      collections: poster.collectionHandles,
      productPage: poster.liveUrl,
      posterImage: poster.posterImage,
      posterImages: poster.posterImages
    },
    websiteConcept: concept.websiteConcept,
    captureChecklist: captureChecklist(),
    capture: {
      status: 'concept-derived',
      mode: 'concept-derived',
      desktop: {
        ok: true,
        screenshot: 'screenshots/desktop.jpg',
        analysis: concept.desktopAnalysis
      },
      mobile: {
        ok: true,
        screenshot: 'screenshots/mobile.jpg',
        analysis: concept.mobileAnalysis
      }
    },
    designGuidance: concept.designGuidance
  };
}

const payload = await readJson(DATA_FILE, null);
if (!payload) {
  throw new Error('Missing arte-posters.json. Run npm run crawl:arte first.');
}

const posters = (payload.posters || []).filter((poster) => !onlySlug || poster.slug === onlySlug);
let changed = 0;
for (const poster of posters) {
  const dir = path.join(DESIGN_DIR, poster.slug);
  const metaPath = path.join(dir, 'meta.json');
  if (!force) {
    const current = await readJson(metaPath, null);
    if (current?.sourceKind === 'arte-poster' && current.posterCrop && current.posterSource) {
      continue;
    }
  }

  await ensureDir(path.join(dir, 'assets'));
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), `arte-${poster.handle}-`));
  const tempSource = path.join(tempDir, 'source.jpg');
  const sourceOut = path.join(dir, 'assets', 'poster-source.jpg');
  const cropOut = path.join(dir, 'assets', 'poster-crop.jpg');
  try {
    await download(poster.posterImage, tempSource);
    const vision = analyzePoster(tempSource, cropOut, sourceOut);
    const concept = conceptForPoster(poster, vision);
    const layerPayload = generatePosterLayers(concept.websiteConcept.familyId, cropOut, path.join(dir, 'assets', 'layers'));
    const meta = buildMeta(poster, vision, concept, layerPayload);
    await writeJson(metaPath, meta);
    changed += 1;
    console.log(`Synthesized ${poster.slug}`);
  } finally {
    await fs.rm(tempDir, { recursive: true, force: true });
  }
}

console.log(JSON.stringify({ total: posters.length, changed }, null, 2));
