import NavBar from "./NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Input from "../Inputs/Input";
import IdInput from "../Inputs/IdInput";
import { useState } from "react";
import Loader from "../Inputs/Loading";

const Payment_info = () => {
  const date = new Date();
  const Month = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  const monthName = Month[date.getMonth()];
  const MonthNum = date.getMonth() - 1;
  const Year = date.getFullYear();

  const [paymentList, setPaymentList] = useState([]);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [History, setHistory] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);

  const handleAmount = (e) => {
    setPaymentAmount(e.target.value);
  };

  const handleClick = () => {
    const IntervalPayment = setInterval(() => {
      setIsLoading(true);
    }, 120);

    setTimeout(() => {
      clearInterval(IntervalPayment);
      setIsLoading(false);
      setPaymentList(prevList => [...prevList, paymentAmount].reverse());
    }, 4000);
  };

  const handleHistory = () => {
    setHistory(prev => !prev);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className='fixed flex justify-center items-center rounded-r-full overflow-hidden w-80 h-full bg-[#AF89EA]'>
        <div>
          <h1 className="text-2xl font-bold text-white">School payment form</h1>
          <Link to='/' className='mt-10 flex gap-2 cursor-pointer  items-center justify-center w-42 h-10  hover:bg-[#8200DB]  rounded-2xl text-white text-xl transition-all duration-1000'>
            <FontAwesomeIcon icon={faRightFromBracket} flip="horizontal" />
            <span>Home</span>
          </Link>
        </div>
      </div>

      <div className="flex gap-20 w-screen flex-col">
        {!IsLoading ? (
          <>
            <div className='ml-55 mt-5'>
              <NavBar />
            </div>

            
            <div className="flex justify-center items-center mt-6">
              <h1 className="text-[#552bcb] text-4xl font-bold">Payment Info</h1>
            </div>

            {/* Input Section */}
            <div className="flex flex-col items-center gap-6 mt-8">
              <div className="flex gap-10">
                <Input />
                <IdInput />
              </div>

              <div className="flex gap-6 items-center">
                <label className="text-xl font-semibold text-gray-700">Balance:</label>
                <span className="text-xl font-bold text-green-600">200$</span>

                <input
                  type="number"
                  value={paymentAmount}
                  onChange={handleAmount}
                  className="border border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 w-32"
                  placeholder="Enter amount"
                />

                <button
                  onClick={handleClick}
                  className="bg-[#AF89EA] text-white px-6 py-2 rounded-lg font-bold hover:bg-purple-700 transition-all duration-300"
                >
                  Submit Payment
                </button>
              </div>
            </div>

           
            <div
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#AF89EA #f0f0f0',
              }}
              className={`relative  transition-all duration-700 ${
                History ? "h-72 w-[40%]" : "h-0 w-[40%]"
              } overflow-y-scroll rounded-lg bg-[#f9f5ff] shadow-md ml-[400px] scrollbar-thin scrollbar-thumb-[#AF89EA] scrollbar-track-gray-200`}
            >
              <h2 className="text-xl pl-5 pt-2 font-bold text-[#552bcb] mb-2">Recent Payments</h2>

              <ul className="list-disc list-inside space-y-1 text-gray-800 text-sm">
                {paymentList.map((pay, idx) => (
                  <li key={idx}>
                    {monthName} {MonthNum}, {Year} ..... <strong>{`${pay} birr`}</strong>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center mt-4">
              <button
                onClick={handleHistory}
                className="bg-[#AF89EA] text-white mb-10 px-6 py-2 rounded-lg font-bold hover:bg-purple-700 transition-all duration-300"
              >
                {History ? "Close History" : "See Payment History"}
              </button>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Payment_info;
