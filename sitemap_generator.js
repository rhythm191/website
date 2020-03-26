const sitemap = require("nextjs-sitemap-generator");

sitemap({
  baseUrl: "https://rhyztech.net",
  pagesDirectory: __dirname + "\\pages",
  targetDirectory: "out/",
});
