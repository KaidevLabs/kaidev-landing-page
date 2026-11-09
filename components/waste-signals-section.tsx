import { Gauge, Copy, TrendingUp, Shuffle, BarChart3, AlarmClock } from "lucide-react"

const signals = [
  {
    title: "Límites alcanzados",
    text: "A mitad de semana el equipo ya agotó su capacidad y la conversación pasa a comprar más planes.",
    icon: Gauge,
  },
  {
    title: "Herramientas duplicadas",
    text: "Cada equipo resolvió lo mismo por su cuenta: suscripciones solapadas y flujos de trabajo que nadie comparte.",
    icon: Copy,
  },
  {
    title: "Consumo creciente sin más entregas",
    text: "El gasto sube cada mes, pero la capacidad de entrega no acompaña.",
    icon: TrendingUp,
  },
  {
    title: "Resultados inconsistentes",
    text: "Cada persona usa la IA a su manera. La calidad depende de quién ejecuta y de cómo le haya ido ese día.",
    icon: Shuffle,
  },
  {
    title: "Sin métricas",
    text: "Nadie sabe cuánto cuesta una tarea terminada ni cuánto se está yendo en trabajo que se repite.",
    icon: BarChart3,
  },
]

const WasteSignalsSection = () => {
  return (
    <section id="senales" className="py-20 bg-softPaper">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-graphiteCore mb-4">
            Señales de que estás pagando <span className="text-kaidevTeal">más de lo que aprovechas</span>
          </h2>
          <p className="text-lg text-graphiteCore/80 max-w-2xl mx-auto">
            No hace falta un informe para reconocer los síntomas.
          </p>
          <div className="w-20 h-1 bg-kaidevTeal mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {signals.map((signal) => {
            const Icon = signal.icon
            return (
              <div key={signal.title} className="bg-warmWhite rounded-lg p-8 border border-graphiteCore/10">
                <Icon className="h-6 w-6 text-kaidevTeal mb-4" />
                <h3 className="font-heading text-xl text-graphiteCore mb-3">{signal.title}</h3>
                <p className="text-graphiteCore/80">{signal.text}</p>
              </div>
            )
          })}

          <div className="bg-heroColor text-warmWhite rounded-lg p-8 border-0">
            <AlarmClock className="h-6 w-6 text-kaidevTeal mb-4" />
            <h3 className="font-heading text-xl text-warmWhite mb-3">¿Miércoles y ya sin capacidad?</h3>
            <p className="text-warmWhite/80">
              Antes de ampliar el gasto, conviene saber qué está consumiendo esa capacidad y qué resultados está produciendo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WasteSignalsSection
