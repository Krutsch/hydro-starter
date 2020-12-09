export default function withPreview(img: string) {
  if (import.meta.env.MODE === "development") return img;

  const dist = "/_dist_/";
  return `${dist}preview-${img.split(dist).pop()}`;
}
