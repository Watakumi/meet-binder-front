import React from 'react';

export const ApplicationHeader: React.FC = () => {
  return (
    <header className="w-full bg-white px-6 pb-12 antialiased">
      <div className="mx-auto max-w-7xl">
        <nav className="relative z-50 h-24 select-none">
          <div className="container mx-auto flex h-24 flex-wrap items-center justify-between border-b border-gray-200 px-2 font-medium">
            <div className="flex h-full w-1/4 items-center pr-4">
              <a href="#" className="inline-block py-4">
                <span className="p-1 text-xl font-black text-gray-900">
                  MeetBinder
                </span>
              </a>
            </div>
            <div className="w-1/3">
              <div className="flex flex-row items-center justify-center text-center">
                <a
                  href="#"
                  className="mx-3 inline-block w-auto py-2 text-gray-700 hover:text-indigo-600"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="mx-3 inline-block w-auto py-2 text-gray-700 hover:text-indigo-600"
                >
                  Friends
                </a>
              </div>
            </div>
            <div className="flex w-1/4 justify-end">
              <div>
                <a
                  href="#"
                  className="mr-4 inline-block text-gray-700 hover:text-indigo-600"
                >
                  Settings
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
