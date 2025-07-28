"use client"

import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CTAButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

export function CTAButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  disabled = false,
  type = "button",
}: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg hover:scale-105 active:scale-95"

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 glow-effect",
    secondary: "bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600",
    outline: "border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const classes = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed hover:scale-100",
    className,
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes} disabled={disabled} type={type}>
      {children}
    </button>
  )
}
