# Design System Inspiration of Savee Marketplace

## 1. Visual Theme & Atmosphere

Savee Marketplace reads as type-led composition. The live capture resolves to a light-leaning system built around #f9f9f8, #0d0e0d, and accent notes from #616461. Motion-template marketplace with high-density catalog pacing, direct commercial language, and enough graphic-design culture to be useful for motion-heavy launch surfaces.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Inter, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f9f9f8, #0d0e0d, #616461, #d0fd0f
- Typography stack: Inter, JudgemeStar, GTStandard-M
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Playable Poster - Each product tile is already a miniature campaign frame, so the index should preserve that sense of poster worlds colliding on one gallery wall.
- Secondary: Luxury Archive - The white field, negative space, and restraint give the marketplace the feel of a curated index rather than a noisy template bazaar.

### Interaction Archetype
- Archetype: Editorial Archive Index (90% confidence)
- Why: The core surface is a curatorial index: category tabs, a poster wall, and enough negative space that every thumbnail reads like a selected exhibit.
- Core verbs: browse, filter, focus, collect
- Inputs: scroll, hover, tap



## 3. Color Palette & Roles

- Color 1: #f9f9f8 - canvas / dominant background
- Color 2: #0d0e0d - primary text or opposing surface
- Color 3: #616461 - accent / interactive signal
- Color 4: #d0fd0f - supporting surface or hover state
- Color 5: #a0a09f - supporting surface or hover state
- Color 6: #995716 - supporting surface or hover state
- Color 7: #592213 - supporting surface or hover state
- Color 8: #e06a27 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Inter
- Secondary: JudgemeStar
- Support: GTStandard-M

### Hierarchy Snapshot
- Heading sample: 48px / weight 500 / letter-spacing -1.44px
- Body sample: 15.6px / weight 500 / line-height 19.5px
- Button sample: 13.3333px / weight 400

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f9f9f8) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (graphic-design, animation, e-commerce, typography, editorial) imply the system is intentionally non-generic.
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgba(56, 56, 56, 0.75) text, and links inherit rgb(255, 255, 255) as the interaction signal.

## 6. Interaction Mechanics

- Primary model: editorial_archive_index
- Navigation structure: index / wayfinding explicit / friction low
- Navigation model: Users browse the wall first, use tabs and promo rails as wayfinding, then enter detail without losing the feeling of being inside one curated poster index.
- State model: Promo band -> hero statement -> archive wall browse -> card emphasis -> detail or purchase -> return to archive.
- Must-keep mechanic: Treat the homepage like a poster archive for motion systems: the bundle band anchors urgency, category tabs behave like curatorial filters, and each product card is a mini campaign artifact rather than a neutral commerce tile.

## 7. Motion System

- Density: medium
- Cadence: event-driven
- Triggers: pointer, scroll
- Transition types: card-lift, tab-shift, hero-fade
- Physics level: light
- Motion recipe:
  - Use one ceremonial load on the hero statement or bundle band, then keep card motion restrained.
  - Lift or sharpen one poster card at a time so the wall still reads as a composed index.
  - Maintain mobile momentum through a clean feed rhythm, not through extra micro-animation.

## 8. Spatial Model

- Space type: layered-2d
- Camera behavior: fixed
- Depth cues: scale, occlusion, whitespace
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
  - The wall of templates should feel curated before it feels transactional.
  - Tabs, price states, and poster cards must belong to the same visual grammar.
  - Keep enough whitespace that individual thumbnails still feel authored.
- Nice-to-have embellishments:
  - white gallery field
  - bundle promo rail
  - category tabs
  - poster-wall thumbnails
- Mobile fallback: Collapse to a single-column poster feed with persistent category tabs, the bundle band pinned above the fold, and one emphasized card state at a time.
- Fallback path: single-column-feed, reduced-motion
- Manual validation:
  - The page reads like a curated motion-poster archive in under three seconds.
  - Category tabs feel editorial and intentional, not like enterprise filtering.
  - Mobile preserves the white-wall gallery feeling with fewer simultaneous cards.

## 12. Do's and Don'ts

### Do
- Use Inter consistently for headlines and interface labels.
- Keep the palette anchored to #f9f9f8, #0d0e0d, and #616461.
- Preserve the experimental posture signaled by the archive tags: graphic-design, animation, e-commerce, typography, editorial.
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
- Implement mobile as: Collapse to a single-column poster feed with persistent category tabs, the bundle band pinned above the fold, and one emphasized card state at a time..
- If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build this as a Playable Poster archive page with a secondary cue from Luxury Archive using an Editorial Archive Index mechanic. Keep the white gallery field, black type, and bundle banner discipline. Let category tabs act like curatorial filters, stage the product cards as miniature poster worlds, keep the chrome quiet, and make mobile feel like a paced poster feed instead of a template-store grid.


### What To Pull

- Pull the bundle banner and category row as the control surface for the whole wall.
- Use the white field as gallery space; let the poster cards supply the color and energy.
- Treat each template tile like a mini campaign world, not a neutral product card.


## 15. Source Capture & Validation

- Source: manual curation (https://marketplace.savee.com/)
- Live site: https://marketplace.savee.com/
- Credits: Savee
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
