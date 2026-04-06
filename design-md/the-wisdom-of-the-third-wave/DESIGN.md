# Design System Inspiration of The Wisdom of the Third Wave

## 1. Visual Theme & Atmosphere

The Wisdom of the Third Wave reads as editorial fashion energy. The live capture resolves to a dark-leaning system built around #030204, #5d5960, and accent notes from #a6a6a5. Rayon Vert and Slam Jam have joined forces to create this platform

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers swiper-icons, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #030204, #5d5960, #a6a6a5, #cfcece
- Typography stack: swiper-icons, Ariel
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #030204 - canvas / dominant background
- Color 2: #5d5960 - primary text or opposing surface
- Color 3: #a6a6a5 - accent / interactive signal
- Color 4: #cfcece - supporting surface or hover state
- Color 5: #5d2b82 - supporting surface or hover state
- Color 6: #4c2867 - supporting surface or hover state
- Color 7: #361c4b - supporting surface or hover state
- Color 8: #8ca479 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: swiper-icons
- Secondary: Ariel

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 700 / line-height 19.2px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps swiper-icons in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#030204) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (e-commerce, default-aesthetics, fashion) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px.
- Radius cue: 4px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use swiper-icons consistently for headlines and interface labels.
- Keep the palette anchored to #030204, #5d5960, and #a6a6a5.
- Preserve the experimental posture signaled by the loadmo.re tags: e-commerce, default-aesthetics, fashion.
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

> Build a responsive landing page inspired by The Wisdom of the Third Wave. Keep the palette centered on #030204, #5d5960, and #a6a6a5. Use swiper-icons for headlines, preserve the editorial fashion energy mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/the-wisdom-of-the-third-wave)
- Live site: https://wisdom.slamjam.com/
- Credits: Giga
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
