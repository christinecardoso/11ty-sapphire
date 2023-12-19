const { EleventyRenderPlugin } = require("@11ty/eleventy");
const EleventyFetch = require("@11ty/eleventy-fetch");

const asyncFilters = require("./utils/async-filters/");
const filters = require("./utils/filters/");
const shortcodes = require("./utils/shortcodes/");
const pairedShortcodes = require("./utils/paired-shortcodes/");
const transforms = require("./utils/transforms/");
const markdown = require("./markdown");
const { prismJs, prismJsOptions } = require("./prismjs");

const applySharedConfig = (config) => {
  // Eleventy renderFile and renderTemplate
  config.addPlugin(EleventyRenderPlugin);

  // Prism.js syntax highlighting
  config.addPlugin(prismJs, prismJsOptions);

  // Async Filters (Nunjucks)
  Object.entries(asyncFilters).forEach(([filterName, filter]) => {
    config.addNunjucksAsyncFilter(filterName, filter);
  });

  // Filters
  Object.entries(filters).forEach(([filterName, filter]) => {
    config.addFilter(filterName, filter);
  });

  // Shortcodes
  Object.entries(shortcodes).forEach(([shortcodeName, shortcode]) => {
    config.addShortcode(shortcodeName, shortcode);
  });

  // Paired Shortcodes
  Object.entries(pairedShortcodes).forEach(([shortcodeName, shortcode]) => {
    config.addPairedShortcode(shortcodeName, shortcode);
  });

  // Transforms
  Object.entries(transforms).forEach(([transformName, transform]) => {
    config.addTransform(transformName, transform);
  });
};

/**
 * Ignore template files and ignore watching files
 * https://www.11ty.dev/docs/ignores/
 * https://www.11ty.dev/docs/watch-serve/#ignore-watching-files
 */
const ignoreFiles = (config, glob) => {
  config.ignores.add(glob);
  config.watchIgnores.add(glob);
};

module.exports = {
  applySharedConfig,
  ignoreFiles,
  markdown,
  EleventyFetch,
};
