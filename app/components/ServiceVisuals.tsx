export type ServiceVisualType = "website" | "email" | "ai" | "plan";
type VisualProps = {headingLevel: 2 | 3};

function WebsiteVisual({headingLevel}:VisualProps) {
  const Heading=headingLevel===2?"h2":"h3";
  const StepHeading=headingLevel===2?"h3":"h4";
  return <div className="service-diagram diagram-website" role="group" aria-label="How a website helps someone become a customer">
    <div className="diagram-heading"><span>A customer’s visit</span><Heading className="diagram-title">From finding you<br />{" "}to getting in touch.</Heading></div>
    <ol className="visit-path">
      <li><span className="path-point" aria-hidden="true">1</span><div><StepHeading className="diagram-step-title">“Do you do what I need?”</StepHeading><p>Pages that explain your services and where you work.</p></div></li>
      <li><span className="path-point" aria-hidden="true">2</span><div><StepHeading className="diagram-step-title">“Is this right for me?”</StepHeading><p>Answers about the work, what to expect and how to start.</p></div></li>
      <li><span className="path-point" aria-hidden="true">3</span><div><StepHeading className="diagram-step-title">“How do I ask?”</StepHeading><p>A short form that sends the details to your inbox.</p></div></li>
    </ol>
    <div className="diagram-finish"><strong>An inquiry you can respond to.</strong><span>We test the full path, including delivery.</span></div>
  </div>;
}

function EmailVisual({headingLevel}:VisualProps) {
  const Heading=headingLevel===2?"h2":"h3";
  const StepHeading=headingLevel===2?"h3":"h4";
  return <div className="service-diagram diagram-email" role="group" aria-label="Three moments when a customer email can help">
    <div className="diagram-heading"><span>Customer emails</span><Heading className="diagram-title">Welcome, help and<br />{" "}invite them back.</Heading></div>
    <div className="email-moments">
      <article><div className="moment-time">When someone signs up</div><div className="moment-message"><StepHeading className="diagram-step-title">Welcome them.</StepHeading><p>Introduce the business and help them find what they need.</p></div></article>
      <article><div className="moment-time">After a purchase or visit</div><div className="moment-message"><StepHeading className="diagram-step-title">Help them get more from it.</StepHeading><p>Share care advice or check whether they need help.</p></div></article>
      <article><div className="moment-time">When there’s something relevant</div><div className="moment-message"><StepHeading className="diagram-step-title">Give them a reason to return.</StepHeading><p>Send news, a reminder or an offer that fits their interests.</p></div></article>
    </div>
    <p className="diagram-note">We plan who receives each email and when. Marketing messages go to people who asked to receive them.</p>
  </div>;
}

function AiVisual({headingLevel}:VisualProps) {
  const Heading=headingLevel===2?"h2":"h3";
  return <div className="service-diagram diagram-ai" role="group" aria-label="How AI can help prepare a reply while a person stays in control">
    <div className="diagram-heading"><span>One way AI can help</span><Heading className="diagram-title">AI prepares the reply.<br />{" "}You check and send.</Heading></div>
    <div className="ai-source-pair"><div><span>Customer’s question</span><p>“Can you help with my project?”</p></div><div><span>Your business information</span><p>Services, service area and booking details.</p></div></div>
    <div className="ai-connector" aria-hidden="true"><span>↓</span></div>
    <div className="ai-draft"><span>AI prepares a draft</span><p>It uses the information you’ve approved and asks for any missing details.</p></div>
    <div className="ai-connector" aria-hidden="true"><span>↓</span></div>
    <div className="ai-review"><strong>You review and send.</strong><p>Questions it can’t answer go to a person.</p></div>
  </div>;
}

function PlanVisual({headingLevel}:VisualProps) {
  const Heading=headingLevel===2?"h2":"h3";
  const StepHeading=headingLevel===2?"h3":"h4";
  return <div className="service-diagram diagram-plan" role="group" aria-label="What a marketing action plan can include">
    <div className="diagram-heading"><span>Your marketing plan</span><Heading className="diagram-title">Know what comes first.<br />{" "}And what can wait.</Heading></div>
    <div className="priority-sheet"><div className="priority-row"><div><span className="priority-tag">Fix first</span><StepHeading className="diagram-step-title">Make sure inquiries arrive.</StepHeading></div><p>Check the contact form and agree who replies.</p></div><div className="priority-row"><div><span className="priority-tag">Build next</span><StepHeading className="diagram-step-title">Answer the questions customers ask.</StepHeading></div><p>Use those questions to improve your service pages.</p></div><div className="priority-row"><div><span className="priority-tag">Then review</span><StepHeading className="diagram-step-title">Decide whether more promotion will help.</StepHeading></div><p>Look at visits and relevant inquiries before adding spending.</p></div></div>
    <p className="diagram-note">An example of how we set priorities. Your plan names the work, who’s responsible and when to review it.</p>
  </div>;
}

export function ServiceVisual({type,headingLevel=3}:{type:ServiceVisualType;headingLevel?:2|3}) {
  if(type==="website") return <WebsiteVisual headingLevel={headingLevel}/>;
  if(type==="email") return <EmailVisual headingLevel={headingLevel}/>;
  if(type==="ai") return <AiVisual headingLevel={headingLevel}/>;
  return <PlanVisual headingLevel={headingLevel}/>;
}
