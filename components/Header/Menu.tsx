export const Menu = () => {
  return (
    <div className="flex flex-row items-center justify-center text-center">
      <a
        href="#"
        className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-zinc-800 duration-100 hover:bg-zinc-800 hover:text-white"
      >
        Home
      </a>
      <a
        href="#"
        className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-zinc-800 duration-100 hover:bg-zinc-800 hover:text-white"
      >
        Friends
      </a>
    </div>
  );
};
