import Link from "next/link";
import { SiteShell } from "../components/SiteShell";
import { FinalCTA, PageHero } from "../components/PageBlocks";
import { createPageMetadata } from "../lib/metadata";

export const metadata = createPageMetadata({ title: "Marketing for Maine Trades, Shops & Restaurants", description: "Website and email marketing help for Maine contractors, independent shops and restaurants. Make it easier for customers to find you, inquire and return.", path: "/who-we-help" });

const groups = [
  { index: "01", title: "Trades and home services", signal: "Estimate / Schedule / Review", body: "Roofers, builders, remodelers, electricians, plumbers, HVAC companies and similar businesses need homeowners to understand their services, coverage and estimate process.", points: ["Accurate service-area information and local business listings", "Clear service pages and an easy path to request an estimate", "Follow-up after estimates and completed jobs", "Customer emails for seasonal services"], href: "/who-we-help/contractors", link: "Website help for contractors" },
  { index: "02", title: "Shops, music and specialty retail", signal: "Product / Service / Event", body: "Instrument shops, bookstores, bike shops and other specialty retailers often do more than sell products. We help customers find repairs, lessons and events alongside what’s on the shelf.", points: ["Help finding products, repairs, lessons and events", "Useful information about inventory and services", "Growing a customer email list and bringing people back", "Local search, online sales and simpler day-to-day systems"], href: "/who-we-help/retailers", link: "Email help for independent retailers" },
  { index: "03", title: "Restaurants and hospitality", signal: "Search / Menu / Return", body: "Restaurants, cafés, bakeries, breweries and independent hospitality businesses need accurate local information, direct customer relationships and simple systems that respect tight margins.", points: ["Menus, hours, locations and local search", "Easy paths to reserve, visit or attend an event", "Growing a direct customer list and encouraging return visits", "Templates and instructions your team can keep using"], href: "/services/website-creation-seo-aeo", link: "Explore website help" },
];

export default function WhoWeHelpPage() {
  return <SiteShell><main id="main-content"><PageHero title="Marketing for trades, shops and hospitality businesses." intro="The work depends on how customers find you and what they need before they call, book or visit. Here’s how our services can fit different kinds of businesses." />
    <section className="section shell industry-stack">{groups.map((group) => <article className="industry-row" key={group.title}><div className="industry-title"><h2>{group.title}</h2><p>{group.body}</p><Link className="text-link" href={group.href}>{group.link}</Link></div><ul className="check-list">{group.points.map((point) => <li key={point}>{point}</li>)}</ul></article>)}</section>
    <section className="section shell other-businesses"><h2>Don’t see your industry?</h2><p>We also consider projects for other independent businesses. Tell us what you sell, how customers buy and where you need help.</p></section>
    <FinalCTA title="Tell us about your business." body="Share what you offer, who your customers are and what you’d like to build or improve." /></main></SiteShell>;
}
