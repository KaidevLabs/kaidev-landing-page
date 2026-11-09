import * as React from "react"
import { CalendarCheck } from "lucide-react"

export const BookAppointmentButton = () => {
  return (
    <a
      href="https://calendar.app.google/KxVJzBUsoci682V16"
      target="_blank"
      className="no-underline inline-flex items-center justify-center px-6 py-5
      bg-kaidevTeal text-left text-warmWhite rounded-md font-medium transition-all
      hover:bg-kaidevTeal/90 focus:outline-hidden focus:ring-2 focus:ring-kaidevTeal
      focus:ring-offset-2 focus:ring-offset-heroColor max-w-lg"
    >
      <div className="flex flex-col gap-2">
        <div className="flex font-bold gap-2">
          <CalendarCheck className="h-6 w-6" />
          Reservar llamada de 15 minutos
        </div>
        <div className="text-sm/4">
          Conversación gratuita de 15 minutos para ver si hay una oportunidad real.
        </div>
      </div>
    </a>
  );
};
