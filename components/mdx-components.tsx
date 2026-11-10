import React from 'react';
import { BookAppointmentButton } from './ui/book-appointment-button';

interface CustomComponentProps {
  text: string;
}

export const CustomComponent: React.FC<CustomComponentProps> = ({ text }) => {
  return (
    <div className="my-6 rounded-lg border border-line bg-surface-warm p-6 text-ink md:p-8">
      <p className="font-heading font-semibold">
        Hello from a Custom Component!
      </p>
      <p className="text-ink-muted">{text}</p>
    </div>
  );
};

export const BookAppointmentButtonMDX: React.FC = () => {
  return (
    <div className="my-12 grid w-full justify-center">
      <BookAppointmentButton />
    </div>
  );
};
