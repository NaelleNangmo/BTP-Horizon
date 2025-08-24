import { Shield, Star, Lightbulb, Leaf, Heart } from "lucide-react"
import { Section } from "@/components/common/section"
import { SectionHeading } from "@/components/common/section-heading"
import { Reveal } from "@/components/animations/reveal"

const values = [
  {
    icon: Shield,
    title: "Intégrité",
    description: "Transparence et honnêteté dans tous nos projets et relations clients.",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Recherche constante de la qualité et du dépassement des attentes.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Adoption des meilleures pratiques et technologies modernes.",
  },
  {
    icon: Leaf,
    title: "Durabilité",
    description: "Construction respectueuse de l'environnement et des générations futures.",
  },
  {
    icon: Heart,
    title: "Engagement",
    description: "Dévouement total envers nos clients et les communautés locales.",
  },
]

export function Values() {
  return (
    <Section background="white" padding="xl">
      <SectionHeading
        subtitle="Nos valeurs"
        title="Ce qui nous guide"
        description="Nos valeurs fondamentales orientent chaque décision et chaque action dans la réalisation de vos projets."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => {
          const Icon = value.icon

          return (
            <Reveal key={index} direction="up" delay={index * 0.1}>
              <div className="group">
                <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-orange/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange/20 transition-colors">
                    <Icon className="h-7 w-7 text-orange" />
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-navy mb-4">{value.title}</h3>

                  <p className="text-steel leading-relaxed">{value.description}</p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
