# Design System Inspiration of Visual Society

## 1. Visual Theme & Atmosphere

Visual Society reads as restrained minimalism, editorial fashion energy. The live capture resolves to a light-leaning system built around #f8f8f8, #1b1b1b, and accent notes from #a1a1a1. Neat Swiss shopping interface based on a filtering system: just check the content to display them on the page.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers SBM, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f8f8f8, #1b1b1b, #a1a1a1, #5f5f5f
- Typography stack: SBM
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #f8f8f8 - canvas / dominant background
- Color 2: #1b1b1b - primary text or opposing surface
- Color 3: #a1a1a1 - accent / interactive signal
- Color 4: #5f5f5f - supporting surface or hover state
- Color 5: #1708fc - supporting surface or hover state
- Color 6: #aaa5dc - supporting surface or hover state
- Color 7: #5a4fe6 - supporting surface or hover state
- Color 8: #4539e8 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: SBM

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 11.9275px / weight 400 / line-height 11.9275px
- Button sample: 13.3333px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgba(0, 0, 0, 0) text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps SBM in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f8f8f8) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (fashion, e-commerce, clean-ui) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 0px 15.84px 0px 0px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use SBM consistently for headlines and interface labels.
- Keep the palette anchored to #f8f8f8, #1b1b1b, and #a1a1a1.
- Preserve the experimental posture signaled by the loadmo.re tags: fashion, e-commerce, clean-ui.
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

> Build a responsive landing page inspired by Visual Society. Keep the palette centered on #f8f8f8, #1b1b1b, and #a1a1a1. Use SBM for headlines, preserve the restrained minimalism, editorial fashion energy mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/visual-society)
- Live site: https://visualsociety.ch
- Credits: HTTB.EU
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
