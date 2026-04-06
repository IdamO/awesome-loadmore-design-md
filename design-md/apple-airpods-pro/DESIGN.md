# Design System Inspiration of Apple Airpods Pro

## 1. Visual Theme & Atmosphere

Apple Airpods Pro reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #ededee, #161617, and accent notes from #5c5d5f. Is this Elon Musk's new spaceship? Ha, no. Bluetooth headphones. Without doubt, Apple's web-designers are watching space movies for inspiration.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Apple Legacy Chevron, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #ededee, #161617, #5c5d5f, #9e9fa1
- Typography stack: Apple Legacy Chevron, Apple Icons 100, Apple Icons 200
- Desktop posture: flowing document rhythm
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #ededee - canvas / dominant background
- Color 2: #161617 - primary text or opposing surface
- Color 3: #5c5d5f - accent / interactive signal
- Color 4: #9e9fa1 - supporting surface or hover state
- Color 5: #b7bac6 - supporting surface or hover state
- Color 6: #3d4142 - supporting surface or hover state
- Color 7: #3b3d41 - supporting surface or hover state
- Color 8: #787886 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Apple Legacy Chevron
- Secondary: Apple Icons 100
- Support: Apple Icons 200
- Support: Apple Icons 300
- Support: Apple Icons 400
- Support: Apple Icons 500

### Hierarchy Snapshot
- Heading sample: 12px / weight 400 / letter-spacing -0.12px
- Body sample: 17px / weight 400 / line-height normal
- Button sample: 17px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(29, 29, 31) text.
- Links inherit rgba(0, 0, 0, 0.8) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Apple Legacy Chevron in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#ededee) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (e-commerce) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Apple Legacy Chevron consistently for headlines and interface labels.
- Keep the palette anchored to #ededee, #161617, and #5c5d5f.
- Preserve the experimental posture signaled by the loadmo.re tags: e-commerce.
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

> Build a responsive landing page inspired by Apple Airpods Pro. Keep the palette centered on #ededee, #161617, and #5c5d5f. Use Apple Legacy Chevron for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/apple-airpods-pro)
- Live site: https://www.apple.com/airpods-pro/
- Credits: Apple
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
