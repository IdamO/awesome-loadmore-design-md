# Design System Inspiration of TwoMuch studio

## 1. Visual Theme & Atmosphere

TwoMuch studio reads as spatial depth. The live capture resolves to a light-leaning system built around #f6f6f6, #aaa69f, and accent notes from #d7daa3. Play around with gravity and discover fantastic TwoMuch studio's work.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Business, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f6f6f6, #aaa69f, #d7daa3, #666760
- Typography stack: Business, monument-grotesk-regular, ABCMonumentGrotesk
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f6f6f6 - canvas / dominant background
- Color 2: #aaa69f - primary text or opposing surface
- Color 3: #d7daa3 - accent / interactive signal
- Color 4: #666760 - supporting surface or hover state
- Color 5: #cdb2aa - supporting surface or hover state
- Color 6: #9a8f6c - supporting surface or hover state
- Color 7: #d6e56e - supporting surface or hover state
- Color 8: #927264 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Business
- Secondary: monument-grotesk-regular
- Support: ABCMonumentGrotesk

### Hierarchy Snapshot
- Heading sample: 18px / weight 500 / letter-spacing -0.48px
- Body sample: 16px / weight 500 / line-height 16.8px
- Button sample: 14px / weight 500

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Business in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f6f6f6) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, tactile, 3d-space) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Business consistently for headlines and interface labels.
- Keep the palette anchored to #f6f6f6, #aaa69f, and #d7daa3.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, tactile, 3d-space.
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

> Build a responsive landing page inspired by TwoMuch studio. Keep the palette centered on #f6f6f6, #aaa69f, and #d7daa3. Use Business for headlines, preserve the spatial depth mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/twomuch-studio)
- Live site: https://twomuch.studio
- Credits: Malone Chen and Ben Chan
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
