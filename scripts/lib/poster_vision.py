#!/usr/bin/env python3
import argparse
import json
import math
import os
import shutil
from typing import List, Tuple

import cv2
import numpy as np
from PIL import Image, ImageOps
import pytesseract


def order_points(pts: np.ndarray) -> np.ndarray:
    rect = np.zeros((4, 2), dtype='float32')
    s = pts.sum(axis=1)
    rect[0] = pts[np.argmin(s)]
    rect[2] = pts[np.argmax(s)]
    diff = np.diff(pts, axis=1)
    rect[1] = pts[np.argmin(diff)]
    rect[3] = pts[np.argmax(diff)]
    return rect


def perspective_crop(image: np.ndarray, box: np.ndarray) -> np.ndarray:
    rect = order_points(box)
    (tl, tr, br, bl) = rect
    width_a = np.linalg.norm(br - bl)
    width_b = np.linalg.norm(tr - tl)
    height_a = np.linalg.norm(tr - br)
    height_b = np.linalg.norm(tl - bl)
    max_w = max(int(width_a), int(width_b), 1)
    max_h = max(int(height_a), int(height_b), 1)
    dst = np.array([
        [0, 0],
        [max_w - 1, 0],
        [max_w - 1, max_h - 1],
        [0, max_h - 1]
    ], dtype='float32')
    matrix = cv2.getPerspectiveTransform(rect, dst)
    return cv2.warpPerspective(image, matrix, (max_w, max_h))


def inset_crop(image: np.ndarray, ratio_x: float = 0.09, ratio_y: float = 0.09) -> np.ndarray:
    h, w = image.shape[:2]
    pad_x = int(w * ratio_x)
    pad_y = int(h * ratio_y)
    left = min(max(pad_x, 0), max(w - 2, 0))
    top = min(max(pad_y, 0), max(h - 2, 0))
    right = max(left + 1, w - pad_x)
    bottom = max(top + 1, h - pad_y)
    return image[top:bottom, left:right]


def contour_candidates(image: np.ndarray) -> List[Tuple[float, np.ndarray, dict]]:
    h, w = image.shape[:2]
    area_total = float(h * w)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (5, 5), 0)
    masks = []
    for threshold in (230, 210, 190, 170, 150):
        _, binary = cv2.threshold(blur, threshold, 255, cv2.THRESH_BINARY_INV)
        masks.append(binary)
    edges = cv2.Canny(blur, 80, 180)
    masks.append(edges)

    out = []
    for mask in masks:
        contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        for cnt in contours:
            area = cv2.contourArea(cnt)
            if area < area_total * 0.12:
                continue
            peri = cv2.arcLength(cnt, True)
            approx = cv2.approxPolyDP(cnt, 0.02 * peri, True)
            rect = cv2.minAreaRect(cnt)
            box = cv2.boxPoints(rect)
            box = np.array(box, dtype='float32')
            xs = box[:, 0]
            ys = box[:, 1]
            bw = float(xs.max() - xs.min())
            bh = float(ys.max() - ys.min())
            if bw < 10 or bh < 10:
                continue
            aspect = bw / bh
            if not 0.45 <= aspect <= 1.05:
                continue
            center_x = float(xs.mean())
            center_y = float(ys.mean())
            center_penalty = abs(center_x - w / 2) / w + abs(center_y - h / 2) / h
            fill_ratio = area / max(bw * bh, 1.0)
            aspect_penalty = abs(aspect - 0.72)
            rect_bonus = 0.12 if len(approx) == 4 else 0.0
            score = (area / area_total) * 6.0 + fill_ratio * 1.5 + rect_bonus - aspect_penalty - center_penalty * 0.8
            out.append((score, box, {
                'area_ratio': round(area / area_total, 4),
                'fill_ratio': round(fill_ratio, 4),
                'aspect': round(aspect, 4),
                'center_penalty': round(center_penalty, 4),
                'approx_points': int(len(approx))
            }))
    return sorted(out, key=lambda item: item[0], reverse=True)


def fallback_center_crop(image: np.ndarray) -> np.ndarray:
    h, w = image.shape[:2]
    crop_w = int(w * 0.62)
    crop_h = int(h * 0.86)
    x0 = max((w - crop_w) // 2, 0)
    y0 = max((h - crop_h) // 2, 0)
    return image[y0:y0 + crop_h, x0:x0 + crop_w]


def extract_palette(image: Image.Image) -> List[dict]:
    pal = image.resize((180, 180)).quantize(colors=8, method=Image.Quantize.MEDIANCUT)
    colors = pal.getcolors() or []
    raw = pal.getpalette()
    result = []
    seen = set()
    for count, index in sorted(colors, reverse=True):
      rgb = raw[index * 3:index * 3 + 3]
      if len(rgb) != 3:
          continue
      hex_value = '#%02x%02x%02x' % tuple(rgb)
      if hex_value in seen:
          continue
      seen.add(hex_value)
      result.append({'hex': hex_value, 'count': int(count)})
    return result


def clean_lines(text: str) -> List[str]:
    lines = []
    seen = set()
    for raw in text.splitlines():
        line = ' '.join(raw.replace('|', ' ').replace('•', ' ').split())
        if len(line) < 3:
            continue
        if line.lower() in seen:
            continue
        seen.add(line.lower())
        lines.append(line)
    return lines[:12]


def run_ocr(image: Image.Image) -> dict:
    gray = ImageOps.grayscale(image)
    top_band = gray.crop((0, 0, gray.width, max(int(gray.height * 0.32), 1)))
    boosted = ImageOps.autocontrast(gray)
    boosted_top = ImageOps.autocontrast(top_band)
    inv_top = ImageOps.invert(boosted_top)
    title_configs = [
        '--psm 6',
        '--psm 11',
    ]
    title_lines: List[str] = []
    for candidate in (boosted_top, inv_top):
        for config in title_configs:
            text = pytesseract.image_to_string(candidate, config=config)
            for line in clean_lines(text):
                if line.lower() not in {x.lower() for x in title_lines}:
                    title_lines.append(line)
    body_text = pytesseract.image_to_string(boosted, config='--psm 6')
    return {
        'titleLines': title_lines[:6],
        'bodyLines': clean_lines(body_text)[:10]
    }


def analyze_one(path: str) -> Tuple[float, np.ndarray, dict]:
    image = cv2.imread(path)
    if image is None:
        raise ValueError(f'Could not open image: {path}')
    candidates = contour_candidates(image)
    if candidates:
        score, box, details = candidates[0]
        crop = perspective_crop(image, box)
        crop = inset_crop(crop)
        details['strategy'] = 'contour-perspective'
        details['score'] = round(float(score), 4)
        return score, crop, details
    crop = fallback_center_crop(image)
    details = {
        'strategy': 'fallback-center-crop',
        'score': 0.0,
        'area_ratio': round(float(crop.shape[0] * crop.shape[1]) / float(image.shape[0] * image.shape[1]), 4)
    }
    return 0.0, crop, details


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument('--crop-out', required=True)
    parser.add_argument('--source-out', required=False)
    parser.add_argument('images', nargs='+')
    args = parser.parse_args()

    best_score = -1e9
    best_crop = None
    best_path = ''
    best_details = {}
    for path in args.images:
        score, crop, details = analyze_one(path)
        if score > best_score:
            best_score = score
            best_crop = crop
            best_path = path
            best_details = details

    if best_crop is None:
        raise RuntimeError('No usable crop produced')

    os.makedirs(os.path.dirname(args.crop_out), exist_ok=True)
    crop_rgb = cv2.cvtColor(best_crop, cv2.COLOR_BGR2RGB)
    crop_image = Image.fromarray(crop_rgb)
    crop_image.save(args.crop_out, quality=95)
    if args.source_out:
        os.makedirs(os.path.dirname(args.source_out), exist_ok=True)
        shutil.copyfile(best_path, args.source_out)

    palette = extract_palette(crop_image)
    ocr = run_ocr(crop_image)
    stat = ImageOps.grayscale(crop_image).resize((128, 128))
    arr = np.array(stat)
    result = {
        'selectedSource': best_path,
        'cropPath': args.crop_out,
        'cropSize': {'width': crop_image.width, 'height': crop_image.height},
        'brightness': round(float(arr.mean()) / 255.0, 4),
        'contrast': round(float(arr.std()) / 255.0, 4),
        'palette': palette,
        'ocr': ocr,
        'detection': best_details
    }
    print(json.dumps(result))


if __name__ == '__main__':
    main()
