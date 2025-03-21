require("events").defaultMaxListeners = 20;

let userConfig;
try {
  userConfig = require("./v0-user-next.config");
} catch (e) {
  userConfig = undefined;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

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
