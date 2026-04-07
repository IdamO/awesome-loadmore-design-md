# Design System Inspiration of Fast Cash Money

## 1. Visual Theme & Atmosphere

Fast Cash Money reads as retro-computing cues. The live capture resolves to a dark-leaning system built around #010331, #4ab2e2, and accent notes from #319ccd. A fake cryptocurrency website that fits into a larger fictionalized network of websites (2018).

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #010331, #4ab2e2, #319ccd, #1f88b7
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Collage Core - tags include glitches; tags include colorful; tags include retro
- Secondary: Cozy Desktop - tags include retro

### Interaction Archetype
- Archetype: Collage Field (71% confidence)
- Why: tags include glitches; tags include colorful; tags include retro
- Core verbs: scan, hover, collect
- Inputs: scroll, hover, tap

## 3. Color Palette & Roles

- Color 1: #010331 - canvas / dominant background
- Color 2: #4ab2e2 - primary text or opposing surface
- Color 3: #319ccd - accent / interactive signal
- Color 4: #1f88b7 - supporting surface or hover state
- Color 5: #ef0e8d - supporting surface or hover state
- Color 6: #5bc5f6 - supporting surface or hover state
- Color 7: #216023 - supporting surface or hover state
- Color 8: #17e973 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: 32px / weight 700 / letter-spacing normal
- Body sample: 22px / weight 400 / line-height normal
- Button sample: 24px / weight 700

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#010331) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (glitches, colorful, retro) imply the site is intentionally non-generic.
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(68, 255, 0) text, and links inherit rgb(0, 176, 255) as the interaction signal.

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
- Nice-to-have embellishments:
  - tags include glitches
  - tags include colorful
  - tags include retro
- Mobile fallback: Flatten the field into a guided scavenger feed or chapter stack while preserving overlap, stickers, and hyperlink energy.
- Fallback path: guided-feed, reduced-motion
- Manual validation:
  - One anchor element keeps the field navigable.
  - Linked scraps clearly advertise interaction.
  - Mobile preserves density through chapters instead of raw chaos.

## 12. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #010331, #4ab2e2, and #319ccd.
- Preserve the experimental posture signaled by the loadmo.re tags: glitches, colorful, retro.
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

> Build this as a Collage Core page with a secondary cue from Cozy Desktop using the Collage Field interaction model. Keep the extracted primary font as the voice anchor, preserve the palette around #010331, #4ab2e2, #319ccd, drive the page through scroll, hover, tap, and implement the mobile fallback as: Flatten the field into a guided scavenger feed or chapter stack while preserving overlap, stickers, and hyperlink energy.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/fast-cash-money)
- Live site: https://fastcashmoneyplus.biz/
- Credits: Steve Pikelny
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
