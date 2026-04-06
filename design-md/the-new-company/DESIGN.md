# Design System Inspiration of The New Company

## 1. Visual Theme & Atmosphere

The New Company reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #e3d9cf, #252324, and accent notes from #655c55. Play around with gravity and draggable elements on this cheerful homepage.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers NeueHaas, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #e3d9cf, #252324, #655c55, #aba199
- Typography stack: NeueHaas
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #e3d9cf - canvas / dominant background
- Color 2: #252324 - primary text or opposing surface
- Color 3: #655c55 - accent / interactive signal
- Color 4: #aba199 - supporting surface or hover state
- Color 5: #c8b7ad - supporting surface or hover state
- Color 6: #93705a - supporting surface or hover state
- Color 7: #c89366 - supporting surface or hover state
- Color 8: #cec3ba - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: NeueHaas

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 13px / weight 400 / line-height 14.95px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps NeueHaas in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#e3d9cf) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use NeueHaas consistently for headlines and interface labels.
- Keep the palette anchored to #e3d9cf, #252324, and #655c55.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio.
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

> Build a responsive landing page inspired by The New Company. Keep the palette centered on #e3d9cf, #252324, and #655c55. Use NeueHaas for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/the-new-company)
- Live site: https://www.new.company
- Credits: The New Company
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
