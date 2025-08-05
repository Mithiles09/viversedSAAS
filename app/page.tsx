"use client"

import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { TrustedCompanies } from "@/components/ui/trusted-companies"
import { VerticalTestimonials } from "@/components/ui/vertical-testimonials"
import { SplineScene } from "@/components/ui/spline-scene"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Check, ChevronDown, ArrowRight, Zap, Target, BarChart3, Shield, Clock } from "lucide-react"
import ChartLineIcon from "@/components/icons/chart-line"
import PuzzlePieceIcon from "@/components/icons/puzzle-piece"
import SpeedometerIcon from "@/components/icons/speedometer"
import LightningIcon from "@/components/icons/lightning"
import ChartDonutIcon from "@/components/icons/chart-donut"
import { Rocket, Brain } from "lucide-react"
import { useState, useRef } from "react"

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const pricingRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const featuresInView = useInView(featuresRef, { once: true })
  const pricingInView = useInView(pricingRef, { once: true })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const services = [
    {
      icon: LightningIcon,
      title: "Automate repetitive tasks",
      description: "We help you streamline internal operations by automating manual workflows",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: PuzzlePieceIcon,
      title: "Automated Workflows",
      description:
        "Boost efficiency across teams with smart automation. Build intelligent workflows that automate multi-step processes across tools and platforms",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: ChartLineIcon,
      title: "Real-Time Intelligence",
      description: "Make smarter decisions with live data insights. Tap into real-time data",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Brain,
      title: "Custom AI Agent development",
      description: "We develop custom AI agents that integrate seamlessly with your tools",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Rocket,
      title: "AI Strategy Consulting",
      description: "Get expert guidance to implement AI solutions that drive business growth",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: SpeedometerIcon,
      title: "Performance Optimization",
      description: "Optimize your existing systems for maximum efficiency and ROI",
      gradient: "from-indigo-500 to-blue-500",
    },
  ]

  const pricingTiers = [
    {
      name: "Basic",
      price: "$480",
      period: "month",
      description: "Essential tools and features for starting your journey with ease.",
      features: [
        "Basic workflow automation",
        "Basic chatbot development",
        "60 content request",
        "E-mail support",
        "1 consultation a month",
      ],
      ctaText: "Go with this plan",
      popular: false,
      icon: Target,
    },
    {
      name: "Professional",
      price: "$960",
      period: "month",
      description: "Advanced capabilities designed to meet growing business needs.",
      features: [
        "Advance workflow automation",
        "Advance chatbot development",
        "150 content request",
        "E-mail support",
        "2 consultation a month",
      ],
      ctaText: "Go with this plan",
      popular: true,
      icon: Zap,
    },
    {
      name: "Enterprises",
      price: "Custom",
      period: "",
      description: "Comprehensive solutions tailored for large-scale business success.",
      features: [
        "Custom workflow automation",
        "Custom chatbot development",
        "Unlimited content request",
        "24hr priority support",
        "Unlimited consultation a month",
      ],
      ctaText: "Schedule a call",
      popular: false,
      icon: Shield,
    },
  ]

  const faqs = [
    {
      question: "How can AI automation help my business?",
      answer:
        "AI automation streamlines repetitive tasks, reduces human error, and allows your team to focus on strategic initiatives. Our platform can automate workflows, generate content, and provide intelligent insights to boost productivity by up to 300%.",
    },
    {
      question: "Is AI automation difficult to integrate?",
      answer:
        "Not at all! Our platform is designed for easy integration with your existing tools and workflows. Most businesses can get started within minutes, and our team provides full support throughout the setup process.",
    },
    {
      question: "What industries can benefit from AI automation?",
      answer:
        "AI automation benefits virtually every industry - from e-commerce and marketing to healthcare and finance. Our solutions are customizable to meet the specific needs of your business sector.",
    },
    {
      question: "Do I need technical knowledge to use AI automation?",
      answer:
        "No technical expertise required! Our intuitive interface and pre-built templates make it easy for anyone to create and manage automated workflows. We also provide comprehensive training and support.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer 24/7 support through multiple channels including chat, email, and phone. Enterprise customers get dedicated account managers and priority support with guaranteed response times.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with Spline Background */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Spline 3D Background */}
        <div className="absolute inset-0 z-0">
          <SplineScene
            url="https://prod.spline.design/mZs5NKPHfwjeiK9d/scene.splinecode"
            className="w-full h-full"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 squircle glass-card mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
            <span className="text-sm font-medium text-purple-200">Viversed - AI Automation Partner</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
          >
            Transforming workflows with AI <br />
            <span className="text-gradient-purple">powered automation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the future of business with intelligent, scalable automation solutions tailored to your needs
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/features" className="premium-button squircle text-base px-8 py-4 inline-flex items-center">
              Our Services <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a href="/pricing" className="secondary-button squircle text-base px-8 py-4 inline-flex items-center">
              See Plans
            </a>
          </motion.div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <TrustedCompanies />

      {/* Services Section */}
      <section ref={featuresRef} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 squircle glass-card mb-6">
              <BarChart3 className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm font-medium text-purple-200">SERVICES</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Smarter Services, <span className="text-gradient-purple italic">Built with AI</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to automate operations, boost productivity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-card glass-card-hover squircle-lg p-8 interactive-card group"
              >
                <div
                  className={`w-12 h-12 squircle icon-container flex items-center justify-center mb-6 bg-gradient-to-r ${service.gradient}`}
                >
                  <service.icon className="w-6 h-6 text-white" weight="regular" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical Testimonials Section */}
      <VerticalTestimonials />

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 squircle glass-card mb-6">
              <ChartDonutIcon className="w-4 h-4 text-purple-400 mr-2" weight="regular" />
              <span className="text-sm font-medium text-purple-200">PRICING</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Flexible plans for growth</h2>
            <p className="text-xl text-gray-400 mb-8">Transparent pricing designed to fit your requirements.</p>

            <div className="inline-flex items-center glass-card squircle p-1 mb-12">
              <button className="px-6 py-2 squircle bg-purple-500 text-white font-medium text-sm">Annually</button>
              <button className="px-6 py-2 squircle text-gray-400 font-medium text-sm hover:text-white transition-colors">
                Monthly
              </button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`glass-card glass-card-hover squircle-lg p-8 interactive-card relative ${tier.popular ? "pricing-card-popular" : ""}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 squircle text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="w-16 h-16 squircle-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4 icon-container">
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    {tier.period && <span className="text-gray-400">/{tier.period}</span>}
                  </div>
                  <p className="text-gray-400">{tier.description}</p>
                </div>

                <button className="premium-button squircle w-full mb-8">{tier.ctaText}</button>

                <ul className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 squircle glass-card mb-6">
              <Clock className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm font-medium text-purple-200">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">We've Got the Answers You're Looking For</h2>
            <p className="text-xl text-gray-400">Quick answers to your AI automation questions.</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="faq-item squircle-lg"
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-white font-semibold text-lg">{faq.question}</span>
                  <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-400 leading-relaxed text-lg">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card glass-card-hover squircle-xl p-12 interactive-card"
          >
            <div className="w-16 h-16 squircle-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6 icon-container">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let AI do the Work so you can Scale Faster
            </h2>
            <p className="text-xl text-gray-400 mb-8">Start a Call Today and Start Automating</p>
            <a href="/contact" className="premium-button squircle text-lg px-8 py-4">
              Book a Call
            </a>
          </motion.div>
        </div>
      </section>

      {/* Pre-Footer Spline Section */}
      <section className="relative h-96 overflow-hidden">
        <SplineScene
          url="https://prod.spline.design/SBCaCInEjoe6NMBv/scene.splinecode"
          className="w-full h-full"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </section>

      <Footer />
    </div>
  )
}
