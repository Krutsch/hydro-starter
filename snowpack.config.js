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
            apply: (file) =>
              sharp(file).webp({
                quality: 60,
              }),
          },
        ],
      },
    ],
    "@snowpack/plugin-optimize",
  ],
  installOptions: {
    treeshake: true,
  },
  devOptions: {
    open: "none",
  },
  alias: {
    "@src": "./src",
  },
};
