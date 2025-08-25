import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Notification = () => {
  const date = new Date();
  const dayNum = date.getUTCDate();
  const Month = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  const monthName = Month[date.getUTCMonth()];
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

  return (
    <div className="scroll-box flex flex-col w-70 max-h-[500px] gap-3 shadow-xl pt-4 pl-2 relative">
      {/* Notifications list */}
      <div className="space-y-3 pb-12">
        <div className="w-full">
          <h1 className="text-lg text-purple-700 font-bold pl-3">Notification</h1>
        </div>

        {/* Example notification item (repeated) */}
        <div className="flex border-b mt-4 items-center gap-2 border-b-gray-400 pb-2">
          <div
            className="w-12 h-12 border border-purple-400 bg-cover rounded-md bg-orange-500 flex justify-center items-center"
            style={{ backgroundImage: `url("/defaultUser.jpg")` }}
          ></div>
          <div className="flex flex-col justify-center">
            <h1 className="font-semibold text-md">Dr sultads send you photo</h1>
            <p className="text-gray-400 text-sm">
              {`${dayNum} ${monthName} ${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()} ${ampm}`}
            </p>
          </div>
        </div>
          <div className="flex border-b mt-4 items-center gap-2 border-b-gray-400 pb-2">
          <div
            className="w-12 h-12 border border-purple-400 bg-cover rounded-md bg-orange-500 flex justify-center items-center"
            style={{ backgroundImage: `url("/defaultUser.jpg")` }}
          ></div>
          <div className="flex flex-col justify-center">
            <h1 className="font-semibold text-md">Report created successfully</h1>
            <p className="text-gray-400 text-sm">
              {`${dayNum} ${monthName} ${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()} ${ampm}`}
            </p>
          </div>
        </div>
          <div className="flex border-b mt-4 items-center gap-2 border-b-gray-400 pb-2">
          <div
            className="w-12 h-12 border border-purple-400 bg-cover rounded-md bg-orange-500 flex justify-center items-center"
            style={{ backgroundImage: `url("/defaultUser.jpg")` }}
          ></div>
          <div className="flex flex-col justify-center">
            <h1 className="font-semibold text-md">Reminder :Treatment Time ! </h1>
            <p className="text-gray-400 text-sm">
              {`${dayNum} ${monthName} ${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()} ${ampm}`}
            </p>
          </div>
        </div>
          <div className="flex border-b mt-4 items-center gap-2 border-b-gray-400 pb-2">
          <div
            className="w-12 h-12 border border-purple-400 bg-cover rounded-md bg-orange-500 flex justify-center items-center"
            style={{ backgroundImage: `url("/defaultUser.jpg")` }}
          ></div>
          <div className="flex flex-col justify-center">
            <h1 className="font-semibold text-md">Dr sultads send you photo</h1>
            <p className="text-gray-400 text-sm">
              {`${dayNum} ${monthName} ${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()} ${ampm}`}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar (sticky instead of fixed) */}
    <div className="flex sticky bottom-0 w-full h-12 justify-center items-center bg-white border-t border-gray-300">
        <button className="flex items-center text-purple-700 font-semibold text-sm hover:underline">
            See all notifications
            <FontAwesomeIcon className="ml-2 text-xs" icon={faArrowRight} />
        </button>
        </div>
    </div>
  );
};

export default Notification;
