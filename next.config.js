/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["randomuser.me", "www.w3.org", "image.tmdb.org"],
  },
};

module.exports = nextConfig;
