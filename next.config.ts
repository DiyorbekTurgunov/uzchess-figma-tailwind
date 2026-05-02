import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '/uploads/**',
            }
        ],
        unoptimized: true,
        dangerouslyAllowLocalIP: true
    },

    transpilePackages: [
        '@mediapipe/hands',
        '@mediapipe/camera_utils'
    ],
};

export default nextConfig;