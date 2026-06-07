#!/usr/bin/env node
/**
 * Mark catalog products as "image-ready". Reads scripts/drive_manifest.json,
 * resets every product's `images: [...]` → `images: []` plus restores
 * `placeholder: true`, then writes the *manifest-driven* image arrays back
 * in. This is the single-source-of-truth pattern; idempotent regardless of
 * how many waves have run, and immune to regex-spill bugs.
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

// Resolve the actual on-disk extension for a slug+index (png or jpg).
const PUBLIC_CATALOG = path.join(projectRoot, "public/img/catalog");
function resolveExt(slug, index) {
  const dir = path.join(PUBLIC_CATALOG, slug);
  if (!fs.existsSync(dir)) return "png";
  const prefix = `${String(index).padStart(2, "0")}.`;
  const found = fs.readdirSync(dir).find((f) => f.startsWith(prefix));
  if (!found) return "png";
  return found.slice(prefix.length);
}

let src = fs.readFileSync(CATALOG_PATH, "utf8");

/**
 * Replace within each product block. A product block is bounded by
 * `slug:` markers; the regex's lookahead `(?!slug:)` ensures we never
 * spill into the next product.
 */
function patchProductBlock(srcText, slug, mutate) {
  const blockRe = new RegExp(
    `(slug:\\s*"${slug}",(?:(?!\\sslug:)[\\s\\S])*?)(\\n\\s{2}\\},)`,
    "m",
  );
  return srcText.replace(blockRe, (_full, block, closer) => {
    return mutate(block) + closer;
  });
}

// 1) Reset every product to images: [] + placeholder: true.
//    Find each `slug: "..."` block and rewrite its images/placeholder lines.
const allSlugs = [...src.matchAll(/slug:\s*"([\w-]+)",/g)].map((m) => m[1]);

for (const slug of allSlugs) {
  src = patchProductBlock(src, slug, (block) => {
    // Replace images: [ ... ] (possibly long) with images: []
    let next = block.replace(/images:\s*\[[^\]]*\]/, "images: []");
    // Remove any existing placeholder: true line
    next = next.replace(/\n\s+placeholder:\s*true,/g, "");
    // Then insert `placeholder: true,` right after `images: []`
    next = next.replace(
      /(images:\s*\[\],)/,
      `$1\n    placeholder: true,`,
    );
    return next;
  });
}

// 2) For every slug in the manifest, set its images and drop placeholder.
let patched = 0;
for (const [slug, indices] of Object.entries(bySlug)) {
  if (indices.length === 0) continue;
  const imgs = indices
    .map((i) => {
      const ext = resolveExt(slug, i);
      return `"/img/catalog/${slug}/${String(i).padStart(2, "0")}.${ext}"`;
    })
    .join(", ");

  const before = src;
  src = patchProductBlock(src, slug, (block) => {
    let next = block.replace(/images:\s*\[\]/, `images: [${imgs}]`);
    next = next.replace(/\n\s+placeholder:\s*true,/g, "");
    return next;
  });
  if (src !== before) patched++;
  else console.warn("no match for", slug);
}

fs.writeFileSync(CATALOG_PATH, src);
console.log(`patched ${patched} products (${allSlugs.length} total in catalog)`);
