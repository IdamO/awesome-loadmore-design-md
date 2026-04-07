# Design System Inspiration of Studio Runk

## 1. Visual Theme & Atmosphere

Studio Runk reads as playful interaction. The live capture resolves to a light-leaning system built around #fcfcfb, #fde36e, and accent notes from #e34f3b. Super playful and smart interface that makes you try screen printing online.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fcfcfb, #fde36e, #e34f3b, #5b131b
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Collage Core - tags include colorful; tags include playful; archetype affinity: toy loop microgame
- Secondary: Playable Poster - tags include colorful; tags include playful; archetype affinity: toy loop microgame

### Interaction Archetype
- Archetype: Toy Loop Microgame (76% confidence)
- Why: tags include playful; tags include colorful; description mentions play
- Core verbs: play, drag, reset
- Inputs: tap, drag

## 3. Color Palette & Roles

- Color 1: #fcfcfb - canvas / dominant background
- Color 2: #fde36e - primary text or opposing surface
- Color 3: #e34f3b - accent / interactive signal
- Color 4: #5b131b - supporting surface or hover state
- Color 5: #c33026 - supporting surface or hover state
- Color 6: #ee8f44 - supporting surface or hover state
- Color 7: #a3a3a3 - supporting surface or hover state
- Color 8: #5f5f5f - supporting surface or hover state

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
- Let the main background color (#fcfcfb) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful, colorful) imply the site is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit #e34f3b as the interaction signal.

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
- Primary depth cue in capture: flat surfaces / contrast-only separation

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
  - This entry relies on archival fallback captures, so use the visual direction literally and the interaction model heuristically.
  - Explain the rule through interaction, not a paragraph.
  - Keep the mastery loop short and replayable.
  - If the toy is the hook, let it start above the fold.
  - Live DOM analysis was sparse, so the description and tags carry more weight than sampled interface tokens.
- Nice-to-have embellishments:
  - tags include playful
  - tags include colorful
  - description mentions play
- Mobile fallback: Keep only tap and drag; remove precision mechanics, shorten the loop, and enlarge hit targets.
- Fallback path: reduced-motion
- Manual validation:
  - The rule is clear after one attempt.
  - The loop completes quickly and invites replay.
  - Mobile keeps the same toy, not a broken imitation of desktop controls.
  - Before shipping, manually verify any interaction that the capture could not prove live.
  - Cross-check screenshots against the description so the interaction model does not drift away from the source premise.

## 12. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #fcfcfb, #fde36e, and #e34f3b.
- Preserve the experimental posture signaled by the loadmo.re tags: playful, colorful.
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

> Build this as a Collage Core page with a secondary cue from Playable Poster using the Toy Loop Microgame interaction model. Keep the extracted primary font as the voice anchor, preserve the palette around #fcfcfb, #fde36e, #e34f3b, drive the page through tap, drag, and implement the mobile fallback as: Keep only tap and drag; remove precision mechanics, shorten the loop, and enlarge hit targets.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/studio-runk)
- Live site: https://studiorunk.com/
- Credits: not listed
- Capture mode: archival-fallback
- Desktop capture: failed
- Mobile capture: failed
- Archival fallback: poster image used for missing screenshots
