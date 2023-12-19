const currentDate = require("./currentDate");
const datetime = require("./datetime");
const icon = require("./icon");
const randomId = require("./randomId");
const youtube = require("./youtube");
const path = require('path');
const Image = require("@11ty/eleventy-img");

// Image shortcode config
let defaultSizesConfig = "(min-width: 1200px) 1400px, 100vw";

module.exports = {
  currentDate,
  datetime,
  icon,
  randomId,
  youtube,
  year: () => `${new Date().getFullYear()}`,
  image: async function (src, alt, className = "", sizes = defaultSizesConfig) {
    console.log(`Generating image(s) from:  ${src}`);
    let metadata = await Image(src, {
      widths: [800, 1500],
      formats: ["webp", "png", "svg"],
      urlPath: "../assets/images/",
      outputDir: "./_site/assets/images/",
      filenameFormat: function (id, src, width, format, options) {
        const extension = path.extname(src);
        const name = path.basename(src, extension);
        return `${name}-${width}w.${format}`;
      }
    });

    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
      class: className
    };

    return Image.generateHTML(metadata, imageAttributes);
  },
};
