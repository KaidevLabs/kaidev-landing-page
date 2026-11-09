const ProblemSection = () => {
  return (
    <section id="problema" className="py-20 bg-warmWhite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-graphiteCore mb-4">
            Tu empresa ya tiene IA. El siguiente salto es <span className="text-kaidevTeal">hacerla rendir</span>.
          </h2>
          <div className="w-20 h-1 bg-kaidevTeal mx-auto mt-6"></div>
        </div>

        <div className="max-w-3xl mx-auto text-graphiteCore/80 space-y-4">
          <p>
            Comprar herramientas es solo el primer paso. Se contrata la licencia, se da acceso a los equipos y cada persona empieza a experimentar por su cuenta. En pocos meses hay herramientas duplicadas, integraciones nuevas, límites de uso y un gasto que nadie sabe atribuir.
          </p>
          <p>
            Para muchas organizaciones, la IA se ha convertido en un gasto operativo más. Como un portátil o una silla: pagarla no garantiza que se aproveche ni que mejore el rendimiento del equipo.
          </p>
          <p>
            La pregunta ya no es solo cuánto se gasta. Es qué trabajo útil se obtiene a cambio, qué equipos la aprovechan y cuáles no, qué consumo podría evitarse y si de verdad hacen falta más licencias, planes superiores o herramientas adicionales.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-10 bg-softPaper border-l-4 border-kaidevTeal p-6 font-heading text-xl text-graphiteCore">
          Contratar herramientas de IA es sencillo. Convertir ese gasto en capacidad operativa medible exige ingeniería, gestión y criterio.
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
