import { NextResponse } from "next/server";

/**
 * POST /api/webhooks/discord
 * Route API sécurisée pour envoyer des notifications Discord
 * Appelée depuis le front-end quand un RDV Calendly est confirmé
 */
export async function POST() {
  try {
    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!discordWebhookUrl) {
      console.error("[Discord Webhook] DISCORD_WEBHOOK_URL not configured");
      return NextResponse.json(
        { error: "Webhook not configured" },
        { status: 500 }
      );
    }

    // Payload Discord Embed
    const payload = {
      embeds: [
        {
          title: "🚨 Nouveau Rendez-vous (Calendly)",
          description:
            "Un client vient de valider un créneau sur le site.",
          color: 0x7c3aed, // Violet
          footer: {
            text: "Novaly Agency • Conversion détectée",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    const response = await fetch(discordWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[Discord Webhook] Failed to send:", errorText);
      return NextResponse.json(
        { error: "Failed to send Discord notification" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[Discord Webhook] Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
