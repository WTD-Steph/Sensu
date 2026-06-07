/**
 * Sensu product catalog — enumerated from the brand's Drive folder
 * `1f_cm9kFOOEK3TpFcrH8zEovPPGYiGyf0` (47 products, May 2026 snapshot).
 *
 * Each entry carries the source Drive folder ID so C3 of the rebuild
 * can fetch hero photos from the "Edited" subfolder of each.
 *
 * Conventions
 * - `slug`         url-safe identifier, used as the /shop/[slug] path
 * - `number`       the "Sensu N." sequence from the folder name where
 *                  applicable; some newer SKUs use codes instead
 * - `name`         clean product name (no "SENSU" prefix — implied)
 * - `subline`      optional series name within a collection
 * - `images`       paths under /public/img/catalog/{slug}/ — empty
 *                  until C3 pulls them
 * - `priceUSD`     null until founder confirms prices for each line
 * - `driveFolderId` source-of-truth in Drive
 * - `placeholder`  true while images are still empty
 */
import type { CollectionId } from "./collections";

export type CatalogProduct = {
  slug: string;
  number?: number;
  name: string;
  collection: CollectionId;
  subline?: string;
  /** Short detail line for cards. */
  detail: string;
  /** Optional longer description. Filled in as copy is approved. */
  description?: string;
  /** USD whole dollars. Null = pricing not yet confirmed. */
  priceUSD: number | null;
  /** Image paths under /public. Empty array until C3 pulls images. */
  images: ReadonlyArray<string>;
  /** Source Drive folder ID — root of the product's photo set. */
  driveFolderId: string;
  /** Per-product Shopee URL once the founder shares it. */
  shopeeUrl?: string;
  /** Set while `images` is empty; the UI falls back to a placeholder visual. */
  placeholder?: boolean;
};

export const CATALOG: ReadonlyArray<CatalogProduct> = [
  // HIKARI — 14 products
  {
    slug: "hikari-rain-pattern",
    number: 1,
    name: "Hikari Cup",
    subline: "Rain Pattern",
    collection: "hikari",
    detail: "Glass · handblown",
    priceUSD: null,
    images: ["/img/catalog/hikari-rain-pattern/01.png"],
    driveFolderId: "1hfN9VNXuuYedp5Pk9XemaJUD_Mdg75T-",
  },
  {
    slug: "hikari-3d-mountain",
    number: 2,
    name: "Hikari Cup",
    subline: "3D Mountain",
    collection: "hikari",
    detail: "Glass · sculpted base",
    priceUSD: null,
    images: ["/img/catalog/hikari-3d-mountain/01.png"],
    driveFolderId: "1fo_3dexrfa5qe9kmoWBUm1-34lq_RpJ4",
  },
  {
    slug: "hikari-spinning-glass",
    number: 3,
    name: "Hikari Cup",
    subline: "Spinning Glass",
    collection: "hikari",
    detail: "Glass · twisted form",
    priceUSD: null,
    images: ["/img/catalog/hikari-spinning-glass/01.png"],
    driveFolderId: "1ac1a2mC2B4IcQqLLCkU_P7X_cX4QlWvX",
  },
  {
    slug: "hikari-shot-glass-w40",
    number: 4,
    name: "Hikari Shot Glass",
    subline: "W40",
    collection: "hikari",
    detail: "Glass · 40ml",
    priceUSD: null,
    images: ["/img/catalog/hikari-shot-glass-w40/01.png"],
    driveFolderId: "1s-rHOW13pqtHm1LMAfDkzHZQxvPAqOVt",
  },
  {
    slug: "hikari-stone",
    number: 5,
    name: "Hikari Cup",
    subline: "Stone",
    collection: "hikari",
    detail: "Glass · stone texture",
    priceUSD: null,
    images: ["/img/catalog/hikari-stone/01.png"],
    driveFolderId: "1djPb8BSPESPq6mqVUYiaY249ivN47iny",
  },
  {
    slug: "hikari-server-and-cup",
    number: 10,
    name: "Hikari Server & Cup",
    collection: "hikari",
    detail: "Glass · pitcher + cup set",
    priceUSD: null,
    images: ["/img/catalog/hikari-server-and-cup/01.png"],
    driveFolderId: "1MQSdDUWYE6GSp8PTMnlY1unnGPpwXuoO",
  },
  {
    slug: "hikari-retro-wave",
    number: 11,
    name: "Hikari Cup",
    subline: "Retro Wave",
    collection: "hikari",
    detail: "Glass · waveform",
    priceUSD: null,
    images: [],
    placeholder: true,
    driveFolderId: "1R1SPCJearlh1KlDSwaUa9sBiWOX9l_cU",
  },
  {
    slug: "hikari-polkadot",
    number: 17,
    name: "Hikari Cup & Coaster",
    subline: "Polkadot",
    collection: "hikari",
    detail: "Glass · cup + coaster set",
    priceUSD: null,
    images: ["/img/catalog/hikari-polkadot/01.png"],
    driveFolderId: "1aojZgZi_bhAKC6EI5enyXdXQBeFUXzpK",
  },
  {
    slug: "hikari-frosted-gradient",
    number: 18,
    name: "Hikari Cup",
    subline: "Frosted Gradient",
    collection: "hikari",
    detail: "Glass · frosted finish",
    priceUSD: null,
    images: ["/img/catalog/hikari-frosted-gradient/01.png"],
    driveFolderId: "1pkMsBwTYeMwoBa7mnBTlSU-GgOCOXwIt",
  },
  {
    slug: "hikari-retro-glass-spoon",
    number: 19,
    name: "Hikari Glass Spoon",
    subline: "Retro",
    collection: "hikari",
    detail: "Glass · spoon",
    priceUSD: null,
    images: ["/img/catalog/hikari-retro-glass-spoon/01.png"],
    driveFolderId: "1o6TZK0M2j6RJTFWkO3K3MntZQLuG14LU",
  },
  {
    slug: "hikari-retro-object",
    number: 20,
    name: "Hikari Object",
    subline: "Retro",
    collection: "hikari",
    detail: "Glass · sculptural object",
    priceUSD: null,
    images: ["/img/catalog/hikari-retro-object/01.png"],
    driveFolderId: "19XtsZaFXKHKZEn2-luzAR7YfFXB0pfre",
  },
  {
    slug: "hikari-retro-hourglass",
    number: 21,
    name: "Hikari Shot Glass",
    subline: "Retro Hourglass",
    collection: "hikari",
    detail: "Glass · hourglass form",
    priceUSD: null,
    images: ["/img/catalog/hikari-retro-hourglass/01.png"],
    driveFolderId: "1rrp_XciHB-VijKdbCBKtbPGIl5aylOeY",
  },
  {
    slug: "hikari-retro-dessert-bowl",
    number: 23,
    name: "Hikari Dessert Bowl",
    subline: "Retro",
    collection: "hikari",
    detail: "Glass · dessert bowl",
    priceUSD: null,
    images: ["/img/catalog/hikari-retro-dessert-bowl/01.png"],
    driveFolderId: "1rZiSrvhmU9-SWp-F2zsAzuLyDJXRUOYS",
  },
  {
    slug: "hikari-katakuchi-chasen-holder",
    number: 24,
    name: "Hikari Katakuchi & Chasen Holder Set",
    collection: "hikari",
    detail: "Glass · spouted bowl + whisk holder",
    priceUSD: null,
    images: [],
    placeholder: true,
    driveFolderId: "16biIYGv1FdJfQ6pZujwp2FVOvtbKD1iO",
  },
  {
    slug: "hikari-starry-cup",
    number: 26,
    name: "Hikari Starry Cup",
    collection: "hikari",
    detail: "Glass · glittery finish",
    priceUSD: null,
    images: ["/img/catalog/hikari-starry-cup/01.png"],
    driveFolderId: "1XmupBxOWycWTBZ-hnrB6x4Gdi7tbnF3z",
  },
  {
    slug: "hikari-katakuchi-glass-set",
    number: 32,
    name: "Hikari Katakuchi Holder Glass Set",
    collection: "hikari",
    detail: "Glass · spouted bowl + holder set",
    priceUSD: null,
    images: [],
    placeholder: true,
    driveFolderId: "10HWJOqeqKCiENeeEGt8KL88JMJOyeZ-N",
  },
  {
    slug: "hikari-clear-pastel-server",
    name: "Hikari Server",
    subline: "Clear Pastel",
    collection: "hikari",
    detail: "Glass · pitcher",
    priceUSD: null,
    images: [],
    placeholder: true,
    driveFolderId: "1BLQ1FhOoxCJ7gmQuZKzOgKaShIFQW3aN",
  },

  // OBORO — 22 products
  {
    slug: "oboro-pastel-series",
    number: 6,
    name: "Oboro Cup",
    subline: "Pastel Series",
    collection: "oboro",
    detail: "Ceramic · pastel glaze",
    priceUSD: null,
    images: ["/img/catalog/oboro-pastel-series/01.png"],
    driveFolderId: "1Zdwy7l8LtoLPSYJq2UN-Ix47JInYzu1U",
  },
  {
    slug: "oboro-wave-series-set",
    number: 7,
    name: "Oboro Cup Set",
    subline: "Wave Series",
    collection: "oboro",
    detail: "Ceramic · wave-form set",
    priceUSD: null,
    images: ["/img/catalog/oboro-wave-series-set/01.png"],
    driveFolderId: "11JkvvF8yzUXrQPt8tNEiTZTcoFrJ-Ezx",
  },
  {
    slug: "oboro-yuki-chawan",
    number: 8,
    name: "Oboro Chawan",
    subline: "Yuki Series",
    collection: "oboro",
    detail: "Ceramic · snow glaze chawan",
    priceUSD: null,
    images: [],
    placeholder: true,
    driveFolderId: "1lSr9Y3DVWWLxXOpsV9XO_-wi_H5akjsa",
  },
  {
    slug: "oboro-chasen-naoshi",
    number: 12,
    name: "Oboro Chasen Naoshi",
    collection: "oboro",
    detail: "Ceramic · bamboo whisk holder",
    priceUSD: null,
    images: ["/img/catalog/oboro-chasen-naoshi/01.png"],
    driveFolderId: "1ASHNOuA0AFHaFEKei35bZzU_5IsNYkPf",
  },
  {
    slug: "oboro-egg-mug-coaster",
    number: 13,
    name: "Oboro Egg Mug & Coaster",
    collection: "oboro",
    detail: "Ceramic · mug + coaster set",
    priceUSD: null,
    images: ["/img/catalog/oboro-egg-mug-coaster/01.png"],
    driveFolderId: "1G1LSHbZWh6iqX3o0UVqUbeTrLU_rbP1j",
  },
  {
    slug: "oboro-katakuchi-glaze",
    number: 14,
    name: "Oboro Katakuchi",
    subline: "Glaze Series",
    collection: "oboro",
    detail: "Ceramic · spouted matcha bowl",
    priceUSD: null,
    images: [],
    placeholder: true,
    driveFolderId: "1amXAkLbjqDvXku-Cexp9HYHyjpx-EMDj",
  },
  {
    slug: "oboro-katakuchi-chasen-holder",
    number: 15,
    name: "Oboro Katakuchi & Chasen Holder",
    collection: "oboro",
    detail: "Ceramic · matcha set",
    priceUSD: null,
    images: [],
    placeholder: true,
    driveFolderId: "1A_2TPu1OQLeF1-Sgg1ZHky2tLPuEdWdA",
  },
  {
    slug: "oboro-egg-cup",
    number: 22,
    name: "Oboro Egg Cup",
    collection: "oboro",
    detail: "Ceramic · small cup",
    priceUSD: null,
    images: ["/img/catalog/oboro-egg-cup/01.png"],
    driveFolderId: "1Gg1Vx7_Fhfb7rkT4SXTSZeRDH6w0jDf8",
  },
  {
    slug: "oboro-ring-mug",
    number: 27,
    name: "Oboro Ring Mug",
    collection: "oboro",
    detail: "Ceramic · mug",
    priceUSD: null,
    images: ["/img/catalog/oboro-ring-mug/01.png"],
    driveFolderId: "1hLrgy9DuGaDtVfLXiTdSw8o0k7_bCrF6",
  },
  {
    slug: "oboro-tumbler",
    number: 29,
    name: "Oboro Tumbler",
    subline: "Rubber Lid",
    collection: "oboro",
    detail: "Ceramic · tumbler with lid",
    priceUSD: null,
    images: ["/img/catalog/oboro-tumbler/01.png"],
    driveFolderId: "1t0HZFBgM3BmGooOvQ4Png-rXEiTYvNuu",
  },
  {
    slug: "oboro-tumbler-ceramic-cup",
    number: 30,
    name: "Oboro Tumbler",
    subline: "Ceramic Cup",
    collection: "oboro",
    detail: "Ceramic · tumbler cup",
    priceUSD: null,
    images: ["/img/catalog/oboro-tumbler-ceramic-cup/01.png"],
    driveFolderId: "1q4A3criWXFv1wWHapllThninemYNvvN0",
  },
  {
    slug: "oboro-strawberry-matcha-set",
    number: 31,
    name: "Oboro Strawberry Matcha Set",
    subline: "Katakuchi & Chasen Holder",
    collection: "oboro",
    detail: "Ceramic · matcha set",
    priceUSD: null,
    images: ["/img/catalog/oboro-strawberry-matcha-set/01.png"],
    driveFolderId: "107fdHYC83W4wm8aI-MFYGBN2xKnjnk9A",
  },
  {
    slug: "oboro-donut-chasen-naoshi",
    number: 33,
    name: "Oboro Donut Chasen Naoshi",
    subline: "Round Model",
    collection: "oboro",
    detail: "Ceramic · round whisk holder",
    priceUSD: null,
    images: [],
    placeholder: true,
    driveFolderId: "1oUPUSip0jYAHK6UCBWvJWASnHUYejEvt",
  },
  {
    slug: "oboro-gingko-saucer",
    number: 34,
    name: "Oboro Gingko Saucer",
    collection: "oboro",
    detail: "Ceramic · ink-brush plate",
    priceUSD: null,
    images: ["/img/catalog/oboro-gingko-saucer/01.png"],
    driveFolderId: "1A1g-UCEyjmgMRJPRB_CmuoOALYB3kHg8",
  },
  {
    slug: "oboro-colorful-gradient",
    name: "Oboro Cup",
    subline: "Colorful Gradient",
    collection: "oboro",
    detail: "Ceramic · gradient glaze",
    priceUSD: null,
    images: ["/img/catalog/oboro-colorful-gradient/01.png"],
    driveFolderId: "1RgnVZg3M6veFT9ICRMINe2p4neU4yIYv",
  },
  {
    slug: "oboro-two-tone-cup",
    name: "Oboro Cup",
    subline: "2 Tone 2 Shaped",
    collection: "oboro",
    detail: "Ceramic · two-tone, two-shape",
    priceUSD: null,
    images: ["/img/catalog/oboro-two-tone-cup/01.png"],
    driveFolderId: "1WPUEeEZE79R1xK8MLJB4ob3kTQSpp2L0",
  },
  {
    slug: "oboro-shizen-tasting-strainer",
    name: "Oboro Shizen Tasting Cup",
    subline: "with Strainer",
    collection: "oboro",
    detail: "Ceramic · tea cup with strainer",
    priceUSD: null,
    images: [],
    placeholder: true,
    driveFolderId: "1I5DLRknmgr3lqYnPZ72zdtJtrwCTgT__",
  },
  {
    slug: "oboro-single-tea-pastel",
    name: "Oboro Single Tea Cup",
    subline: "Pastel Series",
    collection: "oboro",
    detail: "Ceramic · solo cup",
    priceUSD: null,
    images: [],
    placeholder: true,
    driveFolderId: "1YR5Xgn9NNYWit_bqNx6VGOICuHNaX2IS",
  },
  {
    slug: "oboro-textured-pattern",
    name: "Oboro Coffee Cup & Saucer",
    subline: "Textured Pattern",
    collection: "oboro",
    detail: "Ceramic · textured cup + saucer",
    priceUSD: null,
    images: [],
    placeholder: true,
    driveFolderId: "1pkLpSQcZjmACWUo7EomHQUe_BLT0PNYW",
  },
  {
    slug: "oboro-artisan-espresso",
    name: "Oboro Espresso Tasting Cup",
    subline: "Artisan",
    collection: "oboro",
    detail: "Ceramic · espresso cup",
    priceUSD: null,
    images: [],
    placeholder: true,
    driveFolderId: "1g-xrzVONJCWHuVdRepOpPmA99LtbrIPj",
  },
  {
    slug: "oboro-speckled-matcha-cup",
    name: "Oboro Matcha Coffee Cup",
    subline: "Speckled",
    collection: "oboro",
    detail: "Ceramic · speckled glaze",
    priceUSD: null,
    images: [],
    placeholder: true,
    driveFolderId: "1mMJntsd5T0a-5iZpOVMQCEniR8x_lV6N",
  },
  {
    slug: "oboro-marble-glaze-cup",
    name: "Oboro Coffee Cup",
    subline: "Marble Glaze",
    collection: "oboro",
    detail: "Ceramic · marble-effect glaze",
    priceUSD: null,
    images: [],
    placeholder: true,
    driveFolderId: "1b1tVBIQSqptioFDrRzFY_dmalpPEP-29",
  },

  // TAKE — 1 product
  {
    slug: "take-chasen",
    number: 9,
    name: "Take Chasen",
    collection: "take",
    detail: "Bamboo · matcha whisk",
    priceUSD: null,
    images: ["/img/catalog/take-chasen/01.png"],
    driveFolderId: "1Z-VZojAUZVC60xbkDl3Whk_e6LwcnBPq",
  },

  // HAGANE — 5 products
  {
    slug: "hagane-matcha-canister",
    number: 16,
    name: "Hagane Matcha Canister",
    collection: "hagane",
    detail: "Steel · airtight canister",
    priceUSD: null,
    images: ["/img/catalog/hagane-matcha-canister/01.jpg"],
    driveFolderId: "1qbey9PrQMM537CKCsod_T7I61Ad73qu-",
  },
  {
    slug: "hagane-matcha-canister-sifter",
    name: "Hagane Airtight Matcha Canister",
    subline: "with Mesh Sifter",
    collection: "hagane",
    detail: "Steel · canister + mesh sifter",
    priceUSD: null,
    images: ["/img/catalog/hagane-matcha-canister-sifter/01.png"],
    driveFolderId: "1SK7Y3fuqo2O6lWojdjZRA8tV63i2N2yX",
  },
  {
    slug: "hagane-modern-cup-saucer",
    number: 25,
    name: "Hagane Modern Cup & Saucer Set",
    collection: "hagane",
    detail: "Stainless steel · cup + saucer",
    priceUSD: null,
    images: ["/img/catalog/hagane-modern-cup-saucer/01.png"],
    driveFolderId: "1Qdn-7Gp4PubSqPFkoQICDgxxbs1__fHY",
  },
  {
    slug: "hagane-pebble-chakoshi",
    number: 28,
    name: "Hagane Pebble Chakoshi",
    collection: "hagane",
    detail: "Steel · tea strainer",
    priceUSD: null,
    images: ["/img/catalog/hagane-pebble-chakoshi/01.png"],
    driveFolderId: "1uYG2r1KInf1K3ILLY-GolJIIvY-G2CyW",
  },
  {
    slug: "hagane-teaspoon",
    number: 35,
    name: "Hagane Teaspoon",
    collection: "hagane",
    detail: "Steel · teaspoon",
    priceUSD: null,
    images: ["/img/catalog/hagane-teaspoon/01.png"],
    driveFolderId: "1CbEl5zIRYlQmT0JrLmPetM8q1I7vaVYu",
  },

  // MORI — 1 product
  {
    slug: "mori-matcha-bowl-chasen-set",
    name: "Mori Matcha Bowl & Chasen Set",
    collection: "mori",
    detail: "Wood + bamboo · matcha set",
    priceUSD: null,
    images: ["/img/catalog/mori-matcha-bowl-chasen-set/01.jpg"],
    driveFolderId: "1XsNhahMYxh2C5XETBUKB3Vk8EstZh9l7",
  },

  // YUGEN — 1 product
  {
    slug: "yugen-coffee-cup-saucer",
    name: "Yugen Coffee Cup & Saucer Set",
    collection: "yugen",
    detail: "Ceramic · premium cup + saucer",
    priceUSD: null,
    images: ["/img/catalog/yugen-coffee-cup-saucer/01.jpg"],
    driveFolderId: "1vnPhe8xIbhiBAuzeeZBflg_sfLLJt_C8",
  },
];

/** Catalog count by collection. */
export const CATALOG_COUNTS: Record<CollectionId, number> = CATALOG.reduce(
  (acc, p) => {
    acc[p.collection] = (acc[p.collection] ?? 0) + 1;
    return acc;
  },
  {} as Record<CollectionId, number>,
);

/** Find a product by slug. */
export function getCatalogProduct(slug: string): CatalogProduct | undefined {
  return CATALOG.find((p) => p.slug === slug);
}

/** Filter the catalog by collection. */
export function getProductsByCollection(
  collection: CollectionId,
): ReadonlyArray<CatalogProduct> {
  return CATALOG.filter((p) => p.collection === collection);
}
