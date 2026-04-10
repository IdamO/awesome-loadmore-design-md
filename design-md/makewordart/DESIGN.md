# Design System Inspiration of Make Word Art

## 1. Visual Theme & Atmosphere

Make Word Art reads as playful interaction, retro-computing cues. The live capture resolves to a light-leaning system built around #f5f5f5, #8d8d8e, and accent notes from #215ba7. Go back in time with this nice web adaptation of the coolest typographic tool from the 2000s.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Impact, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f5f5f5, #8d8d8e, #215ba7, #787877
- Typography stack: Impact
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Cozy Desktop - tags include retro; tags include default-aesthetics; tags include playful
- Secondary: Collage Core - tags include playful; tags include retro

### Interaction Archetype
- Archetype: Retro Tool Emulator (96% confidence)
- Why: tags include retro; tags include default-aesthetics; tags include playful; description mentions tool
- Core verbs: edit, preset, export
- Inputs: tap, drag, type



## 3. Color Palette & Roles

- Color 1: #f5f5f5 - canvas / dominant background
- Color 2: #8d8d8e - primary text or opposing surface
- Color 3: #215ba7 - accent / interactive signal
- Color 4: #787877 - supporting surface or hover state
- Color 5: #10338d - supporting surface or hover state
- Color 6: #6e788c - supporting surface or hover state
- Color 7: #7a8596 - supporting surface or hover state
- Color 8: #062279 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Impact

### Hierarchy Snapshot
- Heading sample: 12px / weight 400 / letter-spacing normal
- Body sample: 12px / weight 400 / line-height 18px
- Button sample: 12px / weight 400

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f5f5f5) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful, retro, default-aesthetics) imply the system is intentionally non-generic.
- Buttons tend toward rgb(192, 192, 192) backgrounds with rgb(128, 128, 128) text, and links inherit rgb(255, 255, 255) as the interaction signal.

## 6. Interaction Mechanics

- Primary model: retro_tool_emulator
- Navigation structure: hub / wayfinding explicit / friction medium
- Navigation model: The utility surface is primary; menus, presets, and output views are the main navigation.
- State model: Pick tool or preset -> adjust parameters -> render or export -> reset or save.
- Must-keep mechanic: The interface behaves like a remembered app: menus, presets, panels, export, and toy controls are the product.

## 7. Motion System

- Density: low
- Cadence: event-driven
- Triggers: pointer, keyboard
- Transition types: cut, menu-drop, panel-swap
- Physics level: none
- Motion recipe:
  - Keep animation minimal and rely on press states, panel swaps, menu drops, and render feedback.
  - Use progress or export states to sell the utility fiction.
  - Avoid floaty transitions; remembered apps feel decisive.

## 8. Spatial Model

- Space type: flat
- Camera behavior: fixed
- Depth cues: scale
- HUD layering: overlay
- Render tier: mixed
- Primary depth cue in capture: rgb(223, 223, 223) 1px 1px 0px 0px inset, rgb(0, 0, 0) 1px 0px 0px 0px, rgb(0, 0, 0) 0px 1px 0px 0px, rgb(0, 0, 0) 1px 1px 0px 0px

## 9. Participation & State

- Participation mode: customize
- Persistence: saved
- Inputs to preserve: tap, drag, type
- Reset/save posture: Persist enough state that revisits feel intentional.

## 10. Sound & Sensor Behavior

- Audio role: none
- Audio triggers: none
- Controls: none
- Sync: none
- Required APIs or platform hooks: canvas

## 11. Implementation Checklist

- Complexity: medium
- Required APIs: canvas
- Must-have mechanics:
  - Keep the tool affordances obvious enough that users can generate output immediately.
  - Export or save flow should feel like part of the charm, not plumbing.
  - Use nostalgia as structure, not as a skin pasted over generic controls.
  - The capture suggests anchored framing or sticky context; preserve that orientation device in the rebuild.
- Nice-to-have embellishments:
  - tags include retro
  - tags include default-aesthetics
  - tags include playful
  - description mentions tool
  - description mentions make
  - description mentions word
- Mobile fallback: Turn dense panels into a one-tool-at-a-time inspector or wizard while preserving the visual chrome.
- Fallback path: wizard-flow, reduced-motion
- Manual validation:
  - The core generate or edit loop is obvious.
  - Preset, render, or export states read clearly.
  - Mobile isolates one tool region at a time.

## 12. Do's and Don'ts

### Do
- Use Impact consistently for headlines and interface labels.
- Keep the palette anchored to #f5f5f5, #8d8d8e, and #215ba7.
- Preserve the experimental posture signaled by the archive tags: playful, retro, default-aesthetics.
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
- Implement mobile as: Turn dense panels into a one-tool-at-a-time inspector or wizard while preserving the visual chrome..
- If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build this as a Cozy Desktop page with a secondary cue from Collage Core using the Retro Tool Emulator interaction model. Keep Impact as the voice anchor, preserve the palette around #f5f5f5, #8d8d8e, #215ba7, drive the page through tap, drag, type, and implement the mobile fallback as: Turn dense panels into a one-tool-at-a-time inspector or wizard while preserving the visual chrome.



## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/makewordart)
- Live site: https://makewordart.com/
- Credits: Mike Mcmillan
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
