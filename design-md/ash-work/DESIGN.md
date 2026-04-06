# Design System Inspiration of Ash Work

## 1. Visual Theme & Atmosphere

Ash Work reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #5c6629, #181914, and accent notes from #646e4b. Play with the focus of a CGI image.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Univers LT Std, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #5c6629, #181914, #646e4b, #8d955f
- Typography stack: Univers LT Std
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #5c6629 - canvas / dominant background
- Color 2: #181914 - primary text or opposing surface
- Color 3: #646e4b - accent / interactive signal
- Color 4: #8d955f - supporting surface or hover state
- Color 5: #798450 - supporting surface or hover state
- Color 6: #77842f - supporting surface or hover state
- Color 7: #a3a692 - supporting surface or hover state
- Color 8: #3b441f - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Univers LT Std

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 20px / weight 700 / line-height 20px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(242, 242, 242) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Univers LT Std in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#5c6629) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, 3d) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Univers LT Std consistently for headlines and interface labels.
- Keep the palette anchored to #5c6629, #181914, and #646e4b.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, 3d.
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

> Build a responsive landing page inspired by Ash Work. Keep the palette centered on #5c6629, #181914, and #646e4b. Use Univers LT Std for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/ash-work)
- Live site: https://ash.work/
- Credits: AshSeamus White
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
