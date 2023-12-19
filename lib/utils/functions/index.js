const slugify = require('slugify');
const path = require('path');
const Image = require("@11ty/eleventy-img");

function groupAndSortBy(collection, groupKey, sortKey) {
  const groupedItems = {};
  const sortedItems = collection.sort((a, b) => {
    const keyA = a.data[sortKey] || 0;
    const keyB = b.data[sortKey] || 0;

    if (keyA === keyB) {
      const groupKeyA = a.data[groupKey] || 'default';
      const groupKeyB = b.data[groupKey] || 'default';
      return groupKeyA.localeCompare(groupKeyB);
    }

    return keyA - keyB;
  });

  sortedItems.forEach(item => {
    const groupValue = item.data[groupKey] || 'default';
    if (!groupedItems[groupValue]) {
      groupedItems[groupValue] = [];
    }
    groupedItems[groupValue].push(item);
  });

  return groupedItems;
}

function filterAndCountTags(collection) {
  const tagsObject = {};

  collection.getAll().forEach(item => {
    if (!item.data.tags) return;

    const excludedTags = ["post", "all"];

    item.data.tags
      .filter(tag => !excludedTags.includes(tag))
      .forEach(tag => {
        const slugifiedName = slugify(tag, { lower: true });

        if (typeof tagsObject[tag] === 'undefined') {
          tagsObject[tag] = { count: 1, permalink: slugifiedName };
        } else {
          tagsObject[tag].count += 1;
          tagsObject[tag].permalink = slugifiedName;
        }
      });
  });

  return tagsObject;
}

function convertTagsObjectToArray(tagsObject) {
  return Object.keys(tagsObject).map(tag => ({
    name: tag,
    count: tagsObject[tag].count,
    permalink: `/tags/${tagsObject[tag].permalink}/`,
  }));
}

function sortTagsList(tagList) {
  return tagList.sort((a, b) => b.count - a.count);
}

module.exports = {
  groupAndSortBy,
  filterAndCountTags,
  convertTagsObjectToArray,
  sortTagsList,
};
