"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/animations/reveal"
import { X, MapPin, Calendar } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Villa moderne Bonanjo",
    category: "Maisons",
    location: "Bonanjo, Douala",
    year: "2023",
    cover: "/placeholder-5f8g9.png",
    images: ["/placeholder-4ty8u.png", "/placeholder-acm7q.png"],
    description: "Villa moderne de 4 chambres avec finitions haut de gamme et jardin paysager.",
  },
  {
    id: 2,
    title: "Ferme d'élevage Bassa",
    category: "Fermes",
    location: "Bassa, Douala",
    year: "2023",
    cover: "/placeholder-51qfx.png",
    images: ["/placeholder-ngdck.png", "/placeholder-ft70p.png"],
    description: "Infrastructure moderne pour l'élevage de bovins avec système de ventilation automatisé.",
  },
  {
    id: 3,
    title: "Château d'eau Akwa",
    category: "Infrastructure",
    location: "Akwa, Douala",
    year: "2022",
    cover: "/placeholder-kzzq7.png",
    images: ["/placeholder-c2dsf.png"],
    description: "Château d'eau de 500m³ pour l'approvisionnement en eau potable du quartier.",
  },
  {
    id: 4,
    title: "Rénovation immeuble Bonapriso",
    category: "Rénovations",
    location: "Bonapriso, Douala",
    year: "2023",
    cover: "/placeholder-7pzp4.png",
    images: ["/placeholder-mcucm.png"],
    description: "Rénovation complète d'un immeuble de bureaux avec mise aux normes énergétiques.",
  },
  {
    id: 5,
    title: "Résidence Logbaba",
    category: "Maisons",
    location: "Logbaba, Douala",
    year: "2024",
    cover: "/placeholder-kf696.png",
    images: ["/placeholder-hxme9.png"],
    description: "Complexe résidentiel de 12 logements avec espaces verts communs.",
  },
  {
    id: 6,
    title: "Ferme avicole Bonaberi",
    category: "Fermes",
    location: "Bonaberi, Douala",
    year: "2024",
    cover: "/placeholder-cdtht.png",
    images: ["/placeholder.svg?height=600&width=800"],
    description: "Ferme avicole moderne avec capacité de 10,000 poules pondeuses.",
  },
]

const categories = ["Tous", "Maisons", "Fermes", "Infrastructure", "Rénovations"]

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects =
    selectedCategory === "Tous" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "bg-orange hover:bg-orange/90" : ""}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <Reveal key={project.id} direction="up" delay={index * 0.1}>
            <div className="group cursor-pointer" onClick={() => setSelectedProject(project)}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Image
                  src={project.cover || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <Badge className="bg-orange text-white mb-2">{project.category}</Badge>
                  <h3 className="text-lg font-serif font-semibold mb-1">{project.title}</h3>
                  <div className="flex items-center text-sm opacity-90">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                    <span className="mx-2">•</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.year}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-black rounded-full p-2 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <Image
                src={selectedProject.images[0] || "/placeholder.svg"}
                alt={selectedProject.title}
                width={800}
                height={600}
                className="w-full h-96 object-cover rounded-t-2xl"
              />
            </div>

            <div className="p-8">
              <Badge className="bg-orange text-white mb-4">{selectedProject.category}</Badge>
              <h2 className="text-3xl font-serif font-bold text-navy mb-4">{selectedProject.title}</h2>

              <div className="flex items-center text-steel mb-6">
                <MapPin className="h-5 w-5 mr-2" />
                {selectedProject.location}
                <span className="mx-4">•</span>
                <Calendar className="h-5 w-5 mr-2" />
                {selectedProject.year}
              </div>

              <p className="text-steel leading-relaxed">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
