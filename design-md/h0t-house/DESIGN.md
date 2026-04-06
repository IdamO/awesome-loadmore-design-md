# Design System Inspiration of H0t House

## 1. Visual Theme & Atmosphere

H0t House reads as restrained minimalism. The live capture resolves to a light-leaning system built around #e7e7e3, #191c1c, and accent notes from #a6a4a1. Playful interactions and a smart theme-based search tool for exploration.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers SF, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #e7e7e3, #191c1c, #a6a4a1, #5f5e59
- Typography stack: SF, MM, AN
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #e7e7e3 - canvas / dominant background
- Color 2: #191c1c - primary text or opposing surface
- Color 3: #a6a4a1 - accent / interactive signal
- Color 4: #5f5e59 - supporting surface or hover state
- Color 5: #504b31 - supporting surface or hover state
- Color 6: #523731 - supporting surface or hover state
- Color 7: #2d3847 - supporting surface or hover state
- Color 8: #958a72 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: SF
- Secondary: MM
- Support: AN

### Hierarchy Snapshot
- Heading sample: 24px / weight 700 / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 19.2px
- Button sample: 16px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(0, 0, 0) backgrounds with rgb(255, 255, 255) text.
- Links inherit rgb(227, 226, 219) as the interaction signal.
- Border radius trends: 30px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps SF in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#e7e7e3) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (clean-ui) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 30px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use SF consistently for headlines and interface labels.
- Keep the palette anchored to #e7e7e3, #191c1c, and #a6a4a1.
- Preserve the experimental posture signaled by the loadmo.re tags: clean-ui.
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

> Build a responsive landing page inspired by H0t House. Keep the palette centered on #e7e7e3, #191c1c, and #a6a4a1. Use SF for headlines, preserve the restrained minimalism mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/h0t-house)
- Live site: https://h0t.house/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
