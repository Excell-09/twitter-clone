import React, { ForwardRefExoticComponent, SVGProps } from 'react';

interface Props {
  Icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>
  title: string;
  access?:Boolean;
}
const SidebarLinks = ({ Icon, title,access=false }: Props) => {
  return (
    <div className={`flex items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 transition-all duration-100 group max-w-fit ${access ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
      <Icon className='h-6 w-6' />
      <p className='group-hover:text-twitter'>{title}</p>
    </div>
  );
};

export default SidebarLinks;
