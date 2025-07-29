"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  quote: string
  handle: string
}

interface VerticalTestimonialsProps {
  className?: string
}

export function VerticalTestimonials({ className = "" }: VerticalTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Morgan Lee",
      role: "Operations Manager",
      company: "TechFlow",
      handle: "@morganlee",
      avatar: "/placeholder.svg?height=48&width=48&text=ML",
      quote:
        "This app has completely transformed how I manage my projects and deadlines. The automation features are incredible!",
    },
    {
      id: 2,
      name: "Casey Jordan",
      role: "Product Designer",
      company: "DesignCorp",
      handle: "@caseyj",
      avatar: "/placeholder.svg?height=48&width=48&text=CJ",
      quote:
        "I was amazed at how quickly we were able to integrate this app into our workflow. Game-changing productivity boost!",
    },
    {
      id: 3,
      name: "Jamie Teller",
      role: "Tech Lead",
      company: "InnovateLab",
      handle: "@jamietechguru00",
      avatar: "/placeholder.svg?height=48&width=48&text=JT",
      quote:
        "Our team's productivity has skyrocketed since we started using this tool. The AI automation is simply outstanding.",
    },
    {
      id: 4,
      name: "Taylor Kim",
      role: "Marketing Director",
      company: "GrowthCo",
      handle: "@taylorkimm",
      avatar: "/placeholder.svg?height=48&width=48&text=TK",
      quote:
        "Planning and executing campaigns has never been easier. This app helps me keep track of all moving parts effortlessly.",
    },
    {
      id: 5,
      name: "Alex Rivera",
      role: "Startup Founder",
      company: "NextGen",
      handle: "@alexinnovates",
      avatar: "/placeholder.svg?height=48&width=48&text=AR",
      quote: "The ability to collaborate in real-time has revolutionized how our distributed team works together.",
    },
    {
      id: 6,
      name: "Jordan Patels",
      role: "UX Designer",
      company: "CreativeStudio",
      handle: "@jpatelsdesign",
      avatar: "/placeholder.svg?height=48&width=48&text=JP",
      quote:
        "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What our users say</h2>
          <p className="text-xl text-gray-400">Real feedback from businesses transforming with AI automation</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {getVisibleTestimonials().map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${currentIndex}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="glass-card glass-card-hover squircle-lg p-6 interactive-card"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.handle}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed italic">"{testimonial.quote}"</p>

              <div className="text-xs text-gray-500">
                {testimonial.role} • {testimonial.company}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-purple-500 w-6" : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
