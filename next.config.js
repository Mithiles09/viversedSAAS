/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["placeholder.svg", "blob.v0.dev"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placeholder.svg",
      },
      {
        protocol: "https",
        hostname: "blob.v0.dev",
      },
    ],
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
}

module.exports = nextConfig
