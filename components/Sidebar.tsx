import React from 'react';
import { BellIcon, HashtagIcon, BookmarkIcon, UserIcon, EnvelopeIcon,HomeIcon,EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { logo } from '../public/assets';
import SidebarLinks from './SidebarLinks';
import {useSession,signIn,signOut} from 'next-auth/react'

function Sidebar() {
  const {data:session} = useSession()

  return (
    <nav className='flex flex-col col-span-2 items-center px-4 md:items-start'>
      <Image
        src={logo}
        alt='logo'
        className='object-contain m-3'
        width={40}
        height={40}
      />
      <SidebarLinks Icon={HomeIcon} title='Home' access={true}/>
      <SidebarLinks Icon={HashtagIcon} title='Explore'/>
      <SidebarLinks Icon={BellIcon} title='Notifications'/>
      <SidebarLinks Icon={EnvelopeIcon} title='Messages'/>
      <SidebarLinks Icon={BookmarkIcon} title='Bookmarks'/>
      <SidebarLinks onClick={session ? signOut:signIn} Icon={UserIcon} title={session ? 'Sign Out' : "Sign In"} access={true} />
      <SidebarLinks Icon={EllipsisHorizontalCircleIcon} title='more' />
    </nav>
  );
}

export default Sidebar;
