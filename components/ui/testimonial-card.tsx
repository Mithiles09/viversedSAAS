"use client"

import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  company: string
  avatar: string
  className?: string
}

export function TestimonialCard({ quote, name, role, company, avatar, className = "" }: TestimonialCardProps) {
  return (
    <div className={`p-6 rounded-xl glass-effect hover:glow-effect transition-all duration-300 ${className}`}>
      <p className="text-gray-300 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <Image src={avatar || "/placeholder.svg"} alt={name} width={48} height={48} className="rounded-full mr-4" />
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-gray-400 text-sm">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  )
}
