import React, { useState } from 'react'
import SideBar from './SideBar'
import { useUser } from './userContext'
import { useQuery } from '@tanstack/react-query'
const Profile = () => {
 const date = new Date()
  const[Active,setActive]=useState(true)
 const[edit,setedit]=useState(false)
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

const fetchStud=async()=>{

  const res = await fetch('hhttp://localhost:8000/api/students')

  return res.json()
 }
 const {data:Stud ,loadingstudents,studserror}=useQuery({
  queryKey:'[stud]',
  queryFn:fetchStud
 })

 const handleYearLevel=()=>{
  const year_level = date.getUTCFullYear() 
  return year_level
}

const year = handleYearLevel(Stud)

const handleEdit=()=>{

  setedit(prev=>!prev)

}
  return (
    <div className='flex '>
       <div className='lg:w-[17%] ml-5 mt-5 h-screen'>
            <div className="fixed w-[15%]">
            <SideBar/>
            </div>
        </div>

<div className="ml-10 mt-10 w-[1000px] h-[700px] flex flex-col bg-white border-2 border-purple-500 rounded-2xl shadow-[0_8px_30px_rgba(128,0,128,0.3)] transform hover:scale-[1.01] transition-all duration-300"> 
  <div className="bg-[#f3eaff] ml-10 w-[75%] mt-10 rounded-2xl h-64 px-6 py-4">
    <div className="flex  items-start gap-6">
      {/* Profile Image */}

      <div
        style={{ backgroundImage: `url(${ImageUrl})` }}
        className="relative w-36 h-36 rounded-full border-4 border-purple-500 bg-gray-200 bg-center bg-cover bg-no-repeat shadow-md"
      >
        {edit && (
            <>
             <input
          type="file"
          accept="image/*"
          onChange={handleProfile}
          className="w-full h-full opacity-0 absolute top-0 left-0 cursor-pointer"
        />
            </>

        )}
       
      </div>

      {/* Student Info */}
      <div className="flex-1 mt-1 space-y-2">
        {!Stud && (
          <p className="font-semibold text-red-500 text-lg">No Students</p>
        )}
        {loadingstudents && (
          <p className="font-semibold text-blue-500 text-lg">Loading...</p>
        )}

        {Array.isArray(Stud) ? (
          Stud.map((s, index) => (
            <div key={index} className="space-y-1">
              <h1 className="text-2xl font-bold text-gray-800">
                {s.id.firstname} {s.id.middlename}
              </h1>
              <p className="text-gray-600 text-sm">ID: {s.id.student_id}</p>
              <p className="text-gray-600 text-sm">{s.id.program}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-700">
                <p>{`${year - s.id.batch} Year`}</p>
                <span className={Active ? 'text-green-600 font-semibold' : 'text-red-500 font-semibold'}>
                  {Active ? 'Active' : 'Not Active'}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-600 text-sm space-y-1">
            <h1 className="text-xl font-bold"></h1>
            <p></p>
            <p></p>
            <p>
              <span className={Active ? 'text-green-600 font-semibold' : 'text-red-500 font-semibold'}>
                {Active ? 'Active' : 'Not Active'}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>

    {/* Buttons */}
    <div className="mt-8 flex gap-4 pr-4">
      <button
        onClick={handleEdit}
        className="bg-purple-700 hover:bg-purple-800  hover:scale-98  text-white px-5 py-2 rounded-lg font-medium cursor-pointer  transition-all duration-300"
      >
        {edit ? 'Save Profile' : 'Edit Profile'}
      </button>
      <button
        onClick={""}
        className="bg-purple-700 hover:bg-purple-800 text-white px-5 py-2 rounded-lg font-medium transition-all duration-300"
      >
        Change Password
      </button>
    </div>
  </div>

     <div className='flex mt-10 pl-5 border-t border-t-purple-500 w-[75%] gap-10'>
  {Array.isArray(Stud) ? Stud?.map((s) => (
    <>
      <div className='w-[50%] pt-4 space-y-5'>
        <h1 className="text-xl font-bold">Basic information</h1>

        <div className="flex space-x-2">
          <h3 className="text-gray-400">Email:</h3>
          <h3 className="font-bold text-[#552bcb]">{s.id.email}</h3>
        </div>

        <div className="flex space-x-2">
          <h3 className="text-gray-400">Phone Number:</h3>
          <h3 className="font-bold text-[#552bcb]">{s.id.phone_number}</h3>
        </div>

        <div className="flex space-x-2">
          <h3 className="text-gray-400">Gender:</h3>
          <h3 className="font-bold text-[#552bcb]">{s.id.gender}</h3>
        </div>

        <div className="flex space-x-2">
          <h3 className="text-gray-400">Date of Birth:</h3>
          <h3 className="font-bold text-[#552bcb]">{s.id.date_of_birth}</h3>
        </div>

        <div className="flex space-x-2">
          <h3 className="text-gray-400">Country:</h3>
          <h3 className="font-bold text-[#552bcb]">{s.id.country}</h3>
        </div>

        <div className="flex space-x-2">
          <h3 className="text-gray-400">Address:</h3>
          <h3 className="font-bold text-[#552bcb]">{s.id.address}</h3>
        </div>
      </div>

      <div className='w-[50%] pt-4 space-y-5'>
        <h1 className="text-xl font-bold">Academic information</h1>

        <div className="flex space-x-2">
          <h3 className="text-gray-400">College:</h3>
          <h3 className="font-bold text-[#552bcb]">{s.id.college}</h3>
        </div>

        <div className="flex space-x-2">
          <h3 className="text-gray-400">Department:</h3>
          <h3 className="font-bold text-[#552bcb]">{s.id.department}</h3>
        </div>

        <div className="flex space-x-2">
          <h3 className="text-gray-400">Program:</h3>
          <h3 className="font-bold text-[#552bcb]">{s.id.program}</h3>
        </div>

        <div className="flex space-x-2">
          <h3 className="text-gray-400">Enrollment:</h3>
          <h3 className="font-bold text-[#552bcb]">{s.id.enrollment.year}</h3>
        </div>

        <div className="flex space-x-2">
          <h3 className="text-gray-400">Semester:</h3>
          <h3 className="font-bold text-[#552bcb]">{s.id.semester}</h3>
        </div>

        <div className="flex space-x-2">
          <h3 className="text-gray-400">GPA:</h3>
          <h3 className="font-bold text-[#552bcb]">{s.id.gpa}</h3>
        </div>
      </div>
    </>
  )) : (
    <div className="flex">
      <div className='w-[50%] pt-4 space-y-5'>
        <h1 className="text-xl font-bold">Basic information</h1>
        {["Email", "Phone Number", "Gender", "Date of Birth", "Nationality", "Address"]?.map((label, i) => (
          <div key={i} className="flex space-x-2">
            <h3 className="text-gray-400">{label}:</h3>
            <h3 className="font-bold text-[#552bcb]">-</h3>
          </div>
        ))}
      </div>

      <div className='w-[50%] pt-4 space-y-5'>
        <h1 className="text-xl font-bold">Academic information</h1>
        {["College", "Department", "Program", "Enrollment", "Semester", "GPA"]?.map((label, i) => (
          <div key={i} className="flex space-x-2">
            <h3 className="text-gray-400">{label}:</h3>
            <h3 className="font-bold text-[#552bcb]">-</h3>
          </div>
        ))}
      </div>
    </div>
  )}
</div>

        </div>
       
      
        
       
    </div>
  )
}

export default Profile