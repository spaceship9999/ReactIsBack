/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  output: 'export',
  distDir: 'out',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
