import React from 'react';
import DashboardCompTag from './DashboardCompTag';

const DashboardComp = ({ obj }: any) => {
  return (
    <div className='flex-col w-full h-full bg-gray-500 p-6 rounded-lg'>
      <div className='flex mb-4 items-center'>
        <div className='rounded-full bg-white w-8 h-8 mr-2' />
        <div className='flex-col'>
          <h1>{obj.title}</h1>
          <h4>{obj.subTitle}</h4>
        </div>
      </div>
      <div className='flex-col mb-4'>
        <h1>{obj.value}</h1>
        <h4>{obj.subValue}</h4>
      </div>
      <div className='flex w-full justify-between flex-wrap mb-4'>
        {obj.tags.map((obj: any) => (
          <DashboardCompTag title={obj.tagTitle} val={obj.tagVal} />
        ))}
      </div>
    </div>
  );
};

export default DashboardComp;
