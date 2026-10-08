# Green Falls staging design direction

## Homepage after review

The self-promotional portfolio section was removed after user review. Repeating the studio logo and showing an example newsletter did not provide strong enough evidence of capability to occupy the homepage’s main position. No replacement portfolio or invented proof has been added.

The homepage now moves from the introduction directly into the four services, followed by relevant professional experience, project expectations, useful guides and contact. The secondary hero link is “Explore our services” and scrolls to the actual service section.

## Design decisions

- **Hero:** retain the approved identity and original waterfall photograph, with readable type and no photo caption.
- **Services:** give each service a descriptive link and one useful sentence. Make them available immediately after the introduction.
- **Experience:** retain factual agency and email-platform experience without representing it as Green Falls client results.
- **Process:** explain the written project plan, cost, working drafts and handover alongside experience rather than adding several repetitive sections.
- **Guides:** link to substantive website and AI advice with clear titles and reading times.
- **Contact:** keep a direct next step for owners who haven’t fully defined a project.
- **Mobile:** preserve the existing menu and safe-area behavior, reflow the layout and avoid new overlays or sticky controls.

The complete sample email remains on the email-services page, where it illustrates that service. It is labeled as a sample and does not claim a sent campaign, existing mailing list or measured result. It is a web-rendered design example, not email-client certification.

The removed homepage showcase and styles remain recoverable in Git history. The old /work route still redirects to /services. No personal name, street address, fictional client, testimonial, invented pricing or performance claim has been added. Staging remains private and noindexed; live greenfalls.co is unchanged.


## Interior page review — September 8, 2026

Reviewed the services overview, four service detail pages, Who we help, About, Our approach, Insights, both articles, Contact, Privacy and Terms. The review focused on a small business owner deciding what help is available and what to do next.

| Page | Finding | Change |
|---|---|---|
| Services | Long headings made comparison slower; card borders visibly broke because rows did not stretch. | Short service names, aligned card borders, readable diagnostic links. |
| Four service pages | Large diagrams and the entire newsletter came before scope. | Put project inclusions first; retain examples after scope and add an All services return link. |
| Email | The headline was vague about the offer. | Name email marketing and repeat business directly; describe the newsletter as a sample. |
| AI | The introduction was abstract. | Name drafting replies and organizing requests; explain setup, testing and staff review plainly. |
| Consultation | The heading was long and scope was buried. | Shorten the heading and surface the work before the example plan. |
| Who we help | Industry descriptions had no direct links to relevant services. | Add relevant service links and replace vague benefits with concrete work. Avoid implying existing Green Falls client relationships. |
| About | Three consecutive headings repeated experience; both links went to the same page. | Use a direct About title, distinguish experience from how it shapes the work, and link to email services and process separately. Reduce the brandmark block on mobile. |
| Our approach | Clear steps and useful explanations of customer responsibilities. | Retained. |
| Insights and articles | Useful guidance, but article titles did not accurately describe the narrow tasks covered. Topic/read-time text was too small. | Match titles to content, enlarge metadata, simplify the AI article’s technical wording and tighten mobile spacing. URLs retained. |
| Contact | Clear form and next steps; form appears before explanatory text on mobile. | Retained. Tested required fields, bare .co website entry and staging-only response. No delivery claim. |
| Privacy and Terms | Readable supporting pages. | Reduce excessive opening space on phones. Legal terms and production disclosures unchanged. |

No new imagery, fake results, client claims, personal names or addresses were added. The existing brandmark, sample newsletter and explanatory diagrams remain intact.

Validation: all 14 interior routes loaded in 320px, 390px and 768px iframe viewports in Chromium with no horizontal overflow or broken image resources. Desktop and representative mobile layouts were visually reviewed; menu opening, Escape, navigation closure and FAQ keyboard toggles worked. Contact validation and the non-sending staging response worked. This is responsive Chromium QA, not a physical iPhone/Safari or inbox delivery test. The staging site remains private, unindexed and without production tracking.


## Color blocking refinement — September 8, 2026

- Dark forest sections now group experience on About and the project steps on Our approach. Light body copy, lime step markers and visible link focus states preserve contrast.
- A full-width pale-blue band now contains each service example, including on mobile. The Services chooser uses the same blue. Reading and project scope stay on Snowmelt.
- Interior closing CTAs now use a compact two-column desktop layout, with a clear stacked layout on phones. The homepage closer is also shorter.
- Backgrounds change at section boundaries; there is no scroll-triggered color animation. The established copy, brand assets, forms and navigation remain intact.
- Verified desktop compositions and 320px, 390px and 768px responsive iframe layouts for the eight affected page types. No overflow or broken images. Existing page tests are retained. Body text on forest has a 9.96:1 contrast ratio; small links on pale blue use a darker color after the initial 4.16:1 pairing was rejected.


## September 9 — approved public launch

Restored the shared sending contact form at the end of the homepage. The hero action links directly to it. The lime section keeps the approved color system; labels and fields stack on phones in document order. Kept the separate contact page.

Promoted the approved staging design into the existing live project, retaining production hosting identity, GA4 measurement ID, page-view tracking, FormSubmit recipient and privacy disclosures. Enabled indexing and refreshed sitemap modification dates.

Checked desktop and 390/320/768px iframe layouts: no horizontal content overflow or broken images. Browser QA verified required fields, bare .co entry, and locally simulated success/failure/retry. External form requests were blocked by a QA-only CSP; the simulation and test page were removed before the build. Actual inbox delivery was not verified.


## October 5, 2026 — findability and reaching out

Goal for this pass: a site that can be found and that makes it easy to ask about services. Changes, in the order a visitor meets them:

- **Service pages carry their own contact form.** The hero button now scrolls to a form at the end of the page instead of leaving for `/contact`. The form's "help with" field is preselected for that service and the `generate_lead` event records `service-website`, `service-email`, `service-ai` or `service-plan` as its location, so inquiries can be traced to the page that produced them.
- **Business is optional on the form.** Name, email and message are enough to start a conversation. A sole trader without a trading name is no longer stopped.
- **The form shows a real success state.** After sending, the fields are replaced by a confirmation and a way to add more by email. A hidden live region announces success and failure to screen readers.
- **The email service page shows the sample newsletter again**, labeled on the page as a design example and not a sent campaign, as this document already describes.
- **`/work` now redirects permanently** (308) instead of temporarily (307), so search engines consolidate on `/services`.
- **`llms.txt` uses the site's plain voice** and links each service page.
- **Header.** Constant height while scrolling; the 14 px content shift on desktop is gone. The bar is translucent with a blur, falling back to solid snowmelt under reduced-transparency. The desktop navigation now shows from 1024 px, so iPad landscape gets the links instead of the menu button. The current-page link is basalt on mist (contrast was 4.33:1, now above 4.5:1) with the duplicate underline removed. The logo link is sized to the logo.
- **Columns hold one left edge.** The FAQ and related links on service and audience pages sit in the same two-column grid as the rest of the page, and the article body starts at the page margin instead of a centred column.
- **Hero.** Headline capped at 20 characters per line so it sets in three lines, the photo bottom-aligned with the buttons and slightly larger, a 4:3 crop on phones instead of a 180 px strip.
- **Small targets and semantics.** Article "next step" and "further reading" links use the text-link style and a 44 px target; the byline link too. The insights index and the Services diagnostic list use spans instead of `<b>` and `<em>`. Trailing spaces left by removed arrows are gone. The three "Start with one project" cards sit in three columns at desktop, with no empty bordered cell.
- **Article "Example" callouts** use a teal top rule and label instead of a shaded left border, per the brief.
- **The hero photograph loads first.** The image was being built with `loading="lazy"` on the largest element of the page. It is now a plain eager image at high fetch priority with a preload for the AVIF source. The sample newsletter's button uses the site's `Link` so ESLint passes.
- **Motion that explains state only.** Press feedback on buttons, a 150 ms fade on mobile menu links, a 200 ms height transition on FAQ answers where the browser supports `::details-content`, and a short rise on form status lines. All of it is off under reduced motion.
- **Stylesheets.** 235 rules whose classes no component referenced were removed from `globals.css` and `studio.css` (about 18 KB), including everything that styled the deleted homepage sections, the tabbed service explorer and the old work viewer. `service-visuals.css` is no longer imported. `ServiceExplorer.tsx`, `ServiceVisuals.tsx`, `service-visuals.css` and `app/chatgpt-auth.ts` are no longer used and can be deleted.

Not done here, and still the most important items for the goal: confirm the live FormSubmit delivery with one real test, set up Search Console and a Google Business Profile, collect genuine reviews, and decide on a phone number and a reply-time promise.

Verification in this pass, on the real build: `npm ci`, `npx vinext build`, the 17 rendered-HTML tests (including the new service-page form, sample newsletter and 308 redirect tests), `npx tsc --noEmit` and ESLint all pass. Against the local production worker with JavaScript: all 20 routes load with no hydration or console errors at 1440 and 390 px; the header no longer shifts content on scroll; the form's success and error paths work with the FormSubmit request intercepted (no inquiry sent) and the `generate_lead` payload carries the service page and preselected area; Escape closes the mobile menu and returns focus; the FAQ opens from the keyboard; `/work` returns 308. Static checks at 375, 390, 768, 1024 and 1440 px across 21 pages with the real fonts found no overflow, no contrast failures and no accessibility sweep findings. Lighthouse mobile on the local server (which does not compress responses, unlike production): accessibility 100, SEO 100, best practices 96, performance 78 to 81. The hero photograph had been built with `loading="lazy"` on the page's largest element; it now loads eagerly at high priority with an AVIF preload, which cleared the lazy-LCP audit. Still unverified: live FormSubmit delivery.

## October 8, 2026: component pass

Reviewed every module against the design-engineering checklist (press feedback, easing, hover gated to real pointers, origin and purpose of each motion) and the touch, contrast and target rules. Changes, all in `app/globals.css` unless noted:

- **Cards.** The service grids on `/services` and in "Start with one project" draw a single basalt frame with hairline inner lines (a 1 px grid gap over a line colour) instead of a full border on every edge. The whole card is the link: the text link carries a stretched pseudo-element, the card lightens on hover (real pointers only) and shows the focus ring on the card rather than the small link.
- **Row links.** One arrow treatment, drawn with a CSS mask so it takes the link colour, wherever a whole row is a link: the homepage service list, "Which of these sounds familiar?", and the article index. The arrow moves 4 px on hover with a strong ease-out.
- **FAQ.** The open/close glyph is larger, teal, and still turns 45° to a cross when the answer is open.
- **Approach steps** (`app/approach/page.tsx`). Large tabular numerals carry the hierarchy. The "You share / You receive" line is a lichen label beside the text instead of a left-border rule, per the brief. Stacks on phones.
- **Lists.** The "What your project can include" list uses the same teal dash as the industry lists. Lists of links are no longer indented.
- **Form.** Hover state on fields, inline invalid state after the first submit attempt (`:user-invalid`), a select whose chevron and height match the inputs, 150 ms transitions on border and ring.
- **Buttons.** A strong ease-out on the press transform, a hover shade for the dark variant, pointer cursor on every enabled button.
- **Service diagrams** (`app/components/ServiceDiagram.tsx`, new). One inline SVG figure per service page on the example-blue band, after the scope section: the inquiry path, the email timeline, the ninety-day plan, and the human-review flow. Landscape and portrait drawings swap at 640 px; the AI flow is portrait at every width. Text is live and uses the site font. Each SVG carries a full `aria-label`.

Verification on the real build: `npx vinext build`, the 17 rendered-HTML tests, `tsc`, ESLint, 40 route loads at two widths with no console or hydration errors, and the sweep over 15 routes at 375, 390, 768, 1024 and 1440 px with no overflow, no contrast failure, no target under 44 px and no accessibility finding (duplicate ids and `aria-labelledby` targets included). Whole-card clicks, the hover arrow, the FAQ glyph, the diagram breakpoint swap, the step labels and the invalid form state were checked by script and by eye. The static preview artifact was regenerated from this build.
