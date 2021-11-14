export const HeroContent = () => {
  return (
    <div className="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
      <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-6xl">
        <span className="inline md:block">出会いを集める</span>{' '}
        <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block">
          Let&apos;s Meet and Bind!
        </span>
      </h1>
      <div className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">
        まずはあなたについて教えてください。
        <br />
        最初の出会いが待っています。
      </div>
      <div className="flex flex-col items-center mt-12 text-center">
        <span className="relative inline-flex w-full md:w-auto">
          <a
            href="#_"
            type="button"
            className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Sign Up
          </a>
        </span>
        <a href="#" className="mt-3 text-sm text-indigo-500">
          Sign In
        </a>
      </div>
    </div>
  );
};
