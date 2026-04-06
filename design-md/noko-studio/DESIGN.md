# Design System Inspiration of Noko Studio

## 1. Visual Theme & Atmosphere

Noko Studio reads as restrained minimalism, playful interaction. The live capture resolves to a light-leaning system built around #fefefe, #9e9e9e, and accent notes from #6b6b6b. Ultra lightweight, super simple studio landing page featuring a silly interactive logo experiment.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Tex, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefefe, #9e9e9e, #6b6b6b, #9ef99e
- Typography stack: Tex
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #fefefe - canvas / dominant background
- Color 2: #9e9e9e - primary text or opposing surface
- Color 3: #6b6b6b - accent / interactive signal
- Color 4: #9ef99e - supporting surface or hover state
- Color 5: #69f869 - supporting surface or hover state
- Color 6: #31f831 - supporting surface or hover state
- Color 7: #3e3e3e - supporting surface or hover state
- Color 8: #80f87f - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Tex

### Hierarchy Snapshot
- Heading sample: 33.6px / weight 400 / letter-spacing normal
- Body sample: 33.6px / weight 400 / line-height 35.28px
- Button sample: 33.6px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with color(display-p3 0 0 0) text.
- Links inherit color(display-p3 0 0 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Tex in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefefe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful, minimal) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Tex consistently for headlines and interface labels.
- Keep the palette anchored to #fefefe, #9e9e9e, and #6b6b6b.
- Preserve the experimental posture signaled by the loadmo.re tags: playful, minimal.
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

> Build a responsive landing page inspired by Noko Studio. Keep the palette centered on #fefefe, #9e9e9e, and #6b6b6b. Use Tex for headlines, preserve the restrained minimalism, playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/noko-studio)
- Live site: https://noko.st/
- Credits: Noko Studio
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
