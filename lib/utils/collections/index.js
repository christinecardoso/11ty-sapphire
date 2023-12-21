const filtered = require("./filtered");
const tags = require("./tags");
const sections = require("./sections");
const components = require("./components");
const order = require("./order");

module.exports = {
  // filtered,
  // tags,
  components,
  sections,
  order,
  posts: function (collectionApi) {
    return collectionApi.getFilteredByGlob('src/posts/**/*.md')
      .sort((a, b) => a.date - b.date);
  },
};
