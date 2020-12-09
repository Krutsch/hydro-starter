export default function withPreview(img: string) {
  if (import.meta.env.MODE === "development") return img;

  const pathArray = img.split("/");
  pathArray[pathArray.length - 1] = `preview-${
    pathArray[pathArray.length - 1]
  }`;
  return pathArray.join("/");
}
