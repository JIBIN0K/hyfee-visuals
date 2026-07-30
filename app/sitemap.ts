import { MetadataRoute } from "next";
import { prompts } from "@/content/prompts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hyfee.vercel.app";
  const lastModified = new Date();

  return [
    // Home
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // Prompt Library
    {
      url: `${baseUrl}/prompts`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },

    // Legal Pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },

    // Prompt Pages
    ...prompts.map((prompt) => ({
      url: `${baseUrl}/prompts/${prompt.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
  ];
}