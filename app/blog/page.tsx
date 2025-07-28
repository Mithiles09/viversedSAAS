"use client"

import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { motion, useInView } from "framer-motion"
import {
  BookOpen,
  Calendar,
  User,
  ArrowRight,
  FileText,
  Tag,
  Brain,
  TrendingUp,
  Shield,
  BarChart3,
  Globe,
  Users,
} from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

export default function BlogPage() {
  const heroRef = useRef(null)
  const blogRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const blogInView = useInView(blogRef, { once: true })

  const blogPosts = [
    {
      title: "The Future of Business Automation: AI-Powered Workflows",
      excerpt:
        "Discover how artificial intelligence is revolutionizing business automation and what it means for your organization's future.",
      image: "/placeholder.svg?height=300&width=400&text=AI+Automation",
      href: "/blog/future-of-automation",
      date: "Dec 15, 2024",
      author: "Sarah Chen",
      category: "AI & Automation",
      gradient: "from-purple-500 to-pink-500",
      icon: Brain,
    },
    {
      title: "10 Ways to Optimize Your Workflow Efficiency",
      excerpt:
        "Learn practical strategies to streamline your business processes and boost productivity with smart automation techniques.",
      image: "/placeholder.svg?height=300&width=400&text=Workflow+Optimization",
      href: "/blog/optimize-workflow-efficiency",
      date: "Dec 12, 2024",
      author: "Marcus Rodriguez",
      category: "Productivity",
      gradient: "from-blue-500 to-purple-500",
      icon: TrendingUp,
    },
    {
      title: "Security Best Practices for Enterprise Automation",
      excerpt:
        "Essential security measures every business should implement when deploying automated workflows and AI systems.",
      image: "/placeholder.svg?height=300&width=400&text=Security+Best+Practices",
      href: "/blog/security-best-practices",
      date: "Dec 10, 2024",
      author: "Emily Watson",
      category: "Security",
      gradient: "from-green-500 to-teal-500",
      icon: Shield,
    },
    {
      title: "ROI Calculator: Measuring Automation Success",
      excerpt:
        "A comprehensive guide to calculating and maximizing the return on investment from your automation initiatives.",
      image: "/placeholder.svg?height=300&width=400&text=ROI+Calculator",
      href: "/blog/roi-calculator",
      date: "Dec 8, 2024",
      author: "David Kim",
      category: "Business Strategy",
      gradient: "from-orange-500 to-red-500",
      icon: BarChart3,
    },
    {
      title: "Integration Spotlight: Connecting Salesforce with Viversed",
      excerpt:
        "Step-by-step tutorial on integrating Salesforce with Viversed to automate your sales and marketing workflows.",
      image: "/placeholder.svg?height=300&width=400&text=Salesforce+Integration",
      href: "/blog/salesforce-integration",
      date: "Dec 5, 2024",
      author: "Lisa Park",
      category: "Integrations",
      gradient: "from-indigo-500 to-purple-500",
      icon: Globe,
    },
    {
      title: "Customer Success Story: How TechFlow Scaled 300%",
      excerpt:
        "Learn how TechFlow used Viversed to automate their operations and achieve remarkable growth in just 6 months.",
      image: "/placeholder.svg?height=300&width=400&text=Success+Story",
      href: "/blog/techflow-success-story",
      date: "Dec 3, 2024",
      author: "Michael Brown",
      category: "Case Studies",
      gradient: "from-pink-500 to-red-500",
      icon: Users,
    },
  ]

  const categories = [
    "All",
    "AI & Automation",
    "Productivity",
    "Security",
    "Business Strategy",
    "Integrations",
    "Case Studies",
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
              <BookOpen className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm font-medium text-purple-200">BLOG</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Insights &</span>
              <br />
              <span className="text-gradient-purple">Resources</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Stay ahead with the latest trends, best practices, and insights in business automation and AI technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 squircle glass-card text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all duration-200 inline-flex items-center"
              >
                <Tag className="w-3 h-3 mr-2" />
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card glass-card-hover squircle-xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Featured+Post"
                  alt="Featured Post"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 squircle text-sm font-medium inline-flex items-center">
                    <FileText className="w-3 h-3 mr-1" />
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  The Future of Business Automation: AI-Powered Workflows
                </h2>
                <p className="text-gray-400 mb-6 text-lg">
                  Discover how artificial intelligence is revolutionizing business automation and what it means for your
                  organization's future growth and efficiency.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User className="w-4 h-4 mr-1" />
                  <span>Sarah Chen</span>
                  <span className="mx-2">•</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Dec 15, 2024</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                </div>
                <a href="/blog/future-of-automation" className="premium-button squircle w-fit">
                  Read Article <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section ref={blogRef} className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={blogInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-card glass-card-hover squircle-lg overflow-hidden interactive-card group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`bg-gradient-to-r ${post.gradient} text-white px-3 py-1 squircle text-sm font-medium inline-flex items-center`}
                    >
                      <post.icon className="w-3 h-3 mr-1" />
                      {post.category}
                    </span>
                    <FileText className="text-gray-500 w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <a
                    href={post.href}
                    className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center"
                  >
                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
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
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Never Miss an Update</h2>
            <p className="text-gray-400 mb-8">
              Subscribe to our newsletter for the latest insights, tips, and automation strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 premium-input squircle" />
              <button className="premium-button squircle">Subscribe</button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
