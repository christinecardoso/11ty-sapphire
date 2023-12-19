const filtered = require("./filtered");
const tags = require("./tags");
const tags = require("./sections");
const utils = require("../functions/index");

module.exports = {
  filtered,
  tags,
  sections,
  posts: function (collectionApi) {
    return collectionApi.getFilteredByGlob('src/posts/**/*.md')
      .sort((a, b) => a.date - b.date);
  },
};
