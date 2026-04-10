# Design System Inspiration of My Smol Site

## 1. Visual Theme & Atmosphere

My Smol Site reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #f8f8f8, #1f1865, and accent notes from #fd6b36. This is a site to help people make one-page sites, resurrecting Clippy in the form of the cartoon character from the Loki series.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers IBM Plex Mono, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f8f8f8, #1f1865, #fd6b36, #f3f30a
- Typography stack: IBM Plex Mono, IBM Plex Sans Condensed, Patrick Hand
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Collage Core - tags include colorful; archetype affinity: collage field
- Secondary: Playable Poster - tags include colorful; archetype affinity: collage field; large display type

### Interaction Archetype
- Archetype: Collage Field (58% confidence)
- Why: tags include colorful; large display type
- Core verbs: scan, hover, collect
- Inputs: scroll, hover, tap



## 3. Color Palette & Roles

- Color 1: #f8f8f8 - canvas / dominant background
- Color 2: #1f1865 - primary text or opposing surface
- Color 3: #fd6b36 - accent / interactive signal
- Color 4: #f3f30a - supporting surface or hover state
- Color 5: #a6a5a5 - supporting surface or hover state
- Color 6: #585867 - supporting surface or hover state
- Color 7: #f8ab8f - supporting surface or hover state
- Color 8: #645c88 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: IBM Plex Mono
- Secondary: IBM Plex Sans Condensed
- Support: Patrick Hand
- Support: Poppins

### Hierarchy Snapshot
- Heading sample: 85.8307px / weight 500 / letter-spacing -0.98956px
- Body sample: 14.4px / weight 400 / line-height 20.16px
- Button sample: n/a / weight n/a

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f8f8f8) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (colorful) imply the system is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit rgb(255, 255, 255) as the interaction signal.

## 6. Interaction Mechanics

- Primary model: collage_field
- Navigation structure: map / wayfinding ambient / friction high
- Navigation model: Users browse clusters or islands of content rather than a clean linear document.
- State model: Field at rest -> hover or focus cluster -> reveal linked artifact -> continue browsing.
- Must-keep mechanic: The page behaves like a field of scraps, hyperlinks, stickers, and media fragments; discovery comes from scanning and touching layers.

## 7. Motion System

- Density: medium
- Cadence: continuous
- Triggers: pointer, scroll, time
- Transition types: shuffle, jitter, fade
- Physics level: light
- Motion recipe:
  - Use layered reveals, jitter, and hover swaps selectively.
  - Let movement imply depth between scraps rather than simulating real 3D.
  - Keep one stable composition anchor so the field does not turn into noise.

## 8. Spatial Model

- Space type: layered-2d
- Camera behavior: parallax
- Depth cues: scale, occlusion, blur
- HUD layering: overlay
- Render tier: dom
- Primary depth cue in capture: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px

## 9. Participation & State

- Participation mode: browse
- Persistence: ephemeral
- Inputs to preserve: scroll, hover, tap
- Reset/save posture: Default to resettable, lightweight state changes.

## 10. Sound & Sensor Behavior

- Audio role: none
- Audio triggers: none
- Controls: none
- Sync: none
- Required APIs or platform hooks: none

## 11. Implementation Checklist

- Complexity: medium
- Required APIs: none
- Must-have mechanics:
  - Keep one hierarchy anchor such as a headline, map, or rail so the collage stays legible.
  - Treat every scrap as part of one composition, not a random sticker dump.
  - Use link states and media swaps as the interaction language.
- Nice-to-have embellishments:
  - tags include colorful
  - large display type
- Mobile fallback: Flatten the field into a guided scavenger feed or chapter stack while preserving overlap, stickers, and hyperlink energy.
- Fallback path: guided-feed, reduced-motion
- Manual validation:
  - One anchor element keeps the field navigable.
  - Linked scraps clearly advertise interaction.
  - Mobile preserves density through chapters instead of raw chaos.

## 12. Do's and Don'ts

### Do
- Use IBM Plex Mono consistently for headlines and interface labels.
- Keep the palette anchored to #f8f8f8, #1f1865, and #fd6b36.
- Preserve the experimental posture signaled by the archive tags: colorful.
- Build separate desktop and mobile compositions instead of pretending one layout can fake both.
- Use the inferred mechanics schema as the implementation baseline before adding ornament.

### Don't
- Don't genericize the interface into a default SaaS landing page.
- Don't introduce rounded, pastel, or glassmorphism defaults unless the captured site already does.
- Don't replace the extracted font stack with Inter/Roboto/system as the main voice unless no custom stack loaded.
- Don't ignore the mobile fallback just because the desktop interaction is more fun.
- Don't copy screenshots literally when the repo only has archival capture evidence.

## 13. Responsive Behavior

- Desktop capture uses screenshots/desktop.jpg as the visual baseline.
- Mobile capture uses screenshots/mobile.jpg as the mobile baseline.
- Keep touch targets oversized on mobile and allow the background system to dominate the viewport.
- Implement mobile as: Flatten the field into a guided scavenger feed or chapter stack while preserving overlap, stickers, and hyperlink energy..
- If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build this as a Collage Core page with a secondary cue from Playable Poster using the Collage Field interaction model. Keep IBM Plex Mono as the voice anchor, preserve the palette around #f8f8f8, #1f1865, #fd6b36, drive the page through scroll, hover, tap, and implement the mobile fallback as: Flatten the field into a guided scavenger feed or chapter stack while preserving overlap, stickers, and hyperlink energy.


## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/my-smol-site)
- Live site: https://mysmol.site/
- Credits: Sarim Haque
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
