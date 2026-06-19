import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, sep } from "node:path";

const mimeTypes: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

export async function serveLocalAsset(folder: "categories" | "images", pathParts: string[]) {
  const basePath = join(process.cwd(), "public", folder);
  const assetPath = normalize(join(basePath, ...pathParts));

  if (!assetPath.startsWith(`${basePath}${sep}`)) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const details = await stat(assetPath);

    if (!details.isFile()) {
      return new Response("Not found", { status: 404 });
    }

    const file = await readFile(assetPath);
    const contentType = mimeTypes[extname(assetPath).toLowerCase()] ?? "application/octet-stream";

    return new Response(new Uint8Array(file), {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Type": contentType,
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
