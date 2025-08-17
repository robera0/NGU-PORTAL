import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { useSchedule } from '../../Context/Scheduler';
import FileLoader from '../../Inputs/FileLoader';

const ViewAssign = () => {
  const { setView, newAssign } = useSchedule();

  const handleCloseViewAssign = () => {
    setView(false);
  };

  const Record = Array.isArray(newAssign) ? newAssign.length : 0;

  return (
    <div className='bg-white border border-purple-100 rounded shadow-md p-6 max-h-full overflow-x-hidden overflow-y-auto'>
      <div className='flex justify-between border-t-rounded items-center w-250 h-20 bg-purple-100 px-4 py-2 '>
        <span className='text-center text-2xl'>Assigments</span>
        <button onClick={handleCloseViewAssign} className='text-gray-600 bg-red-400 px-2 py-2 rounded-xl cursor-pointer hover:text-red-500'>
          <FontAwesomeIcon className='text-white' icon={faXmark} />
        </button>
      </div>

      {/* Instructor & Course Info */}
      {Array.isArray(newAssign) && newAssign.length > 0 ? (
        <div className='flex flex-wrap space-x-5'>
          <div className='bg-[#f3eaff] ml-10 w-[40%] mt-10 rounded-2xl h-25 px-6 py-4'>
            <h1 className='font-semibold text-gray-400 text-sm'>Instructor</h1>
            <h3 className='text-md font-bold'>{newAssign[0]?.instructor}</h3>
          </div>
          <div className='bg-[#f3eaff] ml-10 w-[40%] mt-10 rounded-2xl h-25 px-6 py-4'>
            <h1 className='font-semibold text-gray-400 text-sm'>Course</h1>
            <h3 className='text-md font-bold'>{newAssign[0]?.course_name}</h3>
          </div>
        </div>
      ) : (
        <div className='flex flex-wrap space-x-5'>
          <div className='bg-[#f3eaff] ml-10 w-[40%] mt-10 rounded-2xl h-25 px-6 py-4'>
            <h1 className='font-semibold text-gray-400 text-sm'>Instructor</h1>
            <h3 className='text-sm text-gray-700'><FileLoader /></h3>
          </div>
          <div className='bg-[#f3eaff] ml-10 w-[40%] mt-10 rounded-2xl h-25 px-6 py-4'>
            <h1 className='font-semibold text-gray-400 text-sm'>Course</h1>
            <h3 className='text-sm text-gray-700'><FileLoader /></h3>
          </div>
        </div>
      )}

      {/* Coursework Table */}
      <div className='mt-10 font-bold text-2xl'>
        <h1>Course Work</h1>
        <div className='  w-full bg-purple-100 px-4 py-2 mt-4'>
          <div className='flex justify-between items-center space-x-2 text-purple-700 cursor-pointer hover:text-purple-900'>
            <FontAwesomeIcon icon={faRotateRight} className='text-lg' />
            <span className='text-sm font-medium'>{Record} Records</span>
          </div>
        </div>

        <table className='w-full text-lg text-left border-separate border-spacing-y-2 mt-4'>
          <thead className='bg-purple-100 text-[#552bcb]'>
            <tr>
              <th className='px-6 py-4'>ID</th>
              <th className='px-6 py-4'>Assignment</th>
              <th className='px-6 py-4'></th>
            </tr>
          </thead>

          {/* ✅ Fixed Mapping Starts Here */}
          <tbody className='text-gray-800 font-medium'>
            {Array.isArray(newAssign) && newAssign.length > 0 ? (
              newAssign.map((ass, courseIndex) =>
                ass.type?.map((at, index) => (
                  <tr key={`${courseIndex}-${index}`} className='bg-white rounded-lg'>
                    <td className='flex flex-col px-6 py-4'>{index + 1}</td>
                    <td className='px-6 py-4'>{at.title}</td>
                    <td className='px-6 py-4'>
                      <button className='bg-purple-700 px-10 text-white font-bold rounded-md cursor-pointer hover:bg-purple-500'>
                        More info
                      </button>
                    </td>
                  </tr>
                ))
              )
            ) : (
              <tr>
                <td colSpan='3' className='text-center px-6 py-4'>
                  <FileLoader />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAssign;
