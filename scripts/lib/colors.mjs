export function normalizeColor(input) {
  if (!input) return null;
  const value = String(input).trim().toLowerCase();
  if (!value || value === 'transparent' || value === 'initial' || value === 'inherit') return null;
  if (value.startsWith('#')) {
    return expandHex(value);
  }
  const rgb = value.match(/rgba?\(([^)]+)\)/);
  if (rgb) {
    const parts = rgb[1].split(',').map((part) => part.trim());
    const [r, g, b, a] = parts;
    if (a !== undefined && Number(a) === 0) return null;
    return '#' + [r, g, b].map((n) => toHex(Number.parseFloat(n))).join('');
  }
  const hsl = value.match(/hsla?\(([^)]+)\)/);
  if (hsl) {
    const parts = hsl[1].split(',').map((part) => part.trim().replace('%', ''));
    const [h, s, l, a] = parts.map(Number);
    if (a !== undefined && Number(a) === 0) return null;
    return hslToHex(h, s / 100, l / 100);
  }
  return null;
}

function expandHex(hex) {
  const clean = hex.replace('#', '');
  if (clean.length === 3) {
    return '#' + clean.split('').map((c) => c + c).join('');
  }
  return '#' + clean.slice(0, 6);
}

function toHex(value) {
  const safe = Math.max(0, Math.min(255, Math.round(value)));
  return safe.toString(16).padStart(2, '0');
}

function hslToHex(h, s, l) {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const hp = (h % 360) / 60;
  const x = c * (1 - Math.abs((hp % 2) - 1));
  let [r1, g1, b1] = [0, 0, 0];
  if (hp >= 0 && hp < 1) [r1, g1, b1] = [c, x, 0];
  else if (hp < 2) [r1, g1, b1] = [x, c, 0];
  else if (hp < 3) [r1, g1, b1] = [0, c, x];
  else if (hp < 4) [r1, g1, b1] = [0, x, c];
  else if (hp < 5) [r1, g1, b1] = [x, 0, c];
  else [r1, g1, b1] = [c, 0, x];
  const m = l - c / 2;
  return '#' + [r1, g1, b1].map((v) => toHex((v + m) * 255)).join('');
}
