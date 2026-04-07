# Design System Inspiration of ABRA

## 1. Visual Theme & Atmosphere

ABRA reads as editorial fashion energy. The live capture resolves to a light-leaning system built around #c6c7c2, #a8a9a4, and accent notes from #171717. Retro interface for this footwear brand.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Geist, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #c6c7c2, #a8a9a4, #171717, #555554
- Typography stack: Geist, GTStandard-M
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Fan Shrine - tags include fashion; tags include e-commerce; archetype affinity: commerce shrine stage
- Secondary: Luxury Archive - tags include fashion; tags include e-commerce; archetype affinity: commerce shrine stage

### Interaction Archetype
- Archetype: Commerce Shrine Stage (96% confidence)
- Why: tags include e-commerce; tags include fashion
- Core verbs: browse, collect, buy
- Inputs: scroll, tap, hover

## 3. Color Palette & Roles

- Color 1: #c6c7c2 - canvas / dominant background
- Color 2: #a8a9a4 - primary text or opposing surface
- Color 3: #171717 - accent / interactive signal
- Color 4: #555554 - supporting surface or hover state
- Color 5: #c1c2bd - supporting surface or hover state
- Color 6: #bfc0bb - supporting surface or hover state
- Color 7: #d2d3cd - supporting surface or hover state
- Color 8: #81827f - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Geist
- Secondary: GTStandard-M

### Hierarchy Snapshot
- Heading sample: 12px / weight 100 / letter-spacing 0.6px
- Body sample: 12px / weight 100 / line-height 18px
- Button sample: 12px / weight 100

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#c6c7c2) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (fashion, e-commerce) imply the site is intentionally non-generic.
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text, and links inherit rgb(0, 0, 0) as the interaction signal.

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
  - tags include fashion
- Mobile fallback: Use a single-column collectible feed with sticky purchase rails and clear release-state chips instead of shrinking desktop grids.
- Fallback path: single-column-collection, reduced-motion
- Manual validation:
  - Product browse feels collectible before it feels transactional.
  - Release or edition state is visible in the browse view.
  - Mobile keeps the collection context while making checkout simpler.

## 12. Do's and Don'ts

### Do
- Use Geist consistently for headlines and interface labels.
- Keep the palette anchored to #c6c7c2, #a8a9a4, and #171717.
- Preserve the experimental posture signaled by the loadmo.re tags: fashion, e-commerce.
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

> Build this as a Fan Shrine page with a secondary cue from Luxury Archive using the Commerce Shrine Stage interaction model. Keep Geist as the voice anchor, preserve the palette around #c6c7c2, #a8a9a4, #171717, drive the page through scroll, tap, hover, and implement the mobile fallback as: Use a single-column collectible feed with sticky purchase rails and clear release-state chips instead of shrinking desktop grids.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/abra)
- Live site: http://www.abra.paris/x1.0/indexm.php
- Credits: not listed
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
