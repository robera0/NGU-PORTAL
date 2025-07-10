import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons/faCoins';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Finance = () => {
  const [seeAll, setSeeAll] = useState(false);

  const instractors = [
    <div className='rounded-full border-2 border-purple-500 bg-gray-200 w-20 h-20'></div>,
    <div className='rounded-full border-2 border-purple-500 bg-gray-200 w-20 h-20'></div>,
    <div className='rounded-full border-2 border-purple-500 bg-gray-200 w-20 h-20'></div>,
    <div className='rounded-full border-2 border-purple-500 bg-gray-200 w-20 h-20'></div>,
    <div className='rounded-full border-2 border-purple-500 bg-gray-200 w-20 h-20'></div>,
    <div className='rounded-full border-2 border-purple-500 bg-gray-200 w-20 h-20'></div>,
    <div className='rounded-full border-2 border-purple-500 bg-gray-200 w-20 h-20'></div>,
    <div className='rounded-full border-2 border-purple-500 bg-gray-200 w-20 h-20'></div>,
    <div className='rounded-full border-2 border-purple-500 bg-gray-200 w-20 h-20'></div>
  ];

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const chunks = chunkArray(instractors, 3);

  const handleSeeAll = () => {
    setSeeAll((prev) => !prev);
  };

  return (
    <div className='mt-5'>
      <h1 className='font-bold text-xl'>Finance</h1>
      <div className='flex gap-10 mt-5'>
        {/* Stats section */}
        <div className='md:w-[70%] flex gap-10 md:h-64'>
          <div className='w-50 h-64 shadow-2xl rounded-xl flex flex-col justify-center items-center'>
            <FontAwesomeIcon className='text-6xl text-[#6E46CD]' icon={faCoins} />
            <div>
              <h1 className='font-bold'>$ 10,0000</h1>
              <p>Total PayPal</p>
            </div>
          </div>

          <div className='w-50 h-64 shadow-2xl rounded-xl flex flex-col justify-center items-center'>
            <FontAwesomeIcon className='text-6xl text-[#6E46CD]' icon={faChartSimple} />
            <div>
              <h1 className='font-bold'>$5000</h1>
              <p>Total Paid</p>
            </div>
          </div>

          <div className='w-50 h-64 shadow-2xl rounded-xl flex flex-col justify-center items-center'>
            <FontAwesomeIcon className='text-6xl text-[#6E46CD]' icon={faChartSimple} />
            <div>
              <h1 className='font-bold'>$300</h1>
              <p>Others</p>
            </div>
          </div>
        </div>

        {/* Instructors section */}
        <div className='md:w-[30%] md:h-64'>
          <div className='flex pl-5 gap-10'>
            <h1 className='font-bold'>Course Instructors</h1>
            <button onClick={handleSeeAll} className='text-[#4D24CB] cursor-pointer font-bold'>
              {seeAll ? 'See Less' : 'See All'}
            </button>
          </div>

          <div className='space-y-2 pl-5 transition-all duration-500 ease-in-out '>
            {chunks.map((group, groupIndex) => {
            
              if (!seeAll && groupIndex > 0) return null;

              return (
                <div
                  key={groupIndex}
                  className={`mt-2  overflow-hidden transition-all duration-500 ease-in-out ${
                    seeAll ? 'max-h-[180px]' : 'max-h-[90px]'
                  }`}
                >
                  <div className='flex gap-8 transition-all duration-500 ease-in-out '>
                    {group.map((inst, index) => (
                      <div className=' transition-all duration-500 ease-in-out' key={index}>{inst}</div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Daily Notice */}
          <div>
            <div className='flex  mt-3 ml-2 gap-22'>
              <h1 className='font-bold'>Daily Notice</h1>
              <button className='text-left text-[#4D24CB] cursor-pointer font-bold'>See all</button>
            </div>

            <div className='p-4 pt-2 rounded-xl max-w-[90%] mt-3 shadow-2xl'>
              <div>
                <h1 className='font-bold mb-2'>Payment Due</h1>
                <p className='text-gray-500'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis autem corrupti sapiente!
                  Quo itaque quos dolorem maiores nisi sed illo nesciunt deleniti.
                </p>
                <button className='text-left mt-2 text-[#4D24CB] cursor-pointer font-bold'>See all</button>
              </div>

              <div className='mt-4'>
                <h1 className='font-bold mb-2'>Exam Schedule</h1>
                <p className='text-gray-500'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis autem corrupti sapiente!
                  Quo itaque quos dolorem maiores nisi sed illo nesciunt deleniti.
                </p>
                <button className='text-left mt-2 text-[#4D24CB] cursor-pointer font-bold'>See all</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
