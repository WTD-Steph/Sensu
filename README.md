# Sensu

> Rituals worth keeping.

The Sensu brand showcase site — a contemporary drinkware and tea-tools
brand inspired by the quiet beauty of Japanese rituals.

Live at https://sensu-jp.vercel.app.

## Stack

| | |
|---|---|
| Framework | Next.js 14 App Router · React 18 · TypeScript |
| Styling | Tailwind CSS 3.4 with brand tokens (see `tailwind.config.ts`) |
| Type | Chakra Petch + Noto Serif JP via `next/font/google` |
| Motion | framer-motion + lenis (smooth scroll) |
| Imagery | `next/image` (AVIF/WebP) |
| OG image | dynamic via `next/og` on edge |
| Hosting | Vercel — auto-deploys from `main` |

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build
```

## Repo layout

```
app/
  layout.tsx             # fonts, base metadata, JSON-LD, skip link
  page.tsx               # home one-pager (composes section components)
  globals.css            # token CSS, focus rings, reduced-motion rules
  opengraph-image.tsx    # dynamic 1200×630 OG (edge runtime)
  sitemap.ts robots.ts
  story/ ritual/ lookbook/ press/      # content routes
  api/subscribe/         # newsletter stub
  dev/motifs/            # noindex preview route for QA-ing motifs
components/
  Nav.tsx                # sticky, hide-on-scroll-down
  Footer.tsx             # four cols + oversized Braille backdrop + MotionToggle
  WhatsAppButton.tsx     # floating bottom-right inquiry button
  WhatsAppButton.tsx     # floating bottom-right
  SmoothScrollProvider.tsx
  MotionToggle.tsx       # "Pause motion" toggle (a11y opt-out)
  BrailleDecoder.tsx     # the Sensu wordmark in 6-dot Braille
  motifs/                # Orbit · Echo · Syntax · Hatch · Loop · Pulse
  sections/              # Hero · Story · BrailleReveal · Collections
                         # Featured · RitualTeaser · SensuCircle · Newsletter
  ProductCard.tsx · InstagramGrid.tsx
content/
  collections.ts products.ts ritual.ts instagram.json
lib/
  links.ts               # WHATSAPP_URL / IG_URL / email
  braille.ts             # UEB 6-dot map
  jsonld.ts              # Organization / WebSite / Product / HowTo / Breadcrumb
  motion.ts              # easings + framer-motion variants
public/
  logo/  img/  fonts/    # imagery + low-fi logo fallbacks
  brand/                 # founder drops in high-fidelity logos here
```

## What's left for the founder

Six items are deliberately left as `TODO()` markers in the code so the
build is never blocked but the values are easy to find:

| Marker                  | Where                          | What to fill in                                 |
| ----------------------- | ------------------------------ | ----------------------------------------------- |
| `TODO(whatsapp-number)` | `lib/links.ts`                 | WhatsApp Business number (international, no `+`)|
| `TODO(wholesale-email)` | `lib/links.ts`                 | Confirm `hello@madebysensu.com` or replace      |
| `TODO(provider)`        | `app/api/subscribe/route.ts`   | Wire newsletter to ConvertKit/Mailchimp/Resend  |
| `TODO(press-zip)`       | `app/press/page.tsx`           | Host a `press-kit.zip` and link it              |
| Brand-asset drop-ins    | `public/brand/README.md`       | Higher-fidelity logo SVGs from the Brand Book   |

Run `grep -rn "TODO(" --include='*.ts' --include='*.tsx'` to see them.

## Brand rules baked into the code

- **Type:** `font-sans` (Chakra Petch) for everything Latin; `font-jp`
  (Noto Serif JP) only for the kanji moments on collection cards.
  Don't add a third typeface.
- **Colour:** primaries are `marble` `flare` `lumen` `zesty`; neutrals are
  `void` `whim`. **One primary per surface** — never combine two primaries.
  Body text is restricted to `void` `whim` `marble` `flare`.
- **Motifs:** six SVG components in `components/motifs/`. **One motif per
  section.** See `app/dev/motifs/page.tsx` for a side-by-side preview.
- **Braille:** the Sensu wordmark is rendered in 6-dot Braille. The
  reusable `<BrailleDecoder />` powers the hero, the §5.3 reveal section,
  the footer signature, and the OG image.

## Performance & a11y

Latest Lighthouse on mobile (Slow 4G, Moto G Power emulator):

| | Score |
|---|---|
| Performance | 89 |
| Accessibility | 97 |
| Best Practices | 100 |
| SEO | 100 |

The Performance ceiling is set by an LCP element-render-delay (~1.8 s)
caused by render-blocking Tailwind CSS. Next 14's `experimental.optimizeCss`
is enabled to nudge that down via critical-CSS inlining where possible.
A reasonable next move is to ship a smaller hero-photo crop (current source
is 4500² JPEG).

Accessibility: a "Pause motion" toggle in the footer flips
`html[data-motion="paused"]`, which `globals.css` watches to kill
animations/transitions for users who opt out. The same rule fires
automatically under `prefers-reduced-motion`.

## License

© 2025 Sensu. All rights reserved.
