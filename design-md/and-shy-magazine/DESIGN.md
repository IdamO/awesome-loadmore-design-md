# Design System Inspiration of And Shy Magazine

## 1. Visual Theme & Atmosphere

And Shy Magazine reads as type-led composition, exhibition-like framing. The live capture resolves to a dark-leaning system built around #010101, #f8f8f8, and accent notes from #9e9e9e. Online literature magazine exploring digital reading experiences, that features brilliant typographical interactions.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #010101, #f8f8f8, #9e9e9e, #656564
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #010101 - canvas / dominant background
- Color 2: #f8f8f8 - primary text or opposing surface
- Color 3: #9e9e9e - accent / interactive signal
- Color 4: #656564 - supporting surface or hover state
- Color 5: #0809f7 - supporting surface or hover state
- Color 6: #5dfb94 - supporting surface or hover state
- Color 7: #8d8cf2 - supporting surface or hover state
- Color 8: #5f60ec - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: 15px / weight 400 / letter-spacing normal
- Body sample: 15px / weight 400 / line-height normal
- Button sample: 15px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(0, 0, 255) backgrounds with rgb(255, 255, 255) text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 20px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#010101) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (online-magazine, typography, arts&culture) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 15px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #010101, #f8f8f8, and #9e9e9e.
- Preserve the experimental posture signaled by the loadmo.re tags: online-magazine, typography, arts&culture.
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

> Build a responsive landing page inspired by And Shy Magazine. Keep the palette centered on #010101, #f8f8f8, and #9e9e9e. Use the extracted primary font for headlines, preserve the type-led composition, exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/and-shy-magazine)
- Live site: https://www.andshymagazine.com
- Credits: Katharina Nejdl, Sophia Rohwetter, Victor Kümel, Chris Möller
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
