import SideBar from "../student/SideBar"
import NavBar from '../student/NavBar'
import { useSchedule } from '../../Context/Scheduler';
import { useQuery } from "@tanstack/react-query"
import FileLoader from '../../Inputs/FileLoader';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faRotateRight  } from '@fortawesome/free-solid-svg-icons';
import ViewAssign from "./ViewAssign";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Courses = () => {
 
  const {view,setView,setNewassign,newAssign}=useSchedule()

     // fetch the course ass,homework and proj
     const fetchCourcesAssign =async()=>{
    const res= await fetch('http://localhost:8000/api/c');
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json()
  }
    const {data:c,refetchAssign,isFetchingAssign,assignerror}=useQuery({
      queryKey:['courseAssing'],
      queryFn:fetchCourcesAssign,
    })
  const fetchCources =async()=>{
    const res= await fetch('http://localhost:8000/api/course');
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json()
  }
    const {data:course,refetch,isFetching,error}=useQuery({
      queryKey:['course'],
      queryFn:fetchCources,
    })
  const Record=course?.length || 0
  const handleViewAssign=(id)=>{
  setView(true)
  const main = Array.isArray(c) ? c.filter(ca => ca.course_id === id) : [];
  setNewassign(main)
}
  useEffect(() => {
  console.log("Updated assignment data:", newAssign);
}, [newAssign]);
  return (
         <>
              <AnimatePresence>
          {view && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative max-w-6xl w-full max-h-full  overflow-x-hidden flex justify-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ViewAssign />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex h-screen">
      {/* Sidebar */}
    <div className='lg:w-[17%] ml-5 mt-2 h-screen'>
        <div className="fixed w-[15%]">
          <SideBar />
        </div>
      </div>
      <div className=' h-full w-[85%]'>
         <div className='mt-8'>
            <NavBar/>
         </div>
          {/* Overlay Vew Assignment */}
     
         <div>
          {/*add search section */}

         </div>
     <div className="min-h-screen">
  <div className="bg-[#f3eaff] ml-10 w-[75%] mt-10 rounded-2xl h-full px-6 py-4">
    
    <div className="flex justify-between items-center mb-4 px-2">
      <div 
        className="text-purple-700 cursor-pointer hover:text-purple-900 flex items-center space-x-2"
        onClick={refetch} disabled={isFetching} 
      >
        <FontAwesomeIcon icon={faRotateRight} className="text-lg" />
        <span className="text-sm font-medium">  {isFetching ? "Is Refereshing ":"Refresh"}</span>
      </div>

      <div className="text-sm  font-semibold text-purple-700">
        {` ${Record} Records`}
      </div>
    </div>

    {/* Course Cards */}
    <div className="flex flex-wrap gap-6"> 
      {isFetching ? <FileLoader/> :  
        <>
        {Array.isArray(course) && course.length > 0 ? (
        course.map((c, index) => (
          <div key={index} className="">
            <div className="bg-white w-72 h-fit flex flex-col justify-between border border-purple-500 rounded-md p-4 shadow space-y-3">
              <div className="space-y-2">
                <h1 className="font-semibold text-gray-400 text-sm">Courses</h1>
                <h3 className="text-sm text-gray-700">{c.course_name}</h3>
              </div>

              <div className="bg-purple-700 hover:bg-purple-800 text-white px-2 py-1 rounded-lg font-medium transition-all duration-300 cursor-pointer flex justify-center items-center space-x-2 w-fit">
                <FontAwesomeIcon className="text-sm" icon={faEye} />
                <button onClick={()=>handleViewAssign(c.course_id)} className="cursor-pointer text-sm">View Assignments</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col justify-center items-center space-y-2 h-32 w-full">
          {error && <p className="text-red-500">Error: {error.message}</p>}
          {!course && <h1 className="text-xl font-bold text-center">No Course Assigned Yet</h1>}
          <p className="text-sm text-gray-500">Please check back later.</p>
        </div>
      )}
        </>
      }
      
    </div>
  </div> 
    <div className="flex justify-end mr-30">
        <button className="text-md text-white round-4xl bg-purple-500 px-2 py-1 rounded-lg ">
        <Link to='/helpAi'>Studty with AI</Link>     
      </button>
    </div>
   

</div>

            </div>
         </div>
        </>
  )
}

export default Courses