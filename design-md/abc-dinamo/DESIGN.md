# Design System Inspiration of ABC Dinamo

## 1. Visual Theme & Atmosphere

ABC Dinamo reads as type-led composition. The live capture resolves to a dark-leaning system built around #fd4100, #eff3f6, and accent notes from #e53a03. Explore this vibrant, clean type studio site with smooth interactions. Navigate through typefaces and test them with your own text.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Monument Grotesk, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #fd4100, #eff3f6, #e53a03, #9f2a07
- Typography stack: Monument Grotesk, Monument Grotesk Mono, Monument Grotesk Semi Mono
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #fd4100 - canvas / dominant background
- Color 2: #eff3f6 - primary text or opposing surface
- Color 3: #e53a03 - accent / interactive signal
- Color 4: #9f2a07 - supporting surface or hover state
- Color 5: #1a0d0a - supporting surface or hover state
- Color 6: #621a07 - supporting surface or hover state
- Color 7: #ef9473 - supporting surface or hover state
- Color 8: #9ea1a3 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Monument Grotesk
- Secondary: Monument Grotesk Mono
- Support: Monument Grotesk Semi Mono
- Support: DinamoDarkroom
- Support: DinamoLoading
- Support: font-full-3755034

### Hierarchy Snapshot
- Heading sample: 32.7628px / weight 400 / letter-spacing normal
- Body sample: 20.8491px / weight 400 / line-height 22.934px
- Button sample: 9.15391px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(255, 255, 255) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Monument Grotesk in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fd4100) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (typography) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 182.28px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Monument Grotesk consistently for headlines and interface labels.
- Keep the palette anchored to #fd4100, #eff3f6, and #e53a03.
- Preserve the experimental posture signaled by the loadmo.re tags: typography.
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

> Build a responsive landing page inspired by ABC Dinamo. Keep the palette centered on #fd4100, #eff3f6, and #e53a03. Use Monument Grotesk for headlines, preserve the type-led composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/abc-dinamo)
- Live site: https://abcdinamo.com/typefaces/otto
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
