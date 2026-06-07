import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/links";
import { CATALOG } from "@/content/catalog";
import { COLLECTIONS } from "@/content/collections";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { path: "/",        priority: 1.0, changeFrequency: "weekly" },
    { path: "/shop",    priority: 0.95, changeFrequency: "weekly" },
    { path: "/story",   priority: 0.9, changeFrequency: "monthly" },
    { path: "/ritual",  priority: 0.8, changeFrequency: "monthly" },
    { path: "/lookbook",priority: 0.7, changeFrequency: "monthly" },
    { path: "/press",   priority: 0.5, changeFrequency: "yearly" },
  ];

  const collectionRoutes = COLLECTIONS.map((c) => ({
    url: `${SITE_URL}/shop?collection=${c.id}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const productRoutes = CATALOG.map((p) => ({
    url: `${SITE_URL}/shop/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes.map((r) => ({
      url: `${SITE_URL}${r.path}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...collectionRoutes,
    ...productRoutes,
  ];
}
