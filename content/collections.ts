/**
 * The Sensu collections. Six product lines that map to the real catalog
 * in Google Drive (folder `1f_cm9kFOOEK3TpFcrH8zEovPPGYiGyf0`).
 *
 * Brand book originally listed four (HIKARI / OBORO / TAKE / TAKUMI).
 * The live product line has grown to six material-based collections —
 * HAGANE (steel), MORI (forest/wood), and YUGEN (premium / subtle depth)
 * joined the family. TAKUMI from the brand book was an aspirational
 * "premium / mixed materials" umbrella; YUGEN is the actual premium line.
 *
 * Each collection gets a distinct surface colour and motif so the
 * Collections section reads as six cards without mixing primaries on
 * any single surface (per brand-book rule).
 */
export type CollectionId =
  | "hikari"
  | "oboro"
  | "take"
  | "hagane"
  | "mori"
  | "yugen";

export type Collection = {
  id: CollectionId;
  /** Latin name, always uppercase in UI. */
  name: string;
  /** Kanji rendered in Noto Serif JP. */
  kanji: string;
  /** One-line eyebrow: material + feeling. */
  tag: string;
  /** Paragraph for the collection card. */
  description: string;
  /** Motif assigned to this collection's card. One motif per collection. */
  motif: "orbit" | "hatch" | "loop" | "syntax" | "echo" | "pulse";
  /** Anchor link to the deep-dive section on the home page. */
  href: string;
};

export const COLLECTIONS: ReadonlyArray<Collection> = [
  {
    id: "hikari",
    name: "HIKARI",
    kanji: "光",
    tag: "Glass · light",
    description:
      "Heat-formed glass that reflects and radiates light. For showcasing the colour of a drink — matcha, hojicha, or a slow morning brew.",
    motif: "orbit",
    href: "/shop?collection=hikari",
  },
  {
    id: "oboro",
    name: "OBORO",
    kanji: "朧",
    tag: "Ceramic · haze",
    description:
      "Handcrafted ceramics fired in muted clay tones — soft, warm, and grounding. Designed to hold heat, and to slow the morning.",
    motif: "hatch",
    href: "/shop?collection=oboro",
  },
  {
    id: "take",
    name: "TAKE",
    kanji: "竹",
    tag: "Bamboo · nature",
    description:
      "Whisks and tools cut from fine bamboo. Built for daily use, the chasen creates smooth, frothy matcha — just as it has for centuries.",
    motif: "loop",
    href: "/shop?collection=take",
  },
  {
    id: "hagane",
    name: "HAGANE",
    kanji: "鋼",
    tag: "Steel · precision",
    description:
      "Brushed stainless steel for canisters, sifters, and tools. Quiet weight in the hand. Made to last decades, not seasons.",
    motif: "syntax",
    href: "/shop?collection=hagane",
  },
  {
    id: "mori",
    name: "MORI",
    kanji: "森",
    tag: "Wood · forest",
    description:
      "Hand-turned wood pieces — bowls, trays, holders. Grain-led, warm to touch, slow to age.",
    motif: "echo",
    href: "/shop?collection=mori",
  },
  {
    id: "yugen",
    name: "YUGEN",
    kanji: "幽玄",
    tag: "Premium · subtle depth",
    description:
      "The premium line. Editorial, considered, and a touch playful. Pieces that hold a quiet kind of presence.",
    motif: "pulse",
    href: "/shop?collection=yugen",
  },
];
