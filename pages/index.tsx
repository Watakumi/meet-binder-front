import type { NextPage } from 'next';
import Head from 'next/head';
import { Footer } from '../layouts/Footer';
import { Header } from '../layouts/Header';
import { HeroContent } from '../layouts/HeroContent';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MeetBinder</title>
        <meta name="description" content="出会いを集める。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroContent />
      <Footer />
    </div>
  );
};

export default Home;
