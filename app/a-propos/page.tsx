import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Section } from "@/components/common/section"
import { SectionHeading } from "@/components/common/section-heading"
import { Reveal } from "@/components/animations/reveal"
import { Values } from "@/components/home/values"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "À propos | BTP Horizon Cameroun",
  description:
    "Découvrez BTP Horizon Cameroun, entreprise de construction basée à Douala. Notre mission, vision et l'histoire de notre promoteur Donald Tchokokam.",
}

const timeline = [
  {
    year: "2021",
    title: "Création de l'entreprise",
    description: "Fondation de BTP Horizon Cameroun avec une vision claire : construire l'avenir du Cameroun.",
  },
  {
    year: "2022",
    title: "Premiers grands chantiers",
    description: "Réalisation de nos premiers projets d'envergure dans la construction de bâtiments d'habitation.",
  },
  {
    year: "2024",
    title: "Vision d'expansion",
    description: "Développement de notre expertise dans les fermes d'élevage et l'approvisionnement en eau potable.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Breadcrumbs */}
        <Section padding="sm">
          <Breadcrumbs items={[{ label: "À propos" }]} />
        </Section>

        {/* Hero Section */}
        <Section background="gradient" padding="xl">
          <div className="text-center text-white">
            <Reveal direction="up">
              <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">À propos de nous</h1>
              <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
                Une entreprise jeune et dynamique, engagée pour l'avenir du Cameroun
              </p>
            </Reveal>
          </div>
        </Section>

        {/* Company Presentation */}
        <Section background="white" padding="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <div>
                <SectionHeading subtitle="Notre entreprise" title="BTP Horizon Cameroun" centered={false} />
                <div className="space-y-6 text-steel leading-relaxed">
                  <p>
                    BTP Horizon Cameroun est une jeune entreprise de construction et de conception basée dans la région
                    du Littoral, engagée à offrir des infrastructures modernes, durables et accessibles. Notre expertise
                    couvre la réalisation de bâtiments d'habitation ainsi que la construction de fermes d'élevage, deux
                    secteurs stratégiques pour le développement du Cameroun.
                  </p>
                  <p>
                    Guidée par des valeurs d'intégrité, d'excellence, d'innovation, de durabilité et d'engagement
                    communautaire, notre mission est de bâtir des ouvrages qui améliorent le cadre de vie, stimulent
                    l'économie locale et répondent aux besoins réels des populations.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="relative">
                <Image
                  src="/placeholder-vee4b.png"
                  alt="Chantier de construction BTP Horizon Cameroun"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </Reveal>
          </div>
        </Section>

        {/* Mission & Vision */}
        <Section background="light-gray" padding="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal direction="up">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-orange" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-navy mb-4">Notre Mission</h3>
                <p className="text-steel leading-relaxed">
                  Concevoir et réaliser des infrastructures durables, adaptées aux besoins des communautés. Nous mettons
                  notre savoir-faire, notre rigueur technique et notre engagement envers la qualité au service
                  d'infrastructures accessibles, fiables et respectueuses des normes, afin de contribuer au
                  développement socio-économique du pays.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-orange" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-navy mb-4">Notre Vision</h3>
                <p className="text-steel leading-relaxed">
                  Être l'entreprise de BTP qui transforme le cadre de vie des communautés camerounaises, en érigeant des
                  infrastructures modernes, accessibles et adaptées, contribuant ainsi au développement socio-économique
                  du pays.
                </p>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* Values Section */}
        <Values />

        {/* Timeline */}
        <Section background="white" padding="xl">
          <SectionHeading
            subtitle="Notre parcours"
            title="Une croissance constante"
            description="Découvrez les étapes clés de notre développement depuis notre création."
          />

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <Reveal key={index} direction="up" delay={index * 0.2}>
                <div className="flex items-start space-x-6 mb-12 last:mb-0">
                  <div className="flex-shrink-0">
                    <div className="bg-orange text-white w-16 h-16 rounded-full flex items-center justify-center font-serif font-bold text-lg">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-serif font-semibold text-navy mb-2">{item.title}</h3>
                    <p className="text-steel leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Founder Bio */}
        <Section background="light-gray" padding="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <div className="relative">
                <Image
                  src="/placeholder-a7v8d.png"
                  alt="Donald Tchokokam, Promoteur BTP Horizon Cameroun"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-lg mx-auto"
                />
              </div>
            </Reveal>

            <Reveal direction="right">
              <div>
                <SectionHeading
                  subtitle="Notre promoteur"
                  title="Donald Tchokokam"
                  description="Diplômé de l'ENSTP"
                  centered={false}
                />
                <div className="space-y-6 text-steel leading-relaxed">
                  <p>
                    Tchokokam Donald, diplômé de l'ENSTP et promoteur de Horizon BTP Cameroun, incarne une nouvelle
                    génération d'entrepreneurs bâtisseurs. Fort de son expertise et de réalisations notables — de la
                    conception de bâtiments d'habitation à la construction de châteaux d'eau et de fermes modernes — il
                    porte la vision d'un BTP innovant, accessible et durable.
                  </p>
                  <p>
                    Guidé par la rigueur, l'innovation et l'engagement, il œuvre à construire aujourd'hui les
                    infrastructures qui façonneront l'avenir socio-économique du Cameroun.
                  </p>
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
