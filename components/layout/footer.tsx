import Link from "next/link"
import { Building2, Phone, Mail, MapPin, Clock, Facebook, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-orange p-2 rounded-lg">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <div className="font-serif font-bold text-xl">BTP Horizon</div>
                <div className="text-sm text-gray-300">Cameroun</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Construire aujourd'hui, bâtir l'avenir. Entreprise de construction et conception basée à Douala,
              spécialisée dans les infrastructures durables.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-gray-300 hover:text-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-orange transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-orange mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Face hôtel Mermoz, Douala – Cameroun</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange flex-shrink-0" />
                <span className="text-gray-300">+237 657 77 26 86</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange flex-shrink-0" />
                <span className="text-gray-300">tchokokamdonaldmatinien@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-orange mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>Lun - Ven: 8h00 - 18h00</div>
                  <div>Sam: 8h00 - 14h00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg">Liens rapides</h3>
            <nav className="space-y-2 text-sm">
              <Link href="/services" className="block text-gray-300 hover:text-orange transition-colors">
                Nos services
              </Link>
              <Link href="/realisations" className="block text-gray-300 hover:text-orange transition-colors">
                Nos réalisations
              </Link>
              <Link href="/a-propos" className="block text-gray-300 hover:text-orange transition-colors">
                À propos
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-orange transition-colors">
                Contact
              </Link>
              <Link href="/devis" className="block text-gray-300 hover:text-orange transition-colors">
                Demander un devis
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg">Newsletter</h3>
            <p className="text-gray-300 text-sm">Restez informé de nos derniers projets et actualités.</p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-orange hover:bg-orange/90 text-white">S'abonner</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">© 2024 BTP Horizon Cameroun. Tous droits réservés.</div>
            <div className="flex space-x-6 text-sm">
              <Link href="/mentions-legales" className="text-gray-300 hover:text-orange transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-gray-300 hover:text-orange transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/237657772686?text=Bonjour%20BTP%20Horizon%20Cameroun"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40"
        aria-label="Contacter via WhatsApp"
      >
        <Phone className="h-6 w-6" />
      </Link>
    </footer>
  )
}
