import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../layouts/Header';
import { HeroContent } from '../layouts/HeroContent';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MeetBinder</title>
        <meta name="description" content="出会いが集まり広がる。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroContent />
    </div>
  );
};

export default Home;
