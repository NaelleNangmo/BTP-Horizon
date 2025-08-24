import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ title, subtitle, description, centered = true, className }: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12 lg:mb-16", className)}>
      {subtitle && <div className="text-orange font-medium text-sm uppercase tracking-wider mb-3">{subtitle}</div>}
      <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-navy mb-4">{title}</h2>
      {description && <p className="text-lg text-steel max-w-3xl mx-auto leading-relaxed">{description}</p>}
    </div>
  )
}
