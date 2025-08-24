"use client"

import React from "react"
import { useInView } from "react-intersection-observer"
import { Building2, Users, Award, Clock } from "lucide-react"
import { Section } from "@/components/common/section"
import { Reveal } from "@/components/animations/reveal"

// Counter animation hook
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = React.useState(0)
  const [ref, inView] = useInView({ triggerOnce: true })

  React.useEffect(() => {
    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    if (inView) {
      requestAnimationFrame(animate)
    }
  }, [inView, end, duration])

  return { count, ref }
}

const stats = [
  {
    icon: Building2,
    value: 25,
    suffix: "+",
    label: "Projets réalisés",
    description: "Bâtiments et infrastructures",
  },
  {
    icon: Clock,
    value: 3,
    suffix: " ans",
    label: "D'expérience",
    description: "Dans le secteur BTP",
  },
  {
    icon: Users,
    value: 98,
    suffix: "%",
    label: "Clients satisfaits",
    description: "Taux de satisfaction",
  },
  {
    icon: Award,
    value: 100,
    suffix: "%",
    label: "Projets livrés",
    description: "Respect des délais",
  },
]

export function Stats() {
  return (
    <Section background="light-gray" padding="xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const { count, ref } = useCounter(stat.value)
          const Icon = stat.icon

          return (
            <Reveal key={index} direction="up" delay={index * 0.1}>
              <div ref={ref} className="text-center">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-orange" />
                  </div>

                  <div className="text-4xl font-serif font-bold text-navy mb-2">
                    {count}
                    {stat.suffix}
                  </div>

                  <h3 className="text-lg font-semibold text-navy mb-2">{stat.label}</h3>

                  <p className="text-steel text-sm">{stat.description}</p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
