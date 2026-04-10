# Design System Inspiration of Mobile HSL Picker

## 1. Visual Theme & Atmosphere

Mobile HSL Picker reads as restrained minimalism, playful interaction. The live capture resolves to a light-leaning system built around #fefefe, #d9d9d9, and accent notes from #e6e6e6. Color Picker with gyroscope sensors

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Space Mono, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefefe, #d9d9d9, #e6e6e6, #a6a6a6
- Typography stack: Space Mono
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Collage Core - tags include colorful; tags include playful; archetype affinity: collage field
- Secondary: Playable Poster - tags include colorful; tags include playful; archetype affinity: collage field

### Interaction Archetype
- Archetype: Collage Field (58% confidence)
- Why: tags include colorful; tags include playful
- Core verbs: scan, hover, collect
- Inputs: scroll, hover, tap



## 3. Color Palette & Roles

- Color 1: #fefefe - canvas / dominant background
- Color 2: #d9d9d9 - primary text or opposing surface
- Color 3: #e6e6e6 - accent / interactive signal
- Color 4: #a6a6a6 - supporting surface or hover state
- Color 5: #b9b9b9 - supporting surface or hover state
- Color 6: #c6c6c6 - supporting surface or hover state
- Color 7: #969696 - supporting surface or hover state
- Color 8: #898989 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Space Mono

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefefe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (minimal, colorful, playful) imply the system is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit #e6e6e6 as the interaction signal.

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
- Primary depth cue in capture: flat surfaces / contrast-only separation

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
  - tags include colorful
  - tags include playful
- Mobile fallback: Flatten the field into a guided scavenger feed or chapter stack while preserving overlap, stickers, and hyperlink energy.
- Fallback path: guided-feed, reduced-motion
- Manual validation:
  - One anchor element keeps the field navigable.
  - Linked scraps clearly advertise interaction.
  - Mobile preserves density through chapters instead of raw chaos.

## 12. Do's and Don'ts

### Do
- Use Space Mono consistently for headlines and interface labels.
- Keep the palette anchored to #fefefe, #d9d9d9, and #e6e6e6.
- Preserve the experimental posture signaled by the archive tags: minimal, colorful, playful.
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

> Build this as a Collage Core page with a secondary cue from Playable Poster using the Collage Field interaction model. Keep Space Mono as the voice anchor, preserve the palette around #fefefe, #d9d9d9, #e6e6e6, drive the page through scroll, hover, tap, and implement the mobile fallback as: Flatten the field into a guided scavenger feed or chapter stack while preserving overlap, stickers, and hyperlink energy.



## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/mobile-hsl-picker)
- Live site: https://mobile-hsl-picker.ferdinands.org
- Credits: Ferdinand Sorg
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
