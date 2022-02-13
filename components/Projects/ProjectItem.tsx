type Props = {
  name: string;
};

export const ProjectItem: React.FC<Props> = ({ name }) => {
  return (
    <a
      className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-slate-600 p-1 text-white duration-100 hover:scale-105"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
        <p className="text-xl font-semibold">{name}</p>
        <p>I like NextJS as FrontendFramework.</p>
      </div>
    </a>
  );
};
