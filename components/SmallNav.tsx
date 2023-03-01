import React, { useState, ForwardRefExoticComponent, SVGProps, useEffect } from 'react';
import Link from 'next/link';
import { HashtagIcon, UserIcon, HomeIcon, EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';

interface INavLink {
  logo: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
  to?: string;
  label: string;
  click?: () => void;
}

const NAVLINK: INavLink[] = [
  { logo: HomeIcon, to: '/', label: 'Home' },
  { logo: HashtagIcon, to: '/explore', label: 'Explore' },
  { logo: UserIcon, label: 'Login', click: signIn },
  { logo: EllipsisHorizontalCircleIcon, to: '/more', label: 'More' },
];

const SmallNav = () => {
  const { data: session } = useSession();

  useEffect(() => {
    const updatedNavLinks: INavLink[] = [...NAVLINK];
    if (session) {
      updatedNavLinks[2].label = 'Logout';
      updatedNavLinks[2].click = signOut;
    }
    if (!session) {
      updatedNavLinks[2].label = 'Login';
      updatedNavLinks[2].click = signIn;
    }
    setNavLinks(updatedNavLinks);
    return;
  }, [session]);

  const [navlink, setNavLinks] = useState<INavLink[]>([]);
  const router = useRouter();

  return (
    <div className='md:hidden z-50 fixed bottom-0 left-0 w-full px-3 shadow bg-white py-2 border-t-2'>
      <div className='flex justify-around items-center'>
        {navlink.map((item: INavLink, i: number) => {
          return (
            <Link onClick={item.click} className={`font-semibold flex flex-col items-center ${router.pathname === item.to && 'text-blue-500'}`} key={i} href={item?.to ? item.to : ''}>
              <item.logo className='w-6 h-6' />
              <p>{item.label}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SmallNav;
