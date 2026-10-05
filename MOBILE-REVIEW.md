# Green Falls mobile usability revision

## What was wrong

The earlier pass checked whether content fit narrow screens, but left the mobile journey too long and repetitive. Full mockups interrupted the homepage and service pages. Preview controls consumed space without helping a phone user. Large gaps, repeated examples and contact explanations delayed useful actions.

## Changes

- Homepage: shorter introduction, smaller photograph, concise service rows and two clear links to the design examples. Full mockups moved to `/work`.
- Work: desktop retains tabs and width previews. Phones use a labeled native selector and a full-width design canvas, without nested scrolling or redundant size controls. The chosen example is reflected in the URL.
- Navigation: the phone header scrolls with the page. The menu expands in normal document flow, with large links and a stable close location, instead of covering content or requiring a second scroll area.
- Contact: the form precedes the longer next-step explanation on narrow screens. Repeated introduction text is removed on mobile; visible labels and optional website behavior remain.
- Density: reduced mobile section spacing, removed repeated service miniatures from the homepage, and kept headings and body copy readable.
- Service pages: link to relevant full work through compact visual previews rather than embedding a second long portfolio.

## Skills and research

1. [Anthropic frontend-design skill](https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md). Reviewed its source guidance on deliberate composition, content-led structure, restrained decoration and critique. Applied the principle that structure must communicate meaning rather than merely decorate a layout. Existing approved brand colors and letterforms remain authoritative.
2. [Vercel web-design-guidelines skill](https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md) and its [current review rules](https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md). Reviewed semantic controls, visible focus, meaningful navigation state, touch interactions and safe-area handling. Used native links and selection controls; removed mobile overlay interference. This is an applied review, not a claim of certification against every rule.
3. [W3C understanding reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow). Used one-direction reading as a practical constraint. The phone work canvas has no independent scrolling region.

External skills were researched and their relevant guidance applied to this site; they were not installed as persistent plugins. The existing Sites workflow still owns implementation and staging publication.

## Verification

Visually checked the homepage and expanding menu at 390 pixels, and the contact and work pages at 320 pixels. Followed the mobile menu to Work and used the native selector to switch to the welcome email. The resulting email layout remained readable without horizontal scrolling in the inspected viewport. Existing route/metadata tests are run before saving. A physical iPhone test is still required to verify actual Safari/device chrome, since this environment provides a browser preview rather than real iOS hardware.

Staging continues to disable indexing, analytics and sending contact messages. This revision does not establish production inbox delivery. Live greenfalls.co remains unchanged pending staging review.
