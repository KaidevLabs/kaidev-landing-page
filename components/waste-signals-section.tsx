import {
  Gauge,
  Copy,
  TrendingUp,
  Shuffle,
  BarChart3,
  AlarmClock,
} from 'lucide-react';
import SectionHeading from './section-heading';

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
    <section id="senales" className="texture-paper bg-canvas py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal="">
          <SectionHeading
            title={
              <>
                Señales de que estás pagando{' '}
                <span className="text-kaidevTeal">
                  más de lo que aprovechas
                </span>
              </>
            }
            description="No hace falta un informe para reconocer los síntomas."
            className="mb-10 md:mb-14"
          />
        </div>

        <div
          data-reveal=""
          className="reveal-delay-1 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {signals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div
                key={signal.title}
                className="rounded-xl border border-line bg-surface p-6 md:p-8"
              >
                <Icon className="mb-4 h-6 w-6 text-tealDeep" />
                <h3 className="mb-3 font-heading text-xl text-ink">
                  {signal.title}
                </h3>
                <p className="text-ink-muted">{signal.text}</p>
              </div>
            );
          })}

          <div className="rounded-xl border-0 bg-surface-dark p-6 text-ink-inverse md:p-8">
            <AlarmClock className="mb-4 h-6 w-6 text-silentJade" />
            <h3 className="mb-3 font-heading text-xl text-ink-inverse">
              ¿Miércoles y ya sin capacidad?
            </h3>
            <p className="text-ink-inverse/80">
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
