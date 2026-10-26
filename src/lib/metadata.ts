import type { Metadata } from "next";
import { site } from "@/lib/site";

export function createPageMetadata({
  title,
  description = site.description,
  path,
}: {
  title?: string;
  description?: string;
  path: `/${string}`;
}): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : site.title;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [site.socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [site.socialImage],
    },
  };
}
