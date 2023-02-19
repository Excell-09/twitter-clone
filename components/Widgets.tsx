import React from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const Widgets = () => {
  return (
    <div className='px-3 mt-2 col-span-2 hidden lg:inline'>
      <div className='flex items-center space-x-2 bg-gray-100 p-3 rounded-full my-2 mb-4'>
        <MagnifyingGlassIcon className='h-5 w-5 text-gray-400'/>
        <input className='bg-transparent flex-1 outline-none' type='text' placeholder='Search...'/>
      </div>

      <TwitterTimelineEmbed
      sourceType='profile'
      screenName={'Me'}
      options={{height:1000}}
      />
    </div>
  )
}

export default Widgets