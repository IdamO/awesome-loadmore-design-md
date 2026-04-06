# Design System Inspiration of Williams College Museum Of Art

## 1. Visual Theme & Atmosphere

Williams College Museum Of Art reads as exhibition-like framing. The live capture resolves to a light-leaning system built around #eee9e4, #ceb296, and accent notes from #dcc7b3. Perfect combinaison between smart UX and playful interaction. If only every museums could afford a website like that!

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers gt-walsheim-regular, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #eee9e4, #ceb296, #dcc7b3, #ae9f91
- Typography stack: gt-walsheim-regular, gt-walsheim-bold, gt-cinetype-mono
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #eee9e4 - canvas / dominant background
- Color 2: #ceb296 - primary text or opposing surface
- Color 3: #dcc7b3 - accent / interactive signal
- Color 4: #ae9f91 - supporting surface or hover state
- Color 5: #cc9d6e - supporting surface or hover state
- Color 6: #ad8d6e - supporting surface or hover state
- Color 7: #24221b - supporting surface or hover state
- Color 8: #977355 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: gt-walsheim-regular
- Secondary: gt-walsheim-bold
- Support: gt-cinetype-mono

### Hierarchy Snapshot
- Heading sample: 24px / weight 400 / letter-spacing 0.5px
- Body sample: 18px / weight 400 / line-height 24.3px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps gt-walsheim-regular in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#eee9e4) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (arts&culture) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgba(0, 0, 0, 0.18) 0px 0px 9px 0px.
- Radius cue: 50%.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use gt-walsheim-regular consistently for headlines and interface labels.
- Keep the palette anchored to #eee9e4, #ceb296, and #dcc7b3.
- Preserve the experimental posture signaled by the loadmo.re tags: arts&culture.
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

> Build a responsive landing page inspired by Williams College Museum Of Art. Keep the palette centered on #eee9e4, #ceb296, and #dcc7b3. Use gt-walsheim-regular for headlines, preserve the exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/williams-college-museum-of-art)
- Live site: https://artmuseum.williams.edu/
- Credits: Linked by air
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
