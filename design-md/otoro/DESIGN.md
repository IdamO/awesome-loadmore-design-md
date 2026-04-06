# Design System Inspiration of Otoro

## 1. Visual Theme & Atmosphere

Otoro reads as playful interaction. The live capture resolves to a light-leaning system built around #fec65d, #e1b36a, and accent notes from #c62f31. Feed cute pets on this playful simple one pager.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Glyphicons Halflings, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fec65d, #e1b36a, #c62f31, #ba3231
- Typography stack: Glyphicons Halflings, FontAwesome, Academicons
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fec65d - canvas / dominant background
- Color 2: #e1b36a - primary text or opposing surface
- Color 3: #c62f31 - accent / interactive signal
- Color 4: #ba3231 - supporting surface or hover state
- Color 5: #c76f53 - supporting surface or hover state
- Color 6: #d2a7a4 - supporting surface or hover state
- Color 7: #ddd7d7 - supporting surface or hover state
- Color 8: #ba5338 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Glyphicons Halflings
- Secondary: FontAwesome
- Support: Academicons
- Support: Roboto

### Hierarchy Snapshot
- Heading sample: 42px / weight 100 / letter-spacing normal
- Body sample: 28px / weight 100 / line-height 40px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 165, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Glyphicons Halflings in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fec65d) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful, animation, illustration) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Glyphicons Halflings consistently for headlines and interface labels.
- Keep the palette anchored to #fec65d, #e1b36a, and #c62f31.
- Preserve the experimental posture signaled by the loadmo.re tags: playful, animation, illustration.
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

> Build a responsive landing page inspired by Otoro. Keep the palette centered on #fec65d, #e1b36a, and #c62f31. Use Glyphicons Halflings for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/otoro)
- Live site: http://otoro.net
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
