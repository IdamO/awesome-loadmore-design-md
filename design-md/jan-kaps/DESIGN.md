# Design System Inspiration of Jan Kaps

## 1. Visual Theme & Atmosphere

Jan Kaps reads as spatial depth, exhibition-like framing. The live capture resolves to a light-leaning system built around #f9f9f9, #d7d7d7, and accent notes from #c7c7c7. Beautiful bookstore website which lets you browse its collection by floating around a sphere.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers TeeFranklin, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f9f9f9, #d7d7d7, #c7c7c7, #e6e6e6
- Typography stack: TeeFranklin
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f9f9f9 - canvas / dominant background
- Color 2: #d7d7d7 - primary text or opposing surface
- Color 3: #c7c7c7 - accent / interactive signal
- Color 4: #e6e6e6 - supporting surface or hover state
- Color 5: #a6a6a6 - supporting surface or hover state
- Color 6: #b7b7b7 - supporting surface or hover state
- Color 7: #999999 - supporting surface or hover state
- Color 8: #000000 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: TeeFranklin

### Hierarchy Snapshot
- Heading sample: 19.6px / weight 400 / letter-spacing 0.28px
- Body sample: 14px / weight 400 / line-height 16.1px
- Button sample: 14px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit #c7c7c7 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps TeeFranklin in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f9f9f9) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (3d-space, arts&culture) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use TeeFranklin consistently for headlines and interface labels.
- Keep the palette anchored to #f9f9f9, #d7d7d7, and #c7c7c7.
- Preserve the experimental posture signaled by the loadmo.re tags: 3d-space, arts&culture.
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

> Build a responsive landing page inspired by Jan Kaps. Keep the palette centered on #f9f9f9, #d7d7d7, and #c7c7c7. Use TeeFranklin for headlines, preserve the spatial depth, exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/jan-kaps)
- Live site: https://jan-kaps.com/real-books
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
