import fs from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const logoPath = path.join(process.cwd(), "logo.png");

  try {
    const logoBuffer = await fs.readFile(logoPath);
    const logoBytes = Uint8Array.from(logoBuffer);

    return new Response(logoBytes, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new Response("logo.png introuvable a la racine du projet.", {
      status: 404,
    });
  }
}
