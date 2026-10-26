/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/gc-capital-framer",
  assetPrefix: "/gc-capital-framer/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
