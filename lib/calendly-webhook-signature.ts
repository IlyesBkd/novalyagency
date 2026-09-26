import { createHmac, timingSafeEqual } from "node:crypto";

const CALENDLY_SIGNATURE_TOLERANCE_SECONDS = 180;

/**
 * Verify Calendly's HMAC-SHA256 signature against the exact request body.
 * The timestamp window also limits replay of previously captured requests.
 */
export function verifyCalendlyWebhookSignature(
  rawBody: string,
  signatureHeader: string | null,
  signingKey: string,
  nowMs = Date.now()
): boolean {
  if (!signatureHeader || !signingKey || !Number.isFinite(nowMs)) return false;

  const fields = signatureHeader.split(",").flatMap((field) => {
    const separator = field.indexOf("=");
    if (separator <= 0) return [];
    return [[field.slice(0, separator).trim(), field.slice(separator + 1).trim()]];
  });
  const timestampText = fields.find(([key]) => key === "t")?.[1];
  const signatures = fields.filter(([key]) => key === "v1").map(([, value]) => value);

  if (!timestampText || !/^\d+$/.test(timestampText) || signatures.length === 0) {
    return false;
  }

  const timestampSeconds = Number(timestampText);
  if (!Number.isSafeInteger(timestampSeconds)) return false;

  const nowSeconds = Math.floor(nowMs / 1_000);
  if (Math.abs(nowSeconds - timestampSeconds) > CALENDLY_SIGNATURE_TOLERANCE_SECONDS) {
    return false;
  }

  const expectedSignature = createHmac("sha256", signingKey)
    .update(`${timestampText}.${rawBody}`, "utf8")
    .digest();

  return signatures.some((signature) => {
    if (!/^[\da-f]{64}$/i.test(signature)) return false;
    const providedSignature = Buffer.from(signature, "hex");
    return (
      providedSignature.length === expectedSignature.length &&
      timingSafeEqual(providedSignature, expectedSignature)
    );
  });
}
