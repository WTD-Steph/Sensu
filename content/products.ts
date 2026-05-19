/**
 * Sensu featured products. Sourced from the rebuild brief §1.
 *
 * Pricing is in IDR (Indonesian Rupiah). When in doubt about a product
 * detail, the entry is flagged `placeholder: true` and uses a placeholder
 * image — see the brief's "Do not invent product names or prices" rule.
 */
import type { CollectionId } from "./collections";

export type Product = {
  id: string;
  name: string;
  collection: CollectionId;
  /** One-line description for cards. */
  blurb: string;
  /** Material/short detail line. */
  detail: string;
  /** Price in IDR rupiah, integer. */
  priceIDR: number;
  /** Public image path under /public — square crop preferred. */
  image: string;
  /** Per-product Shopee URL if the founder has confirmed it; falls back to global SHOPEE_URL otherwise. */
  shopeeUrl?: string;
  /** Marks the product as not yet confirmed against the actual SKU list. */
  placeholder?: boolean;
};

export const PRODUCTS: ReadonlyArray<Product> = [
  // Confirmed from brief §1
  {
    id: "hikari-chawan",
    name: "Hikari Chawan",
    collection: "hikari",
    blurb: "A clear glass cup that lets the colour and ritual of your drink shine.",
    detail: "Clear glass · handblown",
    priceIDR: 260_000,
    image: "/img/products/hikari-cup.jpg",
  },
  {
    id: "oboro-senchawan",
    name: "Oboro Senchawan",
    collection: "oboro",
    blurb: "A soft white-glazed ceramic cup. Warm in hand, fit for espresso or matcha.",
    detail: "Ceramic · white glaze",
    priceIDR: 260_000,
    image: "/img/products/oboro-senchawan.jpg",
  },
  {
    id: "take-bundle",
    name: "Bundle Tea Set",
    collection: "take",
    blurb: "Chasen, chawan, and matcha — everything you need to begin the ritual.",
    detail: "Chasen + chawan + matcha",
    priceIDR: 320_000,
    image: "/img/social/bundle.jpg",
  },
  // Mentioned in the brief — image not yet supplied, so flagged as placeholder
  {
    id: "haen-kettle",
    name: "Haen Kettle",
    collection: "hikari",
    blurb: "A handblown glass kettle with a minimal, fluted spout.",
    detail: "Glass · handblown",
    priceIDR: 320_000,
    image: "/img/products/hikari-cup.jpg",
    placeholder: true,
  },
  {
    id: "kumo-bowl",
    name: "Kumo Bowl",
    collection: "oboro",
    blurb: "A ceramic tea bowl shaped by hand, fired in muted clay tones.",
    detail: "Ceramic · muted clay",
    priceIDR: 210_000,
    image: "/img/products/oboro-senchawan.jpg",
    placeholder: true,
  },
  {
    id: "yoru-tray",
    name: "Yoru Tray",
    collection: "oboro",
    blurb: "A shallow ceramic tray with a raw edge and subtle glaze.",
    detail: "Ceramic · raw edge",
    priceIDR: 150_000,
    image: "/img/social/tools-tray.jpg",
    placeholder: true,
  },
  {
    id: "chasen",
    name: "Chasen",
    collection: "take",
    blurb: "Crafted from fine bamboo for smooth, frothy matcha. Daily-ready.",
    detail: "Bamboo · whisk",
    priceIDR: 120_000,
    image: "/img/social/bundle.jpg",
    placeholder: true,
  },
  {
    id: "takumi-set",
    name: "Takumi Premium Set",
    collection: "takumi",
    blurb: "A premium editorial set, mixing materials with intention.",
    detail: "Mixed materials · premium",
    priceIDR: 720_000,
    image: "/img/social/bts-tray.jpg",
    placeholder: true,
  },
];

/** Format an IDR price for display, e.g. "IDR 260.000". */
export function formatIDR(amount: number): string {
  return `IDR ${amount.toLocaleString("id-ID")}`;
}
