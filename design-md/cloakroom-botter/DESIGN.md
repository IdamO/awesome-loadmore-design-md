# Design System Inspiration of Cloakroom Botter

## 1. Visual Theme & Atmosphere

Cloakroom Botter reads as editorial fashion energy, spatial depth. The live capture resolves to a light-leaning system built around #fefefe, #cfcfcf, and accent notes from #e7e7e7. Fullscreen interface that lets you browse BOTTER's collection through dressing up an underwater 3D avatar model.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers DeVinneBT, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefefe, #cfcfcf, #e7e7e7, #b8b8b8
- Typography stack: DeVinneBT, Akzidenz-GroteskProRegular, Akzidenz-GroteskProBold
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Luxury Archive - tags include fashion; description mentions collection; archetype affinity: spatial exhibition world
- Secondary: Fan Shrine - tags include fashion; description mentions collection; archetype affinity: spatial exhibition world

### Interaction Archetype
- Archetype: Spatial Exhibition World (96% confidence)
- Why: tags include 3d-space; tags include fashion; description mentions 3d; description mentions room
- Core verbs: explore, focus, open
- Inputs: scroll, drag, tap, hover



## 3. Color Palette & Roles

- Color 1: #fefefe - canvas / dominant background
- Color 2: #cfcfcf - primary text or opposing surface
- Color 3: #e7e7e7 - accent / interactive signal
- Color 4: #b8b8b8 - supporting surface or hover state
- Color 5: #010101 - supporting surface or hover state
- Color 6: #a4a4a4 - supporting surface or hover state
- Color 7: #222222 - supporting surface or hover state
- Color 8: #575757 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: DeVinneBT
- Secondary: Akzidenz-GroteskProRegular
- Support: Akzidenz-GroteskProBold
- Support: Akzidenz-GroteskBQExtended
- Support: GTStandard-M
- Support: Inter

### Hierarchy Snapshot
- Heading sample: 28px / weight 400 / letter-spacing normal
- Body sample: 14px / weight 400 / line-height 18.2px
- Button sample: 14px / weight 400

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefefe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (fashion, 3d-space) imply the system is intentionally non-generic.
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text, and links inherit rgb(0, 0, 0) as the interaction signal.

## 6. Interaction Mechanics

- Primary model: spatial_exhibition_world
- Navigation structure: world / wayfinding ambient / friction medium
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

- Space type: 3d-world
- Camera behavior: rail
- Depth cues: perspective, occlusion, lighting
- HUD layering: overlay
- Render tier: webgl
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
- Required APIs or platform hooks: webgl

## 11. Implementation Checklist

- Complexity: high
- Required APIs: webgl
- Must-have mechanics:
  - Keep the camera shallow and legible; users should understand where they are after every move.
  - Use one authoritative detail layer so the 3D scene does not also carry dense copy.
  - Treat loading, texture size, and mobile fallback as product features, not cleanup.
- Nice-to-have embellishments:
  - tags include 3d-space
  - tags include fashion
  - description mentions 3d
  - description mentions room
- Mobile fallback: Switch to a guided tour with swipeable viewpoints and one-tap hotspot cycling instead of free camera control.
- Fallback path: guided-tour, reduced-motion
- Manual validation:
  - Camera or viewpoint changes preserve orientation.
  - Hotspots open clear detail states instead of ambiguous overlays.
  - Mobile uses guided viewpoints rather than broken free-camera controls.

## 12. Do's and Don'ts

### Do
- Use DeVinneBT consistently for headlines and interface labels.
- Keep the palette anchored to #fefefe, #cfcfcf, and #e7e7e7.
- Preserve the experimental posture signaled by the archive tags: fashion, 3d-space.
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

> Build this as a Luxury Archive page with a secondary cue from Fan Shrine using the Spatial Exhibition World interaction model. Keep DeVinneBT as the voice anchor, preserve the palette around #fefefe, #cfcfcf, #e7e7e7, drive the page through scroll, drag, tap, hover, and implement the mobile fallback as: Switch to a guided tour with swipeable viewpoints and one-tap hotspot cycling instead of free camera control.



## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/cloakroom-botter)
- Live site: https://botter.world/cloakroom
- Credits: Studio Fables, Trappist Monk,
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
