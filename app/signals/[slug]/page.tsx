import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "../../components/article-page";
import {
  articleCanonicalUrl,
  getPublishedArticle,
  getPublishedArticles,
  SITE_URL,
} from "../../lib/articles";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPublishedArticles()
    .filter((article) => article.collection === "signals")
    .map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getPublishedArticle("signals", slug);
  if (!article) return { robots: { index: false, follow: false } };

  const canonical = articleCanonicalUrl(article);
  return {
    title: article.social.title,
    description: article.social.description,
    authors: [{ name: article.author.name, url: article.author.url }],
    category: article.category,
    keywords: [...article.themes, ...article.lenses],
    alternates: {
      canonical,
      types: { "application/rss+xml": `${SITE_URL}/rss.xml` },
    },
    openGraph: {
      type: "article",
      url: canonical,
      title: article.social.title,
      description: article.social.description,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      authors: [article.author.name],
      section: article.category,
      tags: [...article.themes, ...article.lenses],
      images: [{ url: article.social.image, alt: article.social.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.social.title,
      description: article.social.description,
      images: [{ url: article.social.image, alt: article.social.imageAlt }],
    },
  };
}

export default async function SignalPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getPublishedArticle("signals", slug);
  if (!article) notFound();
  return <ArticlePage article={article} />;
}
