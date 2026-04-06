# Design System Inspiration of The Emoji Personality Test

## 1. Visual Theme & Atmosphere

The Emoji Personality Test reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #fefefe, #a3a4a3, and accent notes from #e3d8a7. The world-famous emoji-based personality test.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers GT-Haptik, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefefe, #a3a4a3, #e3d8a7, #9ddaab
- Typography stack: GT-Haptik, Rotalic
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fefefe - canvas / dominant background
- Color 2: #a3a4a3 - primary text or opposing surface
- Color 3: #e3d8a7 - accent / interactive signal
- Color 4: #9ddaab - supporting surface or hover state
- Color 5: #8fda65 - supporting surface or hover state
- Color 6: #d2a664 - supporting surface or hover state
- Color 7: #d0671e - supporting surface or hover state
- Color 8: #a9dfc8 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: GT-Haptik
- Secondary: Rotalic

### Hierarchy Snapshot
- Heading sample: 30px / weight 400 / letter-spacing normal
- Body sample: 18px / weight 400 / line-height 28px
- Button sample: 60px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(255, 255, 255) backgrounds with rgb(0, 0, 0) text.
- Links inherit #e3d8a7 as the interaction signal.
- Border radius trends: 20%.
- Shadow language: rgba(0, 0, 0, 0.2) 0px -6px 12px 2px inset, rgba(255, 255, 255, 0.3) 0px 20px 6px 0px inset.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps GT-Haptik in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefefe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (participative) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgba(0, 0, 0, 0.2) 0px -6px 12px 2px inset, rgba(255, 255, 255, 0.3) 0px 20px 6px 0px inset.
- Radius cue: 20%.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use GT-Haptik consistently for headlines and interface labels.
- Keep the palette anchored to #fefefe, #a3a4a3, and #e3d8a7.
- Preserve the experimental posture signaled by the loadmo.re tags: participative.
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

> Build a responsive landing page inspired by The Emoji Personality Test. Keep the palette centered on #fefefe, #a3a4a3, and #e3d8a7. Use GT-Haptik for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/the-emoji-personality-test)
- Live site: https://emoji.elwyn.co/
- Credits: Benjamin Elwyn
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
