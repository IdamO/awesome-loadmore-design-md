# Design System Inspiration of ZOO

## 1. Visual Theme & Atmosphere

ZOO reads as spatial depth, exhibition-like framing. The live capture resolves to a dark-leaning system built around #373737, #cfcfcf, and accent notes from #aeaeae. The Pentagram team has designed a generative museum of curiosities for Zoo agency. It includes a bespoke soundtrack and a VIRTUAL ELEVATOR!

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #373737, #cfcfcf, #aeaeae, #444444
- Typography stack: system fallback
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Luxury Archive - tags include digital-exhibition; description mentions museum; archetype affinity: spatial exhibition world
- Secondary: Club Instrument - tags include 3d-space; description mentions sound

### Interaction Archetype
- Archetype: Spatial Exhibition World (96% confidence)
- Why: tags include 3d-space; tags include digital-exhibition; description mentions virtual; sticky stage
- Core verbs: explore, focus, open
- Inputs: scroll, drag, tap, hover



## 3. Color Palette & Roles

- Color 1: #373737 - canvas / dominant background
- Color 2: #cfcfcf - primary text or opposing surface
- Color 3: #aeaeae - accent / interactive signal
- Color 4: #444444 - supporting surface or hover state
- Color 5: #262f58 - supporting surface or hover state
- Color 6: #4b68ea - supporting surface or hover state
- Color 7: #394b57 - supporting surface or hover state
- Color 8: #52d7e5 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: 115.2px / weight 400 / letter-spacing normal
- Body sample: 16px / weight 200 / line-height normal
- Button sample: 13.3333px / weight 400

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#373737) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (3d-space, colorful, digital-exhibition) imply the system is intentionally non-generic.
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text, and links inherit #aeaeae as the interaction signal.

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
  - The capture suggests anchored framing or sticky context; preserve that orientation device in the rebuild.
- Nice-to-have embellishments:
  - tags include 3d-space
  - tags include digital-exhibition
  - description mentions virtual
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
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #373737, #cfcfcf, and #aeaeae.
- Preserve the experimental posture signaled by the archive tags: 3d-space, colorful, digital-exhibition.
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

> Build this as a Luxury Archive page with a secondary cue from Club Instrument using the Spatial Exhibition World interaction model. Keep the extracted primary font as the voice anchor, preserve the palette around #373737, #cfcfcf, #aeaeae, drive the page through scroll, drag, tap, hover, and implement the mobile fallback as: Switch to a guided tour with swipeable viewpoints and one-tap hotspot cycling instead of free camera control.



## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/zoo)
- Live site: https://zooaszoo.com
- Credits: Pentagram
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
