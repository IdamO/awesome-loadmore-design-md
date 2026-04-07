# Design System Inspiration of UNVEIL

## 1. Visual Theme & Atmosphere

UNVEIL reads as restrained minimalism. The live capture resolves to a light-leaning system built around #f6f5f4, #181819, and accent notes from #a4a39d. Elegant portfolio where scrolling through projects feels like flipping through a stack of records.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers nb_international_proregular, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f6f5f4, #181819, #a4a39d, #5d5f5f
- Typography stack: nb_international_proregular
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Luxury Archive - tags include minimal; archetype affinity: portfolio artifact
- Secondary: Fan Shrine - tags include portfolio; archetype affinity: portfolio artifact

### Interaction Archetype
- Archetype: Portfolio Artifact (96% confidence)
- Why: tags include portfolio; tags include minimal; description mentions portfolio; description mentions projects
- Core verbs: read, browse, contact, scroll
- Inputs: scroll, tap

## 3. Color Palette & Roles

- Color 1: #f6f5f4 - canvas / dominant background
- Color 2: #181819 - primary text or opposing surface
- Color 3: #a4a39d - accent / interactive signal
- Color 4: #5d5f5f - supporting surface or hover state
- Color 5: #c9c9b5 - supporting surface or hover state
- Color 6: #d09e9c - supporting surface or hover state
- Color 7: #a6625f - supporting surface or hover state
- Color 8: #8f9077 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: nb_international_proregular

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 24px
- Button sample: 10.5px / weight 400

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f6f5f4) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (tactile, minimal, portfolio) imply the site is intentionally non-generic.
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text, and links inherit rgb(0, 0, 0) as the interaction signal.

## 6. Interaction Mechanics

- Primary model: portfolio_artifact
- Navigation structure: linear / wayfinding ambient / friction low
- Navigation model: The author voice or project sequence leads; navigation stays secondary and quiet.
- State model: Arrival -> authored sequence of text, image, or projects -> contact or archive state.
- Must-keep mechanic: Asymmetrical document flow, authored modules, and selective reveals make the portfolio itself feel like a designed object.

## 7. Motion System

- Density: low
- Cadence: event-driven
- Triggers: scroll, pointer
- Transition types: fade, crop-shift
- Physics level: none
- Motion recipe:
  - Use restrained reveals and occasional viewpoint shifts.
  - Let typography and image sequencing do more work than animation.
  - Use one irrational but coherent move to keep the page from feeling templated.

## 8. Spatial Model

- Space type: layered-2d
- Camera behavior: fixed
- Depth cues: scale, occlusion
- HUD layering: none
- Render tier: dom
- Primary depth cue in capture: none

## 9. Participation & State

- Participation mode: browse
- Persistence: none
- Inputs to preserve: scroll, tap
- Reset/save posture: Default to resettable, lightweight state changes.

## 10. Sound & Sensor Behavior

- Audio role: none
- Audio triggers: none
- Controls: none
- Sync: none
- Required APIs or platform hooks: none

## 11. Implementation Checklist

- Complexity: low
- Required APIs: none
- Must-have mechanics:
  - Keep one strong authorial decision intact across breakpoints.
  - Use type, pacing, and framing as the identity before relying on motion.
  - If the site feels like a normal portfolio shell, push one layer further.
  - The capture suggests anchored framing or sticky context; preserve that orientation device in the rebuild.
- Nice-to-have embellishments:
  - tags include portfolio
  - tags include minimal
  - description mentions portfolio
  - description mentions projects
- Mobile fallback: Keep the asymmetry in rhythm and type, but simplify the layout into a single authored column with strong anchors.
- Fallback path: single-column, reduced-motion
- Manual validation:
  - The author voice is visible within three seconds.
  - Projects or writing feel sequenced, not dumped into a grid.
  - Mobile preserves the same voice without literal layout copying.

## 12. Do's and Don'ts

### Do
- Use nb_international_proregular consistently for headlines and interface labels.
- Keep the palette anchored to #f6f5f4, #181819, and #a4a39d.
- Preserve the experimental posture signaled by the loadmo.re tags: tactile, minimal, portfolio.
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
- Implement mobile as: Keep the asymmetry in rhythm and type, but simplify the layout into a single authored column with strong anchors..
- If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build this as a Luxury Archive page with a secondary cue from Fan Shrine using the Portfolio Artifact interaction model. Keep nb_international_proregular as the voice anchor, preserve the palette around #f6f5f4, #181819, #a4a39d, drive the page through scroll, tap, and implement the mobile fallback as: Keep the asymmetry in rhythm and type, but simplify the layout into a single authored column with strong anchors.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/unveil)
- Live site: https://unveil.fr/
- Credits: UNVEIL team Arvin Leeuwis
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
