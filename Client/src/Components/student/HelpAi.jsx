import SideBar from "../student/SideBar"
import { Link } from "react-router-dom"
import NavBar from "../student/NavBar"
const HelpAi = () => {
  return (
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
    <div className="font semi-bold text-gray-500 mt-10 ">
          <p>⚠️ Student Use Disclaimer:
This AI tool is designed to assist your learning by summarizing, extracting information, and answering questions from documents. It should not replace your own studying or critical thinking. Use it as a guide, not a shortcut always read and understand the original material to fully grasp the concepts.</p>
         </div>
         <div>
             <Link to='/summarize' className="ml-10 mt-10 w-[300Px] h-[200px] flex flex-col justify-center  bg-purple-50  font-semibold text-purple-700 text-lg border-2 border-purple-500 rounded-2xl cursor-pointer shadow-[0_8px_10px_rgba(128,0,128,0.3)] hover:bg-purple-100  transform hover:scale-[1.01] transition-all duration-300"> 
                <h1 className="text-center items-center">SUMMARIZE</h1>
            </Link>
            
            <Link to='/q&a' className="ml-10 mt-10 w-[300Px] h-[200px] flex flex-col justify-center  bg-purple-50  font-semibold text-purple-700 text-lg border-2 border-purple-500 rounded-2xl cursor-pointer shadow-[0_8px_10px_rgba(128,0,128,0.3)] hover:bg-purple-100  transform hover:scale-[1.01] transition-all duration-300"> 
             <h1 className="text-center items-center">Q&A from Documents</h1>
            </Link>
                </div>
           </div>
         <div className="flex justify-end mr-30">
            <Link
                to="/courses"
                className="text-md text-white bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600 transition"
            >
            Back to courses
          </Link>
          </div>
    </div>
    </div>
  )
}

export default HelpAi