import React from 'react';
import { About } from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills';
const Mypage: React.FunctionComponent = () => {
  return (
    <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Mypage;
