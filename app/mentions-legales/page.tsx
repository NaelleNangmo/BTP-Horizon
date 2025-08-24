import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Section } from "@/components/common/section"
import { Reveal } from "@/components/animations/reveal"

export const metadata: Metadata = {
  title: "Mentions légales | BTP Horizon Cameroun",
  description: "Mentions légales de BTP Horizon Cameroun - Informations légales et réglementaires de l'entreprise.",
  robots: "index, follow",
}

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Section padding="sm">
          <Breadcrumbs items={[{ label: "Mentions légales" }]} />
        </Section>

        <Section background="white" padding="xl">
          <div className="max-w-4xl mx-auto">
            <Reveal direction="up">
              <h1 className="text-4xl font-serif font-bold text-navy mb-8">Mentions légales</h1>
            </Reveal>

            <div className="prose prose-lg max-w-none">
              <Reveal direction="up" delay={0.1}>
                <section className="mb-8">
                  <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Informations légales</h2>
                  <div className="space-y-4 text-steel">
                    <p>
                      <strong>Dénomination sociale :</strong> BTP Horizon Cameroun (SARL)
                    </p>
                    <p>
                      <strong>Forme juridique :</strong> Société à Responsabilité Limitée (SARL)
                    </p>
                    <p>
                      <strong>Siège social :</strong> Face hôtel Mermoz, Douala – Cameroun
                    </p>
                    <p>
                      <strong>Promoteur :</strong> Donald Tchokokam
                    </p>
                    <p>
                      <strong>Téléphone :</strong> +237 657 77 26 86
                    </p>
                    <p>
                      <strong>Email :</strong> tchokokamdonaldmatinien@gmail.com
                    </p>
                  </div>
                </section>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <section className="mb-8">
                  <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Activités</h2>
                  <div className="text-steel space-y-2">
                    <p>BTP Horizon Cameroun exerce les activités suivantes :</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Conception architecturale</li>
                      <li>Construction de bâtiments d'habitation</li>
                      <li>Construction de fermes d'élevage</li>
                      <li>Approvisionnement en eau potable</li>
                      <li>Rénovation et réhabilitation</li>
                      <li>Conseil technique en construction</li>
                    </ul>
                  </div>
                </section>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <section className="mb-8">
                  <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Hébergement du site</h2>
                  <div className="text-steel space-y-2">
                    <p>
                      <strong>Hébergeur :</strong> Vercel Inc.
                    </p>
                    <p>
                      <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
                    </p>
                  </div>
                </section>
              </Reveal>

              <Reveal direction="up" delay={0.4}>
                <section className="mb-8">
                  <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Propriété intellectuelle</h2>
                  <div className="text-steel space-y-4">
                    <p>
                      L'ensemble de ce site relève de la législation camerounaise et internationale sur le droit
                      d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris
                      pour les documents téléchargeables et les représentations iconographiques et photographiques.
                    </p>
                    <p>
                      La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est
                      formellement interdite sauf autorisation expresse du directeur de la publication.
                    </p>
                  </div>
                </section>
              </Reveal>

              <Reveal direction="up" delay={0.5}>
                <section className="mb-8">
                  <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Responsabilité</h2>
                  <div className="text-steel space-y-4">
                    <p>
                      Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à
                      différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
                    </p>
                    <p>
                      Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien
                      vouloir le signaler par email, à l'adresse tchokokamdonaldmatinien@gmail.com, en décrivant le
                      problème de la façon la plus précise possible.
                    </p>
                  </div>
                </section>
              </Reveal>

              <Reveal direction="up" delay={0.6}>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Droit applicable</h2>
                  <div className="text-steel">
                    <p>
                      Tant le présent site que les modalités et conditions de son utilisation sont régis par le droit
                      camerounais, quel que soit le lieu d'utilisation. En cas de contestation éventuelle, et après
                      l'échec de toute tentative de recherche d'une solution amiable, les tribunaux camerounais seront
                      seuls compétents pour connaître de ce litige.
                    </p>
                  </div>
                </section>
              </Reveal>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
