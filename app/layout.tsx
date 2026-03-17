import "./globals.css"
import type { ReactNode } from "react"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "HYFEE VISUALS",
  description:
    "Cinematic Photography • Lightroom Presets • Professional Editing",

  openGraph: {
    title: "HYFEE VISUALS",
    description:
      "Cinematic Photography • Lightroom Presets • Professional Editing",
    url: "https://hyfee.vercel.app",
    siteName: "HYFEE VISUALS",
    images: [
      {
        url: "/share.jpg",
        width: 1200,
        height: 630,
        alt: "HYFEE VISUALS Lightroom Presets",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "HYFEE VISUALS",
    description:
      "Cinematic Photography • Lightroom Presets • Professional Editing",
    images: ["/share.jpg"],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}