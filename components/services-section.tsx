import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "./ui/button"

const servicesByCat = [
  {
    categoryTitle: "Foundation <span class='text-kaidevTeal'>&</span> Scale",
    categoryDescription:
      "We engineer robust, custom platforms and provide the strategic direction needed to stabilize and future-proof your core technology stack.",
    imagePath: "/images/foundation_and_scale.png",
    imageAlt: "Architectural blueprint",
    services: [
      {
        id: "S1",
        title: "Complex System Architecture <span class='text-kaidevTeal'>&</span> Development",
        description:
          "We architect and engineer high-performance solutions for mission-critical enterprise workflows. Our focus is on creating scalable, resilient, and strategically aligned systems that master complexity in demanding industrial and financial environments. By translating intricate business logic into robust, maintainable code, we deliver a lasting competitive advantage, ensuring your technology core is not just a utility, but a powerful engine for growth and innovation.",
      },
      {
        id: "S3",
        title: "Strategic Technology <span class='text-kaidevTeal'>&</span> Architecture Advisory",
        description:
          "We provide executive-level guidance to navigate critical technology decisions and de-risk complex modernization initiatives. Our advisory services focus on creating actionable roadmaps, designing resilient event-driven architectures, and aligning technology strategy with core business objectives. We empower leadership with the clarity and confidence needed to invest in the right platforms, eliminate architectural fragility, and build a technology ecosystem that is prepared for future opportunities and challenges.",
      },
    ],
  },
  {
    categoryTitle: "Optimization <span class='text-kaidevTeal'>&</span> Health",
    categoryDescription:
      "Systematically eliminate technical debt, resolve critical performance bottlenecks, and modernize brittle legacy systems to ensure stability and control.",
    imagePath: "/images/optimization_and_health.png",
    imageAlt: "Code optimization illustration",
    services: [
      {
        id: "S2",
        title: "Performance <span class='text-kaidevTeal'>&</span> Codebase Optimization",
        description:
          "We systematically dismantle technical debt and performance bottlenecks within your critical applications. Our process involves deep architectural analysis, strategic refactoring, and targeted optimizations to enhance speed, security, and maintainability. We restore agility to your development lifecycle, reduce operational risk, and ensure your systems can scale to meet future market demands. The result is a revitalized, high-performance codebase that is both reliable and cost-effective to own.",
      },
      {
        id: "S4",
        title: "High-Risk Legacy System Transformation",
        description:
          "We specialize in modernizing fragile, outdated enterprise systems while safeguarding decades of invaluable business logic. Our structured transformation process mitigates risk by systematically extracting and rebuilding core functionalities into a modern, adaptable architecture. We eliminate dependency on unsupported technologies, restore operational stability, and unlock new capabilities for integration and growth. This strategic intervention turns a high-risk liability into a resilient, future-proof asset.",
      },
    ],
  },
  {
    categoryTitle: "Future-Proofing <span class='text-kaidevTeal'>&</span> Intelligence",
    categoryDescription:
      "Integrate advanced automation, custom machine learning models, and data pipelines to unlock new efficiencies and competitive insights.",
    imagePath: "/images/future_proofing_and_intelligence.png",
    imageAlt: "AI and data integration illustration",
    services: [
      {
        id: "S5",
        title: "Business Process Automation (BPA)",
        description:
          "We engineer sophisticated automation solutions that streamline complex, repetitive enterprise workflows. By building custom automation layers and integrating intelligent systems, we eliminate manual errors, accelerate operational cycles, and free up high-value resources. Our focus is on mastering intricate business rules and creating seamless, resilient automation for processes in finance, logistics, and compliance. We turn operational friction into a source of efficiency, reliability, and competitive advantage.",
      },
      {
        id: "S6",
        title: "Data Mining <span class='text-kaidevTeal'>&</span> Custom ML Model Integration",
        description:
          "We unlock the immense value hidden within your enterprise data. Our expertise lies in advanced feature extraction, predictive analytics, and the seamless integration of custom-trained machine learning models into your core applications. We transform raw data into a strategic asset, enabling data-driven decision-making, predictive operational insights, and new intelligent features. From identifying optimization opportunities to predicting market trends, we empower your systems with the intelligence to innovate and lead.",
      },
    ],
  },
]

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-warmWhite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-graphiteCore mb-4">
            Transforming <span className="text-kaidevTeal">Complexity</span> into <span className="text-kaidevTeal">Competitive</span> Advantage
          </h2>
          <p className="text-lg text-graphiteCore/80 max-w-2xl mx-auto">
            We specialize in transforming your software through continuous improvement, delivering solutions that evolve
            with your business needs.
          </p>
          <div className="w-20 h-1 bg-kaidevTeal mx-auto mt-6"></div>
        </div>

        <div className="space-y-16">
          {servicesByCat.map(category => (
            <div key={category.categoryTitle} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:pr-8">
                <h3 className="font-heading font-bold text-2xl text-graphiteCore mb-3" dangerouslySetInnerHTML={{__html: category.categoryTitle}}></h3>
                <p className="text-graphiteCore/80 mb-6" dangerouslySetInnerHTML={{__html: category.categoryDescription}}></p>
                <Accordion type="single" collapsible className="w-full">
                  {category.services.map(service => (
                    <AccordionItem key={service.id} value={service.id}>
                      <AccordionTrigger className="font-semibold text-left hover:text-kaidevTeal">
                        <span dangerouslySetInnerHTML={{__html: service.title}}></span>
                      </AccordionTrigger>
                      <AccordionContent className="text-graphiteCore/90">
                        <span dangerouslySetInnerHTML={{__html: service.description}}></span>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="bg-softPaper rounded-lg p-2 flex items-center justify-center lg:h-auto">
                <img src={category.imagePath} alt={category.imageAlt} className="rounded-lg object-fit" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <h3 className="font-heading font-semibold text-3xl text-graphiteCore mb-4">
            Ready to Transform Your Technology?
          </h3>
          <p className="text-lg text-graphiteCore/80 max-w-2xl mx-auto mb-8">
            Let's discuss how we can apply our expertise to solve your most complex challenges and create a lasting
            competitive advantage.
          </p>
          <Button size="lg" className="font-semibold">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
