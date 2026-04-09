# Design System Inspiration of Rude Captcha

## 1. Visual Theme & Atmosphere

Rude Captcha reads as playful interaction. The live capture resolves to a dark-leaning system built around #7e7e7e, #f4f5f5, and accent notes from #9b9ea4. Because AI can't be rude.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Material Icons, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #7e7e7e, #f4f5f5, #9b9ea4, #1f427b
- Typography stack: Material Icons
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Playable Poster - tags include playful; archetype affinity: toy loop microgame
- Secondary: Collage Core - tags include playful; archetype affinity: toy loop microgame

### Interaction Archetype
- Archetype: Toy Loop Microgame (70% confidence)
- Why: tags include playful; tags include participative
- Core verbs: play, drag, reset
- Inputs: tap, drag



## 3. Color Palette & Roles

- Color 1: #7e7e7e - canvas / dominant background
- Color 2: #f4f5f5 - primary text or opposing surface
- Color 3: #9b9ea4 - accent / interactive signal
- Color 4: #1f427b - supporting surface or hover state
- Color 5: #b7bcc5 - supporting surface or hover state
- Color 6: #153a76 - supporting surface or hover state
- Color 7: #7b7d81 - supporting surface or hover state
- Color 8: #7086a4 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Material Icons

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 28px
- Button sample: 20px / weight 700

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#7e7e7e) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful, participative, photography) imply the system is intentionally non-generic.
- Buttons tend toward rgb(156, 163, 175) backgrounds with rgb(255, 255, 255) text, and links inherit #9b9ea4 as the interaction signal.

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
- Primary depth cue in capture: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px

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
  - tags include playful
  - tags include participative
- Mobile fallback: Keep only tap and drag; remove precision mechanics, shorten the loop, and enlarge hit targets.
- Fallback path: reduced-motion
- Manual validation:
  - The rule is clear after one attempt.
  - The loop completes quickly and invites replay.
  - Mobile keeps the same toy, not a broken imitation of desktop controls.

## 12. Do's and Don'ts

### Do
- Use Material Icons consistently for headlines and interface labels.
- Keep the palette anchored to #7e7e7e, #f4f5f5, and #9b9ea4.
- Preserve the experimental posture signaled by the archive tags: playful, participative, photography.
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

> Build this as a Playable Poster page with a secondary cue from Collage Core using the Toy Loop Microgame interaction model. Keep Material Icons as the voice anchor, preserve the palette around #7e7e7e, #f4f5f5, #9b9ea4, drive the page through tap, drag, and implement the mobile fallback as: Keep only tap and drag; remove precision mechanics, shorten the loop, and enlarge hit targets.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/rude-captcha)
- Live site: http://rudecaptcha.xyz
- Credits: Matt Gordon
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
