import type { MetadataRoute } from "next";
import { insights, services } from "./lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://greenfalls.co";
  const fixed = ["", "/services", "/who-we-help", "/approach", "/about", "/insights", "/contact", "/privacy", "/terms"];
  return [
    ...fixed.map((path) => ({ url: `${base}${path}`, lastModified: new Date(["/privacy", "/terms"].includes(path) ? "2026-09-09" : "2026-10-02"), changeFrequency: "monthly" as const, priority: path === "" ? 1 : .7 })),
    ...(["contractors", "retailers"].map((audience) => ({ url: `${base}/who-we-help/${audience}`, lastModified: new Date("2026-10-02"), changeFrequency: "monthly" as const, priority: .8 }))),
    ...services.map(({ slug }) => ({ url: `${base}/services/${slug}`, lastModified: new Date("2026-10-02"), changeFrequency: "monthly" as const, priority: .8 })),
    ...insights.map(({ slug, updated }) => ({ url: `${base}/insights/${slug}`, lastModified: new Date(updated), changeFrequency: "monthly" as const, priority: .7 })),
  ];
}
