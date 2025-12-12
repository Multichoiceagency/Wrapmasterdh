import { getSupabaseClient } from "./s3"

/**
 * Database operations for form submissions
 * Uses existing Supabase client from s3.ts
 */

export interface OfferteSubmission {
  naam: string
  email: string
  telefoonnummer?: string
  bedrijfsnaam?: string
  kenteken?: string
  bouwjaar?: string
  huidige_kleur?: string
  gewenste_kleur?: string
  bericht?: string
  bijlagen?: string[]
  ip_address?: string
  user_agent?: string
}

export interface ContactSubmission {
  naam: string
  email: string
  telefoonnummer?: string
  bericht: string
  ip_address?: string
  user_agent?: string
}

/**
 * Save an offerte submission to the database
 */
export async function saveOfferteSubmission(data: OfferteSubmission): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    const supabase = getSupabaseClient()

    const { data: result, error } = await supabase
      .from("offerte_submissions")
      .insert([{
        naam: data.naam,
        email: data.email,
        telefoonnummer: data.telefoonnummer || null,
        bedrijfsnaam: data.bedrijfsnaam || null,
        kenteken: data.kenteken || null,
        bouwjaar: data.bouwjaar || null,
        huidige_kleur: data.huidige_kleur || null,
        gewenste_kleur: data.gewenste_kleur || null,
        bericht: data.bericht || null,
        bijlagen: data.bijlagen || [],
        ip_address: data.ip_address || null,
        user_agent: data.user_agent || null,
        status: "nieuw",
      }])
      .select("id")
      .single()

    if (error) {
      console.error("Database error saving offerte:", error)
      return { success: false, error: error.message }
    }

    return { success: true, id: result?.id }
  } catch (err) {
    console.error("Error saving offerte submission:", err)
    return { success: false, error: "Database connection error" }
  }
}

/**
 * Save a contact form submission to the database
 */
export async function saveContactSubmission(data: ContactSubmission): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    const supabase = getSupabaseClient()

    const { data: result, error } = await supabase
      .from("contact_submissions")
      .insert([{
        naam: data.naam,
        email: data.email,
        telefoonnummer: data.telefoonnummer || null,
        bericht: data.bericht,
        ip_address: data.ip_address || null,
        user_agent: data.user_agent || null,
        status: "nieuw",
      }])
      .select("id")
      .single()

    if (error) {
      console.error("Database error saving contact:", error)
      return { success: false, error: error.message }
    }

    return { success: true, id: result?.id }
  } catch (err) {
    console.error("Error saving contact submission:", err)
    return { success: false, error: "Database connection error" }
  }
}

/**
 * Check if database is configured and accessible
 */
export async function isDatabaseConfigured(): Promise<boolean> {
  try {
    const supabase = getSupabaseClient()
    // Simple health check - try to access the tables
    const { error } = await supabase.from("offerte_submissions").select("id").limit(1)
    return !error
  } catch {
    return false
  }
}
