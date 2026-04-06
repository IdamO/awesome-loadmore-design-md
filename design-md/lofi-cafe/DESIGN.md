# Design System Inspiration of Lofi Cafe

## 1. Visual Theme & Atmosphere

Lofi Cafe reads as sonic pacing. The live capture resolves to a dark-leaning system built around #2f312f, #484c49, and accent notes from #3b423c. A radio that includes a TV screen to swich channels and that is actually displayed on a website.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers ChronoType, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #2f312f, #484c49, #3b423c, #3e4240
- Typography stack: ChronoType, VT323
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #2f312f - canvas / dominant background
- Color 2: #484c49 - primary text or opposing surface
- Color 3: #3b423c - accent / interactive signal
- Color 4: #3e4240 - supporting surface or hover state
- Color 5: #42423e - supporting surface or hover state
- Color 6: #728d72 - supporting surface or hover state
- Color 7: #96a38e - supporting surface or hover state
- Color 8: #3d3e40 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: ChronoType
- Secondary: VT323

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 21px / weight 400 / line-height 0px
- Button sample: 21px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(235, 235, 235) text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps ChronoType in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#2f312f) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (music) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use ChronoType consistently for headlines and interface labels.
- Keep the palette anchored to #2f312f, #484c49, and #3b423c.
- Preserve the experimental posture signaled by the loadmo.re tags: music.
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

> Build a responsive landing page inspired by Lofi Cafe. Keep the palette centered on #2f312f, #484c49, and #3b423c. Use ChronoType for headlines, preserve the sonic pacing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/lofi-cafe)
- Live site: https://lofi.cafe/
- Credits: Marianna Di Vito, Fabrizio Rinaldi
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
