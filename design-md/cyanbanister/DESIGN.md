# Design System Inspiration of Cyan Banister

## 1. Visual Theme & Atmosphere

Cyan Banister reads as playful interaction, type-led composition. The live capture resolves to a dark-leaning system built around #5657e8, #e965a5, and accent notes from #fdfdfd. Personal site with internet-native attitude, asymmetrical pacing, and a strong anti-template energy that feels more like a live artifact than a portfolio shell.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers appleGaramond, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #5657e8, #e965a5, #fdfdfd, #6ca1e4
- Typography stack: appleGaramond, appleGaramond Fallback, chicago
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #5657e8 - canvas / dominant background
- Color 2: #e965a5 - primary text or opposing surface
- Color 3: #fdfdfd - accent / interactive signal
- Color 4: #6ca1e4 - supporting surface or hover state
- Color 5: #505ea4 - supporting surface or hover state
- Color 6: #9e4f6c - supporting surface or hover state
- Color 7: #9896a8 - supporting surface or hover state
- Color 8: #625868 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: appleGaramond
- Secondary: appleGaramond Fallback
- Support: chicago
- Support: chicago Fallback
- Support: JetBrains Mono
- Support: JetBrains Mono Fallback

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 20px / weight 400 / line-height 25px
- Button sample: 18px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(255, 255, 255) backgrounds with rgb(0, 0, 0) text.
- Links inherit lab(8.11897 0.811279 -12.254) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps appleGaramond in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#5657e8) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, typography, playful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use appleGaramond consistently for headlines and interface labels.
- Keep the palette anchored to #5657e8, #e965a5, and #fdfdfd.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, typography, playful.
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

> Build a responsive landing page inspired by Cyan Banister. Keep the palette centered on #5657e8, #e965a5, and #fdfdfd. Use appleGaramond for headlines, preserve the playful interaction, type-led composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: manual curation (https://cyanbanister.com/)
- Live site: https://cyanbanister.com/
- Credits: Cyan Banister
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
