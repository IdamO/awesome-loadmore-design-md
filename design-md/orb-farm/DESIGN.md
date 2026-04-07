# Design System Inspiration of Orb Farm

## 1. Visual Theme & Atmosphere

Orb Farm reads as playful interaction, retro-computing cues. The live capture resolves to a light-leaning system built around #c7c7c7, #677789, and accent notes from #949fa8. A cute and quirky aquatic organism invites you to interact with its retro environment, where you can nurture, sculpt and observe.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Pixelated MS Sans Serif, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #c7c7c7, #677789, #949fa8, #758695
- Typography stack: Pixelated MS Sans Serif, pixelmixregular, times16
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Cozy Desktop - tags include retro; tags include default-aesthetics
- Secondary: Collage Core - tags include net.art; tags include retro; archetype affinity: toy loop microgame

### Interaction Archetype
- Archetype: Toy Loop Microgame (96% confidence)
- Why: tags include game; tags include net.art; description mentions nurture; description mentions sculpt
- Core verbs: play, drag, reset
- Inputs: tap, drag

## 3. Color Palette & Roles

- Color 1: #c7c7c7 - canvas / dominant background
- Color 2: #677789 - primary text or opposing surface
- Color 3: #949fa8 - accent / interactive signal
- Color 4: #758695 - supporting surface or hover state
- Color 5: #626e77 - supporting surface or hover state
- Color 6: #e09fdc - supporting surface or hover state
- Color 7: #c0c0be - supporting surface or hover state
- Color 8: #b7b7c3 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Pixelated MS Sans Serif
- Secondary: pixelmixregular
- Support: times16

### Hierarchy Snapshot
- Heading sample: 18px / weight 700 / letter-spacing normal
- Body sample: 18px / weight 400 / line-height normal
- Button sample: 11px / weight 400

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#c7c7c7) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (game, retro, net.art, default-aesthetics) imply the site is intentionally non-generic.
- Buttons tend toward rgb(192, 192, 192) backgrounds with rgba(0, 0, 0, 0) text, and links inherit rgb(0, 0, 255) as the interaction signal.

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
- Primary depth cue in capture: rgb(10, 10, 10) -1px -1px 0px 0px inset, rgb(255, 255, 255) 1px 1px 0px 0px inset, rgb(128, 128, 128) -2px -2px 0px 0px inset, rgb(223, 223, 223) 2px 2px 0px 0px inset

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
  - tags include game
  - tags include net.art
  - description mentions nurture
  - description mentions sculpt
  - description mentions observe
  - description mentions interact
- Mobile fallback: Keep only tap and drag; remove precision mechanics, shorten the loop, and enlarge hit targets.
- Fallback path: reduced-motion
- Manual validation:
  - The rule is clear after one attempt.
  - The loop completes quickly and invites replay.
  - Mobile keeps the same toy, not a broken imitation of desktop controls.

## 12. Do's and Don'ts

### Do
- Use Pixelated MS Sans Serif consistently for headlines and interface labels.
- Keep the palette anchored to #c7c7c7, #677789, and #949fa8.
- Preserve the experimental posture signaled by the loadmo.re tags: game, retro, net.art, default-aesthetics.
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

> Build this as a Cozy Desktop page with a secondary cue from Collage Core using the Toy Loop Microgame interaction model. Keep Pixelated MS Sans Serif as the voice anchor, preserve the palette around #c7c7c7, #677789, #949fa8, drive the page through tap, drag, and implement the mobile fallback as: Keep only tap and drag; remove precision mechanics, shorten the loop, and enlarge hit targets.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/orb-farm)
- Live site: https://orb.farm/
- Credits: Max Bittker
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
