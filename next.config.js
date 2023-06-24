/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zymkhjvldwzznxshgeet.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/thumbnail/**",
      },
    ],
  },
};

module.exports = nextConfig;
