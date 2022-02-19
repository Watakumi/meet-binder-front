import { useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type markdownType = string | undefined;

const MarkdownForm = () => {
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [markdown, setMarkdown] = useState<markdownType>('');
  const handleChange = () => {
    setMarkdown(markdownRef.current?.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label>Detail:</label>
      <div className="border-md rounded-md border-[0.1px]">
        <ul className="mt-2 flex flex-row gap-2 px-2" role="tablist">
          <li>
            <a className="px-4 py-2 hover:bg-gray-100">Write</a>
          </li>
          <li>
            <a className="px-4 py-2 hover:bg-gray-100" onClick={handleChange}>
              Preview
            </a>
          </li>
        </ul>
        <textarea
          ref={markdownRef}
          className="mt-2 h-48 w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
        />
        <div id="preview-1">
          {markdown && (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdown}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarkdownForm;
