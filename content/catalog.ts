/**
 * Sensu product catalog — curated subset of the brand's Drive folder
 * `1f_cm9kFOOEK3TpFcrH8zEovPPGYiGyf0`.
 *
 * Cleanup pass June 2026 — kept only products with brand-template
 * photography (Edited/Product Photo PNGs with the Marble-circle
 * backdrop and kanji watermark). Removed:
 *  - Supplier-sourced JPEGs (Alibaba files with `O1CN…` filenames)
 *  - Products on placeholder with no usable source image
 *  - MORI and YUGEN collection products (collections themselves are
 *    being held until visual line is fully shot in-house)
 *  - A handful of SKUs whose product visuals don't match the rest
 *    of the catalog yet
 *
 * Conventions
 * - `slug`         url-safe identifier, used as the /shop/[slug] path
 * - `number`       the "Sensu N." sequence from the folder name where
 *                  applicable; some newer SKUs use codes instead
 * - `name`         clean product name (no "SENSU" prefix — implied)
 * - `subline`      optional series name within a collection
 * - `images`       paths under /public/img/catalog/{slug}/
 * - `priceUSD`     null until founder confirms prices for each line
 * - `driveFolderId` source-of-truth in Drive
 * - `placeholder`  reserved for future SKUs without final photography
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
  /** Image paths under /public. Empty array = placeholder. */
  images: ReadonlyArray<string>;
  /** Source Drive folder ID — root of the product's photo set. */
  driveFolderId: string;
  /** Set while `images` is empty; the UI falls back to a placeholder visual. */
  placeholder?: boolean;
};

export const CATALOG: ReadonlyArray<CatalogProduct> = [
  // HIKARI — 11 products
  {
    slug: "hikari-rain-pattern",
    number: 1,
    name: "Hikari Cup",
    subline: "Rain Pattern",
    collection: "hikari",
    detail: "Glass · handblown",
    priceUSD: 24,
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
    priceUSD: 32,
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
    priceUSD: 28,
    images: ["/img/catalog/hikari-spinning-glass/01.png"],
    driveFolderId: "1ac1a2mC2B4IcQqLLCkU_P7X_cX4QlWvX",
  },
  {
    slug: "hikari-stone",
    number: 5,
    name: "Hikari Cup",
    subline: "Stone",
    collection: "hikari",
    detail: "Glass · stone texture",
    priceUSD: 26,
    images: ["/img/catalog/hikari-stone/01.png"],
    driveFolderId: "1djPb8BSPESPq6mqVUYiaY249ivN47iny",
  },
  {
    slug: "hikari-polkadot",
    number: 17,
    name: "Hikari Cup & Coaster",
    subline: "Polkadot",
    collection: "hikari",
    detail: "Glass · cup + coaster set",
    priceUSD: 28,
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
    priceUSD: 24,
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
    priceUSD: 14,
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
    priceUSD: 34,
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
    priceUSD: 22,
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
    priceUSD: 26,
    images: ["/img/catalog/hikari-retro-dessert-bowl/01.png"],
    driveFolderId: "1rZiSrvhmU9-SWp-F2zsAzuLyDJXRUOYS",
  },
  {
    slug: "hikari-starry-cup",
    number: 26,
    name: "Hikari Starry Cup",
    collection: "hikari",
    detail: "Glass · glittery finish",
    priceUSD: 24,
    images: ["/img/catalog/hikari-starry-cup/01.png"],
    driveFolderId: "1XmupBxOWycWTBZ-hnrB6x4Gdi7tbnF3z",
  },

  // OBORO — 12 products
  {
    slug: "oboro-pastel-series",
    number: 6,
    name: "Oboro Cup",
    subline: "Pastel Series",
    collection: "oboro",
    detail: "Ceramic · pastel glaze",
    priceUSD: 22,
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
    priceUSD: 42,
    images: ["/img/catalog/oboro-wave-series-set/01.png"],
    driveFolderId: "11JkvvF8yzUXrQPt8tNEiTZTcoFrJ-Ezx",
  },
  {
    slug: "oboro-chasen-naoshi",
    number: 12,
    name: "Oboro Chasen Naoshi",
    collection: "oboro",
    detail: "Ceramic · bamboo whisk holder",
    priceUSD: 18,
    images: ["/img/catalog/oboro-chasen-naoshi/01.png"],
    driveFolderId: "1ASHNOuA0AFHaFEKei35bZzU_5IsNYkPf",
  },
  {
    slug: "oboro-egg-mug-coaster",
    number: 13,
    name: "Oboro Egg Mug & Coaster",
    collection: "oboro",
    detail: "Ceramic · mug + coaster set",
    priceUSD: 26,
    images: ["/img/catalog/oboro-egg-mug-coaster/01.png"],
    driveFolderId: "1G1LSHbZWh6iqX3o0UVqUbeTrLU_rbP1j",
  },
  {
    slug: "oboro-egg-cup",
    number: 22,
    name: "Oboro Egg Cup",
    collection: "oboro",
    detail: "Ceramic · small cup",
    priceUSD: 18,
    images: ["/img/catalog/oboro-egg-cup/01.png"],
    driveFolderId: "1Gg1Vx7_Fhfb7rkT4SXTSZeRDH6w0jDf8",
  },
  {
    slug: "oboro-ring-mug",
    number: 27,
    name: "Oboro Ring Mug",
    collection: "oboro",
    detail: "Ceramic · mug",
    priceUSD: 24,
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
    priceUSD: 32,
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
    priceUSD: 30,
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
    priceUSD: 46,
    images: ["/img/catalog/oboro-strawberry-matcha-set/01.png"],
    driveFolderId: "107fdHYC83W4wm8aI-MFYGBN2xKnjnk9A",
  },
  {
    slug: "oboro-gingko-saucer",
    number: 34,
    name: "Oboro Gingko Saucer",
    collection: "oboro",
    detail: "Ceramic · ink-brush plate",
    priceUSD: 20,
    images: ["/img/catalog/oboro-gingko-saucer/01.png"],
    driveFolderId: "1A1g-UCEyjmgMRJPRB_CmuoOALYB3kHg8",
  },
  {
    slug: "oboro-colorful-gradient",
    name: "Oboro Cup",
    subline: "Colorful Gradient",
    collection: "oboro",
    detail: "Ceramic · gradient glaze",
    priceUSD: 22,
    images: ["/img/catalog/oboro-colorful-gradient/01.png"],
    driveFolderId: "1RgnVZg3M6veFT9ICRMINe2p4neU4yIYv",
  },
  {
    slug: "oboro-two-tone-cup",
    name: "Oboro Cup",
    subline: "2 Tone 2 Shaped",
    collection: "oboro",
    detail: "Ceramic · two-tone, two-shape",
    priceUSD: 24,
    images: ["/img/catalog/oboro-two-tone-cup/01.png"],
    driveFolderId: "1WPUEeEZE79R1xK8MLJB4ob3kTQSpp2L0",
  },

  // TAKE — 1 product
  {
    slug: "take-chasen",
    number: 9,
    name: "Take Chasen",
    collection: "take",
    detail: "Bamboo · matcha whisk",
    priceUSD: 18,
    images: ["/img/catalog/take-chasen/01.png"],
    driveFolderId: "1Z-VZojAUZVC60xbkDl3Whk_e6LwcnBPq",
  },

  // HAGANE — 4 products
  {
    slug: "hagane-matcha-canister",
    number: 16,
    name: "Hagane Matcha Canister",
    collection: "hagane",
    detail: "Steel · airtight canister",
    priceUSD: 28,
    images: ["/img/catalog/hagane-matcha-canister/01.png"],
    driveFolderId: "1qbey9PrQMM537CKCsod_T7I61Ad73qu-",
  },
  {
    slug: "hagane-matcha-canister-sifter",
    name: "Hagane Airtight Matcha Canister",
    subline: "with Mesh Sifter",
    collection: "hagane",
    detail: "Steel · canister + mesh sifter",
    priceUSD: 38,
    images: ["/img/catalog/hagane-matcha-canister-sifter/01.png"],
    driveFolderId: "1SK7Y3fuqo2O6lWojdjZRA8tV63i2N2yX",
  },
  {
    slug: "hagane-modern-cup-saucer",
    number: 25,
    name: "Hagane Modern Cup & Saucer Set",
    collection: "hagane",
    detail: "Stainless steel · cup + saucer",
    priceUSD: 48,
    images: ["/img/catalog/hagane-modern-cup-saucer/01.png"],
    driveFolderId: "1Qdn-7Gp4PubSqPFkoQICDgxxbs1__fHY",
  },
  {
    slug: "hagane-pebble-chakoshi",
    number: 28,
    name: "Hagane Pebble Chakoshi",
    collection: "hagane",
    detail: "Steel · tea strainer",
    priceUSD: 22,
    images: ["/img/catalog/hagane-pebble-chakoshi/01.png"],
    driveFolderId: "1uYG2r1KInf1K3ILLY-GolJIIvY-G2CyW",
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
