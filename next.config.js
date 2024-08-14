/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      "images.pexels.com",
      "www.pexels.com",
      "m.media-amazon.com",
    ].map((hostname) => {
      return {
        protocol: "https",
        hostname,
        port: "",
      };
    }),
  },
};

module.exports = nextConfig;
