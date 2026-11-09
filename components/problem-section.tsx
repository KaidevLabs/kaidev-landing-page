const ProblemSection = () => {
  return (
    <section id="problema" className="bg-warmWhite py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-heading mb-4 text-3xl font-semibold text-graphiteCore sm:text-4xl md:text-5xl">
            Tu empresa ya tiene IA. El siguiente salto es{' '}
            <span className="text-kaidevTeal">hacerla rendir</span>.
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 bg-kaidevTeal"></div>
        </div>

        <div className="mx-auto max-w-3xl space-y-4 text-graphiteCore/80">
          <p>
            Comprar herramientas es solo el primer paso. Se contrata la
            licencia, se da acceso a los equipos y cada persona empieza a
            experimentar por su cuenta. En pocos meses hay herramientas
            duplicadas, integraciones nuevas, límites de uso y un gasto que
            nadie sabe atribuir.
          </p>
          <p>
            Para muchas organizaciones, la IA se ha convertido en un gasto
            operativo más. Como un portátil o una silla: pagarla no garantiza
            que se aproveche ni que mejore el rendimiento del equipo.
          </p>
          <p>
            La pregunta ya no es solo cuánto se gasta. Es qué trabajo útil se
            obtiene a cambio, qué equipos la aprovechan y cuáles no, qué consumo
            podría evitarse y si de verdad hacen falta más licencias, planes
            superiores o herramientas adicionales.
          </p>
        </div>

        <div className="font-heading mx-auto mt-10 max-w-3xl border-l-4 border-kaidevTeal bg-softPaper p-6 text-xl text-graphiteCore">
          Contratar herramientas de IA es sencillo. Convertir ese gasto en
          capacidad operativa medible exige ingeniería, gestión y criterio.
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
