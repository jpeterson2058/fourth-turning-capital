export type InsightSection = {
  heading: string;
  paragraphs: string[];
};

export type Insight = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  publishedAt: string;
  author: string;
  category: string;
  themes: string[];
  frameworks: string[];
  readTime: string;
  linkedinCopy: string;
  sections: InsightSection[];
};

export const insights: Insight[] = [
  {
    slug: "america-cannot-reindustrialize-if-it-cannot-build",
    title: "America Cannot Reindustrialize If It Cannot Build",
    subtitle: "Permitting reform is no longer a narrow regulatory question. It is an industrial, energy and national-security imperative.",
    description: "Why American industrial renewal requires the institutional capacity to permit, finance and construct energy, infrastructure and manufacturing assets.",
    publishedAt: "2026-07-22",
    author: "Josh Peterson",
    category: "Industrial Renewal",
    themes: ["Infrastructure", "Energy", "Manufacturing", "National Security"],
    frameworks: ["Fourth Turning", "Industrial Policy", "Political Risk"],
    readTime: "8 min read",
    linkedinCopy: "America cannot reindustrialize if it cannot build. The United States has rediscovered the strategic importance of energy, manufacturing, infrastructure and secure supply chains—but permitting and institutional capacity remain binding constraints. My latest Fourth Turning Capital essay examines why building capacity is now a national-security and capital-allocation issue.",
    sections: [
      {
        heading: "The strategic contradiction",
        paragraphs: [
          "The United States increasingly recognizes that energy security, domestic manufacturing, resilient supply chains and modern infrastructure are essential to economic and national security. Yet the country often remains unable to approve and construct the assets required to achieve those objectives within commercially relevant timelines.",
          "This is the central contradiction of the current industrial-policy regime: public policy can allocate subsidies, tax credits and strategic priorities, but capital cannot produce durable returns when projects remain trapped in procedural uncertainty."
        ]
      },
      {
        heading: "A Fourth Turning problem",
        paragraphs: [
          "Periods of institutional crisis expose the gap between what a society says it values and what its governing systems can actually deliver. The present era is increasingly defined by pressure to rebuild state capacity, physical infrastructure and national resilience.",
          "Permitting reform should therefore be understood not as deregulation for its own sake, but as institutional modernization. Rules must protect communities and natural resources while also producing timely, predictable and accountable decisions."
        ]
      },
      {
        heading: "The capital-allocation implication",
        paragraphs: [
          "For investors, permitting duration is a material underwriting variable. It affects development costs, financing carry, contract viability, equipment orders, supply-chain scheduling and ultimately project returns.",
          "Fourth Turning Capital will treat permitting capacity, political durability and local execution risk as core elements of infrastructure and industrial underwriting—not as secondary legal footnotes."
        ]
      }
    ]
  }
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
