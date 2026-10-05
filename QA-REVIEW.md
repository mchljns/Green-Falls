# Green Falls Co. staging review — 2026-09-08

Production greenfalls.co is unchanged. This is an independent owner-private staging site.

## Changes
- Added active navigation state and mobile close-on-navigation/Escape behavior.
- Reduced excessive headline scale and whitespace; corrected tablet recognition grid and audience cards.
- Improved service illustration text sizes and mobile flow layouts.
- Assigned unique SVG mask IDs so repeated brandmarks do not collide.
- Removed misleading noninteractive Insights topic filters and corrected reading times.
- Replaced defensive and abstract homepage/About copy with clear services, scope, handoff and expectations.
- Added staging noindex/nofollow, blocked crawler paths, removed production Analytics rendering, and disabled outbound form delivery with an explicit preview message.
- Corrected FormSubmit success parsing so a string false cannot be treated as success.

## Verification
- Production-source homepage read and viewed in the internal preview before changes.
- Desktop main navigation followed to all five primary destinations.
- Mobile menu navigation and Escape exercised; FAQ answer expansion inspected.
- Homepage viewed in 390px and 1024px iframe viewports; desktop Services reviewed visually.
- Contact form populated with a bare greenfalls.co domain; keyboard submission displayed the staging-only message.
- Services Help me choose anchor reached its target.
- About brandmark mask IDs are unique; inspected About and Services DOM showed no broken images or horizontal document overflow.
- All 15 internally linked routes returned 200; no missing local referenced assets in the production build.
- All 13 existing rendered/source checks passed, with the analytics expectation adapted for staging exclusion. Source-only form checks do not prove actual email delivery.

## Remaining limits and priorities
- Actual FormSubmit inbox delivery is unverified. Staging never sends inquiries. Confirm activation and receipt before treating the live contact channel as validated.
- Real client examples/case studies are the main content gap. Do not invent results, prices or testimonials.
- No response-time promise or pricing was invented. Add these only when confirmed.
- Browser automation encountered intermittent click/scroll and full-page screenshot timeouts. Desktop screenshots, DOM checks, mobile iframe interaction and keyboard form submission succeeded; this is not an exhaustive cross-browser/device certification.
- Before any production promotion, deliberately restore production analytics, crawler configuration and form delivery, retain strict response validation, and recheck the production configuration. Never copy staging isolation blindly.
