import * as React from "react"
import { CalendarCheck } from "lucide-react"

export const BookAppointmentButton = () => {
  return (
    <a
      href="https://cal.com/kaidev/45min-strategy-call"
      target="_blank"
      className="no-underline inline-flex items-center justify-center px-6 py-5
      bg-kaidevTeal text-left text-warmWhite rounded-md font-medium transition-all
      hover:bg-kaidevTeal/90 focus:outline-none focus:ring-2 focus:ring-kaidevTeal
      focus:ring-offset-2 focus:ring-offset-heroColor max-w-lg"
    >
      <div className="flex flex-col gap-2">
        <div className="flex font-bold inline-block align-middle gap-2">
          <CalendarCheck className="h-6 w-6" />
          Schedule 45-Min Alignment Call
        </div>
        <div className="text-sm/4">
          This is a complimentary, zero-pressure conversation with our senior strategists.
        </div>
      </div>
    </a>
  );
};

