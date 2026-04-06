# Design System Inspiration of Radicals Radicants

## 1. Visual Theme & Atmosphere

Radicals Radicants reads as exhibition-like framing. The live capture resolves to a light-leaning system built around #f0dc8b, #b5cfcc, and accent notes from #5bb076. This dense informational website envelopped its content in old school but delightful HTML frames.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers univers, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f0dc8b, #b5cfcc, #5bb076, #c9dddb
- Typography stack: univers, garamond
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f0dc8b - canvas / dominant background
- Color 2: #b5cfcc - primary text or opposing surface
- Color 3: #5bb076 - accent / interactive signal
- Color 4: #c9dddb - supporting surface or hover state
- Color 5: #73a597 - supporting surface or hover state
- Color 6: #90b0aa - supporting surface or hover state
- Color 7: #e8ce65 - supporting surface or hover state
- Color 8: #f56453 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: univers
- Secondary: garamond

### Hierarchy Snapshot
- Heading sample: 56px / weight 700 / letter-spacing 0.8px
- Body sample: 16px / weight 400 / line-height 19.2px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps univers in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f0dc8b) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (arts&culture, default-aesthetics, colorful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use univers consistently for headlines and interface labels.
- Keep the palette anchored to #f0dc8b, #b5cfcc, and #5bb076.
- Preserve the experimental posture signaled by the loadmo.re tags: arts&culture, default-aesthetics, colorful.
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

> Build a responsive landing page inspired by Radicals Radicants. Keep the palette centered on #f0dc8b, #b5cfcc, and #5bb076. Use univers for headlines, preserve the exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/radicals-radicants)
- Live site: http://radicalsradicants.com
- Credits: Joel Galvez, Phil Baber
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
