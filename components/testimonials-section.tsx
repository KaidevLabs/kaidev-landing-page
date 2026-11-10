'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from './section-heading';

const testimonials = [
  {
    quote: [
      "Hem requerit en múltiples ocasions els serveis de Kaidev i podem dir que els resultats sempre han estat satisfactoris. A més, podem destacar la flexibilitat per trobar la millor solució pels nostres problemes i la capacitat d'adaptació a contextos i peticions canviants.",
    ],
    translation: [
      'En múltiples ocasiones hemos requerido los servicios de Kaidev y podemos decir que los resultados siempre han sido satisfactorios. Además, destacamos la flexibilidad para encontrar la mejor solución a nuestros problemas y la capacidad de adaptación a contextos y peticiones cambiantes.',
    ],
    authors: [
      {
        name: 'David Ramírez Saco',
        position:
          "Clinical Pharmacology resident physician at Hospital Universitari Vall d'Hebron",
        url: 'https://www.linkedin.com/in/david-ram%C3%ADrez-saco-899283aa/',
      },
      {
        name: 'Xavier Castells',
        position: 'Head of the Evimatic.com project',
        url: 'https://www.linkedin.com/in/xavier-castells-93aa827/',
      },
    ],
  },
  {
    quote: [
      'Quiero darle las gracias a Jaime, y a su equipo por la forma en la que han trabajado en este proyecto. Desde el principio han sabido orientar el desarrollo de manera eficiente, distribuyendo los recursos con inteligencia y guiando cada tarea para que todo quedara bien cubierto.',
      'He aprendido mucho con vosotros, especialmente a priorizar lo más importante semana a semana con el método Scrum, lo que nos ha permitido avanzar con claridad y mantener un buen ritmo de trabajo.',
      'El conocimiento senior que aportas, no solo como full stack developer sino como un apasionado de la programación optimizada, se refleja en cada detalle. Esa visión de constante aprendizaje y búsqueda de la perfección se transmite también al equipo, y se nota en los resultados.',
      'Gracias por la implicación, la profesionalidad y el compromiso que demostráis.',
      'Siento que con el equipo podemos crear y desarrollar proyectos de cualquier envergadura. Es un verdadero placer trabajar con vosotros.',
    ],
    translation: [],
    authors: [
      {
        name: 'Arkady Grigoryan Melikstyan',
        position: 'CEO @ AGILE REGISTRATIONS PTY LTD',
        url: 'https://abn-register.com.au/',
      },
    ],
  },
  // {
  //   quote:
  //     "Working with Kaidev has been a game-changer for our development process. Their focus on continuous improvement aligned perfectly with our company values.",
  //   author: "Michael Chen",
  //   position: "Product Director, SoftSolutions",
  // },
  // {
  //   quote:
  //     "The team at Kaidev doesn't just write code; they craft solutions with precision and care. Their refactoring work improved our application performance by 40%.",
  //   author: "Elena Rodriguez",
  //   position: "Engineering Manager, DataFlow Systems",
  // },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const controlClass =
    'inline-flex h-11 w-11 items-center justify-center rounded-full text-tealDeep transition-colors focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface-warm focus-visible:outline-hidden';

  return (
    <section id="testimonios" className="bg-canvas py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              Lo que dicen{' '}
              <span className="text-kaidevTeal">nuestros clientes</span>
            </>
          }
          className="mb-10 md:mb-14"
        />

        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-lg bg-surface-warm p-6 shadow-xs md:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-6 left-6 text-tealDeep/15"
            >
              <Quote className="h-12 w-12 md:h-16 md:w-16" />
            </div>

            <div className="relative z-10">
              <div className="mb-8 flex flex-col gap-3">
                {testimonials[currentIndex].quote.map((part, index) => (
                  <p
                    key={index}
                    className="text-center text-lg leading-relaxed text-pretty italic md:text-xl"
                  >
                    {part}
                  </p>
                ))}
              </div>
              {testimonials[currentIndex].translation.length > 0 && (
                <div className="mb-8 flex flex-col gap-2">
                  {testimonials[currentIndex].translation.map((part, index) => (
                    <p
                      key={index}
                      className="text-center text-base leading-relaxed text-pretty text-ink-muted italic"
                    >
                      {part}
                    </p>
                  ))}
                </div>
              )}
              <div className="flex flex-col gap-3">
                {testimonials[currentIndex].authors.map((author) => (
                  <div key={author.name} className="flex flex-col items-center">
                    <p className="font-medium text-ink">
                      <Link
                        href={author.url ?? ''}
                        target="_blank"
                        className="transition-colors hover:text-tealDeep focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface-warm focus-visible:outline-hidden"
                      >
                        {author.name}
                      </Link>
                    </p>
                    <p className="text-center text-sm text-ink-muted">
                      {author.position}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-10 flex items-center justify-center gap-2 md:gap-4">
              <button
                type="button"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className={`${controlClass} bg-tealDeep/10 hover:bg-tealDeep/20`}
              >
                <ChevronLeft aria-hidden="true" className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={index === currentIndex ? 'true' : undefined}
                    className={`${controlClass} hover:bg-tealDeep/10`}
                  >
                    <span
                      aria-hidden="true"
                      className={`block h-2.5 w-2.5 rounded-full transition-colors ${
                        index === currentIndex
                          ? 'bg-tealDeep'
                          : 'bg-tealDeep/30 hover:bg-tealDeep/50'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className={`${controlClass} bg-tealDeep/10 hover:bg-tealDeep/20`}
              >
                <ChevronRight aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
