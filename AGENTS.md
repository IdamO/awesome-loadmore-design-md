# Agent Navigation Guide

This repo is not a flat moodboard. It is an agent-usable design retrieval system for internet-native work.

## First pass

1. Open `playbooks/scene-kit.md` first when the task is net-new design, not imitation.
2. Open `playbooks/interaction-archetypes.md` to choose the actual mechanic before styling.
3. Open `playbooks/validation-rubric.md` before shipping anything interaction-heavy.
4. Open `data/design-os.json` for machine-readable world, motion, type, and archetype guidance.
5. Open `data/agent-index.json` for machine-readable filtering and ranking of source references.
6. Open `playbooks/poster-to-website.md` when the source is static art and the job is to synthesize a browser-native interaction model.
7. If the source is Arte Collective or another static poster corpus, start at `collections/arte-overview.md` before drilling into the family packs.
8. Filter for `captureMode: "live"` when you need interaction truth. Use `archival-fallback` when you need visual attitude more than verified UX. Use `concept-derived` when you need static-art-to-website translation patterns.
9. Filter by `mechanics.archetype.id`, `mechanics.schema.spatial.mode`, `mechanics.schema.sound.mode`, and `mechanics.validationPriority` before picking references.
10. If an entry exposes `musicTransposition` or another variant block, treat that generated object kit and prompt as canonical for that domain-specific remix.
11. Pick 1 dominant world system, 1 dominant interaction archetype, and 1 typography/material reference. Do not copy a single site verbatim. Recombine.

## Recommended selection logic

- For a bold product launch: sort by `scores.genZPop` and `scores.weird`, then pick a `playable_poster` or `collage_field` mechanic.
- For music tooling or artist-facing products: sort by `scores.musicTech`, then filter to `club_instrument` or `scroll_scrub_instrument`.
- For fashion, editorial, or culture worlds: sort by `scores.fashionCulture` and `scores.editorial`, then decide between `editorial_archive_index`, `portfolio_artifact`, or `commerce_shrine_stage`.
- For design-asset drops, poster commerce, or template marketplaces: sort by `scores.assetCommerce`, then filter to `commerce_shrine_stage` or `editorial_archive_index`.
- For spatial work: filter to `mechanics.schema.spatial.mode != "flat"` and prioritize `captureMode: "live"`.
- For anti-corporate energy: sort by `scores.weird`, then exclude entries with `clean-ui` or `e-commerce`.

## Design OS docs

- `playbooks/scene-kit.md`
- `playbooks/interaction-archetypes.md`
- `playbooks/validation-rubric.md`
- `playbooks/world-systems.md`
- `playbooks/motion-grammar.md`
- `playbooks/type-systems.md`
- `playbooks/asset-forge.md`
- `playbooks/poster-to-website.md`
- `playbooks/component-philosophy.md`
- `data/design-os.json`

## Domain starter packs

- `collections/arte-overview.md`
- `collections/gen-z-pop.md`
- `collections/music-tech.md`
- `collections/fashion-culture.md`
- `collections/culture-tech.md`
- `collections/design-asset-commerce.md`
- `collections/anti-b2b.md`
- `collections/combo-recipes.md`
- `collections/arte-aesthetic.md`
- `collections/arte-technology.md`
- `collections/arte-minimalism.md`

## Current repo state

- Total indexed sites: 467
- Live captures: 336
- Archival fallbacks: 55
- Poster concepts: 76
- Arte Collective poster concepts: 76
- Minimum usable target met: yes
