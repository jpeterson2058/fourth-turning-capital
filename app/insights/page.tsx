import type { Metadata } from "next";
import Link from "next/link";
import { insights } from "./articles";

export const metadata: Metadata = {
  title: "Insights | Fourth Turning Capital",
  description: "Research and commentary on capital markets, industrial renewal, debt cycles, political risk, infrastructure and productive capital.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights | Fourth Turning Capital",
    description: "Research and commentary for investors, operators and builders navigating structural change.",
    url: "/insights",
    type: "website",
  },
};

function Brand() {
  return (
    <Link className="insights-brand" href="/" aria-label="Fourth Turning Capital home">
      <span className="insights-mark" aria-hidden="true">IV</span>
      <span><strong>Fourth Turning</strong><small>Capital</small></span>
    </Link>
  );
}

export default function InsightsPage() {
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

      <section className="insights-hero">
        <div className="insights-wrap">
          <p className="insights-kicker">Research, analysis &amp; operating perspective</p>
          <h1>Insights for an era of structural change.</h1>
          <p className="insights-intro">Fourth Turning Capital examines how institutional cycles, debt regimes, industrial policy, technology and capital scarcity reshape markets and operating decisions.</p>
        </div>
      </section>

      <section className="insights-library">
        <div className="insights-wrap">
          <div className="insights-library-heading">
            <div><p className="insights-kicker dark">Latest publication</p><h2>Ideas tested against history, evidence and execution.</h2></div>
            <p>The website is the canonical archive. LinkedIn serves as the distribution channel for condensed versions and discussion.</p>
          </div>

          <div className="insights-grid">
            {insights.map((insight) => (
              <article className="insight-card" key={insight.slug}>
                <div className="insight-card-top">
                  <span>{insight.category}</span>
                  <time dateTime={insight.publishedAt}>{new Date(`${insight.publishedAt}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
                </div>
                <h3><Link href={`/insights/${insight.slug}`}>{insight.title}</Link></h3>
                <p>{insight.description}</p>
                <div className="insight-tags">
                  {insight.frameworks.map((framework) => <span key={framework}>{framework}</span>)}
                </div>
                <Link className="insight-read" href={`/insights/${insight.slug}`}>Read the full analysis <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="insights-footer">
        <div className="insights-wrap">
          <p>© 2026 Fourth Turning Capital. Research is informational and does not constitute investment advice.</p>
          <Link href="/rss.xml">RSS feed</Link>
        </div>
      </footer>
    </main>
  );
}
