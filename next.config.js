require("events").defaultMaxListeners = 20;

let userConfig;
try {
  userConfig = require("./v0-user-next.config");
} catch (e) {
  userConfig = undefined;
}

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isProd ? "/crivscm" : "",
  assetPrefix: isProd ? "/crivscm/" : "",
  images: {
    unoptimized: true, // ✅ Fixes images on GitHub Pages
  },
  trailingSlash: true, // ✅ Ensures paths work correctly
};

module.exports = nextConfig;
// Merge user config if it exists
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
