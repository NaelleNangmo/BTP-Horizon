import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/home/hero"
import { Stats } from "@/components/home/stats"
import { Values } from "@/components/home/values"

export const metadata: Metadata = {
  title: "Accueil | BTP Horizon Cameroun",
  description:
    "BTP Horizon Cameroun - Entreprise de construction et conception basée à Douala. Spécialisée dans les bâtiments d'habitation, fermes d'élevage et approvisionnement en eau potable.",
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Values />
      </main>
      <Footer />
    </>
  )
}
