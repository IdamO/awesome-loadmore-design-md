# Design System Inspiration of Chapps Online

## 1. Visual Theme & Atmosphere

Chapps Online reads as restrained minimalism. The live capture resolves to a light-leaning system built around #fefefd, #5e5e5e, and accent notes from #d9c9a9. Click and drag to ping necklaces in a satisfying interaction for Emily Chapps' portfolio

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers archivo_black, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefefd, #5e5e5e, #d9c9a9, #ceb891
- Typography stack: archivo_black
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #fefefd - canvas / dominant background
- Color 2: #5e5e5e - primary text or opposing surface
- Color 3: #d9c9a9 - accent / interactive signal
- Color 4: #ceb891 - supporting surface or hover state
- Color 5: #a3a3a3 - supporting surface or hover state
- Color 6: #d0a053 - supporting surface or hover state
- Color 7: #333232 - supporting surface or hover state
- Color 8: #ce9739 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: archivo_black

### Hierarchy Snapshot
- Heading sample: 36px / weight 400 / letter-spacing normal
- Body sample: 36px / weight 400 / line-height 40px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps archivo_black in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefefd) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (tactile, portfolio, minimal) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use archivo_black consistently for headlines and interface labels.
- Keep the palette anchored to #fefefd, #5e5e5e, and #d9c9a9.
- Preserve the experimental posture signaled by the loadmo.re tags: tactile, portfolio, minimal.
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

> Build a responsive landing page inspired by Chapps Online. Keep the palette centered on #fefefd, #5e5e5e, and #d9c9a9. Use archivo_black for headlines, preserve the restrained minimalism mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/chapps-online)
- Live site: http://chapps.online/
- Credits: DXR Zone
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
