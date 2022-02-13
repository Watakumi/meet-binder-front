import React from 'react';
import { About } from '../../components/About';
import Skills from '../../components/Skills';
const Mypage: React.FunctionComponent = () => {
  return (
    <div className="container mx-auto">
      <About />
      <Skills />
    </div>
  );
};

export default Mypage;
