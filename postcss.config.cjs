const isProduction = process.env.NODE_ENV === "production";
const stylelint = require("./stylelint.config.cjs");
const tailwindcss = require("./tailwind.config.cjs");

module.exports = {
  plugins: {
    stylelint,
    "postcss-reporter": {},
    "postcss-preset-env": {
      stage: false,
      features: {
        "nesting-rules": true,
      },
    },
    tailwindcss,
    autoprefixer: {},
    ...(isProduction
      ? {
          cssnano: {
            preset: "advanced",
          },
        }
      : {}),
  },
};
