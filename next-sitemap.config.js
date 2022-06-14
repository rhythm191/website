/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://rhyztech.net",
  generateRobotsTxt: true, // (optional)
  outDir: "out",
};

module.exports = config;
