import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGear} from '@fortawesome/free-solid-svg-icons'
import { useSchedule } from '../Context/Scheduler'


const Table = () => {
    const Days =["Monday","Tuesday","Wednesday","Thursday","Friday"]

    const{subtitle,setSubtitle}=useSchedule()
    const handleSubtitle=(e)=>setSubtitle(e.target.value)
   
    return (
   <div className=" w-[82%] mt-20  h-full  border-2  border-purple-100 space-y-5 shadow-xl  "> 
                
    <div className='flex flex-wrap gap-15   h-16 bg-purple-100'>
         <div  className='flex text-[#8200DB] text-xl font-bold items-center pl-2' >
            <h1 className='font-bold text-2xl flex text-center text-[#8200DB]' >NGCU</h1>
         </div>
            <div>
             <input type="text" 
                placeholder='Schedule Title'
                
                onChange={handleSubtitle}
                className=' h-10 w-172 mt-2 flex justify-center items-center text-center  bg-white  rounded-md border border-gray-400   focus:border-purple-500  outline-none'/>
            </div>
            {/*setting */}
            <div className='group flex gap-3 cursor-pointer hover:bg-[#8200DB] hover:text-white duration-300 rounded-md'>
                <div className='flex items-center pl-3' >
                             <FontAwesomeIcon className='text-[#8200DB] group-hover:text-white cursor-pointer text-2xl' icon={faGear} />
                           </div>
                             <div className='flex w-26 text-[#8200DB] text-xl font-bold items-center '>
                                 <button className=' group-hover:text-white cursor-pointer hover:'>Settings</button>
                             </div>
                          
            </div>

    </div>

          {/*Date for the schedule */}
          <div className='ml-10 mt-5 w-[94%] h-1000 border border-white bg-purple-200 rounded-md shadow-md '>
             <div className=' pt-5 flex flex-wrap justify-center items-center font-bold text-2xl text-[#552BCB]'>
                         {subtitle}
                      </div> 
               <div className=' pt-10 flex flex-wrap gap-22 text-xl font-bold text-[#552BCB]'>
                     <div className='w-28 pt-5 border-r border-white'>
                          
                     </div>
                     
                {Days.map((day,index)=>
                (
                   <div key={index} className='h-full'>
                     {day}
                     </div>
                ))}
               </div>
          </div>
   </div>
  )
}

export default Table 