import { Config } from "postcss-load-config";

const isProduction = process.env.NODE_ENV === "production";

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(isProduction
      ? {
          cssnano: {
            preset: "advanced",
          },
        }
      : {}),
  },
} satisfies Config;
