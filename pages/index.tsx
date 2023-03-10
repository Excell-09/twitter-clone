import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Sidebar from './../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';
import { fetchTweets } from '../utils/fetchTweets';
import { Tweet } from '../typings';
import { Toaster } from 'react-hot-toast';
import SmallNav from '../components/SmallNav';

interface Props{
  tweets:Tweet[]
}

const Home = ({tweets}:Props ) => {

  return (
    <div className='lg:max-w-6xl mx-auto max-h-screen overflow-hidden'>
      <Head>
        <title>Twitter CLone</title>
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Toaster/>

      <main className='grid grid-cols-9'>
        <Sidebar />
        <SmallNav/>

        <Feed tweets={tweets}/>

        <Widgets/>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps:GetServerSideProps = async (context)=>{
  const tweets =  await fetchTweets()

  return {
    props:{
      tweets
    }
  }
}
