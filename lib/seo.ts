import type { DefaultSeoProps } from "next-seo"

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: "%s | BTP Horizon Cameroun",
  defaultTitle: "BTP Horizon Cameroun – Construire aujourd'hui, bâtir l'avenir",
  description:
    "Entreprise de construction et conception basée à Douala, Cameroun. Spécialisée dans les bâtiments d'habitation, fermes d'élevage, approvisionnement en eau potable et rénovation. Devis gratuit.",
  canonical: "https://btphorizon.cm",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://btphorizon.cm",
    siteName: "BTP Horizon Cameroun",
    title: "BTP Horizon Cameroun – Construire aujourd'hui, bâtir l'avenir",
    description:
      "Entreprise de construction et conception basée à Douala, Cameroun. Spécialisée dans les bâtiments d'habitation, fermes d'élevage et approvisionnement en eau potable.",
    images: [
      {
        url: "https://btphorizon.cm/social-card.png",
        width: 1200,
        height: 630,
        alt: "BTP Horizon Cameroun - Construction et conception",
        type: "image/png",
      },
    ],
  },
  twitter: {
    handle: "@btphorizon",
    site: "@btphorizon",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "BTP Cameroun, construction Douala, entreprise construction, fermes élevage, eau potable, bâtiments habitation, rénovation, conception architecturale, Donald Tchokokam, ENSTP",
    },
    {
      name: "author",
      content: "BTP Horizon Cameroun",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "googlebot",
      content: "index, follow",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "theme-color",
      content: "#0F2A3D",
    },
    {
      name: "msapplication-TileColor",
      content: "#0F2A3D",
    },
    {
      name: "geo.region",
      content: "CM-LT",
    },
    {
      name: "geo.placename",
      content: "Douala",
    },
    {
      name: "geo.position",
      content: "4.0511;9.7679",
    },
    {
      name: "ICBM",
      content: "4.0511, 9.7679",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
  ],
}

export const generatePageSEO = (
  title: string,
  description: string,
  path: string,
  additionalData?: {
    images?: Array<{
      url: string
      width: number
      height: number
      alt: string
    }>
    type?: string
    publishedTime?: string
    modifiedTime?: string
  },
) => {
  const canonical = `https://btphorizon.cm${path}`

  return {
    title,
    description,
    canonical,
    openGraph: {
      title,
      description,
      url: canonical,
      type: additionalData?.type || "website",
      images: additionalData?.images || [
        {
          url: "https://btphorizon.cm/social-card.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(additionalData?.publishedTime && {
        publishedTime: additionalData.publishedTime,
      }),
      ...(additionalData?.modifiedTime && {
        modifiedTime: additionalData.modifiedTime,
      }),
    },
    twitter: {
      cardType: "summary_large_image",
      title,
      description,
      images: additionalData?.images?.[0]?.url || "https://btphorizon.cm/social-card.png",
    },
  }
}
