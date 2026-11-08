// greenfalls.co/mix: password-protected download for Mix Assistant, the church sound app.
// The form on app/mix/page.tsx posts here. The password is the Worker secret MIX_PASSWORD; with
// no secret set, the download stays locked.

const INSTALLER = "https://github.com/mchljns/AI-Audio-Engineer-/raw/stable/dist/Mix-Assistant-Installer.zip";
export const MIX_DOWNLOAD_PATH = "/mix/download";

// Constant-time comparison so response timing doesn't hint at how much of a guess was right.
function matches(given: string, expected: string) {
  const a = new TextEncoder().encode(given);
  const b = new TextEncoder().encode(expected);
  let diff = a.length ^ b.length;
  for (let i = 0; i < Math.max(a.length, b.length); i++) diff |= (a[i] ?? 0) ^ (b[i] ?? 0);
  return diff === 0;
}

function goTo(location: string) {
  return new Response(null, { status: 303, headers: { location, "cache-control": "no-store", "x-robots-tag": "noindex" } });
}

export async function handleMixDownload(request: Request, expected: string | undefined): Promise<Response> {
  if (request.method !== "POST") return goTo("/mix");
  let given = "";
  try {
    given = String((await request.formData()).get("password") ?? "");
  } catch {
    // Not a form post: treat as a wrong password.
  }
  if (expected && given.trim() && matches(given.trim(), expected.trim())) return goTo(INSTALLER);
  return goTo("/mix?wrong=1");
}
