# Design System Inspiration of Tom Gould

## 1. Visual Theme & Atmosphere

Tom Gould reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #ecebe7, #a4a3a1, and accent notes from #5f5f5d. Nice portfolio website using Instagram stories UX to browse projects content. Innovative way to avoid traditional slideshows!

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Riforma, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #ecebe7, #a4a3a1, #5f5f5d, #252524
- Typography stack: Riforma, Items
- Desktop posture: flowing document rhythm
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #ecebe7 - canvas / dominant background
- Color 2: #a4a3a1 - primary text or opposing surface
- Color 3: #5f5f5d - accent / interactive signal
- Color 4: #252524 - supporting surface or hover state
- Color 5: #c2c1bd - supporting surface or hover state
- Color 6: #81807e - supporting surface or hover state
- Color 7: #adeccb - supporting surface or hover state
- Color 8: #40403e - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Riforma
- Secondary: Items

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 17px / weight 400 / line-height 17px
- Button sample: 14px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(54, 223, 130) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Riforma in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#ecebe7) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, video) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Riforma consistently for headlines and interface labels.
- Keep the palette anchored to #ecebe7, #a4a3a1, and #5f5f5d.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, video.
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

> Build a responsive landing page inspired by Tom Gould. Keep the palette centered on #ecebe7, #a4a3a1, and #5f5f5d. Use Riforma for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/tom-gould)
- Live site: https://tomgould.com/
- Credits: Elodie Fabbrie, Theo Tillberg,
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
