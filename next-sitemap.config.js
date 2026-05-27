/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.playhousemedia.co.za',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/dashboard/*', '/admin/*', '/api/*'],
};
