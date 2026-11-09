const InternalExperienceSection = () => {
  return (
    <section
      id="experiencia"
      className="bg-linear-to-br from-kaidevGradientFrom to-kaidevGradientTo py-20 text-warmWhite"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-heading mb-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
            Lo aplicamos en casa{' '}
            <span className="text-warmWhite">antes de venderlo</span>
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 bg-warmWhite"></div>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-4 text-warmWhite/90">
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
            <p className="font-medium text-warmWhite">
              Por eso no prometemos un porcentaje de ahorro. Buscamos que el
              valor se pueda demostrar.
            </p>
          </div>

          <div className="rounded-lg bg-warmWhite/10 p-10 text-center backdrop-blur-sm">
            <p className="font-heading text-5xl font-bold md:text-6xl">~40 %</p>
            <p className="mt-4">
              de reducción de consumo de tokens en flujos internos que hemos
              optimizado
            </p>
            <p className="mt-4 text-sm text-warmWhite/70">
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
