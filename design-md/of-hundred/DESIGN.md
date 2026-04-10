# Design System Inspiration of Of Hundred

## 1. Visual Theme & Atmosphere

Of Hundred reads as restrained minimalism, sonic pacing. The live capture resolves to a light-leaning system built around #fdfcfc, #ebaba8, and accent notes from #ec5e5a. Online radio show that curates various range of sounds.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers NHaasGroteskDSPro-95Blk, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fdfcfc, #ebaba8, #ec5e5a, #ed322c
- Typography stack: NHaasGroteskDSPro-95Blk, Swiss721BT-Regular
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Club Instrument - tags include music; description mentions sound; description mentions radio
- Secondary: Fan Shrine - tags include music

### Interaction Archetype
- Archetype: Club Instrument (96% confidence)
- Why: tags include music; description mentions sound; description mentions radio
- Core verbs: trigger, press, mix
- Inputs: tap, drag, press



## 3. Color Palette & Roles

- Color 1: #fdfcfc - canvas / dominant background
- Color 2: #ebaba8 - primary text or opposing surface
- Color 3: #ec5e5a - accent / interactive signal
- Color 4: #ed322c - supporting surface or hover state
- Color 5: #ecc0bd - supporting surface or hover state
- Color 6: #ec423c - supporting surface or hover state
- Color 7: #ee817d - supporting surface or hover state
- Color 8: #e6bec1 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: NHaasGroteskDSPro-95Blk
- Secondary: Swiss721BT-Regular

### Hierarchy Snapshot
- Heading sample: 76px / weight 300 / letter-spacing normal
- Body sample: 14px / weight 300 / line-height normal
- Button sample: 14px / weight 400

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fdfcfc) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (music, minimal) imply the system is intentionally non-generic.
- Buttons tend toward rgb(255, 255, 255) backgrounds with rgb(238, 56, 49) text, and links inherit rgb(0, 0, 238) as the interaction signal.

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
- Nice-to-have embellishments:
  - tags include music
  - description mentions sound
  - description mentions radio
- Mobile fallback: Collapse to one active control strip, one focal stage, and tap-to-trigger presets instead of a dense multi-panel control surface.
- Fallback path: mute-first, reduced-motion
- Manual validation:
  - Gesture-to-sound response feels immediate after user intent.
  - The main control loop is readable in one glance.
  - Mobile keeps one clear control path rather than shrinking every panel.

## 12. Do's and Don'ts

### Do
- Use NHaasGroteskDSPro-95Blk consistently for headlines and interface labels.
- Keep the palette anchored to #fdfcfc, #ebaba8, and #ec5e5a.
- Preserve the experimental posture signaled by the archive tags: music, minimal.
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

> Build this as a Club Instrument page with a secondary cue from Fan Shrine using the Club Instrument interaction model. Keep NHaasGroteskDSPro-95Blk as the voice anchor, preserve the palette around #fdfcfc, #ebaba8, #ec5e5a, drive the page through tap, drag, press, and implement the mobile fallback as: Collapse to one active control strip, one focal stage, and tap-to-trigger presets instead of a dense multi-panel control surface.


## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/of-hundred)
- Live site: https://ofhundred.com/
- Credits: David Rindlisbacher, Arne Spremberg
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
