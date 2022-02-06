import Image from 'next/image';
import React from 'react';

export const GithubItem: React.FC = () => {
  return (
    <div className="flex h-24 w-72 items-center rounded-xl shadow-lg">
      <div className="ml-4 h-16 w-16">
        <Image
          src="/images/github.png"
          width={64}
          height={64}
          alt="Github"
        ></Image>
      </div>
      <div className="ml-4 w-auto text-xl">
        <a href="#">Your Github Id</a>
      </div>
    </div>
  );
};
