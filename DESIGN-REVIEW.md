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
- **Motion that explains state only.** Press feedback on buttons, a 150 ms fade on mobile menu links, a 200 ms height transition on FAQ answers where the browser supports `::details-content`, and a short rise on form status lines. All of it is off under reduced motion.
- **Stylesheets.** 235 rules whose classes no component referenced were removed from `globals.css` and `studio.css` (about 18 KB), including everything that styled the deleted homepage sections, the tabbed service explorer and the old work viewer. `service-visuals.css` is no longer imported. `ServiceExplorer.tsx`, `ServiceVisuals.tsx`, `service-visuals.css` and `app/chatgpt-auth.ts` are no longer used and can be deleted.

Not done here, and still the most important items for the goal: confirm the live FormSubmit delivery with one real test, set up Search Console and a Google Business Profile, collect genuine reviews, and decide on a phone number and a reply-time promise.

Verification in this pass: the real components and stylesheets were rendered to static HTML and checked in Chromium at 390, 768, 1024 and 1440 px for overflow, contrast and tap targets. The Vinext build, the test suite, ESLint and `tsc` could not run in the review environment (npm registry blocked), so run `npm ci`, `npm run build` and `npm test` before merging. The `/work` test asserts a 308; if Vinext does not implement `permanentRedirect`, that test will say so.
