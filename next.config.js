/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

module.exports = {
    reactStrictMode: false,
    pwa: {
        dest: 'public',
        register:true,
        skipWaiting:true,
        disable: process.env.NODE_ENV === 'development',
        experimental: {
            outputStandalone: true,
            layers: false,
        },
    },
    images: {
        domains: ["cdn.pixabay.com","dev-cms.colabs.id"]
     },
     env: {
        URL_API: 'https://dev-cms.colabs.id/api/',
        SITE_URL: 'https://colabs.vercel.app',
      },
  };
