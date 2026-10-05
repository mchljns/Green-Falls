import { SiteShell } from "../components/SiteShell";
import { PageHero } from "../components/PageBlocks";
import { ContactForm } from "./ContactForm";
import { createPageMetadata } from "../lib/metadata";

export const metadata = createPageMetadata({ title: "Discuss Your Website or Marketing Project", description: "Tell Green Falls Co. about your website, email or AI project. Share what you need and we’ll reply with questions and a clear next step.", path: "/contact" });

export default function ContactPage() {
  return <SiteShell><main id="main-content"><PageHero title="What would you like help with?" intro="Starting a project, improving something you already have or weighing your options? Tell us about it. We’ll reply by email." />
    <section className="contact-section dark-section"><div className="shell contact-grid"><div className="contact-copy"><h2>What happens next.</h2><ol><li><span>01</span><p>We’ll read the details and look at your website if you share one.</p></li><li><span>02</span><p>We’ll reply with any questions and let you know whether we can help.</p></li><li><span>03</span><p>If a call would help, we’ll arrange one to discuss the work and what you need from us.</p></li></ol><p className="direct-email">Rather email us directly? <a href="mailto:info@greenfalls.co">info@greenfalls.co</a></p></div><ContactForm /></div></section>
  </main></SiteShell>;
}
