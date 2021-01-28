import { mkdirSync, copyFileSync, rmSync } from "fs";
import glob from "glob";
import sharp from "sharp";

const SOURCE_FOLDER = "src";
const BUILD_FOLDER = "build";

// Remove old build folder
rmSync(BUILD_FOLDER, { recursive: true, force: true });

glob("src/**/*.!(js|ts|html|css)", {}, (err, files) => {
  if (err) throw err;

  icoHandler(files.filter((f) => f.endsWith("ico")));
  imageHandler(files.filter((f) => f.endsWith("webp")));
});

function icoHandler(files) {
  files.forEach(copyFile);
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
