import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faExpand } from '@fortawesome/free-solid-svg-icons'
import { faSearch,faBell,faGear,faMessage ,faMoon,faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
const NavBar = () => {
  return (
    <div>
        <div className='flex  mt- gap-18'>
            {/*header */}
              <div className='flex pl-5  justify-center items-center'>
                <div className='flex space-x-5 '>
                 <FontAwesomeIcon className='text-5xl text-purple-700' icon ={faGraduationCap}/>
                  <h1 className='text-5xl w-[40%]  font-bold  text-purple-700'>
                     NGU 
                   </h1>
             </div>
              </div>
          
            <div className='w-screen '>
                <div className=' bg-purple-700 pl-5 h-18 flex justify-between items-center text-white'>
                     <div className=' flex space-x-3 '>
                    <FontAwesomeIcon className='text-3xl' icon ={faBars}/>
                   <h1 className='font-bold text-3xl'>Dashboard</h1>
                   </div>
                 {/**icons */}
                 <div className='mr-10 flex space-x-3'>
                      <div className=' bg-purple-500 w-10 h-12 justify-center flex items-center  rounded-lg  cursor-pointer hover:bg-purple-400 transition'>
                            <FontAwesomeIcon className='text-lg' icon ={faSearch}/>    
                            </div>
                        <div className=' bg-purple-500 w-10 h-12 justify-center flex items-center rounded-lg  cursor-pointer hover:bg-purple-400 transition'>
                            <FontAwesomeIcon className='text-lg' icon ={faCodeBranch}/>    
                            </div>
                             <div className=' bg-purple-500 w-10 h-12 justify-center flex items-center rounded-lg  cursor-pointer hover:bg-purple-400 transition'>
                            <FontAwesomeIcon className='text-lg' icon ={faMoon}/>    
                            </div>
                             <div className=' bg-purple-500 w-10 h-12 justify-center flex items-center rounded-lg  cursor-pointer hover:bg-purple-400 transition'>
                            <FontAwesomeIcon className='text-lg' icon ={faExpand}/>    
                            </div>
                             <div className=' bg-purple-500 w-10 h-12 justify-center flex items-center rounded-lg  cursor-pointer hover:bg-purple-400 transition'>
                            <FontAwesomeIcon className='text-lg' icon ={faMessage}/>    
                            </div>
                             <div className=' bg-purple-500 w-10 h-12 justify-center flex items-center rounded-lg  cursor-pointer hover:bg-purple-400 transition'>
                            <FontAwesomeIcon className='text-lg' icon ={faBell}/>    
                            </div>
                             <div className=' bg-purple-500 w-10 h-12 justify-center flex items-center rounded-lg  cursor-pointer hover:bg-purple-400 transition'>
                            <FontAwesomeIcon className='text-lg' icon ={faGear}/>    
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