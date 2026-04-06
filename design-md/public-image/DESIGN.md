# Design System Inspiration of ©Public Image

## 1. Visual Theme & Atmosphere

©Public Image reads as restrained minimalism. The live capture resolves to a light-leaning system built around #fdfdfd, #1f1c1e, and accent notes from #a6a3a5. A landing page based on an interactive timeline to browse the studio's work.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers ItalianGaramondW01-Roma, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fdfdfd, #1f1c1e, #a6a3a5, #5d5757
- Typography stack: ItalianGaramondW01-Roma, ItalianGaramondW01-Ital, ItalianGaramondW01-Bold
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #fdfdfd - canvas / dominant background
- Color 2: #1f1c1e - primary text or opposing surface
- Color 3: #a6a3a5 - accent / interactive signal
- Color 4: #5d5757 - supporting surface or hover state
- Color 5: #9a6c57 - supporting surface or hover state
- Color 6: #cfa692 - supporting surface or hover state
- Color 7: #b68971 - supporting surface or hover state
- Color 8: #513227 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: ItalianGaramondW01-Roma
- Secondary: ItalianGaramondW01-Ital
- Support: ItalianGaramondW01-Bold

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 22px / weight 400 / line-height 25px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps ItalianGaramondW01-Roma in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fdfdfd) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (photography, clean-ui, portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use ItalianGaramondW01-Roma consistently for headlines and interface labels.
- Keep the palette anchored to #fdfdfd, #1f1c1e, and #a6a3a5.
- Preserve the experimental posture signaled by the loadmo.re tags: photography, clean-ui, portfolio.
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

> Build a responsive landing page inspired by ©Public Image. Keep the palette centered on #fdfdfd, #1f1c1e, and #a6a3a5. Use ItalianGaramondW01-Roma for headlines, preserve the restrained minimalism mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/public-image)
- Live site: https://public-image.co
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
