# Design System Inspiration of Hallo internet

## 1. Visual Theme & Atmosphere

Hallo internet reads as exhibition-like framing. The live capture resolves to a light-leaning system built around #f3f3f3, #100f10, and accent notes from #d27148. Nice bold imputs for this website that gathers a large collection of contemporary websites, all wrapped in desktop devices.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers TimesNewArial, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f3f3f3, #100f10, #d27148, #a0a0a1
- Typography stack: TimesNewArial
- Desktop posture: fixed/sticky framing
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f3f3f3 - canvas / dominant background
- Color 2: #100f10 - primary text or opposing surface
- Color 3: #d27148 - accent / interactive signal
- Color 4: #a0a0a1 - supporting surface or hover state
- Color 5: #5d5a5e - supporting surface or hover state
- Color 6: #b0532b - supporting surface or hover state
- Color 7: #c6643a - supporting surface or hover state
- Color 8: #dc8862 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: TimesNewArial

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 28.8px / weight 400 / line-height 33.84px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps TimesNewArial in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f3f3f3) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (arts&culture) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 7.2px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use TimesNewArial consistently for headlines and interface labels.
- Keep the palette anchored to #f3f3f3, #100f10, and #d27148.
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

> Build a responsive landing page inspired by Hallo internet. Keep the palette centered on #f3f3f3, #100f10, and #d27148. Use TimesNewArial for headlines, preserve the exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/hallo-internet)
- Live site: https://hallointer.net/
- Credits: David Liebermann
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
