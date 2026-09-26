import { NextRequest, NextResponse } from "next/server";
import { verifyCalendlyWebhookSignature } from "@/lib/calendly-webhook-signature";

export const runtime = "nodejs";

const MAX_WEBHOOK_BODY_BYTES = 1_048_576;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function boundedText(value: unknown, fallback: string, maxLength = 1_024): string {
  if (typeof value !== "string" || !value.trim()) return fallback;
  return value.slice(0, maxLength);
}

async function readLimitedBody(request: NextRequest): Promise<string | null> {
  const declaredLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(declaredLength) && declaredLength > MAX_WEBHOOK_BODY_BYTES) {
    return null;
  }

  const reader = request.body?.getReader();
  if (!reader) return "";

  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      totalBytes += value.byteLength;
      if (totalBytes > MAX_WEBHOOK_BODY_BYTES) {
        await reader.cancel();
        return null;
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  return Buffer.concat(chunks.map((chunk) => Buffer.from(chunk))).toString("utf8");
}

function formatStartTime(value: unknown): string {
  if (typeof value !== "string") return "Date non disponible";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Date non disponible";
  return date.toLocaleString("fr-FR", { dateStyle: "full", timeStyle: "short" });
}

/** Verify Calendly's signed webhook before relaying an invitee.created event. */
export async function POST(request: NextRequest) {
  const signingKey = process.env.CALENDLY_WEBHOOK_SIGNING_KEY;
  if (!signingKey) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 503 });
  }

  const contentType = request.headers.get("content-type")?.split(";")[0].trim().toLowerCase();
  if (contentType !== "application/json") {
    return NextResponse.json({ error: "Expected application/json" }, { status: 415 });
  }

  let rawBody: string | null;
  try {
    rawBody = await readLimitedBody(request);
  } catch {
    return NextResponse.json({ error: "Unable to read webhook body" }, { status: 400 });
  }
  if (rawBody === null) {
    return NextResponse.json({ error: "Webhook payload too large" }, { status: 413 });
  }

  const signature = request.headers.get("Calendly-Webhook-Signature");
  if (!verifyCalendlyWebhookSignature(rawBody, signature, signingKey)) {
    return NextResponse.json({ error: "Invalid webhook signature" }, { status: 401 });
  }

  let payload: unknown;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }
  if (!isRecord(payload) || typeof payload.event !== "string") {
    return NextResponse.json({ error: "Invalid webhook payload" }, { status: 400 });
  }

  if (payload.event !== "invitee.created") {
    return NextResponse.json({ message: "Event ignored" }, { status: 200 });
  }

  const data = payload.payload;
  if (!isRecord(data) || !isRecord(data.invitee) || !isRecord(data.event)) {
    return NextResponse.json({ error: "Invalid invitee.created payload" }, { status: 400 });
  }

  const invitee = data.invitee;
  const eventDetails = data.event;
  const questions = Array.isArray(invitee.questions_and_answers)
    ? invitee.questions_and_answers
        .slice(0, 10)
        .map((item) => {
          if (!isRecord(item)) return "";
          const question = boundedText(item.question, "Question", 300);
          const answer = boundedText(item.answer, "", 600);
          return answer ? `**${question}**\n${answer}` : "";
        })
        .filter(Boolean)
        .join("\n\n")
        .slice(0, 1_024)
    : "";

  const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!discordWebhookUrl) {
    return NextResponse.json({ error: "Notification service not configured" }, { status: 503 });
  }

  const eventUrl =
    typeof eventDetails.uri === "string" &&
    eventDetails.uri.startsWith("https://api.calendly.com/")
      ? eventDetails.uri
      : undefined;

  const discordMessage = {
    allowed_mentions: { parse: [] },
    embeds: [
      {
        title: "🎉 Nouvelle réunion programmée !",
        color: 0x9fe870,
        fields: [
          { name: "👤 Participant", value: boundedText(invitee.name, "Nom non fourni"), inline: true },
          { name: "📧 Email", value: boundedText(invitee.email, "Email non fourni"), inline: true },
          { name: "📅 Type de réunion", value: boundedText(eventDetails.name, "Réunion Calendly"), inline: false },
          { name: "🕐 Date et heure", value: formatStartTime(eventDetails.start_time), inline: false },
          ...(questions ? [{ name: "💬 Informations supplémentaires", value: questions, inline: false }] : []),
        ],
        footer: { text: "Novaly Agency • Calendly" },
        timestamp: new Date().toISOString(),
        ...(eventUrl ? { url: eventUrl } : {}),
      },
    ],
  };

  try {
    const response = await fetch(discordWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordMessage),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error("[Calendly Webhook] Discord notification failed", response.status);
      return NextResponse.json({ error: "Notification failed" }, { status: 502 });
    }

    return NextResponse.json({ message: "Notification sent" }, { status: 200 });
  } catch {
    console.error("[Calendly Webhook] Discord notification request failed");
    return NextResponse.json({ error: "Notification failed" }, { status: 502 });
  }
}

// Calendly can use a GET request to check whether the endpoint is reachable.
export async function GET() {
  return NextResponse.json({ message: "Webhook endpoint ready" }, { status: 200 });
}
