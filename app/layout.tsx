import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Kaidev | Software Development & Code Refactoring",
  description:
    "Consultancy specializing in software development and code refactoring, inspired by the Japanese philosophy of Kaizen (continuous improvement).",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Custom font for headings - using Google Fonts version of Overused Grotesk as alternative */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon_Kaidev.svg" sizes="any" />
      </head>
      <body className={`${inter.variable} font-sans bg-softPaper`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <script async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
      </body>
    </html>
  )
}
