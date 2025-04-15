/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // basePath: "/reikibeny-next",
  images: { unoptimized: true },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        has: [{ type: 'host', value: 'reikibeny.be' }],
        destination: 'https://www.reikibeny.be',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
