"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQItem[]
  title?: string
  className?: string
}

export function FAQAccordion({ faqs, title = "Frequently Asked Questions", className = "" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">{title}</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-effect rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
