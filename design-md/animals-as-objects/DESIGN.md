# Design System Inspiration of Animals As Objects

## 1. Visual Theme & Atmosphere

Animals As Objects reads as playful interaction, exhibition-like framing. The live capture resolves to a light-leaning system built around #f7f4ef, #090909, and accent notes from #a9a6a2. This website is the result of a research from Zoological Natural History Museum in Berlin, using a word cloud to browse the content.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers century, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f7f4ef, #090909, #a9a6a2, #5b5e60
- Typography stack: century, century-mono
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #f7f4ef - canvas / dominant background
- Color 2: #090909 - primary text or opposing surface
- Color 3: #a9a6a2 - accent / interactive signal
- Color 4: #5b5e60 - supporting surface or hover state
- Color 5: #fe7e35 - supporting surface or hover state
- Color 6: #2d5e5f - supporting surface or hover state
- Color 7: #c9b8ac - supporting surface or hover state
- Color 8: #f29051 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: century
- Secondary: century-mono

### Hierarchy Snapshot
- Heading sample: 31.992px / weight 400 / letter-spacing normal
- Body sample: 24px / weight 400 / line-height normal
- Button sample: 16.0008px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(255, 255, 255) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 5px.
- Shadow language: rgba(0, 0, 0, 0.05) 0px 4px 10px 0px.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps century in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f7f4ef) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (arts&culture, playful, educational) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgba(0, 0, 0, 0.05) 0px 4px 10px 0px.
- Radius cue: 5px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use century consistently for headlines and interface labels.
- Keep the palette anchored to #f7f4ef, #090909, and #a9a6a2.
- Preserve the experimental posture signaled by the loadmo.re tags: arts&culture, playful, educational.
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

> Build a responsive landing page inspired by Animals As Objects. Keep the palette centered on #f7f4ef, #090909, and #a9a6a2. Use century for headlines, preserve the playful interaction, exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/animals-as-objects)
- Live site: https://animalsasobjects.org/
- Credits: Son-La Pham Rasmus Emanuel Svensson Claire Tolan
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
