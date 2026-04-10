#!/usr/bin/env python3
import argparse
import json
import os
from typing import Dict, Tuple

import cv2
import numpy as np
from PIL import Image

RECTS = {
    'artifact-monolith': {
        'title': (0.105, 0.018, 0.79, 0.205, 'ink'),
        'text-left': (0.09, 0.23, 0.22, 0.57, 'ink'),
        'text-mid': (0.34, 0.21, 0.28, 0.60, 'ink'),
        'text-right': (0.64, 0.22, 0.22, 0.58, 'ink'),
        'object-top': (0.275, 0.315, 0.47, 0.22, 'object'),
        'object-bottom-left': (0.275, 0.535, 0.22, 0.18, 'object'),
        'object-bottom-right': (0.495, 0.535, 0.25, 0.18, 'object'),
        'object-detail': (0.53, 0.34, 0.12, 0.14, 'object'),
        'footer': (0.32, 0.875, 0.36, 0.08, 'ink'),
    }
}


def to_px(rect: Tuple[float, float, float, float, str], width: int, height: int):
    x, y, w, h, mode = rect
    x0 = max(0, min(width - 1, int(round(x * width))))
    y0 = max(0, min(height - 1, int(round(y * height))))
    x1 = max(x0 + 1, min(width, int(round((x + w) * width))))
    y1 = max(y0 + 1, min(height, int(round((y + h) * height))))
    return x0, y0, x1, y1, mode


def keep_large_components(mask: np.ndarray, min_area_ratio: float) -> np.ndarray:
    num_labels, labels, stats, _ = cv2.connectedComponentsWithStats(mask, connectivity=8)
    out = np.zeros_like(mask)
    total = mask.shape[0] * mask.shape[1]
    min_area = max(12, int(total * min_area_ratio))
    for idx in range(1, num_labels):
        area = stats[idx, cv2.CC_STAT_AREA]
        if area >= min_area:
            out[labels == idx] = 255
    return out


def ink_mask(crop: np.ndarray) -> np.ndarray:
    gray = cv2.cvtColor(crop, cv2.COLOR_BGR2GRAY)
    baseline = max(100, int(np.percentile(gray, 78)) - 18)
    mask = np.clip((gray.astype(np.float32) - float(baseline)) * 8.0, 0, 255).astype(np.uint8)
    _, strong = cv2.threshold(mask, 10, 255, cv2.THRESH_BINARY)
    strong = keep_large_components(strong, 0.00025)
    return cv2.GaussianBlur(strong, (0, 0), 0.8)


def object_mask(crop: np.ndarray) -> np.ndarray:
    gray = cv2.cvtColor(crop, cv2.COLOR_BGR2GRAY)
    hsv = cv2.cvtColor(crop, cv2.COLOR_BGR2HSV)
    sat = hsv[:, :, 1]
    val = hsv[:, :, 2]
    edges = cv2.Canny(gray, 40, 140)
    mask = np.where((gray > 26) | (sat > 26) | (val > 42) | (edges > 0), 255, 0).astype(np.uint8)
    kernel = np.ones((3, 3), np.uint8)
    mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel, iterations=2)
    mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel, iterations=1)
    mask = keep_large_components(mask, 0.01)
    return cv2.GaussianBlur(mask, (0, 0), 1.0)


def rgba_from_mask(crop: np.ndarray, mask: np.ndarray) -> np.ndarray:
    rgba = cv2.cvtColor(crop, cv2.COLOR_BGR2BGRA)
    rgba[:, :, 3] = mask
    return rgba


def save_png(arr: np.ndarray, out_path: str) -> None:
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    Image.fromarray(cv2.cvtColor(arr, cv2.COLOR_BGRA2RGBA)).save(out_path)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument('--family', required=True)
    parser.add_argument('--image', required=True)
    parser.add_argument('--out-dir', required=True)
    args = parser.parse_args()

    image = cv2.imread(args.image, cv2.IMREAD_COLOR)
    if image is None:
        raise RuntimeError(f'Could not open {args.image}')

    family_rects: Dict[str, Tuple[float, float, float, float, str]] = RECTS.get(args.family, {})
    if not family_rects:
        print(json.dumps({'family': args.family, 'layers': {}}))
        return

    h, w = image.shape[:2]
    layers = {}
    for name, rect in family_rects.items():
        x0, y0, x1, y1, mode = to_px(rect, w, h)
        crop = image[y0:y1, x0:x1]
        mask = ink_mask(crop) if mode == 'ink' else object_mask(crop)
        rgba = rgba_from_mask(crop, mask)
        filename = f'{name}.png'
        out_path = os.path.join(args.out_dir, filename)
        save_png(rgba, out_path)
        layers[name] = {
            'file': filename,
            'rect': {
                'x': round(x0 / w, 4),
                'y': round(y0 / h, 4),
                'w': round((x1 - x0) / w, 4),
                'h': round((y1 - y0) / h, 4),
            },
            'mode': mode,
        }

    print(json.dumps({'family': args.family, 'layers': layers}))


if __name__ == '__main__':
    main()
