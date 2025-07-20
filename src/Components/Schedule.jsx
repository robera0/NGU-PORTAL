import SideBar from "./SideBar"
import NavBar from './NavBar'
const Schedule = () => {
     
const Courses = ["Introduction to Computer Science","Calculus I","Academic Writing","Advanced DataBase"]
const CourseCode=["CS101","MA102","ENG103","ECN201"]
 

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
         </div>
         </div>
         </div>
  )
}

export default Schedule