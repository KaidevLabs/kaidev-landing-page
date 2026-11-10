import Image from 'next/image';
import { BookAppointmentButton } from './ui/book-appointment-button';

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center bg-surface-dark pt-20 pb-24 text-ink-inverse"
    >
      <div aria-hidden="true" className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full bg-linear-to-br from-kaidevGradientFrom to-kaidevGradientTo" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h1 className="mb-6 font-heading text-[1.875rem] leading-[1.12] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Convierte la IA en una{' '}
                <span className="text-silentJade">ventaja operativa real</span>
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-pretty text-ink-inverse/90 md:text-xl">
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
                className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-ink-inverse/30 px-6 py-3 font-medium whitespace-nowrap text-ink-inverse transition-all hover:bg-ink-inverse/10 focus-visible:ring-2 focus-visible:ring-focus-inverse focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark focus-visible:outline-hidden sm:w-auto"
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

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce md:block">
        <a
          href="#problema"
          aria-label="Scroll down"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-inverse/70 transition-colors hover:text-silentJade focus-visible:ring-2 focus-visible:ring-focus-inverse focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark focus-visible:outline-hidden"
        >
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
            className="h-6 w-6"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
