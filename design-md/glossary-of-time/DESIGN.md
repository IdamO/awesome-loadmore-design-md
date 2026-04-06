# Design System Inspiration of Glossary of Time

## 1. Visual Theme & Atmosphere

Glossary of Time reads as restrained minimalism. The live capture resolves to a light-leaning system built around #f2efe9, #b0ada8, and accent notes from #d3b1ac. An incomplete glossary of time. Exploring the gaping holes in the lexicon of time that we don’t even realise we are missing.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers EB Garamond, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f2efe9, #b0ada8, #d3b1ac, #c5c2bc
- Typography stack: EB Garamond
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f2efe9 - canvas / dominant background
- Color 2: #b0ada8 - primary text or opposing surface
- Color 3: #d3b1ac - accent / interactive signal
- Color 4: #c5c2bc - supporting surface or hover state
- Color 5: #6c6a67 - supporting surface or hover state
- Color 6: #0d0d0c - supporting surface or hover state
- Color 7: #d77673 - supporting surface or hover state
- Color 8: #db827e - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: EB Garamond

### Hierarchy Snapshot
- Heading sample: 24px / weight 400 / letter-spacing normal
- Body sample: 24px / weight 400 / line-height normal
- Button sample: 24px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps EB Garamond in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f2efe9) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (minimal) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use EB Garamond consistently for headlines and interface labels.
- Keep the palette anchored to #f2efe9, #b0ada8, and #d3b1ac.
- Preserve the experimental posture signaled by the loadmo.re tags: minimal.
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

> Build a responsive landing page inspired by Glossary of Time. Keep the palette centered on #f2efe9, #b0ada8, and #d3b1ac. Use EB Garamond for headlines, preserve the restrained minimalism mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/glossary-of-time)
- Live site: https://glossaryoftime.com/
- Credits: Kalyani Tupkary Jon Packles
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
