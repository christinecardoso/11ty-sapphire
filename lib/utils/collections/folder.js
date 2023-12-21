/** Creates a collection for all explicitly used folders */
module.exports = function(collection) {
  // Initialize a set to store unique folders
  const foldersSet = new Set();

  // Iterate through each item in the 'sections' collection
  collection.getAll().forEach(function(file) {
    // Check if 'data.folder' exists in the front matter of the file
    if (file.data && file.data.folder) {
      // Split the 'data.folder' string into an array using a specific delimiter
      const sectionFolders = file.data.folder.split(',');

      // Iterate through 'sectionFolders' and add each folder to the set
      sectionFolders.forEach(function(folder) {
        // Trim whitespaces and add to the set
        foldersSet.add(folder.trim());
      });
    }
  });

  // Convert the set to an array
  const folders = Array.from(foldersSet);

  // Return the 'folders' array as the collection
  return folders;
};
