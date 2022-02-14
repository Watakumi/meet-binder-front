import Link from 'next/link';
import React from 'react';
import { AiOutlineGithub } from './Icon';

const GithubLink: React.FC<{ url: string }> = ({ url }) => {
  return (
    <Link href={url} passHref>
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github"
        className="rounded-lg border-2 border-zinc-900 bg-zinc-800 p-2 text-2xl text-white hover:border-white"
      >
        <AiOutlineGithub />
      </a>
    </Link>
  );
};

export default GithubLink;
