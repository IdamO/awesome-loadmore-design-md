# Design System Inspiration of Swiss Design Awards 2020

## 1. Visual Theme & Atmosphere

Swiss Design Awards 2020 reads as exhibition-like framing. The live capture resolves to a light-leaning system built around #f8f8f8, #e0a59a, and accent notes from #a59e9b. Beautiful Swiss grid-based layout combined with funny not-that-Swiss menu design: a 3D carousel to explore categories.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers ApaxBold, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f8f8f8, #e0a59a, #a59e9b, #996c61
- Typography stack: ApaxBold, ApaxRegular, ApaxItalic
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #f8f8f8 - canvas / dominant background
- Color 2: #e0a59a - primary text or opposing surface
- Color 3: #a59e9b - accent / interactive signal
- Color 4: #996c61 - supporting surface or hover state
- Color 5: #6d5e5b - supporting surface or hover state
- Color 6: #191314 - supporting surface or hover state
- Color 7: #e1926e - supporting surface or hover state
- Color 8: #ee6b5c - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: ApaxBold
- Secondary: ApaxRegular
- Support: ApaxItalic

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 23.04px / weight 400 / line-height 23.04px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 60, 30) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps ApaxBold in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f8f8f8) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (arts&culture, graphic-design, online-magazine) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use ApaxBold consistently for headlines and interface labels.
- Keep the palette anchored to #f8f8f8, #e0a59a, and #a59e9b.
- Preserve the experimental posture signaled by the loadmo.re tags: arts&culture, graphic-design, online-magazine.
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

> Build a responsive landing page inspired by Swiss Design Awards 2020. Keep the palette centered on #f8f8f8, #e0a59a, and #a59e9b. Use ApaxBold for headlines, preserve the exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/swiss-design-awards-2020)
- Live site: https://2020.swissdesignawardsblog.ch/everywhere
- Credits: Dual Room, Tristan Bagot, Swiss Design Awards, Anna Niederhäuser
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
