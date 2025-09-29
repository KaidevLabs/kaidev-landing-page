"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    quote: [
      "Hem requerit en múltiples ocasions els serveis de Kaidev i podem dir que els resultats sempre han estat satisfactoris. A més, podem destacar la flexibilitat per trobar la millor solució pels nostres problemes i la capacitat d'adaptació a contextos i peticions canviants.",
    ],
    translation: [
      "We have called for Kaidev's services on many occasions and we can say that the results have always been satisfactory. In addition, we can highlight the flexibility to find the best solution for our problems and the ability to adapt to changing contexts and requests.",
    ],
    authors: [
      {
        name: "David Ramírez Saco",
        position: "Clinical Pharmacology resident physician at Hospital Universitari Vall d'Hebron",
        url: "https://www.linkedin.com/in/david-ram%C3%ADrez-saco-899283aa/"
      },
      {
        name: "Xavier Castells",
        position: "Head of the Evimatic.com project",
        url: "https://www.linkedin.com/in/xavier-castells-93aa827/"
      }
    ]
  },
  {
    quote: [
      "Quiero darle las gracias a Jaime, y a su equipo por la forma en la que han trabajado en este proyecto. Desde el principio han sabido orientar el desarrollo de manera eficiente, distribuyendo los recursos con inteligencia y guiando cada tarea para que todo quedara bien cubierto.",
      "He aprendido mucho con vosotros, especialmente a priorizar lo más importante semana a semana con el método Scrum, lo que nos ha permitido avanzar con claridad y mantener un buen ritmo de trabajo.",
      "El conocimiento senior que aportas, no solo como full stack developer sino como un apasionado de la programación optimizada, se refleja en cada detalle. Esa visión de constante aprendizaje y búsqueda de la perfección se transmite también al equipo, y se nota en los resultados.",
      "Gracias por la implicación, la profesionalidad y el compromiso que demostráis.",
      "Siento que con el equipo podemos crear y desarrollar proyectos de cualquier envergadura. Es un verdadero placer trabajar con vosotros.",
    ],
    translation: [
      "I want to thank you, Jaime, and your team for the way you all have worked on this project. From the beginning, you knew how to guide the development efficiently, allocating resources intelligently and steering each task so that everything was well covered.",
      "I have learned a lot from you, especially how to prioritize what's most important week by week with the Scrum method, which allowed us to advance with clarity and maintain a good pace of work.",
      "The senior knowledge you bring, not only as a full stack developer but as someone passionate about optimized programming, is reflected in every detail. That vision of constant learning and the search for perfection is also transmitted to the team, and it shows in the results.",
      "Thank you for the involvement, professionalism, and commitment you demonstrate.",
      "I feel that with this team we can create and develop projects of any scale. It is a true pleasure to work with all of you.",
    ],
    authors: [
      {
        name: "Arkady Grigoryan Melikstyan",
        position: "CEO @ AGILE REGISTRATIONS PTY LTD",
        url: "https://abn-register.com.au/"
      },
    ]
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
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section id="testimonials" className="py-20 bg-softPaper">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-graphiteCore mb-4">
            Client <span className="text-kaidevTeal">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-kaidevTeal mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-warmWhite rounded-lg shadow-sm p-8 md:p-12">
            <div className="absolute top-6 left-6 text-kaidevTeal/20">
              <Quote className="h-16 w-16" />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col gap-3 mb-8">
                {testimonials[currentIndex].quote.map((part, index) => (
                  <p key={index} className="text-lg md:text-xl text-center italic">
                    {part}
                  </p>
                ))}
              </div>
              <div className="flex flex-col gap-2 mb-8">
                {testimonials[currentIndex].translation.map((part, index) => (
                  <p key={index} className="text-lg text-sm text-center text-graphiteCore italic">
                    {part}
                  </p>
                ))}
              </div>
              <div className="flex flex-col gap-3">
              {testimonials[currentIndex].authors.map(author => (
                <div key={author.name} className="flex flex-col items-center">
                  <p className="font-medium text-graphiteCore">
                    <Link href={author.url ?? ""} target="_blank">{author.name}</Link>
                  </p>
                  <p className="text-sm text-graphiteCore/70">{author.position}</p>
                </div>
              ))}
            </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-kaidevTeal/10 text-kaidevTeal hover:bg-kaidevTeal/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-kaidevTeal" : "bg-kaidevTeal/30 hover:bg-kaidevTeal/50"
                      }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-kaidevTeal/10 text-kaidevTeal hover:bg-kaidevTeal/20 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
