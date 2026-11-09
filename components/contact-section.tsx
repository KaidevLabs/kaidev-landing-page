import {BookAppointmentButton} from "./ui/book-appointment-button"

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-graphiteCore text-warmWhite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl mb-4">
            Hablemos
          </h2>
          <div className="w-20 h-1 bg-kaidevTeal mx-auto mt-6"></div>
        </div>

        <div className="text-center">
          <div className="max-w-3xl mx-auto text-warmWhite/80 space-y-4 mb-8">
            <p>
              Si tu empresa ya está pagando IA y no sabes si la está aprovechando, esa es la conversación. Quince minutos para entender tu contexto: herramientas, equipos, gasto y límites de uso.
            </p>
            <p>
              No es una consultoría gratuita. Es una conversación para determinar si existe un problema que podamos resolver y si tiene sentido avanzar. Si no lo hay, te lo diremos.
            </p>
          </div>
          <BookAppointmentButton />
          <div className="mt-6 text-sm">
            <a href="mailto:info@kaidev.io" className="text-warmWhite/70 hover:text-kaidevTeal transition-colors">
              info@kaidev.io
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
