# Design System Inspiration of Rude Captcha

## 1. Visual Theme & Atmosphere

Rude Captcha reads as playful interaction. The live capture resolves to a dark-leaning system built around #7e7e7e, #f4f5f5, and accent notes from #9b9ea4. Because AI can't be rude.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Material Icons, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #7e7e7e, #f4f5f5, #9b9ea4, #1f427b
- Typography stack: Material Icons
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #7e7e7e - canvas / dominant background
- Color 2: #f4f5f5 - primary text or opposing surface
- Color 3: #9b9ea4 - accent / interactive signal
- Color 4: #1f427b - supporting surface or hover state
- Color 5: #b7bcc5 - supporting surface or hover state
- Color 6: #153a76 - supporting surface or hover state
- Color 7: #7b7d81 - supporting surface or hover state
- Color 8: #7086a4 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Material Icons

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 28px
- Button sample: 20px / weight 700

## 4. Component Stylings

### Web
- Buttons tend toward rgb(156, 163, 175) backgrounds with rgb(255, 255, 255) text.
- Links inherit #9b9ea4 as the interaction signal.
- Border radius trends: 4px.
- Shadow language: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Material Icons in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#7e7e7e) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful, participative, photography) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px.
- Radius cue: 4px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Material Icons consistently for headlines and interface labels.
- Keep the palette anchored to #7e7e7e, #f4f5f5, and #9b9ea4.
- Preserve the experimental posture signaled by the loadmo.re tags: playful, participative, photography.
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

> Build a responsive landing page inspired by Rude Captcha. Keep the palette centered on #7e7e7e, #f4f5f5, and #9b9ea4. Use Material Icons for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/rude-captcha)
- Live site: http://rudecaptcha.xyz
- Credits: Matt Gordon
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
