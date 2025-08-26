import React from 'react';
import { CalendarCheck } from 'lucide-react';

interface CustomComponentProps {
  text: string;
}

export const CustomComponent: React.FC<CustomComponentProps> = ({ text }) => {
  return (
    <div className="p-4 my-4 bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-700 rounded-md text-blue-800 dark:text-blue-200">
      <p className="font-semibold">Hello from a Custom Component!</p>
      <p>{text}</p>
    </div>
  );
};

export const BookAppointmentButton: React.FC = () => {
  return (
    <div className="w-full grid justify-center my-12">
      <a
        href="https://cal.com/kaidev/60min"
        className="no-underline inline-flex items-center justify-center px-6 py-5
        bg-kaidevTeal text-warmWhite rounded-md font-medium transition-all
        hover:bg-kaidevTeal/90 focus:outline-none focus:ring-2 focus:ring-kaidevTeal
        focus:ring-offset-2 focus:ring-offset-heroColor max-w-lg"
      >
        <div className="flex flex-col">
          <div className="flex font-bold inline-block align-middle gap-2">
            <CalendarCheck className="h-6 w-6" />
            Book Your 60-Minute Strategy Call - 55€
          </div>
          <div className="text-sm">
            Fee deducted from your first invoice.
          </div>
        </div>
      </a>
    </div>
  );
};

