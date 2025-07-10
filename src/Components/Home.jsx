import React from 'react'
import SideBar from './SideBar'
import NavBar from './NavBar'
import Finance from './Finance'
import Enrolled_Cources from './Enrolled_Cources'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Home = () => {
    const date = new Date() 
  const Month = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];
   const monthName= Month[date.getMonth()]
  return (
    
    <div className='flex'>
        <div className='lg:w-[17%] ml-5 mt-5 h-screen'>
            <div className="fixed w-[15%]">
            <SideBar/>
            </div>
        </div>

        <div  className='w-[93%] ml-5 mt-5'>
                      <NavBar/>
            <div className='home w-[95%]  mt-10 overflow-hidden rounded-2xl h-64'>
                <div className='items-center flex mt-10 ml-10'>
                    <p className='text-gray-200'>{monthName} {" "} {date.getMonth()-1}, {date.getFullYear()}</p>
                </div>
                  <div className='text-white items-center flex  flex-col gap-4 mt-10 ml-10'>
                    <h1 className='text-2xl font-bold'>Welcome Back, Robera!</h1>
                    <p>Always stay updated in your student portal</p>
                  </div>
              
            </div>
             <Finance/>
             <Enrolled_Cources/>
        </div>
           
    </div>
  )
}

export default Home