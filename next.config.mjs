/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/veyra",
  assetPrefix: "/veyra/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
