"use client"

import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Headphones } from "lucide-react"
import { useRef } from "react"

export default function ContactPage() {
  const heroRef = useRef(null)
  const contactRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const contactInView = useInView(contactRef, { once: true })

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@viversed.com",
      description: "Send us an email anytime",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Innovation Drive, Tech City, TC 12345",
      description: "Our headquarters",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: "24/7 Available",
      description: "We're here when you need us",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-16 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 squircle glass-card mb-6">
              <MessageSquare className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm font-medium text-purple-200">CONTACT</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Get in</span>
              <br />
              <span className="text-gradient-purple">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Have questions about Viversed? We're here to help. Reach out to our team and we'll get back to you as soon
              as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card glass-card-hover squircle-lg p-6 text-center interactive-card"
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 squircle bg-gradient-to-r ${info.gradient} mx-auto mb-4 icon-container`}
                >
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-purple-400 font-medium mb-1">{info.details}</p>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section ref={contactRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="glass-card glass-card-hover squircle-lg p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 squircle bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-4 icon-container">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Send us a message</h2>
              </div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">First Name</label>
                    <input type="text" className="premium-input squircle w-full" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Last Name</label>
                    <input type="text" className="premium-input squircle w-full" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input type="email" className="premium-input squircle w-full" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Company</label>
                  <input type="text" className="premium-input squircle w-full" placeholder="Your Company" />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="premium-input squircle w-full resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button type="submit" className="premium-button squircle w-full">
                  <Send className="mr-2 w-4 h-4" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 squircle bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4 icon-container">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Let's Start a Conversation</h2>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Whether you're looking to automate your workflows, need technical support, or want to explore
                  enterprise solutions, our team is ready to help you succeed.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="text-white font-medium">Sales Inquiries</h4>
                      <p className="text-gray-400 text-sm">Learn about our plans and pricing</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="text-white font-medium">Technical Support</h4>
                      <p className="text-gray-400 text-sm">Get help with your account or integrations</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="text-white font-medium">Partnership Opportunities</h4>
                      <p className="text-gray-400 text-sm">Explore integration and reseller partnerships</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass-card squircle-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 squircle bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center mr-3 icon-container">
                    <Headphones className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Quick Actions</h3>
                </div>
                <div className="space-y-3">
                  <a href="/demo" className="premium-button squircle w-full text-center">
                    Schedule a Demo
                  </a>
                  <a href="/signup" className="secondary-button squircle w-full text-center">
                    Start Free Trial
                  </a>
                  <a href="/help" className="secondary-button squircle w-full text-center">
                    Visit Help Center
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
