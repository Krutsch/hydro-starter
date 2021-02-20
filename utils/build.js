import {
  mkdirSync,
  copyFileSync,
  rmSync,
  writeFileSync,
  readFileSync,
} from "fs";
import glob from "glob";
import sharp from "sharp";
import minifyJSON from "node-json-minify";

const SOURCE_FOLDER = "src";
const BUILD_FOLDER = "build";

// Remove old build folder
rmSync(BUILD_FOLDER, { recursive: true, force: true });

glob("src/**/*.!(js|ts|html|css)", {}, (err, files) => {
  if (err) throw err;

  copyFiles(files.filter((f) => f.endsWith(".ico")));
  jsonHandler(files.filter((f) => f.endsWith(".json")));
  iconHandler(files.filter((f) => /icon\d+\.png/.test(f)));
  imageHandler(files.filter((f) => f.endsWith(".webp")));

  console.log(`🛠️  Pre-build finished.`);
});

function copyFiles(files) {
  files.forEach(copyFile);
}

function jsonHandler(files) {
  files.forEach((file) =>
    writeFileSync(
      toBuildFile(file),
      minifyJSON(readFileSync(file, { encoding: "utf-8" }))
    )
  );
}

function iconHandler(files) {
  files.forEach((file) => {
    sharp(file)
      .png({
        quality: 60,
      })
      .toFile(toBuildFile(file))
      .catch((err) => {
        console.error(err);
      });
  });
}

function imageHandler(files) {
  files.forEach((file) => {
    sharp(file)
      .webp({
        quality: 60,
      })
      .toFile(toBuildFile(file))
      .catch((err) => {
        console.error(err);
      });

    // Create Preview Image
    sharp(file)
      .webp({
        quality: 1,
      })
      .toFile(toPreviewImage(file))
      .catch((err) => {
        console.error(err);
      });
  });
}

function copyFile(file) {
  const buildFile = toBuildFile(file);
  const dir = buildFile.split("/").slice(0, -1).join("/");

  mkdirSync(dir, { recursive: true });
  copyFileSync(file, buildFile);
}

function toBuildFile(file) {
  return file.replace(`${SOURCE_FOLDER}/`, `${BUILD_FOLDER}/`);
}

function toPreviewImage(file) {
  const buildFile = toBuildFile(file);
  const dir = buildFile.split("/");
  const base = dir.pop();
  dir.push(base.replace(/(.*)?\./, "$1-preview."));

  return dir.join("/");
}
