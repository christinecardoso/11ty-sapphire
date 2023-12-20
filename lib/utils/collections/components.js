/** Creates a collection for all explicitly used tags */
module.exports = (collection) => {
  const components = new Set();
  collection
    .sections // assuming 'sections' is the correct property
    .forEach((section) => {
      if (section.data && section.data.components) {
        // Split the 'section.data.components' string into an array using a specific delimiter
        const sectionComponents = section.data.components.split(',');

        // Iterate through 'sectionComponents' and add each component to the set
        sectionComponents.forEach((component) => {
          const trimmedComponent = component.trim();
          if (trimmedComponent) {
            components.add(trimmedComponent);
          }
        });
      }
    });

  return [...components];
};
