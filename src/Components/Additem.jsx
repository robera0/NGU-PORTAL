import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useSchedule } from '../Context/Scheduler';
import { useState } from 'react'; 

const Additem = () => {
  const Days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  const {
    setCourseTitle, setStartmin, setEndMin, courseTitle,
    setAddItems, color, setColor, setStart, startTime,
    setEnd, setAm, setPm, setCourseType, setInstructor,
    setLocation, AllInfo, setAllInfo, setAddContent,
    startMin, endtime, endMin, Am 
  } = useSchedule();

  const [courseTabActive, setCourseTabActive] = useState(true);
  const [eventsTabActive, setEventsTabActive] = useState(false);

  const handleCloseAddItems = () => setAddItems(false);
  const handleCourseTitleChange = (e) => setCourseTitle(e.target.value);
  const handleColorChange = (e) => setColor(e.target.value);
  const handleStartTimeChange = (e) => setStart(e.target.value);
  const handleStartMinChange = (e) => setStartmin(e.target.value);
  const handleEndTimeChange = (e) => setEnd(e.target.value);
  const handleEndMinChange = (e) => setEndMin(e.target.value);
  const handleAmPmSelection = (value) => {
    setAm(value); 
    setPm(value); 
  };
  const handleCourseTypeChange = (e) => setCourseType(e.target.value);
  const handleInstructorChange = (e) => setInstructor(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);

  const handleChecking = (e, dayValue) => {
  
    const newEntry = {
      "course_Title": courseTitle,
      "start_Time": `${startTime}:${startMin}`,
      "end_Time": `${endtime}:${endMin}`,
      "time": Am,
      "color":color
    }

    if (e.target.checked) {
      setAllInfo((prevAllInfo) => {
        const existingEntries = prevAllInfo[dayValue] ? [...prevAllInfo[dayValue]] : [];
        return {
          ...prevAllInfo,
          [dayValue]: [...existingEntries, newEntry],
        };
      });
    } 
  };

  const handleAddCourse = () => {
    localStorage.setItem("student", JSON.stringify(AllInfo));
    setAddContent(true); 
    console.log("Current AllInfo after adding course:", AllInfo);
    setAddItems(false)
  };

  const handleCourseTabClick = () => {
    setCourseTabActive(true);
    setEventsTabActive(false);
  };

  const handleEventsTabClick = () => {
    setEventsTabActive(true);
    setCourseTabActive(false);
  };

  return (
    <div className='ml-40 mt-10 bg-white border border-purple-100 h-180 rounded shadow-md'>
      <div className='flex justify-between border-t-rounded items-center w-90 bg-purple-100 px-4 py-2 '>
        <span className='text-center'>Add Item</span>
        <button onClick={handleCloseAddItems} className='text-gray-600 cursor-pointer hover:text-red-500'>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>

      <div className='mt-3 ml-10 flex justify-between border-t-rounded items-center w-60 bg-purple-100 px-4 py-1 '>
        <button
          onClick={handleCourseTabClick}
          className={`w-1/2 border-r border-white cursor-pointer duration-300 hover:bg-[#8200DB] hover:text-white ${
            courseTabActive ? 'bg-[#8200DB] text-white' : ''
          }`}
        >
          Courses
        </button>
        <button
          onClick={handleEventsTabClick}
          className={`w-1/2 cursor-pointer duration-300 hover:bg-[#8200DB] hover:text-white ${
            eventsTabActive ? 'bg-[#8200DB] text-white' : ''
          }`}
        >
          Events
        </button>
      </div>

      {/*Main Content */}
      <div className='transform-all eas'>
        <div className='h-1 bg-purple-100 mt-4 ml-5 w-80 rounded-xl'></div>
        {courseTabActive ? (
          <div className='trnastition-800'>
            <div className='flex justify-around mt-3'>
              <div className='mt-4 space-y-7'>
                <div className='flex gap-6'>
                  <span>Course Title</span>
                  <input onChange={handleCourseTitleChange} value={courseTitle} className='border w-35 pl-3 border-gray-200 focus:border-purple-500 outline-none' type="text" />
                </div>
                <div className='flex gap-6'>
                  <span>Color</span>
                  <div>
                    <input onChange={handleColorChange} className={`order w-13 border-gray-200 focus:border-${color} outline-none`} type="color" value={color} />
                    <input className='w-20' type="text" value={color} readOnly /> 
                  </div>
                </div>
              </div>
            </div>

            {/*Meeting Time */}
            <div className='ml-5 mt-3 w-80 border border-purple-100 h-full rounded shadow-'>
              <div className='flex border-t-rounded bg-purple-100 px-4 py-2 '>
                <span className='text-center'>Meeting Time</span> 
              </div>
              <div className='bg-purple-100 w-74 h-50 rounded ml-3 mt-2'>
                <div className='flex ml-8 gap-5'>
                  {Days.map((day, index) => (
                    <div key={index} className='pt-2 h-full flex gap-2 flex-col '>
                      {day}
                      <input
                        onChange={(e) => handleChecking(e, day)}
                        className='all rounded-full'
                        type="checkbox"
                      />
                    </div>
                  ))}
                </div>
                {/*Start Time */}
                <div className='flex mt-4 ml-2 gap-2'>
                  <span>Start Time</span>
                  <input onChange={handleStartTimeChange} value={startTime} placeholder='12' className='border w-10 pl-2 border-gray-400 bg-white rounded-lg outline-none' type="text" />
                  {":"}
                  <input onChange={handleStartMinChange} value={startMin} placeholder='00' className='border w-10 pl-2 border-gray-400 bg-white rounded-lg outline-none' type="text" />
                  {/*AM and PM */}
                  <div className='w-18 flex gap-2 border pl-2 border-gray-400 bg-white rounded-lg '>
                    <button onClick={() => handleAmPmSelection("AM")} className={`text-sm cursor-pointer ${Am === "AM" ? 'font-bold' : ''}`}>AM</button>
                    <button onClick={() => handleAmPmSelection("PM")} className={`text-sm cursor-pointer ${Am === "PM" ? 'font-bold' : ''}`}>PM</button>
                  </div>
                </div>
                {/*End Time */}
                <div className='flex mt-4 ml-4 gap-2'>
                  <span>End Time</span>
                  <input onChange={handleEndTimeChange} value={endtime} placeholder='12' className='border w-10 pl-2 border-gray-400 bg-white rounded-lg outline-none' type="text" />
                  {":"}
                  <input onChange={handleEndMinChange} value={endMin} placeholder='00' className='border w-10 pl-2 border-gray-400 bg-white rounded-lg outline-none' type="text" />
                  {/*AM and PM */}
                  <div className='w-18 flex gap-2 border pl-2 border-gray-400 bg-white rounded-lg '>
                    <button onClick={() => handleAmPmSelection("AM")} className={`text-sm cursor-pointer ${Am === "AM" ? 'font-bold' : ''}`}>AM</button>
                    <button onClick={() => handleAmPmSelection("PM")} className={`text-sm cursor-pointer ${Am === "PM" ? 'font-bold' : ''}`}>PM</button>
                  </div>
                </div>
              </div>

              <div className='bg-purple-100 mb-2 w-74 full rounded ml-3 mt-2'>
                <div className='pt-4 pl-3 space-y-2'>
                  <div className='flex flex-wrap gap-2'>
                    <span>Course Type</span>
                    <input onChange={handleCourseTypeChange} placeholder='optional (ex.lab)' className='border w-35 pl-3 border-gray-200 bg-white rounded-lg focus:border-purple-500 outline-none' type="text" />
                  </div>
                  <div className='flex flex-wrap gap-8'>
                    <span>Instructor</span>
                    <input onChange={handleInstructorChange} placeholder='optional ' className='border w-35 pl-3 border-gray-200 bg-white rounded-lg focus:border-purple-500 outline-none' type="text" />
                  </div>
                  <div className='flex flex-wrap gap-10'>
                    <span>Location</span>
                    <input onChange={handleLocationChange} placeholder='optional' className='mb-2 border w-35 pl-3 border-gray-200 bg-white rounded-lg focus:border-purple-500 outline-none' type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className='group flex flex-wrap justify-center items-center cursor-pointer hover:text-white'>
              <button onClick={() => alert('Add another meeting logic goes here!')} className='w-70 h-8 mt-4 border rounded-lg font-bold text-purple-200 shadow-md group-hover:bg-[#8200DB] hover:text-white cursor-pointer duration-300 '>Add Another Meeting</button>
            </div>
            <div className='group flex flex-wrap justify-center items-center cursor-pointer hover:text-white'>
              <button onClick={handleAddCourse} className='w-30 h-8 mt-4 rounded-lg font-bold bg-purple-200 text-black group-hover:bg-[#8200DB] hover:text-white cursor-pointer duration-300 '>Add Course</button>
            </div>
          </div>
        ) : (
          <div className='transition-300'> 
            {/* Events section*/}
            <div className='flex justify-around mt-3'>
              <div className='mt-4 space-y-3'>
                <div className='flex gap-6'>
                  <span>Event name </span>
                  <input className='border w-35 pl-3 border-gray-200 focus:border-purple-500 outline-none' type="text" />
                </div>
                <div className='flex gap-6'>
                  <span>Color</span>
                  <div>
                    <input onChange={handleColorChange} className={`order w-13 border-gray-200 focus:border-${color} outline-none`} type="color" />
                    <input className='w-20' type="text" value={color} readOnly />
                  </div>
                </div>
              </div>
            </div>

            {/* Event Time */}
            <div className='ml-5 mt-3 w-80 border border-purple-100 h-full rounded shadow-'>
              <div className='flex border-t-rounded bg-purple-100 px-4 py-2 '>
                <span className='text-center'>Event Time</span>
              </div>
              <div className='bg-purple-100 w-74 h-50 rounded ml-3 mt-2'>
                <div className='flex ml-8 gap-5'>
                  {Days.map((day, index) => (
                    <div key={index} className='pt-2 h-full flex gap-2 flex-col '>
                      {day}
                      <input type="checkbox" />
                    </div>
                  ))}
                </div>
                {/*Start Time */}
                <div className='flex mt-4 ml-2 gap-2'>
                  <span>Start Time</span>
                  <input placeholder='12' className='border w-10 pl-2 border-gray-400 bg-white rounded-lg outline-none' type="text" />
                  {":"}
                  <input placeholder='00' className='border w-10 pl-2 border-gray-400 bg-white rounded-lg outline-none' type="text" />
                  {/*AM and PM */}
                  <div className='w-18 flex gap-2 border pl-2 border-gray-400 bg-white rounded-lg '>
                    <button className='text-sm cursor-pointer'>AM</button>
                    <button className='text-sm cursor-pointer'>PM</button>
                  </div>
                </div>
                {/*End Time */}
                <div className='flex mt-4 ml-4 gap-2'>
                  <span>End Time</span>
                  <input placeholder='12' className='border w-10 pl-2 border-gray-400 bg-white rounded-lg outline-none' type="text" />
                  {":"}
                  <input placeholder='00' className='border w-10 pl-2 border-gray-400 bg-white rounded-lg outline-none' type="text" />
                  {/*AM and PM */}
                  <div className='w-18 flex gap-2 border pl-2 border-gray-400 bg-white rounded-lg '>
                    <button className='text-sm cursor-pointer'>AM</button>
                    <button className='text-sm cursor-pointer'>PM</button>
                  </div>
                </div>
              </div>

              <div className='bg-purple-100 mb-2 w-74 full rounded ml-3 mt-2'>
                <div className='pt-4 pl-3 space-y-2'>
                  <div className='flex flex-wrap gap-10'>
                    <span>Location</span>
                    <input placeholder='optional' className='mb-2 border w-35 pl-3 border-gray-200 bg-white rounded-lg focus:border-purple-500 outline-none' type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className='group flex flex-wrap justify-center items-center cursor-pointer hover:text-white'>
              <button className='w-70 h-8 mt-4 border rounded-lg font-bold text-purple-200 shadow-md group-hover:bg-[#8200DB] hover:text-white cursor-pointer duration-300 '>Add Another Event Time</button>
            </div>
            <div className='group flex flex-wrap justify-center items-center cursor-pointer hover:text-white'>
              <button className='w-50 h-8 mt-24 rounded-lg font-bold bg-purple-200 text-black group-hover:bg-[#8200DB] hover:text-white cursor-pointer duration-300 '>Add Event</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Additem;