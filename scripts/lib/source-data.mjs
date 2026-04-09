import path from 'node:path';
import { DATA_DIR, readJson } from './utils.mjs';

export async function loadArchiveSources() {
  const loadmore = await readJson(path.join(DATA_DIR, 'loadmore-posts.json'), null);
  if (!loadmore) {
    throw new Error('Missing loadmore-posts.json. Run npm run crawl first.');
  }
  const manual = await readJson(path.join(DATA_DIR, 'manual-sites.json'), { sites: [] });
  const arte = await readJson(path.join(DATA_DIR, 'arte-posters.json'), { posters: [] });
  return {
    loadmore,
    manual,
    arte,
    entries: [...loadmore.posts, ...(manual.sites || []), ...(arte.posters || [])]
  };
}
