"use client"

import Image from "next/image"

interface Logo {
  name: string
  src: string
  width?: number
  height?: number
}

interface LogoRowProps {
  logos: Logo[]
  title?: string
  className?: string
}

export function LogoRow({ logos, title = "Trusted by leading companies", className = "" }: LogoRowProps) {
  return (
    <section className={`py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-center text-gray-400 text-sm font-medium mb-8 uppercase tracking-wider">{title}</h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.name}
                width={logo.width || 120}
                height={logo.height || 60}
                className="max-h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
