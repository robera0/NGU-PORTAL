import SideBar from "./SideBar"
import NavBar from './NavBar'
import Tools from "./Tools"
import Table from "./Table"
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
          {/*schduel info */}
            <div className="mt-10">
              <h1 className="text-[#552bcb] text-4xl font-bold">Schedule maker</h1>
              <p className="mt-5 w-[70%] font-semibold text-gray-400 ">Create a weekly schedule for your class in our schedule builder!
                  When you're done, you can print your schedule, or save it onto your computer for later. You can also export your schedule, so that if you drop or add courses later, you can simply modify your old schedule to accommodate the changes.
                  Need 24-hour time or want to set Sunday as the first day of the week? Click the Settings button in the upper-right corner of the scheduler to access additional calendar drawing options. Don't worry if you have classes on the weekends or before/after the times on the schedule, as the schedule maker will automatically resize to fit those times as you add them.</p>
                              </div>
                    
                {/*schedule table */}

                <div className="flex flex-wrap">
                    {/*tools */}
                     <Tools/>
                  {/*Table */}
                     <Table/>
                  
                </div>
         </div>
         </div>
  )
}

export default Schedule