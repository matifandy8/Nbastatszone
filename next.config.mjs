/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.nba.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "a57.foxsports.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  domains: ["a57.foxsports.com"],
};

export default nextConfig;
