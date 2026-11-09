import {
  Gauge,
  Copy,
  TrendingUp,
  Shuffle,
  BarChart3,
  AlarmClock,
} from 'lucide-react';

const signals = [
  {
    title: 'Límites alcanzados',
    text: 'A mitad de semana el equipo ya agotó su capacidad y la conversación pasa a comprar más planes.',
    icon: Gauge,
  },
  {
    title: 'Herramientas duplicadas',
    text: 'Cada equipo resolvió lo mismo por su cuenta: suscripciones solapadas y flujos de trabajo que nadie comparte.',
    icon: Copy,
  },
  {
    title: 'Consumo creciente sin más entregas',
    text: 'El gasto sube cada mes, pero la capacidad de entrega no acompaña.',
    icon: TrendingUp,
  },
  {
    title: 'Resultados inconsistentes',
    text: 'Cada persona usa la IA a su manera. La calidad depende de quién ejecuta y de cómo le haya ido ese día.',
    icon: Shuffle,
  },
  {
    title: 'Sin métricas',
    text: 'Nadie sabe cuánto cuesta una tarea terminada ni cuánto se está yendo en trabajo que se repite.',
    icon: BarChart3,
  },
];

const WasteSignalsSection = () => {
  return (
    <section id="senales" className="bg-softPaper py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-heading mb-4 text-3xl font-semibold text-graphiteCore sm:text-4xl md:text-5xl">
            Señales de que estás pagando{' '}
            <span className="text-kaidevTeal">más de lo que aprovechas</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-graphiteCore/80">
            No hace falta un informe para reconocer los síntomas.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 bg-kaidevTeal"></div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {signals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div
                key={signal.title}
                className="rounded-lg border border-graphiteCore/10 bg-warmWhite p-8"
              >
                <Icon className="mb-4 h-6 w-6 text-kaidevTeal" />
                <h3 className="font-heading mb-3 text-xl text-graphiteCore">
                  {signal.title}
                </h3>
                <p className="text-graphiteCore/80">{signal.text}</p>
              </div>
            );
          })}

          <div className="rounded-lg border-0 bg-heroColor p-8 text-warmWhite">
            <AlarmClock className="mb-4 h-6 w-6 text-kaidevTeal" />
            <h3 className="font-heading mb-3 text-xl text-warmWhite">
              ¿Miércoles y ya sin capacidad?
            </h3>
            <p className="text-warmWhite/80">
              Antes de ampliar el gasto, conviene saber qué está consumiendo esa
              capacidad y qué resultados está produciendo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WasteSignalsSection;
