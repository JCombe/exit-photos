import React from 'react';

const DashboardCompTag = ({ title }: any, { val }: any) => {
  return (
    <div className='flex-col w-min p-2 bg-green-300 text-white rounded-lg'>
      <h4>{title}</h4>
      <h2>Value: {val}</h2>
    </div>
  );
};

export default DashboardCompTag;
