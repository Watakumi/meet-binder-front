import type { NextPage } from 'next';
import Head from 'next/head';
import { Footer } from '../layouts/Footer';
import { Header } from '../layouts/Header';
import { HeroContent } from '../layouts/HeroContent';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <HeroContent />
      <Footer />
    </div>
  );
};

export default Home;
