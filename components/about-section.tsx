import Image from "next/image"

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-softPaper">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-graphiteCore mb-4">
            About <span className="text-kaidevTeal">Kaidev</span>
          </h2>
          <div className="w-20 h-1 bg-kaidevTeal mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="prose prose-lg max-w-none text-graphiteCore">
              <p className="mb-4">
                Kaidev is a consultancy specializing in software development and code refactoring, founded on the
                principles of the Japanese philosophy of Kaizen — continuous improvement.
              </p>
              <p className="mb-4">
                Our mission is to continuously improve our clients' digital products, helping them achieve their maximum
                technical and functional version. We believe that even what already works can work better.
              </p>
              <p className="mb-4">
                We are a critical, rigorous, and passionate team that partners with companies that value technical
                excellence, clarity in processes, and the power of well-executed small details.
              </p>
              <p>
                Our approach combines technical expertise with an artisanal philosophy, ensuring that every line of code
                we write or refactor contributes to a more efficient, elegant, and functional solution.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image src="/images/isotype_flat_color.svg" alt="Kaidev Isotype Logo" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
