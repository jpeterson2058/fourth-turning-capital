import type { MetadataRoute } from "next";
import { insights } from "./insights/articles";

const baseUrl = "https://fourthturning.capital";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-08-03T12:00:00Z"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date("2026-08-03T12:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...insights.map((insight) => ({
      url: `${baseUrl}/insights/${insight.slug}`,
      lastModified: new Date(`${insight.publishedAt}T12:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
