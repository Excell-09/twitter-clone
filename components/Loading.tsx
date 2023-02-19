import React from 'react';
interface Props{
  width:string
  height:string
  isLoading:boolean
}

const Loading = ({width,height,isLoading}:Props) => {
  return <div className={`${!isLoading && 'hidden'} absolute h-${height} w-${width} bg-gray-100 rounded-full bg-opacity-25 border-4 border-t-white  border-l-white border-transparent animate-spin`}></div>;
};

export default Loading;