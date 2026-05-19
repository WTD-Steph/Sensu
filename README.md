# Sensu

> Rituals worth keeping.

A static, single-page brand site for **Sensu** — a contemporary drinkware
and tea-tools brand inspired by the quiet beauty of Japanese rituals.

Built from the official Sensu Brand Book (logo, palette, typography,
brand assets, photography). Plain HTML + CSS — no build step.

## Stack
- HTML5, CSS3 (custom properties, grid, sticky header)
- Chakra Petch self-hosted from the brand zip (Light / Regular / Medium / Bold / Italic)
- Sensu logotype + logogram from the official SVG kit
- Imagery from the social media template + brand book

## Run locally
Open `index.html` directly, or serve it:

```bash
python -m http.server 5173
# then visit http://localhost:5173
```

## File layout
```
index.html
style.css
assets/
  fonts/    Chakra Petch (.ttf)
  logo/     sensu logotype + mark (svg + png, dark + light)
  img/
    products/   product hero shots (Hikari, Oboro, bundle)
    social/     editorial / behind-the-scenes shots
```

## Brand reference

| Token  | HEX       | Role            |
|--------|-----------|-----------------|
| Marble | `#2B2BAD` | Primary (blue)  |
| Flare  | `#E21B1B` | Primary (red)   |
| Zesty  | `#FA6000` | Primary (orange)|
| Lumen  | `#FAEB3A` | Primary (yellow)|
| Void   | `#161514` | Neutral dark    |
| Whim   | `#F2F1F0` | Neutral light   |

Brand rule respected on this site: each section uses **one primary** paired
with neutrals only — primaries are never mixed within a single piece.

&copy; 2025 Sensu. All rights reserved. A brand by The Daily.
