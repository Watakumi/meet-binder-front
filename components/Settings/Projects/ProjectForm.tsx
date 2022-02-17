import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
const ProjectForm = () => {
  const markdown = `A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
  | a | b |
  | - | - |`;

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
      <div className="flex flex-col items-start justify-center gap-4">
        <label htmlFor="detail-1">Detail:</label>
        <textarea
          id="detail-1"
          className="
          h-24
          w-full
          rounded-md
          border-transparent
          bg-gray-100
          focus:border-gray-500 focus:bg-white focus:ring-0
        "
        />
      </div>
      <div className="border-md rounded-md border-[0.1px]">
        <ul className="mt-2 flex flex-row gap-2 px-2" role="tablist">
          <li className="">
            <a href="" className="px-4 py-2 hover:bg-gray-100">
              Write
            </a>
          </li>
          <li className="">
            <a href="" className="px-4 py-2 hover:bg-gray-100">
              Preview
            </a>
          </li>
        </ul>
        <textarea
          className="
          mt-2
          h-48
          w-full
          rounded-md
          border-transparent
          bg-gray-100
          focus:border-gray-500 focus:bg-white focus:ring-0"
        />
        <div id="preview">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
export default ProjectForm;
