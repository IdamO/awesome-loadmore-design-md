# Design System Inspiration of Stripe Press

## 1. Visual Theme & Atmosphere

Stripe Press reads as spatial depth. The live capture resolves to a dark-leaning system built around #21181a, #5e5e5f, and accent notes from #592435. Scroll through a 3D virtual bookshelf to discover the publications released by Stripe Press.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Ivar Display, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #21181a, #5e5e5f, #592435, #a9a791
- Typography stack: Ivar Display, Ivar Headline, Ivar Text
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Luxury Archive - tags include e-commerce; description mentions publication; archetype affinity: spatial exhibition world
- Secondary: Fan Shrine - tags include e-commerce; archetype affinity: spatial exhibition world

### Interaction Archetype
- Archetype: Spatial Exhibition World (96% confidence)
- Why: tags include 3d-space; tags include e-commerce; description mentions 3d; description mentions virtual
- Core verbs: explore, focus, open, scroll
- Inputs: scroll, drag, tap, hover

## 3. Color Palette & Roles

- Color 1: #21181a - canvas / dominant background
- Color 2: #5e5e5f - primary text or opposing surface
- Color 3: #592435 - accent / interactive signal
- Color 4: #a9a791 - supporting surface or hover state
- Color 5: #2f3a46 - supporting surface or hover state
- Color 6: #883352 - supporting surface or hover state
- Color 7: #cbc8a3 - supporting surface or hover state
- Color 8: #7a2e47 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Ivar Display
- Secondary: Ivar Headline
- Support: Ivar Text

### Hierarchy Snapshot
- Heading sample: 17.6px / weight 600 / letter-spacing 0.32px
- Body sample: 25px / weight 500 / line-height 37.5px
- Button sample: 16px / weight 600

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#21181a) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (3d-space, e-commerce) imply the site is intentionally non-generic.
- Buttons tend toward rgb(110, 102, 91) backgrounds with rgb(223, 199, 142) text, and links inherit rgb(223, 199, 142) as the interaction signal.

## 6. Interaction Mechanics

- Primary model: spatial_exhibition_world
- Navigation structure: single-scene / wayfinding ambient / friction medium
- Navigation model: Users move through viewpoints or object clusters; each hotspot opens structured detail instead of a modal pileup.
- State model: Idle scene -> hover/focus target -> selected object or viewpoint -> detail overlay -> return to scene.
- Must-keep mechanic: Camera-led exploration through a scene; hotspots reveal detail panes, routes, or chapters.

## 7. Motion System

- Density: medium
- Cadence: ambient
- Triggers: pointer, time
- Transition types: camera-travel, fade, focus-lift
- Physics level: light
- Motion recipe:
  - Use slow camera drift or object breathing at rest.
  - Use hover parallax or focus lift to signal selectable objects.
  - Use fly-to or snap-to transitions between chapters instead of free-floating chaos.

## 8. Spatial Model

- Space type: 2.5d
- Camera behavior: rail
- Depth cues: perspective, occlusion, lighting
- HUD layering: overlay
- Render tier: mixed
- Primary depth cue in capture: none

## 9. Participation & State

- Participation mode: explore
- Persistence: ephemeral
- Inputs to preserve: scroll, drag, tap, hover
- Reset/save posture: Default to resettable, lightweight state changes.

## 10. Sound & Sensor Behavior

- Audio role: none
- Audio triggers: none
- Controls: none
- Sync: none
- Required APIs or platform hooks: css-3d

## 11. Implementation Checklist

- Complexity: high
- Required APIs: css-3d
- Must-have mechanics:
  - Keep the camera shallow and legible; users should understand where they are after every move.
  - Use one authoritative detail layer so the 3D scene does not also carry dense copy.
  - Treat loading, texture size, and mobile fallback as product features, not cleanup.
  - The capture suggests anchored framing or sticky context; preserve that orientation device in the rebuild.
- Nice-to-have embellishments:
  - tags include 3d-space
  - tags include e-commerce
  - description mentions 3d
  - description mentions virtual
  - description mentions bookshelf
  - description mentions shelf
- Mobile fallback: Switch to a guided tour with swipeable viewpoints and one-tap hotspot cycling instead of free camera control.
- Fallback path: guided-tour, reduced-motion
- Manual validation:
  - Camera or viewpoint changes preserve orientation.
  - Hotspots open clear detail states instead of ambiguous overlays.
  - Mobile uses guided viewpoints rather than broken free-camera controls.

## 12. Do's and Don'ts

### Do
- Use Ivar Display consistently for headlines and interface labels.
- Keep the palette anchored to #21181a, #5e5e5f, and #592435.
- Preserve the experimental posture signaled by the loadmo.re tags: 3d-space, e-commerce.
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
- Implement mobile as: Switch to a guided tour with swipeable viewpoints and one-tap hotspot cycling instead of free camera control..
- If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build this as a Luxury Archive page with a secondary cue from Fan Shrine using the Spatial Exhibition World interaction model. Keep Ivar Display as the voice anchor, preserve the palette around #21181a, #5e5e5f, #592435, drive the page through scroll, drag, tap, hover, and implement the mobile fallback as: Switch to a guided tour with swipeable viewpoints and one-tap hotspot cycling instead of free camera control.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/stripe-press)
- Live site: https://press.stripe.com/
- Credits: not listed
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
