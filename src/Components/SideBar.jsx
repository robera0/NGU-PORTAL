import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faSheetPlastic } from '@fortawesome/free-solid-svg-icons'
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons'
import { faLinesLeaning } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faBox } from '@fortawesome/free-solid-svg-icons/faBox'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket'
import { Link,useLocation } from 'react-router-dom'
import { useUser } from './userContext'
const SideBar = () => {


  
 const location = useLocation()

 const isActive=(path)=>location.pathname === path

 
  return (
    <div className='lg:h-screen flex flex-col text-white items-center overflow-hidden  bg-[#AF89EA]  rounded-4xl '>
        <div className=' rounded-2xl  mt-7 md:text-3xl sm:w-32 sm:h-32 md:shrink-0 bg-[#8C59DC] text-white flex justify-center items-center '>
              <FontAwesomeIcon
              className='sm:h-48  md:text-8xl sm:text-6xl'
              icon={faGraduationCap} />   
        </div>
        <div className='mt-8 flex flex-col tet-gray-200 '>
            {/*Dashboard*/}
            <Link to="/" className={` ${isActive("/") && "bg-[#8200DB] -translate-2"} mt-7 gap-2 flex items-center justify-center  cursor-pointer w-42 h-10  hover:bg-[#8200DB] -translate-2  rounded-2xl  transition-all duration-800`}>
              <div>
                  <FontAwesomeIcon icon={faBox} />
              </div>
             <span >Dashboard </span>
            </Link>
              {/*Payment info*/}
           <Link to="/paymentinfo" className='mt-8 gap-2 flex items-center justify-center  cursor-pointer w-42 h-10  hover:bg-[#8200DB] -translate-2  rounded-2xl  transition-all duration-800'>
               <div>
                   <FontAwesomeIcon icon={faCreditCard} />
              </div>
              
              <span> Payment info</span>
                      
           </Link>

              {/*Registration */}
              
            <Link to="/registeration" 
            className= {`${isActive("/registeration") &&"bg-[#8200DB] -translate-2" } rounded-2xl  transition-all duration-800 mt-7 gap-2 flex items-center justify-center  cursor-pointer w-42 h-10  hover:bg-[#8200DB] -translate-2  rounded-2xl  transition-all duration-800`}>  
                 <div>
                     <FontAwesomeIcon icon={faPen} />
                 </div>
             <span> Registration</span>
                
            </Link>
              {/*courses*/}
             <Link to="/courses" className={` ${isActive("/courses") &&"bg-[#8200DB] -translate-2" }  mt-7 gap-2 flex items-center justify-center  cursor-pointer w-42 h-10  hover:bg-[#8200DB] -translate-2  rounded-2xl  transition-all duration-800`}>
              <div>
                <FontAwesomeIcon icon={faSheetPlastic} />
              </div>
             
                  <span>Courses</span>
            
            </Link>
              {/*Drop Semester*/}
            <Link to="/dropsemester" className={`${isActive("/dropsemester") &&"bg-[#8200DB] -translate-2" } mt-7 gap-2 flex items-center justify-center  cursor-pointer w-42 h-10  hover:bg-[#8200DB] -translate-2  rounded-2xl  transition-all duration-800`}>
                 <div>
                    <FontAwesomeIcon icon={faSquareXmark} />
                 </div>
             <span>Drop Semester</span>
            </Link>
              {/*Result*/}
             <Link to='/result'  className={`${isActive("/result") &&"bg-[#8200DB] -translate-2" } mt-7 gap-2 flex items-center justify-center  cursor-pointer w-42 h-10  hover:bg-[#8200DB] -translate-2  rounded-2xl  transition-all duration-800`}>
               <div>
                <FontAwesomeIcon icon={faLinesLeaning} />
               </div>
             <span >Result</span>
            </Link>
              {/*Notice*/}
             <Link to='/notice' className={`${isActive("/notice") &&"bg-[#8200DB] -translate-2" } mt-7 gap-2 flex items-center justify-center  cursor-pointer w-42 h-10  hover:bg-[#8200DB] -translate-2  rounded-2xl  transition-all duration-800`}>
                 <div>
                    <FontAwesomeIcon icon={faMessage} />
                 </div>
             <span>Notice</span>
            </Link >
              {/*Schedule*/}
             <Link  to='/schedule' className={`${isActive("/schedule") &&"bg-[#8200DB] -translate-2" } mt-7 gap-2 flex items-center justify-center  cursor-pointer w-42 h-10  hover:bg-[#8200DB] -translate-2  rounded-2xl  transition-all duration-800`}>
                 <div>
                    <FontAwesomeIcon icon={faCalendar}/>
                 </div>
             <span>Schedule</span>
            </Link>
              {/*Logout */}
            <Link to='/log in' className='mt-5 gap-2 flex items-center justify-center  cursor-pointer w-42 h-10  hover:bg-[#8200DB] -translate-2  rounded-2xl  transition-all duration-800'>
              <div>
                <FontAwesomeIcon icon={faRightFromBracket} />
              </div>
              <span>Log out</span>
            </Link>
            
        </div>
    </div>
  )
}

export default SideBar