import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://hyfee.vercel.app/sitemap.xml",
    host: "https://hyfee.vercel.app",
  };
}