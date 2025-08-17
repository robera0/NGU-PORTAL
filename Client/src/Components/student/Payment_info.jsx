import NavBar from "../student/NavBar";
import html2pdf from 'html2pdf.js';
import Input from "../../Inputs/Input";
import IdInput from "../../Inputs/IdInput";
import { useState } from "react";
import Loader from "../../Inputs/Loading";
import SideBar from "../student/SideBar";
import { useQuery } from "@tanstack/react-query";
const Payment_info = () => {
  const date = new Date();
  const Month = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  const monthName = Month[date.getMonth()];
  const MonthNum = date.getUTCDate()
  const Year = date.getFullYear();

  const [paymentList, setPaymentList] = useState([]);
  const [paymentAmount, setPaymentAmount] = useState('');
  const[paymentFailed,setPaymenFailed]=useState(false)
  const [History, setHistory] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);

  const handleAmount = (e) => {
    setPaymentAmount(e.target.value);
  };
  const handleHistory = () => {
    setHistory(prev => !prev);
  };

  const handleDownloadPdf = async ()=>{  // to download a pdf for the couces fee
   
    const element =document.getElementById("main")
    html2pdf()
  .set({
    html2canvas: {
      scale: 3,        
      useCORS: true,    
      allowTaint: true  
    },
    jsPDF: {
      unit: 'in',
      format: 'a4',     
      orientation: 'portrait',
    },
    margin: 0.2,
    filename: 'payment.pdf',
  })
  .from(element)
  .save();
  }

  const fetchUser= async()=>{

    const res  =await  fetch('https://ngu-portal.onrender.com/api/courses')
  return res.json()
  }

  const {data:course,loadingCourses,courseserror}=useQuery({
    queryKey:["courses"],
    queryFn:fetchUser
  })

 const fee= course?.reduce((sum,c)=> sum + c.course_fee ,0) || "Calculating"
 
  const handleSubmit = (e) => {
     if(paymentAmount === "") {
        setPaymenFailed("dont leave it empty")
     }
     else if( paymentAmount != fee)  {
      setPaymenFailed(`you enterd ${paymentAmount} but you have to pay ${fee}`)
    }
     else{
           const IntervalPayment = setInterval(() => {
      setIsLoading(true);
    }, 120);

    setTimeout(() => {
      clearInterval(IntervalPayment);
      setIsLoading(false);
      setPaymentList(prevList => [...prevList, paymentAmount].reverse());
       e.preventDefault()
    }, 4000);
    setPaymenFailed("payment Successfull")
     }
 
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
    <div className='lg:w-[17%] ml-5 mt-2 h-screen'>
        <div className="fixed w-[15%]">
          <SideBar />
        </div>
      </div>

      <div className="flex gap-20 w-screen flex-col">
        {!IsLoading ? (
          <>
            <div className='ml-55 mt-5'>
              <NavBar />
            </div>

            
            <div className="flex flex-col justify-center items-center mt-6">
              <h1 className="text-[#552bcb] text-4xl font-bold">Payment Info</h1> 
                
            <div className="flex flex-col justify-center items-center  border w-[70%]  h-[200%] shadow-xl  border-purple-500   gap-15 mt-10">
               
                  <label className="text-[#552bcb] flex justify-center items-centeritems-center mt-9 text-2xl font-bold">Selcet Payment method</label>

                   <div className="flex flex-wrap gap-26">
                       {/*Telebirr */}
                        <div className=" cursor-pointer hover:border-2  hover:border-[#8200DB] rounded-xl gap-10 mb-10 w-40 h-20 duration-100">
                          <img src="/TeleBirr Logo.png" alt="" className="w-full h-full object-contain" /> 
                          <p>Tele Birr</p>
                        </div>
                        
                        
                        {/*CBE Bank */}

                           <div className=" cursor-pointer hover:border-2  hover:border-[#8200DB] rounded-xl gap-10 mb-10 w-40 h-20 duration-100">
                              <img src="/CBE Birr ( No background ) Logo.png" alt="" className="w-full h-full object-contain" /> 
                                <p>CBE Bank</p>
                        
                        </div>
                      
                        {/* Awash Bank */}

                          <div className=" cursor-pointer hover:border-2  hover:border-[#8200DB] rounded-xl gap-10 mb-10 w-40 h-20 duration-100">
                              <img src="/Awash International Bank Logo.png" alt="" className="w-full h-full object-contain" /> 
                              <p>Awash Bank</p>
                        </div>

                          {/*Abyssinia */}
                        <div className=" cursor-pointer hover:border-2  hover:border-[#8200DB] rounded-xl gap-10 mb-10 w-40 h-20 duration-100">
                          <img src="/Bank of Abyssinia Logo.png" alt="" className="w-full h-full object-contain" /> 
                          <p>Abyssinia</p>
                        </div>
                        
                        
                          </div>


            </div>
             
               
            </div>

            {/*fees of the Courses  */}
               <div id="main"  className="flex flex-col justify-center items-center mt-6">
                    <table className="min-w-[900px] text-lg text-left shadow-md border-separate border-spacing-y-2">
                      <thead className="bg-purple-100 text-[#552bcb]">
                        <tr>
                          <th className="px-6 py-4">Course Code</th>
                          <th className="px-6 py-4">Course Title</th>
                          <th className="px-6 py-4">Credit</th>
                          <th className="px-6 py-4">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-800 font-medium">
                           {courseserror ? <p>Error: {courseserror.message}</p> : null}
                        {!course? <p className="font-bold text-xl text-center text-red-400">No Courses</p>: null}
                        {loadingCourses? <p  className="font-bold text-xl text-blue-400">Loading...</p>: null}
                          {Array.isArray(course) ? course.map((c,indx)=>(
                             <tr key={indx} className="bg-white rounded-lg shadow-sm">
                               <td className="px-6 py-4">{c.course_id}</td>
                          <td className="px-6 py-4">{c.course_name}</td>
                          <td className="px-6 py-4">{c.credit_hours}</td>
                           <td className="px-6 py-4">{c.course_fee}</td>
                             </tr>

                          )):<>
                             <tr className="bg-white rounded-lg shadow-sm">
                               <td className="px-6 py-4"></td>
                          <td className="px-6 py-4"></td>
                          <td className="px-6 py-4"></td>
                          <td className="px-6 py-4"></td>
                           <td className="px-6 py-4"></td>
                             </tr>
                          </> }
                      </tbody>
                    </table>
                      <button
                  onClick={handleDownloadPdf}
                  className="bg-[#AF89EA] cursor-pointer text-white mt-10 px-6 py-2 rounded-lg font-bold hover:bg-purple-700 transition-all duration-300"
                >
               Download Pdf
                </button>
                  </div>



            {/*payment Method */}


            {/* Input Section */}
            <div className="flex flex-col items-center gap-6 mt-8">
              <div className="flex gap-10">
                <Input />
                <IdInput />
              </div>

              <div className="flex gap-6 items-center">
                <label className="text-xl font-semibold text-gray-700">Fee:</label>
                <span className="text-xl font-bold text-green-600">{`${fee} birr`}</span>

                <input
                  type="number"
                  onChange={handleAmount}
                  className="border border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 w-32"
                  placeholder="Enter amount"
                />

                <button
                  onClick={handleSubmit}
                  className="bg-[#AF89EA] text-white px-6 py-2 rounded-lg font-bold hover:bg-purple-700 transition-all duration-300"
                >
                  Submit Payment
                </button>
              <p
                className={`${
                  paymentFailed === "dont leave it empty" ||
                  paymentFailed === `you enterd ${paymentAmount} but you have to pay ${fee}`
                    ? "text-red-400"
                    : paymentFailed === "payment Successfull"
                     &&"text-green-400"
                    
                } text-center font-bold`}
              >
                {paymentFailed}
              </p>
                          
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
