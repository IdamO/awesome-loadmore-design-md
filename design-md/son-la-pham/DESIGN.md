# Design System Inspiration of Son La Pham

## 1. Visual Theme & Atmosphere

Son La Pham reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #cccccc, #a0dca1, and accent notes from #20ef23. Son La's website is like a living ecosystem. Draw pixels and they'll start having a little digital life of their own, moving, growing, changing.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers neuzeit, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #cccccc, #a0dca1, #20ef23, #5ee662
- Typography stack: neuzeit
- Desktop posture: flowing document rhythm
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #cccccc - canvas / dominant background
- Color 2: #a0dca1 - primary text or opposing surface
- Color 3: #20ef23 - accent / interactive signal
- Color 4: #5ee662 - supporting surface or hover state
- Color 5: #a1a3dc - supporting surface or hover state
- Color 6: #26a769 - supporting surface or hover state
- Color 7: #25908e - supporting surface or hover state
- Color 8: #26d14d - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: neuzeit

### Hierarchy Snapshot
- Heading sample: 48px / weight 400 / letter-spacing -0.48px
- Body sample: 48px / weight 400 / line-height 57.6px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps neuzeit in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#cccccc) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, colorful, tactile) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use neuzeit consistently for headlines and interface labels.
- Keep the palette anchored to #cccccc, #a0dca1, and #20ef23.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, colorful, tactile.
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

> Build a responsive landing page inspired by Son La Pham. Keep the palette centered on #cccccc, #a0dca1, and #20ef23. Use neuzeit for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/son-la-pham)
- Live site: https://www.son-la.co/
- Credits: Son La Pham
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
