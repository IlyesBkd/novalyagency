"use server";

import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes("localhost")
    ? false
    : { rejectUnauthorized: false },
});

async function notifyDiscord(payload: {
  email: string;
  phone?: string;
  message?: string;
  source: string;
}) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) return;

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [
          {
            title: `📩 Nouveau lead — ${payload.source}`,
            color: 0x84cc16,
            fields: [
              { name: "Email", value: payload.email, inline: true },
              { name: "Téléphone", value: payload.phone || "Non renseigné", inline: true },
              { name: "Source", value: payload.source, inline: true },
              { name: "Message", value: payload.message || "—" },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });
  } catch (err) {
    console.error("Discord webhook error:", err);
  }
}

export async function submitContact(data: {
  email: string;
  phone: string;
  message: string;
}): Promise<{ success: boolean; error?: string }> {
  const { email, phone, message } = data;

  if (!email || !message) {
    return { success: false, error: "Veuillez remplir tous les champs obligatoires." };
  }

  try {
    await pool.query(
      `INSERT INTO leads (email, phone, message, source, created_at)
       VALUES ($1, $2, $3, $4, NOW())`,
      [email, phone || null, message, "contact-form"]
    );
    await notifyDiscord({ email, phone, message, source: "Formulaire de contact" });
    return { success: true };
  } catch (err) {
    console.error("DB insert error:", err);
    return { success: false, error: "Erreur serveur. Veuillez réessayer plus tard." };
  }
}

export async function submitPopup(data: {
  email: string;
}): Promise<{ success: boolean; error?: string }> {
  const { email } = data;

  if (!email) {
    return { success: false, error: "Veuillez saisir votre adresse email." };
  }

  try {
    await pool.query(
      `INSERT INTO leads (email, phone, message, source, created_at)
       VALUES ($1, NULL, NULL, $2, NOW())`,
      [email, "exit-popup"]
    );
    await notifyDiscord({ email, source: "Exit-Intent Popup" });
    return { success: true };
  } catch (err) {
    console.error("DB insert error:", err);
    return { success: false, error: "Erreur serveur. Veuillez réessayer plus tard." };
  }
}
