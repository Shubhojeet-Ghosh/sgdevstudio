/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "elysium-chat-public.s3.ap-south-1.amazonaws.com",
    ],
  },
};

export default nextConfig;
