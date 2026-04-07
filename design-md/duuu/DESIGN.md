# Design System Inspiration of Duuu

## 1. Visual Theme & Atmosphere

Duuu reads as restrained minimalism, sonic pacing. The live capture resolves to a light-leaning system built around #f9f9f9, #a5a6a6, and accent notes from #070707. Minimalist and grid-based design for an online radio.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers NeueHaasGrotText-55Roman-Web, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f9f9f9, #a5a6a6, #070707, #5d5d5d
- Typography stack: NeueHaasGrotText-55Roman-Web, NeueHaasGrotText-56Italic-Web
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Club Instrument - tags include music; description mentions radio; archetype affinity: club instrument
- Secondary: Fan Shrine - tags include music

### Interaction Archetype
- Archetype: Club Instrument (85% confidence)
- Why: tags include music; description mentions radio
- Core verbs: trigger, press, mix
- Inputs: tap, drag, press

## 3. Color Palette & Roles

- Color 1: #f9f9f9 - canvas / dominant background
- Color 2: #a5a6a6 - primary text or opposing surface
- Color 3: #070707 - accent / interactive signal
- Color 4: #5d5d5d - supporting surface or hover state
- Color 5: #bfc1c0 - supporting surface or hover state
- Color 6: #7f8180 - supporting surface or hover state
- Color 7: #7e807f - supporting surface or hover state
- Color 8: #bec0bf - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: NeueHaasGrotText-55Roman-Web
- Secondary: NeueHaasGrotText-56Italic-Web

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 46.8px / weight 400 / line-height 48.96px
- Button sample: n/a / weight n/a

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f9f9f9) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (music, minimal) imply the site is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit rgb(0, 0, 0) as the interaction signal.

## 6. Interaction Mechanics

- Primary model: club_instrument
- Navigation structure: single-scene / wayfinding explicit / friction low
- Navigation model: The hero stage is primary; secondary controls tune the same live system instead of opening unrelated sections.
- State model: Idle pulse -> active press/gesture -> audible or visual response -> decay/settle.
- Must-keep mechanic: Single hero stage plus reactive controls; user input changes sound or system state immediately; the interface should feel like an instrument, not a dashboard.

## 7. Motion System

- Density: medium
- Cadence: tempo-linked
- Triggers: pointer, time
- Transition types: pulse, meter-fill, glow
- Physics level: light
- Motion recipe:
  - Keep one ambient pulse running behind the page.
  - Tie meter fills, glows, or counters to direct user input.
  - Use press feedback that resolves in under 180ms.

## 8. Spatial Model

- Space type: layered-2d
- Camera behavior: fixed
- Depth cues: scale, lighting
- HUD layering: overlay
- Render tier: mixed
- Primary depth cue in capture: flat surfaces / contrast-only separation

## 9. Participation & State

- Participation mode: compose
- Persistence: ephemeral
- Inputs to preserve: tap, drag, press
- Reset/save posture: Default to resettable, lightweight state changes.

## 10. Sound & Sensor Behavior

- Audio role: instrument
- Audio triggers: press, drag
- Controls: mute, play-pause
- Sync: tight
- Required APIs or platform hooks: webaudio

## 11. Implementation Checklist

- Complexity: high
- Required APIs: webaudio
- Must-have mechanics:
  - Keep latency visibly and audibly tight; delayed response kills the instrument illusion.
  - Treat meters, counters, or glows as live telemetry, not decoration.
  - Gate autoplay and heavy audio initialization until the first explicit gesture.
  - The capture suggests anchored framing or sticky context; preserve that orientation device in the rebuild.
- Nice-to-have embellishments:
  - tags include music
  - description mentions radio
- Mobile fallback: Collapse to one active control strip, one focal stage, and tap-to-trigger presets instead of a dense multi-panel control surface.
- Fallback path: mute-first, reduced-motion
- Manual validation:
  - Gesture-to-sound response feels immediate after user intent.
  - The main control loop is readable in one glance.
  - Mobile keeps one clear control path rather than shrinking every panel.

## 12. Do's and Don'ts

### Do
- Use NeueHaasGrotText-55Roman-Web consistently for headlines and interface labels.
- Keep the palette anchored to #f9f9f9, #a5a6a6, and #070707.
- Preserve the experimental posture signaled by the loadmo.re tags: music, minimal.
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
- Implement mobile as: Collapse to one active control strip, one focal stage, and tap-to-trigger presets instead of a dense multi-panel control surface..
- If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build this as a Club Instrument page with a secondary cue from Fan Shrine using the Club Instrument interaction model. Keep NeueHaasGrotText-55Roman-Web as the voice anchor, preserve the palette around #f9f9f9, #a5a6a6, #070707, drive the page through tap, drag, press, and implement the mobile fallback as: Collapse to one active control strip, one focal stage, and tap-to-trigger presets instead of a dense multi-panel control surface.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/duuu)
- Live site: https://duuuradio.fr/
- Credits: Spassky Fischer Frédéric Jaman Manon Bruet Quentin Creuzet
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
