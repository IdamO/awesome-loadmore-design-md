# Design System Inspiration of ROOM

## 1. Visual Theme & Atmosphere

ROOM reads as sonic pacing. The live capture resolves to a light-leaning system built around #ecedee, #151717, and accent notes from #9f9f9f. Strong visuals — pick a cover opens a page with 3D CD disk and music player of the selected track.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Favorit, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #ecedee, #151717, #9f9f9f, #605f60
- Typography stack: Favorit, NeueHaasGrotDisp, NeueHaasGrotDisp-Medium
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #ecedee - canvas / dominant background
- Color 2: #151717 - primary text or opposing surface
- Color 3: #9f9f9f - accent / interactive signal
- Color 4: #605f60 - supporting surface or hover state
- Color 5: #a0a1d5 - supporting surface or hover state
- Color 6: #ef5a66 - supporting surface or hover state
- Color 7: #e4de18 - supporting surface or hover state
- Color 8: #6a5e23 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Favorit
- Secondary: NeueHaasGrotDisp
- Support: NeueHaasGrotDisp-Medium
- Support: AcuminVariableConcept
- Support: GlyphWorld-Forest

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 18px / weight 400 / line-height 27px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Favorit in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#ecedee) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (music, graphic-design) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Favorit consistently for headlines and interface labels.
- Keep the palette anchored to #ecedee, #151717, and #9f9f9f.
- Preserve the experimental posture signaled by the loadmo.re tags: music, graphic-design.
- Build separate desktop and mobile compositions instead of pretending one layout can fake both.

### Don't
- Don't genericize the interface into a default SaaS landing page.
- Don't introduce rounded, pastel, or glassmorphism defaults unless the captured site already does.
- Don't replace the extracted font stack with Inter/Roboto/system as the main voice unless no custom stack loaded.

## 8. Responsive Behavior

- Desktop capture uses screenshots/desktop.jpg as the visual baseline.
- Mobile capture uses screenshots/mobile.jpg as the mobile baseline.
- Keep touch targets oversized on mobile and allow the background system to dominate the viewport.
- If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.

## 9. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build a responsive landing page inspired by ROOM. Keep the palette centered on #ecedee, #151717, and #9f9f9f. Use Favorit for headlines, preserve the sonic pacing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/room)
- Live site: https://www.room.haus/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
