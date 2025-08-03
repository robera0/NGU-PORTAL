import NavBar from "./NavBar"
import SideBar from "./SideBar"
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBiohazard } from '@fortawesome/free-solid-svg-icons'
import { useQuery } from "@tanstack/react-query"
import { useUser } from "./userContext"
import { useState } from "react"

const Notice = () => {
  const { slide, setSlide } = useUser() // Not used for individual toggling anymore
  const [openIndex, setOpenIndex] = useState(null)
      
  // fetch the messages
  const fetchDailyNotice = async () => {
    const res = await fetch('https://ngu-portal.onrender.com/api/notice')
    return res.json()
  }

  const { data: notices, isLoading, error } = useQuery({
    queryKey: ['notices'],
    queryFn: fetchDailyNotice
  })

  const handleSlide = (index) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }
   // fetch the students name
    const fetchStud=async()=>{
  
    const res = await fetch('https://ngu-portal.onrender.com/api/students')
  
    return res.json()
   }
   const {data:Stud ,loadingstudents,studserror}=useQuery({
    queryKey:'[stud]',
    queryFn:fetchStud
   })

 const NumofNotice =notices?.length

 const getGreeting =()=>{
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "Good morning";
  } else if (hour >= 12 && hour < 17) {
    return "Good afternoon";
  } else if (hour >= 17 && hour < 21) {
    return "Good evening";
  } else {
    return "Good night";
  }
}


  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className='lg:w-[17%] ml-5 mt-2 h-screen'>
        <div className="fixed w-[15%]">
          <SideBar />
        </div>
      </div>

      <div className='h-full w-[85%]'>
        <div className='mt-8'>
          <NavBar />
        </div>
        
        <div className="space-y-3 mt-10  ml-10">
     <div className="flex space-x-2 items-center">
        <div>
           <FontAwesomeIcon className="text-4xl text-[#552bcb]" icon={faBiohazard} />
        </div>
          <h1>Daily Notice</h1>
     </div>
   
       {Array.isArray(Stud) && Stud.map((s)=>(
                        <div className="flex"> 
                          <h1 className='text-2xl font-bold'>{`${getGreeting()},${" "}`}</h1>
                          <h1 className='text-2xl font-bold text-[#552bcb]' >{` ${s.id.firstname}!`}</h1>
                        </div>))}
    <p className="text-gray-500">{`${getGreeting() == "Good night"? `make sure u see all ${NumofNotice} of the messages before you sleep` :`today you need to follow up with ${NumofNotice}`} `}</p>
        </div>
    



        <div className="mt-8 space-y-6 px-8">
          {isLoading && <p>Loading notices...</p>}
          {error && <p className="text-red-500">Failed to load messages.</p>}

          {Array.isArray(notices) &&
            notices.map((notice, index) => (
              <div key={notice.id} className="space-y-2">
                <div
                  onClick={() => handleSlide(index)}
                  className={`flex items-center justify-between cursor-pointer px-6 py-4 rounded-xl shadow-sm transition ${
                    openIndex === index ? "bg-[#8200DB] text-white" : "bg-gray-200 hover:bg-[#8200DB] hover:text-white"
                  }`}
                >
                  <h2 className="text-lg font-sem-bold">{notice.title}</h2>
                  <div
                    className={`${
                      openIndex === index
                        ? 'rotate-[-90deg] text-[#8200DB] bg-white'
                        : 'rotate-0 bg-[#AF89EA] text-white'
                    } h-10 w-10 flex justify-center items-center rounded-full transition-transform duration-300`}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </div>
                </div>

                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    openIndex === index ? 'max-h-[1000px] px-6' : 'max-h-0 px-6'
                  }`}
                >
                  {openIndex === index && (
                    <div className="bg-white rounded-md p-4 shadow-md space-y-2">
                  <div className="flex space-x-2">
                                     <h3 className="font-bold text-purple-500"> Message: :</h3>
                                     <h3> {notice.message}</h3>
                                     </div>

                <div className="flex space-x-2">
                                     <h3 className="font-bold text-purple-500"> Notice :</h3>
                                     <h3> {notice.note}</h3>
                                     </div>
                
                 <div className="flex space-x-2">
                                     <h3 className="font-bold text-purple-500"> Details:</h3>
                                     <h3> {notice.details}</h3>
                                     </div>

                 <div className="flex space-x-2">
                                     <h3 className="font-bold text-purple-500"> Name :</h3>
                                     <h3 > {notice.date}</h3>
                                     </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Notice
