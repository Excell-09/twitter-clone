import React,{useState} from 'react'
import { ArrowPathIcon} from '@heroicons/react/24/outline'
import TweetBox from './TweetBox'
import { Tweet } from '../typings'
import TweetComponent from './Tweet'
import { fetchTweets } from '../utils/fetchTweets'
import {toast} from 'react-hot-toast'

interface Props{
  tweets:Tweet[]
}

const Feed = ({tweets:tweetProps}:Props) => {

  const [tweets,setTweets] = useState<Tweet[]>(tweetProps)
  

  const handleRefresh = async() => {
    const toastLoading = toast.loading('Refreshing...')

    const tweets:Tweet[] = await fetchTweets()
    setTweets(tweets)

    toast.success('Feed Updated!',{
      id:toastLoading
    })
  }
  
  return (
    <div className='col-span-7 lg:col-span-5 border-x overflow-scroll max-h-screen scrollbar-hide'>

       <div className='flex items-center justify-between'>
        <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
        <ArrowPathIcon onClick={handleRefresh} className='h-8 w-8 cursor-pointer mr-5 mt-5 text-twitter transition-all duration-500 ease-out hover:rotate-180 active:rotate-180 active:scale-125'/>
        </div> 

        <div>
          <TweetBox setTweets={setTweets} />
        </div>

        <div>
          {tweets.map( item => (

          <TweetComponent key={item._id} tweet={item}/>
          ))}
        </div>
    </div>
  )
}

export default Feed