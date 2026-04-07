# Design System Inspiration of Somerset House’s Decentralise

## 1. Visual Theme & Atmosphere

Somerset House’s Decentralise reads as sonic pacing. The live capture resolves to a light-leaning system built around #f5f5f5, #a9a9a9, and accent notes from #5c5c5c. 'Decentralise' is an online platform which explore the history of Black British art, through engaging with 16 key objects from Somerset House exhibition.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Grotesk, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f5f5f5, #a9a9a9, #5c5c5c, #2f4dbc
- Typography stack: Grotesk, Roman, hotjar
- Desktop posture: flowing document rhythm
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Club Instrument - tags include sound-design; archetype affinity: club instrument
- Secondary: Luxury Archive - description mentions exhibition; description mentions objects

### Interaction Archetype
- Archetype: Club Instrument (60% confidence)
- Why: tags include sound-design
- Core verbs: trigger, press, mix
- Inputs: tap, drag, press

## 3. Color Palette & Roles

- Color 1: #f5f5f5 - canvas / dominant background
- Color 2: #a9a9a9 - primary text or opposing surface
- Color 3: #5c5c5c - accent / interactive signal
- Color 4: #2f4dbc - supporting surface or hover state
- Color 5: #2c2c2c - supporting surface or hover state
- Color 6: #5670d2 - supporting surface or hover state
- Color 7: #0429f9 - supporting surface or hover state
- Color 8: #3656eb - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Grotesk
- Secondary: Roman
- Support: hotjar
- Support: roboto

### Hierarchy Snapshot
- Heading sample: 30px / weight 400 / letter-spacing 2%
- Body sample: 14px / weight 400 / line-height 19.6px
- Button sample: 14px / weight 400

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f5f5f5) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (tactile, illustration, sound-design) imply the site is intentionally non-generic.
- Buttons tend toward rgb(255, 255, 255) backgrounds with rgb(0, 0, 0) text, and links inherit rgb(0, 0, 0) as the interaction signal.

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
- Primary depth cue in capture: none

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
  - tags include sound-design
- Mobile fallback: Collapse to one active control strip, one focal stage, and tap-to-trigger presets instead of a dense multi-panel control surface.
- Fallback path: mute-first, reduced-motion
- Manual validation:
  - Gesture-to-sound response feels immediate after user intent.
  - The main control loop is readable in one glance.
  - Mobile keeps one clear control path rather than shrinking every panel.

## 12. Do's and Don'ts

### Do
- Use Grotesk consistently for headlines and interface labels.
- Keep the palette anchored to #f5f5f5, #a9a9a9, and #5c5c5c.
- Preserve the experimental posture signaled by the loadmo.re tags: tactile, illustration, sound-design.
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

> Build this as a Club Instrument page with a secondary cue from Luxury Archive using the Club Instrument interaction model. Keep Grotesk as the voice anchor, preserve the palette around #f5f5f5, #a9a9a9, #5c5c5c, drive the page through tap, drag, press, and implement the mobile fallback as: Collapse to one active control strip, one focal stage, and tap-to-trigger presets instead of a dense multi-panel control surface.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/somerset-house-s-decentralise)
- Live site: https://www.somersethouse.org.uk/blog/decentralise
- Credits: COMUZI, DxR Zone & Somerset House
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
