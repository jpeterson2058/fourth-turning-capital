import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The FTC Charter | Fourth Turning Capital",
  description:
    "The public charter of Fourth Turning Capital: our purpose, investment philosophy, capital-allocation principles, and long-term strategic framework.",
  alternates: { canonical: "/charter" },
  openGraph: {
    type: "website",
    url: "/charter",
    title: "The FTC Charter | Fourth Turning Capital",
    description:
      "Purpose, discipline, and stewardship across generations.",
    images: [
      {
        url: "/ftc-hero-mountains.png",
        alt: "Mountain landscape representing Fourth Turning Capital's long-term perspective",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The FTC Charter | Fourth Turning Capital",
    description: "Purpose, discipline, and stewardship across generations.",
    images: ["/ftc-hero-mountains.png"],
  },
};

const principles = [
  "Preserve capital before seeking return.",
  "Own productive assets.",
  "Invest along structural trends.",
  "Diversify by economic driver.",
  "Maintain strategic optionality.",
  "Favor quality over complexity.",
  "Make risk intentional.",
  "Allow evidence to prevail over conviction.",
  "Use time as the greatest source of compounding.",
  "Extend stewardship beyond financial return.",
];

const capitals = [
  ["Financial capital", "The liquidity and investment resources that provide flexibility, absorb adversity, and fund future opportunity."],
  ["Physical capital", "Operating businesses, real estate, infrastructure, equipment, energy systems, and other tangible assets that enable productive activity."],
  ["Intellectual capital", "Research, education, operating experience, technology, analytical frameworks, and the capacity to learn."],
  ["Human capital", "Leadership, health, judgment, ethics, adaptability, and the people through whom institutions perform."],
  ["Social capital", "Trust, reputation, credibility, and durable relationships with customers, partners, institutions, and communities."],
  ["Institutional capital", "Governance, documented processes, decision records, risk systems, and the collective ability to make sound decisions consistently."],
];

const systems = [
  "Governance & Institutions",
  "National Security",
  "Energy",
  "Water",
  "Food & Agriculture",
  "Industrial Capacity",
  "Transportation & Logistics",
  "Digital Infrastructure",
  "Human Development",
  "Financial Infrastructure",
  "The Built Environment",
  "Innovation & Discovery",
];

export default function CharterPage() {
  return (
    <main className="article-page">
      <header className="editorial-header">
        <Link className="editorial-brand" href="/" aria-label="Fourth Turning Capital home">
          <span aria-hidden="true">IV</span>
          <strong>Fourth Turning Capital</strong>
        </Link>
        <nav aria-label="Charter navigation">
          <Link href="/insights">Insights</Link>
          <Link aria-current="page" href="/charter">Charter</Link>
          <Link href="/#about">About</Link>
          <a href="mailto:josh@fourthturning.capital">Contact</a>
        </nav>
      </header>

      <section className="article-hero">
        <div className="article-hero-inner">
          <Link className="article-back" href="/">← Return home</Link>
          <p className="article-kicker">Founding Charter · Public Edition</p>
          <h1>The FTC Charter</h1>
          <p className="article-dek">
            A statement of purpose, investment philosophy, and grand strategy for the disciplined stewardship of capital across generations.
          </p>
          <dl className="article-byline">
            <div><dt>Institution</dt><dd>Fourth Turning Capital</dd></div>
            <div><dt>Source</dt><dd>Founding Charter v1.0</dd></div>
            <div><dt>Edition</dt><dd>Abbreviated public charter</dd></div>
            <div><dt>Principle</dt><dd>Disciplined capital. Enduring value.</dd></div>
          </dl>
        </div>
      </section>

      <div className="article-layout">
        <aside className="article-rail" aria-label="Charter summary">
          <div><span>Purpose</span><p>Preserve, compound, and strategically deploy capital.</p></div>
          <div><span>Mandate</span><p>Own productive assets and build institutional resilience.</p></div>
          <div><span>Time horizon</span><p>Generations, not quarters.</p></div>
          <div><span>Decision standard</span><p>Evidence over emotion; adaptability over certainty.</p></div>
        </aside>

        <article className="article-body">
          <section id="foreword">
            <p className="article-section-label">Founder's statement</p>
            <h2>Capital is a servant to purpose.</h2>
            <p>
              Fourth Turning Capital is founded on the belief that disciplined capital allocation is one of civilization&apos;s most powerful engines of progress. Properly directed, capital builds businesses, finances innovation, develops infrastructure, strengthens resilience, expands productive capacity, creates employment, and improves the standard of living for future generations.
            </p>
            <p>
              The world is neither linear nor static. Economies evolve, technologies disrupt established industries, demographics reshape societies, political systems change, and financial markets continually reprice those realities. The purpose of this Charter is not to predict the future. It is to ensure that Fourth Turning Capital remains prepared for it.
            </p>
          </section>

          <section id="purpose">
            <p className="article-section-label">I · Purpose, mission, and vision</p>
            <h2>Build financial strength that can endure.</h2>
            <p>
              Fourth Turning Capital exists to preserve, compound, and strategically deploy capital through disciplined ownership of productive assets. Investment success is measured not by quarterly performance alone, but by the ability to preserve purchasing power, compound responsibly, and expand future opportunity over decades.
            </p>
            <p>
              Our mission is to build an institutional-quality capital-allocation office that remains adaptable to changing economic, technological, demographic, environmental, and geopolitical conditions. We combine financial analysis with business strategy, historical research, technological understanding, environmental awareness, and geopolitical intelligence.
            </p>
            <p>
              Our vision is a multi-generational institution overseeing public securities, operating businesses, real estate, infrastructure, private investments, strategic partnerships, intellectual property, and other productive enterprises. Success will be judged by the quality of capital allocation, the resilience of the institution, and the lasting value created.
            </p>
          </section>

          <section id="beliefs">
            <p className="article-section-label">II · Guiding beliefs</p>
            <h2>The foundation of every decision.</h2>
            <ul>
              <li>Capital is scarce and should be allocated deliberately.</li>
              <li>Wealth is created through productive enterprise.</li>
              <li>Innovation and entrepreneurship expand long-term prosperity.</li>
              <li>Infrastructure is the foundation of modern civilization.</li>
              <li>National resilience possesses economic value.</li>
              <li>History provides perspective, but never certainty.</li>
              <li>Risk is the permanent impairment of capital, not temporary volatility.</li>
              <li>Intellectual humility is a competitive advantage.</li>
              <li>Stewardship is inseparable from successful long-term investing.</li>
            </ul>
          </section>

          <section id="allocation">
            <p className="article-section-label">III · Capital-allocation discipline</p>
            <h2>Ten principles that govern deployment.</h2>
            <p>
              Every dollar represents future opportunity. Each allocation therefore carries both the potential to create value and the responsibility to deploy capital wisely.
            </p>
            <ol>
              {principles.map((principle) => <li key={principle}>{principle}</li>)}
            </ol>
          </section>

          <section id="capital">
            <p className="article-section-label">IV · The six forms of capital</p>
            <h2>Enduring wealth is more than financial.</h2>
            <p>
              The institution seeks to allocate, protect, and strengthen six interdependent forms of capital. Weakness in one eventually affects the others.
            </p>
            <ul>
              {capitals.map(([name, description]) => (
                <li key={name}><strong>{name}.</strong> {description}</li>
              ))}
            </ul>
          </section>

          <section id="systems">
            <p className="article-section-label">V · Grand strategy</p>
            <h2>The Twelve Systems of Prosperity.</h2>
            <p>
              Long-term prosperity emerges from interconnected systems that enable societies to produce, innovate, govern, defend, educate, and continuously improve. Sectors are classifications. Systems are engines of prosperity.
            </p>
            <ul>
              {systems.map((system) => <li key={system}>{system}</li>)}
            </ul>
            <p>
              FTC begins with the systems: assessing structural importance, system health, investment attractiveness, portfolio exposure, and the evidence required for continuous monitoring. Strategic conviction provides direction. Tactical flexibility determines execution.
            </p>
          </section>

          <section className="article-note" id="commitment">
            <p className="article-section-label">Our commitment</p>
            <h2>Conviction and humility must coexist.</h2>
            <p>
              Every investment thesis, macroeconomic outlook, and strategic conviction remains subject to reevaluation as evidence changes. Markets reward disciplined thinking more consistently than certainty. Fourth Turning Capital will seek to recognize structural change early, allocate with discipline, preserve optionality, and allow productive assets time to compound.
            </p>
          </section>

          <section className="article-disclosure">
            <h2>About this public edition</h2>
            <p>
              This page is an abbreviated public presentation of the Fourth Turning Capital Founding Charter v1.0. The complete founding charter and FTC&apos;s internal governance, investment-policy, and operating documents remain the controlling institutional records. This page is informational and does not constitute investment advice or an offer to buy or sell any security.
            </p>
          </section>
        </article>
      </div>

      <section className="article-cta">
        <div>
          <p className="article-section-label">Research &amp; publications</p>
          <h2>See the Charter expressed through the work.</h2>
          <p>FTC research applies these principles to real-world questions of resilience, liquidity, industrial renewal, and long-term capital allocation.</p>
        </div>
        <Link href="/insights">Explore insights <span aria-hidden="true">↗</span></Link>
      </section>

      <footer className="editorial-footer">
        <p>© 2026 Fourth Turning Capital. All rights reserved.</p>
        <Link href="/">Home</Link>
      </footer>
    </main>
  );
}
