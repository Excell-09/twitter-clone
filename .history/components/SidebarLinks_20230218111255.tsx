import React, { SVGProps } from 'react';

interface Props {
  Icon: (props: SVGProps<S) => {};
  title: string;
}
const SidebarLinks = ({ Icon, title }: Props) => {
  return (
    <div>
      <Icon />
      <p>{title}</p>
    </div>
  );
};

export default SidebarLinks;
