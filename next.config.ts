import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins:["10.44.247.1","127.0.0.1","localhost"],
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
