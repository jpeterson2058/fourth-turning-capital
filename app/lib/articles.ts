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

export function articleCanonicalUrl(article: Pick<Article, "slug">): string {
  return `${SITE_URL}${articlePath(article)}`;
}

/*
 * Publication registry. Add an approved article here only after its final
 * fact/source/public-boundary gate is complete. Drafts remain outside this
 * array so they cannot leak into routes, the archive, RSS, or the sitemap.
 */
export const articles: readonly Article[] = [];

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
