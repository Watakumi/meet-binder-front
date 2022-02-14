import { GetStaticProps } from 'next';
import React from 'react';
import { About } from '../../components/About/About';
import { Contact } from '../../components/Contact/Contact';
import { Header } from '../../components/Header/Header';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills';
import { getAllData } from '../../lib/getAllUserData';
const Mypage: React.FunctionComponent<any> = ({ data }) => {
  const { name, company, bio, skills, interests, projects, contacts } =
    data.user;

  return (
    <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <Header />
      <About name={name} company={company} bio={bio} />
      <Skills skills={skills} interests={interests} />
      <Projects />
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
