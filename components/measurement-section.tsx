import { CheckCircle } from "lucide-react"

const metrics = [
  "Coste por tarea completada",
  "Coste por resultado útil o entrega aceptada",
  "Tiempo necesario para completar cada trabajo",
  "Trabajo terminado por equipo",
  "Revisiones necesarias y retrabajo",
  "Calidad y consistencia de los resultados",
  "Incidencias de seguridad, privacidad o permisos",
]

const MeasurementSection = () => {
  return (
    <section id="medicion" className="py-20 bg-softPaper">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-graphiteCore mb-4">
            Lo que no se mide <span className="text-kaidevTeal">no se puede optimizar</span>
          </h2>
          <div className="w-20 h-1 bg-kaidevTeal mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-start">
          <div className="text-graphiteCore/80 space-y-4">
            <p>
              No basta con afirmar que un equipo trabaja mejor o consume menos. Establecemos una situación de referencia y observamos cómo cambian los resultados después de cada cambio.
            </p>
            <p>
              Los tokens son una métrica operativa, no un indicador de negocio. El objetivo no es consumir menos a cualquier precio, sino conseguir más trabajo útil con los recursos disponibles.
            </p>
            <div className="bg-warmWhite border-l-4 border-kaidevTeal p-6 font-heading text-lg text-graphiteCore">
              Separamos siempre ahorro obtenido, ahorro estimado, coste evitado y productividad materializada. Lo que no se puede demostrar, no se presenta como resultado.
            </div>
          </div>

          <div className="bg-warmWhite rounded-lg p-8 border border-graphiteCore/10">
            <ul className="space-y-4">
              {metrics.map((metric) => (
                <li key={metric} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-kaidevTeal shrink-0" />
                  <span className="text-graphiteCore/80">{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeasurementSection
