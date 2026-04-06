# Design System Inspiration of Good Glyphs

## 1. Visual Theme & Atmosphere

Good Glyphs reads as type-led composition. The live capture resolves to a light-leaning system built around #c8fece, #040504, and accent notes from #516553. This website presents a dingbat font. Its interface lets you try it online and looks like a poster.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers good-glyphs, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #c8fece, #040504, #516553, #a7d3ab
- Typography stack: good-glyphs, swiper-icons
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #c8fece - canvas / dominant background
- Color 2: #040504 - primary text or opposing surface
- Color 3: #516553 - accent / interactive signal
- Color 4: #a7d3ab - supporting surface or hover state
- Color 5: #708d73 - supporting surface or hover state
- Color 6: #8baf8f - supporting surface or hover state
- Color 7: #39473a - supporting surface or hover state
- Color 8: #bceec2 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: good-glyphs
- Secondary: swiper-icons

### Hierarchy Snapshot
- Heading sample: 288px / weight 400 / letter-spacing -8.64px
- Body sample: 14px / weight 400 / line-height normal
- Button sample: 28px / weight 300

## 4. Component Stylings

### Web
- Buttons tend toward rgb(199, 255, 205) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 140px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps good-glyphs in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#c8fece) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (typography, graphic-design, colorful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 140px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use good-glyphs consistently for headlines and interface labels.
- Keep the palette anchored to #c8fece, #040504, and #516553.
- Preserve the experimental posture signaled by the loadmo.re tags: typography, graphic-design, colorful.
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

> Build a responsive landing page inspired by Good Glyphs. Keep the palette centered on #c8fece, #040504, and #516553. Use good-glyphs for headlines, preserve the type-led composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/good-glyphs)
- Live site: https://goodglyphs.com/
- Credits: Violet Office
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
