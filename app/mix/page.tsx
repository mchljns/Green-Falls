import type { Metadata } from "next";
import { SiteShell } from "../components/SiteShell";

// Private download page for Mix Assistant, the church sound app. The password is checked on the
// server by worker/mix-download.ts against the Worker secret MIX_PASSWORD; it never appears in this page.
export const metadata: Metadata = {
  title: "Mix Assistant download",
  description: "Password-protected download for the Mix Assistant Mac installer.",
  robots: { index: false, follow: false },
};

export default async function MixPage({ searchParams }: { searchParams: Promise<{ wrong?: string }> }) {
  const wrong = (await searchParams)?.wrong === "1";
  return (
    <SiteShell>
      <main id="main-content">
        <section className="not-found-page shell">
          <div>
            <h1>Mix Assistant download</h1>
            <p>Enter the password you were given to download the Mac installer.</p>
            <form className="contact-form mix-form" method="post" action="/mix/download">
              <label>
                <span>Password</span>
                <input name="password" type="password" autoComplete="current-password" autoCapitalize="none" spellCheck={false} required autoFocus aria-invalid={wrong || undefined} aria-describedby={wrong ? "mix-error" : undefined} />
              </label>
              <button className="button" type="submit">Download</button>
              {wrong && <p id="mix-error" className="form-status form-status-error" role="alert">That password didn&apos;t match. Check it and try again.</p>}
            </form>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
