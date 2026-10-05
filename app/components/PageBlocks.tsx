import Link from "next/link";
import { StructuredData } from "./StructuredData";

export function PageHero({ label, title, intro, children, backHref, backLabel }: { backHref?: string; backLabel?: string; label?: string; title: string; intro: string; children?: React.ReactNode }) {
  return <section className="inner-hero">{backHref && <div className="shell"><Link className="interior-back" href={backHref}>← {backLabel}</Link></div>}<div className="shell inner-hero-grid"><div>{label && <p className="page-label">{label}</p>}<h1>{title}</h1></div><div className="inner-hero-aside"><p>{intro}</p>{children}</div></div></section>;
}

export function SectionLead({ title, body }: { title: string; body?: string }) {
  return <div className="section-heading split-heading"><h2>{title}</h2>{body && <p>{body}</p>}</div>;
}

export function FinalCTA({ title = "What would you like to build or improve?", body = "Tell us about your business and the project you have in mind." }: { title?: string; body?: string }) {
  return <section className="final-cta"><div className="shell final-cta-grid"><div><h2>{title}</h2><p>{body}</p></div><Link className="button" href="/contact">Tell us what you need</Link></div></section>;
}

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };
  return <><StructuredData data={schema} /><div className="faq-list">{items.map((item, i) => <details key={item.q} open={i === 0}><summary>{item.q}<b aria-hidden="true">+</b></summary><p>{item.a}</p></details>)}</div></>;
}
