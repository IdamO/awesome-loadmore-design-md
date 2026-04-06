# Design System Inspiration of Till Janz

## 1. Visual Theme & Atmosphere

Till Janz reads as editorial fashion energy. The live capture resolves to a dark-leaning system built around #000000, #21240a, and accent notes from #535810. Fashion photographer with a background in UX Design and Programming. Hence, has a cool website.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Isar Display, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #000000, #21240a, #535810, #24270b
- Typography stack: Isar Display, texgyreheros-bold
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #000000 - canvas / dominant background
- Color 2: #21240a - primary text or opposing surface
- Color 3: #535810 - accent / interactive signal
- Color 4: #24270b - supporting surface or hover state
- Color 5: #959c12 - supporting surface or hover state
- Color 6: #eaf011 - supporting surface or hover state
- Color 7: #7e8512 - supporting surface or hover state
- Color 8: #3c4115 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Isar Display
- Secondary: texgyreheros-bold

### Hierarchy Snapshot
- Heading sample: 50px / weight 400 / letter-spacing -0.4px
- Body sample: 36px / weight 400 / line-height 36px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(237, 255, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Isar Display in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#000000) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, fashion, glitches, photography) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Isar Display consistently for headlines and interface labels.
- Keep the palette anchored to #000000, #21240a, and #535810.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, fashion, glitches, photography.
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

> Build a responsive landing page inspired by Till Janz. Keep the palette centered on #000000, #21240a, and #535810. Use Isar Display for headlines, preserve the editorial fashion energy mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/till-janz)
- Live site: https://www.tilljanz.com
- Credits: Two Much Studio
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
