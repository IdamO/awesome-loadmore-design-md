# Design System Inspiration of Samuel Day

## 1. Visual Theme & Atmosphere

Samuel Day reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #ca4f52, #131111, and accent notes from #a94546. Sam's website is like an interactive comic strip: swipe down to browse whats within his head.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers webflow-icons, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #ca4f52, #131111, #a94546, #632c2e
- Typography stack: webflow-icons, Exposit
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #ca4f52 - canvas / dominant background
- Color 2: #131111 - primary text or opposing surface
- Color 3: #a94546 - accent / interactive signal
- Color 4: #632c2e - supporting surface or hover state
- Color 5: #8d3a3c - supporting surface or hover state
- Color 6: #983e40 - supporting surface or hover state
- Color 7: #94403e - supporting surface or hover state
- Color 8: #7b4142 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: webflow-icons
- Secondary: Exposit

### Hierarchy Snapshot
- Heading sample: 43.2px / weight 700 / letter-spacing normal
- Body sample: 14px / weight 400 / line-height 20px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 238) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps webflow-icons in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#ca4f52) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use webflow-icons consistently for headlines and interface labels.
- Keep the palette anchored to #ca4f52, #131111, and #a94546.
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

> Build a responsive landing page inspired by Samuel Day. Keep the palette centered on #ca4f52, #131111, and #a94546. Use webflow-icons for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/samuel-day)
- Live site: https://www.samuelday.de/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
