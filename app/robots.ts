import { MetadataRoute } from "next";
import { professorData } from "@/data/professor";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `${professorData.siteUrl}/sitemap.xml`,
  };
}

