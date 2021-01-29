const isProduction = process.env.NODE_ENV === "production";

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
        enabled: isProduction,
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
    ...(isProduction
      ? {
          cssnano: {
            preset: "advanced",
          },
        }
      : {}),
  },
};
