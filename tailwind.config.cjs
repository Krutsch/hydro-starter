const isProduction = process.env.NODE_ENV === "production";

module.exports = {
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
};
