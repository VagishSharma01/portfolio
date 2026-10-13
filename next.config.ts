import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/work/document-intelligence",
        destination: "/work/doc-intel-agent",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
