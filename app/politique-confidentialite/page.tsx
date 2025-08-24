import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Section } from "@/components/common/section"
import { Reveal } from "@/components/animations/reveal"

export const metadata: Metadata = {
  title: "Politique de confidentialité | BTP Horizon Cameroun",
  description:
    "Politique de confidentialité de BTP Horizon Cameroun - Protection des données personnelles et respect de la vie privée.",
  robots: "index, follow",
}

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Section padding="sm">
          <Breadcrumbs items={[{ label: "Politique de confidentialité" }]} />
        </Section>

        <Section background="white" padding="xl">
          <div className="max-w-4xl mx-auto">
            <Reveal direction="up">
              <h1 className="text-4xl font-serif font-bold text-navy mb-8">Politique de confidentialité</h1>
            </Reveal>

            <div className="prose prose-lg max-w-none">
              <Reveal direction="up" delay={0.1}>
                <section className="mb-8">
                  <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Collecte des informations</h2>
                  <div className="text-steel space-y-4">
                    <p>
                      Nous recueillons des informations lorsque vous vous inscrivez sur notre site, lorsque vous vous
                      connectez à votre compte, faites un achat, participez à un concours, et / ou lorsque vous vous
                      déconnectez. Les informations recueillies incluent votre nom, votre adresse e-mail, numéro de
                      téléphone, et / ou carte de crédit.
                    </p>
                    <p>
                      En outre, nous recevons et enregistrons automatiquement des informations à partir de votre
                      ordinateur et navigateur, y compris votre adresse IP, vos logiciels et matériels, et la page que
                      vous demandez.
                    </p>
                  </div>
                </section>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <section className="mb-8">
                  <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Utilisation des informations</h2>
                  <div className="text-steel space-y-4">
                    <p>Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
                      <li>Fournir un contenu publicitaire personnalisé</li>
                      <li>Améliorer notre site Web</li>
                      <li>Améliorer le service client et vos besoins de prise en charge</li>
                      <li>Vous contacter par e-mail</li>
                      <li>Administrer un concours, une promotion, ou une enquête</li>
                    </ul>
                  </div>
                </section>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <section className="mb-8">
                  <h2 className="text-2xl font-serif font-semibold text-navy mb-4">
                    Confidentialité du commerce en ligne
                  </h2>
                  <div className="text-steel space-y-4">
                    <p>
                      Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations
                      personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour
                      n'importe quelle raison, sans votre consentement, en dehors de ce qui est nécessaire pour répondre
                      à une demande et / ou une transaction, comme par exemple pour expédier une commande.
                    </p>
                  </div>
                </section>
              </Reveal>

              <Reveal direction="up" delay={0.4}>
                <section className="mb-8">
                  <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Divulgation à des tiers</h2>
                  <div className="text-steel space-y-4">
                    <p>
                      Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à
                      des tiers. Cela ne comprend pas les tierce parties de confiance qui nous aident à exploiter notre
                      site Web ou à mener nos affaires, tant que ces parties conviennent de garder ces informations
                      confidentielles.
                    </p>
                    <p>
                      Nous pensons qu'il est nécessaire de partager des informations afin d'enquêter, de prévenir ou de
                      prendre des mesures concernant des activités illégales, fraudes présumées, situations impliquant
                      des menaces potentielles à la sécurité physique de toute personne, violations de nos conditions
                      d'utilisation, ou quand la loi nous y oblige.
                    </p>
                  </div>
                </section>
              </Reveal>

              <Reveal direction="up" delay={0.5}>
                <section className="mb-8">
                  <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Protection des informations</h2>
                  <div className="text-steel space-y-4">
                    <p>
                      Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos
                      informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger
                      les informations sensibles transmises en ligne. Nous protégeons également vos informations hors
                      ligne. Seuls les employés qui ont besoin d'effectuer un travail spécifique (par exemple, la
                      facturation ou le service à la clientèle) ont accès aux informations personnelles identifiables.
                      Les ordinateurs et serveurs utilisés pour stocker des informations personnelles identifiables sont
                      conservés dans un environnement sécurisé.
                    </p>
                  </div>
                </section>
              </Reveal>

              <Reveal direction="up" delay={0.6}>
                <section className="mb-8">
                  <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Cookies</h2>
                  <div className="text-steel space-y-4">
                    <p>
                      Nous utilisons des cookies pour comprendre et sauvegarder vos préférences pour les visites futures
                      et compiler des données globales sur le trafic du site et l'interaction du site afin que nous
                      puissions offrir une meilleure expérience du site et de meilleurs outils à l'avenir. Nous pouvons
                      passer contrat avec des fournisseurs de services tiers pour nous aider à mieux comprendre les
                      visiteurs de notre site. Ces fournisseurs de services ne sont pas autorisés à utiliser les
                      informations recueillies en notre nom, sauf pour nous aider à mener et à améliorer nos affaires.
                    </p>
                  </div>
                </section>
              </Reveal>

              <Reveal direction="up" delay={0.7}>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-navy mb-4">Consentement</h2>
                  <div className="text-steel space-y-4">
                    <p>En utilisant notre site, vous consentez à notre politique de confidentialité web.</p>
                    <p>
                      <strong>Dernière mise à jour :</strong> 2024
                    </p>
                    <p>
                      Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous
                      contacter à l'adresse suivante : tchokokamdonaldmatinien@gmail.com
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
