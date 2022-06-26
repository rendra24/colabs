/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || 'https://colabs.vercel.app',
    generateRobotsTxt: true, // (optional)
    // ...other options
  }
  
  export default config