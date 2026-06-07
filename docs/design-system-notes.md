# Design-system audit — Sensu website

Snapshot of what was inconsistent vs. the design system in
mid-2026, what was changed, and what is still open. See also the
two component primitives this audit added:

- [`components/ui/Button.tsx`](../components/ui/Button.tsx)
- [`components/ui/Eyebrow.tsx`](../components/ui/Eyebrow.tsx)

## Already compliant (no change needed)

- **Fonts.** Only Chakra Petch (Latin) and Noto Serif JP (kanji)
  imported anywhere. No third typeface drifted in.
- **No emoji** in source. No `bg-gradient` outside the Pulse motif.
  No arbitrary `rounded-[…]`.
- **Motifs.** All six (`Orbit · Echo · Hatch · Loop · Syntax · Pulse`)
  carry `aria-hidden`, all page-level wrappers add `pointer-events-none`.
  One motif per section. `Hatch` only renders Void/Whim; `Pulse` fill
  is hard-coded Whim — both rules baked into the components, can't be
  violated from outside.
- **Decorative loops.** `motion-safe:animate-{drift,breathe}` honours
  `prefers-reduced-motion`, and the global rule
  `html[data-motion="paused"] *` (in `globals.css`) zeros out
  animation/transition for the Pause-Motion footer toggle.
- **Raw hex literals.** Only present where literals are required:
  `themeColor` browser metadata, OG-image inline literals, SVG
  `dotColor` props.

## Conditional pass — Lumen text

The rule is: *Lumen is allowed only as a link-hover colour on dark
surfaces and as fills/accents — never as a body-text colour.*

All `text-lumen` occurrences are compliant:

- `Footer.tsx` — `hover:text-lumen` on Void footer
- `Collections.tsx` — `hover:text-lumen` on Marble/Void/Flare cards
- `BrailleReveal.tsx`, `Story.tsx` (philosophy block) —
  `hover:text-lumen` on Marble/Void
- `Newsletter.tsx` — `text-lumen` for `status === 'success'` accent
  on a Void surface (fill/accent use, not body text)

## What was changed

### 1. `<Button>` primitive ([Button.tsx](../components/ui/Button.tsx))

The pill CTA was inlined 12+ times across the site with small drift
(padding `px-5` vs `px-6`, tracking `0.06`/`0.08`/`0.12em`, hover
colours flipped). Converged onto one component:

| Prop          | Values                                    |
| ------------- | ----------------------------------------- |
| `variant`     | `primary` · `secondary` · `ghost`         |
| `size`        | `sm` · `md` · `lg`                        |
| `onDark`      | flip palette for Void/Marble surfaces     |
| `trailingArrow` | `"external"` (↗) · `"internal"` (→)     |

Auto-picks `<Link>` (internal href) vs `<a target="_blank" rel="noopener">`
(http, mailto, tel, //) vs `<button>` (no href). 13 call sites
refactored — Hero, Story, Ritual, Press (mailto + 4 Downloads),
/shop/[slug] (Inquire/More), Newsletter SubscribeCard.

### 2. `<Eyebrow>` primitive ([Eyebrow.tsx](../components/ui/Eyebrow.tsx))

The kicker pattern (`text-caption uppercase tracking-eyebrow`) was
inlined 27 times. Converged onto one component:

| Prop      | Values                                                 |
| --------- | ------------------------------------------------------ |
| `color`   | `marble` (default) · `whim` · `whim-dim` · `void-dim`  |
| `weight`  | `semibold` (default) · `regular`                       |
| `as`      | element override — used as `<p>` (default), `<dt>`, `<h3>`, `<span>` |

Kept inline (semantic mismatch):

- Form labels inside `SubscribeCard` (real `<label>`s, not kickers)
- Per-card eyebrow inside `Collections.tsx` (uses
  `palette[id].eyebrow` variable that swaps per collection)
- `ProductPlaceholder` caption (inherits text colour from surface
  via `opacity-75`, no fixed token)

## Open questions for the founder

1. **Lowercase headlines.** The DS rule reads *"Headlines are
   lowercase, bold, with one word lifted into light-italic Marble."*
   The Hero h1 follows it (`rituals worth keeping`). The section H2s
   and route H1s are sentence-case (`A quiet confidence in what
   feels right`, `Sensu was born from a quiet question`).
   Should "lowercase" extend to every headline site-wide, or only
   to the display Hero h1? — **TODO(design-system): need answer**.
2. **`ProductCatalogCard` title size.** Uses `text-[20px]` (between
   the `body-lg` 17→20 and `h3` 22→36 steps of the scale).
   Bumping to `text-h3` makes catalog cards visually heavier
   (and reduces grid density); dropping to `text-body-lg font-bold`
   keeps density but feels less heading-like.
   — **TODO(design-system): need call**.

## Not in scope (deferred follow-ups)

These would be useful primitives but weren't part of this audit:

- **`<ArrowLink>`** — the underlined `text-sm uppercase tracking-[0.18em]`
  link pattern with `→` / `↗` trailing arrow. Used in Newsletter,
  BrailleReveal, RitualTeaser, SensuCircle, Footer pillars, /story,
  /ritual, /press, /shop/[slug] breadcrumbs.
- **`<Tag>` / `<Badge>`** — image-overlay pills (`Step 01`,
  `Placeholder`, lookbook captions).
- **`<Stat>`** — the display-sized number + caption-sized label pair
  in Story. Currently a local component in Story.tsx; could move
  to `components/ui/`.
- **`<Input>`** — Newsletter form fields. Two inputs (name + email)
  with identical styling.
