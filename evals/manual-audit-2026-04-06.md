# Manual Audit 2026-04-06

This pass checks that the new mechanics layer is not just present everywhere, but believable on representative references across the archive.

## Audit sequence

1. Regenerate all `389` entries with inferred mechanics
2. Rebuild `data/agent-index.json` and `data/design-os.json`
3. Run full repo validation
4. Manually inspect representative `DESIGN.md` files and screenshots across archetypes
5. Confirm that the inferred world system, archetype, inputs, motion model, spatial model, and mobile fallback are coherent

## Representative checks

### `stripe-press`

- Expected read: spatial 3D bookshelf with editorial/commercial framing
- Verified screenshot: shelf-like 2.5D stack with anchored chrome
- Verified inference: `Luxury Archive` + `Spatial Exhibition World`
- Verified implementation semantics: CSS 3D / mixed render tier, rail camera, guided-tour mobile fallback

### `cyanbanister`

- Expected read: authored personal artifact with weird desktop/poster energy
- Verified screenshot: icon field, desktop-window posture, eccentric authored pacing
- Verified inference: `Portfolio Artifact` with `Playable Poster` / `Collage Core` world cues
- Verified implementation semantics: authored document flow, low-density motion, single-column mobile preservation

### `camerons-world`

- Expected read: maximal net-art collage field, hyperlink-first exploration
- Verified screenshot: dense scrap field, spatial browsing through layered objects
- Verified inference: `Collage Core` + `Collage Field`
- Verified implementation semantics: map-like navigation, layered 2D space, jitter / hover / swap motion language

### `orb-farm`

- Expected read: retro default-UI shell wrapped around a toy/game loop
- Verified screenshot: fake window chrome, constrained play stage, obvious toy loop
- Verified inference: `Cozy Desktop` + `Toy Loop Microgame`
- Verified implementation semantics: single-scene loop, canvas-tier toy bias, tap/drag mobile fallback

### `jazz-keys`

- Expected read: single-surface music toy / expressive instrument
- Verified screenshot: sparse dark stage with one central musical idea
- Verified inference: `Club Instrument` + `Club Instrument`
- Verified implementation semantics: tight audio sync, reactive input, mute-first / audio-after-intent handling

### `amanda-yeah-piano-scrollbar-piano`

- Expected read: scroll-linked piano experiment, not just a decorative music page
- Verified screenshot: scrollbar-as-piano framing survives on desktop and mobile
- Verified inference: `Club Instrument` + `Scroll Scrub Instrument`
- Verified implementation semantics: scroll transport, reactive sound, stepped mobile fallback

### `developments`

- Expected read: index-first editorial archive with sticky context
- Verified screenshot: interview archive, strong typography, right-rail reference system
- Verified inference: `Luxury Archive` + `Editorial Archive Index`
- Verified implementation semantics: hub navigation, list/detail morph logic, session-level archive browsing

### `harley-weir`

- Expected read: editorial 3D object inspection with restrained framing
- Verified screenshot: fashion/editorial restraint plus 3D object premise from source description
- Verified inference: `Luxury Archive` + `Spatial Exhibition World`
- Verified implementation semantics: 3D object mode, orbit camera bias, guided-tour mobile fallback

### `smc-real-time`

- Expected read: exhibition-room navigation with fallback-only capture evidence
- Verified screenshot: archival visual evidence only
- Verified inference: `Luxury Archive` + `Spatial Exhibition World`
- Verified implementation semantics: fallback explicitly marked, world navigation inferred from description, guided-tour mobile fallback

## Global assertions checked after manual review

- All `389` `DESIGN.md` files include:
  - `Interaction Mechanics`
  - `Motion System`
  - `Spatial Model`
  - `Participation & State`
  - `Sound & Sensor Behavior`
  - `Implementation Checklist`
- All `389` `meta.json` files include a structured mechanics schema
- `data/agent-index.json` exposes world systems, archetypes, schema, and implementation prompts for machine retrieval

## Conclusion

The repo now carries both aesthetic direction and implementation-grade mechanics across the archive. The remaining risk is not missing structure; it is the irreducible ambiguity of fallback-only captures, which is now surfaced explicitly in the generated guidance instead of being silently guessed.
