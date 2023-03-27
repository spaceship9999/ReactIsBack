/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  output: 'export',
  assetPrefix: './',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
