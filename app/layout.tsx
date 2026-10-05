import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/standard.css";
import "@fontsource-variable/libre-franklin";
import "./globals.css";
import "./studio.css";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import { StructuredData } from "./components/StructuredData";

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#f8faf7", colorScheme: "light" };

export const metadata: Metadata = {
  title: {
    default: "Maine Website Design & Email Marketing | Green Falls Co.",
    template: "%s | Green Falls Co.",
  },
  description: "Websites, customer email, practical AI and clear marketing direction for independent businesses across the Northeast.",
  metadataBase: new URL("https://greenfalls.co"),
  robots: { index: true, follow: true },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/favicon.png", sizes: "192x192", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StructuredData data={{ "@context": "https://schema.org", "@type": ["Organization", "ProfessionalService"], "@id": "https://greenfalls.co/#organization", name: "Green Falls Co.", url: "https://greenfalls.co", logo: "https://greenfalls.co/favicon.svg", image: "https://greenfalls.co/images/green-falls-social.png", email: "info@greenfalls.co", description: "Websites, customer email, practical AI and clear marketing direction for independent businesses.", areaServed: ["Maine", "New England", "Northeastern United States"], knowsAbout: ["Website design", "Search engine optimization", "Lifecycle marketing", "Email marketing", "Artificial intelligence implementation", "Marketing strategy"] }} />
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
