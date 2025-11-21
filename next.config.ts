import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'images.pixabay.com' },
    ],
  },
  async redirects() {
    return [
      { source: '/', destination: '/landing-page', permanent: false },
    ];
  },
  webpack(config: Configuration) {
    if (config.module) {
      config.module.rules?.push({
        test: /\.(jsx|tsx)$/,
        exclude: [/node_modules/],
        use: [{ loader: '@dhiwise/component-tagger/nextLoader' }],
      });
    }
    return config;
  },
  turbopack: {}, // keep to silence Turbopack warning
};

export default nextConfig;
