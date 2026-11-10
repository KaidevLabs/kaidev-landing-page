import SectionHeading from './section-heading';

const ProblemSection = () => {
  return (
    <section id="problema" className="bg-canvas py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <SectionHeading
            align="left"
            title={
              <>
                Tu empresa ya tiene IA. El siguiente salto es{' '}
                <span className="text-kaidevTeal">hacerla rendir</span>.
              </>
            }
          />

          <div>
            <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-ink-muted">
              <p>
                Comprar herramientas es solo el primer paso. Se contrata la
                licencia, se da acceso a los equipos y cada persona empieza a
                experimentar por su cuenta. En pocos meses hay herramientas
                duplicadas, integraciones nuevas, límites de uso y un gasto que
                nadie sabe atribuir.
              </p>
              <p>
                Para muchas organizaciones, la IA se ha convertido en un gasto
                operativo más. Como un portátil o una silla: pagarla no
                garantiza que se aproveche ni que mejore el rendimiento del
                equipo.
              </p>
              <p>
                La pregunta ya no es solo cuánto se gasta. Es qué trabajo útil
                se obtiene a cambio, qué equipos la aprovechan y cuáles no, qué
                consumo podría evitarse y si de verdad hacen falta más
                licencias, planes superiores o herramientas adicionales.
              </p>
            </div>

            <div className="mt-10 max-w-2xl border-l-4 border-kaidevTeal bg-surface-warm p-6 font-heading text-xl leading-snug text-ink md:p-8 md:text-2xl">
              Contratar herramientas de IA es sencillo. Convertir ese gasto en
              capacidad operativa medible exige ingeniería, gestión y criterio.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
