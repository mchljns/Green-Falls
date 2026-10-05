# 21st.dev design patterns adapted for Green Falls

These are original implementations adapted to the existing React/CSS stack from the documented patterns below, not verbatim installs. No third-party source was copied. No new animation dependency was added.

- Tabs Subtle — Micka Touillaud / Fluid Functionalism: https://21st.dev/@micka_design/components/tabs-subtle . Applied compact horizontal selection to example browsing. Added ARIA tabs, arrow/Home/End keyboard handling and persistent mounted panels. Proximity effects omitted.
- Segmented Control — Özer / interior.dev: https://21st.dev/@ddoemonn/components/segmented-control . Applied a native radio-based Full width / Phone selector to each mockup. Container queries change layout inside phone previews.
- Sticky Header — Özer / interior.dev: https://21st.dev/@ddoemonn/components/sticky-header . Adapted the compact-on-scroll principle to Green Falls site navigation, preserving the approved logo and accessible mobile menu.

Email mockups preserve email-appropriate static design; preview controls sit outside the email artwork.

## Additional component comparison

The published visual previews of these alternatives were opened and inspected:

| Reference | Decision for Green Falls |
|---|---|
| [Gallery with image cards — Shadcnblocks](https://21st.dev/@shadcnblockscom/components/gallery4) | Do not replace the work viewer. Its carousel and overlaid case-study text suit thumbnail browsing; our long, text-rich mockups need an unobstructed canvas. |
| [Image Gallery — PrebuiltUI](https://21st.dev/@prebuiltui/components/image-gallery) | Do not use the narrow image-strip treatment. It would crop the very design details visitors need to judge. |
| [FAQ Accordion Card — Cnippet](https://21st.dev/@cnippet.dev/components/faq-accordion-card) | Retain the clear disclosure rows, but do not add another enclosing card, shadow or billing-style CTA. Green Falls already has a section heading and a contact path. |
| [Basic Accordion — felipemenezes098](https://21st.dev/@felipemenezes098/components/accordion-01) | Its restrained divided-row layout supports the current direction. Retain the existing original native details implementation rather than importing a new component. |

Also reviewed [21st’s image-gallery guidance](https://21st.dev/blog/react-image-gallery-components) and browsed the mobile-navbar collection. No additional third-party source was installed. Current photo markup reserves image space and lazy-loads the below-fold portfolio imagery.

The Tailark FAQ URL redirected to a component-not-found page; it was not used as an implementation reference.
