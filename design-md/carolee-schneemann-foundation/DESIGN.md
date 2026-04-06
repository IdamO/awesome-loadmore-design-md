# Design System Inspiration of Carolee Schneemann Foundation

## 1. Visual Theme & Atmosphere

Carolee Schneemann Foundation reads as exhibition-like framing. The live capture resolves to a light-leaning system built around #edece9, #eae695, and accent notes from #a8a29b. Just very great graphics, with nice gradient animation that makes the UI

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers FreeSans, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #edece9, #eae695, #a8a29b, #685d59
- Typography stack: FreeSans, FreeSerif
- Desktop posture: fixed/sticky framing
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #edece9 - canvas / dominant background
- Color 2: #eae695 - primary text or opposing surface
- Color 3: #a8a29b - accent / interactive signal
- Color 4: #685d59 - supporting surface or hover state
- Color 5: #e0e477 - supporting surface or hover state
- Color 6: #936760 - supporting surface or hover state
- Color 7: #9f9463 - supporting surface or hover state
- Color 8: #282021 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: FreeSans
- Secondary: FreeSerif

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 19px / weight 700 / line-height 23.75px
- Button sample: 16.625px / weight 700

## 4. Component Stylings

### Web
- Buttons tend toward rgb(169, 169, 169) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 50%.
- Shadow language: rgba(255, 255, 255, 0.75) 0px 0px 8px 0px inset.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps FreeSans in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#edece9) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (photography, portfolio, arts&culture) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgba(255, 255, 255, 0.75) 0px 0px 8px 0px inset.
- Radius cue: 50%.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use FreeSans consistently for headlines and interface labels.
- Keep the palette anchored to #edece9, #eae695, and #a8a29b.
- Preserve the experimental posture signaled by the loadmo.re tags: photography, portfolio, arts&culture.
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

> Build a responsive landing page inspired by Carolee Schneemann Foundation. Keep the palette centered on #edece9, #eae695, and #a8a29b. Use FreeSans for headlines, preserve the exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/carolee-schneemann-foundation)
- Live site: http://www.schneemannfoundation.org/
- Credits: Ayham Ghraowi, Matt Wolff
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
