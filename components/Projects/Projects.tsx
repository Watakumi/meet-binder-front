import { ProjectItem } from './ProjectItem';

const Projects = () => {
  return (
    <div className="my-8 px-3 font-sen">
      <p className="text-3xl font-bold">Projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <ProjectItem name="NestJS" />
        <ProjectItem name="TypeScript" />
      </div>
    </div>
  );
};

export default Projects;
