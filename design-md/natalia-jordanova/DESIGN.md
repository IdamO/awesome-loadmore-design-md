# Design System Inspiration of Natalia Jordanova

## 1. Visual Theme & Atmosphere

Natalia Jordanova reads as spatial depth. The live capture resolves to a light-leaning system built around #fbfbfb, #9d9d9d, and accent notes from #5f5f5f. A list of works in presented with a 3D perspective. Your scrolling also spins a funny little wheel.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Helvetica_Md_Custom, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fbfbfb, #9d9d9d, #5f5f5f, #2c2c2c
- Typography stack: Helvetica_Md_Custom, Helvetica_Md_Ext_Custom, Helvetica_Reg_Custom
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fbfbfb - canvas / dominant background
- Color 2: #9d9d9d - primary text or opposing surface
- Color 3: #5f5f5f - accent / interactive signal
- Color 4: #2c2c2c - supporting surface or hover state
- Color 5: #db9770 - supporting surface or hover state
- Color 6: #dbaf94 - supporting surface or hover state
- Color 7: #9e6e5b - supporting surface or hover state
- Color 8: #edc9af - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Helvetica_Md_Custom
- Secondary: Helvetica_Md_Ext_Custom
- Support: Helvetica_Reg_Custom

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16.8px / weight 400 / line-height 21px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Helvetica_Md_Custom in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fbfbfb) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, 3d-space) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Helvetica_Md_Custom consistently for headlines and interface labels.
- Keep the palette anchored to #fbfbfb, #9d9d9d, and #5f5f5f.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, 3d-space.
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

> Build a responsive landing page inspired by Natalia Jordanova. Keep the palette centered on #fbfbfb, #9d9d9d, and #5f5f5f. Use Helvetica_Md_Custom for headlines, preserve the spatial depth mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/natalia-jordanova)
- Live site: https://nataliajordanova.com
- Credits: Manus Nijhoff
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
