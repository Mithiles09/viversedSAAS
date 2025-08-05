"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function VerticalTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "This app has completely transformed how I manage my projects and deadlines.",
      name: "Jamie Teller",
      handle: "@jamietechguru00",
      avatar: "/placeholder.svg?height=40&width=40&text=JT",
      rating: 5,
    },
    {
      quote: "I was amazed at how quickly we were able to integrate this app into our workflow.",
      name: "Casey Jordan",
      handle: "@caseyj",
      avatar: "/placeholder.svg?height=40&width=40&text=CJ",
      rating: 5,
    },
    {
      quote:
        "Planning and executing events has never been easier. This app helps me keep track of all the moving parts.",
      name: "Taylor Kim",
      handle: "@taykimm",
      avatar: "/placeholder.svg?height=40&width=40&text=TK",
      rating: 5,
    },
    {
      quote: "Our team's productivity has skyrocketed since we started using this tool.",
      name: "Alex Rivera",
      handle: "@alexinnovates",
      avatar: "/placeholder.svg?height=40&width=40&text=AR",
      rating: 5,
    },
    {
      quote: "Adopting this app for our team has streamlined our project management and improved communication.",
      name: "Jordan Patels",
      handle: "@jpatelsdesign",
      avatar: "/placeholder.svg?height=40&width=40&text=JP",
      rating: 5,
    },
    {
      quote: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
      name: "Sam Dawson",
      handle: "@dawsontechips",
      avatar: "/placeholder.svg?height=40&width=40&text=SD",
      rating: 5,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
    }, 4000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const getVisibleTestimonials = () => {
    const startIndex = currentIndex * 3
    return testimonials.slice(startIndex, startIndex + 3)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 opacity-10">
        <Image src="/metallic-3d.png" alt="" width={200} height={200} className="rotate-45 animate-pulse" />
      </div>
      <div className="absolute bottom-1/4 right-0 opacity-15">
        <Image src="/sphere-blue.png" alt="" width={150} height={150} className="animate-bounce" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 squircle glass-card mb-6">
            <Star className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm font-medium text-purple-200">TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What our users say</h2>
          <p className="text-xl text-gray-400">Real feedback from satisfied customers</p>
        </motion.div>

        <div className="relative h-96 overflow-hidden">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6 absolute inset-0"
          >
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card glass-card-hover squircle-lg p-6 h-fit"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-gray-400 text-xs">{testimonial.handle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-purple-500 w-8" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
