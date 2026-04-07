# Design System Inspiration of Schauspielhaus Zürich

## 1. Visual Theme & Atmosphere

Schauspielhaus Zürich reads as restrained minimalism, exhibition-like framing. The live capture resolves to a light-leaning system built around #f7f7f7, #a6a4a6, and accent notes from #727073. Digital poster for the 2021/22 season of Schauspielhaus Zürich theater. Scroll down to the programme overview, then scroll back up!

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f7f7f7, #a6a4a6, #727073, #c0bec0
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Luxury Archive - tags include arts&culture; tags include minimal; archetype affinity: editorial archive index
- Secondary: Playable Poster - description mentions poster

### Interaction Archetype
- Archetype: Editorial Archive Index (63% confidence)
- Why: tags include arts&culture; tags include minimal
- Core verbs: browse, filter, open, scroll
- Inputs: scroll, tap, filter

## 3. Color Palette & Roles

- Color 1: #f7f7f7 - canvas / dominant background
- Color 2: #a6a4a6 - primary text or opposing surface
- Color 3: #727073 - accent / interactive signal
- Color 4: #c0bec0 - supporting surface or hover state
- Color 5: #bfbdc0 - supporting surface or hover state
- Color 6: #807e81 - supporting surface or hover state
- Color 7: #7f7d80 - supporting surface or hover state
- Color 8: #c0bebf - supporting surface or hover state

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
- Let the main background color (#f7f7f7) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (arts&culture, minimal) imply the site is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit #727073 as the interaction signal.

## 6. Interaction Mechanics

- Primary model: editorial_archive_index
- Navigation structure: hub / wayfinding explicit / friction low
- Navigation model: Index first, then detail; users should always know how to get back to the collection view.
- State model: Browse/filter -> hover or focus item -> inline or sidecar detail -> return to index context.
- Must-keep mechanic: The index is the primary surface; filters, tags, and anchors drive navigation; detail emerges inline or in a sidecar.

## 7. Motion System

- Density: low
- Cadence: event-driven
- Triggers: pointer, scroll
- Transition types: fade, morph, crop-shift
- Physics level: none
- Motion recipe:
  - Use restrained fades and crop shifts rather than theatrical transitions.
  - Preserve list context when opening detail views.
  - Let sticky headers and current-section markers do most of the orientation work.

## 8. Spatial Model

- Space type: flat
- Camera behavior: fixed
- Depth cues: scale
- HUD layering: overlay
- Render tier: dom
- Primary depth cue in capture: flat surfaces / contrast-only separation

## 9. Participation & State

- Participation mode: browse
- Persistence: session
- Inputs to preserve: scroll, tap, filter
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
  - Treat filters and tags as navigation, not as a cosmetic afterthought.
  - Preserve provenance, numbering, captions, and object metadata.
  - Density is acceptable if the hierarchy stays calm.
  - Live DOM analysis was sparse, so the description and tags carry more weight than sampled interface tokens.
- Nice-to-have embellishments:
  - tags include arts&culture
  - tags include minimal
- Mobile fallback: Keep a single-column feed, bottom-sheet filters, a persistent current-section pill, and inline detail expansion.
- Fallback path: reduced-motion
- Manual validation:
  - Users can recover their place in the index after opening detail.
  - Filter state is legible and persistent.
  - Mobile keeps archive logic without collapsing into generic cards.
  - Before shipping, manually verify any interaction that the capture could not prove live.
  - Cross-check screenshots against the description so the interaction model does not drift away from the source premise.

## 12. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #f7f7f7, #a6a4a6, and #727073.
- Preserve the experimental posture signaled by the loadmo.re tags: arts&culture, minimal.
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
- Implement mobile as: Keep a single-column feed, bottom-sheet filters, a persistent current-section pill, and inline detail expansion..
- If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build this as a Luxury Archive page with a secondary cue from Playable Poster using the Editorial Archive Index interaction model. Keep the extracted primary font as the voice anchor, preserve the palette around #f7f7f7, #a6a4a6, #727073, drive the page through scroll, tap, filter, and implement the mobile fallback as: Keep a single-column feed, bottom-sheet filters, a persistent current-section pill, and inline detail expansion.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/schauspielhaus-zurich)
- Live site: https://2122.schauspielhaus.ch/en/
- Credits: Studio Laurenz Brunner & Clemens Piontek, Julia Novitch, Diana Pfammatter, Martin Andereggen
- Capture mode: archival-fallback
- Desktop capture: failed
- Mobile capture: failed
- Archival fallback: poster image used for missing screenshots
