/** Creates a collection for all explicitly used tags */
module.exports = function(collection) {
  // Initialize a set to store unique components
  const componentsSet = new Set();

  // Iterate through each item in the 'sections' collection
  collection.getAll().forEach(function(file) {
    // Check if 'data.components' exists in the front matter of the file
    if (file.data && file.data.components) {
      // Split the 'data.components' string into an array using a specific delimiter
      const sectionComponents = file.data.components.split(',');

      // Iterate through 'sectionComponents' and add each component to the set
      sectionComponents.forEach(function(component) {
        // Trim whitespaces and add to the set
        componentsSet.add(component.trim());
      });
    }
  });

  // Convert the set to an array
  const components = Array.from(componentsSet);

  // Return the 'components' array as the collection
  return components;
};
