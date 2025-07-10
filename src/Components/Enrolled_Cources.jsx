import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons/faLaptop'
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase'

const Enrolled_Cources = () => {
  return (
    <div className='mt-10  w-[60%]'>
        <div className='flex'>
            <h1 className='font-bold text-xl'>Enrolled cources</h1>
              <button className='mt-auto ml-auto text-[#4D24CB] cursor-pointer font-bold'>See all</button>
        </div>
        <div className='flex justify-between'>
              <div className='w-90 h-44 mt-5 bg-[#E1D3F5] shadow-2xl rounded-xl flex px-6'>
  <div className='w-[60%] flex flex-col justify-center gap-4'>
    <h1 className='text-[#9360E3] font-bold text-md'>
      Object-oriented programming
    </h1>
    <button className='font-bold cursor-pointer bg-[#9360E3] px-8 py-2 rounded-3xl text-white w-fit'>
      View
    </button>
  </div>

  <div className='w-[40%] flex justify-center items-center text-6xl text-[#9360E3]'>
    <FontAwesomeIcon icon={faLaptop} />
  </div>
</div>



                  <div className='w-90 h-44 mt-5 bg-[#E1D3F5] shadow-2xl rounded-xl flex px-6'>
  <div className='w-[60%] flex flex-col justify-center gap-4'>
    <h1 className='text-[#9360E3] font-bold text-md'>
     fundamental of database system
    </h1>
    <button className='font-bold cursor-pointer bg-[#9360E3] px-8 py-2 rounded-3xl text-white w-fit'>
      View
    </button>
  </div>

  <div className='w-[40%] flex justify-center items-center text-6xl text-[#9360E3]'>
    <FontAwesomeIcon icon={faDatabase} />
  </div>
</div>
        </div>
     

       <div>

       </div>
    </div>
  )
}

export default Enrolled_Cources