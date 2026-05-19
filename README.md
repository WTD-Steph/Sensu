# Sensu

> Rituals worth keeping.

The Sensu brand showcase site — a contemporary Indonesian drinkware and
tea-tools brand inspired by Japanese rituals. Founded by The Daily.

## Stack

- **Framework:** Next.js 14 (App Router) + TypeScript + React 18
- **Styling:** Tailwind CSS 3.4 with brand tokens (see `tailwind.config.ts`)
- **Type:** Chakra Petch + Noto Serif JP via `next/font/google`
- **Motion:** framer-motion + lenis (smooth scroll)
- **Hosting:** Vercel — auto-deploys from `main` to https://sensu-jp.vercel.app

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run typecheck
npm run build
```

## Repo layout

```
app/                       # App Router pages
  layout.tsx               # fonts, base metadata, skip link
  page.tsx                 # home one-pager (composed of section components)
  globals.css              # token CSS, base resets
  story/                   # long-form brand story            (Phase 3)
  ritual/                  # matcha ritual pillar             (Phase 3)
  lookbook/                # gallery                          (Phase 3)
  press/                   # press kit (stretch)              (Phase 3)
  api/subscribe/           # newsletter stub                  (Phase 3)
components/
  Nav.tsx Footer.tsx WhatsAppButton.tsx                       (Phase 1)
  motifs/                  # 6 SVG motifs                     (Phase 1)
  BrailleDecoder.tsx                                          (Phase 1)
  sections/                # Hero, Story, Collections, …      (Phase 2)
content/
  products.ts collections.ts ritual.ts instagram.json         (Phase 2-3)
lib/
  links.ts                 # SHOPEE_URL / WHATSAPP_URL / IG_URL constants
public/
  logo/  img/  fonts/      # imagery + brand
  brand/                   # high-fidelity SVGs the founder drops in
```

## Brand assets

Higher-fidelity SVGs live in the founder's Brand Book asset pack — see
[`public/brand/README.md`](./public/brand/README.md) for the drop-in
checklist. Until they're added, the site falls back to the lower-fidelity
copies at `/public/logo/`.

## Outbound links

All operational URLs (Shopee storefront, WhatsApp business number,
wholesale inbox) live in [`lib/links.ts`](./lib/links.ts). Search for
`TODO(` in that file to find the values the founder needs to confirm.

## Brand rules in code

- **Type:** `font-sans` is Chakra Petch (latin) and `font-jp` is
  Noto Serif JP for kanji moments. Don't introduce a third typeface.
- **Color:** primaries are `marble` / `flare` / `lumen` / `zesty`.
  Neutrals are `void` and `whim`. **One primary per surface.** Body text
  uses only `void` / `whim` / `marble` / `flare`.
- **Motifs:** six SVG components in `components/motifs/`. One motif per
  section. See brand book guidance for usage rules.

## License

© 2025 Sensu. All rights reserved.
