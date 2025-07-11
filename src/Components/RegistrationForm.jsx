import  { useState,useEffect } from 'react'
import SideBar from './SideBar'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useUser } from './userContext'

const RegistrationForm = () => {

    const Month = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];
    const date = new Date() 
    
   const MonthNum = date.getUTCDate()
  
   const [slide, setSlide] = useState(false)

     const startYear = 2006;
  const currentYear = new Date().getFullYear();

  const years = Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);


  const handleSlide = () => {
    setSlide(prev => !prev)
  }

  const {country,setCountry}=useUser()

  const countryApi ='https://countriesnow.space/api/v0.1/countries/population'

    const  fetchApi = async ()=>{

      try{

         const res = await fetch(countryApi);

         const data =await res.json()

         const countries = data.data
         .map(items=>items.country)
          .filter(Boolean)
          .sort();

         setCountry(c=>[...new Set([...c, ...countries])])

      }
      catch(error){

        console.error (error)


      }


     
     }

    useEffect(() => {
  fetchApi();
}, []);



  return (
    <div className='flex'>
      {/* Sidebar */}
      <div className='lg:w-[17%] ml-5 mt-5 h-screen'>
        <div className="fixed w-[15%]">
          <SideBar />
        </div>
      </div>

      {/* Main Content */}
      <div className='mt-2 shadow-xl pl-4 rounded-xl h-full w-[85%] flex flex-col overflow-y-auto'>
        {/* Header */}
        <div className='pt-10 border-b border-b-gray-200'>
          <div className='flex mb-5 justify-between'>
            {/* Left Logo and Title */}
            <div className='flex w-[50%] gap-6'>
              <div
                style={{ backgroundImage: `url("src/assets/download.jpeg")` }}
                className="w-28 h-28 rounded-full bg-gray-200 bg-center bg-cover bg-no-repeat"
              ></div>
              <div className='flex items-center'>
                <h1 className='font-bold text-xl'>New Generation University College</h1>
              </div>
            </div>

            {/* Right Contact Info */}
            <div className='w-[50%] text-right font-medium text-gray-600 pr-10 space-y-1 text-sm'>
              <h1 className="text-base font-semibold text-gray-700">ACME CITY COLLEGE</h1>
              <p>123 Maple Street, Houston, TX, 77002</p>
              <p>example@example.com</p>
              <p>www.example.com</p>
              <p>(123) 1234567</p>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className='flex justify-center mt-8'>
          <h1 className='font-bold text-3xl'>STUDENT REGISTRATION FORM</h1>
        </div>

        {/* Basic Info Section */}
        <div className={`  h-full mt-10 px-8 transition-translate duration-300 ` }>
          <div
            onClick={handleSlide}
            className={`${slide ? "text-white " : "-translate-6 "} flex items-center justify-between cursor-pointer px-6 py-4 bg-gray-200 rounded-xl shadow-sm hover:bg-[#8200DB] hover:text-white transition`}
           style={slide ? { backgroundColor: "#8200DB" } : {}}
          >
            <h2 className='text-xl font-semibold'>Basic Information</h2>
            <div className={` ${slide ? 'rotate-[-90deg] text-[#8200DB] font-bold  bg-white' : 'rotate-0 bg-[#AF89EA]'} h-10 w-10 flex justify-center items-center rounded-full  transition-transform duration-300`}>
              <FontAwesomeIcon className={`${slide && "" }`} icon={ faArrowLeft} />
            </div>
          </div>

          {/*Slide Down Form Section */}
          <div
            className={`transition-all duration-500 overflow-hidden  ${
              slide ? 'max-h-[4000px] mt-6 px-6 overflow-y-auto' : 'max-h-0 px-6'
            }`}
          >
            {slide && (
              <>
                <p className='font-semibold mb-3'>Full Name</p>
                <div className='flex flex-wrap gap-6'>
                  {/* First Name */}
                  <div className='space-y-1'>
                    <input
                      className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      type="text"
                      required
                    />
                    <p className='text-sm text-gray-500'>First Name</p>
                  </div>

                  {/* Middle Name */}
                  <div className='space-y-1'>
                    <input
                      className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      type="text"
                      required
                    />
                    <p className='text-sm text-gray-500'>Middle Name</p>
                  </div>

                  {/* Last Name */}
                  <div className='space-y-1'>
                    <input
                      className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      type="text"
                      required
                    />
                    <p className='text-sm text-gray-500'>Last Name</p>
                  </div>
                </div>

                
                      {/*Student number */}
                  <div className='flex flex-wrap gap-26'>
                     <div className='space-y-1'>
                       <p className='font-semibold mb-3 mt-10'>Student Number</p>
                    <input
                      className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      type="text"
                      required
                    />
                    <p className='text-sm text-gray-500'>eg : 20/2324</p>
                     </div>
                    
                    
                         {/*Year Level*/}
                   
                         <div className='space-y-1 mt-10'>
                             <p className='font-semibold mb-3'>Year Level</p>
                             <select name="" id=""
                              className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            type="text"
                            required
                            >
                              <option className='text-gray-500' value="">Please Selcet</option>
                              <option  className='text-gray-500' value="1st year">1st year</option>
                              <option  className='text-gray-500' value="2nd year">2nd year</option>
                              <option  className='text-gray-500' value="3rd year">3rd year</option>
                              <option  className='text-gray-500' value="4th year">4th year</option>
                              <option  className='text-gray-500' value="5th year">5th year</option>
                             </select>
                          
                         <p className='text-sm text-gray-500'>1 year (if your a freshman)</p>
                         </div>

                     
                 
                 
                  </div>

                        {/*Degree Program*/}
                  <div className='flex flex-wrap gap-26'>

                         <div className='space-y-1 mt-10'>
                             <p className='font-semibold mb-3'>Degree Program</p>
                             <select name="" id=""
                              className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            type="text"
                            required
                            >
                              <option className='text-gray-500' value="">Please Selcet</option>
                              <option className='text-gray-500' value="cs">Computer Science</option>
                              <option className='text-gray-500' value="bm">Business Management</option>
                              <option className='text-gray-500' value="eng">Engineering</option>
                             </select>
                          
                         <p className='text-sm text-gray-500'>1 year (if your a freshman)</p>
                         </div>
                    
                         {/*email*/}
                             <div className='space-y-1'>
                                <p className='font-semibold mb-3 mt-10'>Email</p>
                              <input
                                className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                type="email"
                                required
                              />
                              <p className='text-sm text-gray-500'>username@gamil.com</p>
                            </div>
                         
                          {/*Phone Number */}
                        <div className='space-y-1'>
                                <p className='font-semibold mb-3 mt-10'>Phone Number</p>
                              <input
                                className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                type="tel"
                                pattern="^(\+2519\d{8})$"
                                inputmode="numeric"
                                required
                              />
                              <p className='text-sm text-gray-500'>+251</p>
                            </div>

     
                     
                 
                 
                  </div>

                     <div className='flex flex-wrap gap-26'>
                         
                          {/*Birth Month */}
                          <div className='space-y-1'>
                                      <p className='font-semibold mb-3 mt-10'>Birth Date</p>
                                      <select name="" id=""
                                              className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                              type="text"
                                              required >
                                            
                                          <option value="">Please Select Month</option>
                                          
                                          {Month.map((m,index)=>(
                                            
                                            <option key={index} value={m}>{m}</option>
                                              
                                          )
                    
                                          )}
                                          
                                      
                                      
                                    </select> 

                             </div>

                                     {/*Birth Day*/} 
                                 
                                 <div className='space-y-1'>
                                        <p className='font-semibold mb-3 mt-10'>Birth Date</p>
                                      <select name="" id=""
                                            className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            type="text"
                                            required >                
                                          
                                        <option value="">Please Select Day</option>
                                         
                                               
                                          {Month.map((m,index)=>(
                                            
                                            <option key={index} value={index}>{index}</option>
                                              
                                          )
                    
                                          )}
                                        
                                        </select>  
                             
                                 
                                   </div>

                                    {/*Birth year*/} 

                                   <div className='space-y-1'>
                                        <p className='font-semibold mb-3 mt-10'>Birth Year</p>
                                      <select name="" id=""
                                            className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            type="text"
                                            required >                
                                          
                                        <option value="">Please Select Year</option>
                                         
                                               
                                          {years.map((year,index)=>(
                                            
                                            <option key={index} value={year}>{year}</option>
                                              
                                          )
                    
                                          )}
                                        
                                        </select>  
                             
                                 
                                   </div>
                        
                     </div>

                        <div className=' flex-wrap gap-26'>

                              {/*Permanent Address*/} 
                                   <div className='space-y-1'>
                                        <p className='font-semibold mb-3 mt-10'>Permanent Address</p>
                                        <input
                                    className="w-86 h-10 px-90 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                      type="text"
                                    />


                                    </div>
                                {/*City*/} 

                                    <div className=' flex flex-wrap gap-26 '>
                                      
                                       <div className='space-y-1'>
                                        <p className='font-semibold mb-3 mt-5'>City</p>
                                        <input
                                    className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                      type="text"
                                    />
                                 
                                        </div>

                                          <div className='space-y-1'>
                                            <p className='font-semibold mb-3 mt-5'>Country</p>
                                               <select name="" id=""
                                            className="w-56 h-10 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            type="text"
                                            required > 

                                              <option value="">Select Country</option>
                                                 {country.map((c,index)=>(
                                                    
                                                     <option value={c}>{c}</option>

                                                 ))}

                                            </select>
                                      
                                        </div>


                                  

                                    </div>
        
        

                        </div>



                 
              </>

            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationForm
