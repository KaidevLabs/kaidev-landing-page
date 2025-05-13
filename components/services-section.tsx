import { Code, RefreshCw, Cpu, GitMerge } from "lucide-react"

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-kaidevTeal" />,
      title: "Custom Software Development",
      description:
        "We create innovative, tailored software solutions that address your specific business challenges and objectives, using modern technologies and best practices.",
    },
    {
      icon: <RefreshCw className="h-12 w-12 text-kaidevTeal" />,
      title: "Code Refactoring",
      description:
        "We optimize and improve existing code structures, enhancing performance, maintainability, and scalability without changing external behavior.",
    },
    {
      icon: <Cpu className="h-12 w-12 text-kaidevTeal" />,
      title: "Technical Consulting",
      description:
        "Our expert team provides strategic guidance on technology decisions, architecture design, and implementation strategies to ensure optimal outcomes.",
    },
    {
      icon: <GitMerge className="h-12 w-12 text-kaidevTeal" />,
      title: "Legacy System Modernization",
      description:
        "We transform outdated systems into modern, efficient applications that leverage current technologies while preserving valuable business logic.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-warmWhite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-graphiteCore mb-4">
            Our <span className="text-kaidevTeal">Services</span>
          </h2>
          <p className="text-lg text-graphiteCore/80 max-w-2xl mx-auto">
            We specialize in transforming your software through continuous improvement, delivering solutions that evolve
            with your business needs.
          </p>
          <div className="w-20 h-1 bg-kaidevTeal mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-softPaper p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="font-heading font-medium text-xl mb-4 text-graphiteCore">{service.title}</h3>
              <p className="text-graphiteCore/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
