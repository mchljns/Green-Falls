"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function AnalyticsPageViews({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const isInitialPage = useRef(true);

  useEffect(() => {
    if (isInitialPage.current) {
      isInitialPage.current = false;
      return;
    }

    window.gtag?.("config", measurementId, { page_path: pathname });
  }, [measurementId, pathname]);

  return null;
}
