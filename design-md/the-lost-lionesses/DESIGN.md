# Design System Inspiration of The Lost Lionesses

## 1. Visual Theme & Atmosphere

The Lost Lionesses reads as editorial fashion energy, sonic pacing, spatial depth. The live capture resolves to a dark-leaning system built around #a29f98, #272620, and accent notes from #67655a. Impressive experience that offers a dive within a 3D world, surrounded with voiceovers and films.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers M+1m, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #a29f98, #272620, #67655a, #614a35
- Typography stack: M+1m, Neue Haas Grotesk Display, Neue Haas Grotesk Text
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Luxury Archive - tags include fashion; archetype affinity: spatial exhibition world
- Secondary: Club Instrument - tags include sound-design; tags include 3d-space

### Interaction Archetype
- Archetype: Spatial Exhibition World (96% confidence)
- Why: tags include 3d-space; tags include fashion; description mentions 3d; description mentions world
- Core verbs: explore, focus, open
- Inputs: scroll, drag, tap, hover



## 3. Color Palette & Roles

- Color 1: #a29f98 - canvas / dominant background
- Color 2: #272620 - primary text or opposing surface
- Color 3: #67655a - accent / interactive signal
- Color 4: #614a35 - supporting surface or hover state
- Color 5: #4f3526 - supporting surface or hover state
- Color 6: #8e7356 - supporting surface or hover state
- Color 7: #8e8772 - supporting surface or hover state
- Color 8: #996632 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: M+1m
- Secondary: Neue Haas Grotesk Display
- Support: Neue Haas Grotesk Text
- Support: mr-icons

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 22.4px
- Button sample: 16px / weight 500

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#a29f98) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (sound-design, 3d-space, fashion) imply the system is intentionally non-generic.
- Buttons tend toward rgb(236, 47, 29) backgrounds with rgb(255, 255, 255) text, and links inherit #67655a as the interaction signal.

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

- Audio role: ambient
- Audio triggers: entry, focus
- Controls: mute
- Sync: loose
- Required APIs or platform hooks: webgl

## 11. Implementation Checklist

- Complexity: high
- Required APIs: webgl
- Must-have mechanics:
  - Keep the camera shallow and legible; users should understand where they are after every move.
  - Use one authoritative detail layer so the 3D scene does not also carry dense copy.
  - Treat loading, texture size, and mobile fallback as product features, not cleanup.
  - The capture suggests anchored framing or sticky context; preserve that orientation device in the rebuild.
- Nice-to-have embellishments:
  - tags include 3d-space
  - tags include fashion
  - description mentions 3d
  - description mentions world
  - sticky stage
  - sticky layout
- Mobile fallback: Switch to a guided tour with swipeable viewpoints and one-tap hotspot cycling instead of free camera control.
- Fallback path: guided-tour, reduced-motion
- Manual validation:
  - Camera or viewpoint changes preserve orientation.
  - Hotspots open clear detail states instead of ambiguous overlays.
  - Mobile uses guided viewpoints rather than broken free-camera controls.

## 12. Do's and Don'ts

### Do
- Use M+1m consistently for headlines and interface labels.
- Keep the palette anchored to #a29f98, #272620, and #67655a.
- Preserve the experimental posture signaled by the archive tags: sound-design, 3d-space, fashion.
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

> Build this as a Luxury Archive page with a secondary cue from Club Instrument using the Spatial Exhibition World interaction model. Keep M+1m as the voice anchor, preserve the palette around #a29f98, #272620, #67655a, drive the page through scroll, drag, tap, hover, and implement the mobile fallback as: Switch to a guided tour with swipeable viewpoints and one-tap hotspot cycling instead of free camera control.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/the-lost-lionesses)
- Live site: https://nike.martine-rose.com/
- Credits: International Magic
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
