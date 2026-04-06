# Design System Inspiration of Vera VanDeSeyp

## 1. Visual Theme & Atmosphere

Vera VanDeSeyp reads as retro-computing cues, type-led composition. The live capture resolves to a dark-leaning system built around #020104, #9a41fd, and accent notes from #622aa2. Portfolio website with stretchy text and a guestbook where visitors can design their messages using a variable font.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers monument-mono, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #020104, #9a41fd, #622aa2, #8a3ae3
- Typography stack: monument-mono, dumpling, dumpling-extra
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #020104 - canvas / dominant background
- Color 2: #9a41fd - primary text or opposing surface
- Color 3: #622aa2 - accent / interactive signal
- Color 4: #8a3ae3 - supporting surface or hover state
- Color 5: #321653 - supporting surface or hover state
- Color 6: #7934c8 - supporting surface or hover state
- Color 7: #441e73 - supporting surface or hover state
- Color 8: #5f6266 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: monument-mono
- Secondary: dumpling
- Support: dumpling-extra

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 18px / weight 400 / line-height 22px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(167, 175, 182) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps monument-mono in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#020104) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, typography, retro) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 30px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use monument-mono consistently for headlines and interface labels.
- Keep the palette anchored to #020104, #9a41fd, and #622aa2.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, typography, retro.
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

> Build a responsive landing page inspired by Vera VanDeSeyp. Keep the palette centered on #020104, #9a41fd, and #622aa2. Use monument-mono for headlines, preserve the retro-computing cues, type-led composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/vera-vandeseyp)
- Live site: https://veravandeseyp.com/
- Credits: Vera van de Seyp, Koos Breen
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
