/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    API_URL:"https://swapi.dev/api/"
  },
  experimental: {
    serverActions: true,
  },
  reactStrictMode:true
}

module.exports = nextConfig
