import * as React from "react"
import { CalendarCheck } from "lucide-react"

export const BookAppointmentButton = () => {
  return (
    <a
      href="https://calendar.app.google/KxVJzBUsoci682V16"
      target="_blank"
      className="no-underline inline-flex items-center justify-center px-6 py-5
      bg-action text-left text-on-action rounded-md font-medium transition-all
      hover:bg-action/90 focus-visible:outline-hidden
      focus-visible:shadow-[0_0_0_2px_var(--color-on-action),0_0_0_4px_var(--color-focus)] max-w-lg"
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
