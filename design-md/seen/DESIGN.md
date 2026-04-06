# Design System Inspiration of Seen

## 1. Visual Theme & Atmosphere

Seen reads as spatial depth. The live capture resolves to a light-leaning system built around #dbaad1, #010102, and accent notes from #1b95d1. 3D world of super cute gaming controllers revealing text conversations about race, ethnicity and the creative industries.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers BB Sans, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #dbaad1, #010102, #1b95d1, #daa3b8
- Typography stack: BB Sans
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #dbaad1 - canvas / dominant background
- Color 2: #010102 - primary text or opposing surface
- Color 3: #1b95d1 - accent / interactive signal
- Color 4: #daa3b8 - supporting surface or hover state
- Color 5: #edcfe0 - supporting surface or hover state
- Color 6: #5aa7da - supporting surface or hover state
- Color 7: #a89dd5 - supporting surface or hover state
- Color 8: #9fcaea - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: BB Sans

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 16px
- Button sample: 14px / weight 500

## 4. Component Stylings

### Web
- Buttons tend toward rgb(255, 255, 255) backgrounds with rgb(104, 60, 114) text.
- Links inherit #1b95d1 as the interaction signal.
- Border radius trends: 32px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps BB Sans in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#dbaad1) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (3d-space, colorful, online-magazine) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 32px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use BB Sans consistently for headlines and interface labels.
- Keep the palette anchored to #dbaad1, #010102, and #1b95d1.
- Preserve the experimental posture signaled by the loadmo.re tags: 3d-space, colorful, online-magazine.
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

> Build a responsive landing page inspired by Seen. Keep the palette centered on #dbaad1, #010102, and #1b95d1. Use BB Sans for headlines, preserve the spatial depth mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/seen)
- Live site: https://www.seen.space/
- Credits: Bakken & Baeck
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
