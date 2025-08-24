import type { Organization, LocalBusiness, Service, BreadcrumbList, Article, WithContext } from "schema-dts"

export const organizationSchema = (): WithContext<Organization> => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BTP Horizon Cameroun",
  alternateName: "BTP Horizon",
  description:
    "Entreprise de construction et conception basée à Douala, Cameroun. Spécialisée dans les bâtiments d'habitation, fermes d'élevage et approvisionnement en eau potable.",
  url: "https://btphorizon.cm",
  logo: "https://btphorizon.cm/logo.png",
  image: "https://btphorizon.cm/social-card.png",
  telephone: "+237657772686",
  email: "tchokokamdonaldmatinien@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Face hôtel Mermoz",
    addressLocality: "Douala",
    addressCountry: "CM",
  },
  founder: {
    "@type": "Person",
    name: "Donald Tchokokam",
    jobTitle: "Promoteur",
    alumniOf: {
      "@type": "Organization",
      name: "École Nationale Supérieure des Travaux Publics (ENSTP)",
    },
  },
  foundingDate: "2021",
  numberOfEmployees: "5-10",
  slogan: "Construire aujourd'hui, bâtir l'avenir",
  sameAs: [
    "https://www.facebook.com/btphorizoncameroun",
    "https://www.linkedin.com/company/btp-horizon-cameroun",
    "https://wa.me/237657772686",
  ],
})

export const localBusinessSchema = (): WithContext<LocalBusiness> => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://btphorizon.cm/#localbusiness",
  name: "BTP Horizon Cameroun",
  description:
    "Entreprise de construction et conception basée à Douala, Cameroun. Spécialisée dans les bâtiments d'habitation, fermes d'élevage et approvisionnement en eau potable.",
  url: "https://btphorizon.cm",
  telephone: "+237657772686",
  email: "tchokokamdonaldmatinien@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Face hôtel Mermoz",
    addressLocality: "Douala",
    addressRegion: "Littoral",
    addressCountry: "CM",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 4.0511,
    longitude: 9.7679,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "XAF",
  paymentAccepted: "Cash, Bank Transfer",
  areaServed: {
    "@type": "State",
    name: "Littoral Region, Cameroon",
  },
})

export const serviceSchema = (name: string, description: string, serviceType: string): WithContext<Service> => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  serviceType,
  provider: {
    "@type": "Organization",
    name: "BTP Horizon Cameroun",
    url: "https://btphorizon.cm",
    telephone: "+237657772686",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Face hôtel Mermoz",
      addressLocality: "Douala",
      addressCountry: "CM",
    },
  },
  areaServed: {
    "@type": "State",
    name: "Littoral Region, Cameroon",
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://btphorizon.cm/contact",
    servicePhone: "+237657772686",
  },
})

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>): WithContext<BreadcrumbList> => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const articleSchema = (
  title: string,
  description: string,
  url: string,
  publishedDate: string,
  modifiedDate: string,
  imageUrl: string,
): WithContext<Article> => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url,
  datePublished: publishedDate,
  dateModified: modifiedDate,
  author: {
    "@type": "Organization",
    name: "BTP Horizon Cameroun",
    url: "https://btphorizon.cm",
  },
  publisher: {
    "@type": "Organization",
    name: "BTP Horizon Cameroun",
    logo: {
      "@type": "ImageObject",
      url: "https://btphorizon.cm/logo.png",
    },
  },
  image: {
    "@type": "ImageObject",
    url: imageUrl,
    width: 1200,
    height: 630,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": url,
  },
})

// Predefined service schemas
export const constructionServices = [
  serviceSchema(
    "Conception architecturale",
    "Plans détaillés et design architectural pour tous types de projets de construction",
    "Architectural Design",
  ),
  serviceSchema(
    "Construction de fermes d'élevage",
    "Infrastructures modernes et fonctionnelles pour l'élevage et l'agriculture",
    "Farm Construction",
  ),
  serviceSchema(
    "Approvisionnement en eau potable",
    "Solutions complètes pour l'accès à l'eau potable dans les communautés",
    "Water Supply Systems",
  ),
  serviceSchema(
    "Bâtiments d'habitation",
    "Construction de maisons individuelles et logements collectifs de qualité",
    "Residential Construction",
  ),
  serviceSchema("Rénovation", "Modernisation et réhabilitation de bâtiments existants", "Building Renovation"),
]
