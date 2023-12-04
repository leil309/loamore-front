/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'img.lostark.co.kr' },
      { protocol: 'https', hostname: 'imagedelivery.net' },
    ],
  },
};

module.exports = nextConfig;
