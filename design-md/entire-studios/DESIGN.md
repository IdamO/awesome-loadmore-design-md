# Design System Inspiration of Entire Studios

## 1. Visual Theme & Atmosphere

Entire Studios reads as restrained minimalism, sonic pacing. The live capture resolves to a dark-leaning system built around #13120a, #625d5e, and accent notes from #8f7467. Immersive e-shop page that includes sound and animations to enter in the brand's world.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Space Mono, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #13120a, #625d5e, #8f7467, #9e949a
- Typography stack: Space Mono, Space Mono Fallback, swiper-icons
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #13120a - canvas / dominant background
- Color 2: #625d5e - primary text or opposing surface
- Color 3: #8f7467 - accent / interactive signal
- Color 4: #9e949a - supporting surface or hover state
- Color 5: #e0dcdc - supporting surface or hover state
- Color 6: #747787 - supporting surface or hover state
- Color 7: #a28575 - supporting surface or hover state
- Color 8: #574b2f - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Space Mono
- Secondary: Space Mono Fallback
- Support: swiper-icons
- Support: spacemono
- Support: spacemonobold

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 24px
- Button sample: 16px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Space Mono in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#13120a) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (e-commerce, sound-design, clean-ui) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Space Mono consistently for headlines and interface labels.
- Keep the palette anchored to #13120a, #625d5e, and #8f7467.
- Preserve the experimental posture signaled by the loadmo.re tags: e-commerce, sound-design, clean-ui.
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

> Build a responsive landing page inspired by Entire Studios. Keep the palette centered on #13120a, #625d5e, and #8f7467. Use Space Mono for headlines, preserve the restrained minimalism, sonic pacing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/entire-studios)
- Live site: https://www.entirestudios.com/
- Credits: Meide (Studio)
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
