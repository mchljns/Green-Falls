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
