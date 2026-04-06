# Design System Inspiration of GT Flexa

## 1. Visual Theme & Atmosphere

GT Flexa reads as type-led composition. The live capture resolves to a light-leaning system built around #fefefe, #d4d4d4, and accent notes from #a5a5a5. You actually don't even have to interact with this website as it's having fun by itself. Just sit and watch.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Flexa Loader, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefefe, #d4d4d4, #a5a5a5, #8a8a8a
- Typography stack: Flexa Loader, Flexa, Flexa Mono
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fefefe - canvas / dominant background
- Color 2: #d4d4d4 - primary text or opposing surface
- Color 3: #a5a5a5 - accent / interactive signal
- Color 4: #8a8a8a - supporting surface or hover state
- Color 5: #6c6c6c - supporting surface or hover state
- Color 6: #fddd2f - supporting surface or hover state
- Color 7: #fbe35a - supporting surface or hover state
- Color 8: #fbf0ab - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Flexa Loader
- Secondary: Flexa
- Support: Flexa Mono

### Hierarchy Snapshot
- Heading sample: 158.4px / weight 400 / letter-spacing -2.376px
- Body sample: 151.2px / weight 400 / line-height 143.64px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Flexa Loader in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefefe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (animation, colorful, typography) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Flexa Loader consistently for headlines and interface labels.
- Keep the palette anchored to #fefefe, #d4d4d4, and #a5a5a5.
- Preserve the experimental posture signaled by the loadmo.re tags: animation, colorful, typography.
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

> Build a responsive landing page inspired by GT Flexa. Keep the palette centered on #fefefe, #d4d4d4, and #a5a5a5. Use Flexa Loader for headlines, preserve the type-led composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/gt-flexa)
- Live site: http://gt-flexa.com
- Credits: Grilli Type, Sensor Station, Informal Inquiry,
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
