"use client"

import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { motion, useInView } from "framer-motion"
import { Check, DollarSign, Target, Zap, Shield, ChevronDown } from "lucide-react"
import { useRef, useState } from "react"

export default function PricingPage() {
  const heroRef = useRef(null)
  const pricingRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const pricingInView = useInView(pricingRef, { once: true })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const pricingTiers = [
    {
      name: "Starter",
      price: "$29",
      period: "month",
      description: "Perfect for small teams getting started with automation",
      features: [
        { name: "Up to 1,000 automations/month", included: true },
        { name: "5 team members", included: true },
        { name: "Basic integrations (50+)", included: true },
        { name: "Email support", included: true },
        { name: "Basic analytics", included: true },
        { name: "Standard templates", included: true },
        { name: "Advanced analytics", included: false },
        { name: "Custom workflows", included: false },
        { name: "Priority support", included: false },
        { name: "API access", included: false },
      ],
      ctaText: "Start Free Trial",
      ctaHref: "/signup",
      gradient: "from-blue-500 to-purple-500",
      icon: Target,
    },
    {
      name: "Professional",
      price: "$99",
      period: "month",
      description: "Advanced features for growing businesses",
      features: [
        { name: "Up to 10,000 automations/month", included: true },
        { name: "25 team members", included: true },
        { name: "All integrations (500+)", included: true },
        { name: "Priority support", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Custom workflows", included: true },
        { name: "API access", included: true },
        { name: "White-label options", included: true },
        { name: "Dedicated account manager", included: false },
        { name: "Custom SLA", included: false },
      ],
      ctaText: "Start Free Trial",
      ctaHref: "/signup",
      popular: true,
      gradient: "from-purple-500 to-pink-500",
      icon: Zap,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "month",
      description: "Tailored solutions for large organizations",
      features: [
        { name: "Unlimited automations", included: true },
        { name: "Unlimited team members", included: true },
        { name: "All integrations + custom", included: true },
        { name: "24/7 dedicated support", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Custom workflows", included: true },
        { name: "Full API access", included: true },
        { name: "White-label options", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "Custom SLA", included: true },
      ],
      ctaText: "Contact Sales",
      ctaHref: "/contact",
      gradient: "from-green-500 to-blue-500",
      icon: Shield,
    },
  ]

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
    },
    {
      question: "What happens if I exceed my automation limit?",
      answer:
        "We'll notify you when you're approaching your limit. You can either upgrade your plan or purchase additional automation credits.",
    },
    {
      question: "Do you offer annual discounts?",
      answer: "Yes! Save 20% when you pay annually. Contact our sales team for custom enterprise pricing.",
    },
    {
      question: "Is there a free trial?",
      answer: "All plans come with a 14-day free trial. No credit card required to get started.",
    },
    {
      question: "What kind of support is included?",
      answer:
        "All plans include email support. Professional and Enterprise plans get priority support with faster response times.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time. We also offer a 30-day money-back guarantee.",
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
              <DollarSign className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm font-medium text-purple-200">PRICING</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Simple,</span>
              <br />
              <span className="text-gradient-purple">Transparent Pricing</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business. Start with our free trial and scale as you grow.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className="text-gray-400 mr-3">Monthly</span>
              <div className="relative">
                <input type="checkbox" className="sr-only" />
                <div className="w-12 h-6 glass-card squircle cursor-pointer">
                  <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 squircle shadow-md transform transition-transform duration-300 translate-x-0.5 translate-y-0.5"></div>
                </div>
              </div>
              <span className="text-gray-400 ml-3">Annual</span>
              <span className="ml-2 px-2 py-1 bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs squircle">
                Save 20%
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table */}
      <section ref={pricingRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`glass-card interactive-card squircle-lg p-8 relative ${tier.popular ? "pricing-card-popular" : ""}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span
                      className={`bg-gradient-to-r ${tier.gradient} text-white px-4 py-1 squircle text-sm font-medium`}
                    >
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 squircle-lg bg-gradient-to-r ${tier.gradient} flex items-center justify-center mx-auto mb-4 icon-container`}
                  >
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    {tier.period && <span className="text-gray-400">/{tier.period}</span>}
                  </div>
                  <p className="text-gray-400">{tier.description}</p>
                </div>

                <a href={tier.ctaHref} className="premium-button squircle w-full mb-8 text-center">
                  {tier.ctaText}
                </a>

                <ul className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check
                        className={`w-5 h-5 mr-3 flex-shrink-0 ${feature.included ? "text-green-400" : "text-gray-600"}`}
                      />
                      <span className={`text-sm ${feature.included ? "text-gray-300" : "text-gray-600"}`}>
                        {feature.name}
                      </span>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Pricing FAQ</h2>
            <p className="text-xl text-gray-400">Common questions about our pricing plans</p>
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
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
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
            <div className="w-16 h-16 squircle-lg bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center mx-auto mb-6 icon-container">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-8">Join thousands of businesses already automating with Viversed</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/signup" className="premium-button squircle text-lg px-8 py-4">
                Start Free Trial
              </a>
              <a href="/contact" className="secondary-button squircle text-lg px-8 py-4">
                Talk to Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
