import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

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
              of Kaizen - continuous improvement.
            </p>
            <div className="flex space-x-4 inline-block align-middle">
              <a
                href="https://github.com/EverlyRusher"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warmWhite/70 hover:text-kaidevTeal transition-colors flex justify-center items-center"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/kaidev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warmWhite/70 hover:text-kaidevTeal transition-colors flex justify-center items-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://bsky.app/profile/jpascual.kaidev.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warmWhite/70 hover:text-kaidevTeal transition-colors flex justify-center items-center"
                aria-label="BlueSky"
              >
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M288 227.1C261.9 176.4 190.9 81.9 124.9 35.3 61.6-9.4 37.5-1.7 21.6 5.5 3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7 3.3-.5 6.6-.9 10-1.4-3.3 .5-6.6 1-10 1.4-93.9 14-177.3 48.2-67.9 169.9 120.3 124.6 164.8-26.7 187.7-103.4 22.9 76.7 49.2 222.5 185.6 103.4 102.4-103.4 28.1-156-65.8-169.9-3.3-.4-6.7-.8-10-1.3 3.4 .4 6.7 .9 10 1.3 64.1 7.1 133.6-15.1 153.2-80.7 5.9-19.9 15-138.9 15-155.5s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8-66.1 46.6-137.1 141.1-163.2 191.8z"/>
                </svg>
              </a>
              <a
                href="mailto:info@kaidev.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex text-warmWhite/70 hover:text-kaidevTeal transition-colors flex justify-center items-center"
                aria-label="BlueSky"
              >
                <Mail />&nbsp;info@kaidev.io
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-medium text-lg mb-4 text-warmWhite">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#home" className="text-warmWhite/70 hover:text-kaidevTeal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-warmWhite/70 hover:text-kaidevTeal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-warmWhite/70 hover:text-kaidevTeal transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#philosophy" className="text-warmWhite/70 hover:text-kaidevTeal transition-colors">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-warmWhite/70 hover:text-kaidevTeal transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-warmWhite/70 hover:text-kaidevTeal transition-colors">
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
