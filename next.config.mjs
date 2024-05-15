/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
      },
      {
        protocol: "https",
        hostname: "cdn.britannica.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/_header", // this path will be redirected to home
        destination: "/",
        permanent: true,
      },
      {
        source: "/_footer", // this path will be redirected to home
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
