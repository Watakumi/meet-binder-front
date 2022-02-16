import Link from 'next/link';

export const Settings = () => {
  return (
    <div>
      <Link href="/settings" passHref>
        <a className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-zinc-800 duration-100 hover:bg-zinc-800 hover:text-white">
          Settings
        </a>
      </Link>
    </div>
  );
};
