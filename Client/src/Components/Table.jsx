import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { useSchedule } from '../Context/Scheduler'

const Table = () => {
  const Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  
  const { color, subtitle, setSubtitle, AllInfo } = useSchedule(); 

  const handleSubtitle = (e) => setSubtitle(e.target.value);

  // Generate time (2:00 to 10:30)
  let hr = 2;
  let min = 0;
  const arrtime = [];

  while (hr <= 10) {
    const all = `${hr}:${min === 0 ? "00" : min}`;
    arrtime.push(all);

    min += 30;
    if (min === 60) {
      min = 0;
      hr++;
    }
  }

  return (
    <div className="w-full md:w-[90%] mx-auto mt-10 border-2 border-purple-100 space-y-5 shadow-xl p-4">

      {/* Header Section */}
      <div className='flex flex-wrap gap-5 items-center justify-between h-auto bg-purple-100 p-3 rounded-md'>
        <h1 className='text-2xl font-bold text-[#8200DB]'>NGCU</h1>

        <input
          type="text"
          placeholder='Schedule Title'
          onChange={handleSubtitle}
          className='h-10 w-full sm:w-[300px] bg-white rounded-md border border-gray-400 focus:border-purple-500 outline-none text-center text-sm sm:text-base'
        />

        {/* Settings */}
        <div className='group flex items-center gap-2 cursor-pointer hover:bg-[#8200DB] hover:text-white duration-300 rounded-md p-2'>
          <FontAwesomeIcon className='text-[#8200DB] group-hover:text-white text-2xl' icon={faGear} />
          <button className='text-[#8200DB] text-base font-bold group-hover:text-white'>Settings</button>
        </div>
      </div>

      {/* Subtitle */}
      <div className='text-center pt-3 font-bold text-xl text-[#552BCB]'>
        {subtitle}
      </div>

      {/* Schedule Table */}
      <div className='w-full bg-purple-200 border border-white rounded-md shadow-md p-4 overflow-x-auto'>
        <div className='flex'>
          {/* Time Column */}
          <div className='w-24 pr-4'>
            {arrtime.map((time, index) => (
              <div key={index} className='py-2 text-center border-b text-sm text-[#552BCB] font-semibold'>
                {time}
              </div>
            ))}
          </div>

          {/* Day Columns */}
          <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            {Days.map((day, index) => {
              const slicedDay = day.slice(0, 3);
              const dailyEntries = AllInfo[slicedDay] || [];

              return (
                <div key={index} className="flex flex-col bg-white p-3 rounded-md shadow-sm">
                  <span className="text-center text-lg font-semibold text-[#552BCB] mb-2">{day}</span>
                  {dailyEntries.length > 0 ? (
                    dailyEntries.map((entry, entryIdx) => (
                      <div
                        key={entryIdx}
                        className="min-h-[6rem] text-white flex items-center justify-center rounded-md p-3 mb-2"
                       style={{ backgroundColor:entry.color|| "purple", whiteSpace: 'normal', overflowWrap: 'break-word' }}
                      >
                        <div className="text-sm text-center flex flex-col space-y-1 w-full px-2 break-words">
                          <ul className="list-none p-0 m-0 text-left">
                            <li><strong>{entry.course_Title}</strong></li> 
                            <li>{entry.start_Time} - {entry.end_Time} </li>
                          </ul>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div
                      className="min-h-[6rem] bg-[#8200DB] text-white flex items-center justify-center rounded-md p-3"
                      style={{ whiteSpace: 'normal', overflowWrap: 'break-word' }}
                    >
                      <p className="text-gray-300">No class</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
