# Design System Inspiration of Badbadbadbad

## 1. Visual Theme & Atmosphere

Badbadbadbad reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #fdfdfd, #55575e, and accent notes from #0a0a0c. Bráulio Amado's website starts with a big

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Monument Grotesk Variable, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fdfdfd, #55575e, #0a0a0c, #9e9e9d
- Typography stack: Monument Grotesk Variable, Monument Grotesk Semi-Mono Variable, Monument Grotesk Mono Variable
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fdfdfd - canvas / dominant background
- Color 2: #55575e - primary text or opposing surface
- Color 3: #0a0a0c - accent / interactive signal
- Color 4: #9e9e9d - supporting surface or hover state
- Color 5: #314b5b - supporting surface or hover state
- Color 6: #333943 - supporting surface or hover state
- Color 7: #4a3b48 - supporting surface or hover state
- Color 8: #707a83 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Monument Grotesk Variable
- Secondary: Monument Grotesk Semi-Mono Variable
- Support: Monument Grotesk Mono Variable
- Support: Diatype Variable
- Support: Diatype Semi-Mono Variable
- Support: Diatype Mono Variable

### Hierarchy Snapshot
- Heading sample: 45.1584px / weight 800 / letter-spacing -0.677376px
- Body sample: 14.5px / weight 400 / line-height 23.925px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgba(0, 0, 0, 0.85) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Monument Grotesk Variable in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fdfdfd) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Monument Grotesk Variable consistently for headlines and interface labels.
- Keep the palette anchored to #fdfdfd, #55575e, and #0a0a0c.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio.
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

> Build a responsive landing page inspired by Badbadbadbad. Keep the palette centered on #fdfdfd, #55575e, and #0a0a0c. Use Monument Grotesk Variable for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/badbadbadbad)
- Live site: https://badbadbadbad.com/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
