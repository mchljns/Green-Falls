"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

const formEndpoint = "https://formsubmit.co/ajax/info@greenfalls.co";

export function ContactForm({ source = "contact" }: { source?: "home" | "contact" | "audience" }) {
  const [status, setStatus] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("company-site") || "").trim()) {
      setStatus("sent");
      form.reset();
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        signal: AbortSignal.timeout(20000),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: String(data.get("name") || "").trim(),
          business: String(data.get("business") || "").trim(),
          email: String(data.get("email") || "").trim(),
          website: String(data.get("website") || "").trim() || "Not provided",
          message: String(data.get("message") || "").trim(),
          help_with: String(data.get("area") || "Not sure"),
          _subject: "New Green Falls Co. website inquiry",
          _template: "table",
          _url: "https://greenfalls.co" + new URL(form.ownerDocument.URL).pathname,
          _captcha: "false",
        }),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok || !(result && typeof result === "object" && "success" in result && (result.success === true || result.success === "true"))) {
        throw new Error("The form service did not accept the message.");
      }

      form.reset();
      setStatus("sent");
      window.gtag?.("event", "generate_lead", {
        form_name: "contact",
        form_location: source,
        service_interest: String(data.get("area") || "Not sure"),
      });
    } catch {
      setStatus("error");
    }
  }

  return <form className="contact-form" onSubmit={handleSubmit} aria-busy={status === "sending"}>
    <h2 className="form-title">Tell us about your project.</h2>
    <p className="form-intro">A few plain sentences are enough. You don’t need to know which service you need.</p>
    <label className="form-honeypot" aria-hidden="true"><span>Leave this field empty</span><input name="company-site" tabIndex={-1} autoComplete="off" /></label>
    <div className="field-row"><label><span>Name</span><input name="name" autoComplete="name" required /></label><label><span>Business</span><input name="business" autoComplete="organization" required /></label></div>
    <div className="field-row"><label><span>Email</span><input name="email" type="email" autoComplete="email" required /></label><label><span>Website <small>Optional</small></span><input name="website" type="text" inputMode="url" autoComplete="url" autoCapitalize="none" spellCheck={false} placeholder="greenfalls.co" /></label></div>
    <label><span>What are you planning or trying to improve?</span><textarea name="message" rows={7} required placeholder="Tell us what’s working, what isn’t and what you’d like to change." /></label>
    <label><span>What would you like help with?</span><select name="area" defaultValue="Not sure"><option>Not sure</option><option>Website and search</option><option>Email marketing</option><option>Practical AI</option><option>Marketing consultation</option></select></label>
    <button className="button" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send message"}</button>
    <p className="form-note">We’ll reply by email. Please don’t send passwords or sensitive information.</p>
    {status === "sent" && <p className="form-status form-status-success" role="status">Thanks—your message has been sent. We’ll be in touch soon.</p>}
    {status === "error" && <p className="form-status form-status-error" role="alert">Something went wrong and your message wasn’t sent. Please try again, or email <a href="mailto:info@greenfalls.co">info@greenfalls.co</a>.</p>}
  </form>;
}
