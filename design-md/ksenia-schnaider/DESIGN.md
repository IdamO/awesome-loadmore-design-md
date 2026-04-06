# Design System Inspiration of Ksenia Schnaider

## 1. Visual Theme & Atmosphere

Ksenia Schnaider reads as editorial fashion energy. The live capture resolves to a light-leaning system built around #e9eaeb, #a9a8a6, and accent notes from #1b1d21. Fashion e-comm website with nice UI details, and cool aesthetics.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Crimson Text, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #e9eaeb, #a9a8a6, #1b1d21, #d1aca2
- Typography stack: Crimson Text, ArialNarrow, Kanit-Klaviyo-Hosted
- Desktop posture: fixed/sticky framing
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #e9eaeb - canvas / dominant background
- Color 2: #a9a8a6 - primary text or opposing surface
- Color 3: #1b1d21 - accent / interactive signal
- Color 4: #d1aca2 - supporting surface or hover state
- Color 5: #5c5f62 - supporting surface or hover state
- Color 6: #d3c5b6 - supporting surface or hover state
- Color 7: #314c68 - supporting surface or hover state
- Color 8: #d05a62 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Crimson Text
- Secondary: ArialNarrow
- Support: Kanit-Klaviyo-Hosted
- Support: Poppins-Klaviyo-Hosted
- Support: GTStandard-M

### Hierarchy Snapshot
- Heading sample: 21.84px / weight 700 / letter-spacing normal
- Body sample: 18.2px / weight 400 / line-height 23.66px
- Button sample: 18.2px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(51, 51, 51) text.
- Links inherit rgb(31, 31, 31) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Crimson Text in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#e9eaeb) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (e-commerce, fashion) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 3px 3px 0px 0px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Crimson Text consistently for headlines and interface labels.
- Keep the palette anchored to #e9eaeb, #a9a8a6, and #1b1d21.
- Preserve the experimental posture signaled by the loadmo.re tags: e-commerce, fashion.
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

> Build a responsive landing page inspired by Ksenia Schnaider. Keep the palette centered on #e9eaeb, #a9a8a6, and #1b1d21. Use Crimson Text for headlines, preserve the editorial fashion energy mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/ksenia-schnaider)
- Live site: https://www.kseniaschnaider.com
- Credits: Future Perfect
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
