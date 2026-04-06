# Design System Inspiration of World On a Wire

## 1. Visual Theme & Atmosphere

World On a Wire reads as exhibition-like framing. The live capture resolves to a dark-leaning system built around #605d6b, #09090a, and accent notes from #122463. Tactile website, which feels like an interactive elastic poster to promote an artistic event by Hyundai Motorstudio.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers HyundaiSansText-Regular, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #605d6b, #09090a, #122463, #e2dcdc
- Typography stack: HyundaiSansText-Regular, HyundaiSansText-Medium
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #605d6b - canvas / dominant background
- Color 2: #09090a - primary text or opposing surface
- Color 3: #122463 - accent / interactive signal
- Color 4: #e2dcdc - supporting surface or hover state
- Color 5: #9c9aa3 - supporting surface or hover state
- Color 6: #936e65 - supporting surface or hover state
- Color 7: #5c6488 - supporting surface or hover state
- Color 8: #aeb5c5 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: HyundaiSansText-Regular
- Secondary: HyundaiSansText-Medium

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit #122463 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps HyundaiSansText-Regular in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#605d6b) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (arts&culture) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgb(255, 255, 255) 0px 0px 0px 0.1px inset.
- Radius cue: 2px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use HyundaiSansText-Regular consistently for headlines and interface labels.
- Keep the palette anchored to #605d6b, #09090a, and #122463.
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

> Build a responsive landing page inspired by World On a Wire. Keep the palette centered on #605d6b, #09090a, and #122463. Use HyundaiSansText-Regular for headlines, preserve the exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/world-on-a-wire)
- Live site: https://worldonawire.net/
- Credits: Yehwan Song 송예환
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
