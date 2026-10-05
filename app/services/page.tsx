import { StartingProjects } from "../components/StartingProjects";
import Link from "next/link";
import { SiteShell } from "../components/SiteShell";
import { FinalCTA, PageHero, SectionLead } from "../components/PageBlocks";
import { services } from "../lib/content";
import { createPageMetadata } from "../lib/metadata";

export const metadata = createPageMetadata({ title: "Small Business Marketing Services in Maine", description: "Compare website design, local SEO, email marketing, AI setup and marketing consultation. Find the right starting project for your Maine small business.", path: "/services" });

export default function ServicesPage() {
  return <SiteShell><main id="main-content"><PageHero title="Websites, email and marketing support." intro="We can build something new, improve what you have or help you decide what to tackle first. Explore the services below to see what a project can include."><Link className="text-link" href="#where-to-start">Help me choose </Link></PageHero>
    <section className="section shell"><div className="service-page-grid">{services.map((service) => <article className="service-summary" key={service.slug}><h2>{service.short}</h2><p>{service.intro}</p><Link className="text-link" href={`/services/${service.slug}`}>Explore {service.short.toLowerCase().replace(/\bai\b/g, "AI")} </Link></article>)}</div></section>
    <section className="section section-tone-blue" id="where-to-start"><div className="shell"><SectionLead title="Which of these sounds familiar?" body="Start with the problem you’re seeing. We’ll help you work out what needs to change." /><div className="diagnostic-list"><Link href="/services/website-creation-seo-aeo"><span>Our website is hard to find or doesn’t lead to enough calls, bookings or sales.</span><b>See website help</b></Link><Link href="/services/email-lifecycle-retention"><span>We get new customers, but don’t give them enough reasons to return.</span><b>See email help</b></Link><Link href="/services/ai-implementation"><span>We’re trying AI, but each person uses it differently.</span><b>See practical AI</b></Link><Link href="/services/marketing-consultation"><span>We’re deciding where to spend and need a review of our options.</span><b>See consultation</b></Link></div></div></section>
    <StartingProjects /><FinalCTA /></main></SiteShell>;
}
