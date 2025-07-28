"use client"

import type React from "react"

import { useState } from "react"
import { CTAButton } from "./cta-button"

interface FormField {
  name: string
  label: string
  type: "text" | "email" | "textarea"
  required?: boolean
  placeholder?: string
}

interface ContactFormProps {
  fields?: FormField[]
  title?: string
  subtitle?: string
  className?: string
  onSubmit?: (data: Record<string, string>) => void
}

export function ContactForm({
  fields = [
    { name: "name", label: "Name", type: "text", required: true, placeholder: "Your name" },
    { name: "email", label: "Email", type: "email", required: true, placeholder: "your@email.com" },
    { name: "message", label: "Message", type: "textarea", required: true, placeholder: "Your message..." },
  ],
  title = "Get in Touch",
  subtitle = "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  className = "",
  onSubmit,
}: ContactFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (onSubmit) {
      await onSubmit(formData)
    }

    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className={`glass-effect rounded-xl p-8 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-400">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="block text-sm font-medium text-gray-300 mb-2">
              {field.label} {field.required && <span className="text-red-400">*</span>}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                rows={4}
                className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                onChange={handleChange}
              />
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                onChange={handleChange}
              />
            )}
          </div>
        ))}

        <CTAButton type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </CTAButton>
      </form>
    </div>
  )
}
