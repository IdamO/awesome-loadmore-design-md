# Design System Inspiration of Williams College Museum Of Art

## 1. Visual Theme & Atmosphere

Williams College Museum Of Art reads as exhibition-like framing. The live capture resolves to a light-leaning system built around #eee9e4, #ceb296, and accent notes from #dcc7b3. Perfect combinaison between smart UX and playful interaction. If only every museums could afford a website like that!

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers gt-walsheim-regular, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #eee9e4, #ceb296, #dcc7b3, #ae9f91
- Typography stack: gt-walsheim-regular, gt-walsheim-bold, gt-cinetype-mono
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Luxury Archive - tags include arts&culture; description mentions museum; archetype affinity: editorial archive index

### Interaction Archetype
- Archetype: Editorial Archive Index (60% confidence)
- Why: tags include arts&culture; sticky layout
- Core verbs: browse, filter, open
- Inputs: scroll, tap, filter



## 3. Color Palette & Roles

- Color 1: #eee9e4 - canvas / dominant background
- Color 2: #ceb296 - primary text or opposing surface
- Color 3: #dcc7b3 - accent / interactive signal
- Color 4: #ae9f91 - supporting surface or hover state
- Color 5: #cc9d6e - supporting surface or hover state
- Color 6: #ad8d6e - supporting surface or hover state
- Color 7: #24221b - supporting surface or hover state
- Color 8: #977355 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: gt-walsheim-regular
- Secondary: gt-walsheim-bold
- Support: gt-cinetype-mono

### Hierarchy Snapshot
- Heading sample: 24px / weight 400 / letter-spacing 0.5px
- Body sample: 18px / weight 400 / line-height 24.3px
- Button sample: n/a / weight n/a

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#eee9e4) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (arts&culture) imply the system is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit rgb(0, 0, 0) as the interaction signal.

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
- Primary depth cue in capture: rgba(0, 0, 0, 0.18) 0px 0px 9px 0px

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
  - tags include arts&culture
  - sticky layout
- Mobile fallback: Keep a single-column feed, bottom-sheet filters, a persistent current-section pill, and inline detail expansion.
- Fallback path: reduced-motion
- Manual validation:
  - Users can recover their place in the index after opening detail.
  - Filter state is legible and persistent.
  - Mobile keeps archive logic without collapsing into generic cards.

## 12. Do's and Don'ts

### Do
- Use gt-walsheim-regular consistently for headlines and interface labels.
- Keep the palette anchored to #eee9e4, #ceb296, and #dcc7b3.
- Preserve the experimental posture signaled by the archive tags: arts&culture.
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

> Build this as a Luxury Archive page using the Editorial Archive Index interaction model. Keep gt-walsheim-regular as the voice anchor, preserve the palette around #eee9e4, #ceb296, #dcc7b3, drive the page through scroll, tap, filter, and implement the mobile fallback as: Keep a single-column feed, bottom-sheet filters, a persistent current-section pill, and inline detail expansion.



## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/williams-college-museum-of-art)
- Live site: https://artmuseum.williams.edu/
- Credits: Linked by air
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
