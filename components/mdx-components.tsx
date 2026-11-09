import React from 'react';
import { BookAppointmentButton } from './ui/book-appointment-button';

interface CustomComponentProps {
  text: string;
}

export const CustomComponent: React.FC<CustomComponentProps> = ({ text }) => {
  return (
    <div className="my-4 rounded-md border border-blue-300 bg-blue-100 p-4 text-blue-800 dark:border-blue-700 dark:bg-blue-900 dark:text-blue-200">
      <p className="font-semibold">Hello from a Custom Component!</p>
      <p>{text}</p>
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
