import type { NextPage } from 'next';
import Head from 'next/head';
import Sidebar from './../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Twitter CLone</title>
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>

      <main>
        <Sidebar />

        <Feed/>

        <Widgets/>
      </main>
    </div>
  );
};

export default Home;
