import React from 'react';

interface Props {
  Icon: () => {};
  title: string;
}
const SidebarLinks = ({ Icon, title }: Props) => {
  return (
    <div>
      <Icon />
      <p>{ }</p>
    </div>
  );
};

export default SidebarLinks;