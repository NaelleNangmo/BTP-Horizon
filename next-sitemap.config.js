/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://btphorizon.cm",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/api/*", "/admin/*", "/_next/*", "/private/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/"],
      },
    ],
    additionalSitemaps: ["https://btphorizon.cm/sitemap.xml"],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    const customConfig = {
      loc: path,
      lastmod: new Date().toISOString(),
    }

    if (path === "/") {
      return {
        ...customConfig,
        changefreq: "weekly",
        priority: 1.0,
      }
    }

    if (path === "/services" || path === "/devis") {
      return {
        ...customConfig,
        changefreq: "monthly",
        priority: 0.9,
      }
    }

    if (path === "/a-propos" || path === "/realisations") {
      return {
        ...customConfig,
        changefreq: "monthly",
        priority: 0.8,
      }
    }

    if (path === "/contact") {
      return {
        ...customConfig,
        changefreq: "monthly",
        priority: 0.7,
      }
    }

    // Legal pages
    if (path.includes("mentions-legales") || path.includes("politique-confidentialite")) {
      return {
        ...customConfig,
        changefreq: "yearly",
        priority: 0.3,
      }
    }

    return {
      ...customConfig,
      changefreq: "monthly",
      priority: 0.6,
    }
  },
}
