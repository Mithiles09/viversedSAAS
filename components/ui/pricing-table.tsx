"use client"

import { Check } from "lucide-react"
import { CTAButton } from "./cta-button"

interface PricingFeature {
  name: string
  included: boolean
}

interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: PricingFeature[]
  ctaText: string
  ctaHref: string
  popular?: boolean
}

interface PricingTableProps {
  tiers: PricingTier[]
  title?: string
  subtitle?: string
  className?: string
}

export function PricingTable({
  tiers,
  title = "Choose Your Plan",
  subtitle = "Transparent pricing designed to fit your requirements.",
  className = "",
}: PricingTableProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-gray-400 text-lg">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-xl glass-effect hover:glow-effect transition-all duration-300 ${
                tier.popular ? "ring-2 ring-blue-500 scale-105" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400">/{tier.period}</span>
                </div>
                <p className="text-gray-400">{tier.description}</p>
              </div>

              <CTAButton href={tier.ctaHref} className="w-full mb-8">
                {tier.ctaText}
              </CTAButton>

              <ul className="space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className={`w-5 h-5 mr-3 ${feature.included ? "text-green-400" : "text-gray-600"}`} />
                    <span className={feature.included ? "text-gray-300" : "text-gray-600"}>{feature.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
