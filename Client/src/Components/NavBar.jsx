import React from 'react'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useUser } from './userContext'
import { Link } from 'react-router-dom'
const NavBar = () => {


    const{ImageUrl}=useUser()
  return (
    <div>
        <nav className='flex  gap-10'>
            
            <div className='pt-4 flex justify-start '>
                <input 
                className='md:w-[20rem] md:h-[3rem] pl-5 border border-white rounded-2xl shadow-xl focus:border-purple-500  outline-none'
                placeholder='Search '
                type="text" />
            </div>

            <Link to ='/profile' className=' pt-3 cursor-pointer flex items-center ml-auto mr-6 gap-2'>
                <div style={{ backgroundImage: `url(${ImageUrl})` }}
                  className="relative w-15 h-15 rounded-full border border-purple-500 bg-gray-200 overflow-hidden bg-center bg-cover bg-no-repeat"
                >
                      
                </div>
                   <div className='flex-col mt-2 '>
                     <h1 className='font-bold'>Robera Ararsa</h1>
                      <p className='text-gray-500'>3rd year</p>
                   </div>
                        
            </Link>
               <span className='pt-5  mr-8 relative'>
                <div className='w-2 h-2 absolute top-7  bg-red-700 rounded-[100%]'></div>
                <button className='cursor-pointer'>
                     <FontAwesomeIcon
                className='md:text-2xl text-black'
                icon={faBell}/>
                </button>
               
               </span>
        </nav>
    </div>
  )
}

export default NavBar