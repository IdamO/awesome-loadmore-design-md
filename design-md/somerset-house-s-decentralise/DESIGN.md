# Design System Inspiration of Somerset House’s Decentralise

## 1. Visual Theme & Atmosphere

Somerset House’s Decentralise reads as sonic pacing. The live capture resolves to a light-leaning system built around #f5f5f5, #a9a9a9, and accent notes from #5c5c5c. 'Decentralise' is an online platform which explore the history of Black British art, through engaging with 16 key objects from Somerset House exhibition.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Grotesk, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f5f5f5, #a9a9a9, #5c5c5c, #2f4dbc
- Typography stack: Grotesk, Roman, hotjar
- Desktop posture: flowing document rhythm
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #f5f5f5 - canvas / dominant background
- Color 2: #a9a9a9 - primary text or opposing surface
- Color 3: #5c5c5c - accent / interactive signal
- Color 4: #2f4dbc - supporting surface or hover state
- Color 5: #2c2c2c - supporting surface or hover state
- Color 6: #5670d2 - supporting surface or hover state
- Color 7: #0429f9 - supporting surface or hover state
- Color 8: #3656eb - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Grotesk
- Secondary: Roman
- Support: hotjar
- Support: roboto

### Hierarchy Snapshot
- Heading sample: 30px / weight 400 / letter-spacing 2%
- Body sample: 14px / weight 400 / line-height 19.6px
- Button sample: 14px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(255, 255, 255) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 28px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Grotesk in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f5f5f5) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (tactile, illustration, sound-design) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 28px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Grotesk consistently for headlines and interface labels.
- Keep the palette anchored to #f5f5f5, #a9a9a9, and #5c5c5c.
- Preserve the experimental posture signaled by the loadmo.re tags: tactile, illustration, sound-design.
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

> Build a responsive landing page inspired by Somerset House’s Decentralise. Keep the palette centered on #f5f5f5, #a9a9a9, and #5c5c5c. Use Grotesk for headlines, preserve the sonic pacing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/somerset-house-s-decentralise)
- Live site: https://www.somersethouse.org.uk/blog/decentralise
- Credits: COMUZI, DxR Zone & Somerset House
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
