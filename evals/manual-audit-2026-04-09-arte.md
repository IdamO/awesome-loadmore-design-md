# Arte Poster Manual Audit — 2026-04-09

Representative desktop audits after the family renderer rewrite.

## Pass Criteria
- no intact poster slab framed inside a website shell
- no storefront frame or wall treated as the design source of truth
- poster primitives expanded into the browser surface itself
- desktop and mobile both preserve the same poster-world logic

## Audited Entries
- `arte-relic`
  - family: `artifact-monolith`
  - result: pass
  - note: title, text field, and hardware cluster are decomposed into separate browser planes; no intact poster card remains
- `arte-ai-matrix`
  - family: `signal-slab`
  - result: pass
  - note: contour portrait now dominates the browser surface as a reactive field; frame bleed was reduced by zooming the source field
- `arte-code`
  - family: `signal-slab`
  - result: pass
  - note: poster typography becomes the environment rather than a centered slab; remaining chrome is limited to micro labels
- `arte-censor`
  - family: `quiet-lightbox`
  - result: pass
  - note: bars and phrase stack now form the entire layout; removed repeated mini-poster texture from redaction slabs
- `arte-no-second-earth-blue`
  - family: `quiet-lightbox`
  - result: pass with OCR caveat
  - note: composition rule holds, but OCR-derived manifesto phrasing is approximate and may need per-poster semantic cleanup later
- `arte-cloud`
  - family: `orbital-atmosphere`
  - result: pass
  - note: cloud mass and atmosphere fill the browser surface; orb field behaves as the page, not a card
- `arte-minimal-space-yellow-breathe`
  - family: `orbital-atmosphere`
  - result: pass
  - note: geometric circles expand into the stage and preserve the poster's calm spatial logic
- `arte-saturn-type-black`
  - family: `geometry-chamber`
  - result: pass
  - note: the original intact slab was removed; poster content now resolves into clipped depth planes

## Open Caveats
- OCR-heavy manifesto posters can still produce imperfect word recovery in `DESIGN.md` and preview copy.
- Source crops still contain some frame remnants in a few posters; current renderers hide most of this through zoom/position, but crop extraction itself can still improve.
