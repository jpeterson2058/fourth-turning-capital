import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getInsight, insights } from "../articles";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) return {};

  const path = `/insights/${insight.slug}`;

  return {
    title: `${insight.title} | Fourth Turning Capital`,
    description: insight.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: insight.title,
      description: insight.description,
      publishedTime: `${insight.publishedAt}T12:00:00Z`,
      authors: [insight.author],
      siteName: "Fourth Turning Capital",
    },
    twitter: {
      card: "summary_large_image",
      title: insight.title,
      description: insight.description,
    },
  };
}

function Brand() {
  return (
    <Link className="insights-brand" href="/" aria-label="Fourth Turning Capital home">
      <span className="insights-mark" aria-hidden="true">IV</span>
      <span><strong>Fourth Turning</strong><small>Capital</small></span>
    </Link>
  );
}

function formatDate(value: string) {
  return new Date(`${value}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function InsightArticlePage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) notFound();

  return (
    <main className="insights-shell">
      <header className="insights-header">
        <div className="insights-wrap insights-nav">
          <Brand />
          <nav aria-label="Insights navigation">
            <Link href="/">Home</Link>
            <Link aria-current="page" href="/insights">Insights</Link>
            <Link href="/#research">Research</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="article-hero">
        <div className="insights-wrap article-hero-inner">
          <Link className="article-back" href="/insights">← Back to all insights</Link>
          <div className="article-meta-line">
            <span>{insight.category}</span>
            <span>{formatDate(insight.publishedAt)}</span>
            <span>{insight.readTime}</span>
          </div>
          <h1>{insight.title}</h1>
          <p className="article-subtitle">{insight.subtitle}</p>
          <div className="article-byline">
            <span>By {insight.author}</span>
            <span>Fourth Turning Capital</span>
          </div>
        </div>
      </section>

      <section className="article-main">
        <div className="insights-wrap article-layout">
          <article className="article-body">
            <p className="article-lede">{insight.description}</p>

            {insight.sections.map((section) => (
              <section className="article-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}

            <aside className="article-disclosure">
              <strong>Public research notice</strong>
              <p>This publication communicates selected conclusions and supporting context. Fourth Turning Capital&apos;s proprietary models, internal scoring, underwriting materials, portfolio construction and implementation decisions remain confidential. This material is informational and does not constitute investment advice or an offer to invest.</p>
            </aside>
          </article>

          <aside className="article-sidebar" aria-label="Article context">
            <section className="article-sidebar-block">
              <h2>Analytical lenses</h2>
              <div className="article-tags">
                {insight.frameworks.map((framework) => <span key={framework}>{framework}</span>)}
              </div>
            </section>

            <section className="article-sidebar-block">
              <h2>Related themes</h2>
              <div className="article-tags">
                {insight.themes.map((theme) => <span key={theme}>{theme}</span>)}
              </div>
            </section>

            <section className="article-sidebar-block article-investor">
              <h2>Insight is public. Execution is proprietary.</h2>
              <p>FTC investors participate in the research, underwriting and implementation capabilities that remain behind the public thesis.</p>
              <a href="mailto:josh@fourthturning.capital?subject=Fourth%20Turning%20Capital%20Investor%20Inquiry">Discuss investing with FTC ↗</a>
            </section>
          </aside>
        </div>
      </section>

      <footer className="insights-footer">
        <div className="insights-wrap">
          <p>© 2026 Fourth Turning Capital. All rights reserved.</p>
          <Link href="/rss.xml">RSS feed</Link>
        </div>
      </footer>
    </main>
  );
}
