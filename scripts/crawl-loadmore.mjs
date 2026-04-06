import fs from 'node:fs/promises';
import path from 'node:path';
import * as cheerio from 'cheerio';
import { DATA_DIR, writeJson, uniqueBy, sleep } from './lib/utils.mjs';

const BASE = 'https://loadmo.re';
const OUT = path.join(DATA_DIR, 'loadmore-posts.json');
const PAGES = 13;

async function fetchText(url) {
  const res = await fetch(url, {
    headers: {
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36'
    }
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${url}`);
  }
  return await res.text();
}

async function fetchListPage(pageNumber) {
  const url = pageNumber === 1 ? `${BASE}/` : `${BASE}/page:${pageNumber}`;
  const html = await fetchText(url);
  const $ = cheerio.load(html);
  const slugs = [];
  $('a[href^="https://loadmo.re/posts/"]').each((_, el) => {
    const href = $(el).attr('href');
    if (!href) return;
    const slug = href.split('/posts/')[1]?.split(/[?#]/)[0];
    if (slug) slugs.push(slug);
  });
  return uniqueBy(slugs, (x) => x);
}

function cleanText(text) {
  return String(text || '').replace(/\s+/g, ' ').trim();
}

async function fetchPost(slug) {
  const url = `${BASE}/posts/${slug}`;
  const html = await fetchText(url);
  const $ = cheerio.load(html);
  const title = cleanText($('.post-title').first().text());
  const liveUrl = $('a#post-link-visit').attr('href') || $('input#post-url-input').attr('value') || '';
  const description = cleanText($('meta[name="description"]').attr('content') || $('.post-subinfos li').eq(1).text());
  const creditsLine = cleanText($('.post-subinfos li').first().text());
  const credits = creditsLine.replace(/^Credits:\s*/i, '').replace(/\(addclose\).*$/, '').trim();
  const addedLine = cleanText($('.post-subinfos li').eq(2).text());
  const addedMatch = addedLine.match(/Added\s+([^T]+?)\s+Tags:/i) || addedLine.match(/Added\s+(.+)$/i);
  const added = cleanText(addedMatch?.[1] || '');
  const tags = $('.post-subinfos a[href*="/tag:"]').map((_, el) => cleanText($(el).text())).get();
  const posterImage = $('meta[property="og:image"]').attr('content') || '';
  const previewVideo = $('#post-preview-video source').attr('src') || '';
  const domain = (() => {
    try {
      return new URL(liveUrl).hostname;
    } catch {
      return '';
    }
  })();
  return {
    slug,
    title,
    loadmoreUrl: url,
    sourceLabel: 'loadmo.re',
    sourceUrl: url,
    liveUrl,
    domain,
    description,
    credits,
    added,
    tags,
    posterImage,
    previewVideo
  };
}

async function main() {
  const slugs = [];
  for (let page = 1; page <= PAGES; page += 1) {
    const list = await fetchListPage(page);
    slugs.push(...list);
    await sleep(250);
  }

  const uniqueSlugs = uniqueBy(slugs, (x) => x);
  const posts = [];
  for (let i = 0; i < uniqueSlugs.length; i += 1) {
    const slug = uniqueSlugs[i];
    try {
      const post = await fetchPost(slug);
      posts.push(post);
    } catch (error) {
      posts.push({ slug, error: String(error) });
    }
    if ((i + 1) % 25 === 0) {
      console.log(`Fetched ${i + 1}/${uniqueSlugs.length} post pages`);
    }
    await sleep(300);
  }

  posts.sort((a, b) => (a.title || a.slug).localeCompare(b.title || b.slug));
  const payload = {
    generatedAt: new Date().toISOString(),
    source: BASE,
    pageCount: PAGES,
    total: posts.length,
    posts
  };
  await fs.mkdir(DATA_DIR, { recursive: true });
  await writeJson(OUT, payload);
  console.log(`Wrote ${posts.length} posts to ${OUT}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
