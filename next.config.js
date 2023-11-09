/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['images.unsplash.com', 'res.cloudinary.com', 'cdn.sanity.io','cdn.shopify.com']
    },
    // async redirects() {
    //     return [
    //     {
    //         source: '/blog',
    //         destination: '/',
    //         permanent: true,
    //     },
    //     ]
    // },
}

module.exports = nextConfig
