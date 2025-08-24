"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import emailjs from "emailjs-com"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Calculator, MessageSquare } from "lucide-react"
import Link from "next/link"

const devisSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  telephone: z.string().min(9, "Numéro de téléphone invalide"),
  entreprise: z.string().optional(),
  typeProjet: z.string().min(1, "Veuillez sélectionner un type de projet"),
  localisation: z.string().min(2, "Veuillez indiquer la localisation"),
  surface: z.string().optional(),
  budgetEstimatif: z.string().min(1, "Veuillez indiquer votre budget estimatif"),
  delaiSouhaite: z.string().min(1, "Veuillez indiquer le délai souhaité"),
  description: z.string().min(20, "La description doit contenir au moins 20 caractères"),
  services: z.array(z.string()).min(1, "Veuillez sélectionner au moins un service"),
  urgence: z.boolean().optional(),
  visite: z.boolean().optional(),
  // Honeypot field for anti-spam
  website: z.string().optional(),
})

type DevisFormData = z.infer<typeof devisSchema>

const projectTypes = [
  "Maison individuelle",
  "Immeuble résidentiel",
  "Bâtiment commercial",
  "Ferme d'élevage",
  "Infrastructure d'eau",
  "Rénovation",
  "Extension",
  "Autre",
]

const budgetRanges = [
  "Moins de 5 millions FCFA",
  "5 - 10 millions FCFA",
  "10 - 25 millions FCFA",
  "25 - 50 millions FCFA",
  "50 - 100 millions FCFA",
  "Plus de 100 millions FCFA",
  "À définir",
]

const timeframes = [
  "Urgent (moins de 1 mois)",
  "1 - 3 mois",
  "3 - 6 mois",
  "6 - 12 mois",
  "Plus de 12 mois",
  "Flexible",
]

const availableServices = [
  "Conception architecturale",
  "Gros œuvre",
  "Second œuvre",
  "Plomberie",
  "Électricité",
  "Carrelage",
  "Peinture",
  "Menuiserie",
  "Aménagement extérieur",
]

export function DevisForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitTime, setSubmitTime] = useState<number | null>(null)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<DevisFormData>({
    resolver: zodResolver(devisSchema),
  })

  // Track form start time for anti-spam
  useState(() => {
    setSubmitTime(Date.now())
  })

  const handleServiceChange = (service: string, checked: boolean) => {
    let newServices: string[]
    if (checked) {
      newServices = [...selectedServices, service]
    } else {
      newServices = selectedServices.filter((s) => s !== service)
    }
    setSelectedServices(newServices)
    setValue("services", newServices)
  }

  const onSubmit = async (data: DevisFormData) => {
    // Anti-spam checks
    if (data.website) {
      return
    }

    if (submitTime && Date.now() - submitTime < 5000) {
      toast({
        title: "Erreur",
        description: "Veuillez patienter quelques secondes avant de soumettre le formulaire.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const templateParams = {
        from_name: data.nom,
        from_email: data.email,
        phone: data.telephone,
        company: data.entreprise || "Non spécifiée",
        project_type: data.typeProjet,
        location: data.localisation,
        surface: data.surface || "Non spécifiée",
        budget: data.budgetEstimatif,
        timeframe: data.delaiSouhaite,
        description: data.description,
        services: data.services.join(", "),
        urgent: data.urgence ? "Oui" : "Non",
        visit_requested: data.visite ? "Oui" : "Non",
        to_name: "BTP Horizon Cameroun",
        subject: "Nouvelle demande de devis",
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
      )

      toast({
        title: "Demande de devis envoyée !",
        description: "Nous vous recontacterons sous 48h avec un devis détaillé.",
      })

      reset()
      setSelectedServices([])
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error)
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer ou nous contacter directement.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Honeypot field */}
        <input type="text" {...register("website")} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

        {/* Personal Information */}
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-lg font-serif font-semibold text-navy mb-4">Informations personnelles</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-navy mb-2">
                Nom complet *
              </label>
              <Input
                id="nom"
                {...register("nom")}
                placeholder="Votre nom complet"
                className={errors.nom ? "border-red-500" : ""}
              />
              {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                Email *
              </label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="votre@email.com"
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="telephone" className="block text-sm font-medium text-navy mb-2">
                Téléphone *
              </label>
              <Input
                id="telephone"
                {...register("telephone")}
                placeholder="+237 6XX XX XX XX"
                className={errors.telephone ? "border-red-500" : ""}
              />
              {errors.telephone && <p className="text-red-500 text-sm mt-1">{errors.telephone.message}</p>}
            </div>

            <div>
              <label htmlFor="entreprise" className="block text-sm font-medium text-navy mb-2">
                Entreprise (optionnel)
              </label>
              <Input id="entreprise" {...register("entreprise")} placeholder="Nom de votre entreprise" />
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-lg font-serif font-semibold text-navy mb-4">Détails du projet</h3>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="typeProjet" className="block text-sm font-medium text-navy mb-2">
                  Type de projet *
                </label>
                <Select onValueChange={(value) => setValue("typeProjet", value)}>
                  <SelectTrigger className={errors.typeProjet ? "border-red-500" : ""}>
                    <SelectValue placeholder="Sélectionnez le type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.typeProjet && <p className="text-red-500 text-sm mt-1">{errors.typeProjet.message}</p>}
              </div>

              <div>
                <label htmlFor="localisation" className="block text-sm font-medium text-navy mb-2">
                  Localisation *
                </label>
                <Input
                  id="localisation"
                  {...register("localisation")}
                  placeholder="Ville, quartier"
                  className={errors.localisation ? "border-red-500" : ""}
                />
                {errors.localisation && <p className="text-red-500 text-sm mt-1">{errors.localisation.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="surface" className="block text-sm font-medium text-navy mb-2">
                  Surface (m²)
                </label>
                <Input id="surface" {...register("surface")} placeholder="Ex: 150" />
              </div>

              <div>
                <label htmlFor="budgetEstimatif" className="block text-sm font-medium text-navy mb-2">
                  Budget estimatif *
                </label>
                <Select onValueChange={(value) => setValue("budgetEstimatif", value)}>
                  <SelectTrigger className={errors.budgetEstimatif ? "border-red-500" : ""}>
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.budgetEstimatif && (
                  <p className="text-red-500 text-sm mt-1">{errors.budgetEstimatif.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="delaiSouhaite" className="block text-sm font-medium text-navy mb-2">
                  Délai souhaité *
                </label>
                <Select onValueChange={(value) => setValue("delaiSouhaite", value)}>
                  <SelectTrigger className={errors.delaiSouhaite ? "border-red-500" : ""}>
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeframes.map((timeframe) => (
                      <SelectItem key={timeframe} value={timeframe}>
                        {timeframe}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.delaiSouhaite && <p className="text-red-500 text-sm mt-1">{errors.delaiSouhaite.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-navy mb-2">
                Description détaillée du projet *
              </label>
              <Textarea
                id="description"
                {...register("description")}
                placeholder="Décrivez votre projet en détail : nombre de pièces, spécificités, matériaux souhaités..."
                rows={4}
                className={errors.description ? "border-red-500" : ""}
              />
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-lg font-serif font-semibold text-navy mb-4">Services souhaités *</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {availableServices.map((service) => (
              <div key={service} className="flex items-center space-x-2">
                <Checkbox
                  id={service}
                  checked={selectedServices.includes(service)}
                  onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                />
                <label htmlFor={service} className="text-sm text-steel cursor-pointer">
                  {service}
                </label>
              </div>
            ))}
          </div>
          {errors.services && <p className="text-red-500 text-sm mt-2">{errors.services.message}</p>}
        </div>

        {/* Options */}
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-lg font-serif font-semibold text-navy mb-4">Options</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="urgence" {...register("urgence")} />
              <label htmlFor="urgence" className="text-sm text-steel cursor-pointer">
                Projet urgent (réponse prioritaire)
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="visite" {...register("visite")} />
              <label htmlFor="visite" className="text-sm text-steel cursor-pointer">
                Demander une visite sur site
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange hover:bg-orange/90 text-white font-medium py-3"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Calculator className="mr-2 h-4 w-4" />
              Demander le devis
            </>
          )}
        </Button>
      </form>

      {/* WhatsApp Alternative */}
      <div className="border-t pt-6">
        <div className="text-center">
          <p className="text-steel mb-4">Besoin d'aide pour remplir le formulaire ?</p>
          <Link
            href="https://wa.me/237657772686?text=Bonjour%20BTP%20Horizon%20Cameroun,%20j'aimerais%20obtenir%20un%20devis%20pour%20mon%20projet."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 bg-transparent">
              <MessageSquare className="mr-2 h-4 w-4" />
              Discuter via WhatsApp
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
