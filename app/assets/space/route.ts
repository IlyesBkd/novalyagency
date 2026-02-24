import fs from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const videoPath = path.join(process.cwd(), "space.mp4");

  try {
    const videoBuffer = await fs.readFile(videoPath);
    const videoBytes = Uint8Array.from(videoBuffer);

    return new Response(videoBytes, {
      headers: {
        "Content-Type": "video/mp4",
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
  } catch {
    return new Response("space.mp4 introuvable a la racine du projet.", {
      status: 404,
    });
  }
}
