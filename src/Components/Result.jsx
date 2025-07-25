import SideBar from "./SideBar"
import NavBar from './NavBar'
import { useUser } from "./userContext"

const Result = () => {

     const{ImageUrl}= useUser()
  
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
          {/*the Courses  */}
               <div className="flex gap-10">
             
               <div  className="flex flex-col w-[75%] mt-6">
                    <table className="min-w-[900px] text-lg text-left shadow-lg border-separate border-spacing-y-2">
                      <thead className="bg-purple-100 text-[#552bcb]">
                        <tr>
                          <th className="px-6 py-4">Course Code</th>
                          <th className="px-6 py-4">Course Title</th>
                          <th className="px-6 py-4">Credit</th>
                          <th className="px-6 py-4">Grade</th>
                            <th className="px-6 py-4">Grade Point</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-800 font-medium">
                        <tr className="bg-white rounded-lg shadow-sm">
                          <td className="px-6 py-4">CS101</td>
                          <td className="px-6 py-4">Introduction to Computer Science</td>
                          <td className="px-6 py-4">3</td>
                          <td className="px-6 py-4">A+</td>
                           <td className="px-6 py-4">4</td>
                        </tr>
                        <tr className="bg-white rounded-lg shadow-sm">
                          <td className="px-6 py-4">MA102</td>
                          <td className="px-6 py-4">Calculus I</td>
                          <td className="px-6 py-4">4</td>
                          <td className="px-6 py-4">A+</td>
                           <td className="px-6 py-4">4</td>
                        </tr>
                        <tr className="bg-white rounded-lg shadow-sm">
                          <td className="px-6 py-4">ENG103</td>
                          <td className="px-6 py-4">Academic Writing</td>
                          <td className="px-6 py-4">2</td>
                          <td className="px-6 py-4">B+</td>
                           <td className="px-6 py-4">3</td>
                        </tr>
                        <tr className="bg-white rounded-lg shadow-sm">
                          <td className="px-6 py-4">ECN201</td>
                          <td className="px-6 py-4">Advanced DataBase</td>
                          <td className="px-6 py-4">4</td>
                          <td className="px-6 py-4">A-</td>
                           <td className="px-6 py-4">4</td>
                        </tr>
                         <tr className=" text-[#552bcb]">
                          <td className="px-6 py-4" colSpan={2}>Total Credit Requirement</td>
                          <td className="px-6 py-4" >Total Credit Taken</td>
                          <td className="px-6 py-4" >CGPA</td>
                          </tr>
                      </tbody>
                    </table>
                    </div>
             {/*status Checker */}
                <div className="w-[20%] shadow-xl border-spacing-y-2 mt-6 border border-purple-300 rounded-xl">
                   <p className="flex justify-center items-center text-sm text-[#8200DB] font-semibold mt-3 text-center">
                                  You have completed 11 quizzes this semester
                                </p>

                       
                       <div className="w-60 h-60 border-[15px] border-[#F3E8FF] rounded-full mt-6 ml-5 flex justify-center items-center text-center">
                                        <div className="flex flex-col justify-center items-center">
                                          <p className="text-lg font-bold text-[#8200DB]">11/12</p>
                                          <p className="text-sm font-bold text-[#8200DB]">Quiz Completed</p>
                                        </div>
                                  </div>
                          <div className="mt-3 mb-5 w-[70%] bg-[#F3E8FF] rounded-2xl shadow-md flex flex-col justify-center items-center text-center mx-auto">
                                        <div className="w-full pt-3 pb-2  border-b border-white">
                                          <p className="text-sm font-bold text-[#8200DB]">Average mark 13/15</p>
                                        </div>
                                        <div className="mt-2 mb-2">
                                          <p className="text-sm font-bold text-[#8200DB]">Score top 10%</p>
                                        </div>
                                      </div>
                        </div>
                </div>
                 {/*Student infos */}
                <div className="flex flex-wrap mt-10 gap-6  h-screeen ">
                     <div className="flex  -mt-4 w-[40%] flex-wrap pt-5  shadow-2xl inset-shadow-2xs border-t-purple-500 border-spacing gap-16">
                          <div
                              className=" ml-5 rounded-full "
                            > 
                            <img className="w-30 h-30  rounded-full overflow-hidden bg-center bg-cobg-center bg-cover bg-no-repeatver bg-no-repeat" src={ImageUrl} alt="" />

                            </div>

                           <div>
                              <div>
                                 <h3 className="text-[#8200DB] font-semibold">Student Basic info</h3>
                                <p className="text-sm text-gray-500">New Generation University</p>
                              </div>

                              <div className="mt-3 mb-5  space-y-2">
                                <h3>Name</h3>
                                <h3>Department</h3>
                                <h3>Student Id</h3>
                                <h3>Enrollemnt</h3>
                                <h3>Batch</h3>

                              </div>
                             
                           </div>
                        
                     </div>
                     {/*Overall performance */}

                       <div className="  w-[50%] -mt-4 h-screeen shadow-2xl inset-shadow-2xs border-t-purple-500 border-spacing ">
                         
                           <div className=" flex justify-center text-[#552bcb] h-10 items-center text-center bg-purple-100">
                             <h1 className=" text-[#552bcb] font-bold">Your overall performance This semester</h1>
                           </div>
                        <div className="flex flex-wrap">

                           <div className="w-[50%] h-full text-gray-800 space-y-5 pt-2 pl-2  border-gray-500  border-r">
                                 <div className=" border-b border-gray-400">
                                        <h1>Class Attendance</h1>
                                 </div>
                                  
                                  <div className=" border-b border-gray-400">
                                      <h1>Quiz</h1>
                                  </div>

                                    <div className=" border-b border-gray-400">
                                         <h1>Assignment submitted</h1>
                                    </div>
                             
                                     <div>
                                      <h1 >Presentation Completed</h1>
                                     </div>
                                
                          </div>
 
                            <div className="w-[50%] flex justify-center h-full ">
                                 <div className="w-40 h-40 border-[15px] border-[#E1D3F5] rounded-full mt-3 ml-5 flex justify-center items-center text-center">
                                        <div className="flex flex-col justify-center items-center">
                                          <p className="text-lg font-bold text-[#8200DB]">90%</p>
                                          <p className="text-sm font-bold text-[#8200DB]">Marks Achieved</p>
                                        </div>
                                  </div>
   
                            </div>
                        </div>

                          
                       </div>

                      
                </div>
        </div>
         </div>
            
  )
}

export default Result