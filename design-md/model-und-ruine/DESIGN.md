# Design System Inspiration of model und ruine

## 1. Visual Theme & Atmosphere

model und ruine reads as exhibition-like framing. The live capture resolves to a light-leaning system built around #f4f4f4, #090909, and accent notes from #a2a2a2. This german festival website brings a nice evolutive layering navigation.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Work Sans, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f4f4f4, #090909, #a2a2a2, #626262
- Typography stack: Work Sans, Forum, Pragati Narrow
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #f4f4f4 - canvas / dominant background
- Color 2: #090909 - primary text or opposing surface
- Color 3: #a2a2a2 - accent / interactive signal
- Color 4: #626262 - supporting surface or hover state
- Color 5: #d26b56 - supporting surface or hover state
- Color 6: #dda89d - supporting surface or hover state
- Color 7: #d44c32 - supporting surface or hover state
- Color 8: #e02d0c - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Work Sans
- Secondary: Forum
- Support: Pragati Narrow
- Support: bureau-grot
- Support: bureau-grot-condensed
- Support: slick

### Hierarchy Snapshot
- Heading sample: 51.84px / weight 400 / letter-spacing -0.72px
- Body sample: 25.92px / weight 400 / line-height 28.8px
- Button sample: 0px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgba(0, 0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Work Sans in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f4f4f4) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (arts&culture) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 28.8px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Work Sans consistently for headlines and interface labels.
- Keep the palette anchored to #f4f4f4, #090909, and #a2a2a2.
- Preserve the experimental posture signaled by the loadmo.re tags: arts&culture.
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

> Build a responsive landing page inspired by model und ruine. Keep the palette centered on #f4f4f4, #090909, and #a2a2a2. Use Work Sans for headlines, preserve the exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/model-und-ruine)
- Live site: https://modell-und-ruine.werkleitz.de/
- Credits: Model Und Ruine , Knoth Renner
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
