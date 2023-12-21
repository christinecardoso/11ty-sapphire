/** Creates a collection for all explicitly used tags */
module.exports = function(collection) {
  // Initialize a set to store unique order
  const orderSet = new Set();

  // Iterate through each item in the 'sections' collection
  collection.getAll().forEach(function(file) {
    // Check if 'data.components' exists in the front matter of the file
    if (file.data && file.data.order) {
      // Split the 'data.components' string into an array using a specific delimiter
      const sectionOrder = file.data.order.split(',');

      // Iterate through 'sectionComponents' and add each component to the set
      sectionOrder.forEach(function(order) {
        // Trim whitespaces and add to the set
        orderSet.add(order.trim());
      });
    }
  });

  // Convert the set to an array
  const order = Array.from(orderSet);

  // Return the 'components' array as the collection
  return order;
};
