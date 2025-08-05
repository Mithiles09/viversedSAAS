"use client"

import { motion } from "framer-motion"

export function TrustedCompanies() {
  const companies = [
    { name: "Acme Corp", logo: ">" },
    { name: "Quantum", logo: "✦" },
    { name: "Echo Valley", logo: "✕" },
    { name: "PULSE", logo: "PULSE" },
    { name: "APEX", logo: "✱" },
    { name: "Celestial", logo: "✦" },
  ]

  return (
    <section className="py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 text-sm font-medium mb-8">Trusted by leading companies worldwide</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card glass-card-hover squircle-lg p-6 flex items-center justify-center group cursor-pointer"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {company.logo}
                </div>
                <p className="text-xs text-gray-400 font-medium">{company.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
