import { CSSProperties, useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import emoji from 'remark-emoji';

type markdownType = string | undefined;

const MarkdownForm = () => {
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [markdown, setMarkdown] = useState<markdownType>('');
  const [isPreviewed, setIsPreviewed] = useState(false);
  const activatePreview = () => {
    setIsPreviewed(true);
  };

  const deactivatePreview = () => {
    setIsPreviewed(false);
  };

  useEffect(() => {
    isPreviewed && setMarkdown(markdownRef.current?.value);
  }, [isPreviewed]);

  const formStyles: CSSProperties = {
    display: isPreviewed ? 'none' : 'block',
  };

  const previewStyles: CSSProperties = {
    display: isPreviewed ? 'block' : 'none',
  };

  const writeButtonStyles: CSSProperties = {
    borderBottom: isPreviewed ? 'none' : 'solid 2px rgb(107 114 128)',
  };

  const previewButtonStyles: CSSProperties = {
    borderBottom: isPreviewed ? 'solid 2px rgb(107 114 128)' : 'none',
  };

  return (
    <div className="flex flex-col gap-2">
      <label>Detail:</label>
      <div className="border-md rounded-md border-[0.1px]">
        <ul className="mt-2 flex flex-row gap-2 px-2" role="tablist">
          <li>
            <a
              className="px-4 py-2 hover:bg-gray-100"
              onClick={deactivatePreview}
              style={writeButtonStyles}
            >
              Write
            </a>
          </li>
          <li>
            <a
              className="px-4 py-2 hover:bg-gray-100"
              onClick={activatePreview}
              style={previewButtonStyles}
            >
              Preview
            </a>
          </li>
        </ul>
        <textarea
          ref={markdownRef}
          className="mt-4 h-48 w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
          style={formStyles}
        />
        <div
          id="preview-1"
          className="markdown mt-4 h-48 w-full rounded-md border-[1px] border-transparent px-3 py-2"
          style={previewStyles}
        >
          {markdown && (
            <ReactMarkdown remarkPlugins={[remarkGfm, emoji]}>
              {markdown}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarkdownForm;
