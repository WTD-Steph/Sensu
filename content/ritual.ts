/**
 * The Sensu matcha ritual — four steps. Source: rebuild brief §5.6.
 *
 * Used by both the home-page teaser (`<RitualTeaser />`) and the full
 * /ritual pillar page in Phase 3.
 */
export type RitualStep = {
  id: string;
  number: string;
  title: string;
  /** Short blurb for the teaser. */
  blurb: string;
  /** Full paragraph for the /ritual pillar page. */
  detail: string;
  /** Image from /public used as the step visual. */
  image: string;
};

export const RITUAL_STEPS: ReadonlyArray<RitualStep> = [
  {
    id: "warm",
    number: "01",
    title: "Warm the chawan.",
    blurb: "Pour hot water into the bowl, swirl, then discard.",
    detail:
      "Pour boiling water into the bowl, swirl gently so the inside is warmed evenly, and discard. A cool bowl will pull heat from your matcha — and your hands feel the ritual begin from the temperature of the clay.",
    image: "/img/social/bts-tray.jpg",
  },
  {
    id: "sift",
    number: "02",
    title: "Sift the matcha.",
    blurb: "Add 1–2 g of matcha through a fine sieve.",
    detail:
      "Matcha clumps in the tin. Sift one to two grams through a fine mesh into the warmed bowl — about a generous teaspoon. Sifting is the small act that makes the difference between a smooth froth and a bitter clump.",
    image: "/img/social/tools-tray.jpg",
  },
  {
    id: "water",
    number: "03",
    title: "Add water.",
    blurb: "60–70 ml of water at 70–80°C.",
    detail:
      "Pour 60 to 70 ml of water cooled to 70–80°C — hotter and the matcha turns sharp. If you don't have a thermometer, boil, then wait a minute. Pour against the side of the bowl, not directly onto the powder.",
    image: "/img/products/oboro-senchawan.jpg",
  },
  {
    id: "whisk",
    number: "04",
    title: "Whisk.",
    blurb: "A light W-motion for 15–20 seconds, until soft foam appears.",
    detail:
      "Hold the chasen lightly, fingertips on the handle. Whisk in a quick W motion — wrist, not arm — for 15 to 20 seconds until a soft foam rises. Set the whisk down gently. The bowl is yours.",
    image: "/img/social/matcha-ritual.jpg",
  },
];
