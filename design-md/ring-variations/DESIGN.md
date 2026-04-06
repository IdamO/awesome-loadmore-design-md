# Design System Inspiration of Ring Variations

## 1. Visual Theme & Atmosphere

Ring Variations reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #fefefe, #c8c8c8, and accent notes from #d9d9d9. Trippy three dimensional ring variations.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers GT-Haptik, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefefe, #c8c8c8, #d9d9d9, #e7e7e7
- Typography stack: GT-Haptik
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fefefe - canvas / dominant background
- Color 2: #c8c8c8 - primary text or opposing surface
- Color 3: #d9d9d9 - accent / interactive signal
- Color 4: #e7e7e7 - supporting surface or hover state
- Color 5: #b6b6b6 - supporting surface or hover state
- Color 6: #ababab - supporting surface or hover state
- Color 7: #949494 - supporting surface or hover state
- Color 8: #797979 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: GT-Haptik

### Hierarchy Snapshot
- Heading sample: 16px / weight 700 / letter-spacing 0.8px
- Body sample: 16px / weight 400 / line-height 24px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps GT-Haptik in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefefe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (colorful, net.art) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 9999px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use GT-Haptik consistently for headlines and interface labels.
- Keep the palette anchored to #fefefe, #c8c8c8, and #d9d9d9.
- Preserve the experimental posture signaled by the loadmo.re tags: colorful, net.art.
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

> Build a responsive landing page inspired by Ring Variations. Keep the palette centered on #fefefe, #c8c8c8, and #d9d9d9. Use GT-Haptik for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/ring-variations)
- Live site: https://rings.elwyn.co/
- Credits: Benjamin Elwyn
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
