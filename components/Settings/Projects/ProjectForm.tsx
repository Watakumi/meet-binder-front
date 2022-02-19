import MarkdownForm from './MarkdownForm';

const ProjectForm = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="flex flex-row items-center justify-start gap-8">
        <div className="flex flex-row items-center gap-2">
          <label htmlFor="project-1">Name:</label>
          <input
            type="text"
            id="name-1"
            className="
              rounded-md
              border-transparent
              bg-gray-100
              focus:border-gray-500 focus:bg-white focus:ring-0
            "
          />
        </div>
        <div className="flex w-full flex-row items-center justify-start gap-2">
          <label htmlFor="url-1">URL:</label>
          <input
            type="text"
            id="url-1"
            className="
              w-full
              rounded-md
              border-transparent
              bg-gray-100
              focus:border-gray-500 focus:bg-white focus:ring-0
            "
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-4">
        <label htmlFor="summary-1">Summary:</label>
        <input
          type="text"
          id="summary-1"
          className="
          w-full
          rounded-md
          border-transparent
          bg-gray-100
          focus:border-gray-500 focus:bg-white focus:ring-0
        "
        />
      </div>
      <MarkdownForm />
    </div>
  );
};
export default ProjectForm;
