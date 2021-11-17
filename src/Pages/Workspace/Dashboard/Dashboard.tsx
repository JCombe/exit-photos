import React, { useEffect, useState } from 'react';
import { RandomUserData } from '../../../Data/RandomUser';

const Dashboard = () => {
  const [userData, setUserData] = useState<any>([]);

  const getAndSetUserData = async () => {
    const data = await RandomUserData;
    setUserData(data);
    console.log('user data:', data);
  };

  useEffect(() => {
    getAndSetUserData();
  }, []);

  return (
    <div className='mt-4'>
      <p className='text-2xl font-bold text-center my-2'>Diashow</p>

      <div className='flex flex-wrap bg-gray-100 p-6 rounded-md'>
        {userData.map((user: any, idx: number) => (
          <div
            key={idx}
            className='group w-40 h-40 m-2 bg-cover bg-center relative cursor-pointer '
            style={{ backgroundImage: `url(${user.picture.large})` }}
          >
            <div className='flex flex-col text-sm px-2 absolute  w-full  bottom-0 bg-white bg-opacity-40 backdrop-filter backdrop-blur-sm font-bold rounded-t-md group-hover:opacity-20 duration-300'>
              <p>Pax: {user.name.first}</p>
              <p>TDM: {user.name.last}</p>
              <p>Load nr.: {user.dob.age}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
