import { PrimaryButton } from '../components/PrimaryButton';

export const Header = () => {
  return (
    <section className="w-full bg-white px-6 pb-12 antialiased">
      <div className="mx-auto max-w-7xl">
        <nav
          className="relative z-50 h-24 select-none"
          x-data="{ showMenu: false }"
        >
          <div className="container relative mx-auto flex h-24 flex-wrap items-center justify-between overflow-hidden border-b border-gray-200 font-medium sm:px-4 md:overflow-visible md:px-2 lg:justify-center">
            <div className="flex h-full w-1/4 items-center justify-start pr-4">
              <a href="#_" className="inline-block py-4 md:py-0">
                <span className="p-1 text-xl font-black leading-none text-gray-900">
                  <span>MeetBinder</span>
                </span>
              </a>
            </div>
            <div className="top-0 left-0 hidden h-full w-full items-start bg-gray-900 bg-opacity-50 p-4 text-sm md:relative md:flex md:w-3/4 md:items-center md:bg-transparent md:p-0 lg:text-base">
              <div className="h-auto w-full flex-col overflow-hidden rounded-lg bg-white md:relative md:flex md:flex-row md:overflow-visible md:rounded-none md:bg-transparent">
                <div className="flex w-full flex-col items-start justify-center space-x-6 text-center md:mt-0 md:w-2/3 md:flex-row md:items-center lg:space-x-8">
                  <a
                    href="#_"
                    className="mx-0 ml-6 inline-block w-full py-2 text-left font-medium text-indigo-600 md:mx-2 md:ml-0 md:w-auto md:px-0 md:text-center lg:mx-3"
                  >
                    Home
                  </a>
                  <a
                    href="#_"
                    className="mx-0 inline-block w-full py-2 text-left font-medium text-gray-700 hover:text-indigo-600 md:mx-2 md:w-auto md:px-0 md:text-center lg:mx-3"
                  >
                    初めての方はこちら
                  </a>
                </div>
                <div className="flex w-full flex-col items-start justify-end pt-4 md:w-1/3 md:flex-row md:items-center md:py-0">
                  <a
                    href="#"
                    className="mr-0 w-full px-6 py-2 text-gray-700 md:mr-4 md:w-auto md:px-0 lg:mr-5 lg:pl-2"
                  >
                    Sign In
                  </a>
                  <PrimaryButton>SignUp</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};
