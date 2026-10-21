import { articleCanonicalUrl, getPublishedArticles, SITE_URL } from "../lib/articles";

export const dynamic = "force-dynamic";

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const items = getPublishedArticles()
    .map((article) => {
      const url = articleCanonicalUrl(article);
      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(article.dek)}</description>
      <author>josh@fourthturning.capital (${escapeXml(article.author.name)})</author>
      <category>${escapeXml(article.category)}</category>
      <pubDate>${new Date(article.publishedAt!).toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Fourth Turning Capital Insights</title>
    <link>${SITE_URL}/insights</link>
    <description>Research and analysis on durable capital allocation, productive assets, and the architecture of renewal.</description>
    <language>en-us</language>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
