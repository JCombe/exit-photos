import React from 'react';

const HorizNavBar = () => {
  return (
    <div className='flex justify-between w-full mb-4'>
      <div>
        <p className='text-3xl '>Dashboard</p>
        <p className='text-xl text-gray-500'>Untertitle</p>
      </div>
      <input
        className='border-2 rounded-md p-2 outline-none h-10'
        type='text'
        placeholder='Search...'
      />
    </div>
  );
};

export default HorizNavBar;
