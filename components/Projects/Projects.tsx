import { useState } from 'react';
import { ProjectDetail } from './ProjectDetail';
import { ProjectItem } from './ProjectItem';

type Project = {
  id: number;
  name: string;
  description: string;
  detail: {
    description: string;
  };
};

const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [opendId, setOpendId] = useState(-1);

  const targetProject = projects.find((project) => project.id == opendId);

  return (
    <div className="my-8 px-3 font-sen">
      <p className="text-3xl font-bold">Projects</p>
      <div className="my-8 grid items-center justify-items-center gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            name={project.name}
            description={project.description}
            onClick={() => setOpendId(project.id)}
          />
        ))}
      </div>
      <div>
        {targetProject && (
          <ProjectDetail
            description={targetProject.detail.description}
            onClick={() => setOpendId(-1)}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;
