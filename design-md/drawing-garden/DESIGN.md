# Design System Inspiration of Drawing Garden

## 1. Visual Theme & Atmosphere

Drawing Garden reads as sonic pacing. The live capture resolves to a dark-leaning system built around #916327, #8a6229, and accent notes from #855928. Gardening, but with emojis and less time.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Libre Baskerville, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #916327, #8a6229, #855928, #966828
- Typography stack: Libre Baskerville
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #916327 - canvas / dominant background
- Color 2: #8a6229 - primary text or opposing surface
- Color 3: #855928 - accent / interactive signal
- Color 4: #966828 - supporting surface or hover state
- Color 5: #774719 - supporting surface or hover state
- Color 6: #6f4a22 - supporting surface or hover state
- Color 7: #7a5426 - supporting surface or hover state
- Color 8: #683911 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Libre Baskerville

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 32px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit #855928 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Libre Baskerville in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#916327) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (net.art, sound-design, colorful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Libre Baskerville consistently for headlines and interface labels.
- Keep the palette anchored to #916327, #8a6229, and #855928.
- Preserve the experimental posture signaled by the loadmo.re tags: net.art, sound-design, colorful.
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

> Build a responsive landing page inspired by Drawing Garden. Keep the palette centered on #916327, #8a6229, and #855928. Use Libre Baskerville for headlines, preserve the sonic pacing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/drawing-garden)
- Live site: https://drawing.garden/
- Credits: Ben Moren
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
