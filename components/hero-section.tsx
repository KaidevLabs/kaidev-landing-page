import Image from "next/image"
import {BookAppointmentButton} from "./ui/book-appointment-button"

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-heroColor text-warmWhite pt-20">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full bg-linear-to-br from-kaidevGradientFrom to-kaidevGradientTo" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
                Convierte la IA en una <br />
                <span className="text-kaidevTeal">ventaja operativa real</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl text-warmWhite/90">
                Más trabajo útil. Menos gasto innecesario. Los mismos estándares de ingeniería. Ayudamos a las empresas a mejorar cómo sus equipos utilizan la IA: flujos de trabajo, herramientas, costes y procesos de ingeniería, sin comprometer la calidad ni la seguridad.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <BookAppointmentButton />
              <a
                href="#servicios"
                className="inline-flex items-center justify-center px-6 py-3 border border-warmWhite/30 text-warmWhite rounded-md font-medium transition-all hover:bg-warmWhite/10 focus:outline-hidden focus:ring-2 focus:ring-warmWhite focus:ring-offset-2 focus:ring-offset-heroColor"
              >
                Ver los servicios
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
        <a href="#problema" aria-label="Scroll down">
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
