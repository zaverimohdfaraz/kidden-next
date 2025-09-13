/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [new URL('https://wp.dynamiclayers.net/**')],
    }
};

export default nextConfig;
