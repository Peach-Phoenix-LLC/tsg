import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'grainy-gradients.vercel.app',
      },
      // @ts-ignore
      eslint: {
        ignoreDuringBuilds: true,
      },
      // @ts-ignore
      typescript: {
        ignoreBuildErrors: true,
      }
};

  export default nextConfig;
