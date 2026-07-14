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
    "Discover premium AI prompts, Lightroom presets, cinematic photography, professional editing, and creative visual resources by HYFEE VISUALS.",

  applicationName: "HYFEE VISUALS",

  keywords: [
    "HYFEE",
    "HYFEE VISUALS",
    "AI prompts",
    "ChatGPT prompts",
    "GPT Image prompts",
    "Gemini prompts",
    "Flux prompts",
    "Lightroom presets",
    "Photography",
    "Cinematic photography",
    "Professional photo editing",
    "Photo editing",
    "Visual storytelling",
    "Minecraft prompt",
    "Lumina prompt",
    "Fog prompt",
    "Monsoon prompt",
    "Rest and Gold prompt",
  ],

  authors: [
    {
      name: "HYFEE VISUALS",
    },
  ],

  creator: "HYFEE VISUALS",

  publisher: "HYFEE VISUALS",

  category: "Photography",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hyfee.vercel.app",
    siteName: "HYFEE VISUALS",

    title: "HYFEE VISUALS",

    description:
      "Premium AI prompts, Lightroom presets and cinematic photography resources.",

    images: [
      {
        url: "/share.jpg",
        width: 1200,
        height: 630,
        alt: "HYFEE VISUALS",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "HYFEE VISUALS",

    description:
      "Premium AI prompts, Lightroom presets and cinematic photography resources.",

    images: ["/share.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  verification: {
    google: "", // Add Google Search Console verification code here later
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}