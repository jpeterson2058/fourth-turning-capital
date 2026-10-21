import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://fourthturning.capital"),
  title: "Fourth Turning Capital | Disciplined Capital. Enduring Value.",
  description:
    "Fourth Turning Capital is an independent investment and operating platform focused on productive assets, resilient enterprises, and the infrastructure of national renewal.",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Fourth Turning Capital | Disciplined Capital. Enduring Value.",
    description:
      "An independent investment and operating platform focused on productive assets, resilient enterprises, and the infrastructure of national renewal.",
    siteName: "Fourth Turning Capital",
    images: [
      {
        url: "/ftc-hero-mountains.png",
        alt: "Mountain landscape representing Fourth Turning Capital's long-term investment philosophy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fourth Turning Capital | Disciplined Capital. Enduring Value.",
    description:
      "An independent investment and operating platform focused on productive assets, resilient enterprises, and the infrastructure of national renewal.",
    images: ["/ftc-hero-mountains.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Script
          id="cloudflare-web-analytics"
          strategy="afterInteractive"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token":"97035d2f728147b39a1e4cc93bce88df"}'
        />
      </body>
    </html>
  );
}
