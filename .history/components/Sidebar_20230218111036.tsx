import React from 'react';
import { BellIcon, HashtagIcon, BookmarkIcon, CollectionIcon, DotsCircleHorizontalIcon, MailIcon, UserIcon, HomeIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { logo } from '../public/assets';
import SidebarLinks from './SidebarLinks';

function Sidebar() {
  return (
    <nav>
      <Image
        src={logo}
        alt='logo'
        className='object-contain'
        width={40}
        height={40}
      />
      <SidebarLinks Icon={HomeIcon}/>
    </nav>
  );
}

export default Sidebar;
