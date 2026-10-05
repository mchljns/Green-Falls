import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "../../components/SiteShell";
import { FinalCTA } from "../../components/PageBlocks";
import { StructuredData } from "../../components/StructuredData";
import { insights } from "../../lib/content";
import { articleSchema, createPageMetadata } from "../../lib/metadata";

export function generateStaticParams() { return insights.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const item = insights.find((x) => x.slug === slug); return item ? createPageMetadata({ title: item.seoTitle, description: item.description, path: `/insights/${item.slug}`, type: "article" }) : {}; }

export default async function InsightArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const article = insights.find((item) => item.slug === slug); if (!article) notFound();
  return <SiteShell><main id="main-content"><StructuredData data={articleSchema(article)} /><article className="article-page"><header className="article-header shell"><Link href="/insights" className="back-link">← All insights</Link><p className="article-topic">{article.topic}</p><h1>{article.title}</h1><p className="article-dek">{article.dek}</p><div className="article-meta"><Link href="/about">Green Falls Co.</Link><span>{article.read}</span><span>{article.updated === article.published ? "Published " : "Updated "}{new Date(`${article.updated}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}</span></div></header><div className="shell"><div className="article-body"><p className="article-intro">{article.intro}</p>{article.sections.map((section) => <section key={section.h}><h2>{section.h}</h2><p>{section.p}</p><div className="article-example"><h3>Example</h3><p>{section.example}</p></div><p className="article-check"><strong>Try this:</strong> {section.check}</p></section>)}<div className="article-close"><p>{article.close}</p></div><section><h2>Help with the next step</h2><ul>{article.related.map(link=><li key={link.href}><Link className="text-link" href={link.href}>{link.label}</Link></li>)}</ul></section>{article.sources.length > 0 && <section><h2>Further reading</h2><ul>{article.sources.map(link=><li key={link.href}><a className="text-link" href={link.href}>{link.label}</a></li>)}</ul></section>}</div></div></article><FinalCTA title="Want help with the work?" body="Tell us which page or process you want to improve and what you’ve tried so far." /></main></SiteShell>;
}
