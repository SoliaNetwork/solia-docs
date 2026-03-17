/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel deployment optimized
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
