import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAdmin } from "../../Context/adminContext";
import SideBar from '../admin/SideBar'
import NavBar from '../admin/NavBar'
import { useState } from 'react';
import { faPlus, faSearch, faPhone, faEnvelope, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from '@tanstack/react-query';
import RightSideBar from './RightSideBar';
import Chat from '../admin/Chat';
import useComponentVisible from "./useComponentVisible";
 
const Students = () => {
   const{down,filtered,setFiltered,rightSlide,setChatSlide,chatslide}=useAdmin()
     const [open, setOpen] = useState(false);
     const [page, setPage] = useState(1);
     const [selected, setSelected] = useState("Newest");
     const[search,setSearch]= useState("")
      const { ref } = useComponentVisible(() => setChatSlide(false));
  const options = ["Newest", "Oldest", "Recent"];

   const fethStudent=async()=>{
   const res = await fetch('http://localhost:8000/api/students')
        if (!res.ok) throw new Error('Failed to fetch');
    return res.json()
  }
    const {data:stud,isFetchingStudents,Studentserror}=useQuery({
      queryKey:['student'],
      queryFn:fethStudent,
    })
 
  const handleFilter=()=>{

 const filteredStud = Array.isArray(stud) 
  ?  stud.filter((s) =>
        search === "" ||
        s.firstname.toLowerCase().includes(search.toLowerCase()) ||
        s.address.toLowerCase().includes(search.toLowerCase()) ||
        String(s.enrollment.gpa).includes(search)
      )
    : [];
setFiltered(filteredStud)
}
const totalPage=Array.isArray(stud) && stud.map(s=>{
  return s
})
const studentPerPage = 7;
const startIndex=(page-1) *studentPerPage;
const paginatedStudents=stud?.slice(startIndex,startIndex+studentPerPage);
const handleInoutSearch=(e)=>setSearch(e.target.value)

  return (
    <div className="bg-[#E6EBEE] flex  min-h-screen">   
      <div className='w-full'>
        <div className={` ${down && 'w-full lg-w-[10%]'}lg:fixed w-full lg:w-[15%] transition-all duration-300 `}>
          <SideBar />
        </div>
      </div>
      <div className={`${down && "w-full lg:w-[97%]"} w-full lg:w-[86%] transition-all duration-100`}>
            <NavBar/>
                  <div className="ml-8 pl-4 mt-10 w-[95%] bg-white flex justify-around items-center rounded-xl py-5 shadow">
                      <div className="w-full  h-full flex justify-between ">
                        {/*Search input */}
                           <div>
                            <div className="relative flex">
                               <button onClick={handleFilter} className='w-full h-full'>
                                <FontAwesomeIcon className="absolute top-3 left-3 transition-all text-lg text-purple-700" icon={faSearch} />
                               </button>
                            <input
                             className=" pl-10 border  border-solid px-4 py-2 outline-none  rounded-md "
                            onChange={handleInoutSearch}
                             type="text"
                            placeholder='Search here ..' />
                            </div>
                           
                           </div>
                            {/*Buttons  */}

                            <div className="flex mr-4 space-x-3">
                                  <div className="relative w-35">
                                  <button
                                    onClick={() => setOpen(!open)}
                                    className="w-full px-4 py-2 border border-solid border-gray-400 text-black rounded-md"
                                  >
                                    {selected}
                                  </button>

                                  {open && (
                                    <ul className="absolute w-full mt-1 bg-white rounded-md shadow-lg">
                                      {options.map((opt) => (
                                        <li
                                          key={opt}
                                          onClick={() => {
                                            setSelected(opt);
                                            setOpen(false);
                                          }}
                                          className="px-4 py-2 cursor-pointer hover:bg-purple-600 hover:text-white rounded-md"
                                        >
                                          {opt}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                               <div className=' relative flex px-5 text-white bg-purple-500  cursor-pointer hover:bg-purple-400 transition border rounded-md '>
                                 <FontAwesomeIcon className="absolute pl-3 top-3 left-1  transition-all text-xs " icon={faPlus} />
                                <button className='pl-5 cursor-pointer'>New Student</button>
                               </div>       
                            </div>

                            
                      </div>
                  </div>
                  {/*Student Table */}
                    <div className="ml-8 mt-10 w-[95%] bg-white rounded-md shadow">
          <table className="min-w-full text-lg text-left border-spacing-y-2">
            <thead className="bg-purple-100 text-[#552bcb]">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Parent name</th>
                <th className="px-6 py-4">City</th>
                 <th className="px-6 py-4">contact</th>
                  <th className="px-6 py-4">grade</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 font-medium">
               {!stud && (
          <span className="font-semibold text-red-500 text-lg">No Students</span>
        )}
        { isFetchingStudents && (
          <span className="font-semibold text-blue-500 text-lg">Loading...</span>
        )}
              {search !== "" ? 
                 <>
                  {filtered?.map((fil, idx) => (
                  <tr key={idx} className="bg-white rounded-lg ">
                    <td className="px-6 py-4">{fil.firstname}</td>
                    <td className="px-6 py-4">{fil.student_id}</td>
                    <td className="px-6 py-4">March 25, 2023</td>
                    <td className="px-6 py-4">{fil.emergency_contact}</td>
                    <td className="px-6 py-4">{fil.address}</td>
                    <td className="px-6 py-4"> 
                       <div className='flex space-x-2'>
                          <div className="w-6 h-6 rounded-full bg-purple-500 flex justify-center items-center">
                              <button>
                                <FontAwesomeIcon className="text-sm text-white" icon={faPhone} />
                                </button>
                          </div>
                            <div className="w-6 h-6 rounded-full bg-purple-500 flex justify-center items-center">
                               <button>
                                   <FontAwesomeIcon className="text-sm text-white" icon={faEnvelope} />
                                 </button>
                         </div>
                       </div>
                    </td>
                    <td className="px-6 py-4">{fil.enrollment.gpa} </td>
                  </tr>
                ))}
                 </>
              : <>
                { paginatedStudents?.map((s, idx) => (
                  <tr key={idx} className="bg-white rounded-lg ">
                    <td className="px-6 py-4">{s.firstname}</td>
                    <td className="px-6 py-4">{s.student_id}</td>
                    <td className="px-6 py-4">March 25, 2023</td>
                    <td className="px-6 py-4">{s.emergency_contact}</td>
                    <td className="px-6 py-4">{s.address}</td>
                    <td className="px-6 py-4"> 
                       <div className='flex space-x-2'>
                          <div className="w-6 h-6 rounded-full bg-purple-500 flex justify-center items-center">
                              <button>
                                <FontAwesomeIcon className="text-sm text-white" icon={faPhone} />
                                </button>
                          </div>
                            <div className="w-6 h-6 rounded-full bg-purple-500 flex justify-center items-center">
                               <button>
                                   <FontAwesomeIcon className="text-sm text-white" icon={faEnvelope} />
                                 </button>
                         </div>
                       </div>
                    </td>
                    <td className="px-6 py-4">{s.enrollment.gpa} </td>
                  </tr>
                ))
                }
              </>}
            </tbody>
          </table>
        </div>
         <div className=' w-[80%] mt-4 pl-10'>
            <div className='flex justify-between'>
                <div>
                  <p className='text-gray-500'>showing {page} to 15 of {totalPage.length} entries</p>
                </div>
               <div className='flex space-x-5'>
                 <button 
                 disabled={page === 1}
                  className="px-3 py-1 hover:bg-purple-700 hover:text-white  text-purple-700 rounded disabled:opacity-50"
                 onClick={()=> setPage(page -1 )}> <FontAwesomeIcon className="text-lg" icon={faAngleLeft} /></button>
                <div className='px-5 py-1 rounded-md bg-purple-700 text-white'>
                   <h1 className='font-bold text-xl'>{page}</h1>
                </div>  
                 <button
                 disabled={paginatedStudents == ""}
                 className="px-3 py-1 hover:bg-purple-700 hover:text-white  text-purple-700 rounded disabled:opacity-50"
                 onClick={()=> setPage(page +1 )}> <FontAwesomeIcon className="text-lg " icon={faAngleRight} /></button>
               </div>
            </div>
          </div>
      </div>
          {/*Right Side Bar */}
      <div className={`fixed w-full absolute  z-14  left-440 ${rightSlide && 'transform -translate-x-100 '} h-400px transition duration-500 ease-in-out `}>
         <div className=" h-screen ">
        <RightSideBar />
      </div>       
      </div>
      <div
          className={`fixed w-full absolute z-10 left-440 ${
            chatslide && "transform -translate-x-100"
          } h-400px transition duration-500 ease-in-out`}
            >
         <div  ref={ref} className=" w-full h-screen ">
        <Chat />
      </div>
       
      </div>
    </div>
  )
}

export default Students