// We can't directly import package.json in the browser, so we'll create a build-time solution
// This version should be updated during build process or manually maintained

export const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION || "Unknown";

// Alternative approach: you could use a build script to generate this file
// from package.json during build time
export const getBuildInfo = () => {
  return {
    version: APP_VERSION,
    buildTime: process.env.NEXT_PUBLIC_BUILD_TIME || new Date().toISOString(),
  };
};