import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://hyfee.vercel.app"),

  title: {
    default: "HYFEE VISUALS",
    template: "%s | HYFEE VISUALS",
  },

  description:
    "Discover premium AI prompts, Lightroom presets, cinematic photo editing, and creative visual resources by HYFEE VISUALS.",

  keywords: [
    "HYFEE VISUALS",
    "AI prompts",
    "Lightroom presets",
    "Photo editing",
    "Photography",
    "Cinematic editing",
    "Minecraft prompt",
    "Lumina prompt",
    "Fog prompt",
    "Monsoon prompt",
  ],

  authors: [
    {
      name: "HYFEE VISUALS",
    },
  ],

  openGraph: {
    title: "HYFEE VISUALS",
    description:
      "Premium AI prompts, Lightroom presets and cinematic editing resources.",
    url: "/",
    siteName: "HYFEE VISUALS",
    images: [
      {
        url: "/share.jpg",
        width: 1200,
        height: 630,
        alt: "HYFEE VISUALS",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "HYFEE VISUALS",
    description:
      "Premium AI prompts, Lightroom presets and cinematic editing resources.",
    images: ["/share.jpg"],
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}