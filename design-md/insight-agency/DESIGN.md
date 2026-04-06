# Design System Inspiration of Insight Agency

## 1. Visual Theme & Atmosphere

Insight Agency reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #d7d7d6, #131314, and accent notes from #a9a6a0. An interactive magnifying glass lets you explore a grid to preview Insight Agency's photography portfolio.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers swiper-icons, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #d7d7d6, #131314, #a9a6a0, #5f5f5d
- Typography stack: swiper-icons, __Basel_0d6fa4, __Basel_Fallback_0d6fa4
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #d7d7d6 - canvas / dominant background
- Color 2: #131314 - primary text or opposing surface
- Color 3: #a9a6a0 - accent / interactive signal
- Color 4: #5f5f5d - supporting surface or hover state
- Color 5: #c9b1a5 - supporting surface or hover state
- Color 6: #ccc5b6 - supporting surface or hover state
- Color 7: #9c6b5f - supporting surface or hover state
- Color 8: #582921 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: swiper-icons
- Secondary: __Basel_0d6fa4
- Support: __Basel_Fallback_0d6fa4

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 13px / weight 400 / line-height 13px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 0, 206) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps swiper-icons in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#d7d7d6) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, photography, colorful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use swiper-icons consistently for headlines and interface labels.
- Keep the palette anchored to #d7d7d6, #131314, and #a9a6a0.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, photography, colorful.
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

> Build a responsive landing page inspired by Insight Agency. Keep the palette centered on #d7d7d6, #131314, and #a9a6a0. Use swiper-icons for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/insight-agency)
- Live site: https://www.insight-agency.fr/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
