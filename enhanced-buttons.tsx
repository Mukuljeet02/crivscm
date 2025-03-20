"use client"

import type React from "react"

// This is a component for enhanced CTA buttons with better visibility
import { Button } from "@/components/ui/button"

interface EnhancedButtonProps {
  variant: "primary" | "secondary"
  size?: "default" | "sm" | "lg"
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function EnhancedButton({ variant, size = "default", children, onClick, className = "" }: EnhancedButtonProps) {
  if (variant === "primary") {
    return (
      <Button
        size={size}
        onClick={onClick}
        className={`
          bg-white text-blue-900 hover:bg-gray-100 
          transition-all duration-300 transform hover:scale-105 
          font-bold border-2 border-white shadow-lg
          ${className}
        `}
      >
        {children}
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size={size}
      onClick={onClick}
      className={`
        border-2 border-white text-white hover:bg-white/20 
        transition-all duration-300 transform hover:scale-105 
        font-semibold shadow-lg
        ${className}
      `}
    >
      {children}
    </Button>
  )
}

