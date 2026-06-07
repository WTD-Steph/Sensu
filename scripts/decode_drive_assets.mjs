#!/usr/bin/env node
/**
 * Scans the MCP tool-result cache for Drive `download_file_content`
 * outputs and decodes the base64 payload to
 * `public/img/catalog/{slug}/{NN}.{ext}` using `scripts/drive_manifest.json`
 * to map Drive file IDs → product slugs.
 *
 * Auto-detects PNG vs JPEG from the magic bytes — some Drive sources
 * (Alibaba supplier photos, WhatsApp screenshots) are JPEG even though
 * the rest of the brand-template catalog is PNG.
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
  .filter(
    (f) =>
      f.startsWith("mcp-claude_ai_Google_Drive-download_file_content-") &&
      f.endsWith(".txt"),
  )
  .map((f) => path.join(TOOL_RESULTS_DIR, f));

/**
 * Detect image format from the first few bytes.
 * PNG  : 89 50 4E 47
 * JPEG : FF D8 FF
 * Fallback to png if unknown.
 */
function detectExt(buf) {
  if (
    buf.length >= 4 &&
    buf[0] === 0x89 &&
    buf[1] === 0x50 &&
    buf[2] === 0x4e &&
    buf[3] === 0x47
  ) {
    return "png";
  }
  if (buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) {
    return "jpg";
  }
  return "png";
}

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
  const buf = Buffer.from(data.content, "base64");
  const ext = detectExt(buf);
  const outDir = path.join(OUT_ROOT, entry.slug);
  const outFilename = `${String(entry.index).padStart(2, "0")}.${ext}`;
  const outPath = path.join(outDir, outFilename);

  if (dryRun) {
    console.log("[dry] would write", path.relative(projectRoot, outPath));
    continue;
  }

  // Remove any old siblings at the same index but a different extension
  // (e.g., if we previously wrote 01.png and now detect 01.jpg).
  if (fs.existsSync(outDir)) {
    for (const f of fs.readdirSync(outDir)) {
      if (f.startsWith(`${String(entry.index).padStart(2, "0")}.`) && f !== outFilename) {
        fs.unlinkSync(path.join(outDir, f));
      }
    }
  }

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outPath, buf);
  console.log("wrote", path.relative(projectRoot, outPath), `(${buf.length} bytes, ${ext})`);
  saved++;
}

console.log(
  `\n${dryRun ? "dry-run" : "done"} — saved ${saved}, skipped ${skipped} unmapped result files (${files.length} total scanned)`,
);
