module.exports = {
  plugins: {
    "postcss-preset-env": {
      stage: false,
      features: {
        "nesting-rules": true,
      },
    },
    tailwindcss: {
      purge: {
        enabled: true,
        content: ["./src/**/*.html"],
      },
      darkMode: false,
      theme: {
        extend: {},
      },
      variants: {},
      plugins: [],
    },
    autoprefixer: {},
    cssnano: {
      preset: "advanced",
    },
  },
};
