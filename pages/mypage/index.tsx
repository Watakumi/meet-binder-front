import { GetStaticProps } from 'next';
import React from 'react';
import { About } from '../../components/About/About';
import { Contact } from '../../components/Contact/Contact';
import { Header } from '../../components/Header/Header';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills';
import { getAllData } from '../../lib/getAllUserData';

type Project = {
  id: number;
  name: string;
  description: string;
  detail: {
    description: string;
  };
};

type Skill = {
  name: string;
  description: string;
};

type About = {
  name: string;
  company: string;
  bio: string;
};

type Props = {
  data: {
    user: {
      name: string;
      company: string;
      bio: string;
      skills: Skill[];
      interests: Skill[];
      projects: Project[];
      contact: {
        name: string;
        url: string;
      }[];
    };
  };
};

const Mypage: React.FunctionComponent<Props> = ({ data }) => {
  const { name, company, bio, skills, interests, projects, contacts } =
    data.user;

  return (
    <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <Header />
      <About name={name} company={company} bio={bio} />
      <Skills skills={skills} interests={interests} />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
};

export default Mypage;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllData();
  return {
    props: { data },
  };
};
