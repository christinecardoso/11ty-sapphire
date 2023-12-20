/** Creates a collection for all explicitly used tags */
module.exports = function(collection) {
  // Initialize a set to store unique components
  let components = [];

  // Iterate through each section in the 'sections' collection
  collection.getFilteredByTag("sections").forEach(function(section) {
    // Check if 'data.components' exists in the section
    if (section.data && section.data.components) {
      // Split the 'data.components' string into an array using a specific delimiter
      let sectionComponents = section.data.components.split(',');

      // Iterate through 'sectionComponents' and add each component to the set
      sectionComponents.forEach(function(component) {
        component = component.trim();
        // Check if component is not empty and not already in the array
        if (component && components.indexOf(component) === -1) {
          components.push(component);
        }
      });
    }
  });

  // Return the 'components' array
  return components;
};
