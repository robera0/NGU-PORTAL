import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGraduationCap,
  faCreditCard,
  faPen,
  faSheetPlastic,
  faLinesLeaning,
  faMessage,
  faCalendar
} from '@fortawesome/free-solid-svg-icons'
import { faBox } from '@fortawesome/free-solid-svg-icons/faBox'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket'
import { Link, useLocation } from 'react-router-dom'

const SideBar = () => {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <div className='h-screen bg-[#AF89EA] flex flex-col justify-center items-center py-6 px-2 rounded-4xl'>
      {/* Logo */}
      <div className='rounded-2xl w-16 h-16 md:w-34 md:h-34 bg-[#8C59DC] flex items-center justify-center mb-6'>
        <FontAwesomeIcon className='text-white text-2xl md:text-8xl' icon={faGraduationCap} />
      </div>

      {/* Navigation */}
      <div className='flex flex-col justify-center items-center w-full gap-4'>
        {/* Dashboard */}
        <Link to="/home" className='w-full flex justify-center'>
          <div className={`flex items-center justify-center gap-3 px-4 h-12 rounded-2xl text-white transition-all duration-300 transform 
            ${isActive("/") ? "bg-[#8200DB] -translate-x-2 shadow-xl" : "hover:bg-[#8200DB]"}`}>
            <FontAwesomeIcon icon={faBox} />
            <span className='hidden md:inline'>Dashboard</span>
          </div>
        </Link>

        {/* Payment Info */}
        <Link to="/paymentinfo" className='w-full flex justify-center'>
          <div className={`flex items-center justify-center gap-3 px-4 h-12 rounded-2xl text-white transition-all duration-300 transform 
            ${isActive("/paymentinfo") ? "bg-[#8200DB] -translate-x-2 shadow-xl" : "hover:bg-[#8200DB]"}`}>
            <FontAwesomeIcon icon={faCreditCard} />
            <span className='hidden md:inline'>Payment Info</span>
          </div>
        </Link>

        {/* Registration */}
        <Link to="/registeration" className='w-full flex justify-center'>
          <div className={`flex items-center justify-center gap-3 px-4 h-12 rounded-2xl text-white transition-all duration-300 transform 
            ${isActive("/registeration") ? "bg-[#8200DB] -translate-x-2 shadow-xl" : "hover:bg-[#8200DB]"}`}>
            <FontAwesomeIcon icon={faPen} />
            <span className='hidden md:inline'>Registration</span>
          </div>
        </Link>

        {/* Courses */}
        <Link to="/courses" className='w-full flex justify-center'>
          <div className={`flex items-center justify-center gap-3 px-4 h-12 rounded-2xl text-white transition-all duration-300 transform 
            ${isActive("/courses") ? "bg-[#8200DB] -translate-x-2 shadow-xl" : "hover:bg-[#8200DB]"}`}>
            <FontAwesomeIcon icon={faSheetPlastic} />
            <span className='hidden md:inline'>Courses</span>
          </div>
        </Link>

        {/* Result */}
        <Link to="/result" className='w-full flex justify-center'>
          <div className={`flex items-center justify-center gap-3 px-4 h-12 rounded-2xl text-white transition-all duration-300 transform 
            ${isActive("/result") ? "bg-[#8200DB] -translate-x-2 shadow-xl" : "hover:bg-[#8200DB]"}`}>
            <FontAwesomeIcon icon={faLinesLeaning} />
            <span className='hidden md:inline'>Result</span>
          </div>
        </Link>

        {/* Notice */}
        <Link to="/notice" className='w-full flex justify-center'>
          <div className={`flex items-center justify-center gap-3 px-4 h-12 rounded-2xl text-white transition-all duration-300 transform 
            ${isActive("/notice") ? "bg-[#8200DB] -translate-x-2 shadow-xl" : "hover:bg-[#8200DB]"}`}>
            <FontAwesomeIcon icon={faMessage} />
            <span className='hidden md:inline'>Notice</span>
          </div>
        </Link>

        {/* Schedule */}
        <Link to="/schedule" className='w-full flex justify-center'>
          <div className={`flex items-center justify-center gap-3 px-4 h-12 rounded-2xl text-white transition-all duration-300 transform 
            ${isActive("/schedule") ? "bg-[#8200DB] -translate-x-2 shadow-xl" : "hover:bg-[#8200DB]"}`}>
            <FontAwesomeIcon icon={faCalendar} />
            <span className='hidden md:inline'>Schedule</span>
          </div>
        </Link>

        {/* Log Out */}
        <Link to="/" className='w-full flex justify-center'>
          <div className={`flex items-center justify-center gap-3 px-4 h-12 rounded-2xl text-white transition-all duration-300 transform 
            ${isActive("/log in") ? "bg-[#8200DB] -translate-x-2 shadow-xl" : "hover:bg-[#8200DB]"}`}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span className='hidden md:inline'>Log out</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SideBar
