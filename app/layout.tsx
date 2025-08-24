import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import { DefaultSeo } from "next-seo"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { LanguageProvider } from "@/components/providers/language-provider"
import { WhatsAppFloat } from "@/components/ui/whatsapp-float"
import { defaultSEO } from "@/lib/seo"
import { organizationSchema, localBusinessSchema } from "@/lib/schema"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "BTP Horizon Cameroun – Construire aujourd'hui, bâtir l'avenir",
  description:
    "Entreprise de construction et conception basée à Douala, Cameroun. Spécialisée dans les bâtiments d'habitation, fermes d'élevage et approvisionnement en eau potable.",
  generator: "Next.js",
  keywords: "BTP Cameroun, construction Douala, fermes élevage, eau potable, bâtiments habitation",
  authors: [{ name: "BTP Horizon Cameroun" }],
  creator: "BTP Horizon Cameroun",
  publisher: "BTP Horizon Cameroun",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://btphorizon.cm",
    siteName: "BTP Horizon Cameroun",
    title: "BTP Horizon Cameroun – Construire aujourd'hui, bâtir l'avenir",
    description: "Entreprise de construction et conception basée à Douala, Cameroun.",
    images: [
      {
        url: "/social-card.png",
        width: 1200,
        height: 630,
        alt: "BTP Horizon Cameroun",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BTP Horizon Cameroun – Construire aujourd'hui, bâtir l'avenir",
    description: "Entreprise de construction et conception basée à Douala, Cameroun.",
    images: ["/social-card.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${inter.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <DefaultSeo {...defaultSEO} />
            {children}
            <Toaster />
            <WhatsAppFloat />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
