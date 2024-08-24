/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.gstatic.com',
            pathname: '**',
          },
        ],
      },
}

module.exports = nextConfig
