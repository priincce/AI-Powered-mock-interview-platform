import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        // ✅ Correct command is ignoreBuildErrors
        ignoreBuildErrors: true,
    }
};

export default nextConfig;