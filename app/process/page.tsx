"use client"

import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { motion, useInView } from "framer-motion"
import { Search, Lightbulb, Cog, TrendingUp, ArrowRight, CheckCircle, Settings } from "lucide-react"
import ClockIcon from "@/components/icons/clock"
import { useRef } from "react"

export default function ProcessPage() {
  const heroRef = useRef(null)
  const processRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const processInView = useInView(processRef, { once: true })

  const processSteps = [
    {
      icon: Search,
      title: "Discovery",
      description: "We analyze your current workflows and identify automation opportunities",
      details: [
        "Comprehensive workflow audit",
        "Pain point identification",
        "ROI potential assessment",
        "Technology stack review",
      ],
      gradient: "from-blue-500 to-purple-500",
      duration: "1-2 weeks",
    },
    {
      icon: Lightbulb,
      title: "Strategy",
      description: "Custom automation strategy tailored to your business needs",
      details: [
        "Automation roadmap creation",
        "Priority task identification",
        "Resource allocation planning",
        "Timeline development",
      ],
      gradient: "from-purple-500 to-pink-500",
      duration: "1 week",
    },
    {
      icon: Cog,
      title: "Implementation",
      description: "Building and deploying your automated solutions",
      details: ["Custom workflow development", "System integration", "Testing and optimization", "Team training"],
      gradient: "from-green-500 to-teal-500",
      duration: "2-4 weeks",
    },
    {
      icon: TrendingUp,
      title: "Optimization",
      description: "Continuous monitoring and improvement of your automation",
      details: ["Performance monitoring", "Continuous optimization", "Regular reporting", "Ongoing support"],
      gradient: "from-orange-500 to-red-500",
      duration: "Ongoing",
    },
  ]

  const benefits = [
    "Reduce manual work by up to 80%",
    "Increase productivity by 300%",
    "Eliminate human errors",
    "24/7 automated operations",
    "Scalable solutions",
    "Cost-effective implementation",
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
              <Settings className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm font-medium text-purple-200">PROCESS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Our Proven</span>
              <br />
              <span className="text-gradient-purple">Automation Process</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From discovery to deployment, we follow a systematic approach to transform your business with AI
              automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section ref={processRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 squircle text-white font-bold text-lg bg-gradient-to-r from-purple-500 to-pink-500 mr-4">
                      {index + 1}
                    </div>
                    <div
                      className={`flex items-center justify-center w-16 h-16 squircle-lg bg-gradient-to-r ${step.gradient} mr-4 icon-container`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">{step.title}</h2>
                      <div className="flex items-center mt-2">
                        <ClockIcon className="w-4 h-4 text-purple-400 mr-2" weight="regular" />
                        <span className="text-purple-400 text-sm">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-gray-400 mb-8 leading-relaxed">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Process?</h2>
            <p className="text-xl text-gray-400">Proven results that drive business transformation</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card glass-card-hover squircle-lg p-6 text-center"
              >
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <p className="text-white font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card glass-card-hover squircle-xl p-12 text-center"
          >
            <div className="w-16 h-16 squircle-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-6 icon-container">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Automation Journey?</h2>
            <p className="text-gray-400 mb-8">
              Let's discuss how our proven process can transform your business operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="premium-button squircle text-lg px-8 py-4">
                Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="/features" className="secondary-button squircle text-lg px-8 py-4">
                View Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
