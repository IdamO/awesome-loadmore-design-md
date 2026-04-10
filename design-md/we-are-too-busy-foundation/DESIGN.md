# Design System Inspiration of Too Busy Foundation

## 1. Visual Theme & Atmosphere

Too Busy Foundation reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #050506, #565952, and accent notes from #531212. Image archive shedding light on the hidden epidemic of human trafficking through embedded facts and statistics.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers __ppmono_6b0fd0, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #050506, #565952, #531212, #ebedeb
- Typography stack: __ppmono_6b0fd0, __ppmono_Fallback_6b0fd0, __realgar_1d9602
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Luxury Archive - tags include photography; description mentions archive; archetype affinity: editorial archive index
- Secondary: Fan Shrine - tags include photography

### Interaction Archetype
- Archetype: Editorial Archive Index (96% confidence)
- Why: tags include educational; tags include photography; description mentions archive; sticky layout
- Core verbs: browse, filter, open
- Inputs: scroll, tap, filter



## 3. Color Palette & Roles

- Color 1: #050506 - canvas / dominant background
- Color 2: #565952 - primary text or opposing surface
- Color 3: #531212 - accent / interactive signal
- Color 4: #ebedeb - supporting surface or hover state
- Color 5: #a2a99f - supporting surface or hover state
- Color 6: #354a4b - supporting surface or hover state
- Color 7: #112e4c - supporting surface or hover state
- Color 8: #4d4b36 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: __ppmono_6b0fd0
- Secondary: __ppmono_Fallback_6b0fd0
- Support: __realgar_1d9602
- Support: __realgar_Fallback_1d9602

### Hierarchy Snapshot
- Heading sample: 30px / weight 400 / letter-spacing normal
- Body sample: 30px / weight 400 / line-height 36px
- Button sample: 16px / weight 400

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#050506) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (educational, photography) imply the system is intentionally non-generic.
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(255, 255, 255) text, and links inherit #531212 as the interaction signal.

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
  - tags include educational
  - tags include photography
  - description mentions archive
  - sticky layout
- Mobile fallback: Keep a single-column feed, bottom-sheet filters, a persistent current-section pill, and inline detail expansion.
- Fallback path: reduced-motion
- Manual validation:
  - Users can recover their place in the index after opening detail.
  - Filter state is legible and persistent.
  - Mobile keeps archive logic without collapsing into generic cards.

## 12. Do's and Don'ts

### Do
- Use __ppmono_6b0fd0 consistently for headlines and interface labels.
- Keep the palette anchored to #050506, #565952, and #531212.
- Preserve the experimental posture signaled by the archive tags: educational, photography.
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

> Build this as a Luxury Archive page with a secondary cue from Fan Shrine using the Editorial Archive Index interaction model. Keep __ppmono_6b0fd0 as the voice anchor, preserve the palette around #050506, #565952, #531212, drive the page through scroll, tap, filter, and implement the mobile fallback as: Keep a single-column feed, bottom-sheet filters, a persistent current-section pill, and inline detail expansion.


## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/we-are-too-busy-foundation)
- Live site: https://weare.toobusy.foundation/
- Credits: Your Majesty
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
