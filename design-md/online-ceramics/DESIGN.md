# Design System Inspiration of Online Ceramics

## 1. Visual Theme & Atmosphere

Online Ceramics reads as restrained minimalism. The live capture resolves to a light-leaning system built around #dfe6ec, #95a1b1, and accent notes from #aab6c7. Single page e-shop that use only default fonts, and primary HTML colors. Actually really wanna get one of these sweaters.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers myriad-pro, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #dfe6ec, #95a1b1, #aab6c7, #5b718e
- Typography stack: myriad-pro, GTStandard-M
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #dfe6ec - canvas / dominant background
- Color 2: #95a1b1 - primary text or opposing surface
- Color 3: #aab6c7 - accent / interactive signal
- Color 4: #5b718e - supporting surface or hover state
- Color 5: #c8c6b9 - supporting surface or hover state
- Color 6: #76879e - supporting surface or hover state
- Color 7: #313045 - supporting surface or hover state
- Color 8: #b8c5d5 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: myriad-pro
- Secondary: GTStandard-M

### Hierarchy Snapshot
- Heading sample: 30px / weight 700 / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: 35px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: rgba(0, 0, 0, 0) 0px 0px 0px 2px.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps myriad-pro in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#dfe6ec) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (e-commerce, default-aesthetics, minimal) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgba(0, 0, 0, 0) 0px 0px 0px 2px.
- Radius cue: 3px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use myriad-pro consistently for headlines and interface labels.
- Keep the palette anchored to #dfe6ec, #95a1b1, and #aab6c7.
- Preserve the experimental posture signaled by the loadmo.re tags: e-commerce, default-aesthetics, minimal.
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

> Build a responsive landing page inspired by Online Ceramics. Keep the palette centered on #dfe6ec, #95a1b1, and #aab6c7. Use myriad-pro for headlines, preserve the restrained minimalism mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/online-ceramics)
- Live site: https://online-ceramics.com/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
