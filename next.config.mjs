/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optional Windows sandbox compatibility; regular builds keep Next defaults.
  ...(process.env.LOCAL_BUILD_WORKERS === "1"
    ? {
        experimental: { workerThreads: true, useTypeScriptCli: false, cpus: 2 },
      }
    : {}),
};

export default nextConfig;
