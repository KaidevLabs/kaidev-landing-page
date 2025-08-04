"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    quote:
      "Hem requerit en múltiples ocasions els serveis de Kaidev i podem dir que els resultats sempre han estat satisfactoris. A més, podem destacar la flexibilitat per trobar la millor solució pels nostres problemes i la capacitat d'adaptació a contextos i peticions canviants.",
    translation:
      "We have called for Kaidev's services on many occasions and we can say that the results have always been satisfactory. In addition, we can highlight the flexibility to find the best solution for our problems and the ability to adapt to changing contexts and requests.",
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
              <p className="text-lg md:text-xl mb-8 italic ">"{testimonials[currentIndex].quote}"</p>
              <p className="text-lg text-sm text-center text-graphiteCore mb-8 italic">"{testimonials[currentIndex].translation}"</p>

              {testimonials[currentIndex].authors.map((author, index) => (
                <div key={index} className="flex flex-col items-center">
                  <p className="font-medium text-graphiteCore">
                    <Link href={author.url ?? ""} target="_blank">{author.name}</Link>
                  </p>
                  <p className="text-sm text-graphiteCore/70">{author.position}</p>
                </div>
              ))}
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
