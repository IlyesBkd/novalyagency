import fs from "node:fs";
import path from "node:path";

const PORTFOLIO_DIR = "Portfolio";
const ALLOWED_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);

export function getPortfolioImageNames(): string[] {
  const portfolioPath = path.join(process.cwd(), PORTFOLIO_DIR);

  if (!fs.existsSync(portfolioPath)) {
    return [];
  }

  return fs
    .readdirSync(portfolioPath, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => ALLOWED_EXTENSIONS.has(path.extname(name).toLowerCase()))
    .sort((a, b) =>
      a.localeCompare(b, "fr", { numeric: true, sensitivity: "base" })
    );
}
