import { Presentation, Search, GraduationCap, RefreshCw } from 'lucide-react';
import { BookAppointmentButton } from './ui/book-appointment-button';
import SectionHeading from './section-heading';

const services = [
  {
    number: '01',
    icon: Presentation,
    title: 'Sesión ejecutiva de eficiencia en IA',
    description:
      'Una sesión privada para dirección, responsables de tecnología, ingeniería y operaciones. Qué decisiones tomar antes de aumentar el gasto: costes y consumo, gestión del contexto, skills e integraciones, agentes y automatización, calidad, seguridad y qué medir.',
    meta: 'Precio piloto: 300 €',
  },
  {
    number: '02',
    icon: Search,
    title: 'Diagnóstico de eficiencia en IA',
    description:
      'Analizamos cómo utiliza la IA tu organización: herramientas, licencias, consumo, flujos de trabajo, seguridad y métricas disponibles. Entregamos línea base, ineficiencias, riesgos, impacto estimado y una hoja de ruta priorizada.',
    meta: 'Alcance y precio según el número de equipos y la profundidad del análisis',
  },
  {
    number: '03',
    icon: GraduationCap,
    title: 'Optimización y capacitación de equipos',
    description:
      'Formamos a los equipos en sus propios flujos de trabajo: método, criterios de medición y transferencia de conocimiento. El cliente implementa; nosotros dejamos la capacidad instalada.',
    meta: 'Programa adaptable al tamaño de cada equipo',
  },
  {
    number: '04',
    icon: RefreshCw,
    title: 'Revisión de rendimiento y mantenimiento',
    description:
      'Seguimiento periódico de costes, consumo, calidad y capacidad de entrega. Evaluamos nuevas herramientas y modelos, actualizamos flujos de trabajo y proponemos mejoras mientras el mercado cambia.',
    meta: 'Servicio recurrente',
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="bg-canvas py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="left"
          accent
          title={
            <>
              Un recorrido para convertir el gasto en{' '}
              <span className="text-kaidevTeal">capacidad</span>
            </>
          }
          description="No vendemos tokens, agentes ni una configuración concreta de herramientas. Vendemos la capacidad de mejorar cómo tu organización utiliza la IA. La flexibilidad está en la profundidad de cada intervención, no en un catálogo de piezas sueltas."
          className="mb-10 md:mb-14"
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className="rounded-lg border border-line bg-surface p-6 md:p-8"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-heading text-sm tracking-widest text-tealDeep">
                    {service.number}
                  </span>
                  <Icon className="h-6 w-6 text-tealDeep" />
                </div>
                <h3 className="mb-3 font-heading text-xl text-ink md:text-2xl">
                  {service.title}
                </h3>
                <p className="mb-4 text-ink-muted">{service.description}</p>
                <p className="text-sm font-medium text-tealDeep">
                  {service.meta}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-lg border border-line bg-surface-warm p-6 md:p-8">
          <h3 className="mb-3 font-heading text-xl text-ink">
            ¿Prefieres que lo implementemos nosotros?
          </h3>
          <p className="max-w-3xl text-ink-muted">
            Configuración de herramientas, desarrollo de skills, integraciones
            mediante MCP, agentes, automatizaciones, controles de límites de uso
            e instrumentación para medir consumo y resultados. Se contrata como
            proyecto adicional, separado de la formación y la transferencia.
          </p>
        </div>

        <div className="mt-16 text-center md:mt-20">
          <h3 className="mx-auto mb-4 max-w-3xl font-heading text-2xl font-semibold text-balance text-ink md:text-3xl">
            Antes de comprar más capacidad, mide la que ya tienes.
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-pretty text-ink-muted">
            Si tu equipo ya está saturando sus cuentas, la conversación más
            rentable no es cuánto ampliar, sino qué está consumiendo esa
            capacidad.
          </p>
          <BookAppointmentButton />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
