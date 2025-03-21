/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",  // ✅ Ensures static export
  basePath: isProd ? "/crivscm" : "",  // ✅ Required for GitHub Pages
  assetPrefix: isProd ? "/crivscm/" : "",
  images: {
    unoptimized: true,  // ✅ Fixes images on GitHub Pages
  },
  trailingSlash: true,  // ✅ Ensures correct file paths
};

module.exports = nextConfig;
