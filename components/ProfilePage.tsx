import React from 'react';
import { Description } from './Description';
import { ProfileCard } from './ProfileCard';

export const ProfilePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <ProfileCard />
      <Description />
    </div>
  );
};
