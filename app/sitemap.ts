import { MetadataRoute } from "next";
import { professorData } from "@/data/professor";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: professorData.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

