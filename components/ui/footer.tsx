"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Github } from "lucide-react"

export function Footer() {
  const footerSections = [
    {
      title: "Links",
      links: [
        { label: "Services", href: "/features" },
        { label: "Process", href: "/process" },
        { label: "Benefits", href: "/benefits" },
        { label: "Plans", href: "/pricing" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Process",
      links: [
        { label: "Discovery", href: "/process#discovery" },
        { label: "Strategy", href: "/process#strategy" },
        { label: "Implementation", href: "/process#implementation" },
        { label: "Optimization", href: "/process#optimization" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Documentation", href: "/docs" },
        { label: "API Reference", href: "/api" },
        { label: "Status", href: "/status" },
      ],
    },
  ]

  const socialLinks = [
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "GitHub", href: "#", icon: Github },
  ]

  return (
    <footer className="gradient-footer border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white mb-6 block">
              Viversed
            </Link>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              AI-powered automation solutions designed to accelerate your business growth and streamline operations for
              modern enterprises.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.div key={social.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Link
                    href={social.href}
                    className="w-10 h-10 glass-card rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Viversed. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
