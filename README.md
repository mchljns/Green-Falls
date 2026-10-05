# Green Falls Co.

Source for https://greenfalls.co. This is the actual site, including its brand assets, page content, styles, analytics and contact form.

## Run locally

Requires Node.js 22.13+ and npm. Use the committed `package-lock.json`.

```sh
npm ci
npm run dev
```

Vite prints the local URL. No API keys or database are needed to read the public pages. The site uses React 19, TypeScript and Vinext (Next.js-compatible routing on Vite), with a Cloudflare Worker build. Do not replace it with a fresh Next.js starter.

For a portable production build and route checks (macOS or Linux):

```sh
npx vinext build
node --test tests/*.test.mjs
npx wrangler types worker-configuration.d.ts --config dist/server/wrangler.json
npx tsc --noEmit
```

In the managed Sites Linux environment, `npm run install:ci`, `npm run build` and `npm test` use the existing bounded install/build helpers. These helpers use GNU utilities and are not the preferred local macOS commands.

To disable optional development telemetry, set `NEXT_TELEMETRY_DISABLED=1` and `WRANGLER_SEND_METRICS=false` in your shell before running the commands. Do not remove the site's production GA4 tracking as part of that preference.

## Where to make changes

- `app/page.tsx`: homepage and bottom contact form.
- `app/components/SiteShell.tsx`: shared navigation and footer.
- `app/components/PageBlocks.tsx`: shared hero, CTA and FAQ components.
- `app/lib/content.ts`: four services and five guides; includes search metadata and article dates.
- `app/services/[slug]/page.tsx`: service detail template.
- `app/who-we-help/[audience]/page.tsx`: contractor and retail pages.
- `app/insights/[slug]/page.tsx`: article template and related links.
- `app/lib/metadata.ts`: canonicals, social metadata and structured data.
- `app/sitemap.ts` and `app/robots.ts`: crawl discovery.
- `app/globals.css`, `app/studio.css`, `app/service-visuals.css`: current styles.
- `app/components/BrandLogo.tsx` and `public/brand/`: approved logo artwork.
- `public/favicon.*`: approved SVG plus PNG/ICO compatibility exports.
- `docs/seo-review-2026-10-02.md`: search intent, changes, limitations and page map.
- `CLAUDE.md`: UI review brief and constraints.

## Services and routes

The primary offers are website design/local SEO, email/lifecycle marketing, AI setup and marketing consultation. Existing service URLs are intentionally preserved. `/work` redirects to `/services`; there is no public portfolio.

## Important integration behavior

The contact form posts to FormSubmit for `info@greenfalls.co`. Local form submissions also use that live endpoint. During UI review, intercept the request or use a mock response; do not send a real inquiry without approval. Preserve field validation, clear success/error states and the `generate_lead` event.

Production GA4 uses measurement ID `G-MQG31KKRKC`. That ID is public configuration, not a credential. Keep test traffic out of reports. Review the existing hostname behavior before testing analytics.

There are no credentials needed in this repository. Do not commit `.env` files, authentication state, logs, tokens or local runtime folders. `.openai/hosting.json` identifies the existing Sites project; it is not a secret or a deploy credential.

## Review and deployment

Create a branch for UI work and open a pull request. Include screenshots at 390px and 1440px and explain each substantial change. Use a separate preview with `noindex` when publishing review builds. Production canonicals should remain `https://greenfalls.co`.

GitHub is a review/handoff copy. A push to this repository does **not** automatically deploy the live site. The production Site has a separate source repository and a save/deploy workflow. Reconcile approved changes into that source before deployment; don't treat the two repositories as automatically synchronized.

Run the build and both rendered test files before handing changes back. The tests verify public routes, unique metadata, canonical URLs, headings, internal links and existing form/analytics behavior. Passing them isn't a substitute for manual mobile, keyboard and visual checks.
