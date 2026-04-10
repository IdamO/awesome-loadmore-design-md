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
- Primary: Playable Poster - The category wall already behaves like a poster campaign grid, so the right move is to preserve the shelf of bold assets instead of flattening it into generic storefront chrome.
- Secondary: Fan Shrine - Bundles and font packs read like collectible drops; the commerce state should feel like access to a specimen wall, not a commodity database.

### Interaction Archetype
- Archetype: Commerce Shrine Stage (92% confidence)
- Why: The site sells asset packs, but its real strength is a black-stage poster wall with countdown urgency, category specimens, and collectible purchase states.
- Core verbs: scan, collect, focus, buy
- Inputs: scroll, hover, tap



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
- Preserve asymmetry when present - the archive tags (graphic-design, typography, e-commerce, tactile, animation) imply the system is intentionally non-generic.
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(177, 177, 177) text, and links inherit rgb(245, 245, 245) as the interaction signal.

## 6. Interaction Mechanics

- Primary model: commerce_shrine_stage
- Navigation structure: hub / wayfinding explicit / friction low
- Navigation model: Users scan a single black stage first, then move between category posters, bundles, and purchase states without losing the wall-of-artifacts framing.
- State model: Urgency ticker -> hero statement -> category wall -> bundle focus -> add or choose -> return to the wall.
- Must-keep mechanic: Treat the homepage like a merch wall for design tools: the orange urgency band is a campaign rail, category cards behave like poster slabs, and bundle states feel like collectible editions rather than spreadsheet inventory.

## 7. Motion System

- Density: medium
- Cadence: event-driven
- Triggers: pointer, scroll, time
- Transition types: countdown-tick, poster-lift, card-focus
- Physics level: light
- Motion recipe:
  - Let the urgency band tick or drift subtly so the launch rhythm is always alive.
  - Lift poster tiles forward on hover with restrained scale and shadow instead of loud carousel tricks.
  - Snap bundle focus states into place quickly so the page feels merch-led, not dashboard-led.

## 8. Spatial Model

- Space type: layered-2d
- Camera behavior: fixed
- Depth cues: scale, lighting, stacking
- HUD layering: overlay
- Render tier: dom
- Primary depth cue in capture: none

## 9. Participation & State

- Participation mode: customize
- Persistence: saved
- Inputs to preserve: scroll, hover, tap
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
  - The first screen should read as a black poster wall with a sale band before it reads as a shop.
  - Preserve the hard edges, condensed hierarchy, and specimen-like category cards.
  - Checkout cues should stay calm and secondary to the wall of artifacts.
- Nice-to-have embellishments:
  - orange urgency band
  - black stage
  - poster-like category tiles
  - bundle drop logic
- Mobile fallback: Keep the orange urgency band, one oversized hero statement, and a tight two-column poster shelf with lightweight sticky account/cart controls.
- Fallback path: two-column-shelf, reduced-motion
- Manual validation:
  - The homepage reads like a campaign wall for design artifacts in under three seconds.
  - The urgency rail and poster shelf feel connected rather than like separate marketing modules.
  - Mobile keeps the artifact-wall feeling instead of collapsing into a bland commerce list.

## 12. Do's and Don'ts

### Do
- Use Inter consistently for headlines and interface labels.
- Keep the palette anchored to #060607, #d6d6d9, and #8ba3d2.
- Preserve the experimental posture signaled by the archive tags: graphic-design, typography, e-commerce, tactile, animation.
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
- Implement mobile as: Keep the orange urgency band, one oversized hero statement, and a tight two-column poster shelf with lightweight sticky account/cart controls..
- If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build this as a Playable Poster commerce page with a secondary cue from Fan Shrine. Keep the black field, off-white typography, and orange urgency band as the core atmosphere. Treat category blocks like poster specimens on a merch wall, keep bundle states collectible instead of corporate, drive the page through scroll, hover, and tap, and make mobile feel like a compressed artifact shelf rather than a generic shop list.


### What To Pull

- Pull the orange promo band as a campaign rail, not a throwaway announcement bar.
- Treat category cards as poster specimens arranged on a merch wall.
- Keep purchase states subordinate to the collectible shelf instead of turning the page into commodity commerce.


## 15. Source Capture & Validation

- Source: manual curation (https://foxrockettstudio.com/)
- Live site: https://foxrockettstudio.com/
- Credits: Fox Rockett Studio
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
