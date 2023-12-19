// Assuming you want to create a new post type 'sections'
const utils = require("../functions/index");

module.exports = function (config) {
  // Filter items belonging to the 'sections' post type
  const allSections = collectionApi.getAll()
    .filter(item => item.url.includes('/sections/'));

  // Process or manipulate the 'sections' items as needed
  const groupedSections = utils.groupAndSortBy(allSections, 'version', 'order');

  // Return the processed data for the 'sections' post type
  return groupedSections;
};
