// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   trailingSlash: true,
// };

// export default nextConfig;




import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // Enables static export
  trailingSlash: true, // Ensures URLs end with /
  images: {
    unoptimized: true, // Allows <Image /> in static export
  },
};

export default nextConfig;

