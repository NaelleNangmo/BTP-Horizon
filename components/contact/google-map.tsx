"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/components/providers/language-provider"

declare global {
  interface Window {
    google: any
    initMap: () => void
  }
}

export function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement("script")
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`
    script.async = true
    script.defer = true

    window.initMap = () => {
      if (mapRef.current) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 4.04827, lng: 9.70428 }, // BTP Horizon Cameroun coordinates
          zoom: 15,
          styles: [
            {
              featureType: "all",
              elementType: "geometry.fill",
              stylers: [{ color: "#f5f7fa" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#1f4e6b" }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#ffffff" }],
            },
          ],
        })

        // Add marker for BTP Horizon
        new window.google.maps.Marker({
          position: { lat: 4.04827, lng: 9.70428 },
          map: map,
          title: "BTP Horizon Cameroun",
          icon: {
            url:
              "data:image/svg+xml;charset=UTF-8," +
              encodeURIComponent(`
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#E86A21"/>
                <path d="M20 10L25 15H22V25H18V15H15L20 10Z" fill="white"/>
              </svg>
            `),
            scaledSize: new window.google.maps.Size(40, 40),
          },
        })

        // Add info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div class="p-4 max-w-xs">
              <h3 class="font-bold text-lg text-navy mb-2">BTP Horizon Cameroun</h3>
              <p class="text-sm text-gray-600 mb-2">${t("contact.address")}</p>
              <p class="text-sm text-gray-600">
                <strong>${t("contact.phone")}:</strong> +237 6XX XXX XXX<br>
                <strong>${t("contact.email")}:</strong> contact@btphorizon.cm
              </p>
            </div>
          `,
        })

        // Show info window on marker click
        const marker = new window.google.maps.Marker({
          position: { lat: 4.04827, lng: 9.70428 },
          map: map,
        })

        marker.addListener("click", () => {
          infoWindow.open(map, marker)
        })
      }
    }

    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
      delete window.initMap
    }
  }, [t])

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg border border-border">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  )
}
