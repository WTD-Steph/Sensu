import { COLLECTIONS, type CollectionId } from "@/content/collections";
import { Orbit } from "@/components/motifs";

/**
 * Brand-styled placeholder visual for products that don't have
 * photography yet (catalog C3 pulls images). Mimics the brand book's
 * Product Listing template — soft surface, oversized kanji watermark,
 * subtle Orbit pattern in a corner.
 *
 * Surface colour tracks the collection so the placeholder still reads
 * as "a HIKARI product" / "a YUGEN product" even without a real photo.
 */
type ProductPlaceholderProps = {
  collection: CollectionId;
  /** Product name overlay. */
  name: string;
  /** Optional series label. */
  subline?: string;
  className?: string;
};

const SURFACE: Record<CollectionId, { bg: string; text: string; kanji: string }> = {
  hikari: { bg: "bg-flare", text: "text-whim", kanji: "text-whim/15" },
  oboro: { bg: "bg-marble", text: "text-whim", kanji: "text-whim/15" },
  take: { bg: "bg-void", text: "text-whim", kanji: "text-whim/12" },
  hagane: { bg: "bg-void-soft", text: "text-whim", kanji: "text-whim/15" },
  mori: { bg: "bg-whim-warm", text: "text-void", kanji: "text-void/12" },
  yugen: { bg: "bg-marble", text: "text-whim", kanji: "text-whim/15" },
};

export function ProductPlaceholder({
  collection,
  name,
  subline,
  className,
}: ProductPlaceholderProps) {
  const surface = SURFACE[collection];
  const meta = COLLECTIONS.find((c) => c.id === collection);
  return (
    <div
      className={`relative isolate flex h-full w-full items-center justify-center overflow-hidden ${surface.bg} ${surface.text} ${className ?? ""}`}
      role="img"
      aria-label={`${name}${subline ? ` — ${subline}` : ""} (photography coming soon)`}
    >
      {/* Oversized kanji watermark */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-6 -right-2 select-none font-jp text-[280px] leading-none ${surface.kanji}`}
      >
        {meta?.kanji ?? ""}
      </span>

      {/* Orbit dots — subtle */}
      <Orbit
        variant="scatter"
        className="pointer-events-none absolute -left-6 -top-6 h-32 w-32 opacity-30"
      />

      <div className="relative z-10 max-w-[80%] text-center">
        <p className="text-caption uppercase tracking-eyebrow opacity-75">
          {meta?.name ?? collection}
        </p>
        <p className="mt-3 text-h3 font-bold leading-tight">{name}</p>
        {subline ? (
          <p className="mt-1 text-body opacity-80">{subline}</p>
        ) : null}
        <p className="mt-6 text-[11px] uppercase tracking-[0.2em] opacity-60">
          Photography coming soon
        </p>
      </div>
    </div>
  );
}
