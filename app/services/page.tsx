import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Section } from "@/components/common/section"
import { SectionHeading } from "@/components/common/section-heading"
import { Reveal } from "@/components/animations/reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Tractor, Droplets, Home, Wrench, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Services | BTP Horizon Cameroun",
  description:
    "Découvrez nos services de construction : conception architecturale, fermes d'élevage, approvisionnement en eau potable, bâtiments d'habitation et rénovation.",
}

const services = [
  {
    icon: Building,
    title: "Conception architecturale",
    description: "Plans détaillés et design architectural pour tous types de projets de construction.",
    features: ["Plans 2D et 3D", "Études de faisabilité", "Design moderne", "Respect des normes"],
  },
  {
    icon: Tractor,
    title: "Construction de fermes d'élevage",
    description: "Infrastructures modernes et fonctionnelles pour l'élevage et l'agriculture.",
    features: ["Étables modernes", "Systèmes de ventilation", "Stockage des aliments", "Zones de quarantaine"],
  },
  {
    icon: Droplets,
    title: "Approvisionnement en eau potable",
    description: "Solutions complètes pour l'accès à l'eau potable dans les communautés.",
    features: ["Forages et puits", "Châteaux d'eau", "Réseaux de distribution", "Stations de traitement"],
  },
  {
    icon: Home,
    title: "Bâtiments d'habitation",
    description: "Construction de maisons individuelles et logements collectifs de qualité.",
    features: ["Maisons individuelles", "Logements collectifs", "Finitions haut de gamme", "Respect des délais"],
  },
  {
    icon: Wrench,
    title: "Rénovation",
    description: "Modernisation et réhabilitation de bâtiments existants.",
    features: ["Rénovation complète", "Mise aux normes", "Amélioration énergétique", "Extension de bâtiments"],
  },
  {
    icon: Building,
    title: "Conseil technique",
    description: "Expertise et accompagnement pour vos projets de construction.",
    features: ["Audit technique", "Suivi de chantier", "Contrôle qualité", "Formation équipes"],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Breadcrumbs */}
        <Section padding="sm">
          <Breadcrumbs items={[{ label: "Services" }]} />
        </Section>

        {/* Hero Section */}
        <Section background="gradient" padding="xl">
          <div className="text-center text-white">
            <Reveal direction="up">
              <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">Nos Services</h1>
              <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
                Une expertise complète pour tous vos projets de construction
              </p>
            </Reveal>
          </div>
        </Section>

        {/* Services Grid */}
        <Section background="white" padding="xl">
          <SectionHeading
            subtitle="Notre expertise"
            title="Des solutions adaptées à vos besoins"
            description="Nous offrons une gamme complète de services pour répondre à tous vos projets de construction et d'infrastructure."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <Reveal key={index} direction="up" delay={index * 0.1}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="bg-orange/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="h-7 w-7 text-orange" />
                      </div>
                      <CardTitle className="text-xl font-serif text-navy">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-steel mb-6 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-steel">
                            <div className="w-2 h-2 bg-orange rounded-full mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="light-gray" padding="xl">
          <div className="text-center">
            <Reveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-navy mb-6">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-xl text-steel mb-8 max-w-2xl mx-auto">
                Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé gratuit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/devis">
                  <Button size="lg" className="bg-orange hover:bg-orange/90 text-white px-8">
                    Demander un devis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-navy text-navy hover:bg-navy hover:text-white px-8 bg-transparent"
                  >
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
