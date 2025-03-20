// This is a reusable component for section headings with consistent styling
import { Badge } from "@/components/ui/badge"

interface SectionHeadingProps {
  badge?: string
  title: string
  description?: string
  align?: "left" | "center"
  theme?: "light" | "dark"
}

export function SectionHeading({ badge, title, description, align = "center", theme = "light" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      {badge && <Badge className={`mb-4 ${theme === "dark" ? "bg-white/20 text-white" : ""}`}>{badge}</Badge>}
      <h2 className="text-4xl font-bold mb-4">
        <span
          className={`
          bg-gradient-to-r 
          ${theme === "dark" ? "from-blue-300 to-teal-200" : "from-blue-700 to-teal-600"} 
          bg-clip-text text-transparent pb-2 border-b-4 
          ${theme === "dark" ? "border-white/20" : "border-gray-200"}
        `}
        >
          {title}
        </span>
      </h2>
      {description && (
        <p className={`text-lg max-w-3xl mx-auto mt-6 ${theme === "dark" ? "text-white/90" : "text-gray-600"}`}>
          {description}
        </p>
      )}
    </div>
  )
}

// For subsection headings
interface SubsectionHeadingProps {
  title: string
  theme?: "light" | "dark"
  size?: "small" | "medium" | "large"
}

export function SubsectionHeading({ title, theme = "light", size = "medium" }: SubsectionHeadingProps) {
  const sizeClasses = {
    small: "text-lg",
    medium: "text-xl",
    large: "text-2xl",
  }

  return (
    <h3
      className={`${sizeClasses[size]} font-semibold mb-4 inline-block border-b-2 
      ${theme === "dark" ? "border-blue-300/50" : "border-blue-300"} pb-2`}
    >
      <span
        className={`
        bg-gradient-to-r 
        ${theme === "dark" ? "from-blue-300 to-teal-200" : "from-blue-600 to-teal-500"} 
        bg-clip-text text-transparent
      `}
      >
        {title}
      </span>
    </h3>
  )
}

