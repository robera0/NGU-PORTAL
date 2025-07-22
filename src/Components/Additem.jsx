import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import { useSchedule } from '../Context/Scheduler'
import { useState } from 'react'
const Additem = () => {
     const Days =["Mon","Tue","Wed","Thu","Fri"]
    const{setAddItems,color,setColor}=useSchedule()
    const [course,setCourse]=useState(false)
    const [events,setEvents]=useState(false)
    const meetingtime=1;
    const[checked,setchecked]=useState(false)
    
    const handleCloseAddItems=()=>setAddItems(false)
    const handleCourse=()=>{setCourse(true)
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
    const handleColor=(e)=>setColor(e.target.value)
    const handleChecked=()=>setchecked(prev=>!prev)
  return (
   <div className='ml-40 mt-10 border border-purple-100 h-full rounded '>
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

     <div>
      <div className='h-1 bg-purple-100  mt-4 ml-5 w-80 rounded-xl'></div>
        <div className='flex  justify-around mt-3'>
             <div className='mt-4 space-y-7'>
                   
                   <div className='flex gap-6'>
                      <span className=''>Course Title</span>
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
          <div className=' ml-5 mt-10 w-80 border border-purple-100  h-70 rounded shadow-md'>
              <div className='flex  border-t-rounded  bg-purple-100 px-4 py-2 '>
           <span className='text-center'>Meeting Time {meetingtime}</span>

         </div> 
            <div className=' bg-purple-100  w-74 h-50 rounded ml-3 mt-2'>

                 <div className='flex  ml-8 gap-5'>
                      
                {Days.map((day,index)=>
                (
                   <div key={index} className='pt-2 h-full flex gap-2 flex-col '>
                     {day}
                     <input onDoubleClick={handleChecked} value={day} type="radio" />
                     </div>
                     
                ))}
              </div>
                {/*start Time */}
              <div className='flex mt-4 ml-2 gap-2'>
                      <span className=''>Start Time</span>
                     <input placeholder='12' className=' border w-10 pl-2 border-gray-400 bg-white rounded-lg   outline-none'  type="text" />
                         {":"}
                      <input placeholder='00' className=' border w-10 pl-2 border-gray-400 bg-white rounded-lg   outline-none' type="text" />
                      {/*AM and PM */}
                        <div className='w-18 flex gap-2 border pl-2 border-gray-400 bg-white rounded-lg '>
                             <button className='text-sm cursor-pointer'>AM</button>
                             <button className='text-sm cursor-pointer'>PM</button>
                        </div>
                     
                   </div>
                {/*End Time */}
                   <div className='flex mt-4 ml-4 gap-2'>
                      <span className=''>End Time</span>
                     <input placeholder='12' className=' border w-10 pl-2 border-gray-400 bg-white rounded-lg   outline-none'  type="text" />
                         {":"}
                      <input placeholder='00' className=' border w-10 pl-2 border-gray-400 bg-white rounded-lg   outline-none' type="text" />
                       {/*AM and PM */}
                        <div className='w-18 flex gap-2 border pl-2 border-gray-400 bg-white rounded-lg '>
                             <button className='text-sm cursor-pointer'>AM</button>
                             <button className='text-sm cursor-pointer'>PM</button>
                        </div>
                   </div>
            </div>
             
          </div>
       
     </div>
</div>

  )
}

export default Additem