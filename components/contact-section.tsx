import SectionHeading from './section-heading';
import { BookAppointmentButton } from './ui/book-appointment-button';

const ContactSection = () => {
  return (
    <section
      id="contacto"
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
            accent
            title="Hablemos"
            className="mb-10 md:mb-14"
          />
        </div>

        <div
          data-reveal=""
          className="reveal-delay-1 mx-auto max-w-2xl space-y-4 text-center text-lg leading-relaxed text-pretty text-ink-inverse/85"
        >
          <p>
            Si tu empresa ya está pagando IA y no sabes si la está aprovechando,
            esa es la conversación. Quince minutos para entender tu contexto:
            herramientas, equipos, gasto y límites de uso.
          </p>
          <p>
            No es una consultoría gratuita. Es una conversación para determinar
            si existe un problema que podamos resolver y si tiene sentido
            avanzar. Si no lo hay, te lo diremos.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center">
          <BookAppointmentButton />
          <a
            href="mailto:info@kaidev.io"
            className="mt-2 inline-flex min-h-11 items-center rounded-sm px-2 text-sm text-ink-inverse/70 transition-colors hover:text-silentJade hover:underline focus-visible:ring-2 focus-visible:ring-focus-inverse focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark focus-visible:outline-hidden"
          >
            info@kaidev.io
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
