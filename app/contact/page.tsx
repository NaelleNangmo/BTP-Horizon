import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Section } from "@/components/common/section"
import { SectionHeading } from "@/components/common/section-heading"
import { Reveal } from "@/components/animations/reveal"
import { ContactForm } from "@/components/forms/contact-form"
import { GoogleMap } from "@/components/contact/google-map"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | BTP Horizon Cameroun",
  description:
    "Contactez BTP Horizon Cameroun pour vos projets de construction. Téléphone, email, adresse à Douala et formulaire de contact.",
}

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    details: ["+237 657 77 26 86"],
    description: "Appelez-nous ou contactez-nous via WhatsApp",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["tchokokamdonaldmatinien@gmail.com"],
    description: "Envoyez-nous un message, nous répondons rapidement",
  },
  {
    icon: MapPin,
    title: "Adresse",
    details: ["Face hôtel Mermoz", "Douala – Cameroun"],
    description: "Venez nous rendre visite à notre bureau",
  },
  {
    icon: Clock,
    title: "Horaires",
    details: ["Lun - Ven: 8h00 - 18h00", "Sam: 8h00 - 14h00"],
    description: "Nous sommes disponibles du lundi au samedi",
  },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Breadcrumbs */}
        <Section padding="sm">
          <Breadcrumbs items={[{ label: "Contact" }]} />
        </Section>

        {/* Hero Section */}
        <Section background="gradient" padding="xl">
          <div className="text-center text-white">
            <Reveal direction="up">
              <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">Contactez-nous</h1>
              <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">Parlons de votre projet ensemble</p>
            </Reveal>
          </div>
        </Section>

        {/* Contact Info */}
        <Section background="white" padding="xl">
          <SectionHeading
            subtitle="Nos coordonnées"
            title="Comment nous joindre"
            description="Plusieurs moyens pour nous contacter et discuter de votre projet."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon

              return (
                <Reveal key={index} direction="up" delay={index * 0.1}>
                  <div className="text-center">
                    <div className="bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-orange" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-navy mb-2">{info.title}</h3>
                    <div className="space-y-1 mb-3">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-steel font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-sm text-steel">{info.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal direction="left">
              <div>
                <h2 className="text-2xl font-serif font-semibold text-navy mb-6">Envoyez-nous un message</h2>
                <ContactForm />
              </div>
            </Reveal>

            <Reveal direction="right">
              <div>
                <h2 className="text-2xl font-serif font-semibold text-navy mb-6">Notre localisation</h2>
                <GoogleMap />
              </div>
            </Reveal>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
