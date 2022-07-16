/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['encrypted-tbn1.gstatic.com'],
  }
}

module.exports = nextConfig
