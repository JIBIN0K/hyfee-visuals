import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "hyfee.vercel.app",
          },
        ],
        destination: "https://hyfeevisuals.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;