import html2pdf from 'html2pdf.js';
import { useState, useEffect } from "react";
import Loader from "../../Inputs/SubmitLoader";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useUser } from './userContext';
const RegistrationPayment = () => {
  const date = new Date();
  const navigate = useNavigate();
  const Month = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  const monthName = Month[date.getMonth()];
  const MonthNum = date.getUTCDate();
  const Year = date.getFullYear();

  const [paymentList, setPaymentList] = useState([]);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentFailed, setPaymentFailed] = useState(false);
  const [historyVisible, setHistoryVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showRedirectNotice, setShowRedirectNotice] = useState(false);
  const{newStudent}=useUser()

  const payenmtfee = 700;

  const handleAmount = (e) => {
    setPaymentAmount(e.target.value);
  };

  const handleHistory = () => {
    setHistoryVisible(prev => !prev);
  };

  const fetchCourses = async () => {
    const res = await fetch('https://ngu-portal.onrender.com/api/courses');
    return res.json();
  };

  const { data: courses, isLoading: loadingCourses, error: coursesError } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses
  });

  const totalCourseFee = courses?.reduce((sum, c) => sum + c.course_fee, 0) || 0;
  const newFee = totalCourseFee + payenmtfee;

  const handleDownloadPdf = async () => {
    const element = document.getElementById("main");
    html2pdf()
      .set({
        html2canvas: { scale: 3, useCORS: true, allowTaint: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
        margin: 0.2,
        filename: 'payment.pdf',
      })
      .from(element)
      .save();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!paymentAmount) {
      setPaymentFailed("Don't leave it empty");
      return;
    }

    if (Number(paymentAmount) !== newFee) {
      setPaymentFailed(`You entered ${paymentAmount}, but you have to pay ${newFee}`);
      return;
    }

    setIsLoading(true);
    setPaymentFailed(false);

    setTimeout(() => {
      setIsLoading(false);
      setPaymentFailed("Payment Successful");
      newStudent()
      setShowRedirectNotice(true);
    }, 2000); 
  };

  // Redirect after showing notice
  useEffect(() => {
    if (showRedirectNotice) {
      const timer = setTimeout(() => {
        navigate("/"); // Redirect to login/home page
      }, 5000); // 5 seconds
      return () => clearTimeout(timer);
    }
  }, [showRedirectNotice, navigate]);

  return (
    <div className="flex flex-wrap h-screen mt-10 flex-col items-center w-full ">

      {/* Top header */}
      <div style={{ 
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#6a0dad",
        color: "white",
        textAlign: "center",
        padding: "15px",
        fontWeight: "bold",
        zIndex: 1000
      }}>
        New Generation University College
      </div>

      {/* Redirect notice */}
      {showRedirectNotice && (
        <div style={{ 
          position: "fixed",
          top: 60,
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          backgroundColor: "white",
          color: "#6a0dad",
          textAlign: "center",
          padding: "20px 15px",
          fontWeight: "bold",
          borderRadius: "8px",
          boxShadow: "0 14px 10px rgba(0,0,0,0.2)",
          zIndex: 1000
        }}>
          You will be automatically redirected to the login page after a few seconds.
          Note:- MAKE SURE U CHANGE YOUR PASSWORD !
        </div>
      )}

      {!isLoading ? (
        <>
          <div className="flex flex-col justify-center items-center mt-8">
             <h1 className="text-[#552bcb] text-4xl mt-10 font-bold">Payment Info</h1> 
           <div className="flex mt-5 mb-5 flex-wrap justify-center gap-6 border  border-purple-500 rounded-lg p-6 shadow-lg w-full min-h-[200px]">
               <label className="text-[#552bcb] flex justify-center  items-centeritems-center mt-9 text-md  font-semibold">Selcet Payment method</label> 
               <div className="flex flex-wrap gap-26"> {/*Telebirr */}
                 <div className=" cursor-pointer hover:border-2 hover:border-[#8200DB] rounded-xl gap-10 mb-10 w-40 h-20 duration-100">
                 <img src="/TeleBirr Logo.png" alt="" className="w-full h-full object-contain" />
                  <p>Tele Birr</p> </div> {/*CBE Bank */} 
                  <div className=" cursor-pointer hover:border-2 hover:border-[#8200DB] rounded-xl gap-10 mb-10 w-40 h-20 duration-100"> 
                    <img src="/CBE Birr ( No background ) Logo.png" alt="" className="w-full h-full object-contain" /> 
                    <p>CBE Bank</p> </div> {/* Awash Bank */}
                     <div className=" cursor-pointer hover:border-2 hover:border-[#8200DB] rounded-xl gap-10 mb-10 w-40 h-20 duration-100"> 
                      <img src="/Awash International Bank Logo.png" alt="" className="w-full h-full object-contain" /> 
                      <p>Awash Bank</p> </div> {/*Abyssinia */} 
                      <div className=" cursor-pointer hover:border-2 hover:border-[#8200DB] rounded-xl gap-10 mb-10 w-40 h-20 duration-100"> 
                        <img src="/Bank of Abyssinia Logo.png" alt="" className="w-full h-full object-contain" /> 
                        <p>Abyssinia</p> 
                   </div>
                      </div>
                      </div>
            {/* Fees Table */}
            <div id="main" className="mb-6 w-full flex justify-center">
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
                  {coursesError && <tr><td colSpan={4}>Error: {coursesError.message}</td></tr>}
                  {loadingCourses && <tr><td colSpan={4} className="text-blue-400 text-center">Loading...</td></tr>}
                  {courses?.map((c, idx) => (
                    <tr key={idx} className="bg-white rounded-lg shadow-sm">
                      <td className="px-6 py-4">{c.course_id}</td>
                      <td className="px-6 py-4">{c.course_name}</td>
                      <td className="px-6 py-4">{c.credit_hours}</td>
                      <td className="px-6 py-4">{c.course_fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              onClick={handleDownloadPdf}
              className="bg-[#AF89EA] text-white px-6 py-2 rounded-lg font-bold hover:bg-purple-700 transition-all duration-300 mb-8"
            >
              Download Pdf
            </button>

            {/* Input Section */}
            <div className="flex flex-col items-center gap-6 mb-6">
              <div className="flex gap-6 mb-10 items-center">
                <label className="text-xl font-semibold text-gray-700">Fee:</label>
                <span className="text-xl font-bold text-green-600">{`Payment fee is ${payenmtfee} + ${totalCourseFee} = ${newFee} birr`}</span>

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
              </div>

              {paymentFailed && (
                <p className={`text-center font-bold mb-10 ${paymentFailed.includes("Successful") ? "text-green-400" : "text-red-400"}`}>
                  {paymentFailed}
                </p>
              )}
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
 
  );
};

export default RegistrationPayment;
