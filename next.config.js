/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // SASS config
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // Webpack config
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  // Image config
  images: {
    remotePatterns: [
      {
        hostname: '*',
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

};

module.exports = nextConfig;
