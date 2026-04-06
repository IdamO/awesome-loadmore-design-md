# Design System Inspiration of Viennese Modernism

## 1. Visual Theme & Atmosphere

Viennese Modernism reads as exhibition-like framing. The live capture resolves to a light-leaning system built around #f3f3f3, #161616, and accent notes from #a0a1a2. Nice heavily gridded website with some 3D playful twists.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Louize, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f3f3f3, #161616, #a0a1a2, #5b5c5d
- Typography stack: Louize, Graphik Web, Graphik
- Desktop posture: flowing document rhythm
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #f3f3f3 - canvas / dominant background
- Color 2: #161616 - primary text or opposing surface
- Color 3: #a0a1a2 - accent / interactive signal
- Color 4: #5b5c5d - supporting surface or hover state
- Color 5: #babdc1 - supporting surface or hover state
- Color 6: #7d8083 - supporting surface or hover state
- Color 7: #bdc0c5 - supporting surface or hover state
- Color 8: #7b7d81 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Louize
- Secondary: Graphik Web
- Support: Graphik

### Hierarchy Snapshot
- Heading sample: 35px / weight 400 / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Louize in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f3f3f3) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (arts&culture, animation) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Louize consistently for headlines and interface labels.
- Keep the palette anchored to #f3f3f3, #161616, and #a0a1a2.
- Preserve the experimental posture signaled by the loadmo.re tags: arts&culture, animation.
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

> Build a responsive landing page inspired by Viennese Modernism. Keep the palette centered on #f3f3f3, #161616, and #a0a1a2. Use Louize for headlines, preserve the exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/viennese-modernism)
- Live site: https://moderne.wien.info/en/
- Credits: Wild
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
