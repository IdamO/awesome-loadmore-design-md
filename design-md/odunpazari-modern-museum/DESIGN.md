# Design System Inspiration of Odunpazarı Modern Museum

## 1. Visual Theme & Atmosphere

Odunpazarı Modern Museum reads as spatial depth, exhibition-like framing. The live capture resolves to a dark-leaning system built around #fd330f, #fdfaf9, and accent notes from #f5a798. Explore the museum's collection through a 360 navigation that gives you a glimpse of the building's wooden structures by architect Kengo Kuma.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers BasisGrotesquePro-Regular-Web, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #fd330f, #fdfaf9, #f5a798, #f16c52
- Typography stack: BasisGrotesquePro-Regular-Web, BasisGrotesquePro-Light-Web, BasisGrotesquePro-Medium-Web
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #fd330f - canvas / dominant background
- Color 2: #fdfaf9 - primary text or opposing surface
- Color 3: #f5a798 - accent / interactive signal
- Color 4: #f16c52 - supporting surface or hover state
- Color 5: #f54e2f - supporting surface or hover state
- Color 6: #a0a0a0 - supporting surface or hover state
- Color 7: #f28873 - supporting surface or hover state
- Color 8: #f9c6bc - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: BasisGrotesquePro-Regular-Web
- Secondary: BasisGrotesquePro-Light-Web
- Support: BasisGrotesquePro-Medium-Web
- Support: BasisGrotesquePro-Mono-Web
- Support: Cirka-Medium-Web
- Support: Lexend

### Hierarchy Snapshot
- Heading sample: 20px / weight 400 / letter-spacing -0.3px
- Body sample: 20px / weight 400 / line-height 26px
- Button sample: 13.3333px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgba(16, 16, 16, 0.3) text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps BasisGrotesquePro-Regular-Web in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fd330f) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (arts&culture, 3d-space, digital-exhibition) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 111px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use BasisGrotesquePro-Regular-Web consistently for headlines and interface labels.
- Keep the palette anchored to #fd330f, #fdfaf9, and #f5a798.
- Preserve the experimental posture signaled by the loadmo.re tags: arts&culture, 3d-space, digital-exhibition.
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

> Build a responsive landing page inspired by Odunpazarı Modern Museum. Keep the palette centered on #fd330f, #fdfaf9, and #f5a798. Use BasisGrotesquePro-Regular-Web for headlines, preserve the spatial depth, exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/odunpazari-modern-museum)
- Live site: https://omm.art/en/
- Credits: Future Corp
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
