# Design System Inspiration of CCI Graduate Showcase

## 1. Visual Theme & Atmosphere

CCI Graduate Showcase reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #0056fe, #f1f6fc, and accent notes from #1d65f4. A fun juxtaposition of digital aesthetics and natural behaviours which lets you create ripples in pixels.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #0056fe, #f1f6fc, #1d65f4, #6296f3
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Collage Core - tags include glitches; archetype affinity: collage field; archival visual bias
- Secondary: Playable Poster - archetype affinity: collage field

### Interaction Archetype
- Archetype: Collage Field (73% confidence)
- Why: tags include glitches
- Core verbs: scan, hover, collect
- Inputs: scroll, hover, tap

## 3. Color Palette & Roles

- Color 1: #0056fe - canvas / dominant background
- Color 2: #f1f6fc - primary text or opposing surface
- Color 3: #1d65f4 - accent / interactive signal
- Color 4: #6296f3 - supporting surface or hover state
- Color 5: #aecaf7 - supporting surface or hover state
- Color 6: #8fb5f5 - supporting surface or hover state
- Color 7: #427def - supporting surface or hover state
- Color 8: #3e80f6 - supporting surface or hover state

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
- Let the main background color (#0056fe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (glitches) imply the site is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit #1d65f4 as the interaction signal.

## 6. Interaction Mechanics

- Primary model: collage_field
- Navigation structure: map / wayfinding ambient / friction high
- Navigation model: Users browse clusters or islands of content rather than a clean linear document.
- State model: Field at rest -> hover or focus cluster -> reveal linked artifact -> continue browsing.
- Must-keep mechanic: The page behaves like a field of scraps, hyperlinks, stickers, and media fragments; discovery comes from scanning and touching layers.

## 7. Motion System

- Density: medium
- Cadence: continuous
- Triggers: pointer, scroll, time
- Transition types: shuffle, jitter, fade
- Physics level: light
- Motion recipe:
  - Use layered reveals, jitter, and hover swaps selectively.
  - Let movement imply depth between scraps rather than simulating real 3D.
  - Keep one stable composition anchor so the field does not turn into noise.

## 8. Spatial Model

- Space type: layered-2d
- Camera behavior: parallax
- Depth cues: scale, occlusion, blur
- HUD layering: overlay
- Render tier: dom
- Primary depth cue in capture: flat surfaces / contrast-only separation

## 9. Participation & State

- Participation mode: browse
- Persistence: ephemeral
- Inputs to preserve: scroll, hover, tap
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
  - Keep one hierarchy anchor such as a headline, map, or rail so the collage stays legible.
  - Treat every scrap as part of one composition, not a random sticker dump.
  - Use link states and media swaps as the interaction language.
  - Live DOM analysis was sparse, so the description and tags carry more weight than sampled interface tokens.
- Nice-to-have embellishments:
  - tags include glitches
- Mobile fallback: Flatten the field into a guided scavenger feed or chapter stack while preserving overlap, stickers, and hyperlink energy.
- Fallback path: guided-feed, reduced-motion
- Manual validation:
  - One anchor element keeps the field navigable.
  - Linked scraps clearly advertise interaction.
  - Mobile preserves density through chapters instead of raw chaos.
  - Before shipping, manually verify any interaction that the capture could not prove live.
  - Cross-check screenshots against the description so the interaction model does not drift away from the source premise.

## 12. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #0056fe, #f1f6fc, and #1d65f4.
- Preserve the experimental posture signaled by the loadmo.re tags: glitches.
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
- Implement mobile as: Flatten the field into a guided scavenger feed or chapter stack while preserving overlap, stickers, and hyperlink energy..
- If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build this as a Collage Core page with a secondary cue from Playable Poster using the Collage Field interaction model. Keep the extracted primary font as the voice anchor, preserve the palette around #0056fe, #f1f6fc, #1d65f4, drive the page through scroll, hover, tap, and implement the mobile fallback as: Flatten the field into a guided scavenger feed or chapter stack while preserving overlap, stickers, and hyperlink energy.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/cci-graduate-showcase)
- Live site: https://creativecomputing.cci.arts.ac.uk/
- Credits: not listed
- Capture mode: archival-fallback
- Desktop capture: failed
- Mobile capture: failed
- Archival fallback: poster image used for missing screenshots
