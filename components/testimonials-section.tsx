'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Link from 'next/link';

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

  return (
    <section id="testimonios" className="bg-softPaper py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-heading mb-4 text-3xl font-semibold text-graphiteCore sm:text-4xl md:text-5xl">
            Lo que dicen{' '}
            <span className="text-kaidevTeal">nuestros clientes</span>
          </h2>
          <div className="mx-auto h-1 w-20 bg-kaidevTeal"></div>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-lg bg-warmWhite p-8 shadow-xs md:p-12">
            <div className="absolute top-6 left-6 text-kaidevTeal/20">
              <Quote className="h-16 w-16" />
            </div>

            <div className="relative z-10">
              <div className="mb-8 flex flex-col gap-3">
                {testimonials[currentIndex].quote.map((part, index) => (
                  <p
                    key={index}
                    className="text-center text-lg italic md:text-xl"
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
                      className="text-center text-lg text-sm text-graphiteCore italic"
                    >
                      {part}
                    </p>
                  ))}
                </div>
              )}
              <div className="flex flex-col gap-3">
                {testimonials[currentIndex].authors.map((author) => (
                  <div key={author.name} className="flex flex-col items-center">
                    <p className="font-medium text-graphiteCore">
                      <Link href={author.url ?? ''} target="_blank">
                        {author.name}
                      </Link>
                    </p>
                    <p className="text-sm text-graphiteCore/70">
                      {author.position}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="rounded-full bg-kaidevTeal/10 p-2 text-kaidevTeal transition-colors hover:bg-kaidevTeal/20"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-3 w-3 rounded-full transition-colors ${
                      index === currentIndex
                        ? 'bg-kaidevTeal'
                        : 'bg-kaidevTeal/30 hover:bg-kaidevTeal/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="rounded-full bg-kaidevTeal/10 p-2 text-kaidevTeal transition-colors hover:bg-kaidevTeal/20"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
