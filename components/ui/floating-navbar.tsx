"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface NavLink {
  label: string
  href: string
}

interface FloatingNavbarProps {
  brandName?: string
  brandHref?: string
  links?: NavLink[]
  ctaText?: string
  ctaHref?: string
}

export function FloatingNavbar({
  brandName = "Viversed",
  brandHref = "/",
  links = [
    { label: "Process", href: "/process" },
    { label: "Services", href: "/features" },
    { label: "Benefits", href: "/benefits" },
    { label: "Plans", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  ctaText = "Book a call",
  ctaHref = "/contact",
}: FloatingNavbarProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-6"
        >
          <div className="glass-navbar squircle-lg px-8 py-4 mx-auto max-w-5xl">
            <div className="grid grid-cols-[auto_1fr_auto] items-center w-full gap-4">
              {/* Brand - Left */}
              <div className="flex items-center">
                <Link
                  href={brandHref}
                  className="text-xl font-bold text-white hover:text-purple-400 transition-colors flex-shrink-0"
                >
                  {brandName}
                </Link>
              </div>

              {/* Center Navigation - Desktop */}
              <div className="hidden md:flex justify-center">
                <div className="flex items-center space-x-8">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm relative group"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Button - Right */}
              <div className="hidden md:flex justify-end">
                <Link href={ctaHref} className="premium-button squircle flex-shrink-0">
                  {ctaText}
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                className="md:hidden text-white p-2 squircle glass-card hover:bg-white/10 transition-colors ml-auto"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden mt-4 pt-4 border-t border-white/10"
                >
                  <div className="flex flex-col space-y-3">
                    {links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Link
                      href={ctaHref}
                      className="premium-button squircle mt-3 text-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {ctaText}
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
