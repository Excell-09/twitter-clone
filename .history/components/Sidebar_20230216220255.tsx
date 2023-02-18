import React from 'react';
import { BellIcon, HashtagIcon, BookmarkIcon, CollectionIcon, DotsCircleHorizontalIcon, MailIcon, UserIcon, HomeIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { logo } from '../public/assets';

function Sidebar() {
  return <div>
    <Image src={logo} alt='logo' className='h-'/>

  </div>;
}

export default Sidebar;
