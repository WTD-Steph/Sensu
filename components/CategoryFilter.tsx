import Link from "next/link";
import { COLLECTIONS, type CollectionId } from "@/content/collections";
import { CATALOG_COUNTS } from "@/content/catalog";

type CategoryFilterProps = {
  /** Currently active collection, or null for "All". */
  active: CollectionId | null;
  /** Total product count for the "All" chip. */
  total: number;
};

/**
 * Chip filter for /shop. Each chip is a <Link> so filtering is
 * URL-driven (?collection=hikari) and works with no client JS.
 *
 * Active chip uses the Marble fill; inactive chips are Whim with a
 * subtle border. A small numeric badge shows the count per collection.
 */
export function CategoryFilter({ active, total }: CategoryFilterProps) {
  return (
    <nav
      aria-label="Filter by collection"
      className="flex flex-wrap items-center gap-2"
    >
      <Chip href="/shop" label="All" count={total} active={active === null} />
      {COLLECTIONS.map((c) => (
        <Chip
          key={c.id}
          href={`/shop?collection=${c.id}`}
          label={c.name}
          kanji={c.kanji}
          count={CATALOG_COUNTS[c.id] ?? 0}
          active={active === c.id}
        />
      ))}
    </nav>
  );
}

function Chip({
  href,
  label,
  kanji,
  count,
  active,
}: {
  href: string;
  label: string;
  kanji?: string;
  count: number;
  active: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 ease-sensu";
  const styles = active
    ? "border-marble bg-marble text-whim"
    : "border-black/15 bg-whim text-void hover:border-marble hover:text-marble";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {label}
      {kanji ? (
        <span className="font-jp text-[12px] opacity-70">{kanji}</span>
      ) : null}
      <span
        className={`rounded-full px-1.5 text-[11px] ${
          active ? "bg-whim/20" : "bg-black/5"
        }`}
      >
        {count}
      </span>
    </Link>
  );
}
