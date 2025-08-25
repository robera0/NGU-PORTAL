import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGraduationCap,
  faUserTie,
  faBowlFood,
  faFile,
  faN,
  faHome
} from '@fortawesome/free-solid-svg-icons'
import { faBox } from '@fortawesome/free-solid-svg-icons/faBox'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useAdmin } from '../../Context/adminContext'

const DropdownItem = ({ icon, label, subLinks }) => {
  const [open, setOpen] = useState(false)
   const {down}=useAdmin()
     const isActive = (path) => location.pathname === path


  return (
    <div className="w-full  flex flex-col">
      {/* Main Button */}
     <button
        onClick={() => setOpen((prev) => !prev)}
        className={`flex items-center gap-3 px-2 h-12 rounded-2xl text-white transition-all duration-300 transform
           ${isActive("/") ? "bg-[#8200DB] -translate-x-2 shadow-xl" : "hover:bg-[#8200DB]"}
          ${open ? "bg-[#6a00b5] -translate-x-2 " : "hover:bg-[#6a00b5]"}
          ${down ? "justify-center" : "justify-start ml-2"}`}
      >
        <FontAwesomeIcon className="transition-all text-lg" icon={icon} />
        {!down && <span className="transition">{label}</span>}
      </button>

      {/* Submenu */}
      <div
        className={`mt-2 ml-6 z-40 w-40 bg-purple-700 rounded text-white transition-all duration-300 ease-in-out overflow-hidden 
          ${open ? "max-h-400 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
      >
        <ul className="py-2 space-y-1">
          {subLinks.map((s, idx) => (
            <li key={idx}>
              <Link to={s.path} className="block px-4 py-1 hover:bg-purple-600 rounded">
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const SideBar = () => {
   const {down}=useAdmin()

  return (
    <div className={` bg-[#8200DB] flex flex-col pt-5 space-y-10 py-6 px-2
           ${down ?'w-20 h-screen ':' h-screen w-60'}
`}>
      {/* Logo */}
      <div className="flex justify-center space-x-5">
        <FontAwesomeIcon className={`${down ? 'text-2xl bg-white text-purple-700' :'text-4xl text-white'} `} icon={down ? faN :faGraduationCap} />
        <h1 className={`${down &&'opacity-0'} text-3xl w-[40%] font-bold text-white`}>NGU</h1>
      </div>

      {/* Navigation */}
      <div className="flex flex-col justify-center items-center w-full gap-4">
        {/* Dashboard */}
         <Link to="/dashboard" className="w-full flex justify-start ml-2">
          <button
            className={`flex justify-start items-center gap-3 px-2 h-12 rounded-2xl text-white hover:bg-[#6a00b5] transition-all duration-300 transform
          ${down ? "justify-center" : "justify-center"}`}
          >
            <FontAwesomeIcon className="transition-all text-lg" icon={faHome} />
            {!down && <span className="transition">Dashboard</span>}
          </button>
        </Link>
        {/* Students Dropdown */}
        <DropdownItem
          icon={faGraduationCap}
          label="Students"
          subLinks={[
            { label: "Student", path: "/students" },
            { label: "Student Detail", path: "/students/details" },
            { label: "Add Student", path: "/students/add" }
          ]}
        />
        {/* Teachers Dropdown */}
        <DropdownItem
          icon={faUserTie}
          label="Teachers"
          subLinks={[
            { label: "Teacher", path: "/teachers" },
            { label: "Teacher Detail", path: "/teachers/details" },
            { label: "Add Teacher", path: "/teachers/add" }
          ]}
        />

        {/* Food Dropdown */}
        <DropdownItem
          icon={faBowlFood}
          label="Food"
          subLinks={[
            { label: "Menu", path: "/food/menu" },
            { label: "Orders", path: "/food/orders" }
          ]}
        />

        {/* File Manager */}
        
        <DropdownItem
          icon={faFile}
          label="FileManager"
          subLinks={[
            { label: "file Manager", path: "/FileManager/" },
            { label: "User", path: "/FileManager/User" },
            { label: "Calender", path: "/FileManager/Calender" },
            { label: "chat", path: "/FileManager/chat" },
            { label: "Activity", path: "/FileManager/Activity"}
          ]}
        />
          
        

        {/* Log Out */}
        <Link to="/" className="w-full flex ">
          <button
          className={`flex justify-start ml-2  gap-3 px-2 h-12 rounded-2xl text-white hover:bg-[#6a00b5] transition-all duration-300 transform
          ${down ? "justify-center" : "justify-center"}`}
      >
        <FontAwesomeIcon className="transition-all text-lg" icon={faRightFromBracket} />
        {!down && <span className="transition">Logout</span>}
      </button>
        </Link>
      </div>
    </div>
  )
}

export default SideBar
