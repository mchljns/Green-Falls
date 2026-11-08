// greenfalls.co/mix: short link that downloads the Mix Assistant Mac installer (the church sound app).
// A plain redirect, marked noindex so search engines don't list it. Not in the sitemap.

const INSTALLER = "https://github.com/mchljns/AI-Audio-Engineer-/raw/stable/dist/Mix-Assistant-Installer.zip";

export function isMixLink(pathname: string) {
  return pathname === "/mix" || pathname === "/mix/";
}

export function mixLink() {
  return new Response(null, { status: 302, headers: { location: INSTALLER, "cache-control": "no-store", "x-robots-tag": "noindex, nofollow" } });
}
