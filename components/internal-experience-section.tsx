const InternalExperienceSection = () => {
  return (
    <section id="experiencia" className="py-20 bg-linear-to-br from-kaidevGradientFrom to-kaidevGradientTo text-warmWhite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl mb-4">
            Lo aplicamos en casa <span className="text-warmWhite">antes de venderlo</span>
          </h2>
          <div className="w-20 h-1 bg-warmWhite mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div className="space-y-4 text-warmWhite/90">
            <p>
              Esta línea no nace solo de observar el mercado. Nace de nuestro propio trabajo. Llevamos tiempo optimizando cómo usamos la IA en Kaidev: consumo de tokens, gestión del contexto, skills reutilizables, integraciones, agentes, revisión de resultados, seguridad y control de costes.
            </p>
            <p>
              Cada prueba se documenta y se evalúa durante un mínimo de 30 sesiones. Comparamos consumo, trabajo completado y calidad: reducir tokens entregando peores resultados no sería una optimización.
            </p>
            <p>
              Y no confundimos tres cosas: reducir el consumo, reducir la factura y aumentar la productividad. Con licencias fijas, optimizar no baja la factura: hace que el mismo equipo complete más trabajo con la misma capacidad. Con consumo variable, además puede haber ahorro directo.
            </p>
            <p className="font-medium text-warmWhite">
              Por eso no prometemos un porcentaje de ahorro. Buscamos que el valor se pueda demostrar.
            </p>
          </div>

          <div className="bg-warmWhite/10 rounded-lg p-10 text-center backdrop-blur-sm">
            <p className="font-heading font-bold text-5xl md:text-6xl">~40 %</p>
            <p className="mt-4">
              de reducción de consumo de tokens en flujos internos que hemos optimizado
            </p>
            <p className="text-sm text-warmWhite/70 mt-4">
              Evidencia obtenida en nuestros propios procesos. No es una promesa de ahorro para cualquier cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InternalExperienceSection
