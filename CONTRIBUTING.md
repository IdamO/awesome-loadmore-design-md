# Contributing

- Run `npm run crawl` before adding or updating entries.
- Run `npm run capture -- --slug=<slug>` to refresh a single site capture.
- Run `npm run generate` after metadata or screenshot changes.
- If a live site is down, keep the `loadmo.re` metadata and mark the live capture as unavailable in `meta.json`.
- Keep screenshots in each site's `screenshots/` directory and do not hand-edit generated files unless you also update the generator.
