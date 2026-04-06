# Design System Inspiration of Angus Chiang Online

## 1. Visual Theme & Atmosphere

Angus Chiang Online reads as editorial fashion energy. The live capture resolves to a dark-leaning system built around #2ba638, #fe6f2f, and accent notes from #fef001. Colorful e-commerce featuring a playground homepage with draggable elements.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers FGB, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #2ba638, #fe6f2f, #fef001, #00a0e8
- Typography stack: FGB, GTStandard-M
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #2ba638 - canvas / dominant background
- Color 2: #fe6f2f - primary text or opposing surface
- Color 3: #fef001 - accent / interactive signal
- Color 4: #00a0e8 - supporting surface or hover state
- Color 5: #d1131c - supporting surface or hover state
- Color 6: #fbfbf5 - supporting surface or hover state
- Color 7: #af90f9 - supporting surface or hover state
- Color 8: #6497f5 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: FGB
- Secondary: GTStandard-M

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 30px / weight 400 / line-height 35px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 112, 48) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps FGB in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#2ba638) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (fashion, e-commerce, colorful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 0px 0px 15px 15px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use FGB consistently for headlines and interface labels.
- Keep the palette anchored to #2ba638, #fe6f2f, and #fef001.
- Preserve the experimental posture signaled by the loadmo.re tags: fashion, e-commerce, colorful.
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

> Build a responsive landing page inspired by Angus Chiang Online. Keep the palette centered on #2ba638, #fe6f2f, and #fef001. Use FGB for headlines, preserve the editorial fashion energy mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/angus-chiang-online)
- Live site: http://anguschiang.com
- Credits: An Yen, Angus Chiang, David Peñula
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
