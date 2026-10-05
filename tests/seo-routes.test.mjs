import assert from 'node:assert/strict';
import test from 'node:test';
import { default as worker } from '../dist/server/index.js';
const origin = 'https://greenfalls.co';
async function get(path) {
  return worker.fetch(new Request(origin + path, { headers: { accept: 'text/html' } }), {
    ASSETS: { fetch: async () => new Response('Not found', { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}
const decode = s => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'");
test('every sitemap page renders unique search metadata, one H1 and valid internal destinations', async () => {
  const xml = await (await get('/sitemap.xml')).text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => decode(m[1]));
  assert.equal(urls.length, new Set(urls).size);
  assert.ok(urls.length >= 20);
  const paths = new Set(urls.map(url => new URL(url).pathname));
  const titles = new Set(), descriptions = new Set();
  const bodies = new Map();
  for (const url of urls) {
    assert.equal(new URL(url).origin, origin);
    const path = new URL(url).pathname;
    const res = await get(path);
    assert.equal(res.status, 200, path);
    const html = await res.text(); bodies.set(path, html);
    const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
    const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
    assert.ok(title && description, `Missing metadata: ${path}`);
    assert.ok(!titles.has(title), `Duplicate title: ${path}`); titles.add(title);
    assert.ok(!descriptions.has(description), `Duplicate description: ${path}`); descriptions.add(description);
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1, path);
    const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
    assert.equal(canonical, new URL(path, origin).href, path);
    assert.doesNotMatch(html, /<meta[^>]*content="[^"]*noindex/);
    assert.match(html, /favicon\.png/);
    assert.doesNotMatch(html, /Mike|Michael Jones/);
  }
  for (const [path, html] of bodies) {
    for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
      const href = decode(match[1]);
      if (!href.startsWith('/') && !href.startsWith('#') && !href.startsWith(origin)) continue;
      const target = new URL(href, origin + path);
      if (target.origin !== origin) continue;
      assert.ok(paths.has(target.pathname), `Broken destination ${path} -> ${href}`);
      if (target.hash) assert.ok(bodies.get(target.pathname).includes(`id="${target.hash.slice(1)}"`), `Missing anchor ${path} -> ${href}`);
    }
  }
});
