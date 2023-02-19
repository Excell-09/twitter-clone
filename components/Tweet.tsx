import React,{useState,useEffect, FormEvent} from 'react'
import { Comment, CommentBody, Tweet } from '../typings'
import TimeAgo from 'react-timeago'
import { ChatBubbleLeftIcon,HeartIcon,ArrowsRightLeftIcon,ArrowUpTrayIcon  } from '@heroicons/react/24/outline'
import { fetchComments } from '../utils/fetchComments'
import { useSession } from 'next-auth/react'
import { toast } from 'react-hot-toast'
import Loading from './Loading'

interface Props {
  tweet:Tweet
}

const Tweet = ({tweet}:Props) => {

  const [comments,setComments] = useState<Comment[]>([])
  const [commentBoxVisisble,setCommentBoxVisible] = useState<boolean>(false)
  const [input,setInput] = useState<string>('')
  const [loading,setLoading] = useState<boolean>(false)
  const {data:session} = useSession()
  
  const refreshComments = async () => {
    const comments : Comment[] = await fetchComments(tweet._id)
    setComments(comments);
  }

  useEffect(() => {
    refreshComments()
  }, [])

  const handleSubmit = async (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setLoading(true)
    const commentInfo:CommentBody = {
      comment:input,
      tweetId:tweet._id,
      username:session?.user?.name || 'unknown',
      profileImg:session?.user?.image || 'http://links.papareact.com/gll'
  }
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/addComments`,{
    method:'POST',
    body:JSON.stringify(commentInfo)
})

const json = await result.json()

refreshComments()

toast('comment has been sent!!')
setInput('')
setLoading(false)

    
return json
  }  

  return (
    <div className='flex flex-col space-x-3 border-y p-5 border-gray-100'>

      <div className='flex space-x-3'>

        <img className='h-10 w-10 rounded-full object-cover aspect-square' src={tweet.profileImg} alt={tweet.username}/>

        <div>
          <div className='flex items-center space-x-1'>
            <p className='mr-1 font-bold'>{tweet.username}</p>
            <p className='hidden text-sm text-gray-500 sm:inline'>@{tweet.username.replace(/\s+/g, '').toLowerCase()} &#8226; </p>

            <TimeAgo date={tweet._createdAt} className='text-sm text-gray-500'/>
          </div>
          <p className='font-normal pt-1'>{tweet.text}</p>

          {tweet.image && (<img src={tweet.image} alt='' className='m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm'/>)}
        </div>
      </div>

      <div className='flex justify-between mt-5'>
        <div onClick={()=> session && setCommentBoxVisible(!commentBoxVisisble)} className='flex cursor-pointer items-center space-x-3 text-gray-500'>
          <ChatBubbleLeftIcon  className='h-5 w-5'/>
          {comments.length > 0 && (
          <p>{comments.length}</p>
          )}
        </div>
        <div className='flex cursor-pointer items-center space-x-3 text-gray-500'>
        <ArrowsRightLeftIcon className='h-5 w-5'/>
        </div>
        <div className='flex cursor-pointer items-center space-x-3 text-gray-500'>
        <HeartIcon className='h-5 w-5'/>
        </div>
        <div className='flex cursor-pointer items-center space-x-3 text-gray-500'>
        <ArrowUpTrayIcon className='h-5 w-5'/>
        </div>
      </div>

      {commentBoxVisisble && (
        <form onSubmit={handleSubmit} className='mt-3 flex space-x-3'>
          <input className='flex-1 rounded-lg bg-gray-100 p-2 outline-none' placeholder='Write Your Comment...' type='text' value={input} onChange={(e)=> setInput(e.target.value)}/>
          <button disabled={!input || loading} type='submit' className='text-twitter disabled:text-gray-200 relative flex justify-center items-center disabled:cursor-not-allowed'>
            <p className={`${loading && ' invisible'}`}>Post</p>
            <Loading width='5' height='5' isLoading={loading} dark/>
          </button>
        </form>
      )}


      {comments?.length > 0 && (
        <div className='my-2 mt-5 max-h-44 space-y-5 overflow-y-hidden border-t border-gray-100 p-5'>
          {comments.map(item => (
            <div key={item._id} className='relative flex space-x-2'>

              <hr className='absolute left-5 top-8 h-7 border-x border-twitter/30'/>
              <img src={item.profileImg} alt={item.username} className="h-7 w-7 object-cover aspect-square rounded-full"/>

             <div >
              <div className='flex items-center space-x-1 flex-wrap'>
                <p className='font-bold mr-1'>{item.username}</p>
                <p className='hidden text-sm text-gray-500 lg:inline'>@{item.username.replace(/\s+/g, '').toLowerCase()} &#8226; </p>
              <TimeAgo date={item._createdAt}
              className="text-sm text-gray-500"/>
              </div>
             <p className=' whitespace-nowrap'>{item.comment}</p>
             </div>
             </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Tweet