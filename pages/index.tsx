import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Twitter CLone</title>
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>

      <h1>testing</h1>
    </div>
  );
};

export default Home;
