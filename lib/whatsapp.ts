export interface QuoteData {
  nom: string
  email: string
  telephone: string
  entreprise?: string
  typeProjet: string
  localisation: string
  surface?: string
  budgetEstimatif: string
  delaiSouhaite: string
  description: string
  services: string[]
  urgence?: boolean
  visite?: boolean
}

export function formatQuoteForWhatsApp(data: QuoteData): string {
  const message = `🏗️ *DEMANDE DE DEVIS - BTP HORIZON*

👤 *INFORMATIONS CLIENT*
• Nom: ${data.nom}
• Email: ${data.email}
• Téléphone: ${data.telephone}
${data.entreprise ? `• Entreprise: ${data.entreprise}` : ""}

🏠 *DÉTAILS DU PROJET*
• Type: ${data.typeProjet}
• Localisation: ${data.localisation}
${data.surface ? `• Surface: ${data.surface} m²` : ""}
• Budget estimatif: ${data.budgetEstimatif}
• Délai souhaité: ${data.delaiSouhaite}

🔧 *SERVICES DEMANDÉS*
${data.services.map((service) => `• ${service}`).join("\n")}

📝 *DESCRIPTION*
${data.description}

⚡ *OPTIONS*
${data.urgence ? "• ⚠️ PROJET URGENT" : ""}
${data.visite ? "• 🏠 Visite sur site demandée" : ""}

---
Merci de me faire parvenir un devis détaillé pour ce projet.`

  return encodeURIComponent(message)
}

export function generateWhatsAppURL(phoneNumber: string, message: string): string {
  return `https://wa.me/${phoneNumber}?text=${message}`
}

export const WHATSAPP_PHONE = "237657772686"
