# Design System Inspiration of Arthur Teboul

## 1. Visual Theme & Atmosphere

Arthur Teboul reads as restrained minimalism, playful interaction. The live capture resolves to a light-leaning system built around #fefefe, #9d9d9d, and accent notes from #e7e7e7. Tap and draw with content.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers MultikulturelleGX, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefefe, #9d9d9d, #e7e7e7, #b7b7b7
- Typography stack: MultikulturelleGX
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fefefe - canvas / dominant background
- Color 2: #9d9d9d - primary text or opposing surface
- Color 3: #e7e7e7 - accent / interactive signal
- Color 4: #b7b7b7 - supporting surface or hover state
- Color 5: #d7d7d7 - supporting surface or hover state
- Color 6: #c7c7c7 - supporting surface or hover state
- Color 7: #7d7d7d - supporting surface or hover state
- Color 8: #bebec0 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: MultikulturelleGX

### Hierarchy Snapshot
- Heading sample: 12px / weight 400 / letter-spacing normal
- Body sample: 12px / weight 400 / line-height 15.6px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 238) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps MultikulturelleGX in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefefe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, tactile, minimal, playful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use MultikulturelleGX consistently for headlines and interface labels.
- Keep the palette anchored to #fefefe, #9d9d9d, and #e7e7e7.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, tactile, minimal, playful.
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

> Build a responsive landing page inspired by Arthur Teboul. Keep the palette centered on #fefefe, #9d9d9d, and #e7e7e7. Use MultikulturelleGX for headlines, preserve the restrained minimalism, playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/arthur-teboul)
- Live site: https://arthurteboul.com/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
