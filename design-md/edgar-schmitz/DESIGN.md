# Design System Inspiration of Edgar Schmitz

## 1. Visual Theme & Atmosphere

Edgar Schmitz reads as restrained minimalism. The live capture resolves to a light-leaning system built around #fefdfe, #626561, and accent notes from #cdb4e8. Beautiful interaction. Drag your fingerprint on the interface to discover the work.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Inconsolata, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefdfe, #626561, #cdb4e8, #8d8b8a
- Typography stack: Inconsolata, Oswald, Inter
- Desktop posture: fixed/sticky framing
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fefdfe - canvas / dominant background
- Color 2: #626561 - primary text or opposing surface
- Color 3: #cdb4e8 - accent / interactive signal
- Color 4: #8d8b8a - supporting surface or hover state
- Color 5: #9b9163 - supporting surface or hover state
- Color 6: #87725c - supporting surface or hover state
- Color 7: #b99ed7 - supporting surface or hover state
- Color 8: #363739 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Inconsolata
- Secondary: Oswald
- Support: Inter

### Hierarchy Snapshot
- Heading sample: 23.04px / weight 500 / letter-spacing normal
- Body sample: 23.04px / weight 400 / line-height 36.864px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Inconsolata in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefdfe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (tactile, minimal, portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 4px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Inconsolata consistently for headlines and interface labels.
- Keep the palette anchored to #fefdfe, #626561, and #cdb4e8.
- Preserve the experimental posture signaled by the loadmo.re tags: tactile, minimal, portfolio.
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

> Build a responsive landing page inspired by Edgar Schmitz. Keep the palette centered on #fefdfe, #626561, and #cdb4e8. Use Inconsolata for headlines, preserve the restrained minimalism mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/edgar-schmitz)
- Live site: http://edgarschmitz.com/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
