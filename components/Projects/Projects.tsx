import { ProjectItem } from './ProjectItem';

const Projects = () => {
  const projectItems = [
    {
      id: 1,
      name: 'NestJS',
      description: 'NestJS is the Best Framework.',
      detail: {
        description: 'This is Detail of ID: 1',
      },
    },
    {
      id: 2,
      name: 'TypeScript',
      description: 'TypeScript is the Best Language.',
      detail: {
        description: 'This is Detail of ID: 2',
      },
    },
    {
      id: 3,
      name: 'Rails',
      description: 'Rails is the Best FullStackFramework.',
      detail: {
        description: 'This is Detail of ID: 3',
      },
    },
  ];

  return (
    <div className="my-8 px-3 font-sen">
      <p className="text-3xl font-bold">Projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        {projectItems.map((projectItem) => (
          <ProjectItem
            key={projectItem.id}
            name={projectItem.name}
            description={projectItem.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
