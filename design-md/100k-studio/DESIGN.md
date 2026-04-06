# Design System Inspiration of 100k Studio

## 1. Visual Theme & Atmosphere

100k Studio reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #f9f9f9, #a3a3a3, and accent notes from #616161. Smooth interactions and unusual layout for this portfolio website of a Web Dev & Design website.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers NHaasGroteskDSPro-55Rg, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f9f9f9, #a3a3a3, #616161, #1b1b1b
- Typography stack: NHaasGroteskDSPro-55Rg, NHaasGroteskDSPro-65Md, NHaasGroteskDSPro-45Lt
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #f9f9f9 - canvas / dominant background
- Color 2: #a3a3a3 - primary text or opposing surface
- Color 3: #616161 - accent / interactive signal
- Color 4: #1b1b1b - supporting surface or hover state
- Color 5: #248cf6 - supporting surface or hover state
- Color 6: #aad0ec - supporting surface or hover state
- Color 7: #0278fa - supporting surface or hover state
- Color 8: #66aef2 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: NHaasGroteskDSPro-55Rg
- Secondary: NHaasGroteskDSPro-65Md
- Support: NHaasGroteskDSPro-45Lt

### Hierarchy Snapshot
- Heading sample: 20px / weight 400 / letter-spacing normal
- Body sample: 60px / weight 400 / line-height 60px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps NHaasGroteskDSPro-55Rg in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f9f9f9) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgba(0, 0, 0, 0.3) 0px 5px 21px 0px.
- Radius cue: 100px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use NHaasGroteskDSPro-55Rg consistently for headlines and interface labels.
- Keep the palette anchored to #f9f9f9, #a3a3a3, and #616161.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio.
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

> Build a responsive landing page inspired by 100k Studio. Keep the palette centered on #f9f9f9, #a3a3a3, and #616161. Use NHaasGroteskDSPro-55Rg for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/100k-studio)
- Live site: https://100k.studio/
- Credits: Armin Unruh
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
