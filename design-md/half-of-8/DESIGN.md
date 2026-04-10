# Design System Inspiration of Half of 8

## 1. Visual Theme & Atmosphere

Half of 8 reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #050505, #5b5b5b, and accent notes from #ececec. Website for collective half of 8. Features an infinite grid for exploring chapters of the ‘Half of Journal’ zine, a music player, and even a narrative expedition of Mt. Fuji!

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers __interDisplay_d57320, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #050505, #5b5b5b, #ececec, #999898
- Typography stack: __interDisplay_d57320, __interDisplay_Fallback_d57320, __Noto_Sans_JP_d848ea
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Luxury Archive - tags include online-magazine; archetype affinity: editorial archive index
- Secondary: Fan Shrine - tags include portfolio; description mentions edition

### Interaction Archetype
- Archetype: Editorial Archive Index (60% confidence)
- Why: tags include online-magazine; sticky layout
- Core verbs: browse, filter, open
- Inputs: scroll, tap, filter



## 3. Color Palette & Roles

- Color 1: #050505 - canvas / dominant background
- Color 2: #5b5b5b - primary text or opposing surface
- Color 3: #ececec - accent / interactive signal
- Color 4: #999898 - supporting surface or hover state
- Color 5: #551916 - supporting surface or hover state
- Color 6: #f84428 - supporting surface or hover state
- Color 7: #e89697 - supporting surface or hover state
- Color 8: #a22c21 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: __interDisplay_d57320
- Secondary: __interDisplay_Fallback_d57320
- Support: __Noto_Sans_JP_d848ea
- Support: __Noto_Sans_JP_Fallback_d848ea
- Support: __Dela_Gothic_One_e0f1bd
- Support: __Dela_Gothic_One_Fallback_e0f1bd
- Support: InterDisplay

### Hierarchy Snapshot
- Heading sample: 12px / weight 500 / letter-spacing 1.2px
- Body sample: 46px / weight 500 / line-height 49.68px
- Button sample: 16px / weight 400

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#050505) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, online-magazine, graphic-design) imply the system is intentionally non-generic.
- Buttons tend toward rgba(53, 53, 53, 0.4) backgrounds with rgb(255, 255, 255) text, and links inherit rgb(0, 0, 0) as the interaction signal.

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
  - Treat filters and tags as navigation, not as a cosmetic afterthought.
  - Preserve provenance, numbering, captions, and object metadata.
  - Density is acceptable if the hierarchy stays calm.
  - The capture suggests anchored framing or sticky context; preserve that orientation device in the rebuild.
- Nice-to-have embellishments:
  - tags include online-magazine
  - sticky layout
- Mobile fallback: Keep a single-column feed, bottom-sheet filters, a persistent current-section pill, and inline detail expansion.
- Fallback path: reduced-motion
- Manual validation:
  - Users can recover their place in the index after opening detail.
  - Filter state is legible and persistent.
  - Mobile keeps archive logic without collapsing into generic cards.

## 12. Do's and Don'ts

### Do
- Use __interDisplay_d57320 consistently for headlines and interface labels.
- Keep the palette anchored to #050505, #5b5b5b, and #ececec.
- Preserve the experimental posture signaled by the archive tags: portfolio, online-magazine, graphic-design.
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

> Build this as a Luxury Archive page with a secondary cue from Fan Shrine using the Editorial Archive Index interaction model. Keep __interDisplay_d57320 as the voice anchor, preserve the palette around #050505, #5b5b5b, #ececec, drive the page through scroll, tap, filter, and implement the mobile fallback as: Keep a single-column feed, bottom-sheet filters, a persistent current-section pill, and inline detail expansion.



## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/half-of-8)
- Live site: https://halfof8.com/
- Credits: Half of 8
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
