import fs from "node:fs/promises";
import path from "node:path";

const ALLOWED_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);

function getContentType(extension: string): string {
  switch (extension) {
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".avif":
      return "image/avif";
    default:
      return "image/webp";
  }
}

function sanitizeFileName(rawFileName: string): string | null {
  const decodedName = decodeURIComponent(rawFileName);

  if (!decodedName || decodedName.includes("/") || decodedName.includes("\\") || decodedName.includes("..")) {
    return null;
  }

  return decodedName;
}

export async function GET(
  _request: Request,
  context: { params: { file: string } }
) {
  const safeFileName = sanitizeFileName(context.params.file);

  if (!safeFileName) {
    return new Response("Nom de fichier invalide.", { status: 400 });
  }

  const extension = path.extname(safeFileName).toLowerCase();

  if (!ALLOWED_EXTENSIONS.has(extension)) {
    return new Response("Extension non autorisee.", { status: 400 });
  }

  const portfolioDirPath = path.join(process.cwd(), "Portfolio");
  const imagePath = path.join(portfolioDirPath, safeFileName);

  try {
    const imageBuffer = await fs.readFile(imagePath);
    const imageBytes = Uint8Array.from(imageBuffer);

    return new Response(imageBytes, {
      headers: {
        "Content-Type": getContentType(extension),
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new Response("Image introuvable dans /Portfolio.", { status: 404 });
  }
}
