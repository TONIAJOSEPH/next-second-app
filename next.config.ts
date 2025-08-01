import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Export static HTML for GitHub Pages
  basePath: "/next-second-app",
  assetPrefix: "/next-second-app",
  trailingSlash: true, // Recommended for routing to work correctly
};

export default nextConfig;
