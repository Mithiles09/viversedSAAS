import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Viversed - AI-Powered Business Automation",
  description:
    "Transform your workflows with intelligent automation that learns, adapts, and scales with your business needs.",
  keywords: ["AI", "automation", "business", "workflow", "SaaS"],
  authors: [{ name: "Viversed Team" }],
  openGraph: {
    title: "Viversed - AI-Powered Business Automation",
    description:
      "Transform your workflows with intelligent automation that learns, adapts, and scales with your business needs.",
    type: "website",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.10.40/build/spline-viewer.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}
