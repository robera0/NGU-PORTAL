import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons/faCoins';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import { useRef } from 'react';
import { useUser } from './userContext';

const Finance = () => {
  const [seeAll, setSeeAll] = useState(false);
  const {scrollRef} =useUser()
    const API_URL = import.meta.env.VITE_API_URL;

   
  // fetchong the cs teachers
 const fetchTeachers = async () => {
  const res = await fetch(`${API_URL}/api/csteachers`);
    console.log("API_URL:", API_URL)
   const contentType = res.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
  const text = await res.text();
  console.error("Received non-JSON response:", text);
  throw new Error("Server did not return JSON");
};
return res.json();
 }

const { data, error, isLoading } = useQuery({
  queryKey: ['teachers'],
  queryFn: fetchTeachers,
  staleTime: 1000 * 60 * 1, 
});

if (isLoading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;
if (!data) return <p>No data</p>;

     const renderInstructors = () => {
    return data.map((teacher, i) => (
      <div key={i} className="flex flex-col items-center w-24"> 
        <div
         style={{
          backgroundImage: teacher.profile
            ? `url(${teacher.profile})`
            : 'url("/src/assets/defaultUser.jpg")'
        }}
          className="rounded-full shadow-xl  flex justify-center items-center border-2 border-purple-500 bg-center bg-cover bg-no-repeat w-20 h-20"
        />
        <span className="text-sm  text-center text-[#3C17BD] font-bold mt-2  w-full px-1">
          {teacher.name}
        </span>  
      </div>       
    ));
  };

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const chunks = chunkArray(renderInstructors(), 3); 
  const handleSeeAll = () => {
    
    setSeeAll((prev) => !prev);
    
  
  };

  return (
    <div className='mt-5'>
      <h1 className='font-bold text-xl'>Finance</h1>
      <div className='flex mt-2'>
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
          <div className='flex items-center gap-22 mb-4 gap-4'>
            <h1 className='font-bold'>Course Instructors</h1>
            <button onClick={handleSeeAll} className='text-[#4D24CB] cursor-pointer font-bold'>
              {seeAll ? 'See less' : 'See all'}
            </button>
          </div>
          <div ref={scrollRef} className='space-y-2 transition-all duration-300 ease-in-out'>
            {chunks.map((group, groupIndex) => (
              <div 
                key={groupIndex}
                className={`flex justify-between ${!seeAll && groupIndex > 0 ? 'hidden' : ''}`}
              >
                {group.map((inst, index) => (
                  <div className='transition-transform duration-300 hover:scale-100' key={index}>
                    {inst}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Daily Notice */}
          <div>
            <div className='flex items-center gap-32 mt-6 mb-2'>
              <h1 className='font-bold'>Daily Notice</h1>
              <button className='text-[#4D24CB] cursor-pointer font-bold'>See all</button>
            </div>

            <div className='p-4 rounded-xl shadow-2xl'>
              <div className='mb-4'>
                <h1 className='font-bold mb-2'>Payment Due</h1>
                <p className='text-gray-500 text-sm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis autem corrupti sapiente!
                  Quo itaque quos dolorem maiores nisi sed illo nesciunt deleniti.
                </p>
                <button className='text-[#4D24CB] hover:text-[#3C17BD] font-semibold mt-2'>See details</button>
              </div>

              <div>
                <h1 className='font-bold mb-2'>Exam Schedule</h1>
                <p className='text-gray-500 text-sm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis autem corrupti sapiente!
                  Quo itaque quos dolorem maiores nisi sed illo nesciunt deleniti.
                </p>
                <button className='text-[#4D24CB] hover:text-[#3C17BD] font-semibold mt-2'>See details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;