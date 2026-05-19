/**
 * The four Sensu collections. Names + kanji are non-negotiable per the
 * brand book and §10 of the rebuild brief.
 */
export type CollectionId = "hikari" | "oboro" | "take" | "takumi";

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
  /** Motif assigned to this collection's card (per §5.4). */
  motif: "orbit" | "hatch" | "loop" | "syntax";
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
    href: "#collection-hikari",
  },
  {
    id: "oboro",
    name: "OBORO",
    kanji: "朧",
    tag: "Ceramic · haze",
    description:
      "Handcrafted ceramics fired in muted clay tones — soft, warm, and grounding. Designed to hold heat, and to slow the morning.",
    motif: "hatch",
    href: "#collection-oboro",
  },
  {
    id: "take",
    name: "TAKE",
    kanji: "竹",
    tag: "Bamboo · nature",
    description:
      "Whisks and tools cut from fine bamboo. Built for daily use, the chasen creates smooth, frothy matcha — just as it has for centuries.",
    motif: "loop",
    href: "#collection-take",
  },
  {
    id: "takumi",
    name: "TAKUMI",
    kanji: "匠",
    tag: "Premium · craft",
    description:
      "Editorial, considered, and a touch playful. Our premium line is a tribute to the care and craft behind each form.",
    motif: "syntax",
    href: "#collection-takumi",
  },
];
