const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export", // ✅ Required for static exports
  basePath: isProd ? "/crivscm" : "", // ✅ Fixes paths for GitHub Pages
  assetPrefix: isProd ? "/crivscm/" : "", // ✅ Ensures static files load correctly
  images: {
    unoptimized: true, // ✅ Fixes image loading issue
  },
  trailingSlash: true, // ✅ Ensures correct routing on GitHub Pages
};

module.exports = nextConfig;

// Merge user config if it exists
let userConfig;
try {
  userConfig = require("./v0-user-next.config");
} catch (e) {
  userConfig = undefined;
}

if (userConfig) {
  mergeConfig(nextConfig, userConfig);
}

function mergeConfig(baseConfig, userConfig) {
  for (const key in userConfig) {
    if (typeof baseConfig[key] === "object" && !Array.isArray(baseConfig[key])) {
      baseConfig[key] = {
        ...baseConfig[key],
        ...userConfig[key],
      };
    } else {
      baseConfig[key] = userConfig[key];
    }
  }
}

module.exports = nextConfig;
