# Design System Inspiration of Fuck Investments

## 1. Visual Theme & Atmosphere

Fuck Investments reads as exhibition-like framing. The live capture resolves to a light-leaning system built around #cbcbcb, #d6fe2f, and accent notes from #11120f. Fine art gallery website

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers IBM Plex Mono, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #cbcbcb, #d6fe2f, #11120f, #a9a9a9
- Typography stack: IBM Plex Mono, Space Mono
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #cbcbcb - canvas / dominant background
- Color 2: #d6fe2f - primary text or opposing surface
- Color 3: #11120f - accent / interactive signal
- Color 4: #a9a9a9 - supporting surface or hover state
- Color 5: #ccd6a6 - supporting surface or hover state
- Color 6: #afcf2d - supporting surface or hover state
- Color 7: #d4f059 - supporting surface or hover state
- Color 8: #92ab28 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: IBM Plex Mono
- Secondary: Space Mono

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit #11120f as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps IBM Plex Mono in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#cbcbcb) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (glitches, arts&culture) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use IBM Plex Mono consistently for headlines and interface labels.
- Keep the palette anchored to #cbcbcb, #d6fe2f, and #11120f.
- Preserve the experimental posture signaled by the loadmo.re tags: glitches, arts&culture.
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

> Build a responsive landing page inspired by Fuck Investments. Keep the palette centered on #cbcbcb, #d6fe2f, and #11120f. Use IBM Plex Mono for headlines, preserve the exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/fuck-investments)
- Live site: https://fuck.investments/
- Credits: Waxycaps
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
