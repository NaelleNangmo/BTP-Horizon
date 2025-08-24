"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/animations/reveal"
import { useLanguage } from "@/components/providers/language-provider"
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
  const { t } = useLanguage()
  const slogan = t("hero.slogan")
  const typewriterText = useTypewriter(slogan, 80)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-navy to-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-black">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-70">
        <HeroCanvas />
      </div>

      {/* Enhanced overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-navy/60 to-slate-900/90" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-navy/30 to-slate-900/80" />

      {/* Animated particles overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <Reveal direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto">
            {/* Company Name */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 drop-shadow-2xl">
              <span className="text-white drop-shadow-lg">BTP</span>{" "}
              <span className="text-orange drop-shadow-lg animate-pulse">Horizon</span>
            </h1>

            {/* Subtitle */}
            <div className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-lg">Cameroun</div>

            {/* Typewriter Slogan */}
            <div className="h-16 flex items-center justify-center mb-12">
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white drop-shadow-xl">
                {typewriterText}
                <span className="animate-pulse text-orange">|</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-orange hover:bg-orange/90 text-white font-medium px-8 py-4 text-lg shadow-2xl hover:shadow-orange/25 transition-all duration-300 hover:scale-105"
                >
                  {t("hero.services")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link href="/realisations">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/80 text-white hover:bg-white hover:text-navy px-8 py-4 text-lg bg-white/10 backdrop-blur-sm shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105"
                >
                  <Play className="mr-2 h-5 w-5" />
                  {t("hero.projects")}
                </Button>
              </Link>
            </div>

            <Reveal direction="up" delay={0.8}>
              <div className="text-center">
                <p className="text-gray-300 mb-4 drop-shadow-lg">{t("hero.quote.text")}</p>
                <Link href="/devis">
                  <Button
                    variant="ghost"
                    className="text-orange hover:text-orange/80 hover:bg-orange/10 backdrop-blur-sm transition-all duration-300"
                  >
                    {t("hero.quote.cta")}
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center shadow-lg backdrop-blur-sm">
          <div className="w-1 h-3 bg-orange rounded-full mt-2 animate-pulse shadow-lg"></div>
        </div>
      </div>
    </section>
  )
}
