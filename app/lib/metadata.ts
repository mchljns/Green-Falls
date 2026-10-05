import type { Metadata } from "next";

export const siteUrl = "https://greenfalls.co";
export const siteName = "Green Falls Co.";
export const socialImage = `${siteUrl}/images/green-falls-social.png`;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  home?: boolean;
  type?: "website" | "article";
};

export function createPageMetadata({ title, description, path, home = false, type = "website" }: PageMetadataOptions): Metadata {
  const canonical = new URL(path, siteUrl).toString();
  const fullTitle = `${title} | ${siteName}`;

  return {
    title: home ? { absolute: fullTitle } : title,
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName,
      locale: "en_US",
      type,
      images: [{ url: socialImage, width: 1200, height: 630, alt: "Green Falls Co." }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [socialImage],
    },
  };
}

export function serviceSchema(service: { slug: string; short: string; title: string; intro: string }) {
  const url = `${siteUrl}/services/${service.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.short,
    serviceType: service.title,
    description: service.intro,
    url,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: ["Maine", "New England", "Northeastern United States"],
  };
}

export function articleSchema(article: { slug: string; title: string; dek: string; published: string; updated: string }) {
  const url = `${siteUrl}/insights/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.dek,
    url,
    mainEntityOfPage: url,
    image: socialImage,
    datePublished: article.published,
    dateModified: article.updated,
    author: { "@id": `${siteUrl}/#organization` },
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}
