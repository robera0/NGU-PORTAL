import React from 'react'
import SideBar from './SideBar'
import NavBar from './NavBar'
import Finance from './Finance'
import Enrolled_Cources from './Enrolled_Cources'
import { useQuery } from '@tanstack/react-query'

const Home = () => {
  const date = new Date()
  const Month = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  const dayNum = date.getUTCDate();
  const monthName = Month[date.getUTCMonth()];
   
    const fetchStud=async()=>{

  const res = await fetch('https://ngu-portal.onrender.com/api/students')

  return res.json()
 }
 const {data:Stud ,loadingstudents,studserror}=useQuery({
  queryKey:'[stud]',
  queryFn:fetchStud
 })
 
  return (
    <div className='flex flex-col lg:flex-row'>
      {/* Sidebar */}
      <div className='w-full lg:w-[17%] mt-5 px-4 lg:ml-5'>
        <div className='lg:fixed w-full lg:w-[15%]'>
          <SideBar />
        </div>
      </div>

      {/* Main content */}
      <div className='w-full lg:w-[83%] px-4 lg:px-0 mt-5'>
        <NavBar />

            <div className='home w-[95%]  mt-10 overflow-hidden rounded-2xl h-64'>
                <div className='items-center flex mt-10 ml-10'>
                    <p className='text-gray-200'>{monthName} {" "} {dayNum}, {date.getFullYear()}</p>
                </div>
                  <div className='text-white items-center flex  flex-col gap-4 mt-10 ml-10'>
                       {Array.isArray(Stud) ? Stud.map((s)=>(
                        <div> 
                          <h1 className='text-2xl font-bold'>{`Welcome Back,${" "} ${s.id.firstname}!`}</h1>
                    <p>Always stay updated in your student portal</p>
                        </div>
                       )): 
                      <div> 
                          <h1 className='text-2xl font-bold'>Welcome Back,Student!</h1>
                    <p>Always stay updated in your student portal</p>
                        </div>
                      }
                    
                  </div>
              
            </div>

        <div className='mt-8'>
          <Finance />
        </div>

        <div className='mt-8'>
          <Enrolled_Cources />
        </div>
      </div>
    </div>
  )
}

export default Home
