import { insights } from "./insights/articles";

const principles = [
  { number: "01", title: "Historically informed", copy: "We study recurring cycles of order, disruption, renewal, and capital formation to understand the present with greater clarity." },
  { number: "02", title: "Evidence driven", copy: "Conviction begins with facts. We combine market data, operating fundamentals, and scenario analysis before capital is committed." },
  { number: "03", title: "Long-term focused", copy: "We favor productive assets, durable cash flows, and businesses positioned to compound through more than one market regime." },
  { number: "04", title: "Risk-aware discipline", copy: "Return matters only in the context of risk. We define downside, entry conditions, and thesis-breakers before upside." },
];

const themes = [
  { number: "I", title: "Grid modernization", copy: "Transmission, transformers, switchgear, storage, clean firm power, and the software layer coordinating an increasingly complex grid.", tag: "Physical infrastructure" },
  { number: "II", title: "AI & productive capital", copy: "The power, cooling, data, industrial automation, and vertical software required to convert artificial intelligence into real productivity.", tag: "Technology & industry" },
  { number: "III", title: "National resilience", copy: "Defense, sovereign capability, domestic manufacturing, critical materials, and the rebuilding of strategically essential supply chains.", tag: "Security & renewal" },
  { number: "IV", title: "Community assets", copy: "Essential operating businesses and real assets that serve durable local needs while strengthening the communities around them.", tag: "Operating companies" },
];

const latestInsight = insights[0]!;

const publicResearch = [
  {
    type: "Insight",
    title: latestInsight.title,
    year: "July 2026",
    description: latestInsight.description,
    className: "cover-grid",
    status: "Published",
    href: `/insights/${latestInsight.slug}`,
  },
  {
    type: "Research Brief",
    title: "Grid Modernization",
    year: "Forthcoming",
    description: "A public briefing on why grid bottlenecks matter to industrial renewal—without disclosing FTC's proprietary company selection, underwriting, or implementation work.",
    className: "cover-ai",
    status: "Editorial pipeline",
    href: "/insights",
  },
  {
    type: "Market Perspective",
    title: "Debt, Defense & Demographics",
    year: "Forthcoming",
    description: "A public perspective on the structural forces reshaping capital allocation, national resilience, and productive investment.",
    className: "cover-perspective",
    status: "Editorial pipeline",
    href: "/insights",
  },
];

function PillarMark({ small = false }: { small?: boolean }) {
  return (
    <svg aria-hidden="true" className={small ? "pillar-mark pillar-mark-small" : "pillar-mark"} viewBox="0 0 64 64" fill="none">
      <path d="M10 12h44M15 18h34M20 24h24" />
      <path d="M23 28v22M29 28v22M35 28v22M41 28v22" />
      <path d="M18 54h28M13 59h38" />
    </svg>
  );
}

function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <a className={compact ? "brand brand-compact" : "brand"} href="/#top" aria-label="Fourth Turning Capital home">
      <PillarMark small={compact} />
      <span className="brand-name">
        <span>Fourth Turning</span>
        <span className="brand-capital"><i />Capital<i /></span>
      </span>
    </a>
  );
}

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <div className="header-inner">
          <BrandLockup compact />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#philosophy">Philosophy</a>
            <a href="#themes">Themes</a>
            <a href="#research">Research</a>
            <a href="/insights">Insights</a>
            <a href="#about">About</a>
            <a className="nav-contact" href="#contact">Contact</a>
          </nav>
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><span /><span /></summary>
            <nav aria-label="Mobile navigation">
              <a href="#philosophy">Philosophy</a>
              <a href="#themes">Themes</a>
              <a href="#research">Research</a>
              <a href="/insights">Insights</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-vignette" aria-hidden="true" />
        <div className="hero-content wrap">
          <div className="hero-copy">
            <p className="eyebrow light"><span />Independent capital allocation &amp; research</p>
            <h1 id="hero-title">Disciplined capital.<br /><em>Enduring value.</em></h1>
            <p className="hero-lede">We invest with a long-term view—informed by history, grounded in evidence, and guided by discipline.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="/insights">Explore our insights <Arrow /></a>
              <a className="text-link light-link" href="#philosophy">Our investment philosophy <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <p className="hero-location">Colorado, United States <span /> Investing through cycles</p>
        </div>
        <div className="hero-index">
          <div className="wrap index-grid">
            <a href="#philosophy"><b>01</b><span><strong>Investment philosophy</strong><small>Our public principles for capital allocation</small></span><Arrow /></a>
            <a href="#themes"><b>02</b><span><strong>Current themes</strong><small>Where renewal is creating opportunity</small></span><Arrow /></a>
            <a href="/insights"><b>03</b><span><strong>Public insights</strong><small>Selected perspectives—not the playbook</small></span><Arrow /></a>
            <a href="#about"><b>04</b><span><strong>About FTC</strong><small>Our mandate, vision, and commitment</small></span><Arrow /></a>
          </div>
        </div>
      </section>

      <section className="philosophy section" id="philosophy">
        <div className="wrap philosophy-intro">
          <div>
            <p className="eyebrow"><span />Our philosophy</p>
            <h2>Capital should serve a purpose beyond the next quarter.</h2>
          </div>
          <div className="philosophy-copy">
            <p className="dropcap">We allocate capital into productive assets that build resilience, create value, and strengthen communities across generations.</p>
            <p>Markets reward patience unevenly, but history rewards it consistently. Our work begins by separating durable change from temporary noise—and then matching conviction with disciplined entry points.</p>
          </div>
        </div>
        <div className="wrap principles-grid">
          {principles.map((principle) => (
            <article className="principle" key={principle.number}>
              <span className="principle-number">{principle.number}</span>
              <div className="principle-icon" aria-hidden="true">{principle.number === "01" ? "⌂" : principle.number === "02" ? "⌕" : principle.number === "03" ? "✥" : "◇"}</div>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="themes section section-navy" id="themes">
        <div className="compass-watermark" aria-hidden="true">✣</div>
        <div className="wrap">
          <div className="section-heading dark-heading">
            <div>
              <p className="eyebrow light"><span />Capital allocation themes</p>
              <h2>Investing in the architecture of renewal.</h2>
            </div>
            <p>We focus on the systems, assets, and operators positioned to matter more as the current institutional and industrial cycle unfolds.</p>
          </div>
          <div className="themes-grid">
            {themes.map((theme) => (
              <article className="theme-card" key={theme.number}>
                <div className="theme-top"><span>{theme.number}</span><span className="theme-line" /></div>
                <p className="theme-tag">{theme.tag}</p>
                <h3>{theme.title}</h3>
                <p>{theme.copy}</p>
                <a href="/insights" aria-label={`View public insights related to ${theme.title}`}>View related insights <Arrow /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="research section" id="research">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span />Public research &amp; insights</p>
              <h2>We publish the thesis.<br /><em>Not the playbook.</em></h2>
            </div>
            <div className="section-copy">
              <p>FTC publishes selected perspectives that demonstrate how we interpret structural change. Internal models, security selection, underwriting, dashboards, and portfolio implementation remain proprietary to Fourth Turning Capital.</p>
              <a className="text-link" href="/insights">Explore all insights <Arrow /></a>
            </div>
          </div>
          <div className="publication-grid">
            {publicResearch.map((publication, index) => (
              <a className="publication publication-link" href={publication.href} key={publication.title}>
                <div className={`publication-cover ${publication.className}`}>
                  <div className="cover-brand"><PillarMark small /><span>Fourth Turning Capital</span></div>
                  <div className="cover-title"><small>{publication.type}</small><strong>{publication.title}</strong><span>{publication.year}</span></div>
                  <p>Disciplined capital. Enduring value.</p>
                </div>
                <div className="publication-meta">
                  <span>0{index + 1}</span>
                  <div><p>{publication.status}</p><h3>{publication.title}</h3><p>{publication.description}</p></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="proprietary-boundary section" id="approach">
        <div className="wrap boundary-layout">
          <div className="boundary-title">
            <p className="eyebrow light"><span />Public insight, proprietary execution</p>
            <h2>Credibility should be visible. The advantage should remain protected.</h2>
            <p>Our public work is designed to explain consequential trends and establish the quality of FTC's judgment. The actionable research and implementation behind investor capital remain inside the firm.</p>
          </div>
          <div className="boundary-grid">
            <article>
              <span>Public</span>
              <h3>What we share</h3>
              <p>Thought pieces, market perspectives, selected research briefs, historical context, and high-level investment implications.</p>
            </article>
            <article className="boundary-private">
              <span>FTC proprietary</span>
              <h3>What remains confidential</h3>
              <p>Internal research, scoring systems, underwriting, dashboards, position construction, entry conditions, and portfolio implementation.</p>
              <a href="mailto:josh@fourthturning.capital?subject=Fourth%20Turning%20Capital%20Investor%20Inquiry">Investor inquiries <Arrow /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="wrap about-layout">
          <div className="about-mark" aria-hidden="true"><PillarMark /></div>
          <div className="about-copy">
            <p className="eyebrow"><span />About Fourth Turning Capital</p>
            <h2>Built for the long arc.</h2>
            <p className="about-lede">Fourth Turning Capital is an independent investment and operating platform focused on productive assets, resilient enterprises, and the infrastructure of national renewal.</p>
            <div className="about-detail">
              <p>We work across public markets, private businesses, real estate, and strategic operating opportunities—using disciplined analysis to compare risk, return, resilience, and purpose.</p>
              <p>Our mandate is intentionally broad. Our discipline is not.</p>
            </div>
            <blockquote>“The greatest wealth is created by building productive assets in advance of renewal.”</blockquote>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="wrap contact-layout">
          <div>
            <p className="eyebrow light"><span />Begin a conversation</p>
            <h2>Ideas improve when they are tested.</h2>
          </div>
          <div className="contact-copy">
            <p>We welcome thoughtful dialogue with investors, operators, founders, business owners, and researchers working on durable solutions to consequential problems.</p>
            <a className="button button-gold" href="mailto:josh@fourthturning.capital">Contact Fourth Turning Capital <Arrow /></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-main">
          <BrandLockup />
          <div className="footer-nav"><a href="#philosophy">Philosophy</a><a href="#themes">Themes</a><a href="/insights">Insights</a><a href="#about">About</a></div>
          <a className="back-top" href="#top">Back to top ↑</a>
        </div>
        <div className="wrap footer-bottom"><p>© 2026 Fourth Turning Capital. All rights reserved.</p><p>Research is provided for informational purposes and does not constitute investment advice.</p></div>
      </footer>
    </main>
  );
}
