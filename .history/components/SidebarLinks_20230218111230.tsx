import React from 'react';

interface Props {
  Icon: (props: svg) => {};
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
