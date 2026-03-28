import { NextRequest, NextResponse } from "next/server";

/**
 * Webhook Calendly → Discord
 * Reçoit les événements Calendly et envoie une notification Discord
 */
export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    
    // Vérifie que c'est bien un événement invitee.created
    if (payload.event !== "invitee.created") {
      return NextResponse.json({ message: "Event ignored" }, { status: 200 });
    }

    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!discordWebhookUrl) {
      console.error("DISCORD_WEBHOOK_URL not configured");
      return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
    }

    // Extraire les données de la réunion
    const event = payload.payload;
    const invitee = event.invitee;
    const eventDetails = event.event;
    
    const name = invitee.name || "Nom non fourni";
    const email = invitee.email || "Email non fourni";
    const eventName = eventDetails.name || "Réunion Calendly";
    const startTime = eventDetails.start_time 
      ? new Date(eventDetails.start_time).toLocaleString("fr-FR", {
          dateStyle: "full",
          timeStyle: "short",
        })
      : "Date non disponible";
    const eventUrl = eventDetails.uri || "";
    
    // Questions personnalisées (si présentes)
    let questionsText = "";
    if (invitee.questions_and_answers && invitee.questions_and_answers.length > 0) {
      questionsText = invitee.questions_and_answers
        .map((qa: any) => `**${qa.question}**\n${qa.answer}`)
        .join("\n\n");
    }

    // Construire le message Discord (format embed)
    const discordMessage = {
      embeds: [
        {
          title: "🎉 Nouvelle réunion programmée !",
          color: 0x9fe870, // Accent lime
          fields: [
            {
              name: "👤 Participant",
              value: name,
              inline: true,
            },
            {
              name: "📧 Email",
              value: email,
              inline: true,
            },
            {
              name: "📅 Type de réunion",
              value: eventName,
              inline: false,
            },
            {
              name: "🕐 Date et heure",
              value: startTime,
              inline: false,
            },
            ...(questionsText
              ? [
                  {
                    name: "💬 Informations supplémentaires",
                    value: questionsText,
                    inline: false,
                  },
                ]
              : []),
          ],
          footer: {
            text: "Novaly Agency • Calendly",
          },
          timestamp: new Date().toISOString(),
          ...(eventUrl && {
            url: eventUrl,
          }),
        },
      ],
    };

    // Envoyer à Discord
    const discordResponse = await fetch(discordWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discordMessage),
    });

    if (!discordResponse.ok) {
      console.error("Discord webhook failed:", await discordResponse.text());
      return NextResponse.json({ error: "Discord notification failed" }, { status: 500 });
    }

    return NextResponse.json({ message: "Notification sent" }, { status: 200 });
  } catch (error) {
    console.error("Calendly webhook error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// Calendly envoie aussi des GET pour vérifier l'endpoint
export async function GET() {
  return NextResponse.json({ message: "Calendly webhook endpoint ready" }, { status: 200 });
}
