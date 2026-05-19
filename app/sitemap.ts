import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/links";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { path: "/",        priority: 1.0, changeFrequency: "weekly" },
    { path: "/story",   priority: 0.9, changeFrequency: "monthly" },
    { path: "/ritual",  priority: 0.8, changeFrequency: "monthly" },
    { path: "/lookbook",priority: 0.7, changeFrequency: "monthly" },
    { path: "/press",   priority: 0.5, changeFrequency: "yearly" },
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
