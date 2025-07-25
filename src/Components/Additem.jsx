  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faXmark} from '@fortawesome/free-solid-svg-icons'
  import { useSchedule } from '../Context/Scheduler'
  import {  useState } from 'react'
  const Additem = () => {
      const Days =[ "Mon", "Tue", "Wen", "Thu","Fri" ]
      const{setCourseTitle,setStartmin,setEndMin,courseTitle,
          setAddItems,color,setColor,setStart, startTime,day,setday,
           setEnd,setAm,setPm,setCourseType,setinstructor,startMin,endtime,endMin,Am,
           setLocation,AllInfo,setAllInfo,setAddContent}=useSchedule()
  const [course,setCourse]=useState(true)
  const [events,setEvents]=useState(false)
  const meetingtime=1;
  const Eventtime =1;
  const[checked,setchecked]=useState(false)
  const handleCloseAddItems=()=>setAddItems(false)
  const handleChecked=()=>setchecked(prev=>!prev) 
  const handleCourseTitle = (e) =>setCourseTitle(e.target.value);
  const handleColor=(e)=>setColor(e.target.value)
  const handleStartTime = (e) => setStart(e.target.value);
  const handleEndTime = (e) => setEnd(e.target.value);
  const handleAm=(e)=>setAm(e.target.value)
  const handlePm=(e)=>setPm(e.target.value)
  const handleCourseType = (e) => setCourseType(e.target.value);
  const handleInstructor = (e) => setinstructor(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handleminutes=(e)=>setStartmin(e.target.value);
  const handleEndMin=(e)=>setEndMin(e.target.value)


  const handleAddCourse = () =>{

     localStorage.setItem("student",JSON.stringify(AllInfo))
     const storedInfo=JSON.parse(localStorage.getItem("student")) || {};
     setAddContent(true)
     console.log(storedInfo)
   }
 
  //to checka and store in the day list if it match with the index
    const handleChecking=(e)=>{
       setday(e.target.value);
        if(e.target.checked){
       // Store it if its checkd 
         setAllInfo((prev) => ({...prev,
                [day]: {
                "course_Title": courseTitle,
                "start_Time": startTime && `${startTime}:${startMin}`,
                "end_Time": endtime && `${endtime}:${endMin}`,
                "time": Am,
              }
            }));
         
        }
    }
      const handleCourse=()=>{
        setCourse(true)
          if(events){
              setEvents(false)
          }
      }
      
      const hadndleEvents=()=>{
        setEvents(prev=> !prev)
        if(course){
          setCourse(false)
        }
      }

    return (
    <div className='ml-40 mt-10 bg-white border border-purple-100 h-180 rounded  shadow-md'>
    <div className='flex justify-between border-t-rounded items-center w-90 bg-purple-100 px-4 py-2 '>
      <span className='text-center'>Additem</span>
      
      <button onClick={handleCloseAddItems} className='text-gray-600 cursor-pointer hover:text-red-500'>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>

    <div className=' mt-3 ml-10 flex justify-between border-t-rounded items-center w-60 bg-purple-100 px-4 py-1 '>
        <button
                  onClick={handleCourse}
                  className={`w-1/2 border-r border-white cursor-pointer duration-300 hover:bg-[#8200DB] hover:text-white ${
                  course ? 'bg-[#8200DB] text-white' : ''
                  }`}
              >
        Courses
    </button>

        <button
                  onClick={hadndleEvents}
                  className={`w-1/2 cursor-pointer duration-300 hover:bg-[#8200DB] hover:text-white ${
                  events ? 'bg-[#8200DB] text-white' : ''
                  }`}
              >
        Events
    </button>
    </div>
      {/*Main */}

      <div className='transform-all eas'>
        <div className='h-1 bg-purple-100  mt-4 ml-5 w-80 rounded-xl'></div>
        {course ? <div className='trnastition-800'>
              
                    <div className='flex  justify-around mt-3'>
              <div className='mt-4 space-y-7'>
                    
                    <div className='flex gap-6'>
                        <span className=''>Course Title</span>
                      <input onChange={handleCourseTitle} className=' border w-35 pl-3 border-gray-200 focus:border-purple-500  outline-none' type="text" />
                    </div>
                      
                      <div className=' flex  gap-6'>
                        <span className=''>color</span>
                          <div>
                              <input onChange={handleColor} className={`order w-13  border-gray-200 focus:border-${color}  outline-none`} b type="color" />
                                <input className='w-20' type="text" value={color} />
                          </div>
                      
                      
              </div>
            
              </div>
                
              
          </div>

          {/*meeting time */}
            <div className=' ml-5 mt-3  w-80 border border-purple-100  h-full rounded shadow-'>
                <div className='flex  border-t-rounded  bg-purple-100 px-4 py-2 '>
            <span className='text-center'>Meeting Time {meetingtime}</span>

          </div> 
              <div className=' bg-purple-100  w-74 h-50 rounded ml-3 mt-2'>

                  <div className='flex  ml-8 gap-5'>
                        
                  {Days.map((day,index)=>
                  (
                    <div key={index} className='pt-2 h-full flex gap-2 flex-col '>
                      {day} 
          
                      <input onChange={handleChecking} value={day} className='all rounded-full' type="checkBox" />
                      </div>
                      
                  ))}
                </div>
                  {/*start Time */}
                <div className='flex mt-4 ml-2 gap-2'>
                        <span className=''>Start Time</span>
                      <input onChange={handleStartTime}  placeholder='12' className=' border w-10 pl-2 border-gray-400 bg-white rounded-lg  outline-none'  type="text" />
                          {":"}
                        <input onChange={handleminutes}placeholder='00' className=' border w-10 pl-2 border-gray-400 bg-white rounded-lg  outline-none' type="text" />
                        {/*AM and PM */}
                          <div className='w-18 flex gap-2 border pl-2 border-gray-400 bg-white rounded-lg '>
                              <button className='text-sm cursor-pointer'>AM</button>
                              <button className='text-sm cursor-pointer'>PM</button>
                          </div>
                      
                    </div>
                  {/*End Time */}
                    <div className='flex mt-4 ml-4 gap-2'>
                        <span className=''>End Time</span>
                      <input onChange={handleEndTime} placeholder='12' className=' border w-10 pl-2 border-gray-400 bg-white rounded-lg  outline-none'  type="text" />
                          {":"}
                        <input onChange={handleEndMin} placeholder='00' className=' border w-10 pl-2 border-gray-400 bg-white rounded-lg  outline-none' type="text" />
                        {/*AM and PM */}
                          <div className='w-18 flex gap-2 border pl-2 border-gray-400 bg-white rounded-lg '>
                              <button onClick={handleAm} className='text-sm cursor-pointer'>AM</button>
                              <button onClick={handlePm} className='text-sm cursor-pointer'>PM</button>
                          </div>
                    </div>
              </div>

              <div className=' bg-purple-100 mb-2  w-74 full rounded ml-3 mt-2'>

                    <div className='pt-4 pl-3 space-y-2'>
                    
                    <div className='flex flex-wrap  gap-2'>
                        <span className=''>Course Type</span>
                      <input onChange={handleCourseType} placeholder='optional (ex.lab)' className=' border w-35 pl-3 border-gray-200 bg-white rounded-lg focus:border-purple-500  outline-none' type="text" />
                    </div>
                      
                      <div className='flex flex-wrap  gap-8'>
                        <span className=''> instructor</span>
                      <input onChange={handleInstructor} placeholder='optional ' className=' border w-35 pl-3 border-gray-200 bg-white rounded-lg focus:border-purple-500  outline-none' type="text" />
                    </div>

                      <div className='flex flex-wrap  gap-10'>
                        <span className=''> Location</span>
                      <input onChange={handleLocation} placeholder='optional' className=' mb-2 border w-35 pl-3 border-gray-200 bg-white rounded-lg focus:border-purple-500  outline-none' type="text" />
                    </div>
            
              </div>
                
              
          </div>
              </div>
              <div className='group flex flex-wrap  justify-center items-center cursor-pointer  hover:text-white'>
                  <button onClick={""} className='w-70 h-8 mt-4 border  rounded-lg font-bold text-purple-200 shadow-md  group-hover:bg-[#8200DB] hover:text-white  cursor-pointer duration-300 '>Add Another meeting</button>
                </div>

                <div className='group flex flex-wrap  justify-center items-center cursor-pointer  hover:text-white'>
                  <button onClick={handleAddCourse} className='w-30 h-8 mt-4   rounded-lg font-bold bg-purple-200 text-black  group-hover:bg-[#8200DB] hover:text-white  cursor-pointer duration-300 '>Add course</button>
                </div>
              
        
        </div>: 
            
            <div className='transition-300'>
              <div className='flex  justify-around mt-3'>
              <div className='mt-4 space-y-3'>
                    
                    <div className='flex gap-6'>
                        <span className=''>Event name </span>
                      <input className=' border w-35 pl-3 border-gray-200 focus:border-purple-500  outline-none' type="text" />
                    </div>
                      
                      <div className=' flex  gap-6'>
                        <span className=''>color</span>
                          <div>
                              <input onChange={handleColor} className={`order w-13  border-gray-200 focus:border-${color}  outline-none`} b type="color" />
                                <input className='w-20' type="text" value={color} />
                          </div>
                      
                      
              </div>
            
              </div>
                
              
          </div>

          {/*meeting time */}
            <div className=' ml-5 mt-3  w-80 border border-purple-100  h-full rounded shadow-'>
                <div className='flex  border-t-rounded  bg-purple-100 px-4 py-2 '>
            <span className='text-center'>Event Time {Eventtime}</span>

          </div> 
              <div className=' bg-purple-100  w-74 h-50 rounded ml-3 mt-2'>

                  <div className='flex  ml-8 gap-5'>
                        
                  {Days.map((day,index)=>
                  (
                    <div  key={index} className='pt-2 h-full flex gap-2 flex-col '>
                      {day}
                      <input  type="checkbox" />
                      </div>
                      
                  ))}
                </div>
                  {/*start Time */}
                <div className='flex mt-4 ml-2 gap-2'>
                        <span className=''>Start Time</span>
                      <input placeholder='12' className=' border w-10 pl-2 border-gray-400 bg-white rounded-lg  outline-none'  type="text" />
                          {":"}
                        <input placeholder='00' className=' border w-10 pl-2 border-gray-400 bg-white rounded-lg  outline-none' type="text" />
                        {/*AM and PM */}
                          <div className='w-18 flex gap-2 border pl-2 border-gray-400 bg-white rounded-lg '>
                              <button className='text-sm cursor-pointer'>AM</button>
                              <button className='text-sm cursor-pointer'>PM</button>
                          </div>
                      
                    </div>
                  {/*End Time */}
                    <div className='flex mt-4 ml-4 gap-2'>
                        <span className=''>End Time</span>
                      <input placeholder='12' className=' border w-10 pl-2 border-gray-400 bg-white rounded-lg  outline-none'  type="text" />
                          {":"}
                        <input placeholder='00' className=' border w-10 pl-2 border-gray-400 bg-white rounded-lg  outline-none' type="text" />
                        {/*AM and PM */}
                          <div className='w-18 flex gap-2 border pl-2 border-gray-400 bg-white rounded-lg '>
                              <button className='text-sm cursor-pointer'>AM</button>
                              <button className='text-sm cursor-pointer'>PM</button>
                          </div>
                    </div>
              </div>

              <div className=' bg-purple-100 mb-2  w-74 full rounded ml-3 mt-2'>

                    <div className='pt-4 pl-3 space-y-2'>
                        <div className='flex flex-wrap  gap-10'>
                        <span className=''> Location</span>
                      <input placeholder='optional' className=' mb-2 border w-35 pl-3 border-gray-200 bg-white rounded-lg focus:border-purple-500  outline-none' type="text" />
                    </div>
            
              </div>
                
              
          </div>
              </div>
              <div className='group flex flex-wrap  justify-center items-center cursor-pointer  hover:text-white'>
                  <button className='w-70 h-8 mt-4 border  rounded-lg font-bold text-purple-200 shadow-md  group-hover:bg-[#8200DB] hover:text-white  cursor-pointer duration-300 '>Add Another Event Time</button>
                </div>

                <div className='group flex flex-wrap  justify-center items-center cursor-pointer  hover:text-white'>
                  <button className='w-50 h-8 mt-24   rounded-lg font-bold bg-purple-200 text-black  group-hover:bg-[#8200DB] hover:text-white  cursor-pointer duration-300 '>Add Event</button>
                </div>
            
            
            
            </div>
        
        
        
          }
      
            </div>
        
      </div>


    )
  }

  export default Additem