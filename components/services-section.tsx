import { Network, Zap, ShieldCheck, GitBranchPlus, Workflow, BrainCircuit } from "lucide-react"

const ServicesSection = () => {
  const services = [
    {
      id: "S1",
      icon: <Network className="h-12 w-12 text-kaidevTeal" />,
      title: "Complex System Architecture & Development",
      description:
        "We architect and engineer high-performance solutions for mission-critical enterprise workflows. Our focus is on creating scalable, resilient, and strategically aligned systems that master complexity in demanding industrial and financial environments. <br><br>By translating intricate business logic into robust, maintainable code, we deliver a lasting competitive advantage, ensuring your technology core is not just a utility, but a powerful engine for growth and innovation.",
    },
    {
      id: "S2",
      icon: <Zap className="h-12 w-12 text-kaidevTeal" />,
      title: "Performance & Codebase Optimization",
      description:
        "We systematically dismantle technical debt and performance bottlenecks within your critical applications. Our process involves deep architectural analysis, strategic refactoring, and targeted optimizations to enhance speed, security, and maintainability. <br><br>We restore agility to your development lifecycle, reduce operational risk, and ensure your systems can scale to meet future market demands. The result is a revitalized, high-performance codebase that is both reliable and cost-effective to own.",
    },
    {
      id: "S3",
      icon: <ShieldCheck className="h-12 w-12 text-kaidevTeal" />,
      title: "Strategic Technology & Architecture Advisory",
      description:
        "We provide executive-level guidance to navigate critical technology decisions and de-risk complex modernization initiatives. Our advisory services focus on creating actionable roadmaps, designing resilient event-driven architectures, and aligning technology strategy with core business objectives. <br><br>We empower leadership with the clarity and confidence needed to invest in the right platforms, eliminate architectural fragility, and build a technology ecosystem that is prepared for future opportunities and challenges.",
    },
    {
      id: "S4",
      icon: <GitBranchPlus className="h-12 w-12 text-kaidevTeal" />,
      title: "High-Risk Legacy System Transformation",
      description:
        "We specialize in modernizing fragile, outdated enterprise systems while safeguarding decades of invaluable business logic. Our structured transformation process mitigates risk by systematically extracting and rebuilding core functionalities into a modern, adaptable architecture. <br><br>We eliminate dependency on unsupported technologies, restore operational stability, and unlock new capabilities for integration and growth. This strategic intervention turns a high-risk liability into a resilient, future-proof asset.",
    },
    {
      id: "S5",
      icon: <Workflow className="h-12 w-12 text-kaidevTeal" />,
      title: "Business Process Automation (BPA)",
      description:
        "We engineer sophisticated automation solutions that streamline complex, repetitive enterprise workflows. By building custom automation layers and integrating intelligent systems, we eliminate manual errors, accelerate operational cycles, and free up high-value resources. <br><br>Our focus is on mastering intricate business rules and creating seamless, resilient automation for processes in finance, logistics, and compliance. We turn operational friction into a source of efficiency, reliability, and competitive advantage.",
    },
    {
      id: "S6",
      icon: <BrainCircuit className="h-12 w-12 text-kaidevTeal" />,
      title: "Data Mining & Custom ML Model Integration",
      description:
        "We unlock the immense value hidden within your enterprise data. Our expertise lies in advanced feature extraction, predictive analytics, and the seamless integration of custom-trained machine learning models into your core applications. <br><br>We transform raw data into a strategic asset, enabling data-driven decision-making, predictive operational insights, and new intelligent features. From identifying optimization opportunities to predicting market trends, we empower your systems with the intelligence to innovate and lead.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-warmWhite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-graphiteCore mb-4">
            Transforming <span className="text-kaidevTeal">Complexity</span>
            <br></br>into <span className="text-kaidevTeal">Competitive</span> Advantage
          </h2>
          <p className="text-lg text-graphiteCore/80 max-w-2xl mx-auto">
            We specialize in transforming your software through continuous improvement, delivering solutions that evolve
            with your business needs.
          </p>
          <div className="w-20 h-1 bg-kaidevTeal mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map(service => (
            <div
              key={service.id}
              className="bg-softPaper p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="font-heading font-medium text-xl mb-4 text-graphiteCore">{service.title}</h3>
              <p className="text-graphiteCore/80 flex-grow" dangerouslySetInnerHTML={{__html: service.description}}></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
