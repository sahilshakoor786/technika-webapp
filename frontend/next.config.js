/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    apiBase: process.env.API_BASE,
  },
  async redirects() {
    return [
      {
        source: "/register",
        destination: "/api/register",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
