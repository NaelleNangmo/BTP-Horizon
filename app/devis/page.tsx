import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Section } from "@/components/common/section"
import { SectionHeading } from "@/components/common/section-heading"
import { Reveal } from "@/components/animations/reveal"
import { DevisForm } from "@/components/forms/devis-form"
import { CheckCircle, Clock, Shield, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Demander un devis | BTP Horizon Cameroun",
  description:
    "Obtenez un devis gratuit et personnalisé pour votre projet de construction avec BTP Horizon Cameroun. Réponse rapide garantie.",
}

const advantages = [
  {
    icon: CheckCircle,
    title: "Devis gratuit",
    description: "Estimation détaillée sans engagement de votre part",
  },
  {
    icon: Clock,
    title: "Réponse rapide",
    description: "Nous vous recontactons sous 24h maximum",
  },
  {
    icon: Shield,
    title: "Transparence totale",
    description: "Prix clairs et détaillés, sans surprise",
  },
  {
    icon: Award,
    title: "Expertise reconnue",
    description: "Plus de 25 projets réalisés avec succès",
  },
]

const faq = [
  {
    question: "Combien de temps faut-il pour recevoir un devis ?",
    answer: "Nous nous engageons à vous fournir un devis détaillé sous 48h maximum après réception de votre demande.",
  },
  {
    question: "Le devis est-il vraiment gratuit ?",
    answer: "Oui, absolument. Notre devis est entièrement gratuit et sans engagement de votre part.",
  },
  {
    question: "Quelles informations dois-je fournir ?",
    answer:
      "Plus vous nous donnez de détails sur votre projet, plus notre devis sera précis. N'hésitez pas à joindre des plans ou photos si vous en avez.",
  },
  {
    question: "Intervenez-vous dans toute la région ?",
    answer:
      "Nous intervenons principalement dans la région du Littoral, avec Douala comme base. Contactez-nous pour connaître notre zone d'intervention exacte.",
  },
]

export default function DevisPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Breadcrumbs */}
        <Section padding="sm">
          <Breadcrumbs items={[{ label: "Demander un devis" }]} />
        </Section>

        {/* Hero Section */}
        <Section background="gradient" padding="xl">
          <div className="text-center text-white">
            <Reveal direction="up">
              <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">Demander un devis</h1>
              <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
                Obtenez une estimation gratuite et personnalisée pour votre projet
              </p>
            </Reveal>
          </div>
        </Section>

        {/* Advantages */}
        <Section background="white" padding="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon

              return (
                <Reveal key={index} direction="up" delay={index * 0.1}>
                  <div className="text-center">
                    <div className="bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-orange" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-navy mb-2">{advantage.title}</h3>
                    <p className="text-steel text-sm">{advantage.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Section>

        {/* Form Section */}
        <Section background="light-gray" padding="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal direction="left">
              <div>
                <SectionHeading
                  subtitle="Votre projet"
                  title="Parlez-nous de vos besoins"
                  description="Remplissez ce formulaire pour recevoir un devis personnalisé adapté à votre projet."
                  centered={false}
                />
                <DevisForm />
              </div>
            </Reveal>

            <Reveal direction="right">
              <div>
                <h2 className="text-2xl font-serif font-semibold text-navy mb-6">Questions fréquentes</h2>
                <div className="space-y-6">
                  {faq.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                      <h3 className="font-semibold text-navy mb-3">{item.question}</h3>
                      <p className="text-steel text-sm leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
