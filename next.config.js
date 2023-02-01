/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.cloudflare.com',
            },
        ],
    },
};

module.exports = nextConfig;
