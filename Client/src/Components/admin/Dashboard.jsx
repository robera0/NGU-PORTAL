import { useState} from "react";
import { useQuery } from "@tanstack/react-query";
import "react-calendar/dist/Calendar.css";
import NavBar from "../admin/NavBar";
import Calendar from "react-calendar";
import SideBar from "../admin/SideBar";
import "./calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faLocation,
  faUserTie,
  faAngleLeft, 
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";
import { ResponsiveBar } from "@nivo/bar";
import { useAdmin } from "../../Context/adminContext";
import RightSideBar from "./RightSideBar";
import Chat from "../admin/Chat";
import useComponentVisible from "./useComponentVisible";
import Notification from "./Notification";
const Dashboard = () => {
    const [page, setPage] = useState(1);
    const [date, setDate] = useState(new Date());
    const{down,rightSlide,setChatSlide,chatslide,notify}=useAdmin()
     const { ref } = useComponentVisible(() => setChatSlide(false));
    
     const fetchTeachers = async () => {
       const res = await fetch('http://localhost:8000/api/teachers');
       if (!res.ok) throw new Error('Failed to fetch');
       return res.json();
     };
     
     const { data:teacher} = useQuery({
       queryKey: ['teachers'],
       queryFn: fetchTeachers, 
     });

  const totalPage=Array.isArray(teacher) && teacher?.map(teach=>{
  return teach
})

  const data = [
    { name: "Week 1", uv: 400, pv: 2400, amt: 2400 },
    { name: "Week 2", uv: 300, pv: 2210, amt: 2290 },
    { name: "Week 3", uv: 200, pv: 2290, amt: 2000 },
    { name: "Week 4", uv: 278, pv: 2000, amt: 2181 },
    { name: "Week 5", uv: 189, pv: 2181, amt: 2500 },
  ];

  const MyChart = () => (
    <div className="w-full h-full">
      <LineChart
        width={610}
        height={270}
        data={data}
        margin={{ top: 5, right: 30, bottom: 5, left: 0 }}
      >
        <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="purple"
          strokeWidth={2}
          name="My data series name"
        />
        <XAxis dataKey="name" />
        <YAxis
          width={40}
          label={{ value: "", position: "insideLeft", angle: -90 }}
        />
        <Legend align="right" />
        <Tooltip />
      </LineChart>
    </div>
  );

  const barData = [
   
  {
    id: "S001",
    name: "Alice Johnson",
    age: 20,
    grade: "Sophomore",
    math: 88,
    science: 92,
    english: 85,
  },
  {
    id: "S002",
    name: "Ethan Smith",
    age: 21,
    grade: "Junior",
    math: 75,
    science: 81,
    english: 79,
  },
  {
    id: "S003",
    name: "Sophia Brown",
    age: 19,
    grade: "Freshman",
    math: 91,
    science: 89,
    english: 94,
  },
  {
    id: "S004",
    name: "Michael Lee",
    age: 22,
    grade: "Senior",
    math: 84,
    science: 76,
    english: 88,
  },
  {
    id: "S005",
    name: "Olivia Davis",
    age: 20,
    grade: "Sophomore",
    math: 95,
    science: 90,
    english: 93,
  },
  {
    id: "S006",
    name: "Daniel Wilson",
    age: 21,
    grade: "Junior",
    math: 70,
    science: 68,
    english: 72,
  },
  {
    id: "S007",
    name: "Emma Garcia",
    age: 19,
    grade: "Freshman",
    math: 89,
    science: 94,
    english: 91,
  },

 ];

const MyBar = () => (
  <div className="w-full h-full">
    <ResponsiveBar
      data={barData}
      keys={["math", "science", "english"]} 
      indexBy="name" 
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={["#2f90f1ff", "#d9acacff", "#aa4be6e1"]}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisBottom={{
        legend: "Students",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        legend: "Scores",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          translateX: 120,
          itemsSpacing: 3,
          itemWidth: 100,
          itemHeight: 16,
        },
      ]}
    />
  </div>
);


  const teacherpage = 6
  const startindex = (page -1) *  teacherpage
  const paginatedTeachers= teacher?.slice(startindex,startindex+teacherpage)
  return (
    <div className="bg-[#E6EBEE] flex justify-between   min-h-screen">  
      {/*side Bar */} 
      <div className='w-full h-400px'>
         <div className={` ${down ? "w-full lg:w-[10%]" : "w-full lg:w-[15%]"} lg:fixed h-screen transition-all duration-300`}>
        <SideBar />
      </div>
      </div>
      {/*Main Header */}
      <div className={`${down && "w-full z-10 lg:w-[97%]"}   w-full lg:w-[86%] transition-all duration-100`}>
              <div className="z-20 sticky top-0 bg-white shadow">
                  <NavBar />
                </div>
             <div className={`${notify ?"opacity-100 bg-white z-14" :"opacity-0 z-0"} w-70 fixed translate-x-250  transition-all duration-300 ease-in-out`}>
              <Notification/> 
             </div>
            {/* Info Cards */}
      <div className="ml-8 pl-4 mt-10 w-[95%] bg-white flex justify-around items-center rounded-xl py-5 shadow">
        {/* Students */}
        <div className="flex gap-4">
          <div className="w-16 h-16 rounded-full bg-purple-500 flex justify-center items-center">
            <FontAwesomeIcon className="text-3xl text-white" icon={faUserTie} />
          </div>
          <div>
            <h1 className="font-bold text-lg text-purple-600">Student</h1>
            <h1 className="font-bold text-2xl text-gray-500">91K</h1>
          </div>
        </div>
        
        {/* Teachers */}
        <div className="flex  gap-4">
          <div className="w-16 h-16 rounded-full bg-orange-500 flex justify-center items-center">
            <FontAwesomeIcon
              className="text-3xl text-white"
              icon={faLocation}
            />
          </div>
          <div>
            <h1 className="font-bold text-lg text-purple-600">Teacher</h1>
            <h1 className="font-bold text-2xl text-gray-500">91K</h1>
          </div>
        </div>
        {/* Events */}
        <div className="flex gap-4">
          <div className="w-16 h-16 rounded-full bg-yellow-500 flex justify-center items-center">
            <FontAwesomeIcon
              className="text-3xl text-white"
              icon={faCalendar}
            />
          </div>
          <div>
            <h1 className="font-bold text-lg text-purple-600">Events</h1>
            <h1 className="font-bold text-2xl text-gray-500">91K</h1>
          </div>
        </div>
      </div>

      {/* Graphs */}
      <div className="flex flex-wrap gap-10">
        <div className="ml-8 pl-4 mt-10 w-[45%] bg-white rounded-md p-4 shadow">
          <h1 className="font-bold mb-5 pt-3 text-purple-700">
            School Performance
          </h1>
          <MyChart />
        </div>
        <div className="ml-8 pl-4 mt-10 w-[45%] bg-white flex justify-around items-center rounded-md p-4 shadow">
          <MyBar />
        </div>
      </div>

      {/* Tables */}
      <div className="flex gap-5">
        {/* Calendar */}
        <div className="ml-8 pl-4 h-full mt-10 w-[25%] bg-white flex justify-around items-center rounded-md shadow">
          <div className="p-5 w-full h-full">
            <p className="font-bold mb-5 pt-3 text-xl text-purple-700">
              School Calendar
            </p>
            <Calendar className="border-none w-full" onChange={setDate} value={date} />
          </div>
        </div>
        {/* Teacher Detail */}
        <div className="ml-8 z-10 mt-10 w-[65%] h-full bg-white rounded-md shadow">
          <div>
            <p className="font-bold mb-5 pt-5 text-xl pl-4 text-purple-700">
              Teachers Detail
            </p>
          </div>
          <table className="min-w-full text-lg text-left border-spacing-y-2">
            <thead className="bg-purple-100 text-[#552bcb]">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Subject</th>
                <th className="px-6 py-4">Qualification</th>
                <th className="px-6 py-4">Fee</th>
                <th className="px-6 py-4">Performance</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 font-medium">
              {paginatedTeachers
                ?.map((teach, idx) => (
                  <tr key={idx} className="bg-white rounded-lg">
                      
                    <td className="px-6 py-4">{teach?.name}</td>
                    <td className="px-6 py-4">{teach?.subject}</td>
                    <td className="px-6 py-4">{teach?.title}</td>
                    <td className="px-6 py-4">$117.00</td>
                    <td className="px-6 py-4">
                      <p className="rounded-md w-25 h-8 text-sm text-[#1EBA62] flex justify-center items-center font-bold bg-[#DDFAEA]">
                        Good
                      </p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
              <div className=' mb-3 w-[80%] mt-2 pl-10'>
                      <div className='flex justify-between'>
                          <div>
                            <p className='text-gray-500'>showing {page} to 15 of {totalPage.length} entries</p>
                          </div>
                         <div className='flex  space-x-5'>
                           <button 
                           disabled={page === 1}
                            className="px-3 py-1 hover:bg-purple-700 hover:text-white  text-purple-700 rounded disabled:opacity-50"
                           onClick={()=> setPage(page -1 )}> <FontAwesomeIcon className="text-lg" icon={faAngleLeft} /></button>
                          <div className='px-6 py-1 rounded-md bg-purple-700 text-white'>
                             <h1 className='font-bold text-xl'>{page}</h1>
                          </div>  
                           <button
                           disabled={paginatedTeachers == ""}
                           className="px-3 py-1 hover:bg-purple-700 hover:text-white  text-purple-700 rounded disabled:opacity-50"
                           onClick={()=> setPage(page +1 )}> <FontAwesomeIcon className="text-lg " icon={faAngleRight} /></button>
                         </div>
                      </div>
                    </div>
        </div> 
      </div>

      {/* Unpaid Student Intuition */}
      <div className="ml-8 mt-10 w-[93%] mb-10 bg-white rounded-md ">
        <div>
          <p className="font-bold mb-5 pt-5 text-xl pl-4 text-purple-700">
            Unpaid Students
          </p>
        </div>
        <table className="min-w-full text-lg text-left border-spacing-y-2">
          <thead className="bg-purple-100 text-[#552bcb]">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Class</th>
              <th className="px-6 py-4">Fee</th>
              <th className="px-8 py-4">Rank</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-800  font-medium">
            {Array(5)
              .fill(null)
              .map((_, idx) => (
                <tr key={idx} className="bg-white rounded-lg ">
                  <td className="px-6 flex space-x-4 py-4">
                    <div style={{backgroundImage: `url("/defaultUser.jpg")` }}
                             className=' bg-purple-500 w-8 h-8 flex items-center rounded-lg bg-cover'></div>
                    <p className="text-purple-700 font-bold flex justify-center items-center">Jordan Nico</p>
                    </td>
                  <td className="px-6 py-4">ST-{idx + 1}23</td>
                 <td className="px-6 py-4 flex space-x-4">
                      <div className="w-8 h-8 rounded-full bg-purple-500 flex justify-center items-center">
                        <FontAwesomeIcon className="text-xl text-white" icon={faUserTie} />
                      </div>
                      <p>Class {idx + 1}</p>
                    </td>
                  <td className="px-6 py-4 font-bold text-purple-700">$117.00</td>
                  <td className="px-6 py-4">
                    <span className="px-6 py-4  text-gray-500">first</span>
                  </td>
                  <td className="px-6 py-4">
                    <button className=" w-25 h-8 bg-red-500 text-white rounded-md hover:bg-red-400">
                      Pay
                    </button>
                  </td>
                </tr>           
              ))}
          </tbody>   
        </table>
         <p className="text-gray-500 mb-5 pl-4 ">showing 1 to 5 fo 10 entries</p> 
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
  );
};

export default Dashboard;
