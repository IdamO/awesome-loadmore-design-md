import path from 'node:path';
import { DATA_DIR, ensureDir, writeJson } from './lib/utils.mjs';

const BASE = 'https://arte-collective.com';
const COLLECTIONS = [
  { handle: 'aesthetic', title: 'Aesthetic' },
  { handle: 'technology', title: 'Technology' },
  { handle: 'minimalism', title: 'Minimalism' }
];
const OUT = path.join(DATA_DIR, 'arte-posters.json');

function normalizeTags(tags) {
  if (Array.isArray(tags)) return tags.map((tag) => String(tag).trim()).filter(Boolean);
  if (typeof tags === 'string') return tags.split(',').map((tag) => tag.trim()).filter(Boolean);
  return [];
}

function absUrl(url) {
  if (url && typeof url === 'object') {
    return absUrl(url.src || url.url || '');
  }
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  if (url.startsWith('//')) return `https:${url}`;
  return `${BASE}${url.startsWith('/') ? '' : '/'}${url}`;
}

async function fetchCollection(collection) {
  const url = `${BASE}/collections/${collection.handle}/products.json?limit=250`;
  const res = await fetch(url, {
    headers: {
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36'
    }
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${url}`);
  }
  const data = await res.json();
  return { ...collection, url, products: data.products || [] };
}

const merged = new Map();
const collections = [];
for (const collection of COLLECTIONS) {
  const payload = await fetchCollection(collection);
  collections.push({
    handle: payload.handle,
    title: payload.title,
    url: `${BASE}/collections/${payload.handle}`,
    jsonUrl: payload.url,
    count: payload.products.length
  });
  for (const product of payload.products) {
    const handle = product.handle;
    const existing = merged.get(handle) || {
      slug: `arte-${handle}`,
      sourceKind: 'arte-poster',
      title: product.title,
      handle,
      liveUrl: `${BASE}/collections/${payload.handle}/products/${handle}`,
      domain: 'arte-collective.com',
      sourceLabel: 'Arte Collective',
      sourceUrl: `${BASE}/collections/${payload.handle}/products/${handle}`,
      loadmoreUrl: `${BASE}/collections/${payload.handle}/products/${handle}`,
      credits: 'Arte Collective',
      added: 'Arte Collective poster ingestion',
      vendor: product.vendor || 'Arte Collective',
      productId: product.id,
      productType: product.product_type || '',
      rawTags: [],
      collectionHandles: [],
      collectionTitles: [],
      posterImages: [],
      priceMin: product.variants?.[0]?.price || null
    };
    existing.rawTags = Array.from(new Set([...existing.rawTags, ...normalizeTags(product.tags)]));
    existing.collectionHandles = Array.from(new Set([...existing.collectionHandles, payload.handle]));
    existing.collectionTitles = Array.from(new Set([...existing.collectionTitles, payload.title]));
    existing.posterImages = Array.from(new Set([...existing.posterImages, ...(product.images || []).map(absUrl)]));
    existing.posterImage = existing.posterImages[0] || existing.posterImage || '';
    existing.bodyHtml = existing.bodyHtml || product.body_html || '';
    existing.variantTitles = Array.from(new Set([
      ...(existing.variantTitles || []),
      ...((product.variants || []).map((variant) => variant.public_title || variant.title).filter(Boolean))
    ]));
    merged.set(handle, existing);
  }
}

const posters = [...merged.values()]
  .map((poster) => {
    const collectionText = poster.collectionTitles.join(', ');
    return {
      ...poster,
      description: `Poster-derived concept source from Arte Collective (${collectionText}). This entry translates the poster artwork itself into an imagined interactive website system instead of documenting the storefront page.`
    };
  })
  .sort((a, b) => a.title.localeCompare(b.title));

await ensureDir(DATA_DIR);
await writeJson(OUT, {
  generatedAt: new Date().toISOString(),
  source: BASE,
  collections,
  total: posters.length,
  posters
});
console.log(`Wrote ${posters.length} Arte poster sources to ${OUT}`);
