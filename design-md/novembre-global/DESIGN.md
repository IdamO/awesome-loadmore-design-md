# Design System Inspiration of Novembre Global

## 1. Visual Theme & Atmosphere

Novembre Global reads as editorial fashion energy. The live capture resolves to a light-leaning system built around #eaece6, #aaedef, and accent notes from #1b1b19. Beautiful editorial website juggling between big type and big images

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Haas Grot Disp 45, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #eaece6, #aaedef, #1b1b19, #98a6a7
- Typography stack: Haas Grot Disp 45, Adobe Caslon Pro
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Luxury Archive - tags include fashion; tags include online-magazine; description mentions editorial
- Secondary: Fan Shrine - tags include fashion

### Interaction Archetype
- Archetype: Editorial Archive Index (95% confidence)
- Why: tags include online-magazine; description mentions editorial; sticky layout
- Core verbs: browse, filter, open
- Inputs: scroll, tap, filter, type



## 3. Color Palette & Roles

- Color 1: #eaece6 - canvas / dominant background
- Color 2: #aaedef - primary text or opposing surface
- Color 3: #1b1b19 - accent / interactive signal
- Color 4: #98a6a7 - supporting surface or hover state
- Color 5: #62625f - supporting surface or hover state
- Color 6: #759d9f - supporting surface or hover state
- Color 7: #c3c2bb - supporting surface or hover state
- Color 8: #956c57 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Haas Grot Disp 45
- Secondary: Adobe Caslon Pro

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 36px / weight 300 / line-height 36px
- Button sample: 13.3333px / weight 400

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#eaece6) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (online-magazine, fashion) imply the system is intentionally non-generic.
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(254, 254, 254) text, and links inherit rgb(0, 0, 0) as the interaction signal.

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
- Primary depth cue in capture: none

## 9. Participation & State

- Participation mode: browse
- Persistence: session
- Inputs to preserve: scroll, tap, filter, type
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
  - The capture suggests anchored framing or sticky context; preserve that orientation device in the rebuild.
- Nice-to-have embellishments:
  - tags include online-magazine
  - description mentions editorial
  - sticky layout
- Mobile fallback: Keep a single-column feed, bottom-sheet filters, a persistent current-section pill, and inline detail expansion.
- Fallback path: reduced-motion
- Manual validation:
  - Users can recover their place in the index after opening detail.
  - Filter state is legible and persistent.
  - Mobile keeps archive logic without collapsing into generic cards.

## 12. Do's and Don'ts

### Do
- Use Haas Grot Disp 45 consistently for headlines and interface labels.
- Keep the palette anchored to #eaece6, #aaedef, and #1b1b19.
- Preserve the experimental posture signaled by the archive tags: online-magazine, fashion.
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

> Build this as a Luxury Archive page with a secondary cue from Fan Shrine using the Editorial Archive Index interaction model. Keep Haas Grot Disp 45 as the voice anchor, preserve the palette around #eaece6, #aaedef, #1b1b19, drive the page through scroll, tap, filter, type, and implement the mobile fallback as: Keep a single-column feed, bottom-sheet filters, a persistent current-section pill, and inline detail expansion.


## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/novembre-global)
- Live site: https://novembre.global
- Credits: not listed
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
