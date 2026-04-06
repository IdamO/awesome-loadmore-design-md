# Design System Inspiration of A Black Sun

## 1. Visual Theme & Atmosphere

A Black Sun reads as restrained minimalism, sonic pacing. The live capture resolves to a light-leaning system built around #fefefe, #a0a0a1, and accent notes from #cfcfcf. Bathe in the black sun with this immersive ambient poem.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers icomoon, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefefe, #a0a0a1, #cfcfcf, #202020
- Typography stack: icomoon, swiper-icons, Rubik-Light
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #fefefe - canvas / dominant background
- Color 2: #a0a0a1 - primary text or opposing surface
- Color 3: #cfcfcf - accent / interactive signal
- Color 4: #202020 - supporting surface or hover state
- Color 5: #626262 - supporting surface or hover state
- Color 6: #e8e8e8 - supporting surface or hover state
- Color 7: #7e7e80 - supporting surface or hover state
- Color 8: #bebec0 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: icomoon
- Secondary: swiper-icons
- Support: Rubik-Light
- Support: Rubik-Regular
- Support: Rubik-Medium
- Support: Rubik-LightItalic

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 28px / weight 800 / line-height 30.8px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps icomoon in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefefe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (sound-design, minimal) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 100px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use icomoon consistently for headlines and interface labels.
- Keep the palette anchored to #fefefe, #a0a0a1, and #cfcfcf.
- Preserve the experimental posture signaled by the loadmo.re tags: sound-design, minimal.
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

> Build a responsive landing page inspired by A Black Sun. Keep the palette centered on #fefefe, #a0a0a1, and #cfcfcf. Use icomoon for headlines, preserve the restrained minimalism, sonic pacing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/a-black-sun)
- Live site: https://nicolastilly.fr/a-black-sun/
- Credits: Nicolas Tilly
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
