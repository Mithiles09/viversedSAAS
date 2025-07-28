"use client"

import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { motion, useInView } from "framer-motion"
import {
  Shield,
  Rocket,
  Users,
  BarChart3,
  Globe,
  Clock,
  Database,
  Workflow,
  Brain,
  Lock,
  Settings,
  Zap,
} from "lucide-react"
import { useRef } from "react"

export default function FeaturesPage() {
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const featuresInView = useInView(featuresRef, { once: true })

  const mainFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Automation",
      description:
        "Our advanced AI engine learns from your workflows and automatically optimizes processes for maximum efficiency.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Workflow,
      title: "Visual Workflow Builder",
      description: "Create complex automations with our intuitive drag-and-drop interface. No coding required.",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Globe,
      title: "500+ Integrations",
      description:
        "Connect with all your favorite tools and platforms. From CRM to marketing automation, we've got you covered.",
      gradient: "from-green-500 to-blue-500",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights into your automation performance with real-time analytics and custom reporting.",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  const additionalFeatures = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with SOC 2 compliance, end-to-end encryption, and advanced threat protection.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Clock,
      title: "Real-time Processing",
      description: "Process thousands of automations per second with our high-performance infrastructure.",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: Database,
      title: "Smart Data Management",
      description: "Intelligent data routing, transformation, and storage with automatic backup and recovery.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly with role-based permissions, shared workflows, and team analytics.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Lock,
      title: "Compliance Ready",
      description: "Built-in compliance features for GDPR, HIPAA, SOX, and other regulatory requirements.",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Get up and running in minutes with our one-click deployment and guided setup process.",
      gradient: "from-indigo-500 to-purple-500",
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
              <Settings className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm font-medium text-purple-200">FEATURES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Powerful Features for</span>
              <br />
              <span className="text-gradient-purple">Modern Business</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how Viversed's cutting-edge features can transform your business operations and drive
              unprecedented growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 mb-24`}
            >
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  <div
                    className={`flex items-center justify-center w-16 h-16 squircle-lg bg-gradient-to-r ${feature.gradient} mr-4 icon-container`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{feature.title}</h2>
                </div>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">{feature.description}</p>
                <a href="/signup" className="premium-button squircle">
                  Try This Feature
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Features Grid */}
      <section ref={featuresRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-400">Comprehensive features designed for enterprise-grade performance</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-card glass-card-hover squircle-lg p-8 interactive-card group"
              >
                <div
                  className={`w-12 h-12 squircle icon-container flex items-center justify-center mb-4 bg-gradient-to-r ${feature.gradient}`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
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
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-400 mb-8">
              Join thousands of companies already using Viversed to automate their workflows
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/signup" className="premium-button squircle text-lg px-8 py-4">
                Start Free Trial
              </a>
              <a href="/demo" className="secondary-button squircle text-lg px-8 py-4">
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
