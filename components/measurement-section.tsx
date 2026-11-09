import { CheckCircle } from 'lucide-react';

const metrics = [
  'Coste por tarea completada',
  'Coste por resultado útil o entrega aceptada',
  'Tiempo necesario para completar cada trabajo',
  'Trabajo terminado por equipo',
  'Revisiones necesarias y retrabajo',
  'Calidad y consistencia de los resultados',
  'Incidencias de seguridad, privacidad o permisos',
];

const MeasurementSection = () => {
  return (
    <section id="medicion" className="bg-softPaper py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-heading text-3xl font-semibold text-graphiteCore sm:text-4xl md:text-5xl">
            Lo que no se mide{' '}
            <span className="text-kaidevTeal">no se puede optimizar</span>
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 bg-kaidevTeal"></div>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div className="space-y-4 text-graphiteCore/80">
            <p>
              No basta con afirmar que un equipo trabaja mejor o consume menos.
              Establecemos una situación de referencia y observamos cómo cambian
              los resultados después de cada cambio.
            </p>
            <p>
              Los tokens son una métrica operativa, no un indicador de negocio.
              El objetivo no es consumir menos a cualquier precio, sino
              conseguir más trabajo útil con los recursos disponibles.
            </p>
            <div className="border-l-4 border-kaidevTeal bg-warmWhite p-6 font-heading text-lg text-graphiteCore">
              Separamos siempre ahorro obtenido, ahorro estimado, coste evitado
              y productividad materializada. Lo que no se puede demostrar, no se
              presenta como resultado.
            </div>
          </div>

          <div className="rounded-lg border border-graphiteCore/10 bg-warmWhite p-8">
            <ul className="space-y-4">
              {metrics.map((metric) => (
                <li key={metric} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-kaidevTeal" />
                  <span className="text-graphiteCore/80">{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeasurementSection;
