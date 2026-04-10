# Design System Inspiration of Xuan Ye

## 1. Visual Theme & Atmosphere

Xuan Ye reads as spatial depth. The live capture resolves to a dark-leaning system built around #655574, #381e58, and accent notes from #959298. Interactive 3D word cloud reacting when touched. Play with it: move around it or drag its intertwined elements.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers instrumentSans, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #655574, #381e58, #959298, #4a3262
- Typography stack: instrumentSans, instrumentSans Fallback
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Luxury Archive - archetype affinity: spatial exhibition world
- Secondary: Playable Poster - tags include tactile; description mentions drag

### Interaction Archetype
- Archetype: Spatial Exhibition World (96% confidence)
- Why: tags include 3d-space; description mentions 3d; sticky stage; sticky layout
- Core verbs: explore, focus, open, drag
- Inputs: scroll, drag, tap, hover



## 3. Color Palette & Roles

- Color 1: #655574 - canvas / dominant background
- Color 2: #381e58 - primary text or opposing surface
- Color 3: #959298 - accent / interactive signal
- Color 4: #4a3262 - supporting surface or hover state
- Color 5: #786e83 - supporting surface or hover state
- Color 6: #83798b - supporting surface or hover state
- Color 7: #c6c5c6 - supporting surface or hover state
- Color 8: #bebac1 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: instrumentSans
- Secondary: instrumentSans Fallback

### Hierarchy Snapshot
- Heading sample: 24px / weight 400 / letter-spacing normal
- Body sample: 24px / weight 400 / line-height 32px
- Button sample: n/a / weight n/a

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#655574) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (tactile, portfolio, 3d-space) imply the system is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit rgb(60, 10, 67) as the interaction signal.

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
- Primary depth cue in capture: flat surfaces / contrast-only separation

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
  - description mentions 3d
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
- Use instrumentSans consistently for headlines and interface labels.
- Keep the palette anchored to #655574, #381e58, and #959298.
- Preserve the experimental posture signaled by the archive tags: tactile, portfolio, 3d-space.
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

> Build this as a Luxury Archive page with a secondary cue from Playable Poster using the Spatial Exhibition World interaction model. Keep instrumentSans as the voice anchor, preserve the palette around #655574, #381e58, #959298, drive the page through scroll, drag, tap, hover, and implement the mobile fallback as: Switch to a guided tour with swipeable viewpoints and one-tap hotspot cycling instead of free camera control.


## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/xuan-ye)
- Live site: https://a.pureapparat.us/
- Credits: Xuan Ye 叶轩
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
