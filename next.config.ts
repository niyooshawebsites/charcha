import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wallpaperaccess.com",
        pathname: "/full/**",
      },
    ],
  },
};

export default nextConfig;
