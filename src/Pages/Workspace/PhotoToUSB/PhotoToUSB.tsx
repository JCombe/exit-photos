import { fileStates } from '../../../Data/Constants';

const PhotoToUSB = () => {
  return (
    <div className='flex flex-col justify-between pb-4 pt-4 border-t-2 border-b-2'>
      <div className='flex flex-wrap justify-between mb-10'>
        <div className='flex flex-col'>
          <p className='text-2xl font-bold'>Mode</p>
          <div className='flex'>
            <button className='border-2 hover:bg-blue-50 px-4 mr-2 text-gray-700 rounded-md outline-none'>
              Run
            </button>
            <button className='border-2 hover:bg-blue-50 px-4 mr-2 text-gray-700 rounded-md outline-none'>
              Pause
            </button>
          </div>
        </div>
        <div className='flex flex-col flex-wrap max-w-max'>
          <p className='text-2xl font-bold'>Status</p>
          <div className='flex flex-wrap w-full my-2'>
            {fileStates.map((state: any, idx: number) => (
              <div className='flex relative w-max h-min items-center' key={idx}>
                <div className='group w-min border-2 border-gray-200 rounded-md p-4 text-center m-2'>
                  <p className='text-lg cursor-pointer'>Step: {state.nr}</p>
                  <p className=''>0%</p>
                  <div className='absolute hidden z-10 w-40 p-2 -bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-white bg-opacity-40 backdrop-filter backdrop-blur-sm rounded-md group-hover:flex'>
                    {state.description}
                  </div>
                </div>

                {idx + 1 !== fileStates.length && (
                  <div className='border w-10 mx-2' />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='text-2xl font-bold'>Calendar</p>
          <div className='flex bg-gray-100 h-50 w-50'>Calender Comp</div>
        </div>
      </div>

      <div className='flex flex-col'></div>
    </div>
  );
};

export default PhotoToUSB;
