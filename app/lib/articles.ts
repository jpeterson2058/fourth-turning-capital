export const SITE_URL = "https://fourthturning.capital";

export type ArticleStatus =
  | "draft"
  | "review"
  | "scheduled"
  | "published"
  | "archived";

export type ArticleAuthor = {
  name: string;
  title: string;
  url?: string;
};

export type ArticleSource = {
  label: string;
  publisher: string;
  url: string;
  publishedAt?: string;
  accessedAt?: string;
};

export type ArticleFigure = {
  src: string;
  alt: string;
  caption: string;
  source?: { label: string; url: string };
};

export type ArticleSection = {
  id: string;
  title: string;
  eyebrow?: string;
  paragraphs?: string[];
  bullets?: string[];
  figure?: ArticleFigure;
};

export type Article = {
  collection: "insights" | "signals";
  contentType: "FTC Weekly Signal" | "Flagship Insight" | "Field Note";
  category: string;
  themes: string[];
  lenses: string[];
  geography: string[];
  timeHorizon: string;
  audience: string[];
  status: ArticleStatus;
  version: string;
  title: string;
  dek: string;
  slug: string;
  author: ArticleAuthor;
  reviewer: string[];
  approver?: string;
  approvalRecord?: string;
  asOf: string;
  publishedAt?: string;
  updatedAt?: string;
  readTimeMinutes: number;
  social: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  hero?: ArticleFigure;
  sections: ArticleSection[];
  sources: ArticleSource[];
  methodology: string;
  disclosure: string;
  relatedContent: Array<{
    title: string;
    href: string;
    contentType: string;
  }>;
  boundaryClassification: "Green" | "Amber" | "Red";
  cta: {
    title: string;
    copy: string;
    label: string;
    href: string;
  };
};

const requiredStringFields = [
  "contentType",
  "collection",
  "category",
  "version",
  "title",
  "dek",
  "slug",
  "asOf",
  "methodology",
  "disclosure",
  "boundaryClassification",
] as const;

export function validateArticle(article: Article): string[] {
  const errors: string[] = [];

  for (const field of requiredStringFields) {
    if (!article[field]?.trim()) errors.push(`${field} is required`);
  }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug)) {
    errors.push("slug must be lowercase kebab-case without slashes");
  }
  if (!article.author.name.trim()) errors.push("author.name is required");
  if (!article.author.title.trim()) errors.push("author.title is required");
  if (!Number.isInteger(article.readTimeMinutes) || article.readTimeMinutes < 1) {
    errors.push("readTimeMinutes must be a positive integer");
  }
  if (article.sections.length === 0) errors.push("at least one section is required");
  if (!article.social.title.trim()) errors.push("social.title is required");
  if (!article.social.description.trim()) errors.push("social.description is required");
  if (!article.social.image.startsWith("/")) errors.push("social.image must be site-relative");
  if (!article.social.imageAlt.trim()) errors.push("social.imageAlt is required");
  if (article.status === "published" && !article.publishedAt) {
    errors.push("publishedAt is required for published articles");
  }
  if (article.status === "published" && !article.approver) {
    errors.push("approver is required for published articles");
  }

  for (const [index, section] of article.sections.entries()) {
    if (!section.id.trim()) errors.push(`sections[${index}].id is required`);
    if (!section.title.trim()) errors.push(`sections[${index}].title is required`);
    if (section.figure) {
      if (!section.figure.alt.trim()) errors.push(`sections[${index}].figure.alt is required`);
      if (!section.figure.caption.trim()) errors.push(`sections[${index}].figure.caption is required`);
    }
  }

  return errors;
}

export function articlePath(article: Pick<Article, "collection" | "slug">): string {
  return `/${article.collection}/${article.slug}`;
}

export function articleCanonicalUrl(
  article: Pick<Article, "collection" | "slug">,
): string {
  return `${SITE_URL}${articlePath(article)}`;
}

/*
 * Publication registry. Add an approved article here only after its final
 * fact/source/public-boundary gate is complete. Drafts remain outside this
 * array so they cannot leak into routes, the archive, RSS, or the sitemap.
 */
export const articles: readonly Article[] = [
  {
    collection: "signals",
    contentType: "FTC Weekly Signal",
    category: "Weekly Signal",
    themes: ["National resilience", "Grid modernization"],
    lenses: [
      "Geopolitics / world order",
      "Global liquidity and financial conditions",
      "Industrial policy and supply chains",
    ],
    geography: ["United States", "Europe", "Eurasia"],
    timeHorizon: "30–90 days",
    audience: ["Investors", "Operators", "Strategic partners"],
    status: "published",
    version: "1.0",
    title: "Diplomacy Is Reopening. Constraints Are Not.",
    dek: "Trilateral diplomacy is scheduled to reopen in November, but continued military escalation, modest reserve drainage, and a widening U.S. industrial-security policy keep the operating environment constrained.",
    slug: "2026-10-30-diplomacy-and-constraints",
    author: {
      name: "Joshua Peterson",
      title: "Founder & Principal",
      url: "/#about",
    },
    reviewer: ["Felicia-Rae Peterson"],
    approver: "Joshua Peterson",
    approvalRecord: "Final publication approval recorded October 30, 2026.",
    asOf: "2026-10-30T15:30:00Z",
    publishedAt: "2026-10-30T17:30:19Z",
    readTimeMinutes: 5,
    social: {
      title: "Diplomacy Is Reopening. Constraints Are Not. | FTC Weekly Signal",
      description: "Trilateral diplomacy has a November calendar, but military escalation, modest reserve drainage, and industrial-policy intervention keep the regime constrained.",
      image: "/ftc-weekly-signal-2026-10-30.webp",
      imageAlt: "Layered mountain range at blue hour with warm light breaking across the horizon.",
    },
    hero: {
      src: "/ftc-weekly-signal-2026-10-30.webp",
      alt: "Layered mountain range at blue hour with warm light breaking across the horizon.",
      caption: "The FTC Weekly Signal tracks the forces shaping long-duration capital allocation.",
      source: { label: "Fourth Turning Capital", url: SITE_URL },
    },
    sections: [
      {
        id: "signal",
        eyebrow: "The signal in one sentence",
        title: "Diplomatic channels have a calendar, but the environment is not broadly risk-on.",
        paragraphs: [
          "Diplomatic channels now have a tentative calendar, but military escalation, a firmer Treasury cash balance, and expanding industrial-policy intervention argue against treating the environment as broadly risk-on.",
          "These directions are qualitative public judgments, not FTC's proprietary scores, weights, or portfolio decisions.",
        ],
        bullets: [
          "Geopolitics / world order: Improving at the margin / fragile",
          "Global liquidity: Modestly tighter",
          "Industrial policy: Intensifying",
          "Real economy: Mixed / selective",
        ],
      },
      {
        id: "diplomacy",
        eyebrow: "Material change 1",
        title: "Diplomacy has a calendar, but not yet a détente.",
        paragraphs: [
          "Observed fact: On October 23, Ukrainian President Volodymyr Zelenskyy said Ukraine, the United States, and Russia had agreed to pursue team-level trilateral talks in the first half of November. He also said an expected October meeting did not occur. On October 29, Zelenskyy reported renewed Russian strikes on Dnipro, Chernihiv, and Kremenchuk that killed 19 people and warned of preparations for additional ballistic-missile attacks.",
          "The United States is also retaining substantial coercive authority. The October 16 executive order implementing the Lindsey O. Graham Sanctioning Russia and Iran Act established a 500% tariff framework for Russian goods and a 100% tariff framework for goods from the five largest importers making new purchases of Russian oil or gas, while waiving those measures at present on national-interest grounds.",
          "FTC interpretation: Diplomacy is more concrete than it was one week ago, but the burden of proof has shifted from announcing talks to holding them and producing a defined work program. Pressure and negotiation remain active at the same time. That combination can support progress, but it also preserves material energy, trade, and security volatility.",
        ],
      },
      {
        id: "liquidity",
        eyebrow: "Material change 2",
        title: "Dollar liquidity moved modestly tighter.",
        paragraphs: [
          "Observed fact: For the week ended October 28, the Federal Reserve reported average reserve balances of $2.894 trillion, down $68.8 billion from the prior week. The Treasury General Account rose $47.7 billion to $999.7 billion. Reverse repurchase agreements increased $3.1 billion to $330.4 billion. Federal Reserve loans increased $563 million to $9.5 billion, while total factors supplying reserve funds declined by approximately $1.1 billion.",
          "FTC interpretation: This is not a funding-stress signal, but it is less supportive than the prior week. The Treasury cash build absorbed reserves, reverse repos did not provide an offsetting release, and Federal Reserve lending remained small in absolute terms. The appropriate public description is modest tightening—not a liquidity shock, but not a broad impulse capable of validating indiscriminate risk-taking.",
        ],
      },
      {
        id: "industrial-policy",
        eyebrow: "Material change 3",
        title: "Industrial policy is hardening faster than broad demand.",
        paragraphs: [
          "Observed fact: On October 28, the White House initiated a Section 232 negotiation process covering robotics, industrial machinery, and related components after determining that import dependence threatens national security. The proclamation allows negotiations over the next 180 days and leaves tariffs, quotas, fees, or domestic-investment incentives available if needed. A separate October 22 proclamation applied the same national-security framework to wind-turbine imports and components.",
          "The demand picture remains selective. EIA expects U.S. electricity sales to rise nearly 2% in 2026 and another 2% in 2027, driven partly by data centers and manufacturing. Census data show total construction spending in August was 1.7% below the prior year and 3.1% lower over the first eight months of 2026, despite a 0.9% monthly increase.",
          "FTC interpretation: Washington is widening the set of industries treated as strategic, but policy designation is not the same as executable demand. Capital should distinguish verified customers, funded backlogs, approved utility plans, and credible energization schedules from announcements that still lack power, equipment, permits, or financing.",
        ],
      },
      {
        id: "horizon",
        title: "Why it matters over the next 30–90 days",
        paragraphs: [
          "The system may become less binary without becoming easier. A real trilateral process could reduce geopolitical tail risk, but the sanctions and tariff architecture remains available if diplomacy fails. Modestly tighter dollar liquidity raises the cost of relying on multiple expansion alone. Meanwhile, industrial policy continues to direct attention toward scarce domestic capacity even as broad construction activity remains soft.",
        ],
        bullets: [
          "Base case: Trilateral talks occur but progress unevenly; liquidity remains neutral-to-modestly tighter; and capital continues to favor scarce enabling capacity over generalized cyclical exposure.",
          "Alternative case: Negotiators establish a durable work program, reserve drainage reverses, and risk premia fall enough to support a broader recovery in industrial and reconstruction expectations.",
          "Tail risk: Talks fail amid renewed military escalation while coercive trade measures activate and reserve balances continue to decline.",
        ],
      },
      {
        id: "capital-allocation",
        title: "Capital-allocation lens",
        paragraphs: [
          "The public implication is to focus on functions rather than labels: power delivery, electrical equipment, industrial automation, engineering and maintenance capacity, secure logistics, and resilient industrial sites. Contractual visibility, approved capital plans, credible customers, and execution capacity matter more than thematic affiliation.",
          "This is not a recommendation to purchase any security. FTC's security selection, valuation, entry conditions, sizing, and implementation remain proprietary.",
        ],
      },
      {
        id: "watch",
        title: "Watch indicators",
        bullets: [
          "Whether team-level U.S.-Ukraine-Russia talks occur in the first half of November and produce a defined work program.",
          "Whether U.S. Graham Act waivers remain in force or become conditional enforcement tools.",
          "Weekly changes in reserve balances, the Treasury General Account, reverse repos, and Federal Reserve lending.",
          "The outcome of Section 232 negotiations covering robotics, industrial machinery, and wind-turbine components.",
          "Confirmed large-load energization schedules, utility capital-plan approvals, equipment lead times, and construction orders.",
        ],
      },
    ],
    sources: [
      {
        label: "Team-level trilateral talks planned for the first half of November",
        publisher: "President of Ukraine",
        url: "https://www.president.gov.ua/en/news/nam-potribni-tristoronni-peregovori-mizh-ukrayinoyu-amerikoy-107013",
        publishedAt: "2026-10-23",
        accessedAt: "2026-10-30",
      },
      {
        label: "October 29 strikes and ballistic-missile warning",
        publisher: "President of Ukraine",
        url: "https://www.president.gov.ua/en/news/ye-informaciya-vid-rozvidki-pro-pidgotovku-rosiyanami-novih-107081",
        publishedAt: "2026-10-29",
        accessedAt: "2026-10-30",
      },
      {
        label: "Implementing the Lindsey O. Graham Sanctioning Russia and Iran Act of 2026",
        publisher: "The White House",
        url: "https://www.whitehouse.gov/presidential-actions/2026/10/implementing-the-lindsey-o-graham-sanctioning-russia-and-iran-act-of-2026/",
        publishedAt: "2026-10-16",
        accessedAt: "2026-10-30",
      },
      {
        label: "H.4.1 Factors Affecting Reserve Balances",
        publisher: "Federal Reserve",
        url: "https://www.federalreserve.gov/releases/H41/Current/",
        publishedAt: "2026-10-29",
        accessedAt: "2026-10-30",
      },
      {
        label: "Adjusting imports of robotics, industrial machinery, and related components",
        publisher: "The White House",
        url: "https://www.whitehouse.gov/presidential-actions/2026/10/adjusting-imports-of-robotics-industrial-machinery-and-their-parts-and-components-into-the-united-states/",
        publishedAt: "2026-10-28",
        accessedAt: "2026-10-30",
      },
      {
        label: "Adjusting imports of wind turbines and related components",
        publisher: "The White House",
        url: "https://www.whitehouse.gov/presidential-actions/2026/10/adjusting-imports-of-wind-turbines-and-their-parts-and-components-into-the-united-states/",
        publishedAt: "2026-10-22",
        accessedAt: "2026-10-30",
      },
      {
        label: "U.S. electricity-sales forecast",
        publisher: "U.S. Energy Information Administration",
        url: "https://www.eia.gov/pressroom/releases/press592.php",
        publishedAt: "2026-09-09",
        accessedAt: "2026-10-30",
      },
      {
        label: "August 2026 construction spending",
        publisher: "U.S. Census Bureau",
        url: "https://www.census.gov/construction/c30/current/index.html",
        publishedAt: "2026-10-01",
        accessedAt: "2026-10-30",
      },
    ],
    methodology: "The FTC Weekly Signal separates observed facts from FTC interpretation, scenarios, and watch indicators. Regime directions are qualitative public judgments and do not reproduce FTC's internal models, scores, weights, dashboards, or portfolio decisions.",
    disclosure: "Fourth Turning Capital is an independent investment and operating platform. This material is provided for informational and educational purposes only and does not constitute investment, legal, tax, or accounting advice; an offer to sell; or a solicitation to buy any security. Views are stated as of the date published and may change without notice. References to companies, securities, or assets are illustrative and do not constitute recommendations. Fourth Turning Capital and its principals may hold positions in securities or assets discussed. Forward-looking statements and scenarios are inherently uncertain, and past performance is not indicative of future results.",
    relatedContent: [
      { title: "FTC Insights", href: "/insights", contentType: "Research archive" },
      { title: "Fourth Turning Capital", href: "/#about", contentType: "About FTC" },
    ],
    boundaryClassification: "Green",
    cta: {
      title: "Follow FTC Signals",
      copy: "Follow the geopolitical, liquidity, industrial, and real-economy forces shaping long-duration capital allocation.",
      label: "Follow via RSS",
      href: "/rss.xml",
    },
  },
];

export function getPublishedArticles(): Article[] {
  return articles
    .filter((article) => article.status === "published")
    .sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));
}

export function getPublishedArticle(
  collection: Article["collection"],
  slug: string,
): Article | undefined {
  return getPublishedArticles().find(
    (article) => article.collection === collection && article.slug === slug,
  );
}

/*
 * Non-routable fixture used by automated tests to exercise the complete
 * editorial contract before the first approved issue is added.
 */
export const articleTemplateFixture: Article = {
  collection: "insights",
  contentType: "FTC Weekly Signal",
  category: "Weekly Signal",
  themes: ["National resilience", "Grid modernization"],
  lenses: ["Geopolitics / world order", "Global liquidity", "Industrial policy"],
  geography: ["United States", "Europe"],
  timeHorizon: "30–90 days",
  audience: ["Investors", "Operators", "Strategic partners"],
  status: "draft",
  version: "0.1",
  title: "Editorial System Validation Fixture",
  dek: "A non-public fixture that validates the reusable FTC article contract.",
  slug: "editorial-system-validation-fixture",
  author: { name: "Joshua Peterson", title: "Founder & Principal", url: "/#about" },
  reviewer: ["Felicia-Rae Peterson"],
  approver: "Joshua Peterson",
  approvalRecord: "Fixture only — not approved for publication",
  asOf: "2026-10-21T22:00:00Z",
  readTimeMinutes: 5,
  social: {
    title: "Editorial System Validation Fixture | Fourth Turning Capital",
    description: "A non-public fixture for validating FTC article metadata.",
    image: "/ftc-hero-mountains.png",
    imageAlt: "Mountain landscape representing Fourth Turning Capital's long-term perspective.",
  },
  hero: {
    src: "/ftc-hero-mountains.png",
    alt: "Mountain landscape representing Fourth Turning Capital's long-term perspective.",
    caption: "A reusable editorial-image slot with required descriptive text.",
    source: { label: "Fourth Turning Capital", url: SITE_URL },
  },
  sections: [
    {
      id: "signal",
      eyebrow: "The signal in one sentence",
      title: "A complete content contract comes before publication.",
      paragraphs: [
        "This fixture validates the article layout and metadata model without exposing an unapproved research draft.",
      ],
    },
    {
      id: "watch",
      title: "Watch indicators",
      bullets: ["Approval state", "Source freshness", "Public-content boundary"],
    },
  ],
  sources: [
    {
      label: "FTC editorial operating standard",
      publisher: "Fourth Turning Capital",
      url: SITE_URL,
      accessedAt: "2026-10-21",
    },
  ],
  methodology:
    "FTC separates observed facts from interpretation, scenarios, and watch indicators. Public work does not reproduce proprietary scores, weights, or portfolio decisions.",
  disclosure:
    "This material is provided for informational and educational purposes only and does not constitute investment, legal, tax, or accounting advice.",
  relatedContent: [
    { title: "Fourth Turning Capital", href: "/", contentType: "About FTC" },
  ],
  boundaryClassification: "Green",
  cta: {
    title: "Continue the conversation",
    copy: "Connect with Fourth Turning Capital about durable capital allocation and productive assets.",
    label: "Contact FTC",
    href: "mailto:josh@fourthturning.capital",
  },
};
