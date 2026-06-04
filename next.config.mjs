const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Project page served at https://adivikramp.github.io/portfolio
  basePath: isProd ? "/portfolio" : "",
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    // next/image optimization is server-side; static export must serve raw files
    unoptimized: true,
  },
  // NOTE: custom headers() removed — not supported with output: "export".
  // GitHub Pages cannot set response headers anyway.
};

export default nextConfig;
