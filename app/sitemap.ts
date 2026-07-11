import { MetadataRoute } from "next";
import { prompts } from "@/content/prompts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hyfee.vercel.app";

  const promptPages = prompts.map((prompt) => ({
    url: `${baseUrl}/prompts/${prompt.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/prompts`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...promptPages,
  ];
}