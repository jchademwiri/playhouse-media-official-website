/** @type {import('next-sitemap').IConfig} */
const canonicalSiteUrl = 'https://www.playhousemedia.co.za';
const envSiteUrl = process.env.SITE_URL;

module.exports = {
  siteUrl:
    envSiteUrl && envSiteUrl.includes('playhousemedia.co.za')
      ? envSiteUrl
      : canonicalSiteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/dashboard/*', '/admin/*', '/api/*'],
};
