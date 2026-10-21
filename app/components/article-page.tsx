import Link from "next/link";
import type { Article } from "../lib/articles";
import { articleCanonicalUrl, SITE_URL } from "../lib/articles";

function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}

export function ArticlePage({ article }: { article: Article }) {
  const canonical = articleCanonicalUrl(article);
  const publishedDate = article.publishedAt ?? article.asOf;
  const updatedDate = article.updatedAt ?? publishedDate;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonical}#article`,
    headline: article.title,
    description: article.dek,
    image: `${SITE_URL}${article.social.image}`,
    datePublished: publishedDate,
    dateModified: updatedDate,
    mainEntityOfPage: canonical,
    articleSection: article.category,
    keywords: [...article.themes, ...article.lenses].join(", "),
    author: {
      "@type": "Person",
      name: article.author.name,
      url: `${SITE_URL}${article.author.url ?? "/#about"}`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Fourth Turning Capital",
      url: SITE_URL,
    },
  };

  return (
    <main className="article-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <header className="editorial-header">
        <Link className="editorial-brand" href="/" aria-label="Fourth Turning Capital home">
          <span aria-hidden="true">IV</span>
          <strong>Fourth Turning Capital</strong>
        </Link>
        <nav aria-label="Editorial navigation">
          <Link href="/insights">Insights</Link>
          <Link href="/#about">About</Link>
          <a href="mailto:josh@fourthturning.capital">Contact</a>
        </nav>
      </header>

      <article itemScope itemType="https://schema.org/Article">
        <header className="article-hero">
          <div className="article-hero-inner">
            <Link className="article-back" href="/insights">← Insights archive</Link>
            <p className="article-kicker">{article.contentType} · {article.category}</p>
            <h1 itemProp="headline">{article.title}</h1>
            <p className="article-dek" itemProp="description">{article.dek}</p>
            <dl className="article-byline">
              <div><dt>Author</dt><dd itemProp="author">{article.author.name}</dd></div>
              <div><dt>Published</dt><dd><time dateTime={publishedDate}>{formatDate(publishedDate)}</time></dd></div>
              {article.updatedAt && <div><dt>Updated</dt><dd><time dateTime={article.updatedAt}>{formatDate(article.updatedAt)}</time></dd></div>}
              <div><dt>Read time</dt><dd>{article.readTimeMinutes} minutes</dd></div>
              <div><dt>As of</dt><dd><time dateTime={article.asOf}>{formatDate(article.asOf)}</time></dd></div>
            </dl>
          </div>
        </header>

        {article.hero && (
          <figure className="article-figure article-hero-figure">
            <img src={article.hero.src} alt={article.hero.alt} width="1600" height="900" />
            <figcaption>
              {article.hero.caption}
              {article.hero.source && <> Source: <a href={article.hero.source.url} rel="noopener noreferrer">{article.hero.source.label}</a>.</>}
            </figcaption>
          </figure>
        )}

        <div className="article-layout">
          <aside className="article-rail" aria-label="Article details">
            <div><span>Theme</span><p>{article.themes.join(" · ")}</p></div>
            <div><span>Lens</span><p>{article.lenses.join(" · ")}</p></div>
            <div><span>Horizon</span><p>{article.timeHorizon}</p></div>
            <div><span>Geography</span><p>{article.geography.join(" · ")}</p></div>
          </aside>

          <div className="article-body">
            {article.sections.map((section) => (
              <section id={section.id} key={section.id} aria-labelledby={`${section.id}-heading`}>
                {section.eyebrow && <p className="article-section-label">{section.eyebrow}</p>}
                <h2 id={`${section.id}-heading`}>{section.title}</h2>
                {section.paragraphs?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                {section.figure && (
                  <figure className="article-figure">
                    <img src={section.figure.src} alt={section.figure.alt} loading="lazy" />
                    <figcaption>
                      {section.figure.caption}
                      {section.figure.source && <> Source: <a href={section.figure.source.url} rel="noopener noreferrer">{section.figure.source.label}</a>.</>}
                    </figcaption>
                  </figure>
                )}
              </section>
            ))}

            <section className="article-note" aria-labelledby="methodology-heading">
              <p className="article-section-label">Methodology</p>
              <h2 id="methodology-heading">How to read this work</h2>
              <p>{article.methodology}</p>
            </section>

            <section className="article-sources" aria-labelledby="sources-heading">
              <p className="article-section-label">Sources</p>
              <h2 id="sources-heading">Primary source package</h2>
              <ol>
                {article.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} rel="noopener noreferrer">{source.label}</a>
                    <span>{source.publisher}{source.publishedAt ? ` · ${formatDate(source.publishedAt)}` : ""}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="article-disclosure" aria-labelledby="disclosure-heading">
              <h2 id="disclosure-heading">Disclosure</h2>
              <p>{article.disclosure}</p>
            </section>
          </div>
        </div>

        <section className="article-cta" aria-labelledby="article-cta-heading">
          <div>
            <p className="article-section-label">Fourth Turning Capital</p>
            <h2 id="article-cta-heading">{article.cta.title}</h2>
            <p>{article.cta.copy}</p>
          </div>
          <a href={article.cta.href}>{article.cta.label} <span aria-hidden="true">↗</span></a>
        </section>

        {article.relatedContent.length > 0 && (
          <section className="related-content" aria-labelledby="related-heading">
            <h2 id="related-heading">Related content</h2>
            <div>
              {article.relatedContent.map((item) => (
                <Link href={item.href} key={item.href}><span>{item.contentType}</span><strong>{item.title}</strong></Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <footer className="editorial-footer">
        <p>© 2026 Fourth Turning Capital. All rights reserved.</p>
        <a href="/rss.xml">RSS</a>
      </footer>
    </main>
  );
}
