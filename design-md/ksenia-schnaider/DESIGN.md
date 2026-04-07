# Design System Inspiration of Ksenia Schnaider

## 1. Visual Theme & Atmosphere

Ksenia Schnaider reads as editorial fashion energy. The live capture resolves to a light-leaning system built around #e9eaeb, #a9a8a6, and accent notes from #1b1d21. Fashion e-comm website with nice UI details, and cool aesthetics.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Crimson Text, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #e9eaeb, #a9a8a6, #1b1d21, #d1aca2
- Typography stack: Crimson Text, ArialNarrow, Kanit-Klaviyo-Hosted
- Desktop posture: fixed/sticky framing
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Fan Shrine - tags include fashion; tags include e-commerce; description mentions fashion
- Secondary: Luxury Archive - tags include fashion; tags include e-commerce; archetype affinity: commerce shrine stage

### Interaction Archetype
- Archetype: Commerce Shrine Stage (96% confidence)
- Why: tags include e-commerce; tags include fashion; description mentions fashion
- Core verbs: browse, collect, buy
- Inputs: scroll, tap, hover

## 3. Color Palette & Roles

- Color 1: #e9eaeb - canvas / dominant background
- Color 2: #a9a8a6 - primary text or opposing surface
- Color 3: #1b1d21 - accent / interactive signal
- Color 4: #d1aca2 - supporting surface or hover state
- Color 5: #5c5f62 - supporting surface or hover state
- Color 6: #d3c5b6 - supporting surface or hover state
- Color 7: #314c68 - supporting surface or hover state
- Color 8: #d05a62 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Crimson Text
- Secondary: ArialNarrow
- Support: Kanit-Klaviyo-Hosted
- Support: Poppins-Klaviyo-Hosted
- Support: GTStandard-M

### Hierarchy Snapshot
- Heading sample: 21.84px / weight 700 / letter-spacing normal
- Body sample: 18.2px / weight 400 / line-height 23.66px
- Button sample: 18.2px / weight 400

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#e9eaeb) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (e-commerce, fashion) imply the site is intentionally non-generic.
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(51, 51, 51) text, and links inherit rgb(31, 31, 31) as the interaction signal.

## 6. Interaction Mechanics

- Primary model: commerce_shrine_stage
- Navigation structure: hub / wayfinding explicit / friction low
- Navigation model: Browse objects first, then enter detail or purchase state without losing the collection context.
- State model: Collection browse -> featured object focus -> detail/purchase -> return to collection.
- Must-keep mechanic: Objects are treated like collectibles or relics; product rails, badges, and states carry as much narrative weight as the checkout.

## 7. Motion System

- Density: medium
- Cadence: event-driven
- Triggers: pointer, scroll
- Transition types: hover-lift, fade, flip
- Physics level: light
- Motion recipe:
  - Use hover lift, collectible flips, and ambient drift around featured objects.
  - Keep cart or checkout transitions legible and calm.
  - Treat release counters and stock states like part of the scene.

## 8. Spatial Model

- Space type: layered-2d
- Camera behavior: fixed
- Depth cues: scale, lighting
- HUD layering: overlay
- Render tier: dom
- Primary depth cue in capture: none

## 9. Participation & State

- Participation mode: customize
- Persistence: saved
- Inputs to preserve: scroll, tap, hover
- Reset/save posture: Persist enough state that revisits feel intentional.

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
  - Preserve collection logic in the browse state so the page feels like a shrine, not a commodity grid.
  - Use release, edition, or provenance metadata as part of the emotional pitch.
  - Make cart and checkout states calmer than the browsing world.
  - The capture suggests anchored framing or sticky context; preserve that orientation device in the rebuild.
- Nice-to-have embellishments:
  - tags include e-commerce
  - tags include fashion
  - description mentions fashion
- Mobile fallback: Use a single-column collectible feed with sticky purchase rails and clear release-state chips instead of shrinking desktop grids.
- Fallback path: single-column-collection, reduced-motion
- Manual validation:
  - Product browse feels collectible before it feels transactional.
  - Release or edition state is visible in the browse view.
  - Mobile keeps the collection context while making checkout simpler.

## 12. Do's and Don'ts

### Do
- Use Crimson Text consistently for headlines and interface labels.
- Keep the palette anchored to #e9eaeb, #a9a8a6, and #1b1d21.
- Preserve the experimental posture signaled by the loadmo.re tags: e-commerce, fashion.
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
- Implement mobile as: Use a single-column collectible feed with sticky purchase rails and clear release-state chips instead of shrinking desktop grids..
- If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build this as a Fan Shrine page with a secondary cue from Luxury Archive using the Commerce Shrine Stage interaction model. Keep Crimson Text as the voice anchor, preserve the palette around #e9eaeb, #a9a8a6, #1b1d21, drive the page through scroll, tap, hover, and implement the mobile fallback as: Use a single-column collectible feed with sticky purchase rails and clear release-state chips instead of shrinking desktop grids.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/ksenia-schnaider)
- Live site: https://www.kseniaschnaider.com
- Credits: Future Perfect
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
