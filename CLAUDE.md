# Green Falls UI review brief

Read README.md and docs/seo-review-2026-10-02.md first. Work on a review branch and make a pull request; do not deploy to the live site without the owner's approval.

## Business and voice

Green Falls Co. helps independent businesses in Maine and the Northeast with websites/local SEO, customer email, AI setup and marketing decisions. Use "we" and natural contractions. Keep copy specific and understandable to a small business owner. No invented results, awards, testimonials, prices or client projects. No personal name, portrait or street address on the public site.

## Brand and UI constraints

- Archivo headings; Libre Franklin body. Inspect all navigation, buttons, labels and forms for consistency.
- Preserve approved logo letterforms and the existing waterfall image. Don't redraw the mark, add captions or stretch images.
- Olive #353B24, Basalt #20282A, Snowmelt #F8FAF7, Mist #E4E9E6, Lichen #C7D83F; blue #2A9AB7 is an accent.
- No emojis, generic gradients, decorative dashboard mockups, fake portfolios or sample client work.
- Keep the homepage's contact form at the bottom, direct CTAs, and no hero eyebrow. Don't add more hero CTAs.
- Avoid decorative card grids, repeated vague headings, overused arrows and callouts with a shaded left border. Every component needs a purpose.
- Small animations are acceptable only when they explain state or help orientation; respect reduced motion.

## What to examine

Read the site as a small business owner seeking help. Review navigation clarity, service selection, content hierarchy, long-page pacing, form completion, focus states, contrast, touch targets and 200% zoom. Test 360/390px phones, tablet and desktop. Check sticky navigation against iOS safe areas and browser/status bars. Check every image for distortion and every interior-page transition for awkward spacing.

For every proposed change, explain the user problem, why the change helps, and how you tested it. Use references to inform decisions rather than copying a generic component library aesthetic. Do not add dependencies merely for decorative effects.

## Preserve SEO and working behavior

Keep current indexed URLs, unique page titles/descriptions, canonical URLs, H1 meaning, service FAQs, article dates, related links, sitemap and structured data. Do not replace the newly expanded service copy with vague slogans to shorten a layout. Propose a better reading hierarchy instead.

Keep favicon PNG/ICO links, production GA4 and lead events, and the working FormSubmit flow. Never send live form tests without approval. No production recrawl has been requested for this update.

## Handoff

Deliver a pull request with the reason for each meaningful change, screenshots of the actual result, test results and any remaining uncertainties. Do not claim a monetary valuation or "10/10" score as evidence of quality.
