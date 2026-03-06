import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/universal-link-web",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
