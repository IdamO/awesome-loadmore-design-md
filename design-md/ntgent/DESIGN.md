# Design System Inspiration of Ntgent

## 1. Visual Theme & Atmosphere

Ntgent reads as exhibition-like framing. The live capture resolves to a light-leaning system built around #ececec, #dddddd, and accent notes from #aeaeac. Website for NTGent, Ghent's city theatre.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers diatype, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #ececec, #dddddd, #aeaeac, #5a5b57
- Typography stack: diatype, diatype Fallback, diatypeMono
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #ececec - canvas / dominant background
- Color 2: #dddddd - primary text or opposing surface
- Color 3: #aeaeac - accent / interactive signal
- Color 4: #5a5b57 - supporting surface or hover state
- Color 5: #c0c0be - supporting surface or hover state
- Color 6: #81827d - supporting surface or hover state
- Color 7: #41423d - supporting surface or hover state
- Color 8: #7f807b - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: diatype
- Secondary: diatype Fallback
- Support: diatypeMono
- Support: diatypeMono Fallback
- Support: gtAlpina
- Support: gtAlpina Fallback

### Hierarchy Snapshot
- Heading sample: 16px / weight 500 / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 16.8px
- Button sample: 13.3333px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(82, 82, 79) text.
- Links inherit rgb(82, 82, 79) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps diatype in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#ececec) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (arts&culture) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 6px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use diatype consistently for headlines and interface labels.
- Keep the palette anchored to #ececec, #dddddd, and #aeaeac.
- Preserve the experimental posture signaled by the loadmo.re tags: arts&culture.
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

> Build a responsive landing page inspired by Ntgent. Keep the palette centered on #ececec, #dddddd, and #aeaeac. Use diatype for headlines, preserve the exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/ntgent)
- Live site: https://www.ntgent.be/en
- Credits: Base Design
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
