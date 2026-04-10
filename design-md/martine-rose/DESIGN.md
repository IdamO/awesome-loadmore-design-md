# Design System Inspiration of Martine Rose

## 1. Visual Theme & Atmosphere

Martine Rose reads as editorial fashion energy. The live capture resolves to a dark-leaning system built around #080707, #524c49, and accent notes from #4b3533. A real-time experience of Martine Rose's SS23 show, looping perpetually.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers vcr osd mono, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #080707, #524c49, #4b3533, #49423b
- Typography stack: vcr osd mono
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Fan Shrine - tags include fashion
- Secondary: Luxury Archive - tags include fashion

### Interaction Archetype
- Archetype: Toy Loop Microgame (63% confidence)
- Why: description mentions loop
- Core verbs: play, drag, reset
- Inputs: tap, drag



## 3. Color Palette & Roles

- Color 1: #080707 - canvas / dominant background
- Color 2: #524c49 - primary text or opposing surface
- Color 3: #4b3533 - accent / interactive signal
- Color 4: #49423b - supporting surface or hover state
- Color 5: #945959 - supporting surface or hover state
- Color 6: #493e40 - supporting surface or hover state
- Color 7: #3e3e40 - supporting surface or hover state
- Color 8: #c97576 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: vcr osd mono

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 18px / weight 400 / line-height 18px
- Button sample: 18px / weight 400

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#080707) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (fashion, video) imply the system is intentionally non-generic.
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(248, 147, 147) text, and links inherit #4b3533 as the interaction signal.

## 6. Interaction Mechanics

- Primary model: toy_loop_microgame
- Navigation structure: single-scene / wayfinding explicit / friction medium
- Navigation model: The loop is the page; everything else supports replay or escalation.
- State model: Instruction or teaser -> play loop -> reward or reveal -> reset.
- Must-keep mechanic: One simple rule, immediate feedback, short mastery loop, replayable in under a minute.

## 7. Motion System

- Density: high
- Cadence: continuous
- Triggers: pointer, physics
- Transition types: shuffle, pop, reset
- Physics level: heavy
- Motion recipe:
  - Prefer instant response plus elastic decay.
  - Show state pops or score pops clearly.
  - Make reset or replay feel ceremonial enough that users want another round.

## 8. Spatial Model

- Space type: layered-2d
- Camera behavior: fixed
- Depth cues: scale, occlusion
- HUD layering: overlay
- Render tier: canvas2d
- Primary depth cue in capture: none

## 9. Participation & State

- Participation mode: play
- Persistence: ephemeral
- Inputs to preserve: tap, drag
- Reset/save posture: Default to resettable, lightweight state changes.

## 10. Sound & Sensor Behavior

- Audio role: none
- Audio triggers: none
- Controls: none
- Sync: none
- Required APIs or platform hooks: canvas

## 11. Implementation Checklist

- Complexity: high
- Required APIs: canvas
- Must-have mechanics:
  - Explain the rule through interaction, not a paragraph.
  - Keep the mastery loop short and replayable.
  - If the toy is the hook, let it start above the fold.
- Nice-to-have embellishments:
  - description mentions loop
- Mobile fallback: Keep only tap and drag; remove precision mechanics, shorten the loop, and enlarge hit targets.
- Fallback path: reduced-motion
- Manual validation:
  - The rule is clear after one attempt.
  - The loop completes quickly and invites replay.
  - Mobile keeps the same toy, not a broken imitation of desktop controls.

## 12. Do's and Don'ts

### Do
- Use vcr osd mono consistently for headlines and interface labels.
- Keep the palette anchored to #080707, #524c49, and #4b3533.
- Preserve the experimental posture signaled by the archive tags: fashion, video.
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
- Implement mobile as: Keep only tap and drag; remove precision mechanics, shorten the loop, and enlarge hit targets..
- If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build this as a Fan Shrine page with a secondary cue from Luxury Archive using the Toy Loop Microgame interaction model. Keep vcr osd mono as the voice anchor, preserve the palette around #080707, #524c49, #4b3533, drive the page through tap, drag, and implement the mobile fallback as: Keep only tap and drag; remove precision mechanics, shorten the loop, and enlarge hit targets.



## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/martine-rose)
- Live site: https://ss23.martine-rose.com/
- Credits: International Magic
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
