import { BookAppointmentButton } from './ui/book-appointment-button';

const ContactSection = () => {
  return (
    <section id="contacto" className="bg-graphiteCore py-20 text-warmWhite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-heading mb-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
            Hablemos
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 bg-kaidevTeal"></div>
        </div>

        <div className="text-center">
          <div className="mx-auto mb-8 max-w-3xl space-y-4 text-warmWhite/80">
            <p>
              Si tu empresa ya está pagando IA y no sabes si la está
              aprovechando, esa es la conversación. Quince minutos para entender
              tu contexto: herramientas, equipos, gasto y límites de uso.
            </p>
            <p>
              No es una consultoría gratuita. Es una conversación para
              determinar si existe un problema que podamos resolver y si tiene
              sentido avanzar. Si no lo hay, te lo diremos.
            </p>
          </div>
          <BookAppointmentButton />
          <div className="mt-6 text-sm">
            <a
              href="mailto:info@kaidev.io"
              className="text-warmWhite/70 transition-colors hover:text-kaidevTeal"
            >
              info@kaidev.io
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
