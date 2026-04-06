# Design System Inspiration of Dictionary of Online Behavior

## 1. Visual Theme & Atmosphere

Dictionary of Online Behavior reads as retro-computing cues, spatial depth, exhibition-like framing. The live capture resolves to a dark-leaning system built around #383838, #2b2b2b, and accent notes from #414141. Ever-growing illustrated lexicon of words related to the digital world. The index interface mimics Safari

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Lato, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #383838, #2b2b2b, #414141, #616161
- Typography stack: Lato
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #383838 - canvas / dominant background
- Color 2: #2b2b2b - primary text or opposing surface
- Color 3: #414141 - accent / interactive signal
- Color 4: #616161 - supporting surface or hover state
- Color 5: #777777 - supporting surface or hover state
- Color 6: #868686 - supporting surface or hover state
- Color 7: #969696 - supporting surface or hover state
- Color 8: #1e1e1e - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Lato

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 19.2px / weight 300 / line-height 26.88px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Lato in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#383838) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (arts&culture, retro, 3d-space) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 3px 3px 0px 0px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Lato consistently for headlines and interface labels.
- Keep the palette anchored to #383838, #2b2b2b, and #414141.
- Preserve the experimental posture signaled by the loadmo.re tags: arts&culture, retro, 3d-space.
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

> Build a responsive landing page inspired by Dictionary of Online Behavior. Keep the palette centered on #383838, #2b2b2b, and #414141. Use Lato for headlines, preserve the retro-computing cues, spatial depth, exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/dictionary-of-online-behavior)
- Live site: http://www.dictionaryofonlinebehavior.com/
- Credits: Achos , TeYosh
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
