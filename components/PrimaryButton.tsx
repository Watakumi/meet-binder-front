import React from 'react';

type Props = {
  children?: React.ReactNode;
  text?: string;
};
export const PrimaryButton: React.FC<Props> = ({ text, children }) => {
  return (
    <a
      href="#"
      className="focus:outline-none inline-flex w-full items-center bg-indigo-600 px-6 py-3 text-sm font-medium leading-4 text-white hover:bg-indigo-500 focus:ring-0 focus:ring-indigo-600 focus:ring-offset-2 md:w-auto md:rounded-full md:px-3 md:focus:ring-2 lg:px-5"
    >
      {text ?? children}
    </a>
  );
};
