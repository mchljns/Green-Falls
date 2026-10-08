import type { Service } from "../lib/content";

/* Four inline diagrams, one per service. Text stays selectable and the site font applies because the SVG is inline.
   Landscape and portrait versions are both rendered; CSS shows one per breakpoint. */

function WebsiteFigure() {
  return <>
    <h2 id="diagram-website-heading">Three places you lose people before they ever reach you.</h2>
    <svg className="landscape" viewBox="0 0 880 256" role="img" aria-label="Four stops from a Google search to your inbox, and the three places a customer gives up: you are not on page one for the job, their town is not on the page, or the form breaks and nobody knows.">
  <defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#14758c"/></marker></defs>
  <g fontFamily="Libre Franklin Variable, Arial, sans-serif" fill="#20282a">
    <line x1="60" y1="150" x2="820" y2="150" stroke="#14758c" strokeWidth="3" markerEnd="url(#ah)"/>
    <g fontSize="15" fontWeight="650">
      <text x="90" y="62" textAnchor="middle">Google</text>
      <text x="330" y="62" textAnchor="middle">Your service page</text>
      <text x="570" y="62" textAnchor="middle">Your form</text>
      <text x="790" y="62" textAnchor="middle">Your inbox</text>
    </g>
    <g fontSize="12.5" fill="#52605c">
      <text x="90" y="84" textAnchor="middle">“roof repair near Portland”</text>
      <text x="330" y="84" textAnchor="middle">Says you do roof repair,</text><text x="330" y="101" textAnchor="middle">you cover their town, and</text><text x="330" y="118" textAnchor="middle">roughly what it costs</text>
      <text x="570" y="84" textAnchor="middle">Name, town, a few lines.</text><text x="570" y="101" textAnchor="middle">Nothing they’d have to go find</text>
      <text x="790" y="84" textAnchor="middle">You read it and reply</text>
    </g>
    <g stroke="#14758c" strokeWidth="2" fill="#fff">
      <circle cx="90" cy="150" r="13"/><circle cx="330" cy="150" r="13"/><circle cx="570" cy="150" r="13"/><circle cx="790" cy="150" r="13" fill="#c7d83f"/>
    </g>
    <g fontSize="12" fontWeight="650" fill="#14758c" textAnchor="middle"><text x="90" y="154.5">1</text><text x="330" y="154.5">2</text><text x="570" y="154.5">3</text></g>
    <text x="790" y="154.5" fontSize="12" fontWeight="650" fill="#20282a" textAnchor="middle">4</text>
    <g stroke="#20282a" strokeWidth="1.5">
      <line x1="210" y1="150" x2="210" y2="196"/><line x1="450" y1="150" x2="450" y2="196"/><line x1="680" y1="150" x2="680" y2="196"/>
    </g>
    <g fill="#20282a"><circle cx="210" cy="150" r="4"/><circle cx="450" cy="150" r="4"/><circle cx="680" cy="150" r="4"/></g>
    <g fontSize="12" textAnchor="middle">
      <text x="210" y="214" fontWeight="650">You lose them here</text><text x="210" y="231" fill="#52605c">you’re not on page one for the job</text>
      <text x="450" y="214" fontWeight="650">You lose them here</text><text x="450" y="231" fill="#52605c">their town isn’t on the page</text>
      <text x="680" y="214" fontWeight="650">You lose them here</text><text x="680" y="231" fill="#52605c">the form breaks and nobody knows</text>
    </g>
      </g>
</svg>
    <svg className="portrait" viewBox="0 0 360 560" role="img" aria-label="Four stops from a Google search to your inbox, and the three places a customer gives up: you are not on page one for the job, their town is not on the page, or the form breaks and nobody knows.">
  <defs><marker id="ahp" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#14758c"/></marker></defs>
  <g fontFamily="Libre Franklin Variable, Arial, sans-serif" fill="#20282a">
    <line x1="30" y1="22" x2="30" y2="536" stroke="#14758c" strokeWidth="3" markerEnd="url(#ahp)"/>
    <g stroke="#14758c" strokeWidth="2" fill="#fff"><circle cx="30" cy="36" r="13"/><circle cx="30" cy="176" r="13"/><circle cx="30" cy="316" r="13"/><circle cx="30" cy="456" r="13" fill="#c7d83f"/></g>
    <g fontSize="12" fontWeight="650" fill="#14758c" textAnchor="middle"><text x="30" y="40.5">1</text><text x="30" y="180.5">2</text><text x="30" y="320.5">3</text></g><text x="30" y="460.5" fontSize="12" fontWeight="650" textAnchor="middle">4</text>
    <g fontSize="15" fontWeight="650"><text x="58" y="41">Google</text><text x="58" y="181">Your service page</text><text x="58" y="321">Your form</text><text x="58" y="461">Your inbox</text></g>
    <g fontSize="12.5" fill="#52605c"><text x="58" y="61">“roof repair near Portland”</text><text x="58" y="201">Says you do roof repair, you cover</text><text x="58" y="217">their town, and roughly what it costs</text><text x="58" y="341">Name, town, a few lines. Nothing</text><text x="58" y="357">they’d have to go find</text><text x="58" y="481">You read it and reply</text></g>
    <g fill="#20282a"><circle cx="30" cy="110" r="4"/><circle cx="30" cy="250" r="4"/><circle cx="30" cy="390" r="4"/></g>
    <g stroke="#20282a" strokeWidth="1.5"><line x1="30" y1="110" x2="52" y2="110"/><line x1="30" y1="250" x2="52" y2="250"/><line x1="30" y1="390" x2="52" y2="390"/></g>
    <g fontSize="12"><text x="58" y="106" fontWeight="650">You lose them here</text><text x="58" y="122" fill="#52605c">you’re not on page one for the job</text><text x="58" y="246" fontWeight="650">You lose them here</text><text x="58" y="262" fill="#52605c">their town isn’t on the page</text><text x="58" y="386" fontWeight="650">You lose them here</text><text x="58" y="402" fill="#52605c">the form breaks and nobody knows</text></g>
  </g>
</svg>
    <figcaption>Somebody who gets this far wants to ask you something. A website project fixes all three spots, and at the end we fill in the form from a phone and watch it show up in your inbox.</figcaption>
  </>;
}

function EmailFigure() {
  return <>
    <h2 id="diagram-email-heading">When each email goes out, and what stops it.</h2>
    <svg className="landscape" viewBox="0 0 880 330" role="img" aria-label="A 30-day timeline. Signing up starts a welcome series of three emails. Buying on day 6 stops the rest of that series and starts a care email on day 8 and a reason to come back on day 30.">
  <defs><marker id="ahe" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#14758c"/></marker></defs>
  <g fontFamily="Libre Franklin Variable, Arial, sans-serif" fill="#20282a">
    <line x1="60" y1="300" x2="830" y2="300" stroke="#20282a" strokeWidth="1"/>
    <g stroke="#20282a" strokeWidth="1"><line x1="60" y1="296" x2="60" y2="304"/><line x1="237" y1="296" x2="237" y2="304"/><line x1="414" y1="296" x2="414" y2="304"/><line x1="591" y1="296" x2="591" y2="304"/><line x1="820" y1="296" x2="820" y2="304"/></g>
    <g fontSize="12" fill="#52605c" textAnchor="middle"><text x="60" y="322">Day 0</text><text x="237" y="322">Week 1</text><text x="414" y="322">Week 2</text><text x="591" y="322">Week 3</text><text x="820" y="322">Day 30</text></g>
    <g fontSize="12" fontWeight="650" fill="#14758c"><text x="60" y="52">Welcome series</text><text x="60" y="186">After a purchase</text></g>
    <line x1="60" y1="110" x2="313" y2="110" stroke="#14758c" strokeWidth="3"/>
    <g fill="#fff" stroke="#14758c" strokeWidth="2"><circle cx="60" cy="110" r="9"/><circle cx="85" cy="110" r="9"/><circle cx="136" cy="110" r="9"/></g>
    <circle cx="313" cy="110" r="9" fill="#fff" stroke="#20282a" strokeWidth="2" strokeDasharray="3 3"/>
    <g fontSize="13" fontWeight="650" textAnchor="middle"><text x="70" y="80" textAnchor="end">Signs up</text><text x="136" y="80">How to choose</text><text x="313" y="80">Still deciding?</text><text x="85" y="142">Welcome</text></g>
    <g fontSize="12" fill="#52605c" textAnchor="middle"><text x="136" y="96">day 3</text><text x="85" y="158">within the hour</text><text x="313" y="96">day 10 · doesn’t go out</text></g>
    <line x1="212" y1="240" x2="820" y2="240" stroke="#14758c" strokeWidth="3"/>
    <g fill="#fff" stroke="#14758c" strokeWidth="2"><circle cx="212" cy="240" r="9" fill="#c7d83f"/><circle cx="263" cy="240" r="9"/><circle cx="820" cy="240" r="9"/></g>
    <g fontSize="13" fontWeight="650"><text x="196" y="236" textAnchor="end">Buys</text><text x="263" y="268" textAnchor="middle">Care instructions</text><text x="780" y="268" textAnchor="middle">A reason to come back</text></g>
    <g fontSize="12" fill="#52605c"><text x="196" y="252" textAnchor="end">day 6</text><text x="263" y="284" textAnchor="middle">day 8</text><text x="780" y="284" textAnchor="middle">day 30</text></g>
    <path d="M212,231 L212,110" stroke="#20282a" strokeWidth="1.5" strokeDasharray="4 4"/>
    <line x1="212" y1="110" x2="304" y2="110" stroke="#20282a" strokeWidth="1.5" strokeDasharray="4 4"/>
    <line x1="207" y1="104" x2="217" y2="116" stroke="#20282a" strokeWidth="2"/><line x1="217" y1="104" x2="207" y2="116" stroke="#20282a" strokeWidth="2"/>
    <g fontSize="12" fill="#20282a"><text x="330" y="164" fontWeight="650">They bought on day 6, so the rest of the welcome emails stop.</text><text x="330" y="180" fill="#52605c">Nobody who just bought gets a reminder to buy.</text></g>
  </g>
</svg>
    <svg className="portrait" viewBox="0 0 360 520" role="img" aria-label="Emails in day order: welcome within the hour, how to choose on day 3, a purchase on day 6 which stops the day-10 reminder, care instructions on day 8, a reason to come back on day 30.">
  <g fontFamily="Libre Franklin Variable, Arial, sans-serif" fill="#20282a">
    <line x1="64" y1="30" x2="64" y2="500" stroke="#20282a" strokeWidth="1"/>
    <g fill="#fff" stroke="#14758c" strokeWidth="2"><circle cx="64" cy="40" r="9"/><circle cx="64" cy="110" r="9"/><circle cx="64" cy="180" r="9"/><circle cx="64" cy="250" r="9" fill="#c7d83f"/><circle cx="64" cy="320" r="9"/><circle cx="64" cy="400" r="9" stroke="#20282a" strokeDasharray="3 3"/><circle cx="64" cy="480" r="9"/></g>
    <g fontSize="11.5" fill="#52605c" textAnchor="end"><text x="48" y="44">Day 0</text><text x="48" y="114">Day 0</text><text x="48" y="184">Day 3</text><text x="48" y="254">Day 6</text><text x="48" y="324">Day 8</text><text x="48" y="404">Day 10</text><text x="48" y="484">Day 30</text></g>
    <g fontSize="14" fontWeight="650"><text x="86" y="45">Signs up</text><text x="86" y="115">Welcome</text><text x="86" y="185">How to choose</text><text x="86" y="255">Buys</text><text x="86" y="325">Care instructions</text><text x="86" y="405" fill="#52605c">Still deciding?</text><text x="86" y="485">A reason to come back</text></g>
    <g fontSize="12" fill="#52605c"><text x="86" y="132">within the hour</text><text x="86" y="272">the rest of the welcome emails stop here</text><text x="86" y="422">doesn’t go out · they already bought</text></g>
    <line x1="59" y1="395" x2="69" y2="405" stroke="#20282a" strokeWidth="2"/><line x1="69" y1="395" x2="59" y2="405" stroke="#20282a" strokeWidth="2"/>
  </g>
</svg>
    <figcaption>Every email has three settings: what starts it, how long it waits, and what stops it. We write all three down before anything goes out.</figcaption>
  </>;
}

function PlanFigure() {
  return <>
    <h2 id="diagram-plan-heading">Ninety days, in order, and who does what.</h2>
    <svg className="landscape" viewBox="0 0 880 250" role="img" aria-label="A twelve-week plan. Weeks 1 to 2: make sure inquiries get to you, done by Green Falls. Weeks 3 to 8: answer the questions customers ask, done together. Weeks 9 to 12: decide whether to pay for ads, based on the numbers, done by you. Reviews at weeks 4, 8 and 12.">
  <g fontFamily="Libre Franklin Variable, Arial, sans-serif" fill="#20282a">
    <g stroke="#e4e9e6" strokeWidth="1"><line x1="150" y1="40" x2="150" y2="200"/><line x1="208" y1="40" x2="208" y2="200"/><line x1="266" y1="40" x2="266" y2="200"/><line x1="324" y1="40" x2="324" y2="200"/><line x1="382" y1="40" x2="382" y2="200"/><line x1="440" y1="40" x2="440" y2="200"/><line x1="498" y1="40" x2="498" y2="200"/><line x1="556" y1="40" x2="556" y2="200"/><line x1="614" y1="40" x2="614" y2="200"/><line x1="672" y1="40" x2="672" y2="200"/><line x1="730" y1="40" x2="730" y2="200"/><line x1="788" y1="40" x2="788" y2="200"/><line x1="846" y1="40" x2="846" y2="200"/></g>
    <g fontSize="11.5" fill="#52605c" textAnchor="middle"><text x="179" y="32">Week 1</text><text x="353" y="32">Week 4</text><text x="585" y="32">Week 8</text><text x="817" y="32">Week 12</text></g>
    <rect x="150" y="54" width="116" height="34" fill="#c7d83f"/><text x="276" y="76" fontSize="13" fontWeight="650">Make sure inquiries get to you</text>
    <rect x="266" y="104" width="348" height="34" fill="#202f2b"/><text x="278" y="126" fontSize="13" fontWeight="650" fill="#f8faf7">Answer the questions customers ask</text>
    <rect x="614" y="154" width="232" height="34" fill="#e4e9e6"/><text x="626" y="176" fontSize="13" fontWeight="650">Decide whether to pay for ads</text>
    <g fontSize="12.5" textAnchor="end"><text x="136" y="76" fontWeight="650">Us</text><text x="136" y="126" fontWeight="650">You + us</text><text x="136" y="176" fontWeight="650">You</text></g>
    <g fontSize="11" fill="#52605c" textAnchor="end"><text x="136" y="91">form, delivery, who replies</text><text x="136" y="141">service pages, listings</text><text x="136" y="191">based on the numbers</text></g>
    <g fill="#14758c"><path d="M382,214 l7,-7 l7,7 l-7,7 z"/><path d="M614,214 l7,-7 l7,7 l-7,7 z"/><path d="M846,214 l7,-7 l7,7 l-7,7 z"/></g>
    <g fontSize="11.5" fill="#14758c" fontWeight="650" textAnchor="middle"><text x="382" y="238">Review</text><text x="614" y="238">Review</text><text x="846" y="238">Review</text></g>
      </g>
</svg>
    <svg className="portrait" viewBox="0 0 360 330" role="img" aria-label="A twelve-week plan in three parts, each with an owner, and reviews at weeks 4, 8 and 12.">
  <g fontFamily="Libre Franklin Variable, Arial, sans-serif" fill="#20282a">
    <g stroke="#e4e9e6"><line x1="20" y1="28" x2="20" y2="214"/><line x1="102.5" y1="28" x2="102.5" y2="214"/><line x1="212.5" y1="28" x2="212.5" y2="214"/><line x1="350" y1="28" x2="350" y2="214"/></g>
    <g fontSize="11" fill="#52605c"><text x="22" y="20">Week 1</text><text x="104" y="20">Week 4</text><text x="214" y="20">Week 8</text><text x="350" y="20" textAnchor="end">Week 12</text></g>
    <rect x="20" y="36" width="55" height="30" fill="#c7d83f"/><text x="20" y="84" fontSize="13" fontWeight="650">Make sure inquiries get to you</text><text x="20" y="99" fontSize="11.5" fill="#52605c">Us · form, delivery, who replies</text>
    <rect x="75" y="112" width="165" height="30" fill="#202f2b"/><text x="20" y="160" fontSize="13" fontWeight="650">Answer the questions customers ask</text><text x="20" y="175" fontSize="11.5" fill="#52605c">You + us · service pages, listings</text>
    <rect x="240" y="188" width="110" height="30" fill="#e4e9e6"/><text x="20" y="236" fontSize="13" fontWeight="650">Decide whether to pay for ads</text><text x="20" y="251" fontSize="11.5" fill="#52605c">You · based on the numbers</text>
    <g fill="#14758c"><path d="M102.5,290 l6,-6 l6,6 l-6,6 z"/><path d="M212.5,290 l6,-6 l6,6 l-6,6 z"/><path d="M350,290 l6,-6 l6,6 l-6,6 z"/></g>
    <text x="20" y="294" fontSize="11.5" fill="#14758c" fontWeight="650">Reviews</text>
    <text x="20" y="318" fontSize="11" fill="#52605c">We count visits and real inquiries, not rankings.</text>
  </g>
</svg>
    <figcaption>At each review we count visits and real inquiries, not rankings. Ads come last on purpose. Pay for visitors before the form works and you’re paying to send more people to the same dead end.</figcaption>
  </>;
}

function AiFigure() {
  return <>
    <h2 id="diagram-ai-heading">A person reads every reply before it goes out.</h2>
    <svg className="portrait" viewBox="0 0 400 480" role="img" aria-label="A customer writes in. The AI writes a first draft, only from answers you have signed off on. If it actually knows the answer, a person checks it, fixes it and sends it. If not, a person answers and the AI does not guess. A person sends every reply.">
  <defs><marker id="aha" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#14758c"/></marker></defs>
  <g fontFamily="Libre Franklin Variable, Arial, sans-serif" fill="#20282a" fontSize="13">
    <rect x="110" y="10" width="180" height="44" fill="#fff" stroke="#a7b8ad"/><text x="200" y="37" textAnchor="middle" fontWeight="650">A customer writes in</text>
    <line x1="200" y1="54" x2="200" y2="86" stroke="#14758c" strokeWidth="2" markerEnd="url(#aha)"/>
    <rect x="68" y="88" width="264" height="62" fill="#e7f0f1" stroke="#8da8af"/><text x="200" y="113" textAnchor="middle" fontWeight="650">The AI writes a first draft</text><text x="200" y="133" textAnchor="middle" fill="#52605c" fontSize="12">only from answers you’ve signed off on</text>
    <line x1="200" y1="150" x2="200" y2="182" stroke="#14758c" strokeWidth="2" markerEnd="url(#aha)"/>
    <path d="M200,186 L310,236 L200,286 L90,236 z" fill="#fff" stroke="#20282a" strokeWidth="1.5"/><text x="200" y="231" textAnchor="middle" fontWeight="650">Does it actually</text><text x="200" y="248" textAnchor="middle" fontWeight="650">know the answer?</text>
    <path d="M90,236 L105,236 L105,330" fill="none" stroke="#14758c" strokeWidth="2" markerEnd="url(#aha)"/><text x="112" y="300" fill="#14758c" fontWeight="650" fontSize="12">yes</text>
    <path d="M310,236 L295,236 L295,330" fill="none" stroke="#14758c" strokeWidth="2" markerEnd="url(#aha)"/><text x="268" y="300" fill="#14758c" fontWeight="650" fontSize="12">no</text>
    <rect x="30" y="334" width="150" height="62" fill="#20282a"/><rect x="30" y="334" width="5" height="62" fill="#c7d83f"/><text x="110" y="358" textAnchor="middle" fill="#f8faf7" fontWeight="650">A person checks it,</text><text x="110" y="376" textAnchor="middle" fill="#f8faf7" fontWeight="650">fixes it, sends it</text>
    <rect x="220" y="334" width="150" height="62" fill="#fff" stroke="#a7b8ad"/><text x="295" y="358" textAnchor="middle" fontWeight="650">A person answers</text><text x="295" y="376" textAnchor="middle" fill="#52605c" fontSize="12">the AI doesn’t guess</text>
    <path d="M105,396 L105,420 L200,420 L200,444" fill="none" stroke="#14758c" strokeWidth="2" markerEnd="url(#aha)"/>
    <path d="M295,396 L295,420 L200,420" fill="none" stroke="#14758c" strokeWidth="2"/>
    <text x="200" y="468" textAnchor="middle" fontWeight="650">A person sends every reply</text>
  </g>
</svg>
    <figcaption>Most of the setup work is that diamond. We decide what the AI is allowed to use, then throw questions at it that it shouldn’t answer and see what it does.</figcaption>
  </>;
}

const figures: Record<Service["artifact"], () => React.ReactElement> = { website: WebsiteFigure, email: EmailFigure, plan: PlanFigure, ai: AiFigure };

export function ServiceDiagram({ artifact }: { artifact: Service["artifact"] }) {
  const Figure = figures[artifact];
  return <section className="section section-tone-blue service-diagram-section" aria-labelledby={`diagram-${artifact}-heading`}><div className="shell"><figure className={`service-diagram diagram-${artifact}`}><Figure /></figure></div></section>;
}
