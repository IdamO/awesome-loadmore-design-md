import fs from 'node:fs/promises';
import path from 'node:path';

export const ROOT = path.resolve(new URL('../../', import.meta.url).pathname);
export const DATA_DIR = path.join(ROOT, 'data');
export const DESIGN_DIR = path.join(ROOT, 'design-md');

export function slugify(input) {
  return String(input)
    .toLowerCase()
    .replace(/https?:\/\//g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

export async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

export async function readJson(file, fallback = null) {
  try {
    return JSON.parse(await fs.readFile(file, 'utf8'));
  } catch {
    return fallback;
  }
}

export async function writeJson(file, data) {
  await ensureDir(path.dirname(file));
  await fs.writeFile(file, JSON.stringify(data, null, 2) + '\n');
}

export async function writeText(file, text) {
  await ensureDir(path.dirname(file));
  await fs.writeFile(file, text);
}

export function uniqueBy(items, keyFn) {
  const seen = new Set();
  const out = [];
  for (const item of items) {
    const key = keyFn(item);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function titleCase(value) {
  return String(value)
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export function luminance(hex) {
  const clean = hex.replace('#', '');
  const rgb = clean.length === 3
    ? clean.split('').map((c) => parseInt(c + c, 16))
    : [clean.slice(0, 2), clean.slice(2, 4), clean.slice(4, 6)].map((c) => parseInt(c, 16));
  const srgb = rgb.map((v) => {
    const n = v / 255;
    return n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}

export function isDark(hex) {
  return luminance(hex) < 0.45;
}
