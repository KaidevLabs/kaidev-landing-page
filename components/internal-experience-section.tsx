import SectionHeading from './section-heading';

const InternalExperienceSection = () => {
  return (
    <section
      id="experiencia"
      className="relative isolate overflow-hidden bg-surface-dark py-16 text-ink-inverse md:py-24"
    >
      <div
        aria-hidden="true"
        className="kaidev-atmosphere kaidev-atmosphere--static"
      />
      <div aria-hidden="true" className="kaidev-grain" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal="">
          <SectionHeading
            tone="dark"
            title={
              <>
                Lo aplicamos en casa{' '}
                <span className="text-silentJade">antes de venderlo</span>
              </>
            }
            className="mb-10 md:mb-14"
          />
        </div>

        <div
          data-reveal=""
          className="reveal-delay-1 grid items-start gap-10 lg:grid-cols-2 lg:gap-12"
        >
          <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-ink-inverse/85">
            <p>
              Esta línea no nace solo de observar el mercado. Nace de nuestro
              propio trabajo. Llevamos tiempo optimizando cómo usamos la IA en
              Kaidev: consumo de tokens, gestión del contexto, skills
              reutilizables, integraciones, agentes, revisión de resultados,
              seguridad y control de costes.
            </p>
            <p>
              Cada prueba se documenta y se evalúa durante un mínimo de 30
              sesiones. Comparamos consumo, trabajo completado y calidad:
              reducir tokens entregando peores resultados no sería una
              optimización.
            </p>
            <p>
              Y no confundimos tres cosas: reducir el consumo, reducir la
              factura y aumentar la productividad. Con licencias fijas,
              optimizar no baja la factura: hace que el mismo equipo complete
              más trabajo con la misma capacidad. Con consumo variable, además
              puede haber ahorro directo.
            </p>
            <p className="font-medium text-ink-inverse">
              Por eso no prometemos un porcentaje de ahorro. Buscamos que el
              valor se pueda demostrar.
            </p>
          </div>

          <div className="rounded-xl border border-ink-inverse/15 bg-ink-inverse/5 p-6 md:p-10">
            <p className="font-heading text-5xl font-bold text-ink-inverse md:text-6xl">
              ~40 %
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-inverse">
              de reducción de consumo de tokens en flujos internos que hemos
              optimizado
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-inverse/80">
              Evidencia obtenida en nuestros propios procesos. No es una promesa
              de ahorro para cualquier cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalExperienceSection;
