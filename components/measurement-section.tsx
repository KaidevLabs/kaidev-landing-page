import { CheckCircle } from 'lucide-react';
import SectionHeading from './section-heading';

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
    <section id="medicion" className="texture-paper bg-canvas py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div data-reveal="">
            <SectionHeading
              align="left"
              title={
                <>
                  Lo que no se mide{' '}
                  <span className="text-kaidevTeal">no se puede optimizar</span>
                </>
              }
            />

            <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-ink-muted">
              <p>
                No basta con afirmar que un equipo trabaja mejor o consume
                menos. Establecemos una situación de referencia y observamos
                cómo cambian los resultados después de cada cambio.
              </p>
              <p>
                Los tokens son una métrica operativa, no un indicador de
                negocio. El objetivo no es consumir menos a cualquier precio,
                sino conseguir más trabajo útil con los recursos disponibles.
              </p>
              <div className="texture-paper-warm border-l-4 border-kaidevTeal bg-surface-warm p-6 font-heading text-lg leading-snug text-ink md:p-8">
                Separamos siempre ahorro obtenido, ahorro estimado, coste
                evitado y productividad materializada. Lo que no se puede
                demostrar, no se presenta como resultado.
              </div>
            </div>
          </div>

          <div
            data-reveal=""
            className="reveal-delay-1 rounded-xl border border-line bg-surface p-6 md:p-8"
          >
            <ul className="space-y-4">
              {metrics.map((metric) => (
                <li key={metric} className="flex items-start gap-3">
                  <CheckCircle
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-tealDeep"
                  />
                  <span className="text-ink">{metric}</span>
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
