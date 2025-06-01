import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-inkCharcoal text-warmWhite/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="#home" className="inline-block mb-6">
              <Image
                src="/images/logo_horizontal_flat_color_dark_bg.svg"
                alt="Kaidev Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mb-6 max-w-md">
              Consultancy specializing in software development and code refactoring, inspired by the Japanese philosophy
              of Kaizen — continuous improvement.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/EverlyRusher"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warmWhite/70 hover:text-kaidevTeal transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-medium text-lg mb-4 text-warmWhite">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-warmWhite/70 hover:text-kaidevTeal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-warmWhite/70 hover:text-kaidevTeal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-warmWhite/70 hover:text-kaidevTeal transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#philosophy" className="text-warmWhite/70 hover:text-kaidevTeal transition-colors">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-warmWhite/70 hover:text-kaidevTeal transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-medium text-lg mb-4 text-warmWhite">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-warmWhite/70 hover:text-kaidevTeal transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-warmWhite/70 hover:text-kaidevTeal transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-warmWhite/70 hover:text-kaidevTeal transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warmWhite/10 mt-12 pt-8 text-center text-sm">
          <p>© {currentYear} Kaidev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
