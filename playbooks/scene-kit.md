# Scene Kit

This repo should help agents build pages that feel like they were made by a sharp design team, not assembled from a component marketplace.

## The model

Split design into four layers:

1. Behavior layer — accessibility, keyboard support, focus, menus, dialogs, tabs, sliders, disclosure
2. Scene layer — the authored page metaphor: room, archive, instrument, poster, desktop, collage
3. Material layer — textures, scribbles, scans, gradients, stickers, diagrams, stamps, shadows, paper, chrome
4. Motion layer — drift, reveal, drag, delay, inertia, ceremony, decay

The behavior layer should be consistent.
The other three layers should vary aggressively.

## Build rule

When making a new landing page, choose:

- 1 dominant world system
- 1 secondary interaction reference
- 1 typography authority reference
- 1 ornament/material pack

If you choose more than that, the page usually collapses into noise.
If you choose less, it usually collapses into template energy.

## Approved page metaphors

- room
- archive
- instrument
- poster
- desktop
- merch table
- field guide
- shrine
- signal map

Do not default to `hero / features / testimonials / CTA` as the organizing idea.
Those are content zones, not design concepts.

## Scene primitives

These should exist as reusable ideas even when implemented differently across projects:

- `HeroStage` — the main theatrical frame, not a plain hero block
- `TickerBand` — repeating language or signal strip for pace
- `ArtifactRail` — collectible cards, objects, notes, or editions
- `DropClock` — countdown, release cadence, or event-state module
- `StoryFrame` — editorial block with stronger composition than a generic card
- `RoomNav` — section navigation that feels spatial or curatorial
- `ScrapNote` — annotation, caption, aside, or margin note
- `LiveMeter` — progress, signal, energy, or audience-state widget
- `CapsuleTile` — merch, release, or edition tile with authored personality
- `ArchiveIndex` — list/grid/filter system that feels like a real archive, not CRUD UI

## Anti-patterns

- Generic section templates with loud colors pasted on top
- Motion used only on hover and nowhere else
- One typeface doing every job on the page
- Overusing the weird display font until it stops being special
- Shadcn-flavored spacing, radius, and card composition on public-facing work
- AI-generated full-page compositions used without human recomposition

## Shipping test

A page passes if:

- it reads as a specific world in the first three seconds
- its motion and material language feel intentional, not appended
- you could strip the logo out and still tell it is not enterprise default work
