"use client"

import Image from "next/image"
import Link from "next/link"

interface BlogCardProps {
  title: string
  excerpt: string
  image: string
  href: string
  date: string
  author: string
  category: string
  className?: string
}

export function BlogCard({ title, excerpt, image, href, date, author, category, className = "" }: BlogCardProps) {
  return (
    <Link href={href} className={`group block ${className}`}>
      <article className="glass-effect rounded-xl overflow-hidden hover:glow-effect transition-all duration-300 hover:scale-105">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-3">{excerpt}</p>
          <div className="flex items-center text-sm text-gray-500">
            <span>{author}</span>
            <span className="mx-2">•</span>
            <span>{date}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
