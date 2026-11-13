import { readdir, readFile, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
// Detect actual raster bytes, never a filename extension. A supplied image is copied
// into this checkout; later builds do not require the sibling source folder.
const source = process.env.HEADSHOT_SOURCE_DIR || "../newestresumes";
try {
  for (const name of await readdir(source)) {
    const file = path.join(source, name);
    let bytes;
    try {
      bytes = await readFile(file);
    } catch {
      continue;
    }
    const raster =
      (bytes[0] === 0xff && bytes[1] === 0xd8) ||
      bytes.subarray(1, 4).toString() === "PNG" ||
      bytes.subarray(8, 12).toString() === "WEBP" ||
      bytes.subarray(4, 12).toString().includes("ftyp");
    if (!raster) continue;
    await mkdir("public/media", { recursive: true });
    await sharp(bytes)
      .rotate()
      .resize(480, 600, { fit: "cover", position: "attention" })
      .webp({ quality: 84 })
      .toFile("public/media/headshot.webp");
    console.log("Prepared supplied About portrait (480×600 WebP).");
    break;
  }
} catch (e) {
  if (e.code !== "ENOENT") throw e;
}
