# Design System Inspiration of Planet Digital

## 1. Visual Theme & Atmosphere

Planet Digital reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #f5f5f5, #2c9ced, and accent notes from #f9a261. An exploration of digitalization by the University of Zurich and Museum für Gestaltung, where a kaleidoscopic entry screen leads to a hyperlinked web of embedded artworks

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers swiper-icons, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f5f5f5, #2c9ced, #f9a261, #a9aaaa
- Typography stack: swiper-icons, JJannon, Peterman
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Collage Core - description mentions hyperlink; archetype affinity: collage field
- Secondary: Luxury Archive - description mentions museum

### Interaction Archetype
- Archetype: Collage Field (70% confidence)
- Why: description mentions hyperlink
- Core verbs: scan, hover, collect
- Inputs: scroll, hover, tap



## 3. Color Palette & Roles

- Color 1: #f5f5f5 - canvas / dominant background
- Color 2: #2c9ced - primary text or opposing surface
- Color 3: #f9a261 - accent / interactive signal
- Color 4: #a9aaaa - supporting surface or hover state
- Color 5: #d35d0d - supporting surface or hover state
- Color 6: #dd7168 - supporting surface or hover state
- Color 7: #fde076 - supporting surface or hover state
- Color 8: #5c97e0 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: swiper-icons
- Secondary: JJannon
- Support: Peterman

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 32px / weight 400 / line-height 40px
- Button sample: 30px / weight 400

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f5f5f5) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (educational) imply the system is intentionally non-generic.
- Buttons tend toward rgb(0, 0, 0) backgrounds with rgb(128, 128, 128) text, and links inherit rgb(0, 70, 255) as the interaction signal.

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
  - description mentions hyperlink
- Mobile fallback: Flatten the field into a guided scavenger feed or chapter stack while preserving overlap, stickers, and hyperlink energy.
- Fallback path: guided-feed, reduced-motion
- Manual validation:
  - One anchor element keeps the field navigable.
  - Linked scraps clearly advertise interaction.
  - Mobile preserves density through chapters instead of raw chaos.

## 12. Do's and Don'ts

### Do
- Use swiper-icons consistently for headlines and interface labels.
- Keep the palette anchored to #f5f5f5, #2c9ced, and #f9a261.
- Preserve the experimental posture signaled by the archive tags: educational.
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

> Build this as a Collage Core page with a secondary cue from Luxury Archive using the Collage Field interaction model. Keep swiper-icons as the voice anchor, preserve the palette around #f5f5f5, #2c9ced, #f9a261, drive the page through scroll, hover, tap, and implement the mobile fallback as: Flatten the field into a guided scavenger feed or chapter stack while preserving overlap, stickers, and hyperlink energy.



## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/planet-digital)
- Live site: https://www.planetdigital.ch/de/
- Credits: not listed
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
