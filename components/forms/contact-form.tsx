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
import { useToast } from "@/hooks/use-toast"
import { Loader2, Send, MessageSquare } from "lucide-react"
import Link from "next/link"

const contactSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  telephone: z.string().min(9, "Numéro de téléphone invalide"),
  typeProjet: z.string().min(1, "Veuillez sélectionner un type de projet"),
  budgetEstimatif: z.string().min(1, "Veuillez indiquer votre budget estimatif"),
  delaiSouhaite: z.string().min(1, "Veuillez indiquer le délai souhaité"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
  // Honeypot field for anti-spam
  website: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

const projectTypes = [
  "Bâtiment d'habitation",
  "Ferme d'élevage",
  "Approvisionnement en eau",
  "Rénovation",
  "Conception architecturale",
  "Autre",
]

const budgetRanges = [
  "Moins de 5 millions FCFA",
  "5 - 10 millions FCFA",
  "10 - 25 millions FCFA",
  "25 - 50 millions FCFA",
  "Plus de 50 millions FCFA",
  "À définir",
]

const timeframes = ["Moins de 3 mois", "3 - 6 mois", "6 - 12 mois", "Plus de 12 mois", "Flexible"]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitTime, setSubmitTime] = useState<number | null>(null)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  // Track form start time for anti-spam
  useState(() => {
    setSubmitTime(Date.now())
  })

  const onSubmit = async (data: ContactFormData) => {
    // Anti-spam checks
    if (data.website) {
      // Honeypot field filled - likely spam
      return
    }

    if (submitTime && Date.now() - submitTime < 3000) {
      // Form submitted too quickly - likely spam
      toast({
        title: "Erreur",
        description: "Veuillez patienter quelques secondes avant de soumettre le formulaire.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: data.nom,
        from_email: data.email,
        phone: data.telephone,
        project_type: data.typeProjet,
        budget: data.budgetEstimatif,
        timeframe: data.delaiSouhaite,
        message: data.message,
        to_name: "BTP Horizon Cameroun",
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
      )

      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons dans les plus brefs délais.",
      })

      reset()
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
        {/* Honeypot field - hidden from users */}
        <input type="text" {...register("website")} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

        {/* Name and Email */}
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
        </div>

        {/* Phone */}
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

        {/* Project Type */}
        <div>
          <label htmlFor="typeProjet" className="block text-sm font-medium text-navy mb-2">
            Type de projet *
          </label>
          <Select onValueChange={(value) => setValue("typeProjet", value)}>
            <SelectTrigger className={errors.typeProjet ? "border-red-500" : ""}>
              <SelectValue placeholder="Sélectionnez le type de projet" />
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

        {/* Budget and Timeframe */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="budgetEstimatif" className="block text-sm font-medium text-navy mb-2">
              Budget estimatif *
            </label>
            <Select onValueChange={(value) => setValue("budgetEstimatif", value)}>
              <SelectTrigger className={errors.budgetEstimatif ? "border-red-500" : ""}>
                <SelectValue placeholder="Sélectionnez votre budget" />
              </SelectTrigger>
              <SelectContent>
                {budgetRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.budgetEstimatif && <p className="text-red-500 text-sm mt-1">{errors.budgetEstimatif.message}</p>}
          </div>

          <div>
            <label htmlFor="delaiSouhaite" className="block text-sm font-medium text-navy mb-2">
              Délai souhaité *
            </label>
            <Select onValueChange={(value) => setValue("delaiSouhaite", value)}>
              <SelectTrigger className={errors.delaiSouhaite ? "border-red-500" : ""}>
                <SelectValue placeholder="Sélectionnez le délai" />
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

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
            Message *
          </label>
          <Textarea
            id="message"
            {...register("message")}
            placeholder="Décrivez votre projet en détail..."
            rows={5}
            className={errors.message ? "border-red-500" : ""}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
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
              <Send className="mr-2 h-4 w-4" />
              Envoyer le message
            </>
          )}
        </Button>
      </form>

      {/* WhatsApp Alternative */}
      <div className="border-t pt-6">
        <div className="text-center">
          <p className="text-steel mb-4">Ou contactez-nous directement via WhatsApp</p>
          <Link
            href="https://wa.me/237657772686?text=Bonjour%20BTP%20Horizon%20Cameroun,%20j'aimerais%20discuter%20d'un%20projet%20de%20construction."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 bg-transparent">
              <MessageSquare className="mr-2 h-4 w-4" />
              Contacter via WhatsApp
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
