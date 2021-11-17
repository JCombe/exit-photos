import React from 'react';
import DashboardComp from './DashboardComp';

const Dashboard = () => {
  const dashCompArr = [
    {
      title: 'Weather',
      subtitle: "What's the weather?",
      value: '22°C',
      subValue: 'Partly Cloudy',
      tags: [
        { tagTitle: 'Pressure', tagVal: '800mb' },
        { tagTitle: 'Visibility', tagVal: '4.3 km' },
        { tagTitle: 'Humidity', tagVal: '87%' },
      ],
    },
    {
      title: 'Air Quality',
      subtitle: 'Main pollution: PM 2.5',
      value: '390',
      subValue: 'West Wind',
      tags: [
        { tagTitle: 'Wind speed', tagVal: '10 knots' },
        { tagTitle: 'Max. gust', tagVal: '16 knots' },
        { tagTitle: 'Wind direction', tagVal: 'North' },
      ],
    },
  ];

  return (
    <div className='flex-col w-full'>
      <div className='flex items-center mb-6'>
        <div className='bg-red-600 rounded-full w-16 h-16 mr-4' />
        <div className='w-1/4 '>
          <h1>Hello, UserName</h1>
        </div>
      </div>
      <div className='flex w-full'>
        {dashCompArr.map((dashCompObj: any, idx: any) => (
          <div className='w-1/2 mr-4' key={idx}>
            <DashboardComp obj={dashCompObj} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
