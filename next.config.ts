import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Redirect non-www to www (301 permanent redirect)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'uptaik.com',
          },
        ],
        destination: 'https://www.uptaik.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
