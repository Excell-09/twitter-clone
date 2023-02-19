import React, { Dispatch, SetStateAction, useState,MouseEvent, ChangeEvent } from 'react'
import {CalendarDaysIcon,FaceSmileIcon,MapPinIcon,MagnifyingGlassCircleIcon,PhotoIcon,XCircleIcon} from '@heroicons/react/24/outline'
import {useSession} from 'next-auth/react'
import { Tweet, TweetBody } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'
import {toast} from 'react-hot-toast'
import Loading from './Loading'
import {uploadString,getDownloadURL,ref} from 'firebase/storage'
import {storage} from '../firebase.config'

interface Props {
    setTweets:Dispatch<SetStateAction<Tweet[]>>
}

const TweetBox = ({setTweets}: Props) => {
    const [loading,setLoading] = useState<boolean>(false)
    const [input,setInput] = useState<string>('')
    const [file,setFile] = useState<string | null >(null)
    const {data:session} = useSession()

    const addImage = (e:ChangeEvent<HTMLInputElement>)=>{
        const reader = new FileReader()

        if(e?.target?.files && e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
            setFile(readerEvent?.target?.result as string | null)        }

        
        e.target.value = ''
    }

    const handlePost = async (e:MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) =>{
        e.preventDefault()

        if(loading) return

        setLoading(true)

        const tweetInfo:TweetBody = {
            text:input,
            username:session?.user?.name || 'Unknown User',
            profileImg:session?.user?.image || 'http://links.papareact.com/gll',
            image: file
        }

        if(file){
            const storageRef = ref(storage, `images/${Date.now()}`);
            await uploadString(storageRef, file, 'data_url');
            const imageUrl = await getDownloadURL(storageRef);
            tweetInfo.image = imageUrl;
        }

        const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/addTweet`,{
            method:'POST',
            body:JSON.stringify(tweetInfo)
        })

        const json = await result.json()

        const newTweets:Tweet[] =  await fetchTweets()
        setTweets(newTweets)

        toast('Tweet Posted!!')

        
        setFile(null)
        setInput('')
        setLoading(false)

        return json
    }

  return (
    <div className='flex space-x-2 p-5 '>
        <img src={session?.user?.image || 'http://links.papareact.com/gll'} alt='profile' className='h-12 w-12 rounded-full object-cover aspect-square align-top'/>

        <div className=' flex flex-1 items-center pl-2'>
            <form className='flex flex-1 flex-col'>
                <textarea placeholder="What's Happening" className='w-full text-xl outline-none placeholder:text-xl bg-transparent resize-none' rows={file ? 2 : 3} value={input} onChange={(e)=> setInput(e.target.value)}/>

                {file && (
                    <div className='relative mb-4'>
                <div
                className='absolute w-8 h-8 bg-slate-900 hover:[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer'
                onClick={() => setFile(null)}>
                <XCircleIcon className='text-white h-5' />
              </div>
              <img
                src={file}
                alt='image'
                className='rounded-2xl max-h-50 w-full object-cover'
              />
            </div>
          )}
                <div className='flex items-center justify-between flex-wrap'>

                <div className='flex space-x-2 text-twitter'>
                    <div>
                    <label htmlFor='imageFile'>
                    <PhotoIcon className='h-6 w-6 transition-transform duration-150 ease-out cursor-pointer hover:scale-125'/>
                    </label>
                    <input type='file' className='hidden' id='imageFile' onChange={addImage}/>

                    </div>
                    <FaceSmileIcon className='h-6 w-6 cursor-not-allowed'/>
                    <MagnifyingGlassCircleIcon className='h-6 w-6 cursor-not-allowed'/>
                    <CalendarDaysIcon className='h-6 w-6 cursor-not-allowed'/>
                </div>
                    <button onClick={handlePost} disabled={!input || !session?.user || loading} className='bg-twitter relative rounded-full text-white font-bold px-5 py-2 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center ml-5 justify-self-start self-start mt-3'>
                        <Loading isLoading={loading} width='6' height='6'/>
                        <p className={`relative ${loading && 'invisible'}`}>Tweet</p>
                    </button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default TweetBox