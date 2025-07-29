"use client"

import { motion } from "framer-motion"

interface TrustedCompaniesProps {
  className?: string
}

export function TrustedCompanies({ className = "" }: TrustedCompaniesProps) {
  const companies = [
    { name: "Acme Corp", logo: ">" },
    { name: "Quantum", logo: "◊" },
    { name: "Echo Valley", logo: "✕" },
    { name: "PULSE", logo: "—" },
    { name: "APEX", logo: "✦" },
    { name: "Celestial", logo: "✱" },
  ]

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Trusted by leading companies</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card squircle-lg p-6 text-center hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="text-2xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">
                {company.logo}
              </div>
              <div className="text-white font-medium text-sm group-hover:text-gray-200 transition-colors">
                {company.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
