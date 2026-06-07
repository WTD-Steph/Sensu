#!/usr/bin/env node
/**
 * decode_drive_assets.mjs
 *
 * Scans the tool-result cache for Drive `download_file_content` outputs
 * and decodes the base64 payload to `public/img/catalog/{slug}/{NN}.png`
 * using `scripts/drive_manifest.json` to map Drive file IDs to product
 * slugs.
 *
 * Idempotent: re-running is safe; existing PNGs are overwritten.
 *
 * Usage:
 *   node scripts/decode_drive_assets.mjs           — decode everything
 *   node scripts/decode_drive_assets.mjs --dry-run — print plan, no writes
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const TOOL_RESULTS_DIR =
  "C:/Users/steph/.claude/projects/C--Users-steph/d8c563b5-61a8-4e80-81ea-d476b295201d/tool-results";
const MANIFEST_PATH = path.join(projectRoot, "scripts/drive_manifest.json");
const OUT_ROOT = path.join(projectRoot, "public/img/catalog");

const dryRun = process.argv.includes("--dry-run");

const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8")).mappings;
const known = new Set(Object.keys(manifest));

if (!fs.existsSync(TOOL_RESULTS_DIR)) {
  console.error("Tool-results dir not found:", TOOL_RESULTS_DIR);
  process.exit(1);
}

const files = fs
  .readdirSync(TOOL_RESULTS_DIR)
  .filter((f) =>
    f.startsWith("mcp-claude_ai_Google_Drive-download_file_content-") &&
    f.endsWith(".txt"),
  )
  .map((f) => path.join(TOOL_RESULTS_DIR, f));

let saved = 0;
let skipped = 0;

for (const txt of files) {
  let raw, data;
  try {
    raw = fs.readFileSync(txt, "utf8");
    data = JSON.parse(raw);
  } catch (err) {
    console.warn("skip (parse error):", path.basename(txt), err.message);
    continue;
  }
  const id = data.id;
  if (!known.has(id)) {
    skipped++;
    continue;
  }
  const entry = manifest[id];
  const outDir = path.join(OUT_ROOT, entry.slug);
  const outPath = path.join(
    outDir,
    `${String(entry.index).padStart(2, "0")}.png`,
  );

  if (dryRun) {
    console.log("[dry] would write", path.relative(projectRoot, outPath));
    continue;
  }

  fs.mkdirSync(outDir, { recursive: true });
  const buf = Buffer.from(data.content, "base64");
  fs.writeFileSync(outPath, buf);
  console.log("wrote", path.relative(projectRoot, outPath), `(${buf.length} bytes)`);
  saved++;
}

console.log(`\n${dryRun ? "dry-run" : "done"} — saved ${saved}, skipped ${skipped} unmapped result files (${files.length} total scanned)`);
