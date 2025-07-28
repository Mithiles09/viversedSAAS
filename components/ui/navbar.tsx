"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  brandName?: string
  brandHref?: string
  links?: NavLink[]
  ctaText?: string
  ctaHref?: string
}

export function Navbar({
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
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <Link href={brandHref} className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
            {brandName}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
