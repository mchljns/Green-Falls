import { AnalyticsPageViews } from "./AnalyticsPageViews";
import { headers } from "next/headers";

export const googleAnalyticsId = "G-MQG31KKRKC";

export async function GoogleAnalytics() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  return (
    <>
      <script
        id="google-analytics"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: `(function () {
var trackingDisabled = location.hostname !== 'greenfalls.co';
var preference = new URLSearchParams(location.search).get('analytics');
trackingDisabled = trackingDisabled || preference === 'off';
try {
  if (preference === 'off') localStorage.setItem('greenfalls-analytics-disabled', '1');
  if (preference === 'on') localStorage.removeItem('greenfalls-analytics-disabled');
  trackingDisabled = trackingDisabled || preference === 'off' || localStorage.getItem('greenfalls-analytics-disabled') === '1';
} catch (_) {}
window['ga-disable-${googleAnalyticsId}'] = trackingDisabled;
if (trackingDisabled) return;
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');
var script = document.createElement('script');
script.async = true;
script.src = 'https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}';
document.head.appendChild(script);
})();` }}
      />
      <AnalyticsPageViews measurementId={googleAnalyticsId} />
    </>
  );
}
