const sharp = require("sharp");

module.exports = {
  mount: {
    public: "/",
    src: "/_dist_",
  },
  plugins: [
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-postcss",
    [
      "snowpack-plugin-sharp",
      {
        transformers: [
          {
            fileExt: ".webp",
            withPreview: (file) => sharp(file).webp({ quality: 1 }),
            apply: (file) =>
              sharp(file).webp({
                quality: 60,
              }),
          },
        ],
      },
    ],
    ["@snowpack/plugin-optimize", { preloadCSS: true }],
  ],
  alias: {
    "@src": "./src",
  },
};
