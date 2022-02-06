import { PrimaryButton } from '../components/PrimaryButton';

export const HeroContent = () => {
  return (
    <div className="container mx-auto max-w-lg px-4 py-32 text-left md:max-w-none md:text-center">
      <h1 className="text-left text-5xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none md:text-center md:text-6xl lg:text-6xl">
        <span className="inline md:block">出会いを集める</span>{' '}
        <span className="relative mt-2 bg-gradient-to-br from-indigo-600 to-indigo-500 bg-clip-text text-transparent md:inline-block">
          Let&apos;s Meet and Bind!
        </span>
      </h1>
      <div className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">
        まずはあなたについて教えてください。
        <br />
        最初の出会いが待っています。
      </div>
      <div className="mt-12 flex flex-col items-center text-center">
        <span className="relative inline-flex w-full md:w-auto">
          <PrimaryButton>Sign Up</PrimaryButton>
        </span>
        <a href="#" className="mt-3 text-sm text-indigo-500">
          Sign In
        </a>
      </div>
    </div>
  );
};
