/**
 * @type {import('next').NextConfig}
 */
const path = require('path');
const allowedImageWPDomain = new URL(process.env.NEXT_PUBLIC_WP_SITE_URL).hostname;

const nextConfig = {
  trailingSlash: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  /**
   * We specify which domains are allowed to be optimized.
   * This is needed to ensure that external urls can't be abused.
   * @see https://nextjs.org/docs/basic-features/image-optimization#domains
   */
  images: {
    domains: [allowedImageWPDomain, 'via.placeholder.com'],
  },
  swcMinify: false, // it should be false by default
};

module.exports = nextConfig;
