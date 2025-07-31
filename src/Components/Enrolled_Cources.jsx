import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useRef } from 'react';
import { useUser } from './userContext';
import {
  faCode,
  faNetworkWired,
  faSquareRootVariable,
  faChartBar,
  faDatabase,
  faMicrochip,
  faPenNib
} from '@fortawesome/free-solid-svg-icons'

const Enrolled_Cources = () => {
 
    const [seeAll, setSeeAll] = useState(false);
    const {scrollRef} =useUser()
     // fetchong the courses
  const fetchCources =async()=>{
    const res= await fetch('http://localhost:8000/api/courses');
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json()
  }
  
    const {data,error}=useQuery({
      queryKey:['course'],
      queryFn:fetchCources,
    })

    if(error)return  <p>Error: {error.message}</p>
    if(!data) return  <p>their is no</p>

     const renderCourses = () => {
    return data.map((Course, i) => (
                   <div className='w-90 h-44  ml-5 mb-8 mt-2 bg-[#E1D3F5] shadow-2xl rounded-xl flex px-6'>
                    <div className='w-[60%] flex flex-col justify-center gap-4'>
                      <h1 className='text-[#9360E3] font-bold text-md'>
                      {Course.course_name}
                      </h1>
                      <button className='font-bold cursor-pointer bg-[#9360E3] px-8 py-2 rounded-3xl text-white w-fit'>
                        View
                      </button>
                    </div>

                    <div className='w-[40%] flex justify-center items-center text-6xl text-[#9360E3]'>
                      <FontAwesomeIcon icon={Course.icon} />
                    </div>
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

  const chunks = chunkArray(renderCourses(), 2); 
  const handleSeeAll = () => {
    
    setSeeAll((prev) => !prev);
    
  
  };
  
  return (
    <div className='mt-10  w-[60%]'>
        <div className='flex'>
            <h1 className='font-bold text-xl'>Enrolled cources</h1>
              <button onClick={handleSeeAll} className='mt-auto ml-auto text-[#4D24CB] cursor-pointer font-bold'> {seeAll ? 'See less' : 'See all'}</button>
        </div>
        <div className='flex justify-between gap-9'>
                <div ref={scrollRef} className='space-y-2  transition-all duration-300 ease-in-out'>
            {chunks.map((group, groupIndex) => (
              <div 
                key={groupIndex}
                className={`flex justify-between ${!seeAll && groupIndex > 0 ? 'hidden' : ''}`}
              >
                {group.map((inst, index) => (
                  <div className='transition-transform duration-300  hover:scale-100' key={index}>
                    {inst}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
       <div>

       </div>
    </div>
  )
}

export default Enrolled_Cources