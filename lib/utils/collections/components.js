/** Creates a collection for all explicitly used tags */
module.exports = (collection) => {
  const components = new Set();
  collection
    .getAll()
    .filter((sections) => post.data.components)
    .forEach((item) => {
      for (const component of item.data.components) {
        components.add(component);
      }
    });

  return [...components];
};
