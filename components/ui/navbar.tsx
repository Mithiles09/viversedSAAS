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
  ctaText = "Get in touch",
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
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border border-white/10"
          : "bg-black/20 backdrop-blur-sm border border-white/5"
      } rounded-2xl px-6 py-3 max-w-6xl w-[95%] mx-auto`}
    >
      <div className="flex items-center justify-between">
        {/* Brand */}
        <Link
          href={brandHref}
          className="text-xl font-bold text-white hover:text-purple-400 transition-colors flex-shrink-0"
        >
          {brandName}
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block flex-shrink-0">
          <Link
            href={ctaHref}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 whitespace-nowrap"
          >
            {ctaText}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2 flex-shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/10">
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
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {ctaText}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
