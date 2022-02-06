import React from 'react';
import { GithubItem } from './GithubItem';
import { TwitterItem } from './TwitterItem';
export const ProfileCard: React.FC = () => {
  return (
    <div className="mt-20 flex h-96 w-full justify-center">
      <div className="h-full w-3/4 rounded-xl border-t-2 border-solid border-sky-700 shadow-lg">
        <GithubItem />
        <TwitterItem />
      </div>
    </div>
  );
};
