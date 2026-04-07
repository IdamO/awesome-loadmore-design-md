# Interaction Archetypes

Use these when the repo needs to teach another agent how the page actually behaves, not just how it looks.

Choose one dominant archetype per build. Treat it as the implementation spine under the chosen world system.

## 1. Club Instrument

Best for: music-tech, artist tools, reactive launches.

- Interaction model: one hero stage plus reactive controls; input changes sound or system state immediately
- Engine hints: React or DOM for chrome, `motion/react` for feedback, Tone.js or Web Audio after intent, canvas/WebGL only for meters and glow
- Motion recipe: ambient pulse, meter fills, tempo-linked reveals, low-latency press feedback
- Mobile fallback: one focal stage, one control strip, tap-to-trigger presets
- Refs: `jazz-keys`, `blob-opera`, `holodec-world`, `desktop-fm`

## 2. Scroll Scrub Instrument

Best for: editorial demos where scrolling itself should produce the media interaction.

- Interaction model: map scroll position to notes, frames, or parameter changes; the page becomes a score
- Engine hints: GSAP ScrollTrigger or `motion/react` scroll values, Tone.js, SVG or DOM overlays for state markers
- Motion recipe: scrub-linked transforms, section snap cues, lightweight audio acknowledgement after gesture
- Mobile fallback: horizontal slider or stepped scenes instead of long precision scrubs
- Refs: `amanda-yeah-piano-scrollbar-piano`, `jazz-keys`, `the-road`

## 3. Spatial Exhibition World

Best for: 3D archives, digital exhibitions, worldbuilding, object storytelling.

- Interaction model: camera-led exploration through a scene with hotspots that reveal detail panes or chapters
- Engine hints: CSS 3D for shallow shelves, React Three Fiber for true object or room navigation, HTML overlays for readable labels
- Motion recipe: slow camera drift, hover parallax, snap-to-viewpoint, fade-in detail cards
- Mobile fallback: guided tour mode with swipeable viewpoints and one-tap hotspot cycling
- Refs: `stripe-press`, `harley-weir`, `art-code8`, `holodec-world`

## 4. Playable Poster

Best for: campaigns, drops, type-led launches, event pages.

- Interaction model: one-screen poster composition with one or two high-conviction interactions such as reveal, distort, drag, or type morph
- Engine hints: `motion/react`, GSAP, SVG path animation, variable font APIs
- Motion recipe: one ceremonial entrance, oversized type transform, draw-on marks, decisive state switch
- Mobile fallback: split into two to four staged scenes and keep only one hero interaction
- Refs: `design-your-own-hole`, `gt-flexa`, `smc-real-time`, `dinamo-typefaces`

## 5. Editorial Archive Index

Best for: publishing, curatorial tools, searchable collections, index-first sites.

- Interaction model: the index is primary; filters, tags, and anchors drive navigation; detail opens inline or in a sidecar
- Engine hints: server-rendered HTML or React, client-side filtering, sticky rails, FLIP transitions
- Motion recipe: restrained fades, crop shifts, list-to-detail morphs, sticky context preservation
- Mobile fallback: single-column feed, bottom-sheet filters, persistent current-section chip, inline detail expansion
- Refs: `developments`, `and-shy-magazine`, `swiss-design-awards-2020`, `public-image`

## 6. Toy Loop Microgame

Best for: playful discovery, campaign hooks, interaction-first art pieces.

- Interaction model: one simple rule, immediate feedback, short mastery loop, replayable quickly
- Engine hints: Canvas or DOM, Matter.js only when physics is the point, short game loop, light audio feedback after gesture
- Motion recipe: instant response, elastic decay, state pops, ceremonial reset
- Mobile fallback: tap and drag only, shorter loop, larger hit targets
- Refs: `labyrinth`, `smack-dat-ass`, `world-two`, `cloudwatching`

## 7. Desktop Shell World

Best for: retro portals, weird default interfaces, community worlds, collectible navigation.

- Interaction model: navigation happens through windows, icons, folders, or desktop objects; the chrome is part of the fiction
- Engine hints: DOM windows with z-index manager, drag constraints, selective local persistence, sprite or bitmap assets
- Motion recipe: window open and close snap, drag inertia, focus elevation, subtle CRT idle loop
- Mobile fallback: convert windows into a card stack or tabbed drawer while preserving the desktop fiction in the chrome
- Refs: `orb-farm`, `simone-s-computer`, `poolside-fm`, `communal-radio-club`

## 8. Retro Tool Emulator

Best for: fake utilities, generative toys, nostalgia-as-product, creator tools with strong personality.

- Interaction model: remembered app logic with menus, presets, panels, export, and obvious toy controls
- Engine hints: plain DOM and CSS for chrome, canvas or SVG for output, client-side export pipeline
- Motion recipe: minimal animation, strong press states, panel swaps, menu drops, render feedback
- Mobile fallback: one-tool-at-a-time inspector or wizard while preserving the chrome
- Refs: `make-word-art`, `paint-stx`, `mousing-around`, `orb-farm`

## 9. Collage Field

Best for: net art, maximal hyperlink environments, layered campaign pages.

- Interaction model: a field of scraps, hyperlinks, stickers, and media fragments; discovery comes from scanning and touching layers
- Engine hints: DOM layering first, Canvas only for background texture, disciplined z-order, sprite or GIF assets
- Motion recipe: layered reveals, jitter, hover swaps, offset scroll, one stable composition anchor
- Mobile fallback: flatten into a guided scavenger feed or chapter stack while keeping overlap and hyperlink energy
- Refs: `camerons-world`, `hybrid-vigor`, `finger-walking`, `hallo-internet`

## 10. Portfolio Artifact

Best for: personal sites, studios, artists, authored portfolios.

- Interaction model: asymmetrical document flow, authored modules, selective reveals, quiet navigation
- Engine hints: semantic HTML or React, strong composition, sticky framing only where it clarifies voice
- Motion recipe: restrained reveals, image or viewpoint shifts, one irrational but coherent move
- Mobile fallback: preserve the same voice in a single authored column instead of literal layout copying
- Refs: `cyanbanister`, `harley-weir`, `developments`, `infringe`

## 11. Commerce Shrine Stage

Best for: drops, fashion commerce, merch worlds, edition-led storytelling.

- Interaction model: objects behave like collectibles or relics; browse state carries emotional weight before checkout
- Engine hints: commerce primitives underneath, authored browse layer, strong object hover or focus states, clear release metadata
- Motion recipe: hover lift, collectible flip, ambient drift, calm checkout handoff
- Mobile fallback: single-column collectible feed with sticky purchase rail and clear release-state chips
- Refs: `online-ceramics`, `issued-by-bottega`, `martine-rose`, `country-music`

## Selection rule

Pick one dominant archetype.
If you need a second mechanic, it should only modify the first one, not replace it.
