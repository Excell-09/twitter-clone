import React, { useState } from 'react'
import {CalendarDaysIcon,FaceSmileIcon,MapPinIcon,MagnifyingGlassCircleIcon,PhotoIcon} from '@heroicons/react/24/outline'

const TweetBox = () => {
    const [input,setInput] = useState<string>('')




  return (
    <div className='flex space-x-2 p-5 '>
        <img src='http://links.papareact.com/gll' alt='profile' className='h-12 w-12 rounded-full object-cover aspect-square align-top'/>

        <div className=' flex flex-1 items-center pl-2'>
            <form className='flex flex-1 flex-col'>
                <textarea placeholder="What's Happening" className='w-full text-xl outline-none placeholder:text-xl bg-transparent resize-none' rows={3} value={input} onChange={(e)=> setInput(e.target.value)}/>
                <div className='flex items-center justify-between'>

                <div className='flex space-x-2 text-twitter'>
                    <PhotoIcon className='h-5 w-5 transition-transform duration-150 ease-out cursor-pointer hover:scale-150'/>
                    <FaceSmileIcon className='h-5 w-5'/>
                    <MagnifyingGlassCircleIcon className='h-5 w-5'/>
                    <CalendarDaysIcon className='h-5 w-5'/>
                    <MapPinIcon className='h-5 w-5'/>
                </div>
                    <button disabled={!input} className='bg-twitter rounded-full text-white font-bold px-5 py-2 disabled:opacity-40 disabled:cursor-not-allowed'>Tweet</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TweetBox