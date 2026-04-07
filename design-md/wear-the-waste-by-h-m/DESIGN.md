# Design System Inspiration of Wear The Waste by H&M

## 1. Visual Theme & Atmosphere

Wear The Waste by H&M reads as editorial fashion energy. The live capture resolves to a light-leaning system built around #f1f4f9, #5374a4, and accent notes from #53622f. This H&M campaign offers a delicate browsing among the clouds. Smooth camera movements and sleak animations.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f1f4f9, #5374a4, #53622f, #6587b4
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Playable Poster - description mentions campaign; archetype affinity: playable poster
- Secondary: Fan Shrine - tags include fashion

### Interaction Archetype
- Archetype: Playable Poster (66% confidence)
- Why: description mentions campaign
- Core verbs: reveal, distort, stage
- Inputs: scroll, tap, hover

## 3. Color Palette & Roles

- Color 1: #f1f4f9 - canvas / dominant background
- Color 2: #5374a4 - primary text or opposing surface
- Color 3: #53622f - accent / interactive signal
- Color 4: #6587b4 - supporting surface or hover state
- Color 5: #b5c9df - supporting surface or hover state
- Color 6: #99b1ce - supporting surface or hover state
- Color 7: #75854f - supporting surface or hover state
- Color 8: #6a7947 - supporting surface or hover state

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
- Let the main background color (#f1f4f9) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (fashion) imply the site is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit #53622f as the interaction signal.

## 6. Interaction Mechanics

- Primary model: playable_poster
- Navigation structure: single-scene / wayfinding explicit / friction low
- Navigation model: The page behaves like one campaign object or a short sequence of staged frames.
- State model: Poster at rest -> big reveal -> one interactive transformation -> rest or reset.
- Must-keep mechanic: One-screen poster composition with one or two high-conviction interactions such as drag, reveal, type morph, or hover distort.

## 7. Motion System

- Density: high
- Cadence: event-driven
- Triggers: pointer, time, scroll
- Transition types: morph, draw-on, shuffle
- Physics level: light
- Motion recipe:
  - Lead with one ceremonial entrance.
  - Use oversized type or graphic elements as moving actors, not background garnish.
  - Keep only one hero gesture alive on mobile.

## 8. Spatial Model

- Space type: layered-2d
- Camera behavior: fixed
- Depth cues: scale, occlusion
- HUD layering: overlay
- Render tier: dom
- Primary depth cue in capture: flat surfaces / contrast-only separation

## 9. Participation & State

- Participation mode: none
- Persistence: ephemeral
- Inputs to preserve: scroll, tap, hover
- Reset/save posture: Default to resettable, lightweight state changes.

## 10. Sound & Sensor Behavior

- Audio role: none
- Audio triggers: none
- Controls: none
- Sync: none
- Required APIs or platform hooks: none

## 11. Implementation Checklist

- Complexity: medium
- Required APIs: none
- Must-have mechanics:
  - This entry relies on archival fallback captures, so use the visual direction literally and the interaction model heuristically.
  - Use scale, typography, and dead space aggressively; do not fill every region with content.
  - Keep the interaction count low and the conviction high.
  - If a visual move is the identity, it should land before the user sees the CTA.
  - Live DOM analysis was sparse, so the description and tags carry more weight than sampled interface tokens.
- Nice-to-have embellishments:
  - description mentions campaign
- Mobile fallback: Split the poster into two to four scenes, preserve one hero interaction, and drop hover-only secondary behavior.
- Fallback path: reduced-motion, static-poster
- Manual validation:
  - The hero gesture is obvious in under three seconds.
  - Desktop and mobile preserve the same campaign idea with different staging.
  - Typography remains part of the interaction system.
  - Before shipping, manually verify any interaction that the capture could not prove live.
  - Cross-check screenshots against the description so the interaction model does not drift away from the source premise.

## 12. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #f1f4f9, #5374a4, and #53622f.
- Preserve the experimental posture signaled by the loadmo.re tags: fashion.
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
- Implement mobile as: Split the poster into two to four scenes, preserve one hero interaction, and drop hover-only secondary behavior..
- If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build this as a Playable Poster page with a secondary cue from Fan Shrine using the Playable Poster interaction model. Keep the extracted primary font as the voice anchor, preserve the palette around #f1f4f9, #5374a4, #53622f, drive the page through scroll, tap, hover, and implement the mobile fallback as: Split the poster into two to four scenes, preserve one hero interaction, and drop hover-only secondary behavior.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/wear-the-waste-by-h-m)
- Live site: https://wearthewaste.com/
- Credits: Julian Garnier
- Capture mode: archival-fallback
- Desktop capture: failed
- Mobile capture: failed
- Archival fallback: poster image used for missing screenshots
