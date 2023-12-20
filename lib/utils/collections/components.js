/** Creates a collection for all explicitly used tags */
module.exports = (collection) => {
  const components = new Set();
  collection
    .getAll()
    .forEach((section) => {
      if (section.data && section.data.components) {
        for (const component of section.data.components) {
          components.add(component);
        }
      }
    });

  return [...components];
};
