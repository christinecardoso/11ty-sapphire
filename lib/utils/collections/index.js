const filtered = require("./filtered");
const tags = require("./tags");
const sections = require("./sections");

module.exports = {
  filtered,
  tags,
  sections,
  posts: function (collectionApi) {
    return collectionApi.getFilteredByGlob('src/posts/**/*.md')
      .sort((a, b) => a.date - b.date);
  },
};
