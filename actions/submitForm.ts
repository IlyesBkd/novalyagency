"use server";

import { Pool } from "pg";
import { Resend } from "resend";

/* ── Database ── */
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes("localhost")
    ? false
    : { rejectUnauthorized: false },
});

/* ── Resend ── */
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

if (!resend) {
  console.warn("⚠️ Resend client NOT initialized — RESEND_API_KEY is missing");
} else {
  console.log("✅ Resend client initialized");
}

/* ── Auto-create leads table if it doesn't exist ── */
let tableReady = false;

async function ensureTable() {
  if (tableReady) return;
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        email TEXT NOT NULL,
        phone TEXT,
        message TEXT,
        source TEXT,
        lead_type TEXT,
        offer_price INTEGER,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `);
    // Auto-add columns for existing tables
    await pool.query(`ALTER TABLE leads ADD COLUMN IF NOT EXISTS lead_type TEXT`);
    await pool.query(`ALTER TABLE leads ADD COLUMN IF NOT EXISTS offer_price INTEGER`);
    tableReady = true;
  } catch (err) {
    console.error("Failed to create leads table:", err);
    throw err;
  }
}

/* ── Discord notification ── */
async function notifyDiscord(payload: {
  email: string;
  phone?: string;
  message?: string;
  source: string;
  leadType?: "vitrine" | "ecommerce";
  offerPrice?: number;
}) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn("⚠️ DISCORD_WEBHOOK_URL missing — skipping Discord notification");
    return false;
  }

  const embedColor = payload.leadType === "ecommerce" ? 0x6366f1 : 0x84cc16;
  const typeLabel = payload.leadType === "ecommerce" ? "🛒 E-commerce" : "🌐 Vitrine";
  const priceLabel = payload.offerPrice ? `${payload.offerPrice}€` : "—";

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [
          {
            title: `📩 Nouveau lead — ${payload.source}`,
            color: embedColor,
            fields: [
              { name: "Email", value: payload.email, inline: true },
              { name: "Téléphone", value: payload.phone || "Non renseigné", inline: true },
              { name: "Type", value: typeLabel, inline: true },
              { name: "Offre", value: priceLabel, inline: true },
              { name: "Message", value: payload.message || "—" },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    if (!response.ok) {
      const responseBody = await response.text().catch(() => "");
      console.error("❌ Discord webhook non-OK response", {
        status: response.status,
        statusText: response.statusText,
        body: responseBody,
      });
      return false;
    }

    return true;
  } catch (err) {
    console.error("Discord webhook error:", err);
    return false;
  }
}

/* ── Confirmation email via Resend ── */
async function sendConfirmationEmail(email: string) {
  if (!resend) {
    console.warn("⚠️ RESEND_API_KEY not set — skipping confirmation email");
    return false;
  }

  const fromAddress = process.env.RESEND_FROM || "Novaly Agency <contact@novalyagency.com>";

  try {
    const result = await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: "✅ Demande reçue — Novaly Agency",
      html: `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#111111;border-radius:16px;border:1px solid #222;overflow:hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a1a1a,#111);padding:40px 40px 30px;text-align:center;border-bottom:1px solid #222;">
              <h1 style="margin:0;font-size:28px;font-weight:800;color:#a3e635;letter-spacing:-0.5px;">Novaly Agency</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 16px;font-size:22px;font-weight:700;color:#f5f7fa;">Merci pour votre demande !</h2>
              
              <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#9ca3af;">
                Nous avons bien reçu votre message et notre équipe l'examine en ce moment même.
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#1a1a1a;border:1px solid #2a2a2a;border-radius:12px;margin:24px 0;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#a3e635;text-transform:uppercase;letter-spacing:1px;">Ce qui va se passer</p>
                    <table cellpadding="0" cellspacing="0" style="margin-top:12px;">
                      <tr>
                        <td style="padding:6px 12px 6px 0;vertical-align:top;color:#a3e635;font-size:16px;">✓</td>
                        <td style="padding:6px 0;font-size:14px;color:#d1d5db;">Analyse de votre besoin sous 24h</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 12px 6px 0;vertical-align:top;color:#a3e635;font-size:16px;">✓</td>
                        <td style="padding:6px 0;font-size:14px;color:#d1d5db;">Proposition personnalisée par email</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 12px 6px 0;vertical-align:top;color:#a3e635;font-size:16px;">✓</td>
                        <td style="padding:6px 0;font-size:14px;color:#d1d5db;">Livraison de votre site en 48h après validation</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 24px;font-size:14px;line-height:1.6;color:#6b7280;">
                Si vous avez des questions en attendant, répondez directement à cet email ou contactez-nous sur WhatsApp.
              </p>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="background-color:#a3e635;border-radius:10px;text-align:center;">
                    <a href="https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "33600000000").replace(/[^0-9]/g, "")}" target="_blank" style="display:inline-block;padding:14px 32px;font-size:14px;font-weight:700;color:#0a0a0a;text-decoration:none;">
                      Nous contacter sur WhatsApp →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #222;text-align:center;">
              <p style="margin:0;font-size:12px;color:#4b5563;">
                © ${new Date().getFullYear()} Novaly Agency — Tous droits réservés
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    });

    if (result.error) {
      console.error("❌ Resend API returned an error:", result.error);
      console.error("Email details:", { to: email, from: fromAddress });
      return false;
    }

    const messageId = result.data?.id ?? "n/a";
    console.log(`✅ Confirmation email sent to ${email} (ID: ${messageId})`);
    return true;
  } catch (err) {
    console.error("❌ Resend email error:", err);
    console.error("Email details:", { to: email, from: fromAddress });
    return false;
  }
}

/* ── Types ── */
type LeadType = "vitrine" | "ecommerce";

const OFFER_PRICES: Record<LeadType, number> = {
  vitrine: 399,
  ecommerce: 899,
};

/* ── Submit contact form ── */
export async function submitContact(data: {
  email: string;
  phone: string;
  message: string;
  leadType?: LeadType;
  offerPrice?: number;
}): Promise<{ success: boolean; error?: string }> {
  const { email, phone, message } = data;
  const leadType: LeadType = data.leadType && ["vitrine", "ecommerce"].includes(data.leadType) ? data.leadType : "vitrine";
  const offerPrice: number = data.offerPrice ?? OFFER_PRICES[leadType];

  if (!email || !message) {
    return { success: false, error: "Veuillez remplir tous les champs obligatoires." };
  }

  try {
    await ensureTable();
    await pool.query(
      `INSERT INTO leads (email, phone, message, source, lead_type, offer_price, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW())`,
      [email, phone || null, message, leadType, leadType, offerPrice]
    );

    // Await side effects so serverless runtime doesn't terminate them early.
    const [discordResult, emailResult] = await Promise.allSettled([
      notifyDiscord({
        email,
        phone,
        message,
        source: leadType === "ecommerce" ? "Formulaire e-commerce" : "Formulaire vitrine",
        leadType,
        offerPrice,
      }),
      sendConfirmationEmail(email),
    ]);

    if (discordResult.status === "fulfilled" && !discordResult.value) {
      console.warn("⚠️ Discord notification not delivered for submitContact");
    }
    if (discordResult.status === "rejected") {
      console.error("Discord notification promise rejected:", discordResult.reason);
    }

    if (emailResult.status === "fulfilled" && !emailResult.value) {
      console.warn("⚠️ Confirmation email not delivered for submitContact");
    }
    if (emailResult.status === "rejected") {
      console.error("Confirmation email promise rejected:", emailResult.reason);
    }

    return { success: true };
  } catch (err) {
    console.error("submitContact error:", err);
    return { success: false, error: "Erreur serveur. Veuillez réessayer plus tard." };
  }
}

/* ── Submit popup (kept for compatibility) ── */
export async function submitPopup(data: {
  email: string;
}): Promise<{ success: boolean; error?: string }> {
  const { email } = data;

  if (!email) {
    return { success: false, error: "Veuillez saisir votre adresse email." };
  }

  try {
    await ensureTable();
    await pool.query(
      `INSERT INTO leads (email, phone, message, source, lead_type, offer_price, created_at)
       VALUES ($1, NULL, NULL, $2, NULL, NULL, NOW())`,
      [email, "exit-popup"]
    );
    const [discordResult, emailResult] = await Promise.allSettled([
      notifyDiscord({ email, source: "Exit-Intent Popup" }),
      sendConfirmationEmail(email),
    ]);

    if (discordResult.status === "fulfilled" && !discordResult.value) {
      console.warn("⚠️ Discord notification not delivered for submitPopup");
    }
    if (discordResult.status === "rejected") {
      console.error("Discord notification promise rejected:", discordResult.reason);
    }

    if (emailResult.status === "fulfilled" && !emailResult.value) {
      console.warn("⚠️ Confirmation email not delivered for submitPopup");
    }
    if (emailResult.status === "rejected") {
      console.error("Confirmation email promise rejected:", emailResult.reason);
    }

    return { success: true };
  } catch (err) {
    console.error("submitPopup error:", err);
    return { success: false, error: "Erreur serveur. Veuillez réessayer plus tard." };
  }
}
