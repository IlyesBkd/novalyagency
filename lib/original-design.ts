import fs from "node:fs";
import path from "node:path";

type Snapshot = {
  css: string;
  rootHtml: string;
};

type HtmlRange = {
  start: number;
  end: number;
};

const SOURCE_FILE_NAME = "Lime 77 _ Site Premium 497\u20ac - Livr\u00e9 en 48h.html";
const STYLE_OPEN_TAG = "<style>";
const STYLE_CLOSE_TAG = "</style>";
const ROOT_OPEN_TAG = '<div id="root">';
const DIV_OPEN_TAG = "<div";
const DIV_CLOSE_TAG = "</div>";
const SPAIN_BLUE_HEX = "#0070b8";
const SPAIN_BLUE_RGB_SPACE = "0 112 184";
const SPAIN_BLUE_RGB_COMMA = "0,112,184";
const LOGO_URL = "/assets/logo";
const SPACE_VIDEO_URL = "/assets/space";
const PORTFOLIO_ASSET_BASE_URL = "/assets/portfolio";
const PORTFOLIO_DIR_NAME = "Portfolio";
const PORTFOLIO_IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);

const CSS_COLOR_REPLACEMENTS: Array<[RegExp, string]> = [
  [/#(?:a3e635|9fe870|bef264|84cc16|65a30d|4d7c0f)\b/gi, SPAIN_BLUE_HEX],
  [/163\s+230\s+53/g, SPAIN_BLUE_RGB_SPACE],
  [/159\s+232\s+112/g, SPAIN_BLUE_RGB_SPACE],
  [/190\s+242\s+100/g, SPAIN_BLUE_RGB_SPACE],
  [/132\s+204\s+22/g, SPAIN_BLUE_RGB_SPACE],
  [/101\s+163\s+13/g, SPAIN_BLUE_RGB_SPACE],
  [/77\s+124\s+15/g, SPAIN_BLUE_RGB_SPACE],
  [/163\s*,\s*230\s*,\s*53/g, SPAIN_BLUE_RGB_COMMA],
  [/159\s*,\s*232\s*,\s*112/g, SPAIN_BLUE_RGB_COMMA],
  [/190\s*,\s*242\s*,\s*100/g, SPAIN_BLUE_RGB_COMMA],
  [/132\s*,\s*204\s*,\s*22/g, SPAIN_BLUE_RGB_COMMA],
  [/101\s*,\s*163\s*,\s*13/g, SPAIN_BLUE_RGB_COMMA],
  [/77\s*,\s*124\s*,\s*15/g, SPAIN_BLUE_RGB_COMMA],
];

const HERO_LOGO_PATTERN = /(<div class="mb-4 animate-reveal animate-delay-100"><img[^>]*src=")[^"]+(")/;
const FIRST_BASE64_LOGO_PATTERN = /(<img[^>]*src=")data:image\/png;base64,[^"]+(")/;
const HERO_VIDEO_PATTERN = /(<video[^>]*>[\s\S]*?<source[^>]*src=")[^"]+(")/i;
const LEGACY_HERO_VIDEO_URL_PATTERN = /https:\/\/www\.pexels\.com\/fr-fr\/download\/video\/7686986\//g;
const REVIEWS_COUNT_PATTERN = /\+\s*45\s*avis/gi;
const LEGACY_PRICE_PATTERN = /497\s*€/g;
const OFFERS_SECTION_ID = "offers";

const CUSTOM_SECTION_CSS = `
.portfolio-marquee {
  overflow: hidden;
  padding: 6px 0 16px;
}

.portfolio-track {
  display: flex;
  width: max-content;
  animation: portfolio-scroll 65s linear infinite;
}

.portfolio-group {
  display: flex;
  gap: 20px;
  padding-right: 20px;
}

.portfolio-marquee:hover .portfolio-track {
  animation-play-state: paused;
}

@keyframes portfolio-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.portfolio-thumb {
  position: relative;
  flex: 0 0 min(360px, 86vw);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(0, 112, 184, 0.35);
  background: rgba(7, 14, 26, 0.8);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.35);
  scroll-snap-align: start;
  text-decoration: none;
}

.portfolio-thumb img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: top;
  display: block;
}

.portfolio-thumb-label {
  position: absolute;
  left: 12px;
  bottom: 12px;
  border-radius: 999px;
  background: rgba(5, 12, 22, 0.75);
  border: 1px solid rgba(0, 112, 184, 0.45);
  padding: 6px 12px;
  color: #f3f8ff;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.portfolio-modal {
  position: fixed;
  inset: 0;
  z-index: 90;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 22px;
  background: rgba(0, 0, 0, 0.86);
}

.portfolio-modal:target {
  display: flex;
}

.portfolio-modal img {
  width: min(1200px, 95vw);
  max-height: 92vh;
  object-fit: contain;
  border-radius: 16px;
  border: 1px solid rgba(0, 112, 184, 0.45);
  box-shadow: 0 20px 56px rgba(0, 0, 0, 0.45);
}

.portfolio-modal-close {
  position: fixed;
  top: 16px;
  right: 16px;
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.45);
  background: rgba(0, 0, 0, 0.65);
  color: #fff;
  font-size: 1.6rem;
  text-decoration: none;
  line-height: 1;
}

.offers-section {
  position: relative;
  overflow: hidden;
  background: radial-gradient(circle at 18% -12%, rgba(0, 112, 184, 0.2), transparent 55%), #04070d;
  border-top: 1px solid rgba(0, 112, 184, 0.22);
  border-bottom: 1px solid rgba(0, 112, 184, 0.22);
}

.offers-shell {
  max-width: 1120px;
  margin: 0 auto;
  padding: 88px 24px;
}

.offers-kicker {
  color: #39a0e0;
  font-size: 0.8rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin: 0 0 12px;
  text-align: center;
}

.offers-title {
  color: #f7fbff;
  text-align: center;
  margin: 0;
  font-size: clamp(1.9rem, 1.1rem + 2vw, 3rem);
  line-height: 1.15;
}

.offers-subtitle {
  max-width: 760px;
  margin: 14px auto 34px;
  color: rgba(224, 235, 248, 0.82);
  text-align: center;
  font-size: 1rem;
}

.offers-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.offer-card {
  border-radius: 20px;
  border: 1px solid rgba(0, 112, 184, 0.33);
  background: linear-gradient(150deg, rgba(4, 10, 18, 0.95), rgba(8, 18, 30, 0.86));
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.34);
  padding: 24px;
}

.offer-card-premium {
  border-color: rgba(57, 160, 224, 0.62);
  box-shadow: 0 18px 45px rgba(0, 112, 184, 0.2);
}

.offer-label {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  border: 1px solid rgba(57, 160, 224, 0.55);
  background: rgba(57, 160, 224, 0.12);
  color: #d5edff;
  font-size: 0.74rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 700;
  padding: 6px 10px;
  margin-bottom: 14px;
}

.offer-name {
  margin: 0 0 6px;
  color: #f8fbff;
  font-size: 1.42rem;
  line-height: 1.2;
}

.offer-price {
  margin: 0;
  color: #39a0e0;
  font-size: 1.92rem;
  font-weight: 800;
}

.offer-commitment {
  margin: 10px 0 16px;
  color: rgba(224, 235, 248, 0.86);
  font-size: 0.95rem;
}

.offer-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;
}

.offer-list li {
  position: relative;
  padding-left: 20px;
  color: rgba(232, 241, 249, 0.92);
  line-height: 1.4;
}

.offer-list li::before {
  content: "";
  position: absolute;
  top: 0.54em;
  left: 0;
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: #39a0e0;
  box-shadow: 0 0 0 4px rgba(57, 160, 224, 0.2);
}

.offer-note {
  margin-top: 14px;
  color: rgba(206, 228, 244, 0.78);
  font-size: 0.88rem;
  line-height: 1.4;
}
`;

let cachedSnapshot: Snapshot | null = null;

function applySpainBluePalette(input: string): string {
  return CSS_COLOR_REPLACEMENTS.reduce((output, [fromColorPattern, toColor]) => {
    return output.replace(fromColorPattern, toColor);
  }, input);
}

function appendCustomCss(css: string): string {
  return `${css}\n${CUSTOM_SECTION_CSS}`;
}

function replaceHeroVideoSource(rootHtml: string): string {
  if (LEGACY_HERO_VIDEO_URL_PATTERN.test(rootHtml)) {
    return rootHtml.replace(LEGACY_HERO_VIDEO_URL_PATTERN, SPACE_VIDEO_URL);
  }

  return rootHtml.replace(HERO_VIDEO_PATTERN, `$1${SPACE_VIDEO_URL}$2`);
}

function replaceReviewsCount(rootHtml: string): string {
  return rootHtml.replace(REVIEWS_COUNT_PATTERN, "+1196 avis");
}

function replaceLegacyPriceMentions(rootHtml: string): string {
  return rootHtml.replace(LEGACY_PRICE_PATTERN, "99€/mois ou 399€");
}

function buildOffersSectionHtml(): string {
  return (
    `<div id="${OFFERS_SECTION_ID}">` +
    '<section class="offers-section">' +
    '<div class="offers-shell">' +
    '<p class="offers-kicker">Deux offres claires</p>' +
    '<h2 class="offers-title">Choisissez votre formule de site web sur mesure</h2>' +
    '<p class="offers-subtitle">Une offre abonnement orientee MRR et une offre paiement unique. Les deux sont simples, transparentes et pensees pour convertir.</p>' +
    '<div class="offers-grid">' +
    '<article class="offer-card offer-card-premium">' +
    '<span class="offer-label">Offre A - MRR</span>' +
    '<h3 class="offer-name">Site web sur mesure</h3>' +
    '<p class="offer-price">99€/mois</p>' +
    '<p class="offer-commitment">Engagement minimum : 6 mois</p>' +
    '<ul class="offer-list">' +
    '<li>Creation complete du site web</li>' +
    '<li>Hebergement, maintenance, securite et mises a jour inclus</li>' +
    '<li>Quota de modifications : jusqu a 2h/mois</li>' +
    '<li>Rapport Analytics mensuel pour piloter la performance</li>' +
    "</ul>" +
    '<p class="offer-note">Formule recommandee pour maximiser la conversion continue et le MRR.</p>' +
    "</article>" +
    '<article class="offer-card">' +
    '<span class="offer-label">Offre B - One-shot</span>' +
    '<h3 class="offer-name">Site web sur mesure</h3>' +
    '<p class="offer-price">399€ (paiement unique)</p>' +
    '<p class="offer-commitment">Sans abonnement mensuel</p>' +
    '<ul class="offer-list">' +
    '<li>Creation complete du site web</li>' +
    '<li>Mise en ligne et configuration de base incluses</li>' +
    '<li>Hebergement gratuit pendant 1 an</li>' +
    '<li>Puis 80€/an pour l hebergement</li>' +
    "</ul>" +
    '<p class="offer-note">Ideal si vous preferez un paiement unique des le depart.</p>' +
    "</article>" +
    "</div>" +
    "</div></section></div>"
  );
}

function getPortfolioImageNames(): string[] {
  const portfolioPath = path.join(process.cwd(), PORTFOLIO_DIR_NAME);

  if (!fs.existsSync(portfolioPath)) {
    return [];
  }

  return fs
    .readdirSync(portfolioPath, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => PORTFOLIO_IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, "fr", { numeric: true, sensitivity: "base" }));
}

function buildPortfolioSectionHtml(sectionId: string, imageNames: string[]): string {
  const cards = imageNames
    .map((imageName, index) => {
      const imageUrl = `${PORTFOLIO_ASSET_BASE_URL}/${encodeURIComponent(imageName)}`;
      const itemLabel = String(index + 1).padStart(2, "0");

      return (
        `<a href="#portfolio-modal-${index}" class="portfolio-thumb">` +
        `<img src="${imageUrl}" alt="Apercu maquette ${index + 1}" loading="lazy" decoding="async">` +
        `<span class="portfolio-thumb-label">Maquette ${itemLabel}</span>` +
        "</a>"
      );
    })
    .join("");

  const marquee =
    '<div class="portfolio-marquee">' +
    '<div class="portfolio-track">' +
    `<div class="portfolio-group">${cards}</div>` +
    `<div class="portfolio-group" aria-hidden="true">${cards}</div>` +
    "</div></div>";

  const modals = imageNames
    .map((imageName, index) => {
      const imageUrl = `${PORTFOLIO_ASSET_BASE_URL}/${encodeURIComponent(imageName)}`;

      return (
        `<div id="portfolio-modal-${index}" class="portfolio-modal">` +
        `<a href="#${sectionId}" class="portfolio-modal-close" aria-label="Fermer">&times;</a>` +
        `<img src="${imageUrl}" alt="Maquette complete ${index + 1}">` +
        "</div>"
      );
    })
    .join("");

  return (
    `<div id="${sectionId}">` +
    '<section class="relative overflow-hidden bg-dark-950">' +
    '<div class="absolute inset-0 bg-dark-950"></div>' +
    '<div class="absolute inset-0 bg-gradient-to-b from-accent-lime/[0.025] via-accent-lime/[0.02] to-accent-lime/[0.015]"></div>' +
    '<div class="py-24 sm:py-28 relative z-10">' +
    '<div class="max-w-6xl mx-auto px-6">' +
    '<div class="text-center mb-10">' +
    '<p class="text-accent-lime text-sm uppercase tracking-[0.22em] mb-4 font-medium">Portfolio</p>' +
    '<h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">Maquettes de sites web</h2>' +
    '<p class="text-lg text-text-secondary max-w-3xl mx-auto">Defilement horizontal automatique. Cliquez sur une carte pour afficher la maquette complete.</p>' +
    "</div>" +
    marquee +
    '<p class="text-text-secondary text-sm mt-2">Survolez pour mettre en pause, puis cliquez pour ouvrir une maquette complete.</p>' +
    "</div></div></section></div>" +
    modals
  );
}

function findDivByIdRange(html: string, sectionId: string): HtmlRange | null {
  const sectionStartMarker = `<div id="${sectionId}"`;
  const sectionStartIndex = html.indexOf(sectionStartMarker);

  if (sectionStartIndex === -1) {
    return null;
  }

  let cursor = sectionStartIndex;
  let divDepth = 0;

  while (cursor < html.length) {
    const nextOpenDivIndex = html.indexOf(DIV_OPEN_TAG, cursor);
    const nextCloseDivIndex = html.indexOf(DIV_CLOSE_TAG, cursor);

    if (nextCloseDivIndex === -1) {
      return null;
    }

    if (nextOpenDivIndex !== -1 && nextOpenDivIndex < nextCloseDivIndex) {
      divDepth += 1;
      cursor = nextOpenDivIndex + DIV_OPEN_TAG.length;
      continue;
    }

    divDepth -= 1;
    cursor = nextCloseDivIndex + DIV_CLOSE_TAG.length;

    if (divDepth === 0) {
      return { start: sectionStartIndex, end: cursor };
    }
  }

  return null;
}

function replaceDivById(html: string, sectionId: string, replacementHtml: string): string {
  const range = findDivByIdRange(html, sectionId);

  if (!range) {
    return html;
  }

  return html.slice(0, range.start) + replacementHtml + html.slice(range.end);
}

function applyOffersSection(rootHtml: string): string {
  if (rootHtml.includes(`id="${OFFERS_SECTION_ID}"`)) {
    return rootHtml;
  }

  const offersSectionHtml = buildOffersSectionHtml();
  const heroRange = findDivByIdRange(rootHtml, "hero");

  if (heroRange) {
    return rootHtml.slice(0, heroRange.end) + offersSectionHtml + rootHtml.slice(heroRange.end);
  }

  const fallbackTargetRange = findDivByIdRange(rootHtml, "portfolio") ?? findDivByIdRange(rootHtml, "credibility");

  if (fallbackTargetRange) {
    return rootHtml.slice(0, fallbackTargetRange.start) + offersSectionHtml + rootHtml.slice(fallbackTargetRange.start);
  }

  return rootHtml + offersSectionHtml;
}

function applyPortfolioSection(rootHtml: string): string {
  const imageNames = getPortfolioImageNames();

  if (!imageNames.length) {
    return rootHtml;
  }

  const replacementTargets = ["portfolio", "credibility"];

  for (const sectionId of replacementTargets) {
    const sectionHtml = buildPortfolioSectionHtml(sectionId, imageNames);
    const updatedHtml = replaceDivById(rootHtml, sectionId, sectionHtml);

    if (updatedHtml !== rootHtml) {
      return updatedHtml;
    }
  }

  const heroRange = findDivByIdRange(rootHtml, "hero");

  if (!heroRange) {
    return rootHtml + buildPortfolioSectionHtml("portfolio", imageNames);
  }

  return rootHtml.slice(0, heroRange.end) + buildPortfolioSectionHtml("portfolio", imageNames) + rootHtml.slice(heroRange.end);
}

function replaceSourceLogo(rootHtml: string): string {
  const heroLogoReplaced = rootHtml.replace(HERO_LOGO_PATTERN, `$1${LOGO_URL}$2`);

  if (heroLogoReplaced !== rootHtml) {
    return heroLogoReplaced;
  }

  return rootHtml.replace(FIRST_BASE64_LOGO_PATTERN, `$1${LOGO_URL}$2`);
}

function extractFinalStyle(html: string): string {
  const styleOpenIndex = html.lastIndexOf(STYLE_OPEN_TAG);

  if (styleOpenIndex === -1) {
    throw new Error("Impossible de trouver le bloc <style> dans le HTML source.");
  }

  const styleCloseIndex = html.indexOf(STYLE_CLOSE_TAG, styleOpenIndex);

  if (styleCloseIndex === -1) {
    throw new Error("Le bloc <style> trouvé dans le HTML source est incomplet.");
  }

  return html.slice(styleOpenIndex + STYLE_OPEN_TAG.length, styleCloseIndex).trim();
}

function extractRootNode(html: string): string {
  const rootStartIndex = html.indexOf(ROOT_OPEN_TAG);

  if (rootStartIndex === -1) {
    throw new Error('Impossible de trouver <div id="root"> dans le HTML source.');
  }

  let cursor = rootStartIndex;
  let divDepth = 0;

  while (cursor < html.length) {
    const nextOpenDivIndex = html.indexOf(DIV_OPEN_TAG, cursor);
    const nextCloseDivIndex = html.indexOf(DIV_CLOSE_TAG, cursor);

    if (nextCloseDivIndex === -1) {
      break;
    }

    if (nextOpenDivIndex !== -1 && nextOpenDivIndex < nextCloseDivIndex) {
      divDepth += 1;
      cursor = nextOpenDivIndex + DIV_OPEN_TAG.length;
      continue;
    }

    divDepth -= 1;
    cursor = nextCloseDivIndex + DIV_CLOSE_TAG.length;

    if (divDepth === 0) {
      return html.slice(rootStartIndex, cursor);
    }
  }

  throw new Error('Impossible de trouver la balise de fermeture de <div id="root">.');
}

export function getOriginalDesignSnapshot(): Snapshot {
  if (cachedSnapshot) {
    return cachedSnapshot;
  }

  const sourcePath = path.join(process.cwd(), SOURCE_FILE_NAME);

  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Fichier source introuvable: ${SOURCE_FILE_NAME}`);
  }

  const sourceHtml = fs.readFileSync(sourcePath, "utf8");
  const extractedCss = extractFinalStyle(sourceHtml);
  const extractedRootHtml = extractRootNode(sourceHtml);
  const themedCss = appendCustomCss(applySpainBluePalette(extractedCss));

  const transformedRootHtml = applyOffersSection(
    applyPortfolioSection(
      replaceLegacyPriceMentions(
        replaceReviewsCount(replaceHeroVideoSource(replaceSourceLogo(applySpainBluePalette(extractedRootHtml))))
      )
    )
  );

  cachedSnapshot = {
    css: themedCss,
    rootHtml: transformedRootHtml,
  };

  return cachedSnapshot;
}
