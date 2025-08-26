import React from 'react';

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
