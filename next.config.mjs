const setConfig = (local, prod) => {
    return process.env.NODE_ENV === 'production' ? prod : local;
};

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Aplica basePath apenas em produção (GitHub Pages)
    basePath: setConfig('', '/logae-christmas-slider-2025'),
    assetPrefix: setConfig('', '/logae-christmas-slider-2025'),
};

export default nextConfig;
