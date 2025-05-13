import Image from "next/image"
import { CheckCircle } from "lucide-react"

const PhilosophySection = () => {
  const values = [
    {
      title: "Technical Excellence",
      description: "We strive for the highest standards in every line of code we write.",
    },
    {
      title: "Clarity in Process",
      description: "We believe in transparent, well-defined processes that deliver predictable results.",
    },
    {
      title: "Continuous Improvement",
      description: "Inspired by Kaizen, we constantly seek ways to enhance and evolve.",
    },
    {
      title: "Attention to Detail",
      description: "We understand that excellence lies in the careful execution of small details.",
    },
  ]

  return (
    <section
      id="philosophy"
      className="py-20 bg-gradient-to-br from-kaidevGradientFrom to-kaidevGradientTo text-warmWhite"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl mb-4">Our Philosophy</h2>
          <p className="text-lg text-warmWhite/90 max-w-2xl mx-auto">
            At the core of Kaidev is the Japanese concept of Kaizen — a commitment to continuous improvement in all
            aspects of our work.
          </p>
          <div className="w-20 h-1 bg-warmWhite mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="prose prose-lg max-w-none text-warmWhite prose-headings:text-warmWhite prose-p:text-warmWhite/90">
              <h3 className="font-heading font-medium text-2xl mb-6">The Kaizen Way</h3>
              <p className="mb-6">
                Kaizen, meaning "change for better," embodies our approach to software development and refactoring. We
                believe that even systems that work well can be improved, optimized, and evolved to meet changing needs.
              </p>
              <p className="mb-8">
                This philosophy guides our partnership with clients who value technical excellence and understand that
                the journey toward optimal software is continuous and iterative.
              </p>

              <h3 className="font-heading font-medium text-2xl mb-6">Our Core Values</h3>

              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-warmWhite mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-lg">{value.title}</h4>
                      <p className="text-warmWhite/80">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-warmWhite/10 rounded-full"></div>
              <div className="absolute inset-8 bg-warmWhite/5 rounded-full"></div>
              <div className="absolute inset-16 bg-warmWhite/5 rounded-full flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <Image src="/images/Isotype_flat_white.svg" alt="Kaidev Isotype" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhilosophySection
