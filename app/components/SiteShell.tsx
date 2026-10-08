"use client";

import { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";

const nav = [["Services", "/services"], ["Who we help", "/who-we-help"], ["Our approach", "/approach"], ["Insights", "/insights"], ["About", "/about"]] as const;

export function SiteHeader() {
  const menu = useRef<HTMLDetailsElement>(null);
  const path = usePathname();
  const [compact,setCompact]=useState(false);
  useEffect(()=>{const onScroll=()=>setCompact(window.scrollY>48);onScroll();window.addEventListener("scroll",onScroll,{passive:true});return()=>window.removeEventListener("scroll",onScroll)},[]);
  return <header className={`site-header ${compact ? "header-compact" : ""}`}><a className="skip-link" href="#main-content">Skip to content</a><div className="shell header-inner"><Link href="/" className="logo-link" aria-label="Green Falls Co. home"><BrandLogo className="header-logo" /><span className="sr-only">Green Falls Co. home</span></Link><nav className="desktop-nav" aria-label="Primary navigation">{nav.map(([label, href]) => <Link key={href} href={href} aria-current={path === href || path.startsWith(href + "/") ? "page" : undefined}>{label}</Link>)}</nav><Link className="button button-small header-cta" href="/contact">Tell us what you need</Link><details ref={menu} key={path} className="mobile-menu" onKeyDown={(event) => { if (event.key === "Escape" && menu.current) { menu.current.open = false; menu.current.querySelector("summary")?.focus(); } }}><summary>Menu <span aria-hidden="true">+</span></summary><nav aria-label="Mobile navigation" onClick={(event) => { if ((event.target as HTMLElement).closest("a") && menu.current) menu.current.open = false; }}>{nav.map(([label, href]) => <Link key={href} href={href} aria-current={path === href || path.startsWith(href + "/") ? "page" : undefined}>{label}</Link>)}<Link className="button" href="/contact">Tell us what you need</Link></nav></details></div></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="shell footer-grid"><div><Link href="/" aria-label="Green Falls Co. home"><BrandLogo className="footer-logo" inverse /><span className="sr-only">Green Falls Co. home</span></Link><p className="footer-place">Based in Maine.<br />Helping independent businesses across the Northeast.</p></div><div className="footer-links"><h2>Explore</h2>{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div><div className="footer-links"><h2>Get in touch</h2><a href="mailto:info@greenfalls.co">info@greenfalls.co</a><Link href="/contact">Tell us what you need</Link></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Green Falls Co.</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div></footer>;
}

export function SiteShell({ children }: { children: React.ReactNode }) { return <><SiteHeader />{children}<SiteFooter /></>; }
