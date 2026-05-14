const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tell Next.js we have a custom turbopack setup
  turbopack: {
    // If you use specific webpack loaders, they go here now
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

module.exports = withMDX(nextConfig)