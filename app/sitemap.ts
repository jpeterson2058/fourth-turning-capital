import type { MetadataRoute } from "next";
import { articleCanonicalUrl, getPublishedArticles } from "./lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: "https://fourthturning.capital",
      lastModified: new Date("2026-10-21"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://fourthturning.capital/insights",
      lastModified: new Date("2026-10-21"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const articlePages: MetadataRoute.Sitemap = getPublishedArticles().map((article) => ({
    url: articleCanonicalUrl(article),
    lastModified: new Date(article.updatedAt ?? article.publishedAt!),
    changeFrequency: article.contentType === "FTC Weekly Signal" ? "weekly" : "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...articlePages];
}
