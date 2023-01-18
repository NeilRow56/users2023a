/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["randomuser.me", "www.w3.org"],
  },
};

module.exports = nextConfig;
