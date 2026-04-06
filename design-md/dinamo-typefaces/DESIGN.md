# Design System Inspiration of Dinamo Typefaces

## 1. Visual Theme & Atmosphere

Dinamo Typefaces reads as type-led composition. The live capture resolves to a dark-leaning system built around #60584a, #4d453a, and accent notes from #e1d0b7. Cute and colorful website presenting fonts by Dinamo Typefaces in a playful and sleek UI.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Monument Grotesk, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #60584a, #4d453a, #e1d0b7, #edddc5
- Typography stack: Monument Grotesk, Monument Grotesk Mono, Monument Grotesk Semi Mono
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #60584a - canvas / dominant background
- Color 2: #4d453a - primary text or opposing surface
- Color 3: #e1d0b7 - accent / interactive signal
- Color 4: #edddc5 - supporting surface or hover state
- Color 5: #271c14 - supporting surface or hover state
- Color 6: #b3a187 - supporting surface or hover state
- Color 7: #a59277 - supporting surface or hover state
- Color 8: #463a2e - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Monument Grotesk
- Secondary: Monument Grotesk Mono
- Support: Monument Grotesk Semi Mono
- Support: DinamoDarkroom
- Support: DinamoLoading
- Support: font-full-3755034

### Hierarchy Snapshot
- Heading sample: 80.4178px / weight 400 / letter-spacing normal
- Body sample: 20.8491px / weight 400 / line-height 22.934px
- Button sample: 9.15391px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Monument Grotesk in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#60584a) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (typography, colorful, graphic-design) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 11.1691px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Monument Grotesk consistently for headlines and interface labels.
- Keep the palette anchored to #60584a, #4d453a, and #e1d0b7.
- Preserve the experimental posture signaled by the loadmo.re tags: typography, colorful, graphic-design.
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

> Build a responsive landing page inspired by Dinamo Typefaces. Keep the palette centered on #60584a, #4d453a, and #e1d0b7. Use Monument Grotesk for headlines, preserve the type-led composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/dinamo-typefaces)
- Live site: https://abcdinamo.com
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
