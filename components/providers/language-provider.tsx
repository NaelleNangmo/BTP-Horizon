"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.services": "Services",
    "nav.projects": "Réalisations",
    "nav.contact": "Contact",
    "nav.quote": "Demander un devis",

    // Hero section
    "hero.slogan": "Construire aujourd'hui, bâtir l'avenir",
    "hero.services": "Nos services",
    "hero.projects": "Nos réalisations",
    "hero.quote.text": "Besoin d'un devis personnalisé ?",
    "hero.quote.cta": "Demander un devis gratuit →",

    // Theme
    "theme.light": "Clair",
    "theme.dark": "Sombre",
    "theme.system": "Système",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.quote": "Request Quote",

    // Hero section
    "hero.slogan": "Building today, constructing the future",
    "hero.services": "Our services",
    "hero.projects": "Our projects",
    "hero.quote.text": "Need a personalized quote?",
    "hero.quote.cta": "Request a free quote →",

    // Theme
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.system": "System",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "fr" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
