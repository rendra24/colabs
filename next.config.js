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
        domains: ["cdn.pixabay.com","colabs-cms.test"]
     },
     env: {
        URL_API: 'http://dev-cms.colabs.id/api/',
      },
  };
