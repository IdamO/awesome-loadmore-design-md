# Design System Inspiration of Developments

## 1. Visual Theme & Atmosphere

Developments reads as type-led composition, exhibition-like framing. The live capture resolves to a light-leaning system built around #fefefe, #e7e7e7, and accent notes from #a2a2a2. Sleek mobile-friendly interface, which lets you browse interviews as in a slideshow, slide by slide.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers FolioBT-Book, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefefe, #e7e7e7, #a2a2a2, #616161
- Typography stack: FolioBT-Book, FolioBkBTWXX-Bold, FolioBT-Light
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #fefefe - canvas / dominant background
- Color 2: #e7e7e7 - primary text or opposing surface
- Color 3: #a2a2a2 - accent / interactive signal
- Color 4: #616161 - supporting surface or hover state
- Color 5: #030303 - supporting surface or hover state
- Color 6: #272727 - supporting surface or hover state
- Color 7: #c6c6c6 - supporting surface or hover state
- Color 8: #d8d8d8 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: FolioBT-Book
- Secondary: FolioBkBTWXX-Bold
- Support: FolioBT-Light
- Support: FolioLtBTWXX-LightItalic
- Support: FolioMdBTWXX-Medium
- Support: FolioXBdBTWXX-ExtraBold

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 17.5824px / weight 400 / line-height 19.3406px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps FolioBT-Book in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefefe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (arts&culture, typography, online-magazine) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 19.2px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use FolioBT-Book consistently for headlines and interface labels.
- Keep the palette anchored to #fefefe, #e7e7e7, and #a2a2a2.
- Preserve the experimental posture signaled by the loadmo.re tags: arts&culture, typography, online-magazine.
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

> Build a responsive landing page inspired by Developments. Keep the palette centered on #fefefe, #e7e7e7, and #a2a2a2. Use FolioBT-Book for headlines, preserve the type-led composition, exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/developments)
- Live site: https://developments.media
- Credits: Bildung, Antoine Roux, Tristan Bagot
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
