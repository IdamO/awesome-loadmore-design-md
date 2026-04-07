# Design System Inspiration of Scale to Infinity, Audrey Large

## 1. Visual Theme & Atmosphere

Scale to Infinity, Audrey Large reads as spatial depth, exhibition-like framing. The live capture resolves to a dark-leaning system built around #afadb0, #c6c4c7, and accent notes from #546562. 3D looks just amazing, interface is nicely done, interactivity and transitions are just great. I kind of wish I had designed that website tbh.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #afadb0, #c6c4c7, #546562, #685128
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Luxury Archive - tags include arts&culture; tags include digital-exhibition; archetype affinity: spatial exhibition world
- Secondary: Club Instrument - tags include 3d-space

### Interaction Archetype
- Archetype: Spatial Exhibition World (96% confidence)
- Why: tags include 3d-space; tags include digital-exhibition; tags include arts&culture; description mentions 3d
- Core verbs: explore, focus, open
- Inputs: scroll, drag, tap, hover

## 3. Color Palette & Roles

- Color 1: #afadb0 - canvas / dominant background
- Color 2: #c6c4c7 - primary text or opposing surface
- Color 3: #546562 - accent / interactive signal
- Color 4: #685128 - supporting surface or hover state
- Color 5: #325d51 - supporting surface or hover state
- Color 6: #c0bec1 - supporting surface or hover state
- Color 7: #a8905b - supporting surface or hover state
- Color 8: #272a29 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: n/a / weight n/a / line-height normal
- Button sample: n/a / weight n/a

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#afadb0) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (digital-exhibition, arts&culture, 3d-space) imply the site is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit #546562 as the interaction signal.

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
  - This entry relies on archival fallback captures, so use the visual direction literally and the interaction model heuristically.
  - Keep the camera shallow and legible; users should understand where they are after every move.
  - Use one authoritative detail layer so the 3D scene does not also carry dense copy.
  - Treat loading, texture size, and mobile fallback as product features, not cleanup.
  - Live DOM analysis was sparse, so the description and tags carry more weight than sampled interface tokens.
- Nice-to-have embellishments:
  - tags include 3d-space
  - tags include digital-exhibition
  - tags include arts&culture
  - description mentions 3d
- Mobile fallback: Switch to a guided tour with swipeable viewpoints and one-tap hotspot cycling instead of free camera control.
- Fallback path: guided-tour, reduced-motion
- Manual validation:
  - Camera or viewpoint changes preserve orientation.
  - Hotspots open clear detail states instead of ambiguous overlays.
  - Mobile uses guided viewpoints rather than broken free-camera controls.
  - Before shipping, manually verify any interaction that the capture could not prove live.
  - Cross-check screenshots against the description so the interaction model does not drift away from the source premise.

## 12. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #afadb0, #c6c4c7, and #546562.
- Preserve the experimental posture signaled by the loadmo.re tags: digital-exhibition, arts&culture, 3d-space.
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

> Build this as a Luxury Archive page with a secondary cue from Club Instrument using the Spatial Exhibition World interaction model. Keep the extracted primary font as the voice anchor, preserve the palette around #afadb0, #c6c4c7, #546562, drive the page through scroll, drag, tap, hover, and implement the mobile fallback as: Switch to a guided tour with swipeable viewpoints and one-tap hotspot cycling instead of free camera control.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/scale-to-infinity-audrey-large)
- Live site: https://scaletoinfinity.nilufar.com/
- Credits: Studio Vedet, Audrey Large
- Capture mode: archival-fallback
- Desktop capture: failed
- Mobile capture: failed
- Archival fallback: poster image used for missing screenshots
