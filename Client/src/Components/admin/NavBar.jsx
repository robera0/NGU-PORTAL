import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faBars, faExpand } from '@fortawesome/free-solid-svg-icons'
import { faSearch,faBell,faGear,faMessage ,faMoon} from '@fortawesome/free-solid-svg-icons'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { useAdmin } from '../../Context/adminContext'
const NavBar = () => {
  const{down,setDown,setrightSlide,setChatSlide,notify,setNotify}=useAdmin()
  const handleDownToggle=()=>setDown(prev=>!prev)
  const handleRightSlide=()=>setrightSlide(prev=>!prev)
  const handleChatSlide=()=>setChatSlide(prev=>!prev)
  const handleNotification=()=>setNotify(prev=>!prev)
  return (
    <div className=''>
        <div className='flex fiexed'>
            {/*header */}
        
            <div className='w-screen '>
                <div className=' bg-purple-700 pl-5 h-18 flex justify-between items-center text-white'>
                     <div className=' flex space-x-3 '>
                    <FontAwesomeIcon onClick={handleDownToggle} className={`${down ? 'text-xl  mt-2': 'text-3xl'} cursor-pointer  transition-all duration-100`} icon ={down? faArrowRightLong :faBars}/>
                   <h1 className='font-bold text-3xl'>Dashboard</h1>
                   </div>
                 {/**icons */}
                 <div className='mr-10 flex space-x-3'>
                      <div className=' bg-purple-500 w-10 h-12 justify-center flex items-center  rounded-lg  cursor-pointer hover:bg-purple-400 transition'>
                            <FontAwesomeIcon className='text-lg' icon ={faSearch}/>    
                            </div>
                        <div className=' bg-purple-500 w-10 h-12 justify-center flex items-center rounded-lg  cursor-pointer hover:bg-purple-400 transition'>
                            <button className='w-full h-full cursor-pointer' onClick={handleRightSlide}>
                               <FontAwesomeIcon  className='text-lg' icon ={faCodeBranch}/>    
                            </button>  
                            </div>
                             <div className=' bg-purple-500 w-10 h-12 justify-center flex items-center rounded-lg  cursor-pointer hover:bg-purple-400 transition'>
                              <button className='w-full h-full cursor-pointer' >
                                 <FontAwesomeIcon className='text-lg' icon ={faMoon}/>
                                </button>    
                            </div>
                             <div className=' bg-purple-500 w-10 h-12 justify-center flex items-center rounded-lg  cursor-pointer hover:bg-purple-400 transition'>
                             <button className='w-full h-full cursor-pointer'>
                               <FontAwesomeIcon className='text-lg' icon ={faExpand}/> 
                             </button>                             
                            </div>
                             <div className=' bg-purple-500 w-10 h-12 justify-center flex items-center rounded-lg  cursor-pointer hover:bg-purple-400 transition'>
                              <button className='w-full h-full cursor-pointer' onClick={handleChatSlide}>
                                 <FontAwesomeIcon className='text-lg' icon ={faMessage}/>    
                                </button>                            
                            </div>
                             <div className=' bg-purple-500 w-10 h-12 justify-center flex items-center rounded-lg  cursor-pointer hover:bg-purple-400 transition'>
                              
                              <button className='relative w-full h-full cursor-pointer' onClick={handleNotification}>
                                 <FontAwesomeIcon className='text-lg' icon ={faBell}/>
                                  <div className='absolute  top-3 right-3 w-2 h-2 rounded-full bg-red-700 animate-ping'></div>    
                              </button>                          
                            </div>
                             <div className=' bg-purple-500 w-10 h-12 justify-center flex items-center rounded-lg  cursor-pointer hover:bg-purple-400 transition'>
                              <button className='w-full h-full cursor-pointer' >
                                  <FontAwesomeIcon className='text-lg' icon ={faGear}/>    
                              </button>
                            </div>
                            {/*profile */}
                             <div 
                             style={{backgroundImage: `url("/defaultUser.jpg")` }}
                             className=' bg-purple-500 w-12 h-12 flex items-center rounded-lg  cursor-pointer hover:bg-purple-400 transition bg-cover'>
                            </div>
                 </div>
                </div>
             </div>
            </div>
        </div>
  )
} 

export default NavBar