import Link from "next/link";

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

const publications = [
  { type: "Capital Allocation Map", title: "Grid Modernization", year: "2026", description: "The bottlenecks, enabling technologies, public-market beneficiaries, and entry conditions behind a generational grid rebuild.", className: "cover-grid", status: "Research in development" },
  { type: "Capital Allocation Map", title: "AI & Productive Capital", year: "2026", description: "A full-stack view of the infrastructure turning compute into durable economic output—from energy and cooling to applications.", className: "cover-ai", status: "Research in development" },
  { type: "Investment Memorandum", title: "Gin & Bear It", year: "No. 001", description: "An owner-operator case study in capital structure, inventory productivity, real-estate optionality, and resilient local commerce.", className: "cover-memo", status: "Completed · July 2026" },
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
    <a className={compact ? "brand brand-compact" : "brand"} href="#top" aria-label="Fourth Turning Capital home">
      <PillarMark small={compact} />
      <span className="brand-name">
        <span>Fourth Turning</span>
        <span className="brand-capital"><i />Capital<i /></span>
      </span>
    </a>
  );
}

function Arrow() { return <span aria-hidden="true" className="arrow">↗</span>; }

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://fourthturning.capital/#organization",
      name: "Fourth Turning Capital",
      url: "https://fourthturning.capital/",
      founder: { "@id": "https://fourthturning.capital/#joshua-peterson" },
      employee: [
        { "@id": "https://fourthturning.capital/#joshua-peterson" },
        { "@id": "https://fourthturning.capital/#felicia-rae-peterson" },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://fourthturning.capital/#joshua-peterson",
      name: "Joshua Peterson",
      jobTitle: "Founder & Principal",
      image: "https://fourthturning.capital/joshua-peterson.webp",
      url: "https://fourthturning.capital/#about",
      worksFor: { "@id": "https://fourthturning.capital/#organization" },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Case Western Reserve University",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "American Military University",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "David N. Myers University",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://fourthturning.capital/#felicia-rae-peterson",
      name: "Felicia-Rae Peterson",
      jobTitle: "Managing Director",
      image: "https://fourthturning.capital/felicia-rae-peterson.webp",
      url: "https://fourthturning.capital/#about",
      worksFor: { "@id": "https://fourthturning.capital/#organization" },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "American Military University",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "Colorado State University Pueblo",
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <main id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="site-header">
        <div className="header-inner">
          <BrandLockup compact />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#philosophy">Philosophy</a><Link href="/insights">Insights</Link><a href="#themes">Themes</a><a href="#memorandums">Memorandums</a><a href="#about">About</a><a className="nav-contact" href="#contact">Contact</a>
          </nav>
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><span /><span /></summary>
            <nav aria-label="Mobile navigation">
              <a href="#philosophy">Philosophy</a><Link href="/insights">Insights</Link><a href="#themes">Themes</a><a href="#memorandums">Memorandums</a><a href="#about">About</a><a href="#contact">Contact</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-bg" aria-hidden="true" /><div className="hero-vignette" aria-hidden="true" />
        <div className="hero-content wrap">
          <div className="hero-copy">
            <p className="eyebrow light"><span />Independent capital allocation &amp; research</p>
            <h1 id="hero-title">Disciplined capital.<br /><em>Enduring value.</em></h1>
            <p className="hero-lede">We invest with a long-term view—informed by history, grounded in evidence, and guided by discipline.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#research">Explore our research <Arrow /></a>
              <a className="text-link light-link" href="#philosophy">Our investment philosophy <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <p className="hero-location">Colorado, United States <span /> Investing through cycles</p>
        </div>
        <div className="hero-index">
          <div className="wrap index-grid">
            <a href="#philosophy"><b>01</b><span><strong>Investment philosophy</strong><small>Our approach to capital allocation</small></span><Arrow /></a>
            <a href="#themes"><b>02</b><span><strong>Current themes</strong><small>Where renewal is creating opportunity</small></span><Arrow /></a>
            <a href="#memorandums"><b>03</b><span><strong>Selected memorandums</strong><small>Research behind the decisions</small></span><Arrow /></a>
            <a href="#about"><b>04</b><span><strong>About FTC</strong><small>Our mandate, vision, and commitment</small></span><Arrow /></a>
          </div>
        </div>
      </section>

      <section className="philosophy section" id="philosophy">
        <div className="wrap philosophy-intro">
          <div><p className="eyebrow"><span />Our philosophy</p><h2>Capital should serve a purpose beyond the next quarter.</h2></div>
          <div className="philosophy-copy">
            <p className="dropcap">We allocate capital into productive assets that build resilience, create value, and strengthen communities across generations.</p>
            <p>Markets reward patience unevenly, but history rewards it consistently. Our work begins by separating durable change from temporary noise—and then matching conviction with disciplined entry points.</p>
          </div>
        </div>
        <div className="wrap principles-grid">
          {principles.map((principle) => (
            <article className="principle" key={principle.number}>
              <span className="principle-number">{principle.number}</span><div className="principle-icon" aria-hidden="true">{principle.number === "01" ? "⌂" : principle.number === "02" ? "⌕" : principle.number === "03" ? "✥" : "◇"}</div>
              <h3>{principle.title}</h3><p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="themes section section-navy" id="themes">
        <div className="compass-watermark" aria-hidden="true">✣</div>
        <div className="wrap">
          <div className="section-heading dark-heading">
            <div><p className="eyebrow light"><span />Capital allocation themes</p><h2>Investing in the architecture of renewal.</h2></div>
            <p>We focus on the systems, assets, and operators positioned to matter more as the current institutional and industrial cycle unfolds.</p>
          </div>
          <div className="themes-grid">
            {themes.map((theme) => (
              <article className="theme-card" key={theme.number}>
                <div className="theme-top"><span>{theme.number}</span><span className="theme-line" /></div><p className="theme-tag">{theme.tag}</p><h3>{theme.title}</h3><p>{theme.copy}</p><a href="#research" aria-label={`View research on ${theme.title}`}>View related research <Arrow /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="research section" id="research">
        <div className="wrap">
          <div className="section-heading">
            <div><p className="eyebrow"><span />Research &amp; publications</p><h2>We publish,<br /><em>not promote.</em></h2></div>
            <div className="section-copy"><p>Our publications reflect our philosophy, discipline, and commitment to long-term thinking. We share the research behind our decisions to add useful perspective—not noise—to the conversation.</p><Link className="text-link" href="/insights">Explore the research library <Arrow /></Link></div>
          </div>
          <div className="publication-grid">
            {publications.map((publication, index) => (
              <article className="publication" key={publication.title}>
                <div className={`publication-cover ${publication.className}`}>
                  <div className="cover-brand"><PillarMark small /><span>Fourth Turning Capital</span></div>
                  <div className="cover-title"><small>{publication.type}</small><strong>{publication.title}</strong><span>{publication.year}</span></div>
                  <p>Disciplined capital. Enduring value.</p>
                </div>
                <div className="publication-meta"><span>0{index + 1}</span><div><p>{publication.status}</p><h3>{publication.title}</h3><p>{publication.description}</p></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="memorandums section" id="memorandums">
        <div className="wrap memo-layout">
          <div className="memo-title"><p className="eyebrow light"><span />Selected memorandums</p><h2>The record<br />behind the <em>decision.</em></h2><p>Our memorandums are working documents: a disciplined record of the facts, assumptions, risks, entry conditions, and decisions that shape an allocation.</p></div>
          <div className="memo-list">
            <article><span className="memo-no">001</span><div><p className="memo-type">Operating company · Real estate</p><h3>Gin &amp; Bear It Liquor</h3><p>Owner-operator underwriting, resilience planning, inventory productivity, and real-estate optionality.</p></div><span className="memo-status">Completed</span></article>
            <article><span className="memo-no">CAM</span><div><p className="memo-type">Infrastructure · Public equities</p><h3>Grid Modernization</h3><p>A full capital allocation map across transmission, electrical equipment, software, storage, and clean firm power.</p></div><span className="memo-status">In development</span></article>
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="wrap">
          <div className="about-intro">
            <div>
              <p className="eyebrow"><span />About Fourth Turning Capital</p>
              <h2>Built for the long arc.</h2>
            </div>
          <div className="about-copy">
            <p className="about-lede">Fourth Turning Capital is an independent investment and operating platform focused on productive assets, resilient enterprises, and the infrastructure of national renewal.</p>
            <div className="about-detail"><p>We work across public markets, private businesses, real estate, and strategic operating opportunities—using one consistent framework to compare risk, return, resilience, and purpose.</p><p>Our mandate is intentionally broad. Our discipline is not.</p></div>
            <blockquote>“The greatest wealth is created by building productive assets in advance of renewal.”</blockquote>
          </div>
          </div>
          <div className="leadership" aria-labelledby="leadership-heading">
            <p className="eyebrow" id="leadership-heading"><span />Leadership</p>
            <div className="leadership-grid">
              <article className="leader-card">
                <figure className="leader-portrait">
                  <div className="leader-image-frame">
                    <img src="/joshua-peterson.webp" alt="Joshua Peterson, Founder and Principal of Fourth Turning Capital" width="1100" height="1650" loading="lazy" decoding="async" />
                  </div>
                </figure>
                <div className="leader-copy">
                  <h3>Joshua Peterson</h3>
                  <p className="leader-title">Founder &amp; Principal</p>
                  <p className="leader-bio">Joshua Peterson is the founder of Fourth Turning Capital, an independent investment and operating platform focused on productive assets, resilient enterprises, and the infrastructure of national renewal. He brings more than two decades of experience across capital markets, corporate finance, investment analysis, real estate, and business operations. His background includes institutional work in fixed income, derivatives, commercial real estate, banking, and insurance, together with hands-on experience acquiring and operating a small business. He holds an MBA from Case Western Reserve University, an MA in International Relations from American Military University, and a BS in Economics from David N. Myers University. He is also a U.S. Army Reserve veteran.</p>
                </div>
              </article>
              <article className="leader-card">
                <figure className="leader-portrait">
                  <div className="leader-image-frame">
                    <img src="/felicia-rae-peterson.webp" alt="Felicia-Rae Peterson, Managing Director of Fourth Turning Capital" width="1024" height="1536" loading="lazy" decoding="async" />
                  </div>
                </figure>
                <div className="leader-copy">
                  <h3>Felicia-Rae Peterson</h3>
                  <p className="leader-title">Managing Director</p>
                  <p className="leader-bio">Felicia-Rae Peterson is Managing Director of Fourth Turning Capital, where she leads fundraising, strategic relationships, and marketing. She brings more than 25 years of experience in business development, sales leadership, market expansion, and contract negotiation across real estate development, modular housing, energy, environmental services, and operating businesses. Her career includes leading multi-state sales organizations, developing government and commercial partnerships, and helping bring major real estate projects to sellout before opening. She also brings hands-on entrepreneurial and operating experience as a founder and retail business owner. Felicia-Rae holds a Master of Environmental Policy and Management from American Military University and a B.S. in Biology and Chemistry from Colorado State University Pueblo.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="wrap contact-layout">
          <div><p className="eyebrow light"><span />Begin a conversation</p><h2>Ideas improve when they are tested.</h2></div>
          <div className="contact-copy"><p>We welcome thoughtful dialogue with investors, operators, founders, and researchers working on durable solutions to consequential problems.</p><a className="button button-gold" href="mailto:josh@fourthturning.capital">Contact Fourth Turning Capital <Arrow /></a></div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-main"><BrandLockup /><div className="footer-nav"><a href="#philosophy">Philosophy</a><Link href="/insights">Insights</Link><a href="#themes">Themes</a><a href="#about">About</a></div><a className="back-top" href="#top">Back to top ↑</a></div>
        <div className="wrap footer-bottom"><p>© 2026 Fourth Turning Capital. All rights reserved.</p><p>Research is provided for informational purposes and does not constitute investment advice.</p></div>
      </footer>
    </main>
  );
}
