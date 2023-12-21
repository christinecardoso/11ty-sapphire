const filtered = require("./filtered");
const tags = require("./tags");
const sections = require("./sections");
const components = require("./components");
const order = require("./order");
const folder = require("./folder");

module.exports = {
  // filtered,
  // tags,
  components,
  sections,
  folder,
  order,
  posts: function (collectionApi) {
    return collectionApi.getFilteredByGlob('src/posts/**/*.md')
      .sort((a, b) => a.date - b.date);
  },
};
