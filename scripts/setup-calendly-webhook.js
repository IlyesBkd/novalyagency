/**
 * Script pour créer le webhook Calendly
 * 
 * Usage:
 *   node scripts/setup-calendly-webhook.js https://ton-domaine.vercel.app
 */

const CALENDLY_TOKEN = "eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzc0NzM3MjQ0LCJqdGkiOiI3YjE4M2UzZC0yMzVhLTRkOTUtOGZhNC1iNDBkM2IwNDhiM2EiLCJ1c2VyX3V1aWQiOiIzYWUxYjUzNi1hMTg0LTRlNGYtYWM5Zi02NzFhYTVjY2E2YjgiLCJzY29wZSI6IndlYmhvb2tzOnJlYWQgd2ViaG9va3M6d3JpdGUgZ3JvdXBzOnJlYWQgb3JnYW5pemF0aW9uczpyZWFkIG9yZ2FuaXphdGlvbnM6d3JpdGUgdXNlcnM6cmVhZCBhdmFpbGFiaWxpdHk6cmVhZCBhdmFpbGFiaWxpdHk6d3JpdGUgZXZlbnRfdHlwZXM6cmVhZCBldmVudF90eXBlczp3cml0ZSBsb2NhdGlvbnM6cmVhZCByb3V0aW5nX2Zvcm1zOnJlYWQgc2hhcmVzOndyaXRlIHNjaGVkdWxlZF9ldmVudHM6cmVhZCBzY2hlZHVsZWRfZXZlbnRzOndyaXRlIHNjaGVkdWxpbmdfbGlua3M6d3JpdGUifQ.BHTuC6gHSRXFZhGqUS2v8kUdZCLoAT6JTouAHBWvyW2GQlJVw5UZzKlh1xPZ3pAIK8hWJLgPeT1VDccy2lv4RA";

async function setupWebhook() {
  const domain = process.argv[2];
  
  if (!domain) {
    console.error("❌ Usage: node scripts/setup-calendly-webhook.js https://ton-domaine.vercel.app");
    process.exit(1);
  }

  const webhookUrl = `${domain}/api/calendly-webhook`;

  console.log("🔧 Configuration du webhook Calendly...");
  console.log(`📍 URL: ${webhookUrl}`);

  // 1. Récupérer l'URI de l'organisation
  console.log("\n1️⃣ Récupération de l'organisation...");
  const userResponse = await fetch("https://api.calendly.com/users/me", {
    headers: {
      "Authorization": `Bearer ${CALENDLY_TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  if (!userResponse.ok) {
    console.error("❌ Erreur lors de la récupération de l'utilisateur:", await userResponse.text());
    process.exit(1);
  }

  const userData = await userResponse.json();
  const organizationUri = userData.resource.current_organization;
  console.log(`✅ Organisation: ${organizationUri}`);

  // 2. Créer le webhook
  console.log("\n2️⃣ Création du webhook...");
  const webhookResponse = await fetch("https://api.calendly.com/webhook_subscriptions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${CALENDLY_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: webhookUrl,
      events: ["invitee.created"],
      organization: organizationUri,
      scope: "organization",
    }),
  });

  if (!webhookResponse.ok) {
    const error = await webhookResponse.text();
    console.error("❌ Erreur lors de la création du webhook:", error);
    process.exit(1);
  }

  const webhookData = await webhookResponse.json();
  console.log("✅ Webhook créé avec succès!");
  console.log("\n📋 Détails:");
  console.log(`   - ID: ${webhookData.resource.uri}`);
  console.log(`   - URL: ${webhookData.resource.callback_url}`);
  console.log(`   - État: ${webhookData.resource.state}`);
  console.log(`   - Événements: ${webhookData.resource.events.join(", ")}`);

  console.log("\n🎉 Configuration terminée!");
  console.log("💡 Teste en créant une réservation sur ton Calendly");
}

setupWebhook().catch(console.error);
