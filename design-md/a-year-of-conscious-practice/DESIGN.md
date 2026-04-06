# Design System Inspiration of A year of Conscious Practice

## 1. Visual Theme & Atmosphere

A year of Conscious Practice reads as restrained minimalism. The live capture resolves to a light-leaning system built around #ebecec, #bbb9a6, and accent notes from #fc4712. A very well-designed mobile website to read 12 essays written throughout a year of dialogue.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers LyonText, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #ebecec, #bbb9a6, #fc4712, #cffe71
- Typography stack: LyonText, Gestalt
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #ebecec - canvas / dominant background
- Color 2: #bbb9a6 - primary text or opposing surface
- Color 3: #fc4712 - accent / interactive signal
- Color 4: #cffe71 - supporting surface or hover state
- Color 5: #837e95 - supporting surface or hover state
- Color 6: #8faeda - supporting surface or hover state
- Color 7: #141116 - supporting surface or hover state
- Color 8: #7194c9 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: LyonText
- Secondary: Gestalt

### Hierarchy Snapshot
- Heading sample: 75.6px / weight 400 / letter-spacing 1.44px
- Body sample: 16px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps LyonText in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#ebecec) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (online-magazine, colorful, clean-ui) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgb(255, 255, 255) 0px -4px 0px 0px inset.
- Radius cue: 0%.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use LyonText consistently for headlines and interface labels.
- Keep the palette anchored to #ebecec, #bbb9a6, and #fc4712.
- Preserve the experimental posture signaled by the loadmo.re tags: online-magazine, colorful, clean-ui.
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

> Build a responsive landing page inspired by A year of Conscious Practice. Keep the palette centered on #ebecec, #bbb9a6, and #fc4712. Use LyonText for headlines, preserve the restrained minimalism mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/a-year-of-conscious-practice)
- Live site: http://ayearofconsciouspractice.com/
- Credits: Dexter Edwards, Son La Pham
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
