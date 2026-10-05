import Link from "next/link";
import { SiteShell } from "./components/SiteShell";

export default function NotFound() {
  return <SiteShell><main id="main-content"><section className="not-found-page shell"><div><p className="page-label">404 · Page not found</p><h1>Page not found.</h1><p>The page may have moved, or the address may be wrong. Head back to the homepage or tell us what you were trying to find.</p><div className="not-found-actions"><Link className="button" href="/">Return home</Link><Link className="text-link" href="/contact">Contact Green Falls</Link></div></div></section></main></SiteShell>;
}
