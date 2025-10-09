/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/linktree.html",
        destination: "/linktree",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
