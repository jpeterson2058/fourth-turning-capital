import type { Metadata } from "next";
import Link from "next/link";
import { articlePath, getPublishedArticles } from "../lib/articles";

export const metadata: Metadata = {
  title: "Insights | Fourth Turning Capital",
  description:
    "Research and analysis from Fourth Turning Capital on durable capital allocation, productive assets, and the architecture of renewal.",
  alternates: {
    canonical: "/insights",
    types: { "application/rss+xml": "/rss.xml" },
  },
  openGraph: {
    type: "website",
    url: "/insights",
    title: "Insights | Fourth Turning Capital",
    description:
      "Research and analysis on durable capital allocation, productive assets, and the architecture of renewal.",
    images: [{ url: "/ftc-hero-mountains.png", alt: "Mountain landscape representing Fourth Turning Capital's long-term perspective" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights | Fourth Turning Capital",
    description: "Research and analysis from Fourth Turning Capital.",
    images: ["/ftc-hero-mountains.png"],
  },
};

function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}

export default function InsightsArchive() {
  const articles = getPublishedArticles();

  return (
    <main className="insights-page">
      <header className="editorial-header">
        <Link className="editorial-brand" href="/" aria-label="Fourth Turning Capital home">
          <span aria-hidden="true">IV</span>
          <strong>Fourth Turning Capital</strong>
        </Link>
        <nav aria-label="Editorial navigation">
          <Link aria-current="page" href="/insights">Insights</Link>
          <Link href="/#about">About</Link>
          <a href="mailto:josh@fourthturning.capital">Contact</a>
        </nav>
      </header>

      <section className="archive-hero">
        <div>
          <p className="article-kicker">Research &amp; publications</p>
          <h1>Signals for the long arc.</h1>
          <p>Evidence-led analysis of the geopolitical, liquidity, industrial, and real-economy forces shaping durable capital allocation.</p>
        </div>
        <a href="/rss.xml">Follow via RSS <span aria-hidden="true">↗</span></a>
      </section>

      <section className="archive-list" aria-labelledby="archive-heading">
        <div className="archive-list-heading">
          <h2 id="archive-heading">Latest insights</h2>
          <p>{articles.length} {articles.length === 1 ? "publication" : "publications"}</p>
        </div>
        {articles.length > 0 ? (
          <div className="archive-grid">
            {articles.map((article) => (
              <article key={article.slug}>
                <p>{article.contentType} · {article.category}</p>
                <h3><a href={articlePath(article)}>{article.title}</a></h3>
                <p>{article.dek}</p>
                <div>
                  <time dateTime={article.publishedAt}>{formatDate(article.publishedAt!)}</time>
                  <span>{article.readTimeMinutes} min read</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="archive-empty">
            <p className="article-section-label">Publication system ready</p>
            <h3>The first issue is in final editorial review.</h3>
            <p>Approved research will appear here and in the RSS feed once its source, public-boundary, and publication gates are complete.</p>
          </div>
        )}
      </section>

      <section className="archive-method">
        <p className="article-section-label">Our standard</p>
        <h2>Facts, interpretation, and uncertainty remain distinct.</h2>
        <p>FTC publications identify the evidence, state the interpretation, frame plausible scenarios, and disclose what would change the view. Security selection, valuation, entry conditions, position sizing, and proprietary model outputs remain private.</p>
      </section>

      <footer className="editorial-footer">
        <p>© 2026 Fourth Turning Capital. All rights reserved.</p>
        <a href="/rss.xml">RSS</a>
      </footer>
    </main>
  );
}
