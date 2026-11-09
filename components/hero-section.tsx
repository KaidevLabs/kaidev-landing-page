import Image from 'next/image';
import { BookAppointmentButton } from './ui/book-appointment-button';

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center bg-heroColor pt-20 text-warmWhite"
    >
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full bg-linear-to-br from-kaidevGradientFrom to-kaidevGradientTo" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h1 className="font-heading mb-6 text-4xl leading-tight font-bold sm:text-5xl md:text-6xl">
                Convierte la IA en una <br />
                <span className="text-kaidevTeal">ventaja operativa real</span>
              </h1>
              <p className="mb-8 max-w-2xl text-lg text-warmWhite/90 md:text-xl">
                Más trabajo útil. Menos gasto innecesario. Los mismos estándares
                de ingeniería. Ayudamos a las empresas a mejorar cómo sus
                equipos utilizan la IA: flujos de trabajo, herramientas, costes
                y procesos de ingeniería, sin comprometer la calidad ni la
                seguridad.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <BookAppointmentButton />
              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-md border border-warmWhite/30 px-6 py-3 font-medium text-warmWhite transition-all hover:bg-warmWhite/10 focus:ring-2 focus:ring-warmWhite focus:ring-offset-2 focus:ring-offset-heroColor focus:outline-hidden"
              >
                Ver los servicios
              </a>
            </div>
          </div>

          <div className="hidden items-center justify-center lg:flex">
            <div className="relative h-80 w-80">
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

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 transform animate-bounce">
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
  );
};

export default HeroSection;
