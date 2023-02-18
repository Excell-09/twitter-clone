import React from 'react';
import { BellIcon, HashtagIcon, BookmarkIcon, UserIcon, EnvelopeIcon,HomeIcon,EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { logo } from '../public/assets';
import SidebarLinks from './SidebarLinks';

function Sidebar() {
  return (
    <nav className='flex flex-col'>
      <Image
        src={logo}
        alt='logo'
        className='object-contain'
        width={40}
        height={40}
      />
      <SidebarLinks Icon={HomeIcon} title='Home' access={true}/>
      <SidebarLinks Icon={HashtagIcon} title='Explore'/>
      <SidebarLinks Icon={BellIcon} title='Notifications'/>
      <SidebarLinks Icon={EnvelopeIcon} title='Messages'/>
      <SidebarLinks Icon={BookmarkIcon} title='Bookmarks'/>
      <SidebarLinks Icon={UserIcon} title='Sign In' />
      <SidebarLinks Icon={EllipsisHorizontalCircleIcon} title='more' />
    </nav>
  );
}

export default Sidebar;
