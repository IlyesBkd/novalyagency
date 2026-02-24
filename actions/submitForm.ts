"use server";

import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes("localhost")
    ? false
    : { rejectUnauthorized: false },
});

export async function submitForm(data: {
  name: string;
  email: string;
  phone: string;
  plan: string;
  project: string;
}): Promise<{ success: boolean; error?: string }> {
  const { name, email, phone, plan, project } = data;

  if (!name || !email || !plan || !project) {
    return { success: false, error: "Veuillez remplir tous les champs obligatoires." };
  }

  try {
    await pool.query(
      `INSERT INTO leads (name, email, phone, project_desc, plan_choice, created_at)
       VALUES ($1, $2, $3, $4, $5, NOW())`,
      [name, email, phone || null, project, plan]
    );
    return { success: true };
  } catch (err) {
    console.error("DB insert error:", err);
    return { success: false, error: "Erreur serveur. Veuillez réessayer plus tard." };
  }
}
