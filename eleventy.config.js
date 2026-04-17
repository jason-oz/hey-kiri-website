import sitemap from "@quasibit/eleventy-plugin-sitemap";

export default function (eleventyConfig) {
  // Sitemap plugin
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: process.env.SITE_URL || "https://heykiri.io",
    },
  });

  // Passthrough copy
  eleventyConfig.addPassthroughCopy({ "src/assets/images": "assets/images" });
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });
  eleventyConfig.addPassthroughCopy({ "src/assets/favicon.svg": "favicon.svg" });
  eleventyConfig.addPassthroughCopy({ "src/assets/favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "src/assets/favicon.png": "favicon.png" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

  // Watch CSS source for Eleventy reloads
  eleventyConfig.addWatchTarget("src/assets/css/");

  // Filters
  eleventyConfig.addFilter("year", () => new Date().getFullYear());
  eleventyConfig.addFilter("isoDate", (date) => new Date(date).toISOString().slice(0, 10));
  eleventyConfig.addFilter("isActive", (currentUrl, linkUrl) => currentUrl === linkUrl);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
