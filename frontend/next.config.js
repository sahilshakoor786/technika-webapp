/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    apiBase: process.env.API_BASE,
  },
}

module.exports = nextConfig
