"use client"

import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function FeatureCard({ icon: Icon, title, description, className = "" }: FeatureCardProps) {
  return (
    <div
      className={`group p-6 rounded-xl glass-effect hover:glow-effect transition-all duration-300 hover:scale-105 ${className}`}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  )
}
