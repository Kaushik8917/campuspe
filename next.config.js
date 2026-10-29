/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Lint locally with `npm run lint`; don't let a lint warning block a Vercel deploy.
  eslint: { ignoreDuringBuilds: true },
};
module.exports = nextConfig;
