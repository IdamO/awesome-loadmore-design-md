# Design System Inspiration of DSR NY

## 1. Visual Theme & Atmosphere

DSR NY reads as restrained minimalism. The live capture resolves to a dark-leaning system built around #242622, #5b5b2a, and accent notes from #5b5a56. An architectural portfolio with a Tetris-like layout and a flexible logo that moves as you scroll.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers DSPLUSR, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #242622, #5b5b2a, #5b5a56, #a19f9b
- Typography stack: DSPLUSR
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #242622 - canvas / dominant background
- Color 2: #5b5b2a - primary text or opposing surface
- Color 3: #5b5a56 - accent / interactive signal
- Color 4: #a19f9b - supporting surface or hover state
- Color 5: #d7c9b6 - supporting surface or hover state
- Color 6: #eae8e6 - supporting surface or hover state
- Color 7: #998f5c - supporting surface or hover state
- Color 8: #89745d - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: DSPLUSR

### Hierarchy Snapshot
- Heading sample: 11.9px / weight 700 / letter-spacing normal
- Body sample: 14px / weight 400 / line-height 19.25px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps DSPLUSR in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#242622) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, minimal, photography) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use DSPLUSR consistently for headlines and interface labels.
- Keep the palette anchored to #242622, #5b5b2a, and #5b5a56.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, minimal, photography.
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

> Build a responsive landing page inspired by DSR NY. Keep the palette centered on #242622, #5b5b2a, and #5b5a56. Use DSPLUSR for headlines, preserve the restrained minimalism mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/dsr-ny)
- Live site: https://dsrny.com/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
