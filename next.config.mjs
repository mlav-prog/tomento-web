const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  allowedDevOrigins: ["172.20.10.5", "192.168.0.104"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
