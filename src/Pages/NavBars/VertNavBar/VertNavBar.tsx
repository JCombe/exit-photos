import React from 'react';
import { pageObj } from '../../../Data/PageObjects';
import { Link } from 'react-router-dom';

const VertNavBar = () => {
  return (
    <div className='pt-16 px-4 flex flex-col border-r-2 h-screen w-min items-center'>
      {pageObj.map((obj: any, idx: any) => (
        <Link to={obj.link}>
          <div
            className='m-6 text-gray-500 hover:text-opacity-50 cursor-pointer'
            key={idx}
          >
            {obj.svg}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VertNavBar;
