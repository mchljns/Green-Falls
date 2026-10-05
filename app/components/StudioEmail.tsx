import { BrandLogo } from "./BrandLogo";

export function StudioEmail(){return <article className="studio-email" aria-label="Sample Green Falls newsletter">
  <header className="email-masthead"><BrandLogo/><span>Notes for your business</span></header>
  <div className="email-lead"><span>YOUR WEBSITE</span><h3>Try it as<br />a customer.</h3><p>Before you plan a redesign, find out what’s getting in the way.</p></div>
  <div className="email-body"><p>Open your website on your phone. Pick something a customer should be able to do, then follow it all the way through.</p><div className="email-task"><h4>Try requesting an estimate.</h4><p>Can you find the right service, see where the business works and send the details without getting stuck?</p></div><h4>Write down where you hesitate.</h4><p>A missing answer. A hard-to-tap button. A form that leaves you wondering if the message arrived. Those are useful things to fix.</p><p>You don’t need to start by changing everything.</p><a className="email-cta" href="/insights/website-does-not-match-your-work">Read the website checklist</a></div>
  <footer className="email-signoff"><p>Not sure where to start?</p><a href="mailto:info@greenfalls.co">Tell us what’s happening.</a><span>Green Falls Co. · Maine</span></footer>
</article>}
