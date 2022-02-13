import { useState } from 'react';
import { ProjectDetail } from './ProjectDetail';
import { ProjectItem } from './ProjectItem';

const Projects = () => {
  const [opendId, setOpendId] = useState(-1);

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
    {
      id: 5,
      name: 'NestJS',
      description: 'NestJS is the Best Framework.',
      detail: {
        description: 'This is Detail of ID: 5',
      },
    },
    {
      id: 6,
      name: 'TypeScript',
      description: 'TypeScript is the Best Language.',
      detail: {
        description: 'This is Detail of ID: 6',
      },
    },
    {
      id: 4,
      name: 'Rails',
      description: 'Rails is the Best FullStackFramework.',
      detail: {
        description: 'This is Detail of ID: 4',
      },
    },
  ];

  const project = projectItems.find((projectItem) => projectItem.id == opendId);

  return (
    <div className="my-8 px-3 font-sen">
      <p className="text-3xl font-bold">Projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        {projectItems.map((projectItem) => (
          <ProjectItem
            key={projectItem.id}
            name={projectItem.name}
            description={projectItem.description}
            onClick={() => setOpendId(projectItem.id)}
          />
        ))}
      </div>
      <div>
        {project && <ProjectDetail description={project.detail.description} />}
      </div>
    </div>
  );
};

export default Projects;
