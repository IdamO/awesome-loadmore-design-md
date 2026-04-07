# Design System Inspiration of Han Kjøbenhavn

## 1. Visual Theme & Atmosphere

Han Kjøbenhavn reads as editorial fashion energy. The live capture resolves to a light-leaning system built around #fcfafa, #5e615e, and accent notes from #18171b. Interesting layout concept for this e-commerce that explore the aesthetics of google sheets.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers GTStandard-M, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fcfafa, #5e615e, #18171b, #aa9d9a
- Typography stack: GTStandard-M, Manrope, Poppins
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Fan Shrine - tags include fashion; tags include e-commerce; archetype affinity: commerce shrine stage
- Secondary: Luxury Archive - tags include fashion; tags include e-commerce; archetype affinity: commerce shrine stage

### Interaction Archetype
- Archetype: Commerce Shrine Stage (88% confidence)
- Why: tags include e-commerce; tags include fashion
- Core verbs: browse, collect, buy
- Inputs: scroll, tap, hover

## 3. Color Palette & Roles

- Color 1: #fcfafa - canvas / dominant background
- Color 2: #5e615e - primary text or opposing surface
- Color 3: #18171b - accent / interactive signal
- Color 4: #aa9d9a - supporting surface or hover state
- Color 5: #9c1729 - supporting surface or hover state
- Color 6: #63181f - supporting surface or hover state
- Color 7: #314d4e - supporting surface or hover state
- Color 8: #926d68 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: GTStandard-M
- Secondary: Manrope
- Support: Poppins
- Support: Avenir_Nex_pro_regular
- Support: Avenir_Next_Pro_Bold

### Hierarchy Snapshot
- Heading sample: 18px / weight 600 / letter-spacing 0.27px
- Body sample: 16px / weight 400 / line-height normal
- Button sample: 12px / weight 700

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fcfafa) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (e-commerce, fashion, default-aesthetics) imply the site is intentionally non-generic.
- Buttons tend toward rgb(0, 0, 0) backgrounds with rgb(255, 255, 255) text, and links inherit rgb(0, 0, 0) as the interaction signal.

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
- Use GTStandard-M consistently for headlines and interface labels.
- Keep the palette anchored to #fcfafa, #5e615e, and #18171b.
- Preserve the experimental posture signaled by the loadmo.re tags: e-commerce, fashion, default-aesthetics.
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

> Build this as a Fan Shrine page with a secondary cue from Luxury Archive using the Commerce Shrine Stage interaction model. Keep GTStandard-M as the voice anchor, preserve the palette around #fcfafa, #5e615e, #18171b, drive the page through scroll, tap, hover, and implement the mobile fallback as: Use a single-column collectible feed with sticky purchase rails and clear release-state chips instead of shrinking desktop grids.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/han-kjobenhavn)
- Live site: https://hankjobenhavn.com/
- Credits: not listed
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
