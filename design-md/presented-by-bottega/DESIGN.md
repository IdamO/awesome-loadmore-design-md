# Design System Inspiration of Presented by Bottega

## 1. Visual Theme & Atmosphere

Presented by Bottega reads as editorial fashion energy. The live capture resolves to a light-leaning system built around #fefefe, #dcdede, and accent notes from #acaeaf. Another fancy slideshow by Bottega, proving once more that they were so right to leave Instagram!!!!!!

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefefe, #dcdede, #acaeaf, #a4ccca
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fefefe - canvas / dominant background
- Color 2: #dcdede - primary text or opposing surface
- Color 3: #acaeaf - accent / interactive signal
- Color 4: #a4ccca - supporting surface or hover state
- Color 5: #78aaa9 - supporting surface or hover state
- Color 6: #8cc1be - supporting surface or hover state
- Color 7: #bdbec0 - supporting surface or hover state
- Color 8: #757a7d - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: 22px / weight 700 / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 24px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(2, 128, 125) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefefe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (fashion) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgba(53, 58, 62, 0.06) 0px 1px 10px 0px, rgba(53, 58, 62, 0.08) 0px 2px 4px 0px.
- Radius cue: 8px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #fefefe, #dcdede, and #acaeaf.
- Preserve the experimental posture signaled by the loadmo.re tags: fashion.
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

> Build a responsive landing page inspired by Presented by Bottega. Keep the palette centered on #fefefe, #dcdede, and #acaeaf. Use the extracted primary font for headlines, preserve the editorial fashion energy mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/presented-by-bottega)
- Live site: http://presentedbybottega.com
- Credits: Tristan Bagot, Bureau COOL
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
