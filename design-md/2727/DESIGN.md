# Design System Inspiration of 2727

## 1. Visual Theme & Atmosphere

2727 reads as restrained minimalism. The live capture resolves to a light-leaning system built around #f9edee, #a9989d, and accent notes from #8b6d6c. Effortless and colorful table-based layout for an artistic residency in Berkeley, CA.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Almarai, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f9edee, #a9989d, #8b6d6c, #725458
- Typography stack: Almarai, Ovo, squarespace-ui-font
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #f9edee - canvas / dominant background
- Color 2: #a9989d - primary text or opposing surface
- Color 3: #8b6d6c - accent / interactive signal
- Color 4: #725458 - supporting surface or hover state
- Color 5: #ccb2ad - supporting surface or hover state
- Color 6: #583136 - supporting surface or hover state
- Color 7: #917388 - supporting surface or hover state
- Color 8: #734839 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Almarai
- Secondary: Ovo
- Support: squarespace-ui-font
- Support: social-icon-font

### Hierarchy Snapshot
- Heading sample: 67.84px / weight 400 / letter-spacing -1.3568px
- Body sample: 16px / weight 400 / line-height 24px
- Button sample: 16px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(83, 26, 74) text.
- Links inherit rgb(252, 240, 240) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Almarai in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f9edee) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (default-aesthetics, educational, minimal) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 45px 0px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Almarai consistently for headlines and interface labels.
- Keep the palette anchored to #f9edee, #a9989d, and #8b6d6c.
- Preserve the experimental posture signaled by the loadmo.re tags: default-aesthetics, educational, minimal.
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

> Build a responsive landing page inspired by 2727. Keep the palette centered on #f9edee, #a9989d, and #8b6d6c. Use Almarai for headlines, preserve the restrained minimalism mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/2727)
- Live site: https://2727.today
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
