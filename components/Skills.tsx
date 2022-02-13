const Skills = () => {
  return (
    <div className="my-8 px-3">
      <p className="text-3xl">Skills</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <a
          className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-slate-600 p-1 text-white duration-100 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
            <p className="text-xl font-semibold">NextJS</p>
            <p>I like NextJS as FrontendFramework.</p>
          </div>
        </a>

        <a
          className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-slate-600 p-1 text-white duration-100 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
            <p className="text-xl font-semibold">TypeScript</p>
            <p>I am currently learning languages.</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Skills;
