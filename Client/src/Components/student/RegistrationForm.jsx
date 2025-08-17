import SideBar from '../student/SideBar'
import NavBar from '../student/NavBar'
import { useUser } from './userContext'
const RegistrationForm = () => {
const {isFormValid,setFormValid}=useUser()
  return (
    <div className='flex'>
      {/* Sidebar */}
      <div className='lg:w-[17%] ml-5 mt-2 h-screen'>
        <div className="fixed w-[15%]">
          <SideBar />
        </div>
      </div>
      {/* Main Content */}
       <div className=' h-full w-[85%]'>
         <div className='mt-8'>
            <NavBar/>
         </div>
       
         <div className='mt-2 border-t border-t-[#8200DB] w-[98%] mt-10 shadow-2xl pl-4 rounded-xl flex flex-col overflow-y-auto'>
        {/* Header */}
       
      </div>

       </div>
      
    </div>
  )
}

export default RegistrationForm
