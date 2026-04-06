# Design System Inspiration of Wear The Waste by H&M

## 1. Visual Theme & Atmosphere

Wear The Waste by H&M reads as editorial fashion energy. The live capture resolves to a light-leaning system built around #f1f4f9, #5374a4, and accent notes from #53622f. This H&M campaign offers a delicate browsing among the clouds. Smooth camera movements and sleak animations.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f1f4f9, #5374a4, #53622f, #6587b4
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f1f4f9 - canvas / dominant background
- Color 2: #5374a4 - primary text or opposing surface
- Color 3: #53622f - accent / interactive signal
- Color 4: #6587b4 - supporting surface or hover state
- Color 5: #b5c9df - supporting surface or hover state
- Color 6: #99b1ce - supporting surface or hover state
- Color 7: #75854f - supporting surface or hover state
- Color 8: #6a7947 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: n/a / weight n/a / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit #53622f as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f1f4f9) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (fashion) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #f1f4f9, #5374a4, and #53622f.
- Preserve the experimental posture signaled by the loadmo.re tags: fashion.
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

> Build a responsive landing page inspired by Wear The Waste by H&M. Keep the palette centered on #f1f4f9, #5374a4, and #53622f. Use the extracted primary font for headlines, preserve the editorial fashion energy mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/wear-the-waste-by-h-m)
- Live site: https://wearthewaste.com/
- Credits: Julian Garnier
- Desktop capture: failed
- Mobile capture: failed
- Archival fallback: poster image used for missing screenshots
