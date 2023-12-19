const absoluteUrl = require("./absoluteUrl");
const debug = require("./debug");
const findBySlug = require("./findBySlug");
const formatDate = require("./formatDate");
const lastPostDate = require("./lastPostDate");
const wordCount = require("./wordCount");
const arrayUtils = require("./array");
const stringUtils = require("./string");
const replaceBusinessName = require("./replaceBusinessName");

module.exports = {
  absoluteUrl,
  debug,
  findBySlug,
  formatDate,
  lastPostDate,
  wordCount,
  replaceBusinessName,
  ...arrayUtils,
  ...stringUtils,
  // New modular filters
  generateRandomIdString: (prefix) => `${prefix}-${Math.floor(Math.random() * 1000000)}`,
  jsonify: (value) => JSON.stringify(value),
  prettyJsonify: (value) => JSON.stringify(value, null, 2),
  json: (content) => JSON.stringify(content),
  // Custom filter to get the last modified date of posts with a specific tag
  getLastModifiedDateForTag: (posts, tag) => {
    let lastModifiedDate = null;

    for (const post of posts) {
      if (post.data.tags && post.data.tags.includes(tag) && (!lastModifiedDate || post.date > lastModifiedDate)) {
        lastModifiedDate = post.date;
      }
    }

    return lastModifiedDate;
  },
  htmlDateString: (dateObj) => {
    const date = new Date(dateObj);
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  },
  readableDate: (dateObj) => {
    const date = new Date(dateObj);
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
  },
};
