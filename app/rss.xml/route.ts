import { insights } from "../insights/articles";

const baseUrl = "https://fourthturning.capital";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export const dynamic = "force-static";

export function GET() {
  const items = insights
    .map((insight) => {
      const url = `${baseUrl}/insights/${insight.slug}`;
      const publishedAt = new Date(`${insight.publishedAt}T12:00:00Z`).toUTCString();

      return `
    <item>
      <title>${escapeXml(insight.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${publishedAt}</pubDate>
      <author>josh@fourthturning.capital (${escapeXml(insight.author)})</author>
      <category>${escapeXml(insight.category)}</category>
      <description>${escapeXml(insight.description)}</description>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Fourth Turning Capital Insights</title>
    <link>${baseUrl}/insights</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Research and commentary on structural change, productive capital, industrial renewal, debt cycles, and political risk.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
