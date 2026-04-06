# Design System Inspiration of Yaeji

## 1. Visual Theme & Atmosphere

Yaeji reads as sonic pacing, retro-computing cues. The live capture resolves to a light-leaning system built around #e2dcd3, #59585f, and accent notes from #1b1d2a. Yaeji is cool. Her website is very cute and comes with a drawing tool.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers 5final, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #e2dcd3, #59585f, #1b1d2a, #a49996
- Typography stack: 5final, RadioGrotesk
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #e2dcd3 - canvas / dominant background
- Color 2: #59585f - primary text or opposing surface
- Color 3: #1b1d2a - accent / interactive signal
- Color 4: #a49996 - supporting surface or hover state
- Color 5: #333845 - supporting surface or hover state
- Color 6: #946f5e - supporting surface or hover state
- Color 7: #c7b3a7 - supporting surface or hover state
- Color 8: #ad8a72 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: 5final
- Secondary: RadioGrotesk

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 24.5px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(248, 214, 216) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps 5final in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#e2dcd3) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (music, illustration, retro) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 3px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use 5final consistently for headlines and interface labels.
- Keep the palette anchored to #e2dcd3, #59585f, and #1b1d2a.
- Preserve the experimental posture signaled by the loadmo.re tags: music, illustration, retro.
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

> Build a responsive landing page inspired by Yaeji. Keep the palette centered on #e2dcd3, #59585f, and #1b1d2a. Use 5final for headlines, preserve the sonic pacing, retro-computing cues mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/yaeji)
- Live site: http://yaeji.com/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
