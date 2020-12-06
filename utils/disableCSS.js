const glob = require("glob");
const fs = require("fs");

glob("src/**/*.js", {}, (err, files) => {
  if (err) {
    console.warn(err);
    process.exit(1);
  }

  files.forEach((filename) => {
    const fileText = fs.readFileSync(filename, { encoding: "utf-8" });
    fs.writeFileSync(filename, fileText.replace(/(import .*?css)/g, "//$1"));
  });
});
