import { serveLocalAsset } from "../../../../lib/localAssets";

export const runtime = "nodejs";

type AssetFolder = "categories" | "images";

type RouteContext = {
  params: Promise<{
    folder: string;
    path: string[];
  }>;
};

const isAssetFolder = (folder: string): folder is AssetFolder => folder === "categories" || folder === "images";

export async function GET(_request: Request, { params }: RouteContext) {
  const { folder, path } = await params;

  if (!isAssetFolder(folder)) {
    return new Response("Not found", { status: 404 });
  }

  return serveLocalAsset(folder, path);
}
