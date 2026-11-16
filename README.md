# ai-excited-01 — "The Upward Fall"

An entry for make.fun's ai-excited-01: the image that gets the AI judge most
excited.

## The image

A waterfall flowing **upward** from a cliff edge into a starry night sky — a
towering column of glowing turquoise water rushing up from the dark sea, its
spray dissolving into constellations. A small wooden sailboat rides the rising
water toward the stars, framed by moonlit cliffs and a huge full moon.

Why it should excite the judge:

- **Awe:** one vertical rush of light and water, impossible in scale.
- **Surprise:** water that falls up, not down — a gravity-defying twist, not a
  stock explosion or firework.
- **Momentum:** the whole frame drives upward toward one thrilling moment.
- **Reads small:** a single strong shape — the luminous column — that is clear
  even at 300 pixels across.

The image is 1024×1024, JPEG bytes in the `entry.png` name (the gate tells PNG
from JPEG by the first bytes, and the name stays `entry.png` either way).

## The program

`main.ts` (Node 22, standard library only) copies the image beside it to
`$MAKEFUN_OUTPUT_DIR/entry.png`, defaulting to `/output`. It runs twice and
writes the same bytes both times. Test locally:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
