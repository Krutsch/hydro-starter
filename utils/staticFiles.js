import { mkdirSync, copyFileSync, writeFileSync, readFileSync } from "fs";
import sharp from "sharp";
import minifyJSON from "node-json-minify";

const SOURCE_FOLDER = "src";
const BUILD_FOLDER = "build";
const file = process.argv[2];

if (file === "src/_headers" || file.endsWith(".ico")) {
  copyFile(file);
} else if (file.endsWith(".json")) {
  writeFileSync(
    getBuildPath(file),
    minifyJSON(readFileSync(file, { encoding: "utf-8" }))
  );
} else if (/icon\d+\.png/.test(file)) {
  const buildPath = createDir(file);
  sharp(file)
    .png({
      quality: 60,
    })
    .toFile(buildPath)
    .catch((err) => {
      console.error(err);
    });
} else if (file.endsWith(".webp")) {
  const buildPath = createDir(file);
  sharp(file)
    .webp({
      quality: 80,
    })
    .toFile(buildPath)
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
}

console.log(`finished handling ${file}`);

function copyFile(file) {
  const buildPath = createDir(file);
  copyFileSync(file, buildPath);
}

function getBuildPath(file) {
  return file.replace(`${SOURCE_FOLDER}/`, `${BUILD_FOLDER}/`);
}

function createDir(file) {
  const buildPath = getBuildPath(file);
  const dir = buildPath.split("/").slice(0, -1).join("/");
  mkdirSync(dir, { recursive: true });
  return buildPath;
}

function toPreviewImage(file) {
  const buildPath = getBuildPath(file);
  const dir = buildPath.split("/");
  const base = dir.pop();
  dir.push(base.replace(/(.*)?\./, "$1-preview."));
  return dir.join("/");
}
