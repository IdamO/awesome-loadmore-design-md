# Design System Inspiration of New York Times - This is 18 around the world

## 1. Visual Theme & Atmosphere

New York Times - This is 18 around the world reads as playful interaction. The live capture resolves to a dark-leaning system built around #47292a, #5a5761, and accent notes from #221d22. Another example of NY Times's brilliant take on digital content. They certainly know how to immerse the reader in a story.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers nyt-stymie, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #47292a, #5a5761, #221d22, #9497a6
- Typography stack: nyt-stymie, nyt-cheltenham, nyt-cheltenham-sh
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Collage Core - tags include playful; archetype affinity: collage field
- Secondary: Playable Poster - tags include playful; archetype affinity: collage field; large display type

### Interaction Archetype
- Archetype: Collage Field (60% confidence)
- Why: tags include playful; title mentions world; large display type
- Core verbs: scan, hover, collect
- Inputs: scroll, hover, tap

## 3. Color Palette & Roles

- Color 1: #47292a - canvas / dominant background
- Color 2: #5a5761 - primary text or opposing surface
- Color 3: #221d22 - accent / interactive signal
- Color 4: #9497a6 - supporting surface or hover state
- Color 5: #5e708f - supporting surface or hover state
- Color 6: #323146 - supporting surface or hover state
- Color 7: #dfe1e6 - supporting surface or hover state
- Color 8: #788499 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: nyt-stymie
- Secondary: nyt-cheltenham
- Support: nyt-cheltenham-sh
- Support: nyt-cheltenham-extra-cn-bd
- Support: nyt-mag-serif-headline
- Support: nyt-karnak-display-130124
- Support: nyt-mag-sans
- Support: nyt-franklin

### Hierarchy Snapshot
- Heading sample: 144px / weight 200 / letter-spacing normal
- Body sample: 32px / weight 200 / line-height 41.6px
- Button sample: 20px / weight 400

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#47292a) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (online-magazine, playful) imply the site is intentionally non-generic.
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text, and links inherit rgb(21, 124, 210) as the interaction signal.

## 6. Interaction Mechanics

- Primary model: collage_field
- Navigation structure: map / wayfinding ambient / friction high
- Navigation model: Users browse clusters or islands of content rather than a clean linear document.
- State model: Field at rest -> hover or focus cluster -> reveal linked artifact -> continue browsing.
- Must-keep mechanic: The page behaves like a field of scraps, hyperlinks, stickers, and media fragments; discovery comes from scanning and touching layers.

## 7. Motion System

- Density: medium
- Cadence: continuous
- Triggers: pointer, scroll, time
- Transition types: shuffle, jitter, fade
- Physics level: light
- Motion recipe:
  - Use layered reveals, jitter, and hover swaps selectively.
  - Let movement imply depth between scraps rather than simulating real 3D.
  - Keep one stable composition anchor so the field does not turn into noise.

## 8. Spatial Model

- Space type: layered-2d
- Camera behavior: parallax
- Depth cues: scale, occlusion, blur
- HUD layering: overlay
- Render tier: dom
- Primary depth cue in capture: none

## 9. Participation & State

- Participation mode: browse
- Persistence: ephemeral
- Inputs to preserve: scroll, hover, tap
- Reset/save posture: Default to resettable, lightweight state changes.

## 10. Sound & Sensor Behavior

- Audio role: none
- Audio triggers: none
- Controls: none
- Sync: none
- Required APIs or platform hooks: none

## 11. Implementation Checklist

- Complexity: medium
- Required APIs: none
- Must-have mechanics:
  - Keep one hierarchy anchor such as a headline, map, or rail so the collage stays legible.
  - Treat every scrap as part of one composition, not a random sticker dump.
  - Use link states and media swaps as the interaction language.
  - The capture suggests anchored framing or sticky context; preserve that orientation device in the rebuild.
- Nice-to-have embellishments:
  - tags include playful
  - title mentions world
  - large display type
- Mobile fallback: Flatten the field into a guided scavenger feed or chapter stack while preserving overlap, stickers, and hyperlink energy.
- Fallback path: guided-feed, reduced-motion
- Manual validation:
  - One anchor element keeps the field navigable.
  - Linked scraps clearly advertise interaction.
  - Mobile preserves density through chapters instead of raw chaos.

## 12. Do's and Don'ts

### Do
- Use nyt-stymie consistently for headlines and interface labels.
- Keep the palette anchored to #47292a, #5a5761, and #221d22.
- Preserve the experimental posture signaled by the loadmo.re tags: online-magazine, playful.
- Build separate desktop and mobile compositions instead of pretending one layout can fake both.
- Use the inferred mechanics schema as the implementation baseline before adding ornament.

### Don't
- Don't genericize the interface into a default SaaS landing page.
- Don't introduce rounded, pastel, or glassmorphism defaults unless the captured site already does.
- Don't replace the extracted font stack with Inter/Roboto/system as the main voice unless no custom stack loaded.
- Don't ignore the mobile fallback just because the desktop interaction is more fun.
- Don't copy screenshots literally when the repo only has archival capture evidence.

## 13. Responsive Behavior

- Desktop capture uses screenshots/desktop.jpg as the visual baseline.
- Mobile capture uses screenshots/mobile.jpg as the mobile baseline.
- Keep touch targets oversized on mobile and allow the background system to dominate the viewport.
- Implement mobile as: Flatten the field into a guided scavenger feed or chapter stack while preserving overlap, stickers, and hyperlink energy..
- If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build this as a Collage Core page with a secondary cue from Playable Poster using the Collage Field interaction model. Keep nyt-stymie as the voice anchor, preserve the palette around #47292a, #5a5761, #221d22, drive the page through scroll, hover, tap, and implement the mobile fallback as: Flatten the field into a guided scavenger feed or chapter stack while preserving overlap, stickers, and hyperlink energy.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/new-york-times-this-is-18-around-the-world)
- Live site: https://www.nytimes.com/interactive/2018/10/11/style/this-is-18.html
- Credits: Bureau Borsche
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
