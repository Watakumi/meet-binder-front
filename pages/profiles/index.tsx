import { GetStaticProps } from 'next';
import * as React from 'react';
import Link from 'next/link';
import { ProfileCard } from '../../components/ProfileCard';

export type Profile = {
  id: number;
  githubUrl: string;
  twitterId: string;
  description: string;
};

const Profiles: React.FunctionComponent<{ profiles: Profile[] }> = ({
  profiles,
}) => {
  return (
    <>
      <ProfileCard />
      <div>
        <h1>Profiles</h1>
        <ul>
          {profiles.map((profile) => (
            <div key={profile.id}>
              <li>{profile.id}</li>
              <li>{profile.githubUrl}</li>
              <li>{profile.twitterId}</li>
              <li>{profile.description}</li>
            </div>
          ))}
        </ul>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/profiles/new">
            <a>New</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('http://localhost:3000/profiles');
  const profiles = await res.json();

  return {
    props: {
      profiles,
    },
  };
};
export default Profiles;
