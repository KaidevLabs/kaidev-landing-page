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
  title: "Kaidev | Eficiencia en IA para empresas",
  description: "Consultora de ingeniería especializada en eficiencia en IA. Ayudamos a las empresas a obtener más trabajo útil de las herramientas que ya pagan, con medición, control de costes y seguridad.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
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
        <script defer src="https://umami.kaidev.io/script.js" data-website-id="e02e6171-142b-4c3b-96fb-b30c26fd00a0"></script>
      </body>
    </html>
  )
}
