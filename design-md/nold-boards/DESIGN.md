# Design System Inspiration of Nold Boards

## 1. Visual Theme & Atmosphere

Nold Boards reads as playful interaction, editorial fashion energy. The live capture resolves to a light-leaning system built around #fefefe, #00fe01, and accent notes from #9cfa9c. Skateboarding brand site that gives you left or right menu depending on whether you are a 'regular' or a 'goofy'

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers GT Haptik Black, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefefe, #00fe01, #9cfa9c, #62f962
- Typography stack: GT Haptik Black, GT Haptik Black Rotalic, GT Haptik Bold
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fefefe - canvas / dominant background
- Color 2: #00fe01 - primary text or opposing surface
- Color 3: #9cfa9c - accent / interactive signal
- Color 4: #62f962 - supporting surface or hover state
- Color 5: #3ffa40 - supporting surface or hover state
- Color 6: #80f97f - supporting surface or hover state
- Color 7: #c0fbbf - supporting surface or hover state
- Color 8: #7ffa80 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: GT Haptik Black
- Secondary: GT Haptik Black Rotalic
- Support: GT Haptik Bold
- Support: GT Haptik Medium

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 24.912px / weight 400 / line-height 29.952px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps GT Haptik Black in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefefe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (fashion, playful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use GT Haptik Black consistently for headlines and interface labels.
- Keep the palette anchored to #fefefe, #00fe01, and #9cfa9c.
- Preserve the experimental posture signaled by the loadmo.re tags: fashion, playful.
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

> Build a responsive landing page inspired by Nold Boards. Keep the palette centered on #fefefe, #00fe01, and #9cfa9c. Use GT Haptik Black for headlines, preserve the playful interaction, editorial fashion energy mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/nold-boards)
- Live site: https://noldboards.ch/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
