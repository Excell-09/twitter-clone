import React, { ForwardRefExoticComponent, SVGProps } from 'react';

interface Props {
  Icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>
  title: string;
  access?:boolean;
  onClick?:()=>{}
}
const SidebarLinks = ({ Icon, title,access=false, onClick }: Props) => {
  return (
    <div onClick={()=> onClick?.()} className={`flex items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 transition-all duration-100 group max-w-fit ${access ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
      <Icon className='h-6 w-6' />
      <p className='group-hover:text-twitter hidden md:inline-flex text-base font-medium lg:text-xl'>{title}</p>
    </div>
  );
};

export default SidebarLinks;
