/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/0",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
