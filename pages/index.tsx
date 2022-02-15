import type { NextPage } from 'next';
import { Footer } from '../layouts/Footer';
import { Header } from '../components/Header/Header';
import { HeroContent } from '../layouts/HeroContent';

const Home: NextPage = () => {
  return (
    <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <Header />
      <HeroContent />
      <Footer />
    </div>
  );
};

export default Home;
