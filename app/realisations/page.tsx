import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Section } from "@/components/common/section"
import { SectionHeading } from "@/components/common/section-heading"
import { Reveal } from "@/components/animations/reveal"
import { Gallery } from "@/components/realisations/gallery"

export const metadata: Metadata = {
  title: "Réalisations | BTP Horizon Cameroun",
  description:
    "Découvrez nos projets réalisés : maisons d'habitation, fermes d'élevage, infrastructures d'eau potable et rénovations à Douala et au Cameroun.",
}

export default function RealisationsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Breadcrumbs */}
        <Section padding="sm">
          <Breadcrumbs items={[{ label: "Réalisations" }]} />
        </Section>

        {/* Hero Section */}
        <Section background="gradient" padding="xl">
          <div className="text-center text-white">
            <Reveal direction="up">
              <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">Nos Réalisations</h1>
              <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
                Découvrez nos projets qui façonnent l'avenir du Cameroun
              </p>
            </Reveal>
          </div>
        </Section>

        {/* Gallery Section */}
        <Section background="white" padding="xl">
          <SectionHeading
            subtitle="Notre portfolio"
            title="Projets réalisés avec excellence"
            description="Chaque projet reflète notre engagement envers la qualité, l'innovation et la satisfaction client."
          />
          <Gallery />
        </Section>
      </main>
      <Footer />
    </>
  )
}
