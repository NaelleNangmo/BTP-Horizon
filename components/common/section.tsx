import type React from "react"
import { cn } from "@/lib/utils"
import { Container } from "./container"

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerSize?: "sm" | "md" | "lg" | "xl" | "full"
  background?: "white" | "light-gray" | "navy" | "gradient"
  padding?: "sm" | "md" | "lg" | "xl"
}

export function Section({
  children,
  className,
  containerSize = "xl",
  background = "white",
  padding = "lg",
}: SectionProps) {
  const backgroundClasses = {
    white: "bg-white",
    "light-gray": "bg-light-gray",
    navy: "bg-navy text-white",
    gradient: "gradient-diagonal text-white",
  }

  const paddingClasses = {
    sm: "py-12",
    md: "py-16",
    lg: "py-20",
    xl: "py-24",
  }

  return (
    <section className={cn(backgroundClasses[background], paddingClasses[padding], className)}>
      <Container size={containerSize}>{children}</Container>
    </section>
  )
}
