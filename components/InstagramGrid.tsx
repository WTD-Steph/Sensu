import Image from "next/image";
import instagram from "@/content/instagram.json";
import { IG_URL } from "@/lib/links";

type InstagramPost = {
  permalink: string;
  image: string;
  alt: string;
};

/**
 * Instagram grid driven by `content/instagram.json` — a static cache.
 *
 * Until the founder enables the Meta Graph API and a fetch job is in
 * place, the JSON is hand-curated from existing on-brand imagery.
 * Phase 4 wires up scripts/refresh-instagram.ts.
 */
export function InstagramGrid({
  limit = 6,
  columns = 3,
}: {
  limit?: number;
  columns?: 3 | 4;
}) {
  const posts: InstagramPost[] = instagram.posts.slice(0, limit);
  const gridCols = columns === 4 ? "md:grid-cols-4" : "md:grid-cols-3";

  return (
    <ul className={`grid grid-cols-2 gap-2 ${gridCols}`}>
      {posts.map((post, i) => (
        <li key={`${post.image}-${i}`} className="relative aspect-square">
          <a
            href={post.permalink || IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-full w-full overflow-hidden rounded-card bg-whim-warm"
            aria-label={`Open Instagram post: ${post.alt}`}
          >
            <Image
              src={post.image}
              alt={post.alt}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover transition-transform duration-500 ease-sensu group-hover:scale-105"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
