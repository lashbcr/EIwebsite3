import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'enterpriseinsight.io',
      },
    ],
  },
};

export default nextConfig;
