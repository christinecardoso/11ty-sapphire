// Assuming you want to create a new post type 'sections'
const utils = require("../functions/index");

module.exports = function(collectionApi) {
  // Your collection logic here
  return collectionApi.getAll()
    .filter(item => item.url.includes("/vault/sections/"))
    .sort((a, b) => {
      const orderA = a.data.order || 0;
      const orderB = b.data.order || 0;
      return orderA - orderB;
    });

    // Group sections by version
    const groupedSections = {};
    sortedSections.forEach(section => {
      const version = section.data.version || 'default';
      if (!groupedSections[version]) {
        groupedSections[version] = [];
      }
      groupedSections[version].push(section);
    });

    return groupedSections;
};
