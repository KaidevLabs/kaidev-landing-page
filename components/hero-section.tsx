import Image from "next/image"
import { ArrowRight } from "lucide-react"

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-heroColor text-warmWhite pt-20">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full bg-gradient-to-br from-kaidevGradientFrom to-kaidevGradientTo" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
                Evolve Your Software <br />
                <span className="text-kaidevTeal">With Purpose</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl text-warmWhite/90">
                Get Performance and Automation you can rely on. We engineer
                high-value software solutions that turn your biggest technical challenges
                into your greatest competitive advantages.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-kaidevTeal text-warmWhite rounded-md font-medium transition-all hover:bg-kaidevTeal/90 focus:outline-none focus:ring-2 focus:ring-kaidevTeal focus:ring-offset-2 focus:ring-offset-heroColor"
              >
                Let's Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 border border-warmWhite/30 text-warmWhite rounded-md font-medium transition-all hover:bg-warmWhite/10 focus:outline-none focus:ring-2 focus:ring-warmWhite focus:ring-offset-2 focus:ring-offset-heroColor"
              >
                Discover Our Services
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-80 h-80">
              <Image
                src="/images/isotype_gradient.svg"
                alt="Kaidev Isotype Logo"
                fill
                className="object-contain opacity-80"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-warmWhite/70"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default HeroSection
