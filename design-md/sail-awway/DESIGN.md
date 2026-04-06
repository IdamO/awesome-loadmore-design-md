# Design System Inspiration of Sail Awway

## 1. Visual Theme & Atmosphere

Sail Awway reads as sonic pacing. The live capture resolves to a dark-leaning system built around #110704, #ab540b, and accent notes from #c4630c. Beautiful sensitive page presenting Maria Fernanda Fuentes' dream pop music project.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers TeXGyreHerosCondensed-Bold, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #110704, #ab540b, #c4630c, #5e2808
- Typography stack: TeXGyreHerosCondensed-Bold
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #110704 - canvas / dominant background
- Color 2: #ab540b - primary text or opposing surface
- Color 3: #c4630c - accent / interactive signal
- Color 4: #5e2808 - supporting surface or hover state
- Color 5: #df9562 - supporting surface or hover state
- Color 6: #f9f6f3 - supporting surface or hover state
- Color 7: #e9b08f - supporting surface or hover state
- Color 8: #873c06 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: TeXGyreHerosCondensed-Bold

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 700 / line-height normal
- Button sample: 38px / weight 700

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(255, 255, 255) text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps TeXGyreHerosCondensed-Bold in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#110704) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (tactile, music) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use TeXGyreHerosCondensed-Bold consistently for headlines and interface labels.
- Keep the palette anchored to #110704, #ab540b, and #c4630c.
- Preserve the experimental posture signaled by the loadmo.re tags: tactile, music.
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

> Build a responsive landing page inspired by Sail Awway. Keep the palette centered on #110704, #ab540b, and #c4630c. Use TeXGyreHerosCondensed-Bold for headlines, preserve the sonic pacing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/sail-awway)
- Live site: http://sailawway.com
- Credits: Fernanda Ruiz
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
