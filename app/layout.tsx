import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://fourthturning.capital"),
  title: "Fourth Turning Capital | Disciplined Capital. Enduring Value.",
  description:
    "Fourth Turning Capital is an independent investment and operating platform focused on productive assets, resilient enterprises, and the infrastructure of national renewal.",
  alternates: {
    canonical: "/",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
