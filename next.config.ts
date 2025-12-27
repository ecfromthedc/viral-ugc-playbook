import type { NextConfig } from "next";
import path from "path";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/viral-ugc-playbook' : '',

  // Explicitly set the project root to avoid workspace inference issues
  reactStrictMode: true,

  // Fix workspace root warning by explicitly setting the root directory
  experimental: {
    turbo: {
      root: path.resolve(__dirname),
    },
  },

  images: {
    unoptimized: true, // Required for static export
  },

  // Optimize production builds
  ...(isProd && {
    compiler: {
      removeConsole: true, // Remove console.logs in production
    },
  }),
};

export default nextConfig;
