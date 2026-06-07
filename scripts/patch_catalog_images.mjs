#!/usr/bin/env node
/**
 * Mark catalog products as "image-ready" — set images: [...] and remove
 * placeholder: true. Reads the manifest, infers max index per slug,
 * builds the image path array, and patches content/catalog.ts in place.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const CATALOG_PATH = path.join(projectRoot, "content/catalog.ts");
const MANIFEST_PATH = path.join(projectRoot, "scripts/drive_manifest.json");

const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8")).mappings;

// Group manifest by slug → sorted list of indices.
const bySlug = {};
for (const m of Object.values(manifest)) {
  bySlug[m.slug] ??= [];
  bySlug[m.slug].push(m.index);
}
for (const s of Object.keys(bySlug)) bySlug[s].sort((a, b) => a - b);

let src = fs.readFileSync(CATALOG_PATH, "utf8");
let patched = 0;

for (const [slug, indices] of Object.entries(bySlug)) {
  // Only patch if at least one image is mapped.
  if (indices.length === 0) continue;
  const imgs = indices
    .map((i) => `"/img/catalog/${slug}/${String(i).padStart(2, "0")}.png"`)
    .join(", ");

  // Find this product's block: slug: "<slug>", ... images: [], ... (optional placeholder: true,)
  const slugRe = new RegExp(
    `(slug:\\s*"${slug}",[\\s\\S]*?)images:\\s*\\[\\]`,
    "m",
  );
  const before = src;
  src = src.replace(slugRe, (_full, head) => `${head}images: [${imgs}]`);
  if (src === before) {
    console.warn("no images:[] match for", slug);
    continue;
  }
  // Then strip placeholder: true within the same product block.
  const phRe = new RegExp(
    `(slug:\\s*"${slug}",[\\s\\S]*?)\\s+placeholder:\\s*true,`,
    "m",
  );
  src = src.replace(phRe, "$1");
  patched++;
}

fs.writeFileSync(CATALOG_PATH, src);
console.log(`patched ${patched} products`);
