# Design System Inspiration of ertdfgcvb

## 1. Visual Theme & Atmosphere

ertdfgcvb reads as retro-computing cues. The live capture resolves to a dark-leaning system built around #020202, #151515, and accent notes from #252525. Enter the matrix with this experimental micro website.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Simple Console, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #020202, #151515, #252525, #373737
- Typography stack: Simple Console
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #020202 - canvas / dominant background
- Color 2: #151515 - primary text or opposing surface
- Color 3: #252525 - accent / interactive signal
- Color 4: #373737 - supporting surface or hover state
- Color 5: #474747 - supporting surface or hover state
- Color 6: #565656 - supporting surface or hover state
- Color 7: #646464 - supporting surface or hover state
- Color 8: #747474 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Simple Console

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 19px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(240, 240, 240) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Simple Console in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#020202) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (animation, retro, portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Simple Console consistently for headlines and interface labels.
- Keep the palette anchored to #020202, #151515, and #252525.
- Preserve the experimental posture signaled by the loadmo.re tags: animation, retro, portfolio.
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

> Build a responsive landing page inspired by ertdfgcvb. Keep the palette centered on #020202, #151515, and #252525. Use Simple Console for headlines, preserve the retro-computing cues mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/ertdfgcvb)
- Live site: https://ertdfgcvb.xyz
- Credits: Andreas Gysin
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
