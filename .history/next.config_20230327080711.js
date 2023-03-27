/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  output: 'export',
  trailingSlash : true,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
