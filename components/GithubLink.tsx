import Link from 'next/link';
import React from 'react';
import { AiOutlineGithub } from './Icon';

const GithubLink: React.FC = () => {
  return (
    <Link href="https://github.com/Watakumi" passHref>
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github"
        className=""
      >
        <AiOutlineGithub />
      </a>
    </Link>
  );
};

export default GithubLink;
