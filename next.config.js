/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,  
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "176.126.166.222",
        port: "1337",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
