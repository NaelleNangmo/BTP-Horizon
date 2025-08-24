"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/animations/reveal"
import dynamic from "next/dynamic"

// Dynamic import for 3D canvas to avoid SSR issues
const HeroCanvas = dynamic(
  () => import("@/components/three/hero-canvas").then((mod) => ({ default: mod.HeroCanvas })),
  { ssr: false },
)

// Typewriter effect hook
function useTypewriter(text: string, speed = 100) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return displayText
}

export function Hero() {
  const slogan = "Construire aujourd'hui, bâtir l'avenir"
  const typewriterText = useTypewriter(slogan, 80)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-steel to-navy">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <HeroCanvas />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-transparent to-navy/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <Reveal direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto">
            {/* Company Name */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6">
              <span className="text-white">BTP</span> <span className="text-orange">Horizon</span>
            </h1>

            {/* Subtitle */}
            <div className="text-lg md:text-xl text-gray-200 mb-8">Cameroun</div>

            {/* Typewriter Slogan */}
            <div className="h-16 flex items-center justify-center mb-12">
              <p className="text-2xl md:text-3xl lg:text-4xl font-light">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/services">
                <Button size="lg" className="bg-orange hover:bg-orange/90 text-white font-medium px-8 py-4 text-lg">
                  Nos services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link href="/realisations">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-navy px-8 py-4 text-lg bg-transparent"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Nos réalisations
                </Button>
              </Link>
            </div>

            {/* Quick Contact */}
            <Reveal direction="up" delay={0.8}>
              <div className="text-center">
                <p className="text-gray-300 mb-4">Besoin d'un devis personnalisé ?</p>
                <Link href="/devis">
                  <Button variant="ghost" className="text-orange hover:text-orange/80 hover:bg-orange/10">
                    Demander un devis gratuit →
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
