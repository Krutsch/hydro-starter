module.exports = {
  mount: {
    public: "/",
    src: "/_dist_",
  },
  plugins: [
    [
      "@snowpack/plugin-run-script",
      {
        cmd: "npm run lint:code && npm run lint:style",
        watch: 'watch "$1" src',
      },
    ],
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-sass",
    "@snowpack/plugin-webpack",
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
