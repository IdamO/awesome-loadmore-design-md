# Design System Inspiration of Harley Weir

## 1. Visual Theme & Atmosphere

Harley Weir reads as editorial fashion energy, exhibition-like framing. The live capture resolves to a light-leaning system built around #f9f9f9, #5c6558, and accent notes from #2d2d26. This website presents interactive 3D scans of Harley Weir's ceramics pieces. One of them is a lady bust that speaks and welcomes you on the website.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Times Now, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f9f9f9, #5c6558, #2d2d26, #9aa298
- Typography stack: Times Now
- Desktop posture: fixed/sticky framing
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Luxury Archive - tags include arts&culture; tags include fashion; description mentions ceramics
- Secondary: Fan Shrine - tags include fashion; archetype affinity: spatial exhibition world

### Interaction Archetype
- Archetype: Spatial Exhibition World (96% confidence)
- Why: tags include arts&culture; tags include fashion; description mentions 3d; description mentions scan
- Core verbs: explore, focus, open
- Inputs: scroll, drag, tap, hover



## 3. Color Palette & Roles

- Color 1: #f9f9f9 - canvas / dominant background
- Color 2: #5c6558 - primary text or opposing surface
- Color 3: #2d2d26 - accent / interactive signal
- Color 4: #9aa298 - supporting surface or hover state
- Color 5: #4f4934 - supporting surface or hover state
- Color 6: #463a27 - supporting surface or hover state
- Color 7: #8b8d72 - supporting surface or hover state
- Color 8: #394d4e - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Times Now

### Hierarchy Snapshot
- Heading sample: 20px / weight 400 / letter-spacing normal
- Body sample: 20px / weight 400 / line-height 24px
- Button sample: n/a / weight n/a

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f9f9f9) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (arts&culture, fashion) imply the system is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit #2d2d26 as the interaction signal.

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

- Space type: 3d-object
- Camera behavior: orbit
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
  - tags include arts&culture
  - tags include fashion
  - description mentions 3d
  - description mentions scan
  - description mentions scans
  - description mentions ceramics
- Mobile fallback: Switch to a guided tour with swipeable viewpoints and one-tap hotspot cycling instead of free camera control.
- Fallback path: guided-tour, reduced-motion
- Manual validation:
  - Camera or viewpoint changes preserve orientation.
  - Hotspots open clear detail states instead of ambiguous overlays.
  - Mobile uses guided viewpoints rather than broken free-camera controls.

## 12. Do's and Don'ts

### Do
- Use Times Now consistently for headlines and interface labels.
- Keep the palette anchored to #f9f9f9, #5c6558, and #2d2d26.
- Preserve the experimental posture signaled by the archive tags: arts&culture, fashion.
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

> Build this as a Luxury Archive page with a secondary cue from Fan Shrine using the Spatial Exhibition World interaction model. Keep Times Now as the voice anchor, preserve the palette around #f9f9f9, #5c6558, #2d2d26, drive the page through scroll, drag, tap, hover, and implement the mobile fallback as: Switch to a guided tour with swipeable viewpoints and one-tap hotspot cycling instead of free camera control.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/harley-weir)
- Live site: http://harleyweir.com/
- Credits: DXR zone
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
