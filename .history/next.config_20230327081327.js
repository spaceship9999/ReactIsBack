/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  output: 'export',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
