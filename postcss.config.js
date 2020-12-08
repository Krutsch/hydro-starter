const postcssPresetEnv = require("postcss-preset-env");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
// const stylelint = require("stylelint"); // Currently broken because stylelint uses v7 of postcss

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: false,
      features: {
        "nesting-rules": true,
      },
    }),
    tailwindcss({
      purge: ["./**/*.ts"],
    }),
    // stylelint(),
    autoprefixer(),
  ],
};
