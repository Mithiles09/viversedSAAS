"use client"

import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { motion, useInView } from "framer-motion"
import { TrendingUp, DollarSign, Users, Shield, BarChart3 } from "lucide-react"
import ChartLineIcon from "@/components/icons/chart-line"
import SpeedometerIcon from "@/components/icons/speedometer"
import LightningIcon from "@/components/icons/lightning"
import { useRef } from "react"

export default function BenefitsPage() {
  const heroRef = useRef(null)
  const benefitsRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const benefitsInView = useInView(benefitsRef, { once: true })

  const benefits = [
    {
      icon: SpeedometerIcon,
      title: "300% Productivity Increase",
      description: "Automate repetitive tasks and free up your team to focus on strategic initiatives",
      stats: "Average productivity boost across all clients",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: DollarSign,
      title: "80% Cost Reduction",
      description: "Significantly reduce operational costs through intelligent automation",
      stats: "Average cost savings in first year",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: ChartLineIcon,
      title: "Real-Time Analytics",
      description: "Get instant insights into your business performance with automated reporting",
      stats: "24/7 monitoring and reporting",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "99.9% Accuracy",
      description: "Eliminate human errors with precise automated workflows",
      stats: "Error reduction rate",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Users,
      title: "Team Empowerment",
      description: "Enable your team to work on high-value tasks while AI handles the routine",
      stats: "Improved job satisfaction",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: LightningIcon,
      title: "Lightning Fast Processing",
      description: "Process thousands of operations per second with our high-performance AI",
      stats: "Instant response times",
      gradient: "from-yellow-500 to-orange-500",
    },
  ]

  const testimonialStats = [
    { number: "500+", label: "Businesses Automated" },
    { number: "10M+", label: "Tasks Automated Monthly" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
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
              <BarChart3 className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm font-medium text-purple-200">BENEFITS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Transform Your Business</span>
              <br />
              <span className="text-gradient-purple">With AI Automation</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover the measurable benefits that AI automation brings to modern businesses across all industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonialStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card glass-card-hover squircle-lg p-8 text-center interactive-card"
              >
                <div className="w-12 h-12 squircle bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 icon-container">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold text-gradient-purple mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section ref={benefitsRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Measurable Business Impact</h2>
            <p className="text-xl text-gray-400">Real results that drive growth and efficiency</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-card glass-card-hover squircle-lg p-8 interactive-card group"
              >
                <div
                  className={`w-16 h-16 squircle-lg icon-container flex items-center justify-center mb-6 bg-gradient-to-r ${benefit.gradient}`}
                >
                  <benefit.icon className="w-8 h-8 text-white" weight="regular" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{benefit.description}</p>
                <div className="text-sm text-purple-400 font-medium">{benefit.stats}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card glass-card-hover squircle-xl p-12 text-center interactive-card"
          >
            <div className="w-16 h-16 squircle-lg bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center mx-auto mb-6 icon-container">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Calculate Your ROI</h2>
            <p className="text-gray-400 mb-8">See how much you could save with AI automation</p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="glass-card squircle p-6 interactive-card">
                <div className="text-2xl font-bold text-green-400 mb-2">$50K+</div>
                <div className="text-gray-400 text-sm">Average Annual Savings</div>
              </div>
              <div className="glass-card squircle p-6 interactive-card">
                <div className="text-2xl font-bold text-blue-400 mb-2">6 Months</div>
                <div className="text-gray-400 text-sm">Average Payback Period</div>
              </div>
              <div className="glass-card squircle p-6 interactive-card">
                <div className="text-2xl font-bold text-purple-400 mb-2">400%</div>
                <div className="text-gray-400 text-sm">Average ROI in Year 1</div>
              </div>
            </div>
            <a href="/contact" className="premium-button squircle text-lg px-8 py-4">
              Get Your Custom ROI Report
            </a>
          </motion.div>
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
            className="glass-card glass-card-hover squircle-xl p-12 text-center interactive-card"
          >
            <div className="w-16 h-16 squircle-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6 icon-container">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience These Benefits?</h2>
            <p className="text-gray-400 mb-8">
              Join hundreds of businesses already transforming their operations with AI automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="premium-button squircle text-lg px-8 py-4">
                Start Your Transformation
              </a>
              <a href="/pricing" className="secondary-button squircle text-lg px-8 py-4">
                View Pricing Plans
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
