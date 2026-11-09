import { Presentation, Search, GraduationCap, RefreshCw } from "lucide-react"
import { BookAppointmentButton } from "./ui/book-appointment-button"

const services = [
  {
    number: "01",
    icon: Presentation,
    title: "Sesión ejecutiva de eficiencia en IA",
    description:
      "Una sesión privada para dirección, responsables de tecnología, ingeniería y operaciones. Qué decisiones tomar antes de aumentar el gasto: costes y consumo, gestión del contexto, skills e integraciones, agentes y automatización, calidad, seguridad y qué medir.",
    meta: "Precio piloto: 300 €",
  },
  {
    number: "02",
    icon: Search,
    title: "Diagnóstico de eficiencia en IA",
    description:
      "Analizamos cómo utiliza la IA tu organización: herramientas, licencias, consumo, flujos de trabajo, seguridad y métricas disponibles. Entregamos línea base, ineficiencias, riesgos, impacto estimado y una hoja de ruta priorizada.",
    meta: "Alcance y precio según el número de equipos y la profundidad del análisis",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Optimización y capacitación de equipos",
    description:
      "Formamos a los equipos en sus propios flujos de trabajo: método, criterios de medición y transferencia de conocimiento. El cliente implementa; nosotros dejamos la capacidad instalada.",
    meta: "Programa adaptable al tamaño de cada equipo",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Revisión de rendimiento y mantenimiento",
    description:
      "Seguimiento periódico de costes, consumo, calidad y capacidad de entrega. Evaluamos nuevas herramientas y modelos, actualizamos flujos de trabajo y proponemos mejoras mientras el mercado cambia.",
    meta: "Servicio recurrente",
  },
]

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-warmWhite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-graphiteCore mb-4">
            Un recorrido para convertir el gasto en <span className="text-kaidevTeal">capacidad</span>
          </h2>
          <p className="text-lg text-graphiteCore/80 max-w-2xl mx-auto">
            No vendemos tokens, agentes ni una configuración concreta de herramientas. Vendemos la capacidad de mejorar cómo tu organización utiliza la IA. La flexibilidad está en la profundidad de cada intervención, no en un catálogo de piezas sueltas.
          </p>
          <div className="w-20 h-1 bg-kaidevTeal mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.number} className="bg-softPaper rounded-lg p-8 border border-graphiteCore/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-sm tracking-widest text-kaidevTeal">{service.number}</span>
                  <Icon className="h-6 w-6 text-kaidevTeal" />
                </div>
                <h3 className="font-heading text-2xl text-graphiteCore mb-3">{service.title}</h3>
                <p className="text-graphiteCore/80 mb-4">{service.description}</p>
                <p className="text-sm font-medium text-kaidevTeal">{service.meta}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-warmWhite border border-graphiteCore/15 rounded-lg p-6 mt-10">
          <h3 className="font-heading text-lg text-graphiteCore mb-3">¿Prefieres que lo implementemos nosotros?</h3>
          <p className="text-graphiteCore/80">
            Configuración de herramientas, desarrollo de skills, integraciones mediante MCP, agentes, automatizaciones, controles de límites de uso e instrumentación para medir consumo y resultados. Se contrata como proyecto adicional, separado de la formación y la transferencia.
          </p>
        </div>

        <div className="text-center mt-16">
          <h3 className="font-heading font-semibold text-3xl text-graphiteCore mb-4">
            Antes de comprar más capacidad, mide la que ya tienes.
          </h3>
          <p className="text-lg text-graphiteCore/80 max-w-2xl mx-auto mb-8">
            Si tu equipo ya está saturando sus cuentas, la conversación más rentable no es cuánto ampliar, sino qué está consumiendo esa capacidad.
          </p>
          <BookAppointmentButton />
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
