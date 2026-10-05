import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

async function fetchPage(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders development preview metadata", async () => {
  const response = await fetchPage();

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(await response.text(), developmentPreviewMeta);
});

test("home hero uses the direct CTA without an eyebrow", async () => {
  const response = await fetchPage();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /You know your business/);
  assert.match(html, /Tell us what you need/);
  assert.doesNotMatch(html, /A clear path forward/);
  assert.doesNotMatch(html, /Green Falls · Baxter State Park/);
  assert.doesNotMatch(html, /business\.<br\/><span/);
  assert.match(html, /property="og:image" content="https:\/\/greenfalls\.co\/images\/green-falls-social\.png"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /rel="canonical" href="https:\/\/greenfalls\.co\/"/);
});

test("home hero headline uses one intentional text color", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /\.hero h1 span \{ color: inherit; \}/);
  assert.doesNotMatch(css, /\.hero h1 span \{ color: var\(--olive\); \}/);
});

test("contact page explains and renders every required next step", async () => {
  const response = await fetchPage("/contact");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /What would you like help with/);
  assert.match(html, /<input(?=[^>]*name="name")(?=[^>]*required)[^>]*>/);
  assert.match(html, /<input(?=[^>]*name="business")(?=[^>]*required)[^>]*>/);
  assert.match(html, /<input(?=[^>]*name="email")(?=[^>]*required)[^>]*>/);
  assert.match(html, /<input(?=[^>]*name="website")(?=[^>]*type="text")(?=[^>]*placeholder="greenfalls\.co")[^>]*>/);
  assert.doesNotMatch(html, /<input(?=[^>]*name="website")(?=[^>]*type="url")[^>]*>/);
  assert.match(html, /<textarea(?=[^>]*name="message")(?=[^>]*required)[^>]*>/);
  assert.match(html, /Send message/);
  assert.match(html, /We’ll reply by email\./);
  assert.doesNotMatch(html, /Open email to send/);
  assert.doesNotMatch(html, /This opens a draft in your email app/);
});

test("contact form submits to the approved inbox instead of opening an email app", async () => {
  const source = await readFile(new URL("../app/contact/ContactForm.tsx", import.meta.url), "utf8");
  assert.match(source, /https:\/\/formsubmit\.co\/ajax\/info@greenfalls\.co/);
  assert.match(source, /await fetch\(formEndpoint/);
  assert.match(source, /Thanks—your message has been sent/);
  assert.match(source, /"generate_lead"/);
  assert.doesNotMatch(source, /window\.location|mailto:hello@greenfalls\.co/);
});

test("production enables analytics and search indexing", async () => {
  const response = await fetchPage();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /G-MQG31KKRKC/);
  assert.doesNotMatch(html, /noindex/);
  assert.doesNotMatch(html, /nofollow/);

  const source = await readFile(new URL("../app/components/GoogleAnalytics.tsx", import.meta.url), "utf8");
  assert.match(source, /googletagmanager\.com\/gtag\/js/);
  const pageViews = await readFile(new URL("../app/components/AnalyticsPageViews.tsx", import.meta.url), "utf8");
  assert.match(pageViews, /page_path: pathname/);
});

test("privacy statement accurately discloses Google Analytics", async () => {
  const response = await fetchPage("/privacy");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Website analytics/);
  assert.match(html, /Google Analytics/);
  assert.match(html, /Google Analytics opt-out tool/);
});

test("about page uses the approved reversed brandmark below the hero", async () => {
  const response = await fetchPage("/about");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /class="origin-brandmark"/);
  assert.match(html, /fill="#F8FAF7"/);
  assert.match(html, /stroke="#2A9AB7"/);
});

test("service pages include canonical metadata and accurate structured data", async () => {
  const response = await fetchPage("/services/website-creation-seo-aeo");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /rel="canonical" href="https:\/\/greenfalls\.co\/services\/website-creation-seo-aeo"/);
  assert.match(html, /"@type":"Service"/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.match(html, /Test the actions that matter/);
  assert.doesNotMatch(html, /Fieldstone|Cedar Street|href="\/work"/);
});

test("insight pages expose article metadata without naming an individual", async () => {
  const response = await fetchPage("/insights/practical-ai-small-business");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /property="og:type" content="article"/);
  assert.match(html, /"@type":"Article"/);
  assert.match(html, /"name":"Green Falls Co\."/);
  assert.doesNotMatch(html, /Mike|Michael|Jones/);
});

test("missing routes render the branded 404 page", async () => {
  const response = await fetchPage("/this-page-does-not-exist");
  assert.equal(response.status, 404);
  const html = await response.text();
  assert.match(html, /Page not found/);
  assert.match(html, /Return home/);
});

test("llms file uses the approved contact address", async () => {
  const text = await readFile(new URL("../public/llms.txt", import.meta.url), "utf8");
  assert.match(text, /info@greenfalls\.co/);
  assert.doesNotMatch(text, /hello@greenfalls\.co/);
});

test("sitemap uses only supported change-frequency values", async () => {
  const response = await fetchPage("/sitemap.xml");
  assert.equal(response.status, 200);
  const xml = await response.text();
  assert.match(xml, /<changefreq>monthly<\/changefreq>/);
  assert.doesNotMatch(xml, /<changefreq>quarterly<\/changefreq>/);
});


test("homepage closes with a working contact form before the footer", async () => {
  const html = await (await fetchPage()).text();
  assert.match(html, /href="#contact"/);
  assert.match(html, /<section(?=[^>]*id="contact")/);
  assert.match(html, /<form(?=[^>]*class="contact-form")/);
  assert.match(html, /<input(?=[^>]*name="email")(?=[^>]*required)/);
  assert.ok(html.indexOf('<form') < html.indexOf('<footer'));
  assert.doesNotMatch(html, /Staging preview|staging form/);
  const source = await readFile(new URL("../app/contact/ContactForm.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(source, /stagingPreview/);
  const robots = await (await fetchPage("/robots.txt")).text();
  assert.match(robots, /Allow: \//);
  assert.doesNotMatch(robots, /Disallow: \//);
});
