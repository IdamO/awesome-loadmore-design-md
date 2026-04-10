# Design System Inspiration of Fox Rockett Studio

## 1. Visual Theme & Atmosphere

Fox Rockett Studio reads as type-led composition. The live capture resolves to a dark-leaning system built around #060607, #d6d6d9, and accent notes from #8ba3d2. Design-asset storefront with poster-like product tiles, blunt condensed typography, and a creator-economy commerce rhythm that stays more editorial than SaaS.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Inter, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #060607, #d6d6d9, #8ba3d2, #a2a4a5
- Typography stack: Inter, JudgemeStar, GTStandard-M
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Fan Shrine - tags include e-commerce; description mentions product; description mentions store
- Secondary: Playable Poster - tags include typography; tags include tactile; tags include graphic-design

### Interaction Archetype
- Archetype: Commerce Shrine Stage (78% confidence)
- Why: tags include e-commerce; description mentions product; description mentions store
- Core verbs: browse, collect, buy
- Inputs: scroll, tap, hover



## 3. Color Palette & Roles

- Color 1: #060607 - canvas / dominant background
- Color 2: #d6d6d9 - primary text or opposing surface
- Color 3: #8ba3d2 - accent / interactive signal
- Color 4: #a2a4a5 - supporting surface or hover state
- Color 5: #585e64 - supporting surface or hover state
- Color 6: #f2753c - supporting surface or hover state
- Color 7: #637393 - supporting surface or hover state
- Color 8: #7288ad - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Inter
- Secondary: JudgemeStar
- Support: GTStandard-M

### Hierarchy Snapshot
- Heading sample: 56px / weight 500 / letter-spacing -1.68px
- Body sample: 16px / weight 400 / line-height 22.4px
- Button sample: 14px / weight 400

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#060607) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (graphic-design, typography, e-commerce, tactile) imply the system is intentionally non-generic.
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(177, 177, 177) text, and links inherit rgb(245, 245, 245) as the interaction signal.

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
- Nice-to-have embellishments:
  - tags include e-commerce
  - description mentions product
  - description mentions store
- Mobile fallback: Use a single-column collectible feed with sticky purchase rails and clear release-state chips instead of shrinking desktop grids.
- Fallback path: single-column-collection, reduced-motion
- Manual validation:
  - Product browse feels collectible before it feels transactional.
  - Release or edition state is visible in the browse view.
  - Mobile keeps the collection context while making checkout simpler.

## 12. Do's and Don'ts

### Do
- Use Inter consistently for headlines and interface labels.
- Keep the palette anchored to #060607, #d6d6d9, and #8ba3d2.
- Preserve the experimental posture signaled by the archive tags: graphic-design, typography, e-commerce, tactile.
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

> Build this as a Fan Shrine page with a secondary cue from Playable Poster using the Commerce Shrine Stage interaction model. Keep Inter as the voice anchor, preserve the palette around #060607, #d6d6d9, #8ba3d2, drive the page through scroll, tap, hover, and implement the mobile fallback as: Use a single-column collectible feed with sticky purchase rails and clear release-state chips instead of shrinking desktop grids.


## 15. Source Capture & Validation

- Source: manual curation (https://foxrockettstudio.com/)
- Live site: https://foxrockettstudio.com/
- Credits: Fox Rockett Studio
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
