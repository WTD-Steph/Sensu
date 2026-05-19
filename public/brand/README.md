# Brand assets — drop-in checklist

These SVGs ship inside the founder's `Brand Book Sensu.pdf` asset pack
(`Logo-20260519T...zip`). Until they're copied in here, the site falls back
to the lower-fidelity copies in `/public/logo/`.

| Drop here                        | From the brand kit          | Used by                       |
| -------------------------------- | --------------------------- | ----------------------------- |
| `logo-wordmark-light.svg`        | `Sensu_Logo-01.svg`         | Hero on Void / Marble surfaces|
| `logo-wordmark-dark.svg`         | `Sensu_Logo-02.svg`         | Nav, generic surfaces         |
| `logo-mark-light.svg`            | `Sensu_Logo-05.svg`         | Braille mark on dark surfaces |
| `logo-mark-dark.svg`             | `Sensu_Logo-06.svg`         | Braille mark on Whim surfaces |
| `logo-mark-decoder-source.svg`   | `Sensu_Logo-07.svg` or `08` | BrailleDecoder source frames  |

### Why this folder is empty for now

Phase 0 of the rebuild uses the existing lower-fidelity copies at
`/public/logo/sensu-*-dark.svg` / `sensu-*-light.svg`. When the founder
provides higher-fidelity SVGs, drop them here and update the imports in:

- `components/Nav.tsx`
- `components/Footer.tsx`
- `components/BrailleDecoder.tsx`
- `app/opengraph-image.tsx`
