import Link from "next/link";
import { SiteShell } from "../components/SiteShell";
import { FinalCTA, PageHero } from "../components/PageBlocks";
import { insights } from "../lib/content";
import { createPageMetadata } from "../lib/metadata";

export const metadata = createPageMetadata({ title: "Small Business Website & Email Marketing Guides", description: "Practical guides to website inquiries, redesign proposals, email automation and AI customer replies. Make a better next marketing decision.", path: "/insights" });

export default function InsightsPage() {
  return <SiteShell><main id="main-content"><PageHero title="Advice for your next marketing decision." intro="Practical guides to improving inquiries, comparing website proposals, planning customer emails and putting AI to work." />
    <section className="section shell insights-index insights-focused"><div className="article-index">{insights.map((article) => <Link href={`/insights/${article.slug}`} key={article.slug}><div><p>{article.topic}</p><h2>{article.title}</h2><b>{article.dek}</b></div><em>{article.read}</em></Link>)}</div></section>
    <FinalCTA title="Need help applying this to your business?" body="Share your website or describe the task you’re considering. We can discuss the work and what it would involve." /></main></SiteShell>;
}
