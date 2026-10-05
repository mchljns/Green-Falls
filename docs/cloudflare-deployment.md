# GitHub-to-production setup

Status: prepared, NOT connected. greenfalls.co still runs on ChatGPT Sites.
Do not describe a merge to main as a live deployment until the Cloudflare integration and domain cutover below have been completed and verified.

## Intended workflow

Create a feature branch in Claude Code, push it, open a pull request, and review a separate Cloudflare preview. Merge to main only when checks pass and the owner approves the result. Cloudflare Workers Builds will deploy main after the connection is configured. GitHub Actions runs the build, all route tests, and TypeScript checks without deployment credentials.

## Hosting connection still required

1. Sign in to the owner's Cloudflare account. Create a Worker connected only to mchljns/Green-Falls. Keep the existing Sites domain connection serving traffic while validating the new Worker.
2. Use Node 22, install command npm ci, build command npm run check, and production branch main. Set NEXT_TELEMETRY_DISABLED=1 and WRANGLER_SEND_METRICS=false as build variables.
3. The deploy artifact is a Worker, not a static Pages export: use npx wrangler deploy --config dist/server/wrangler.json. Verify the generated Worker name matches the selected Worker (currently green-falls-co). Do not upload dist/client alone.
4. Enable branch previews using the commands supported by the configured Wrangler version. Verify the preview command in an actual build before enabling automation. The current lockfile pins Wrangler 4.92.0; newer preview features may require a reviewed dependency update.
5. Before exposing preview URLs, add and verify preview-only noindex headers/robots behavior. GA already runs only on greenfalls.co. The contact form still sends to the real inbox on other hosts; intercept it during tests or add a clearly labeled preview-only non-sending mode before user testing.
6. Run a real preview build and test all routes, assets, form states, redirects, metadata, and mobile navigation. Configure branch protection to require the Build, routes and types check before main can merge. Do not require a second reviewer if this is a solo-maintainer repository.
7. Attach greenfalls.co only after the preview and an initial production Worker deployment pass. Use the exact DNS instructions returned by Cloudflare. Preserve MX and email-related records. Verify TLS and production behavior after the switch; keep the old Sites deployment available for rollback.
8. Confirm an approved pull request merged into main causes a successful deployment and that the deployed commit matches main. Only then mark this document connected and update README.md and CLAUDE.md accordingly.

## Rollback

Revert the faulty merge through a pull request and verify the redeployment. For an urgent outage, use Cloudflare's verified previous deployment. Record the old DNS values before any cutover so the existing Sites host can be restored if needed.

Never put authentication tokens in the repository. Cloudflare/GitHub account authorization and actual DNS configuration are not part of these source files.

References:
- https://developers.cloudflare.com/workers/ci-cd/builds/git-integration/github-integration/
- https://developers.cloudflare.com/workers/ci-cd/builds/build-branches/
