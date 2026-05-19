# Brand assets — drop-in checklist

Higher-fidelity SVGs live in the founder's `Brand Book Sensu.pdf` asset
pack (the `Logo-*.zip` from the brand handoff). Until they're copied
in here, the site falls back to the lower-fidelity copies in
`/public/logo/`.

| Drop in here                  | From the brand kit  | What it's used for                       |
| ----------------------------- | ------------------- | ---------------------------------------- |
| `logo-wordmark-dark.svg`      | `Sensu_Logo-02.svg` | Nav, story page hero — Void wordmark     |
| `logo-wordmark-light.svg`     | `Sensu_Logo-01.svg` | Wordmark on Marble / Void surfaces       |
| `logo-mark-dark.svg`          | `Sensu_Logo-06.svg` | Braille mark on Whim surfaces            |
| `logo-mark-light.svg`         | `Sensu_Logo-05.svg` | Braille mark on Void / Marble surfaces   |

### Note: the Braille dots are not rendered from SVG

`<BrailleDecoder />` (`components/BrailleDecoder.tsx`) and the OG image
(`app/opengraph-image.tsx`) **render the dots from data** (`lib/braille.ts`).
You don't need a logo-mark SVG to make them work — the SVG drop-ins above
are only for places that show the literal logo asset (Nav, footer mark,
Press logo previews).

### After dropping the SVGs in

Update the `src` paths in:

- `components/Nav.tsx` — currently `"/logo/sensu-logotype-dark.svg"`
- `components/Footer.tsx` — the footer mark and small Braille
- `app/press/page.tsx` — the four asset preview cards
