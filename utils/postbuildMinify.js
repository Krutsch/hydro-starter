// @snowpack/plugin-optimize, or esbuild to be precisely, does not collapse whitespace for HTML in JS. Minifying it will save a lot.
const glob = require("glob");
const fs = require("fs");
const minify = require("html-minifier").minify;

glob("build/**/*.{js,html}", {}, (err, files) => {
  if (err) {
    console.warn(err);
    process.exit(1);
  }

  files.forEach((filename) => {
    const fileText = fs.readFileSync(filename, { encoding: "utf-8" });

    if (
      filename.endsWith(".html") ||
      (filename.endsWith(".js") && fileText.includes("html as "))
    ) {
      fs.writeFileSync(
        filename,
        minify(fileText, {
          collapseWhitespace: true,
          minifyCSS: true,
        })
      );
    }
  });
});
