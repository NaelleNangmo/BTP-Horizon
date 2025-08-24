"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Building2, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { LanguageToggle } from "@/components/ui/language-toggle"
import { useLanguage } from "@/components/providers/language-provider"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/a-propos" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.projects"), href: "/realisations" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glassmorphism backdrop-blur-md shadow-lg" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-orange text-white p-2 rounded-lg">
              <Building2 className="h-6 w-6" />
            </div>
            <div className="hidden sm:block">
              <div className="font-serif font-bold text-xl text-navy dark:text-white">BTP Horizon</div>
              <div className="text-sm text-steel dark:text-gray-300 -mt-1">Cameroun</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-navy dark:text-white hover:text-orange transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-2">
            <ThemeToggle />
            <LanguageToggle />
            <Link href="/devis">
              <Button className="bg-orange hover:bg-orange/90 text-white font-medium ml-2">{t("nav.quote")}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-navy dark:text-white hover:text-orange transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glassmorphism backdrop-blur-md border-t border-white/20">
            <nav className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-navy dark:text-white hover:text-orange transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-white/20">
                <ThemeToggle />
                <LanguageToggle />
              </div>
              <div className="pt-2">
                <Link href="/devis" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-orange hover:bg-orange/90 text-white font-medium">
                    {t("nav.quote")}
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
