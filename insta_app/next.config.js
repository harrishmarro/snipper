/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['encrypted-tbn1.gstatic.com','media1.popsugar-assets.com','lh3.googleusercontent.com'],
  }
}

module.exports = nextConfig
