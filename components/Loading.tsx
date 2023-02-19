import React from 'react';
interface Props{
  width:string
  height:string
  isLoading:boolean
  dark?:boolean
}

const Loading = ({width,height,isLoading,dark=false}:Props) => {
  return <div className={`${!isLoading && 'hidden'} absolute h-${height} w-${width} bg-gray-100 rounded-full bg-opacity-25 border-4 border-t-${dark ? 'twitter' : 'white'} border-l-${dark ? 'twitter' : 'white'} border-transparent animate-spin`}></div>;
};

export default Loading;