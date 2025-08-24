"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/providers/language-provider"

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(true)
  const { language } = useLanguage()

  const message =
    language === "fr"
      ? "Bonjour BTP Horizon Cameroun, j'aimerais discuter d'un projet de construction."
      : "Hello BTP Horizon Cameroon, I would like to discuss a construction project."

  const whatsappUrl = `https://wa.me/237657772686?text=${encodeURIComponent(message)}`

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      {/* Close button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsVisible(false)}
        className="h-6 w-6 p-0 bg-white/80 hover:bg-white shadow-sm rounded-full"
      >
        <X className="h-3 w-3" />
      </Button>

      {/* WhatsApp button */}
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group">
        <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse">
          <MessageCircle className="h-6 w-6" />
        </div>
      </a>

      {/* Tooltip */}
      <div className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {language === "fr" ? "Discuter sur WhatsApp" : "Chat on WhatsApp"}
      </div>
    </div>
  )
}
