import React, { useState } from 'react'
import SideBar from './SideBar'
import { useUser } from './userContext'
const Profile = () => {

  const[Active,setActive]=useState(true)

  const{ImageUrl,setImageurl}=useUser()
   const handleProfile=(e)=>{

    const file =e.target.files[0]

        if(file){

          const reader= new FileReader()
            
          reader.onloadend=()=>{
       
                setImageurl(reader.result)

          }
             reader.readAsDataURL(file);  
        }
   }

  return (
    <div className='flex '>
       <div className='lg:w-[17%] ml-5 mt-5 h-screen'>
            <div className="fixed w-[15%]">
            <SideBar/>
            </div>
        </div>

        <div className='ml-10 h-screen w-full flex flex-col '>
           <div className=' bg-[#E1D3F5] w-[75%]  mt-10 overflow-hidden rounded-2xl h-64'>
              <div className='flex ml-5 pt-4 gap-10'>
              <div 
                  style={{ backgroundImage: `url(${ImageUrl})` }}
                  className="relative w-36 h-36 rounded-full border border-purple-500 bg-gray-200 overflow-hidden bg-center bg-cover bg-no-repeat"
                >
                  <input
                      type="file"
                      accept="image/*"
                      onChange={handleProfile}
                      className="w-full h-full opacity-0 absolute top-0 left-0 cursor-pointer"
                    />
                  </div>

                 <div className='font-semibold mt-3  space-y-2 '>
                    <h1 className='text-xl'>Robera Ararsa</h1>
                       <p>ID:24/4525</p>
                         <p>B.Sc. Computer Science</p>
                      <p>
                          3rd Year{' '}
                          <span className={Active ? 'text-green-500' : 'text-red-500'}>
                            {Active ? 'Active' : 'Not Active'}
                          </span>
                        </p>
                 </div>
               
          </div>
          
            <div className=' mt-8 flex justift-end ml-4 gap-5'>
                   <div>
                         <button
                        onClick={""}
                        className="text-white px-6 py-2 rounded-lg font-bold bg-purple-700 cursor-pointer transition-all duration-300"
                                        >
                         Edit Profile
                     </button>
                   </div>
                    <div>
                        <button
                          onClick={""}
                          className="text-white px-6 py-2 rounded-lg font-bold bg-purple-700 cursor-pointer transition-all duration-300"
                                  >
                         Change Password
                </button>
                    </div>
                      
                 </div>
           
       </div>
               <div className='flex mt-10 pl-5 border-t border-t-purple-500  w-[75%] gap-10'>
          <div className='w-[50%] pt-4 '>
            <h1 className="text-xl font bold">Basic information</h1>
                <p>Email</p>
                <p>phone Number</p>
                 <p>Gender</p>
                  <p>Date of Birth</p>
                   <p>Nationality</p>
                    <p>Address</p>

          </div>

          <div className='w-[50%] pt-4 '>
              <h1  className="text-xl font bold">Acadamic information</h1>
          </div>
        </div>
        </div>
       
      
        
       
    </div>
  )
}

export default Profile