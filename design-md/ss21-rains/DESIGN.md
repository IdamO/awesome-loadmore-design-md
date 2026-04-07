# Design System Inspiration of SS21 Rains

## 1. Visual Theme & Atmosphere

SS21 Rains reads as editorial fashion energy. The live capture resolves to a light-leaning system built around #fefefe, #e8e8e8, and accent notes from #6a6a6a. Virtual runway/lookbook interface that lets you switch camera to browse the looks for Rains SS21 collection.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefefe, #e8e8e8, #6a6a6a, #989898
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Luxury Archive - tags include fashion; description mentions collection; archetype affinity: editorial archive index
- Secondary: Fan Shrine - tags include fashion; description mentions collection

### Interaction Archetype
- Archetype: Editorial Archive Index (76% confidence)
- Why: description mentions collection; description mentions browse
- Core verbs: browse, filter, open
- Inputs: scroll, tap, filter, hover

## 3. Color Palette & Roles

- Color 1: #fefefe - canvas / dominant background
- Color 2: #e8e8e8 - primary text or opposing surface
- Color 3: #6a6a6a - accent / interactive signal
- Color 4: #989898 - supporting surface or hover state
- Color 5: #d9d9d9 - supporting surface or hover state
- Color 6: #b8b8b8 - supporting surface or hover state
- Color 7: #a1a1a1 - supporting surface or hover state
- Color 8: #c7c7c7 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: 32px / weight 700 / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefefe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (fashion, video) imply the site is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit #6a6a6a as the interaction signal.

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
- Inputs to preserve: scroll, tap, filter, hover
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
  - Treat filters and tags as navigation, not as a cosmetic afterthought.
  - Preserve provenance, numbering, captions, and object metadata.
  - Density is acceptable if the hierarchy stays calm.
- Nice-to-have embellishments:
  - description mentions collection
  - description mentions browse
- Mobile fallback: Keep a single-column feed, bottom-sheet filters, a persistent current-section pill, and inline detail expansion.
- Fallback path: reduced-motion
- Manual validation:
  - Users can recover their place in the index after opening detail.
  - Filter state is legible and persistent.
  - Mobile keeps archive logic without collapsing into generic cards.

## 12. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #fefefe, #e8e8e8, and #6a6a6a.
- Preserve the experimental posture signaled by the loadmo.re tags: fashion, video.
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

> Build this as a Luxury Archive page with a secondary cue from Fan Shrine using the Editorial Archive Index interaction model. Keep the extracted primary font as the voice anchor, preserve the palette around #fefefe, #e8e8e8, #6a6a6a, drive the page through scroll, tap, filter, hover, and implement the mobile fallback as: Keep a single-column feed, bottom-sheet filters, a persistent current-section pill, and inline detail expansion.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/ss21-rains)
- Live site: https://ss21.rains.com/
- Credits: MOON INTERNATIONAL
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
