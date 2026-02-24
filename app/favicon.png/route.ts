import fs from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const faviconPath = path.join(process.cwd(), "favicon.png");

  try {
    const faviconBuffer = await fs.readFile(faviconPath);
    const faviconBytes = Uint8Array.from(faviconBuffer);

    return new Response(faviconBytes, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new Response("favicon.png introuvable a la racine du projet.", {
      status: 404,
    });
  }
}
