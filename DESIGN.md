---
name: Andell Jean-Jacques
description: A career printed as a Florida citrus crate label, the Orlando brand of a grower who picks, grades, packs, and ships.
colors:
  sky: "#3375b1"
  sky-deep: "#22598f"
  navy: "#10294a"
  grove: "#1f6b45"
  orange: "#f28c28"
  sun: "#f6c544"
  red: "#b8332a"
  red-fold: "#8e2620"
  stock: "#fffaf0"
  accent: "#f28c28"
  accent-ink: "#f7a650"
typography:
  display-slab:
    fontFamily: "Ultra, Rockwell Extra Bold, serif"
    fontSize: "clamp(2.1rem, 4.9vw, 4.6rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0.005em"
  display-script:
    fontFamily: "Shrikhand, cursive"
    fontSize: "clamp(2.6rem, 6vw, 4.8rem)"
    fontWeight: 400
    lineHeight: 0.9
  headline:
    fontFamily: "Ultra, Rockwell Extra Bold, serif"
    fontSize: "clamp(2rem, 4.6vw, 3.6rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.01em"
  figure:
    fontFamily: "Ultra, Rockwell Extra Bold, serif"
    fontSize: "clamp(2.2rem, 4.2vw, 3.8rem)"
    fontWeight: 400
    lineHeight: 1
    fontFeature: "lnum"
  grade-mark:
    fontFamily: "Shrikhand, cursive"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1
  title:
    fontFamily: "Libre Franklin, Franklin Gothic Medium, system-ui, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 800
    lineHeight: 1.2
  lede:
    fontFamily: "Libre Franklin, Franklin Gothic Medium, system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 1.9vw, 1.4rem)"
    fontWeight: 500
    lineHeight: 1.45
  body:
    fontFamily: "Libre Franklin, Franklin Gothic Medium, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Libre Franklin, Franklin Gothic Medium, system-ui, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.07em"
rounded:
  board: "6px"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  max: "1240px"
  section: "clamp(4rem, 9vw, 7rem)"
  panel: "clamp(1.25rem, 2.6vw, 2rem)"
components:
  button-sun:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    padding: "1em 1.5em"
  button-line:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.stock}"
    typography: "{typography.label}"
    padding: "1em 1.5em"
  button-line-hover:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.navy}"
  nav-tab:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.stock}"
    padding: "0.65em 1em"
  chip-variety:
    textColor: "{colors.stock}"
    rounded: "{rounded.pill}"
    padding: "0.5em 0.9em 0.5em 0.55em"
  chip-variety-selected:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
  ribbon:
    backgroundColor: "{colors.red}"
    textColor: "{colors.stock}"
    padding: "0.7em 1.1em"
  crate-label:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.navy}"
    padding: "7px"
  manifest-board:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.navy}"
    rounded: "{rounded.board}"
    padding: "clamp(1.25rem, 4vw, 3rem)"
  contact-label:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.stock}"
    rounded: "{rounded.board}"
    padding: "clamp(1.75rem, 5vw, 3.5rem)"
---

# Design System: Andell Jean-Jacques

## Overview

**Creative North Star: "The Citrus Crate Label"**

The whole page is a stone-lithograph fruit-crate label from a Florida packing house. Every surface is a flat ink: sky, grove, navy, crate red, citrus orange, sun yellow. There is no paper-colored page; the "paper" is whatever ink the band is printed in, and cream stock appears only as ink on dark fields or as the fill of a selected chip. A single fractal-noise grain (9% opacity, multiply) sits over everything so the flats read as printed, not rendered.

The page is a stack of full-bleed color bands, each a different ink, each holding one label or panel on a 1240px measure. Labels carry the print trade's devices: die-cut notched corners, inset double rules, swallowtail ribbons, a slowly turning sunburst, an oval grower medallion. Lettering has three presses: fat Ultra slab for the brand and section heads, Shrikhand brush script for grade marks, and Libre Franklin gothic for everything read.

Motion is the label being handled: labels paste on as they scroll in (a small tilt settling to 0), the ribbon unfurls once, the rays turn over three minutes. The one live control, the variety selector, re-inks the fruit and the page accent together. All motion stops under reduced-motion.

**Key Characteristics:**
- Flat lithograph inks, full-bleed bands, no cream ground.
- One paper grain over the whole page.
- Die-cut notched tabs and labels with inset double rules.
- Three typefaces with fixed jobs: slab, script, gothic.
- One runtime-variable accent driven by the variety selector.
- Toon-shaded 3D fruit with an inked navy outline, as garnish over a flat sun.

## Colors

Six stone-litho flats plus a stock ink and one moving accent; every color is a full-strength print ink, never a tint used as a surface.

### Primary
- **Label Sky** (sky): the hero field and the contact label. Matched to the blue behind the portrait. Stock text on it clears 4.67:1.
- **Sun Yellow** (sun): the primary button, section heads on dark bands, the manifest board, focus rings, selection, the hero sun disc. On sky it is 3.01:1, so it only sets display lettering there.

### Secondary
- **Grove Green** (grove): the process band and the fruit's leaf. Body text on it uses pale grove tints (`#e3f1e8`, `#d6eadd`).
- **Crate Red** (red): the ribbon, the manifest band, one crate tone.
- **Ribbon Fold** (red-fold): the folded-under ribbon tails and the script sector names on the sun board (5.31:1 on sun).
- **Valencia Orange** (orange): the community band and one crate tone.

### Tertiary
- **Variety Accent** (accent): the tint of one crate label. Rewritten at runtime by the variety selector (Valencia `#f28c28`, Honeybell `#ef6a36`, Ruby Red `#f4a07a`, Key Lime `#a9d05a`). Always paired with navy ink.
- **Variety Accent Ink** (accent-ink): the same variety lifted for dark grounds: step numerals, skill column heads, the medallion rim and lettering. Large type only (3.01 to 3.65:1 on grove).

### Neutral
- **Packing-House Navy** (navy): the page ground, the work and contact bands, secondary button fill, all ink on light labels, and the drop shade under display lettering.
- **Deep Sky** (sky-deep): the skills band; a darker sky so it separates from the hero.
- **Label Stock** (stock): body ink on dark bands and the selected chip fill. Never a page or section background.

### Named Rules
**The No Cream Ground Rule.** Stock is ink, not paper. No band, board, or page uses it as a background.

**The Band Rule.** Each section is a full-bleed band in its own ink: sky, grove, navy, red, sky-deep, orange, navy. Adjacent bands never share a color.

**The One Moving Accent Rule.** `--accent` and `--accent-ink` are the only colors that change at runtime. Anything meant to answer the fruit reads them; nothing else does.

## Typography

**Display Font:** Ultra (with Rockwell Extra Bold, serif)
**Script Font:** Shrikhand (with cursive)
**Body Font:** Libre Franklin (with Franklin Gothic Medium, system-ui, sans-serif), self-hosted via Fontsource at 400, 400 italic, 500, 600, 700, 800.

**Character:** A fat Clarendon-weight slab and a bouncy brush script do the shouting, the way a crate label's brand name does; a sturdy Franklin gothic does the small print and all the reading.

### Hierarchy
- **Display slab** (Ultra 400, clamp(2.1rem, 4.9vw, 4.6rem), 0.9, uppercase, no wrap): the surname in the hero brand.
- **Display script** (Shrikhand 400, clamp(2.6rem, 6vw, 4.8rem), 0.9, rotated -5deg): the first name, set in sun above the slab.
- **Headline** (Ultra 400, clamp(2rem, 4.6vw, 3.6rem), 1, uppercase, 0.01em, balanced): every section head. Contact scales it to clamp(2.6rem, 7vw, 5.5rem).
- **Figure** (Ultra 400, clamp(2.2rem, 4.2vw, 3.8rem), 1, lining numerals): the proof number on each crate label.
- **Grade mark** (Shrikhand 400, 1.05 to 2.4rem): step numerals, skill column heads, contact path heads, client and sector names. Never more than a short phrase.
- **Title** (Franklin 800, 1.1 to 1.4rem, 1.2): project and community titles, step names.
- **Lede** (Franklin 500, clamp(1.15rem, 1.9vw, 1.4rem), 1.45, 34ch): the hero statement.
- **Body** (Franklin 400, 1.0625rem, 1.55): all reading copy, capped at 40 to 62ch.
- **Label** (Franklin 700 to 800, 0.75 to 0.9rem, 0.06 to 0.14em, uppercase): buttons, nav, ribbon, table heads, fine print.

### Named Rules
**The Three Presses Rule.** Ultra sets the brand, section heads, and proof figures. Shrikhand sets grade marks. Franklin sets everything that is read. No fourth face.

**The Short Script Rule.** Script is a stamp, not a voice: a word or a short phrase, never a sentence.

## Layout

Full-bleed bands with a shared inline gutter (clamp(1rem, 4vw, 3rem)) and content held to a 1240px measure, centered. Bands breathe with block padding of clamp(4rem, 9vw, 7rem); the contact band runs taller (up to 8rem). The hero is a two-column grid (1.1fr / 0.9fr): brand, ribbon, lede, and actions left; the sun, fruit, medallion, and variety selector right.

Section heads sit in a split row: headline left, a short 40ch note right, wrapping on narrow screens. Crate labels are a three-panel grid (30% figure / build / 0.8fr side) divided by 5px double rules. Process and skills run as five columns.

Responsive steps are observed at 1000px (five columns to three), 860px (hero, process intro, crate panels, and two-up grids go single column; crate dividers turn horizontal), 720px (nav collapses to the resume tab only; the manifest table becomes stacked rows; board rules thin to 4px), and 420px (one column).

## Elevation & Depth

Depth is print, not light. Surfaces are flat. Three devices stand in for elevation: the hard navy drop shade under display lettering, a single soft ambient shadow under the two paper boards so they sit on their band, and the medallion's drop-shadow where it overlaps the sun.

### Shadow Vocabulary
- **Lettering drop shade** (`text-shadow: 0.045em to 0.06em offset, 0 blur, navy`): brand slab, brand script, nav mark, contact headline. Only on display lettering over sky.
- **Board lift** (`box-shadow: 0 24px 40px -22px rgba(40, 6, 4, 0.8)` on red; `0 30px 50px -28px rgba(0, 0, 0, 0.8)` on navy): the manifest board and the contact label.
- **Medallion drop** (`filter: drop-shadow(0 10px 14px rgba(8, 20, 38, 0.45))`): the portrait medallion only.
- **Sun halo** (`box-shadow: 0 0 0 10px rgba(246,197,68,.35), 0 0 0 22px rgba(246,197,68,.15)`): two flat rings around the sun disc.

### Named Rules
**The Printed Shade Rule.** The hard offset shade is ink on lettering, the way litho labels printed it. It never goes on boxes, buttons, or body text.

**The Flat Stone Rule.** No gradients on type or surfaces. The only gradients are the conic ray masks and the no-WebGL fruit's highlight.

## Shapes

The form language is die-cut paper. Tabs and crate labels are octagons cut by clip-path (6px notch on nav tabs, 8px on buttons, 12px on crate labels). Rules are doubled: 3px double inset 6px on tabs, 5px double for dividers and step tops, 6px double inset 16px on the two boards. The ribbon ends in swallowtails folded behind in red-fold. Round forms are reserved for the sun, the medallion oval, the portrait, swatches, and the pill-shaped variety chips. Boards take a slight 6px radius; nothing else is rounded.

### Named Rules
**The Die-Cut Rule.** Interactive tabs and project labels are notched, never rounded. When a notched element takes focus, the clip drops so the ring shows in full.

## Components

### Buttons
Label tabs: die-cut, double-ruled, heavy.
- **Shape:** octagon notch (8px) with a 3px double rule in the text color, inset 6px.
- **Sun (primary):** sun fill, navy ink, Franklin 800 0.88rem uppercase at 0.07em, 1em by 1.5em padding, an 18px stroke icon leading.
- **Line (secondary):** navy fill, stock ink; hover swaps to stock fill, navy ink.
- **Hover / Focus:** lift 2px on the expo-out ease (0.25s); press returns to 0. Focus removes the notch and draws a 3px solid sun ring offset 3px.

### Chips
- **Style:** the variety selector. Pill, 2px stock border at 55%, Franklin 700 0.85rem, a round peel swatch leading.
- **State:** selected fills stock with navy ink; hover firms the border to full stock; focus-visible draws the sun ring. Real radio inputs, full keyboard operation.

### Cards / Containers
- **Crate label:** notched 12px, 7px margin of tone around a 2px inner rule, three panels split by 5px double rules. Tones cycle orange, red, sky, grove, sun, accent; light tones take navy ink, dark tones take stock.
- **Board:** manifest (sun on red) and contact (sky on navy). 6px radius, 6px double outline inset 16px, board lift shadow.
- **Internal padding:** clamp(1.25rem, 2.6vw, 2rem) per crate panel.

### Navigation
Brand mark left (Ultra in sun with script "Brand" in stock, drop-shaded). Links right in Franklin 700 0.9rem uppercase at 0.06em, underline on hover. The resume link is a navy notched tab. Under 720px only the tab remains.

### Ribbon
Crate red band, stock Franklin 800 uppercase at 0.14em, swallowtail ends in red-fold tucked behind. Unfurls left to right once on load (0.9s).

### Manifest Table
One packed table on the sun board: tabular lining numerals, 3px navy rule under uppercase heads, hairline row rules at 28% navy, stock wash on row hover. Under 720px rows stack into blocks.

### Signature: Variety Selector and Fruit
A THREE.js fruit in toon material (stepped gradient map) with a navy back-face outline, set over the flat sun disc. The selector swaps the peel color and rewrites `--accent` / `--accent-ink` so one crate label, the step numerals, skill heads, and medallion re-ink with it. Without WebGL a flat CSS fruit takes its place; the page never waits on 3D.

### Grower Medallion
Oval navy rim with an accent-ink stroke and ring lettering ("GROWER · ANDELL JEAN-JACQUES · ORLANDO, FLA"), sky inner field, round portrait with a 3px sun outline, tilted -7deg over the sun.

## Do's and Don'ts

### Do:
- **Do** print each section as a full-bleed band in its own ink, content held to 1240px.
- **Do** use the notched tab with an inset double rule for every button and tab, and drop the notch on focus.
- **Do** keep Ultra for brand, heads, and figures; Shrikhand for short grade marks; Franklin for reading.
- **Do** route anything that should answer the variety selector through `--accent` / `--accent-ink`, with navy ink on the accent fill.
- **Do** use inline SVG stroke icons (18px, 1.8 stroke, currentColor).
- **Do** paste labels on with a small tilt settling to 0, from a visible default, and stop all motion under reduced-motion.

### Don't:
- **Don't** use a cream or off-white page or section ground.
- **Don't** put gradients on type or surfaces.
- **Don't** set sun on sky below display size (3.01:1), or stock on the accent fill (2.97:1 at Honeybell).
- **Don't** put the hard drop shade on boxes, buttons, or body text.
- **Don't** round the corners of tabs or crate labels.
- **Don't** make the 3D fruit a gate: the flat fallback must always render.
