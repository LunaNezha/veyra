import "./globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import SiteNavigation from "@/components/main/site-navigation";
import ScrollButton from "@/components/scroll-button";
import Footer from "@/components/sections/footer";
import { MotionProvider } from "@/components/ui/motion";
import { site } from "@/lib/site";
import { createPageMetadata } from "@/lib/metadata";

const display = localFont({
  src: "./fonts/SpaceGrotesk.ttf",
  variable: "--font-display",
  display: "swap",
  weight: "300 700",
});
const mono = localFont({
  src: "./fonts/AzeretMono-Regular.ttf",
  variable: "--font-mono",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  // Include the homepage canonical URL, Open Graph fields, and Twitter card.
  // Content routes use the same helper to retain the image with their own copy.
  ...createPageMetadata({ path: "/" }),
  applicationName: site.name,
  category: "gaming",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  authors: [{ name: site.author.name, url: site.author.portfolio }],
  creator: site.author.name,
  publisher: site.name,
  manifest: "/site.webmanifest",
};
export const viewport: Viewport = {
  themeColor: "#0b0d0e",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${mono.variable}`}
    >
      <body>
        <MotionProvider>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <SiteNavigation />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <ScrollButton />
        </MotionProvider>
      </body>
    </html>
  );
}
