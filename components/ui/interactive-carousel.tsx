"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselItem {
  id: number
  content: React.ReactNode
}

interface InteractiveCarouselProps {
  items: CarouselItem[]
  autoPlay?: boolean
  interval?: number
  showDots?: boolean
  showArrows?: boolean
}

export function InteractiveCarousel({
  items,
  autoPlay = true,
  interval = 5000,
  showDots = true,
  showArrows = true,
}: InteractiveCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!autoPlay || isHovered || items.length === 0) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, isHovered, items.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  if (items.length === 0) {
    return <div className="w-full h-full flex items-center justify-center text-gray-400">No items to display</div>
  }

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            {items[currentIndex]?.content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {showArrows && items.length > 1 && (
        <>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-card p-3 text-white hover:text-purple-400 transition-colors"
          >
            <ChevronLeft size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-card p-3 text-white hover:text-purple-400 transition-colors"
          >
            <ChevronRight size={20} />
          </motion.button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-purple-500 shadow-lg shadow-purple-500/50"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
